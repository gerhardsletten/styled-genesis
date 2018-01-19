import React, {Component} from 'react'
import El from '../src'

const Container = El.withComponent('div').extend`
  min-height: 100vh;
`
const RawTitle = El.withComponent('h1')
const Title = (props) => <RawTitle color='primary' mb={1} bold size='large' {...props} />
const SubTitle = El.withComponent('h2').extend`
  color: pink; // <-- This rules can not be overwritten
  font-size: ${props => props.size || props.theme.sizes.normal}rem;
`
const Intro = El.withComponent('p')
const Example = (props) => <El p={1} mb={1} bg='#fff' {...props} />
const ExampleTitle = (props) => <El mb={0.5} size='small' {...props} />

class App extends Component {
  render () {
    return (
      <Container p={2} bg='lightGray'>
        <Title>Styled Genesis</Title>
        <Intro mb={2}>A styled-component base which gives your component props based css capabilities</Intro>
        <Example>
          <ExampleTitle>Customize title</ExampleTitle>
          <Title size='normal' mb={0} color='black' bold>Styled Genesis Component</Title>
        </Example>
        <Example>
          <ExampleTitle>Default SubTitle</ExampleTitle>
          <SubTitle>Styled Genesis Component</SubTitle>
        </Example>
        <Example>
          <ExampleTitle>Default SubTitle with modifications (only size works, color can not be overwritten)</ExampleTitle>
          <SubTitle color='primary' size='large'>Styled Genesis Component</SubTitle>
        </Example>
        <Example>
          <ExampleTitle>Flexbox stuff</ExampleTitle>
          <El d='flex' p={1} bg='gray'>
            <El d='flex' mr={1} p={1} bg='primary'>
              Element 1
            </El>
            <El flex={1} p={1} bg='primary'>
              Element 2
            </El>
          </El>
        </Example>
      </Container>
    )
  }
}

export default App
