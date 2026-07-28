import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";
import imgEn from "../../assets/images/en.png";
import imgIt from "../../assets/images/it.png";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage?.startsWith("en") ? "en" : "it";

  console.log(currentLanguage, i18n.resolvedLanguage);

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "it" ? "en" : "it";

    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      type="button"
      className="language-switcher"
      onClick={changeLanguage}
      aria-label={
        currentLanguage === "it" ? "Switch to English" : "Passa all'italiano"
      }
      title={
        currentLanguage === "it" ? "Switch to English" : "Passa all'italiano"
      }
    >
      <span
        className={`language-coin ${
          currentLanguage === "en" ? "is-flipped" : ""
        }`}
      >
        <span className="language-face language-face--front">
          <span className="language-flag" aria-hidden="true">
            <img src={imgIt} alt="" width="24" height="24" />
          </span>

          <span className="visually-hidden">Italiano</span>
        </span>

        <span className="language-face language-face--back">
          <span className="language-flag" aria-hidden="true">
            <img src={imgEn} alt="" width="24" height="24" />
          </span>

          <span className="visually-hidden">English</span>
        </span>
      </span>
    </button>
  );
}

export default LanguageSwitcher;
