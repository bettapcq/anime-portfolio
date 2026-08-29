import { useEffect, useState } from "react";
import "./CookieBanner.scss";
import { useTranslation } from "react-i18next";

const CookieBanner = ({ forceShow, onClose }) => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    //al primo ingresso al sito parte senza il consenso GA4, una volta accettato o rifiutato compare con denied o granted
    const consent = localStorage.getItem("analytics-consent");

    //al refresh, se non esiste consent in appication (quindi primo ingresso), mostra il banner
    if (!consent) {
      setShowBanner(true);
      return;
    }

    // Sincronizza GA4 con il consenso salvato
    window.gtag?.("consent", "update", {
      analytics_storage: consent,
    });
  }, []);

  useEffect(() => {
    if (forceShow) {
      setShowBanner(true);
    }
  }, [forceShow]);

  const handleAccept = () => {
    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
    });

    localStorage.setItem("analytics-consent", "granted");
    setShowBanner(false);
    onClose?.();
  };

  const handleReject = () => {
    window.gtag?.("consent", "update", {
      analytics_storage: "denied",
    });

    localStorage.setItem("analytics-consent", "denied");
    setShowBanner(false);
    onClose?.();
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <p>{t("cookieBanner.message")}</p>

        <div className="cookie-banner__actions">
          <button className="cookie-banner__reject" onClick={handleReject}>
            {t("cookieBanner.reject")}
          </button>

          <button className="cookie-banner__accept" onClick={handleAccept}>
            {t("cookieBanner.accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
