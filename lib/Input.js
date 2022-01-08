import React, { useState } from 'react'
import { View, TextInput, Platform, I18nManager } from 'react-native'
import PropTypes from 'prop-types'
import Label from './Label'
import Placeholder from './Placeholder'
import Underline from './Underline'
import ErrorHelper from './ErrorHelper'

const Input = ({
  minHeight,
  maxHeight,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  color,
  activeColor,
  fontFamily,
  fontSize,
  fontWeight,
  label,
  labelDuration,
  labelColor,
  labelActiveTop,
  labelActiveColor,
  labelActiveScale,
  placeholder,
  placeholderColor,
  underlineDuration,
  underlineHeight,
  underlineColor,
  underlineActiveColor,
  underlineActiveHeight,
  error,
  errorColor,
  errorPaddingTop,
  errorFontSize,
  ...props
}) => {
  const [value, setValue] = useState(null)
  const [focused, setFocused] = useState(false)
  const [height, setHeight] = useState(fontSize * 1.5)

  const getValue = props.value != null ? props.value : value
  const hasValue = getValue && getValue.length > 0
  const labelProps = {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    activeColor,
    fontFamily,
    fontSize,
    fontWeight,
    label,
    labelDuration,
    labelColor,
    labelActiveTop,
    labelActiveColor,
    labelActiveScale,
    focused,
    hasValue,
    error,
    errorColor
  }
  const placeholderProps = {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    fontFamily,
    fontSize,
    fontWeight,
    placeholder,
    placeholderColor,
    focused,
    hasValue
  }
  const underlineProps = {
    activeColor,
    underlineDuration,
    underlineHeight,
    underlineColor,
    underlineActiveColor,
    underlineActiveHeight,
    focused,
    error,
    errorColor
  }
  const containerStyle = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  }
  let getHeight = height
  if (props.multiline && props.height) {
    // Disable autogrow if height prop
    getHeight = props.height
  }
  const inputStyle = {
    minHeight,
    maxHeight,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    ...Platform.select({
      ios: { height: paddingTop + paddingBottom + (props.multiline ? getHeight : fontSize * 1.5) },
      android: {
        height: props.multiline ? getHeight : fontSize * 1.5 + paddingTop + paddingBottom,
        textAlignVertical: 'top'
      }
    })
  }
  const errorProps = {
    error,
    errorColor,
    errorPaddingTop,
    errorFontSize
  }

  return (
    <View style={containerStyle}>
      <Label {...labelProps} />
      {placeholder ? <Placeholder {...placeholderProps} /> : null}
      <TextInput
        {...props}
        style={inputStyle}
        underlineColorAndroid="transparent"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        onContentSizeChange={handleContentSizeChange}
        value={getValue}
      />
      <Underline {...underlineProps} />
      {error ? <ErrorHelper {...errorProps} /> : null}
    </View>
  )

  function handleFocus(...args) {
    const { onFocus } = props
    setFocused(true)
    onFocus(...args)
  }

  function handleBlur(...args) {
    const { onBlur } = props
    setFocused(false)
    onBlur(...args)
  }

  function handleChangeText(...args) {
    const { onChangeText, value } = props

    // Make support of uncontrolled component
    if (value == null) {
      setValue(args[0])
    }

    onChangeText(...args)
  }

  function handleContentSizeChange(event) {
    const { onContentSizeChange } = props
    const { height } = event.nativeEvent.contentSize

    setHeight(Math.max(fontSize * 1.5, Math.ceil(height)))

    onContentSizeChange(event)
  }
}

Input.propTypes = {
  ...TextInput.PropTypes,
  ...ErrorHelper.PropTypes,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  minHeight: PropTypes.number,
  height: PropTypes.number,
  maxHeight: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Input.defaultProps = {
  ...ErrorHelper.defaultProps,
  onFocus: () => {},
  onBlur: () => {},
  onChangeText: () => {},
  onContentSizeChange: () => {},
  value: null,
  marginBottom: 8,
  paddingTop: 20,
  paddingRight: 0,
  paddingBottom: 8,
  paddingLeft: 0,
  color: 'black',
  fontSize: 15,
  fontWeight: 'normal'
}

export default Input
