import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const ErrorHelper = ({ error, errorColor, errorPaddingTop, errorFontSize }) => {
  return (
    <Text
      style={{
        paddingTop: errorPaddingTop,
        color: errorColor,
        fontSize: errorFontSize
      }}>
      {error}
    </Text>
  )
}

ErrorHelper.propTypes = {
  error: PropTypes.string,
  errorPaddingTop: PropTypes.number,
  errorColor: PropTypes.string,
  errorFontSize: PropTypes.number
}

ErrorHelper.defaultProps = {
  errorPaddingTop: 8,
  errorColor: '#fc1f4a',
  errorFontSize: 12
}

export default ErrorHelper
