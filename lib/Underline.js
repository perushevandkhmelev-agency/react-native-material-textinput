import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    underlineDuration: PropTypes.number,
    underlineHeight: PropTypes.number,
    underlineColor: PropTypes.string,
    underlineActiveColor: PropTypes.string,
    underlineActiveHeight: PropTypes.number
  }

  static defaultProps = {
    underlineDuration: 200,
    underlineHeight: 1,
    underlineColor: 'gray',
    underlineActiveColor: '#3f51b5',
    underlineActiveHeight: 2
  }

  state = {
    animatedScaleX: new Animated.Value(this.props.error ? 1 : 0.01),
    animatedOpacity: new Animated.Value(this.props.error ? 1 : 0)
  }

  componentWillReceiveProps = nextProps => {
    let { animatedScaleX, animatedOpacity } = this.state
    let { error, focused, underlineDuration } = nextProps

    if (this.props.focused !== focused || this.props.error !== error) {
      let isActive = focused || error
      let sequence = []

      if (isActive) {
        sequence.push(
          Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true
          })
        )
      }

      sequence.push(
        Animated.timing(animatedScaleX, {
          toValue: isActive ? 1 : 0.01,
          duration: underlineDuration,
          useNativeDriver: true
        })
      )

      if (!isActive) {
        sequence.push(
          Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true
          })
        )
      }
      if (isActive) {
        Animated.parallel(sequence).start()
      } else {
        Animated.sequence(sequence).start()
      }
    }
  }

  render() {
    let {
      activeColor,
      underlineHeight,
      underlineColor,
      underlineActiveColor,
      underlineActiveHeight,
      error,
      errorColor,
      focused
    } = this.props
    let { animatedScaleX, animatedOpacity } = this.state

    return (
      <View
        style={{
          borderColor: underlineColor,
          borderTopWidth: underlineHeight
        }}>
        <Animated.View
          style={{
            marginTop: -underlineHeight,
            transform: [{ scaleX: animatedScaleX }],
            opacity: animatedOpacity,
            borderColor: (error && errorColor) || activeColor || underlineActiveColor,
            borderTopWidth: underlineActiveHeight
          }}
        />
      </View>
    )
  }
}
