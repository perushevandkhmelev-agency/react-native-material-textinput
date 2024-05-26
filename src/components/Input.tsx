import React, { useState } from 'react'
import { View, TextInput, Platform, I18nManager } from 'react-native'
import type { NativeSyntheticEvent, TextInputContentSizeChangeEventData, TextInputFocusEventData } from 'react-native'
import Label from './Label'
import Placeholder from './Placeholder'
import Underline from './Underline'
import ErrorHelper, { defaultProps as errorDefaultProps } from './ErrorHelper'
import type {
  InputProps,
  HasValueProps,
  FocusedProps,
  TextInputStyleProps,
  ErrorHelperDefaultPropsType,
  InputDefaultPropsType,
  InputRef
} from './types'

const defaultProps: Required<ErrorHelperDefaultPropsType & InputDefaultPropsType> = {
  ...errorDefaultProps,
  marginBottom: 8,
  paddingTop: 20,
  paddingRight: 0,
  paddingBottom: 8,
  paddingLeft: 0,
  color: 'black',
  fontSize: 15,
  fontWeight: 'normal'
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    minHeight,
    maxHeight,
    marginTop,
    marginRight,
    marginBottom = defaultProps.marginBottom,
    marginLeft,
    paddingTop = defaultProps.paddingTop,
    paddingRight = defaultProps.paddingRight,
    paddingBottom = defaultProps.paddingBottom,
    paddingLeft = defaultProps.paddingLeft,
    color = defaultProps.color,
    activeColor,
    fontFamily,
    fontSize = defaultProps.fontSize,
    fontWeight = defaultProps.fontWeight,
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
    errorColor = errorDefaultProps.errorColor,
    errorPaddingTop,
    errorFontSize,
    ...props
  },
  ref
) => {
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState<FocusedProps['focused']>(false)
  const [height, setHeight] = useState(fontSize * 1.5)

  const getValue = props.value != null ? props.value : value
  const hasValue: HasValueProps['hasValue'] = Boolean(getValue && getValue.length > 0)
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
  const inputStyle: TextInputStyleProps = {
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
        ref={ref}
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

  function handleFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(true)
    if (typeof props.onFocus === 'function') {
      props.onFocus(event)
    }
  }

  function handleBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(false)
    if (typeof props.onBlur === 'function') {
      props.onBlur(event)
    }
  }

  function handleChangeText(text: string) {
    const { value } = props

    // Make support of uncontrolled component
    if (value == null) {
      setValue(text)
    }

    if (typeof props.onChangeText === 'function') {
      props.onChangeText(text)
    }
  }

  function handleContentSizeChange(event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) {
    const { height } = event.nativeEvent.contentSize

    setHeight(Math.max(fontSize * 1.5, Math.ceil(height)))

    if (typeof props.onContentSizeChange === 'function') {
      props.onContentSizeChange(event)
    }
  }
}

export default React.forwardRef(Input)
