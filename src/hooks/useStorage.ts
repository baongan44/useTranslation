import { useCallback, useState, useEffect } from "react";

export function useLocalStorage(key: string, defaultValue: string | any) {
  return useStorage(key, defaultValue, localStorage);
}

export function useSessionStorage(key: string, defaultValue: string | any) {
  return useStorage(key, defaultValue, sessionStorage);
}

const useStorage = (
  key: string,
  defaultValue: () => void | string,
  storageObject: Storage
) => {
  const [language, setLanguage] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (language === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(language));
  }, [key, language, storageObject]);

  const remove = useCallback(() => {
    setLanguage(undefined);
  }, []);

  return [language, setLanguage, remove];
};
