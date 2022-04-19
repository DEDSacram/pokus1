import { Dispatch, FC, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Sidebar } from ".";

const MenuContainer = styled.div`
   position: absolute;
   width: 100%;
   left: 0;
   top:  0;
   height: 50px;
   background: blue;
   > button {
     float:right;
     margin: 10px;
   }
`
type MenuProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Menu:FC<MenuProps> = ({setIsSidebarOpen, isSidebarOpen})=>{
  
  
  return <MenuContainer>
    <button onClick={()=>setIsSidebarOpen(prev=>!prev)}>{isSidebarOpen ? 'x' : '='}</button>
  </MenuContainer>
}

export const Layout :FC = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return <div>
         <Menu  isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
         <Sidebar isOpen={isSidebarOpen} />

  </div>

}
