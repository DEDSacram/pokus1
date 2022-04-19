import { useEffect, useState } from "react";

export const useMediaQuery = (breakpoint: string): boolean => {
  const query = `(min-width: ${breakpoint})`;

  //at the beginning first render (SSR or Browser) must return same result
  const [isMatch, setIsMatch] = useState(false);

  const handleMatch = () => {
    const mediaQueryList = window.matchMedia(query);
    setIsMatch(mediaQueryList.matches);
  };

  useEffect(() => {
    window.addEventListener('resize', handleMatch);
    handleMatch();
    return () => {
      window.removeEventListener('resize', handleMatch);
    };
  }, []);

  return isMatch;
};
