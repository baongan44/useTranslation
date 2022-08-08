import useTranslation from "../hooks/useTranslation";
import Button from "./Button";

export default function TranslationComponent() {
  const { language, setLanguage, setFallbackLanguage, t, remove } =
    useTranslation();
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      <div>
        <div style={{ color: "violet" }}>{language}</div>
        <div>{t("Farm")}</div>
        <div>{t("Simple!")}</div>
        <div>{t("Winning tickets")}</div>
        <div>{t("Milen.text")}</div>
        <div>{t("School.class.member")}</div>
        <div>{t("Hello")}</div>
        <Button
          onClick={() => setLanguage("vi")}
          title="Change To Vietnamese"
          bgColor="#21d07a "
        />
        <Button onClick={() => setLanguage("zh")} title="Change To Taiwan" />
        {/* <Button onClick={() => setFallbackLanguage("en")} title="Default" /> */}
        <Button onClick={remove} title="remove" bgColor="#f37e31" />
      </div>
    </div>
  );
}
