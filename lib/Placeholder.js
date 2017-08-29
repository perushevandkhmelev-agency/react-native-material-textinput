import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

export default class Placeholder extends Component {
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
      placeholderColor
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
          fontFamily,
          fontSize,
          fontWeight
        }}
        numberOfLines={1}>
        {placeholder}
      </Text>
    )
  }
}

Placeholder.propTypes = {
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.string
}

Placeholder.defaultProps = {
  placeholderColor: 'gray'
}
