import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import PropTypes from 'prop-types'

export default class extends Component {
  static propTypes = {
    underlineDuration: PropTypes.number,
    underlineHeight: PropTypes.number,
    underlineColor: PropTypes.string,
    underlineActiveColor: PropTypes.string
  }

  static defaultProps = {
    underlineDuration: 200,
    underlineHeight: 1,
    underlineColor: 'gray',
    underlineActiveColor: '#3f51b5'
  }

  state = {
    animatedScaleX: new Animated.Value(0.01),
    animatedOpacity: new Animated.Value(0)
  }

  componentWillReceiveProps = nextProps => {
    const { animatedScaleX, animatedOpacity } = this.state
    const { focused, underlineDuration } = nextProps

    if (this.props.focused !== focused) {
      let sequence = []
      if (focused) {
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
          toValue: focused ? 1 : 0.01,
          duration: underlineDuration,
          useNativeDriver: true
        })
      )

      if (!focused) {
        sequence.push(
          Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true
          })
        )
      }
      if (focused) {
        Animated.parallel(sequence).start()
      } else {
        Animated.sequence(sequence).start()
      }
    }
  }

  render() {
    let { activeColor, underlineHeight, underlineColor, underlineActiveColor, error, errorColor, focused } = this.props
    let { animatedScaleX, animatedOpacity } = this.state
    const activeBorderWidth = Math.ceil(underlineHeight + 1)

    return (
      <View
        style={{
          borderColor: error ? errorColor : underlineColor,
          borderTopWidth: error ? activeBorderWidth : underlineHeight
        }}>
        <Animated.View
          style={{
            marginTop: -underlineHeight,
            transform: [{ scaleX: animatedScaleX }],
            opacity: animatedOpacity,
            borderColor: error ? errorColor : activeColor || underlineActiveColor,
            borderTopWidth: activeBorderWidth
          }}
        />
      </View>
    )
  }
}
