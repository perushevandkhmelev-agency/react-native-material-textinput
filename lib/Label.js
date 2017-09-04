import React, { Component } from 'react'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    label: PropTypes.string,
    labelDuration: PropTypes.number,
    labelColor: PropTypes.string,
    labelActiveTop: PropTypes.number,
    labelActiveColor: PropTypes.string,
    labelActiveFontSize: PropTypes.number
  }

  static defaultProps = {
    labelDuration: 200,
    labelColor: 'gray',
    labelActiveTop: 0,
    labelActiveColor: '#3f51b5',
    labelActiveFontSize: 12
  }

  constructor(props) {
    super(props)

    let { paddingTop, hasValue, labelActiveTop, labelActiveFontSize, fontSize } = props

    this.state = {
      animatedTop: new Animated.Value(hasValue ? labelActiveTop : paddingTop),
      animatedColor: new Animated.Value(0),
      animatedFontSize: new Animated.Value(hasValue ? labelActiveFontSize : fontSize)
    }
  }

  render() {
    let {
      paddingRight,
      paddingLeft,
      activeColor,
      fontFamily,
      fontWeight,
      label,
      labelColor,
      labelActiveColor,
      error,
      errorColor
    } = this.props
    let { animatedTop, animatedColor, animatedFontSize } = this.state

    let interpolatedColorAnimation = animatedColor.interpolate({
      inputRange: [0, 1],
      outputRange: [labelColor, activeColor ? activeColor : labelActiveColor]
    })

    return (
      <Animated.Text
        style={{
          position: 'absolute',
          top: animatedTop,
          paddingRight,
          paddingLeft,
          color: error ? errorColor : interpolatedColorAnimation,
          backgroundColor: 'transparent',
          fontFamily,
          fontSize: animatedFontSize,
          fontWeight
        }}
        numberOfLines={1}>
        {label}
      </Animated.Text>
    )
  }

  _handleAnimated = (flag, focused) => {
    let { paddingTop, fontSize, labelDuration, labelActiveTop, labelActiveFontSize } = this.props
    let { animatedTop, animatedColor, animatedFontSize } = this.state

    Animated.parallel([
      Animated.timing(animatedTop, {
        toValue: flag ? labelActiveTop : paddingTop,
        duration: labelDuration
      }),
      Animated.timing(animatedColor, {
        toValue: flag && focused ? 1 : 0,
        duration: labelDuration
      }),
      Animated.timing(animatedFontSize, {
        toValue: flag ? labelActiveFontSize : fontSize,
        duration: labelDuration
      })
    ]).start()
  }
}

}
