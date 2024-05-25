import React from 'react'
import { Text } from 'react-native'
import type { PlaceholderDefaultPropsType, PlaceholderProps } from './types'

const defaultProps: Required<PlaceholderDefaultPropsType> = {
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
  placeholderColor = defaultProps.placeholderColor,
  hasValue,
  focused
}: PlaceholderProps) => {
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

export default Placeholder
