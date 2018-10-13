import weights from './weights'
import tokenize from './tokenize'

const suggest = input => {
  // tokenize input
  const tokens = tokenize(input)

  const emojis = {}

  for (let token of tokens) {
    for (let emoji in weights[token]) {
      console.log(`${token} - ${emoji} - ${weights[token][emoji]}`)
      if (!emojis[emoji]) {
        emojis[emoji] = 0
      }
      emojis[emoji] += 100 + weights[token][emoji]
    }
  }

  const arr = []

  for (let emoji in emojis) {
    arr.push({ emoji, v: emojis[emoji] })
  }

  arr.sort((a, b) => b.v - a.v)

  // return max 5 recommended emojis
  return arr.slice(0, 5)
}

export default suggest
