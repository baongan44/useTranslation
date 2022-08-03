import React from "react";
import * as translations from "../translations";
import { useLocalStorage } from "./useStorage";

const useTranslation = () => {
  const [language, setLanguage, remove] = useLocalStorage("language", "en");
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "en"
  );
  const translate = (key: string) => {
    const keys = key.split(".");
    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
    remove,
  };
};
function getNestedTranslation(language: string, keys: any) {
  return keys.reduce((obj: any, key: string) => {
    return obj?.[key];
  }, translations[language as keyof typeof translations]);
}
export default useTranslation;
