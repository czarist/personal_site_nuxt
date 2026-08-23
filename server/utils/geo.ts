import type { H3Event } from 'h3'
import { getRequestIP } from 'h3'

const LOCAL_IP_PREFIXES = ['127.', '::1', '10.', '192.168.', '::ffff:127.']
const CACHE_TTL_MS = 1000 * 60 * 60 * 12

const cache = new Map<string, { country: string; expiresAt: number }>()

async function lookupCountry(ip: string): Promise<string | null> {
  try {
    const data = await $fetch<{ country_code?: string }>(`https://ipwho.is/${ip}`, { timeout: 3000 })
    if (data.country_code) return data.country_code
  } catch {
    // fall through to the next provider
  }

  try {
    const data = await $fetch<{ country_code?: string }>(`https://ipapi.co/${ip}/json/`, { timeout: 3000 })
    if (data.country_code) return data.country_code
  } catch {
    // both providers failed
  }

  return null
}

export async function resolveCountryForEvent(event: H3Event): Promise<string> {
  const ip = getRequestIP(event, { xForwardedFor: true })

  if (!ip || LOCAL_IP_PREFIXES.some((prefix) => ip.startsWith(prefix))) {
    return 'BR'
  }

  const cached = cache.get(ip)
  if (cached && cached.expiresAt > Date.now()) {
    return cached.country
  }

  const country = (await lookupCountry(ip)) ?? 'BR'
  cache.set(ip, { country, expiresAt: Date.now() + CACHE_TTL_MS })

  return country
}
