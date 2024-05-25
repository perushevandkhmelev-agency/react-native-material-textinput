import React from 'react'
import { Text } from 'react-native'
import type { ErrorHelperDefaultPropsType, ErrorHelperProps } from './types'

export const defaultProps: Required<ErrorHelperDefaultPropsType> = {
  errorPaddingTop: 8,
  errorColor: '#fc1f4a',
  errorFontSize: 12
}

const ErrorHelper = ({
  error,
  errorColor = defaultProps.errorColor,
  errorPaddingTop = defaultProps.errorPaddingTop,
  errorFontSize = defaultProps.errorFontSize
}: ErrorHelperProps) => {
  return (
    <Text
      style={{
        paddingTop: errorPaddingTop,
        color: errorColor,
        textAlign: 'left',
        fontSize: errorFontSize
      }}>
      {error}
    </Text>
  )
}

export default ErrorHelper
