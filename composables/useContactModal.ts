export function useContactModal() {
  const isOpen = useState('contact-modal', () => false)
  return { isOpen }
}
