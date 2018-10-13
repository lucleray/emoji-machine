import React from 'react'
import styled from 'styled-components/macro'

const Textarea = styled.textarea`
  font-size: 1.2em;
  width: 100%;
  box-sizing: border-box;
  height: 5rem;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  padding: 10px;
  resize: none;
  overflow-y: auto;
  overflow-x: auto;

  &:focus {
    outline: 0;
  }
`

const EmojiTextarea = ({ text, updateText, ...props }) => (
  <Textarea
    value={text}
    onChange={event => updateText(event.target.value)}
    {...props}
  />
)

export default EmojiTextarea
