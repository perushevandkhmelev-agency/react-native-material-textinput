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
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
      animatedWidth: new Animated.Value(0)
    }
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      const container = this.refs.underline
      container.measure((left, top, width, height) => {
        this.setState({ width })
      })
    })
  }

  render() {
    let { activeColor, underlineHeight, underlineColor, underlineActiveColor, error, errorColor } = this.props
    let { animatedWidth } = this.state

    return (
      <View
        style={{
          alignItems: 'center',
          borderColor: error ? errorColor : underlineColor,
          borderBottomWidth: error ? underlineHeight + 1 : underlineHeight
        }}
        ref="underline">
        <Animated.View
          style={{
            bottom: -underlineHeight - 1,
            width: animatedWidth,
            borderColor: error ? errorColor : activeColor ? activeColor : underlineActiveColor,
            borderBottomWidth: underlineHeight + 1
          }}
        />
      </View>
    )
  }

  _handleAnimated = flag => {
    let { underlineDuration } = this.props
    let { width, animatedWidth } = this.state

    Animated.timing(animatedWidth, {
      toValue: flag ? width : 0,
      duration: underlineDuration
    }).start()
  }
}
}
