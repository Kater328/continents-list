import { useState } from "react";
import LanguageItem from "./LanguageItem";
function CountryItem(props) {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <li onClick={()=>setIsOpen(!isOpen)}>
      {props.name}
    </li>
      {(isOpen) && 
        <ul>
          <LanguageItem 
            language={props.language}/>
        </ul>
      }
    </>
  );
}

export default CountryItem;
