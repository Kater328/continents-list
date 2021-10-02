import { createContext } from "react";

const closedContext = createContext({
  closed: false,
  setClosed: (bool) => {}
});

export default closedContext;
