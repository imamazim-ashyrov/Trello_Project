import React from "react";
import { styled } from "styled-components";

const Select = () => {
  return (
    <Selectt>
      {" "}
      <option value="choose-one" id="choose" disabled="true">
        Выберите язык…
      </option>{" "}
      <option value="ru" data-url="https://trello.com/ru/login">
        Русский
      </option>{" "}
      <option value="cs" data-url="https://trello.com/cs/login">
        Čeština
      </option>{" "}
      <option value="de" data-url="https://trello.com/de/login">
        Deutsch
      </option>{" "}
      <option value="en" data-url="https://trello.com/en/login">
        English
      </option>{" "}
      <option value="en-AU" data-url="https://trello.com/en-AU/login">
        English (AU)
      </option>{" "}
      <option value="en-GB" data-url="https://trello.com/en-GB/login">
        English (UK)
      </option>{" "}
      <option value="en-US" data-url="https://trello.com/en-US/login">
        English (US)
      </option>{" "}
      <option value="es" data-url="https://trello.com/es/login">
        Español
      </option>{" "}
      <option value="fr" data-url="https://trello.com/fr/login">
        Français
      </option>{" "}
      <option value="it" data-url="https://trello.com/it/login">
        Italiano
      </option>{" "}
      <option value="hu" data-url="https://trello.com/hu/login">
        Magyar
      </option>{" "}
      <option value="nl" data-url="https://trello.com/nl/login">
        Nederlands
      </option>{" "}
      <option value="nb" data-url="https://trello.com/nb/login">
        Norsk (bokmål)
      </option>{" "}
      <option value="pl" data-url="https://trello.com/pl/login">
        Polski
      </option>{" "}
      <option value="pt-BR" data-url="https://trello.com/pt-BR/login">
        Português (Brasil)
      </option>{" "}
      <option value="fi" data-url="https://trello.com/fi/login">
        Suomi
      </option>{" "}
      <option value="sv" data-url="https://trello.com/sv/login">
        Svenska
      </option>{" "}
      <option value="vi" data-url="https://trello.com/vi/login">
        Tiếng Việt
      </option>{" "}
      <option value="tr" data-url="https://trello.com/tr/login">
        Türkçe
      </option>{" "}
      <option value="uk" data-url="https://trello.com/uk/login">
        Українська
      </option>{" "}
      <option value="th" data-url="https://trello.com/th/login">
        ภาษาไทย
      </option>{" "}
      <option value="zh-Hans" data-url="https://trello.com/zh-Hans/login">
        中文 (简体)
      </option>{" "}
      <option value="zh-Hant" data-url="https://trello.com/zh-Hant/login">
        中文 (繁體)
      </option>{" "}
      <option value="ja" data-url="https://trello.com/ja/login">
        日本語
      </option>{" "}
    </Selectt>
  );
};

export default Select;

const Selectt = styled.select`
  font: inherit;
  border: 2px solid #edeff0;
  height: 100%;
  padding: 0.5em;
  margin: 30px 0;
`;
