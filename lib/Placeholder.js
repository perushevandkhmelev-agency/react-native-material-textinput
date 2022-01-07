import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const Placeholder = ({
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
}) => {
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

Placeholder.propTypes = {
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.string
}

Placeholder.defaultProps = {
  placeholderColor: 'gray'
}

export default Placeholder
