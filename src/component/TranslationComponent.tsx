import useTranslation from "../hooks/useTranslation"

export default function TranslationComponent() {
  const { language, setLanguage, setFallbackLanguage, t, remove } = useTranslation()
  return (
    <>
      <div>{language}</div>
      <div>{t("Farm")}</div>
      <div>{t("Simple!")}</div>
      <div>{t("Winning tickets")}</div>
      <div>{t("Milen.text")}</div>
      <div>{t("School.class.member")}</div>
      <div>{t("Hello")}</div>
      <button onClick={() => setLanguage("vi")}>Change To Vietnamese</button>
      <button onClick={() => setLanguage("zh")}>Change To Taiwan</button>
      {/* <button onClick={() => setFallbackLanguage("en")}>Default</button> */}
      <button onClick={remove}>remove</button>
    </>
  )
}