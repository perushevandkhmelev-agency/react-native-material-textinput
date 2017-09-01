import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import Label from './Label'
import Placeholder from './Placeholder'
import Underline from './Underline'

export default class Input extends Component {
  constructor(props) {
    super(props)

    let { value } = this.props

    this.state = {
      value,
      focused: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      nextProps.value.length !== 0 ? this.refs.label._handleAnimated(true) : this.refs.label._handleAnimated(false)
      this.setState({ value: nextProps.value })
    }
  }

  render() {
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
      ...props
    } = this.props
    let { value, focused } = this.state
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
      hasValue: value.length > 0
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
      underlineActiveColor
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

    return (
      <View style={containerStyle}>
        <Label {...labelProps} ref="label" />
        {!value.length && focused && placeholder ? <Placeholder {...placeholderProps} /> : null}
        <TextInput
          {...props}
          style={inputStyle}
          underlineColorAndroid="transparent"
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onChangeText={this._onChangeText}
          value={value}
          multiline={multiline}
          ref="input"
        />
        <Underline {...underlineProps} ref="underline" />
      </View>
    )
  }

  _onFocus = event => {
    let { onFocus } = this.props

    this.setState({ focused: true })
    this.refs.label._handleAnimated(true, true)
    this.refs.underline._handleAnimated(true)

    onFocus(event)
  }

  _onBlur = event => {
    let { onBlur } = this.props
    let { value } = this.state

    this.setState({ focused: false })
    value.length ? this.refs.label._handleAnimated(true, false) : this.refs.label._handleAnimated(false, false)
    this.refs.underline._handleAnimated(false)

    onBlur(event)
  }

  _onChangeText = value => {
    let { onChangeText } = this.props

    this.setState({ value })

    onChangeText(value)
  }
}

Input.propTypes = {
  ...TextInput.PropTypes,
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

Input.defaultProps = {
  onFocus: () => {},
  onBlur: () => {},
  onChangeText: () => {},
  value: '',
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
