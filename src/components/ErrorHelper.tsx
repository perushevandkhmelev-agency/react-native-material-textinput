import React from 'react'
import { Text } from 'react-native'
import type { ErrorHelperProps } from './types'

const defaultProps = {
  errorPaddingTop: 8,
  errorColor: '#fc1f4a',
  errorFontSize: 12
}

const ErrorHelper = ({ error, errorColor, errorPaddingTop, errorFontSize }: ErrorHelperProps & typeof defaultProps) => {
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

ErrorHelper.defaultProps = defaultProps

export default ErrorHelper
