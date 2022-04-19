import { useEffect, useState } from "react";

export const useSidebar = () => {

  const [opened, setIsOpened] = useState(true);
  const [width, setWidth] = useState('200px');

  useEffect(() => {
    const size = window.document.body.offsetWidth;
    // console.log(size);
    setWidth(`${size / 5}px`);
  }, [setWidth]);

  return {
    opened,
    width,
    setIsOpened
  };

};
