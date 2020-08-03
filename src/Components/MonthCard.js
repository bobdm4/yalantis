import React, { useState } from "react";
import { User } from "./User";

export const MonthCard = ({ title, data }) => {
  const [isHover, setIsHover] = useState(false);

  //difinition color of card
  let colorSetting;
  if (data.length > 11) {
    colorSetting = "red";
  }
  if (data.length <= 10) {
    colorSetting = "green";
  }
  if (data.length <= 6) {
    colorSetting = "blue";
  }
  if (data.length <= 2) {
    colorSetting = "grey";
  }

  const usersTemplate = data.map((user) => {
    return (
      <User key={user.id} firstName={user.firstName} lastName={user.lastName} />
    );
  });

  return (
    <div
      className={"monthCard " + colorSetting}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h2>{title}</h2>
      {isHover && <ul>{usersTemplate}</ul>}
    </div>
  );
};
