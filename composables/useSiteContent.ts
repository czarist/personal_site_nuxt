import { enContent } from '~/i18n/en'
import { ptContent } from '~/i18n/pt'

export function useSiteContent() {
  const { locale } = useLocale()
  const content = computed(() => (locale.value === 'pt' ? ptContent : enContent))
  return { content }
}
