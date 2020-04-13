import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useClock from "../../hooks/useClock";

Clock.propTypes = {};

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
  // const [timeString, setTimeString] = useState("");

  // useEffect(() => {
  //   const clockInterval = setInterval(() => {
  //     const now = new Date();
  //     const newTimeString = formatDate(now);
  //     setTimeString(newTimeString);
  //   }, 1000);

  //   return () => {
  //     //clean up
  //     console.log("Clock clean up");
  //     clearInterval(clockInterval);
  //   };
  // }, []);
  const { timeString } = useClock();
  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default Clock;
