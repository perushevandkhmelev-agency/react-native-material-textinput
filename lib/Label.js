import React, { Component } from 'react'
import { Text, Animated } from 'react-native'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    label: PropTypes.string,
    labelDuration: PropTypes.number,
    labelColor: PropTypes.string,
    labelActiveColor: PropTypes.string,
    labelActiveFontSize: PropTypes.number,
    labelActiveTop: PropTypes.number
  }

  static defaultProps = {
    labelDuration: 200,
    labelColor: 'gray',
    labelActiveColor: '#3f51b5',
    labelActiveFontSize: 12,
    labelActiveTop: -18
  }

  constructor(props) {
    super(props)

    let { hasValue, focused, labelActiveFontSize, fontSize, labelActiveTop } = props

    this.state = {
      animatedScale: new Animated.Value(hasValue || focused ? labelActiveFontSize / fontSize : 1),
      animatedTranslate: new Animated.Value(hasValue || focused ? labelActiveTop : 0)
    }
  }

  componentWillReceiveProps = nextProps => {
    let { animatedScale, animatedTranslate } = this.state
    let { labelDuration, labelActiveFontSize, labelActiveTop, hasValue, focused, fontSize } = nextProps

    if (this.props.hasValue !== hasValue || this.props.focused !== focused) {
      Animated.timing(animatedScale, {
        toValue: hasValue || focused ? labelActiveFontSize / fontSize : 1,
        duration: labelDuration,
      }).start()

      Animated.timing(animatedTranslate, {
        toValue: hasValue || focused ? labelActiveTop : 0,
        duration: labelDuration,
        useNativeDriver: true
      }).start()
    }
  }

  render() {
    let {
      focused,
      paddingTop,
      paddingRight,
      paddingLeft,
      activeColor,
      fontSize,
      fontFamily,
      fontWeight,
      label,
      labelColor,
      labelActiveColor,
      labelActiveFontSize,
      error,
      errorColor
    } = this.props
    let { animatedScale, animatedTranslate } = this.state

    scaledFontSize = animatedScale.interpolate({
      inputRange: [0, 1],
      outputRange: [fontSize * 0, fontSize * 1],
    });

    return (
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          top: paddingTop,
          transform: [{ translateY: animatedTranslate }],
        }}
        numberOfLines={1}>
        <Animated.Text
          style={{
            paddingRight,
            paddingLeft,
            color: focused ? activeColor || labelActiveColor : labelColor,
            fontFamily,
            fontSize: scaledFontSize,
            fontWeight
          }}>
          {label}
        </Animated.Text>
      </Animated.View>
    )
  }
}
