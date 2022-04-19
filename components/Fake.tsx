import { text } from "node:stream/consumers"
import { FC } from "react"
import { H1 } from "./H1"

type CommonProps = {
  className? : string;
  onClick: (event: any)=>void;

}

type Props = {
  text: string;
  onClick: ()=>void;
  pole: Array<string>;
  query: string | Array<string>
} & Omit<CommonProps, 'onClick'>


const cvicnyPole = [1,2,3,4,5];
const klon = [...cvicnyPole];
const obj = { a: 10, b: 'kk', c: {ca: true}};
const {b, c: { ca }} = obj;

const Fake : FC<Props> = (props)=>{

  const hoverHandler = ()=>{
    console.log(new Date())
  }
  

  return <div onMouseOver={hoverHandler}
   onClick={props.onClick} >
     <H1>{text}</H1>
       {props.children}</div>

}
