import { useState } from "react";
import CountryItem from "./CountryItem";

function ContinentItem(props) {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <li onClick={()=>setIsOpen(!isOpen)}>
      {props.name}
    </li>
      {(isOpen) &&
        <ul>
          {props.countries.map((country) =>
            <CountryItem
              name={country.name}
              key={country.code}
              language={country.languages}
            />
            
          )}
        </ul>
      }
    </>
  );
}

export default ContinentItem;
