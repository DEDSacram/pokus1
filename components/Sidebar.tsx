import React, { FC, useEffect, useState } from "react";
import { useLocalesQuery } from "../generated/graphql";
import { useMediaQuery } from "./userMediaQuery";
import { useSidebar } from "./useSidebar";

type Props = {
  isOpen?: boolean
}

export const Sidebar: FC<Props> = ({isOpen = false}) => {

  const {loading, error, data}  = useLocalesQuery();
  
  const [opened, setIsOpened] = useState(isOpen);
 

  useEffect(()=>{
    setIsOpened(isOpen);
  },[isOpen])

  const [width, setWidth] = useState('200px');

  useEffect(() => {
    const size = window.document.body.offsetWidth;
    // console.log(size);
    setWidth(`${size / 5}px`);
  }, [setWidth]);

  const isDesktop = useMediaQuery('768px');

  if (error) return <div>Error...</div>
  if (loading) return <div>Loading...</div>
  
  const div = <div
    style={{
      position: "absolute",
      left: 0,
      top: 0,
      width: opened ? width : '50px',
      bottom: 0,
      background: opened ? "red" : 'gray',
      transition: 'all 0.5s ease'
    }}>

    {/* <button onClick={() => setIsOpened((prev) => !prev)}>
      =
    </button> */}
    
    {isDesktop ? 'Desktop' : 'Mobile'}
    <ul>
     {data?.locales.map(loc=><li key={loc}>{loc}</li>)}
    </ul>

  </div>

  return div;

}





// export const Counter: React.FC = () => {
//   const [cislo, setCislo] = useState(11111111);
//   console.log(cislo);
//   return <>
//     <h1>{cislo}</h1>
//     <button onClick={() => setCislo(cislo + 1)}>add</button>
//   </>

// }
