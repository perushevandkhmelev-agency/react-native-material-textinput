# Material Design Text Input

Textual input component for React Native (iOS & Android).

## Usage

```javascript
import React, { Component } from 'react'
import TextInput from 'react-native-material-textinput'

export default class Example extends Component {
  state = {
    name: ''
  }

  render() {
    let { name } = this.state

    return (
      <TextInput
        label="Name"
        value={name}
        onChangeText={name => this.setState({ name })}
      />
    )
  }
}
```

## Properties

### Label

name                  | type               | default
:-------------------- |:------------------ |:------------------
label                 | String             |
labelDuration         | Number             | `200`
labelColor            | String             | `gray`
labelActiveTop        | Number             | `-18`
labelActiveColor      | String             | `#3f51b5`
labelActiveScale      | Number             | `0.8`

### Placeholder

Name                  | Type               | Default
:-------------------- |:------------------ |:----------
placeholder           | String             |
placeholderColor      | String             | `gray`

### Input

Name                  | Type               | Default
:-------------------- |:------------------ |:----------
minHeight             | Number             |
height                | Number             |
maxHeight             | Number             |
marginTop             | Number             |
marginRight           | Number             |
marginBottom          | Number             | `8`
marginLeft            | Number             |
paddingTop            | Number             | `20`
paddingRight          | Number             | `0`
paddingBottom         | Number             | `8`
paddingLeft           | Number             | `0`
color                 | String             | `black`
activeColor           | String             |
fontFamily            | String             |
fontSize              | Number             | `15`
fontWeight            | String or Number   | `normal`
onFocus               | Function
onBlur                | Function
onChangeText          | Function
onContentSizeChange   | Function

### Underline

Name                  | Type               | Default
:-------------------- |:------------------ |:----------
underlineDuration     | Number             | `200`
underlineHeight       | Number             | `1`
underlineColor        | String             | `gray`
underlineActiveColor  | String             | `#3f51b5`
underlineActiveHeight | Number             | `2`

### ErrorHelper

Name                  | Type               | Default
:-------------------- |:------------------ |:----------
error                 | String             |
errorPaddingTop       | Number             | `8`
errorColor            | String             | `#fc1f4a`
errorFontSize         | Number             | `12`

Other [TextInput](https://facebook.github.io/react-native/docs/textinput.html#props) properties will also work

## Example

```bash
git clone https://github.com/perushevandkhmelev-agency/react-native-material-textinput
cd react-native-material-textinput/example
yarn # or npm install
yarn start # or npm start
```

## License

The MIT License.

See [LICENSE](LICENSE)
