import React from 'react'
import styled from 'styled-components/macro'

import emojis from '../lib/emojis'

const StyledEmojiList = styled.div`
  font-size: 1.5em;
`

const EmojiList = () => (
  <StyledEmojiList>{emojis.map(emoji => emoji)}</StyledEmojiList>
)

export default EmojiList
