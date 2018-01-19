# Styled Genesis Component

A styled-component base which gives your component props based css capabilities

## Usage ##

```jsx
npm i styled-genesis --save
```

## Usage ##

In your component:

```jsx
import React from 'react'
import El from 'styled-genesis'

const Container = StyledGenesis.withComponent('h1')

const Title = (props) => <Container mb={1} color='primary' size='large' {...props} />

export default Title
```

Later on, while using the component:

```jsx
import React from 'react'
import {ThemeProvider} from 'styled-components'
import Title from './Title'

const theme = {
  colors: {
    gray: '#999',
    text: '#000',
    primary: '#00AEEE',
    secondary: '#FF931E'
  },
  sizes: {
    small: 1.6,
    normal: 1.8,
    large: 2.4
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Title>Default title</Title>
        <Title color='secondary'>Title with secondary color from theme.colors.secondary</Title>
        <Title color='secondary' mt={2}>Title with margin-top: 2rem</Title>
      </div>
    </ThemeProvider>
  )
}
```

## Supported properties

### Margin (Number)

* m - margin
* mt - margin-top
* mr - margin-right
* mb - margin-bottom
* ml - margin-left

### Padding (Number)

* p - padding
* pt - padding-top
* pr - padding-right
* pb - padding-bottom
* pl - padding-left

### Size (String / Number)

Size as number or predefined sizes in `theme.sizes`

* size - font-size

### Color (String)

Text-color as string or predefined colors in `theme.colors`

* color - text-color

### Bg (String)

background-color as string or predefined colors in `theme.colors`

* bg - background-color

### Alignment (Bool)

* left - text-align: left
* center - text-align: center
* right - text-align: right

### Text-transform (Bool)

* bold - font-weight: bold
* em - font-style: italic
* upcase - text-transform: uppercase

### Display (string)

block, inline-block, flex, etc

* d - display

### Flexbox (string)

Additional flex-properties

* flex - bool or string
* alignItems - string
* justifyContent - string

## Demo

[See demo](http://gerhardsletten.github.io/styled-genesis/)

## breakpoint rules [todo]

Next step should be to support responsive rules but at a custom import so you don't have to load extra if you are on the mobile first wagon.

```jsx
import El from 'styled-genesis/lib/responsive'

<El d='block' xs-d='inline-block'>
  I'm inline on desktop but block on your phone!
</El>
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
