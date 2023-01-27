import { useState } from "react";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { ArrowUpIcon } from "../icons/ArrowUpIcon";

export const Select = ({ defaultValue, list }) => {
  const [isShowList, setIsShowList] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="select-container">
      <div
        className={`select_button input ${
          isShowList ? "select_button-open" : "select_button-default"
        }`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsShowList(!isShowList);
        }}
      >
        {selectedValue ? selectedValue : defaultValue}
        {isShowList ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
      {isShowList && (
        <ul className="select_list">
          {list.map((item) => {
            return (
              <li
                onClick={() => {
                  setSelectedValue(item);
                  setIsShowList(false);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
