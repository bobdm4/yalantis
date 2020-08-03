import React from "react";

export const User = ({ firstName, lastName }) => {
  return (
    <li>
      {firstName} {lastName}
    </li>
  );
};
