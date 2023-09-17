import { useState, useEffect } from 'react';

type Breakpoints = {
  sm: number;
  md: number;
  lg: number;
};

export function useBreakpoint(direction: 'up' | 'down', breakpoint: keyof Breakpoints) {
  const [isGreaterThanBreakpoint, setIsGreaterThanBreakpoint] = useState(false);
  const [isSmallerThanBreakpoint, setIsSmallerThanBreakpoint] = useState(false);
  
  const breakpoints: Breakpoints = {
    sm: 600,
    md: 900,
    lg: 1200,
  }

  useEffect(() => {
    function handleResize() {
      if (direction === 'up') {
        const matches = window.matchMedia(`(min-width: ${breakpoints[breakpoint]}px)`).matches;
        setIsGreaterThanBreakpoint(matches);
      } else {
        const matches = window.matchMedia(`(max-width: ${breakpoints[breakpoint]}px)`).matches;
        setIsSmallerThanBreakpoint(matches);
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint, direction]);

  if (direction === 'up') {
    return isGreaterThanBreakpoint;
  }
  
  return isSmallerThanBreakpoint;
}