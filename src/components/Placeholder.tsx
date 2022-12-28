import React from 'react'
import { Text } from 'react-native'
import type { PlaceholderProps } from './types'

const defaultProps = {
  placeholderColor: 'gray'
}

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
}: PlaceholderProps & typeof defaultProps) => {
  return (
    <Text
      numberOfLines={1}
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
      }}>
      {placeholder}
    </Text>
  )
}

Placeholder.defaultProps = defaultProps

export default Placeholder
