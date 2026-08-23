import type { Locale } from '~/types/i18n'

export function useLocale() {
  const route = useRoute()
  const locale = computed<Locale>(() => (route.params.locale === 'en' ? 'en' : 'pt'))

  function setLocale(next: Locale) {
    const cookie = useCookie<Locale>('site-locale', {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
      path: '/',
    })
    cookie.value = next
    return navigateTo(next === 'en' ? '/en' : '/')
  }

  return { locale, setLocale }
}
