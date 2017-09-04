import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    placeholderColor: PropTypes.string
  }

  static defaultProps = {
    placeholderColor: 'gray'
  }

  render() {
    let {
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      fontFamily,
      fontSize,
      fontWeight,
      placeholder,
      placeholderColor,
      hasValue,
      focused
    } = this.props

    return (
      <Text
        style={{
          position: 'absolute',
          top: 0,
          paddingTop,
          paddingRight,
          paddingBottom,
          paddingLeft,
          color: placeholderColor,
          backgroundColor: 'transparent',
          opacity: focused && !hasValue ? 1 : 0,
          fontFamily,
          fontSize,
          fontWeight
        }}
        pointerEvents="none"
        numberOfLines={1}>
        {placeholder}
      </Text>
    )
  }
}
