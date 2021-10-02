import LanguageItem from "./LanguageItem";
import hoc from "../ListItemHOC";

function CountryItem(props) {
  return (
    <>
    <li onClick={props.changeData}>
      {props.name}
    </li>
      {(props.isOpen) && 
        <ul>
          <LanguageItem 
            language={props.language}/>
        </ul>
      }
    </>
  );
}

export default hoc(CountryItem);
