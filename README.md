# Material Design Text Input

[![npm version][npm-img]][npm-url]
[![npm downloads][npm-dls]][npm-url]
[![github issues][issues-img]][issues-url]

Textual input component for React Native (iOS & Android).

## Usage

```javascript
import React, { useState } from 'react'
import TextInput from 'react-native-material-textinput'

const Example = () => {
  const [name, setName] = useState('')

  const handleInputChange = (value) => setName(value)

  return <TextInput label="Name" value={name} onChangeText={handleInputChange} />
}

export default Example
```

## Properties

### Label

| name             | type   | default   |
| :--------------- | :----- | :-------- |
| label            | String |
| labelDuration    | Number | `200`     |
| labelColor       | String | `gray`    |
| labelActiveTop   | Number | `-18`     |
| labelActiveColor | String | `#3f51b5` |
| labelActiveScale | Number | `0.8`     |

### Placeholder

| Name             | Type   | Default |
| :--------------- | :----- | :------ |
| placeholder      | String |
| placeholderColor | String | `gray`  |

### Input

| Name                | Type             | Default  |
| :------------------ | :--------------- | :------- |
| minHeight           | Number           |
| height              | Number           |
| maxHeight           | Number           |
| marginTop           | Number           |
| marginRight         | Number           |
| marginBottom        | Number           | `8`      |
| marginLeft          | Number           |
| paddingTop          | Number           | `20`     |
| paddingRight        | Number           | `0`      |
| paddingBottom       | Number           | `8`      |
| paddingLeft         | Number           | `0`      |
| color               | String           | `black`  |
| activeColor         | String           |
| fontFamily          | String           |
| fontSize            | Number           | `15`     |
| fontWeight          | String or Number | `normal` |
| onFocus             | Function         |
| onBlur              | Function         |
| onChangeText        | Function         |
| onContentSizeChange | Function         |

### Underline

| Name                  | Type   | Default   |
| :-------------------- | :----- | :-------- |
| underlineDuration     | Number | `200`     |
| underlineHeight       | Number | `1`       |
| underlineColor        | String | `gray`    |
| underlineActiveColor  | String | `#3f51b5` |
| underlineActiveHeight | Number | `2`       |

### ErrorHelper

| Name            | Type   | Default   |
| :-------------- | :----- | :-------- |
| error           | String |
| errorPaddingTop | Number | `8`       |
| errorColor      | String | `#fc1f4a` |
| errorFontSize   | Number | `12`      |

Other [TextInput](https://facebook.github.io/react-native/docs/textinput.html#props) properties will also work

## License

The MIT License.

See [LICENSE](LICENSE)

[npm-url]: https://www.npmjs.com/package/react-native-material-textinput
[npm-img]: https://img.shields.io/npm/v/react-native-material-textinput.svg?style=flat
[npm-dls]: https://img.shields.io/npm/dt/react-native-material-textinput.svg?style=flat
[issues-url]: https://github.com/perushevandkhmelev-agency/react-native-material-textinput/issues
[issues-img]: https://img.shields.io/github/issues/perushevandkhmelev-agency/react-native-material-textinput.svg?style=flat
