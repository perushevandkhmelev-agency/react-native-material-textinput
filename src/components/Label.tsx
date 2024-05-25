import React, { useState, useEffect } from 'react'
import { Text, Animated, I18nManager } from 'react-native'
import type { LabelDefaultPropsType, LabelProps } from './types'

const defaultProps: Required<LabelDefaultPropsType> = {
  labelDuration: 200,
  labelColor: 'gray',
  labelActiveColor: '#3f51b5',
  labelActiveScale: 0.8,
  labelActiveTop: -18
}

const Label = ({
  hasValue,
  focused,
  labelActiveScale = defaultProps.labelActiveScale,
  labelActiveTop = defaultProps.labelActiveTop,
  labelDuration = defaultProps.labelDuration,
  paddingTop,
  paddingRight,
  paddingLeft,
  activeColor,
  fontSize,
  fontFamily,
  fontWeight,
  label,
  labelColor = defaultProps.labelColor,
  labelActiveColor = defaultProps.labelActiveColor,
  error,
  errorColor
}: LabelProps) => {
  const [animatedScale] = useState(new Animated.Value(hasValue || focused ? labelActiveScale : 1))
  const [animatedTranslate] = useState(new Animated.Value(hasValue || focused ? labelActiveTop : 0))

  useEffect(() => {
    Animated.timing(animatedScale, {
      toValue: hasValue || focused ? labelActiveScale : 1,
      duration: labelDuration,
      useNativeDriver: true
    }).start()

    Animated.timing(animatedTranslate, {
      toValue: hasValue || focused ? labelActiveTop : 0,
      duration: labelDuration,
      useNativeDriver: true
    }).start()
  }, [hasValue, focused])

  const viewRTLStyles = I18nManager.doLeftAndRightSwapInRTL ? { marginLeft: '-100%' } : { marginRight: '-100%' }
  const textRTLStyles = I18nManager.doLeftAndRightSwapInRTL ? { left: '50%' } : { right: '50%' }

  return (
    <Animated.View
      style={{
        ...viewRTLStyles,
        position: 'absolute',
        width: '200%',
        top: paddingTop,
        transform: [{ translateY: animatedTranslate }, { scale: animatedScale }]
      }}>
      <Text
        numberOfLines={1}
        style={{
          ...textRTLStyles,
          top: 0,
          paddingRight,
          paddingLeft,
          color: error ? errorColor : focused ? activeColor || labelActiveColor : labelColor,
          textAlign: 'left',
          fontFamily,
          fontSize,
          fontWeight
        }}>
        {label}
      </Text>
    </Animated.View>
  )
}

export default Label
