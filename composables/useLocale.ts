import type { Locale } from '~/types/i18n'

const STORAGE_KEY = 'site-locale'
const STORAGE_TTL_MS = 1000 * 60 * 60 * 24

interface StoredLocale {
  locale: Locale
  detectedAt: number
  manual: boolean
}

function readStorage(): StoredLocale | null {
  if (import.meta.server) return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as StoredLocale) : null
  } catch {
    return null
  }
}

function writeStorage(next: Locale, manual: boolean) {
  if (import.meta.server) return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ locale: next, detectedAt: Date.now(), manual }))
  } catch {
    // Ignore storage failures (private browsing, quota, etc).
  }
}

export function useLocale() {
  const locale = useState<Locale>('locale', () => 'pt')
  const isReady = useState<boolean>('locale-ready', () => false)

  async function detectLocale() {
    if (import.meta.server || isReady.value) return

    const stored = readStorage()
    const isFresh = !!stored && Date.now() - stored.detectedAt < STORAGE_TTL_MS
    if (stored && (stored.manual || isFresh)) {
      locale.value = stored.locale
      isReady.value = true
      return
    }

    let detected: Locale
    try {
      const { country } = await $fetch<{ country: string }>('/api/geo')
      detected = country === 'BR' ? 'pt' : 'en'
    } catch {
      detected = 'pt'
    }

    locale.value = detected
    writeStorage(detected, false)
    isReady.value = true
  }

  function setLocale(next: Locale) {
    locale.value = next
    writeStorage(next, true)
  }

  return { locale, isReady, detectLocale, setLocale }
}
