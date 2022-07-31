import React from "react";
import * as translations from "../translations";
import { useLocalStorage } from "./useStorage";

const useTranslation = () => {
    const [language, setLanguage, remove] = useLocalStorage("language", "en");
    const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
        "fallbackLanguage",
        "en"
    );
    const translate = (key) => {
        const keys = key.split(".");
        console.log(key,getNestedTranslation(language, keys), 'key')
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
        remove
    };
};

function getNestedTranslation(language, keys) {
  console.log({language, keys})
    return keys.reduce((obj, key) => {
      console.log({obj, key})
        return obj?.[key];
    }, translations[language]);
}

export default useTranslation;