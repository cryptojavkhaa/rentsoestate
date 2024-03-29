import React, { createContext, useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.module.css";

export const themes = {
  dark: "",
  light: "white-content",
};

const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

export const ThemeStore = (props) => {
  const [theme, setTheme] = useState("light");
  const [active, setActive] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleTheme = (theme) => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const handleActive = () => {
    setActive(!active);
  };

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, t, active, toggleTheme, handleLanguage, handleActive }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
