import type { RefObject } from 'react'
import type { TextInput, TextInputProps, TextStyle } from 'react-native'

export interface InputProps
  extends TextInputProps,
    LabelProps,
    PlaceholderProps,
    UnderlineProps,
    ErrorHelperProps,
    PaddingStyleProps,
    TextStyleProps {
  inputRef?: RefObject<TextInput>
  minHeight?: number
  height?: number
  maxHeight?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  color?: string
  activeColor?: string
}

export interface LabelProps
  extends TextStyleProps,
    Omit<PaddingStyleProps, 'paddingBottom'>,
    Pick<ErrorHelperProps, 'error' | 'errorColor'>,
    Pick<InputProps, 'activeColor'>,
    FocusedProps,
    HasValueProps {
  label?: string
  labelDuration?: number
  labelColor?: string
  labelActiveColor?: string
  labelActiveScale?: number
  labelActiveTop?: number
}

export interface PlaceholderProps extends TextStyleProps, PaddingStyleProps, FocusedProps, HasValueProps {
  placeholder?: string
  placeholderColor?: string
}

export interface UnderlineProps
  extends Pick<ErrorHelperProps, 'error' | 'errorColor'>,
    Pick<InputProps, 'activeColor'>,
    FocusedProps {
  underlineDuration?: number
  underlineHeight?: number
  underlineColor?: string
  underlineActiveColor?: string
  underlineActiveHeight?: number
}

export interface ErrorHelperProps {
  error?: string
  errorPaddingTop?: number
  errorColor?: string
  errorFontSize?: number
}

interface PaddingStyleProps {
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number
}

type TextStyleProps = Pick<TextStyle, 'fontFamily' | 'fontSize' | 'fontWeight'>

export interface FocusedProps {
  focused?: boolean
}

export interface HasValueProps {
  hasValue?: boolean
}

export type TextInputStyleProps = PaddingStyleProps &
  TextStyleProps &
  Pick<InputProps, 'minHeight' | 'maxHeight' | 'color'> &
  Pick<TextStyle, 'textAlign'>
