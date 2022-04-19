import React, { useState } from "react";
import styled from "styled-components";
import { H1 } from "./H1";

// let a : number = null;

// var Counter = function ()
//  {
//   return <><h1>1</h1><button></button></>
//  }

// const o = { a: 5, b: false, c: 6 };

// const {a,...rest} = o;
// const { a , ...rest } = o;

// const poleA = [1, 2];
// const [a, b] = poleA;

// const pole = [1, 2, 3];
// const klon = [0, ...pole, ...pole]



type Props = {
  className?: string
}

export const Counter: React.FC<Props> = ({className}) => {
  const [cislo, setCislo] = useState(11111);
  const [x, setX] = useState(1);

  console.log(`Rendruji Counter ${cislo}`);
  return <div className={className}>
    <H1 typNadpisu="primary">{cislo}</H1>
    <button onClick={() => setCislo(previous => previous + 1)}>add</button>
    <input value={x} onChange={(e)=> setX(Number(e.currentTarget.value)) }></input>
  </div>
}





// export const Counter: React.FC = () => {
//   const [cislo, setCislo] = useState(11111111);
//   console.log(cislo);
//   return <>
//     <h1>{cislo}</h1>
//     <button onClick={() => setCislo(cislo + 1)}>add</button>
//   </>

// }
