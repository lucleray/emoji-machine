import React from 'react'
import styled from 'styled-components/macro'
import debounce from 'lodash.debounce'

import suggest from '../lib/suggest'

const StyledEmojiSuggestions = styled.div`
  text-align: center;
`

const Emoji = styled.span`
  margin-right: 1rem;
  cursor: pointer;
  font-size: 2em;
`

const LightText = styled.span`
  opacity: 0.5;
`

class EmojiSuggestions extends React.Component {
  state = {
    emojis: []
  }

  suggest = text => {
    const emojis = suggest(text).map(({ emoji }) => emoji)
    this.setState({ emojis })
    console.log(emojis)
  }

  debouncedSuggest = debounce(this.suggest, 300)

  componentWillMount() {
    this.suggest(this.props.text)
  }

  componentDidUpdate(prevProps) {
    if (this.props.text !== prevProps.text) {
      this.debouncedSuggest(this.props.text)
    }
  }

  render() {
    let EmojiList

    if (this.state.emojis.length === 0) {
      EmojiList = <LightText>No emoji suggested 😢</LightText>
    } else {
      EmojiList = this.state.emojis.map(emoji => (
        <Emoji key={emoji} onClick={() => this.props.appendText(emoji)}>
          {emoji}
        </Emoji>
      ))
    }

    return <StyledEmojiSuggestions>{EmojiList}</StyledEmojiSuggestions>
  }
}

export default EmojiSuggestions
