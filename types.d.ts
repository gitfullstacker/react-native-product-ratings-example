// types.d.ts
import { ComponentType } from 'react';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

declare module 'react-native-product-ratings' {
  // Shared types
  export interface RatingImageProps {
    filled: boolean;
    size: number;
    tintColor?: string;
    style?: ImageStyle;
  }

  // Base Rating Props (used by all components)
  export interface BaseRatingProps {
    count?: number;
    defaultRating?: number;
    size?: number;
    selectedColor?: string;
    readonly?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    startingValue?: number;
    RatingImage?: ComponentType<RatingImageProps>;
    onFinishRating?: (rating: number) => void;
  }

  // Rating Component (Swipe)
  export interface RatingProps extends BaseRatingProps {
    onSwipeRating?: (rating: number) => void;
    showRating?: boolean;
    fractions?: number;
    minValue?: number;
    jumpValue?: number;
  }

  // StarRating Component
  export interface StarRatingProps extends BaseRatingProps {
    allowHalfRating?: boolean;
    direction?: 'ltr' | 'rtl';
  }

  // TapRating Component
  export interface TapRatingProps extends BaseRatingProps {
    ratingLabels?: Record<number, string>;
    labelStyle?: TextStyle;
    showRatingText?: boolean;
  }

  // Default Rating Image Component
  export const DefaultRatingImage: ComponentType<RatingImageProps>;

  // Main Components
  export const Rating: ComponentType<RatingProps>;
  export const StarRating: ComponentType<StarRatingProps>;
  export const TapRating: ComponentType<TapRatingProps>;

  // Type exports for consumers
  export type {
    RatingProps as RatingComponentProps,
    StarRatingProps as StarRatingComponentProps,
    TapRatingProps as TapRatingComponentProps,
    RatingImageProps as RatingImageComponentProps
  };
}