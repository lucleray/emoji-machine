import React from 'react'
import styled from 'styled-components/macro'

import emojis from '../lib/emojis'

import Hero from '../components/Hero'
import Section from '../components/Section'
import EmojiList from '../components/EmojiList'
import EmojiTextarea from '../components/EmojiTextarea'
import EmojiSuggestions from '../components/EmojiSuggestions'

const example =
  'Love this sport for the highs and the lows. Today was an ultimate low and a mistake I’ll learn from.'

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`

const TextareaExample = styled.p`
  opacity: 0.5;
  cursor: pointer;
`

const More = styled.div`
  font-size: 1em;
  background: ${p => (p.light ? 'white' : '#000')};
  border-radius: 5px;
  color: ${p => (p.light ? 'black' : 'white')};
  border: 1px solid black;
  padding: 5px 20px;
`

export default class IndexPage extends React.Component {
  state = {
    text: ''
  }

  updateText = text => {
    this.setState({ text })
  }

  appendText = _text => {
    this.setState(({ text }) => ({ text: text + _text }))
  }

  render() {
    return (
      <div>
        <Hero>
          <Section>
            <Title>
              EMOJI
              <br />
              MACHINE
              <br />
              🎰
            </Title>
          </Section>
          <Section marginTop={5}>
            <h2>Insert your thoughts...</h2>
            <EmojiTextarea
              placeholder={'Say something'}
              updateText={this.updateText}
              text={this.state.text}
            />
            <TextareaExample onClick={() => this.updateText(example)}>
              Example: {example}
            </TextareaExample>
          </Section>
          <Section>
            <h2>The emoji machine 🎰 suggests these emojis:</h2>
            <EmojiSuggestions
              appendText={this.appendText}
              text={this.state.text}
            />
          </Section>
          <Section marginTop={5}>
            <More light>
              <h2>How does this work?</h2>
              <p>
                We gather big amount of tweets with emojis and find out which{' '}
                <b>emojis</b> are associated the most with which words.
              </p>
              <p>
                Then, we compare it with what you enter in the box 👆 and we
                suggest emojis.
              </p>
            </More>
          </Section>

          <Section marginTop={1}>
            <More light>
              <h2>Why is this useful?</h2>
              <p>It's not really useful but it's fun.</p>
              <p>
                That being said, it could be a convenient way to avoid scrolling
                through all the emojis available to find the perfect one.
              </p>
            </More>
          </Section>

          <Section marginTop={1}>
            <More light>
              <h2>Which emojis are supported?</h2>
              <p>That's the full list:</p>
              <EmojiList />
            </More>
          </Section>
          <Section marginTop={3}>
            <p>Made by lucleray with next.js and styled-components</p>
          </Section>
        </Hero>
      </div>
    )
  }
}
