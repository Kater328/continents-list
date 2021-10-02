import React, { useContext } from "react";
import closedContext from "../closedAllContext";

function LanguageItem(props) {
  const { setClosed } = useContext(closedContext);
  const handleToggle = () => setClosed(true);
  
  return (
    <>
        {props.language.map((item) => (
          <li key={item.code} onClick={handleToggle}>
            {item.name}
          </li>
        ))}
    </>
  );
}

export default LanguageItem;
