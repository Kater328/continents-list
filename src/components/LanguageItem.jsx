function LanguageItem(props) {
  return (
    <>
        {props.language.map((item) => (
            <li key={item.code}>
                {item.name}
            </li>
          ))}
    </>
  );
}

export default LanguageItem;
