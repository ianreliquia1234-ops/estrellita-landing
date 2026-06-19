export const scrollToPlanos = () => {
  const planosSection = document.getElementById('planos')
  if (planosSection) {
    const offset = 60 // Offset para mobile header
    const elementPosition = planosSection.getBoundingClientRect().top + window.scrollY
    const scrollPosition = elementPosition - offset

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    })
  }
}
