import CountryItem from "./CountryItem";
import hoc from "../ListItemHOC";

function ContinentItem(props) {
  return (
    <>
    <li onClick={props.changeData}>
      {props.name}
    </li>
      {(props.isOpen) &&
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
