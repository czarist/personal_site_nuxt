import { defineEventHandler, getCookie, getRequestHeader, sendRedirect, setCookie } from 'h3'
import { resolveCountryForEvent } from '../utils/geo'

const BOT_UA_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegrambot|embedly|quora|pinterest|vkshare|w3c_validator|ia_archiver|discordbot|slackbot|redditbot|applebot/i

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export default defineEventHandler(async (event) => {
  if (event.path !== '/') return

  if (getCookie(event, 'site-locale')) return

  const userAgent = getRequestHeader(event, 'user-agent') ?? ''
  if (BOT_UA_PATTERN.test(userAgent)) return

  const country = await resolveCountryForEvent(event)
  const locale = country === 'BR' ? 'pt' : 'en'

  setCookie(event, 'site-locale', locale, {
    path: '/',
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
  })

  if (locale === 'en') {
    await sendRedirect(event, '/en', 302)
  }
})
