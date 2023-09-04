import { useContext } from "react";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const {language,setLanguage} = useContext(languageContext);
  const {theme,setTheme} = useContext(themeContext);

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={()=>setTheme(theme=="dark"?"light":"dark")}>Change theme</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
