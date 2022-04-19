import { FC } from "react"
import styled from "styled-components"
import { H1 } from "./H1"
import Link from 'next/link'

const Wrapper = styled.div`
  border: solid 1px black;
  border-radius: 8px;
  background: gray;
  min-width: 20rem;
  min-height: 10rem;
`
const Input = styled.input`
  font-size: 2rem;
  border-radius: 8px;
  background: gray;

`

type FakeTitleType = {
  id: string;
  name: string;
}

const fakeTitles : Array<FakeTitleType> = [{
  id: 'sasad',
  name: 'Posilovna 123'
}, {
  id: 'asd',
  name: 'ABAJKs'
},
{
  id: 'asdadaasda',
  name: 'asdasda'
}
]

export const SubTitleList :FC = ()=>{
  
  const id = '654564'
  const name= "Posilovna 123"
  
  return <Wrapper>
    <H1 typNadpisu="primary">{name}</H1>
    <ul>
    {fakeTitles.map(title=>{
      return <li key={title.id}>{title.name}</li>
    })}
    </ul>
    
    <Link href={`/fitcenter/${id}`}>
          {name}
    </Link>
  </Wrapper>
  
  
}
