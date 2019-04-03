import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    error: PropTypes.string,
    errorIcon: PropTypes.node,
    errorPaddingTop: PropTypes.number,
    errorColor: PropTypes.string,
    errorFontSize: PropTypes.number,
    fontFamily: PropTypes.string
  }

  static defaultProps = {
    errorPaddingTop: 8,
    errorColor: '#fc1f4a',
    errorFontSize: 12
  }

  render() {
    let { error, errorIcon, errorColor, errorPaddingTop, errorFontSize, fontFamily } = this.props

    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: errorPaddingTop}}>
        {errorIcon}
        <Text
          style={{
            paddingLeft: errorIcon ? errorPaddingTop : 0,
            color: errorColor,
            fontSize: errorFontSize,
            fontFamily: fontFamily,
          }}>
          {error || ' '}
        </Text>
      </View>
    )
  }
}
