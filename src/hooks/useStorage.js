import { useCallback, useState, useEffect } from "react";

// interface Type {
//   key: string;
//   defaultValue: string | any;
//   storageObject: any;
// }

// const useStorage = ({ key, defaultValue, storageObject = window }: Type) => {
//   const [language, setLanguage] = useState(() => {
//     const jsonValue = storageObject.getItem(key);
//     if (jsonValue != null) return JSON.parse(jsonValue);

//     if (typeof defaultValue === "function") {
//       return defaultValue;
//     } else {
//       return defaultValue;
//     }
//   });


//   useEffect(() => {
//     if (language === undefined) return storageObject.removeItem(key);
//     storageObject.setItem(key, JSON.stringify(language));
//   }, [key, language, storageObject]);

//   const remove = useCallback(() => {
//     setLanguage(undefined);
//   }, []);

//   return [language, setLanguage, remove];
// };

// export default useStorage;

export function useLocalStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.localStorage)
}

export function useSessionStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.sessionStorage)
}

function useStorage(key, defaultValue, storageObject) {
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key)
        console.log(typeof defaultValue, JSON.parse(jsonValue), 'jsonValue')
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [key, value, storageObject])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}