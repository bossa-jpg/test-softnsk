import { useState } from "react";
import { OrderStage } from "./OrderStage";
import { SearchIcon } from "../icons/SearchIcon";
import { PercentIcon } from "../icons/PercentIcon";
import { AddFileIcon } from "../icons/AddFileIcon";
import { MailIcon } from "../icons/MailIcon";
import { CashIcon } from "../icons/CashIcon";
import { FileIcon } from "../icons/FileIcon";
import { Select } from "./Select";

const selectOptions = [
  "Sed ut perspiciatis",
  "Nemo enim ipsam",
  "Et harum quidem",
  "Temporibus autem",
  "Itaque earum rerum",
  "Temporibus autem",
  "Itaque earum rerum",
  "Temporibus autem",
  "Itaque earum rerum",
  "Temporibus autem",
  "Itaque earum rerum",
];

const OrderSeparate = () => {
  return (
    <div className="order_separate">
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

const onSubmit = () => {
  console.log("form sent");
};

export const OrderingBlock = () => {
  const [rangeValue, setRangeValue] = useState(50);
  const [attachedFile, setAttachedFile] = useState("");

  return (
    <div id="ordering" className="ordering-block">
      <div className="ordering_content">
        <div className="ordering_text">
          <h1>
            Оформление <span>Заказа</span>
          </h1>
          <p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
        </div>
        <div className="orgering_stages">
          <OrderStage
            icon={<SearchIcon />}
            description="Lorem ipsum dolor sit amet"
          />
          <OrderSeparate />
          <OrderStage
            icon={<PercentIcon />}
            description="Сonsecteturadipiscing elit"
          />
          <OrderSeparate />
          <OrderStage
            icon={<AddFileIcon />}
            description="Sed do eiusmod tempor"
          />
          <OrderSeparate />
          <OrderStage
            icon={
              <MailIcon color="#fff" size={{ width: "37", height: "29" }} />
            }
            description="Esse cillum dolore eu fugiat"
          />
          <OrderSeparate />
          <OrderStage
            icon={<CashIcon />}
            description="Excepteur sint occaecat cupidatat non proident"
          />
        </div>
        <form
          className="ordering_form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="form_inputs inputs-block">
            <Select defaultValue="Выберите тип системы" list={selectOptions} />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Ваш e-mail"
            />
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Ваше имя"
            />
          </div>
          <div className="form_additional-inputs inputs-block">
            <div className="slider-block">
              <div className="description">
                <p className="description_text">
                  Sed ut perspiciatis, unde omnis iste natus
                </p>
                <p className="description_percent">{rangeValue}%</p>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                className="slider"
                onChange={(e) => {
                  setRangeValue(e.target.value);
                }}
              ></input>
            </div>
            <input
              className="input-file"
              type="file"
              id="file"
              onChange={(e) => {
                setAttachedFile(e.target.files[0].name);
              }}
            />
            <label className="label-input-file input" for="file">
              <FileIcon color={attachedFile ? "#3E9CDC" : "#272733"} />
              <span className={attachedFile && "attachedStyle"}>
                {attachedFile ? attachedFile : "Прикрепить файл"}
              </span>
            </label>
          </div>
          <button className="form_submit-button" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};
