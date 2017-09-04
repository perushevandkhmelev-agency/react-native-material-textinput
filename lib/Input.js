import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
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
    fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    multiline: PropTypes.bool
  }

  static defaultProps = {
    ...ErrorHelper.defaultProps,
    onFocus: () => {},
    onBlur: () => {},
    onChangeText: () => {},
    value: null,
    marginBottom: 8,
    paddingTop: 20,
    paddingRight: 0,
    paddingBottom: 8,
    paddingLeft: 0,
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
    multiline: false
  }

  state = {
    value: null,
    focused: false
  }

  render() {
    const { focused } = this.state
    const value = this.props.value != null ? this.props.value : this.state.value
    const hasValue = value && value.length > 0
    const active = focused || hasValue

    let {
      minHeight,
      height,
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
      labelActiveFontSize,
      placeholder,
      placeholderColor,
      underlineDuration,
      underlineHeight,
      underlineColor,
      underlineActiveColor,
      multiline,
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
      labelActiveFontSize,
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
      placeholderColor
    }
    let underlineProps = {
      activeColor,
      underlineDuration,
      underlineHeight,
      underlineColor,
      underlineActiveColor,
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
    let inputStyle = {
      minHeight: multiline ? minHeight : 'auto',
      height: multiline ? height : 'auto',
      maxHeight: multiline ? maxHeight : 'auto',
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      color,
      fontFamily,
      fontSize,
      fontWeight
    }
    let errorProps = {
      error,
      errorColor,
      errorPaddingTop,
      errorFontSize
    }

    const shouldShowPlaceholder = placeholder && focused && !hasValue

    return (
      <View style={containerStyle}>
        <Label {...labelProps} />
        {shouldShowPlaceholder ? <Placeholder {...placeholderProps} /> : null}
        <TextInput
          {...props}
          style={inputStyle}
          underlineColorAndroid="transparent"
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          onChangeText={this._handleChangeText}
          value={value}
          multiline={multiline}
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

    // Make support of uncontroller component
    if (value != null) {
      this.setState({ value: args[0] })
    }

    onChangeText(...args)
  }
}
