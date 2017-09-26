import React, { Component } from 'react'
import { View, TextInput, Platform } from 'react-native'
import PropTypes from 'prop-types'
import Label from './Label'
import Placeholder from './Placeholder'
import Underline from './Underline'
import ErrorHelper from './ErrorHelper'

export default class extends Component {
  static propTypes = {
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

  static defaultProps = {
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

  constructor(props) {
    super(props)

    this.state = {
      value: null,
      focused: false,
      height: props.fontSize * 1.5
    }
  }

  render() {
    let { focused, height } = this.state
    let value = this.props.value != null ? this.props.value : this.state.value
    let hasValue = value && value.length > 0
    let active = focused || hasValue
    let {
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
    } = this.props
    let labelProps = {
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
    let placeholderProps = {
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
    let underlineProps = {
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
    let containerStyle = {
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    }
    if (props.multiline && props.height) {
      // Disable autogrow if height prop
      height = props.height
    }
    let inputStyle = {
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
      ...Platform.select({
        ios: { height: paddingTop + paddingBottom + (props.multiline ? height : fontSize * 1.5) },
        android: {
          height: props.multiline ? height : fontSize * 1.5 + paddingTop + paddingBottom,
          textAlignVertical: 'top'
        }
      })
    }
    let errorProps = {
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
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          onChangeText={this._handleChangeText}
          onContentSizeChange={this._handleContentSizeChange}
          value={value}
        />
        <Underline {...underlineProps} />
        {error ? <ErrorHelper {...errorProps} /> : null}
      </View>
    )
  }

  _handleFocus = (...args) => {
    let { onFocus } = this.props
    this.setState({ focused: true })
    onFocus(...args)
  }

  _handleBlur = (...args) => {
    let { onBlur } = this.props
    this.setState({ focused: false })
    onBlur(...args)
  }

  _handleChangeText = (...args) => {
    let { onChangeText, value } = this.props

    // Make support of uncontrolled component
    if (value == null) {
      this.setState({ value: args[0] })
    }

    onChangeText(...args)
  }

  _handleContentSizeChange = event => {
    let { onContentSizeChange, fontSize } = this.props
    let { height } = event.nativeEvent.contentSize

    this.setState({
      height: Math.max(fontSize * 1.5, Math.ceil(height))
    })

    onContentSizeChange(event)
  }
}
