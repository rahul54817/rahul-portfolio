declare module 'react-animate-on-scroll' {
  import * as React from 'react';

  export interface ScrollAnimationProps {
    animateIn?: string;
    animateOut?: string;
    initiallyVisible?: boolean;
    animateOnce?: boolean;
    delay?: number;
    duration?: number;
    offset?: number;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
  }

  export default class ScrollAnimation extends React.Component<ScrollAnimationProps> {}
}
