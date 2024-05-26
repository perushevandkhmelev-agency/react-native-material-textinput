# Material Design Text Input

[![npm version][npm-img]][npm-url]
[![npm downloads][npm-dls]][npm-url]
[![github issues][issues-img]][issues-url]
[![bundlephobia][bundlephobia-img]][bundlephobia-url]
[![license][license-img]][license-url]

Textual input component for React Native (iOS & Android).

![example][example-url]

## Usage

```typescript
import React, { useState } from 'react'
import TextInput, { TextInputRef } from 'react-native-material-textinput'

const Example = () => {
  const inputRef = useRef<TextInputRef>(null)
  const [name, setName] = useState('')

  const handleInputChange = (value: typeof name) => setName(value)

  return <TextInput ref={inputRef} label="Name" value={name} onChangeText={handleInputChange} />
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

| Name                | Type              | Default  |
| :------------------ | :---------------- | :------- |
| ref                 | Ref<TextInputRef> |
| minHeight           | Number            |
| height              | Number            |
| maxHeight           | Number            |
| marginTop           | Number            |
| marginRight         | Number            |
| marginBottom        | Number            | `8`      |
| marginLeft          | Number            |
| paddingTop          | Number            | `20`     |
| paddingRight        | Number            | `0`      |
| paddingBottom       | Number            | `8`      |
| paddingLeft         | Number            | `0`      |
| color               | String            | `black`  |
| activeColor         | String            |
| fontFamily          | String            |
| fontSize            | Number            | `15`     |
| fontWeight          | String or Number  | `normal` |
| onFocus             | Function          |
| onBlur              | Function          |
| onChangeText        | Function          |
| onContentSizeChange | Function          |

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

## RTL

Supported using I18nManager from react-native

## License

The MIT License.

See [LICENSE](LICENSE)

[npm-url]: https://www.npmjs.com/package/react-native-material-textinput
[npm-img]: https://img.shields.io/npm/v/react-native-material-textinput.svg?style=flat
[npm-dls]: https://img.shields.io/npm/dt/react-native-material-textinput.svg?style=flat
[issues-url]: https://github.com/perushevandkhmelev-agency/react-native-material-textinput/issues
[issues-img]: https://img.shields.io/github/issues/perushevandkhmelev-agency/react-native-material-textinput.svg?style=flat
[bundlephobia-url]: https://bundlephobia.com/package/react-native-material-textinput
[bundlephobia-img]: https://img.shields.io/bundlephobia/min/react-native-material-textinput
[license-url]: https://github.com/perushevandkhmelev-agency/react-native-material-textinput/blob/main/LICENSE
[license-img]: https://img.shields.io/npm/l/react-native-material-textinput
[example-url]: https://github.com/perushevandkhmelev-agency/react-native-material-textinput/assets/20732110/77bfb57e-0d1e-42f0-a5e8-c2d4b82ce4df
