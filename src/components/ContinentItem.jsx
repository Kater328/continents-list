import React, { useContext } from "react";
import closedContext from "../closedAllContext";
import CountryItem from "./CountryItem";
import hoc from "../ListItemHOC";

function ContinentItem(props) {
  const { setClosed } = useContext(closedContext);
  const handleToggle = () => setClosed(false);
  return (
    <>
    <li onClick={() => {handleToggle(); props.changeData();}}>
      {props.name}
    </li>
      {(props.isOpen) && (!props.closed) &&
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

export default hoc(ContinentItem);
