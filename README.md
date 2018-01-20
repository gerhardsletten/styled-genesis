# Styled Genesis Component

A styled-component base which gives your component props based css capabilities

## Install ##

```jsx
npm i styled-genesis --save
```

## Usage ##

Your Title.js component

```jsx
import React from 'react'
import El from 'styled-genesis'

const Container = El.withComponent('h1').extend`
  // you can add styles here..
`

const Title = (props) => {
  return (
    <Container
       // .. or define overrideable styles here
      mb={1} // margin-bottom: 1rem
      color='primary' // text-color from theme.colors or a hex-value
      size='large' // font-size from theme.sizes or a number: 2 will become font-size: 2rem;
      // .. and override and aditional props here
      {...props}
    />
  )
}

// You can now adjust its css props where you need it to behave different
<Title color='secondary' center mt={2}>
  Centered Title with secondary theme color, text-align: center og margin-top: 2rem
</Title>
```

## Create your own wrapper with additonal props ##

Wrap this module and extend even further:

```jsx
import El from 'styled-genesis'

const MyStyledGenesis = El.extend`
  ${props => props.float ? `float: ${props.float};` : ''}
`
// <MyStyledGenesis float='left' /> <-- float: left;

export default MyStyledGenesis

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
