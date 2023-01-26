import { MailIcon } from "../icons/MailIcon";
import { QiwiIcon } from "../icons/QiwiIcon";
import { VkontakteIcon } from "../icons/VkontakteIcon";
import { WebMoneyIcon } from "../icons/WebMoneyIcon";
import { YandexMoneyIcon } from "../icons/YandexMoneyIcon";

export const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="content">
        <p className="copywrite">© 2018 «LoremIpsum.net» Все права защищены.</p>
        <div className="separator" />
        <div className="items">
          <p className="item">
            <QiwiIcon />
            <span className="label_text">Qiwi wallet</span>
          </p>

          <p className="item">
            <YandexMoneyIcon />
            <span className="label_text">Yandex Money</span>
          </p>

          <p className="item">
            <WebMoneyIcon />
            <span className="label_text">Web Money</span>
          </p>
        </div>
        <div className="separator" />
        <div className="items">
          <a className="item" href="">
            <MailIcon color="#3E9CDC" />
            <span>info@ipsum228.com</span>
          </a>

          <a className="item" href="">
            <VkontakteIcon />
            <span>Мы вконтакте</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
