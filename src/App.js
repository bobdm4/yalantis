import React, { useEffect, useState } from "react";
import { MonthCard } from "./Components/MonthCard.js";
import "./App.css";
const axios = require("axios");

const App = () => {
  const [users, setUsers] = useState([]);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //request for all users from server
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://yalantis-react-school-api.yalantis.com/api/task0/users"
      );
      const usersList = response.data;
      setUsers(usersList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  //func for sort user by birthday month
  const getFiltredUsersByMonthIndex = (num) => {
    let userData = [...users];
    const userOfMonth = userData.filter((item) => {
      const dob = new Date(item.dob).getMonth() === num;
      return dob;
    });
    return userOfMonth;
  };

  const tempData = months.map((el, index) => {
    let userOfMonth = getFiltredUsersByMonthIndex(index);
    return <MonthCard key={index} title={el} data={userOfMonth} />;
  });
  return <div className="container">{tempData}</div>;
};

export default App;
