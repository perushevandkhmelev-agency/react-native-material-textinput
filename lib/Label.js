import React, { Component } from 'react'
import { Text, Animated } from 'react-native'
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

    let { hasValue, focused } = props

    this.state = {
      animatedScale: new Animated.Value(hasValue || focused ? 0.8 : 1),
      animatedTranslate: new Animated.Value(hasValue || focused ? -18 : 0)
    }
  }

  componentWillReceiveProps = nextProps => {
    const { animatedScale, animatedTranslate } = this.state
    const { labelDuration, hasValue, focused } = nextProps

    if (this.props.hasValue !== hasValue || this.props.focused !== focused) {
      Animated.timing(animatedScale, {
        toValue: hasValue || focused ? 0.8 : 1,
        duration: labelDuration,
        useNativeDriver: true
      }).start()

      Animated.timing(animatedTranslate, {
        toValue: hasValue || focused ? -18 : 0,
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
      fontFamily,
      fontWeight,
      label,
      labelColor,
      labelActiveColor,
      error,
      errorColor
    } = this.props
    let { animatedScale, animatedTranslate } = this.state

    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          top: paddingTop,
          transform: [{ translateY: animatedTranslate }, { scale: animatedScale }]
        }}
        numberOfLines={1}>
        <Text
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            paddingRight,
            paddingLeft,
            color: error ? errorColor : focused ? activeColor || labelActiveColor : labelColor,
            fontFamily,
            fontWeight
          }}>
          {label}
        </Text>
      </Animated.View>
    )
  }
}
