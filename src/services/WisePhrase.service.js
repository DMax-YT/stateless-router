const phrases = [
  {
    button: 'Рассеять',
    alert: 'П-п-поверхностное рассеивание'
  },
  {
    button: 'Сражение',
    alert: 'О да, эта легендарная битва за Кавуаку'
  },
  {
    button: 'Sunday',
    alert: 'Воскресенье, воскресенье меня'
  },
  {
    button: 'Diamonds!',
    alert: 'Тибе хочеш алмас?'
  },
]

export const getPhrase = () => {
  const randomIndex = Math.floor(Math.random() * phrases.length)
  return phrases.at(randomIndex)
}
