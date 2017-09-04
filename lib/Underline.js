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
    animatedScaleX: new Animated.Value(0)
  }

  componentWillReceiveProps = nextProps => {
    const { animatedScaleX } = this.state
    const { focused, underlineDuration } = nextProps

    if (this.props.focused !== focused) {
      Animated.timing(animatedScaleX, {
        toValue: focused ? 1 : 0,
        duration: underlineDuration,
        useNativeDriver: true
      }).start()
    }
  }

  render() {
    let { activeColor, underlineHeight, underlineColor, underlineActiveColor, error, errorColor } = this.props
    let { animatedScaleX } = this.state

    return (
      <View
        style={{
          borderColor: error ? errorColor : underlineColor,
          borderBottomWidth: error ? underlineHeight + 1 : underlineHeight
        }}>
        <Animated.View
          style={{
            bottom: -underlineHeight - 1,
            transform: [{ scaleX: animatedScaleX }],
            borderColor: error ? errorColor : activeColor || underlineActiveColor,
            borderBottomWidth: underlineHeight + 1
          }}
        />
      </View>
    )
  }
}
