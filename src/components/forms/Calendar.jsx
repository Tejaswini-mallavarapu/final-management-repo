import React, { useState } from "react";
import "./calendar.css";

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const Calendar = () => {
  const [leftDate, setLeftDate] = useState(new Date(2024, 1));
  const [rightDate, setRightDate] = useState(new Date(2024, 2));
  const [selected, setSelected] = useState(null);

  const changeMonth = (setter, date, val) => {
    const d = new Date(date);
    d.setMonth(d.getMonth() + val);
    setter(d);
  };

  const changeYear = (setter, date, val) => {
    const d = new Date(date);
    d.setFullYear(d.getFullYear() + val);
    setter(d);
  };

  const renderDays = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const prevDays = new Date(year, month, 0).getDate();

    let days = [];

    // previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div className="day muted" key={"p" + i}>
          {prevDays - firstDay + i + 1}
        </div>
      );
    }

    // current month
    for (let i = 1; i <= totalDays; i++) {
      const current = new Date(year, month, i);

      const isSelected =
        selected && current.toDateString() === selected.toDateString();

      days.push(
        <div
          key={i}
          className={`day ${isSelected ? "selected" : ""}`}
          onClick={() => setSelected(current)}
        >
          {i}
        </div>
      );
    }

    // next month
    const total = firstDay + totalDays;
    for (let i = 1; total + i <= 42; i++) {
      days.push(
        <div className="day muted" key={"n" + i}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">

      {/* LEFT */}
      <div className="calendar-box">
        <div className="calendar-header">
          <div className="nav-left">
            <span onClick={() => changeYear(setLeftDate, leftDate, -1)}>«</span>
            <span onClick={() => changeMonth(setLeftDate, leftDate, -1)}>‹</span>
          </div>

          <div className="month-title">
            {months[leftDate.getMonth()]} {leftDate.getFullYear()}
          </div>

          <div className="nav-right">
            <span onClick={() => changeMonth(setLeftDate, leftDate, 1)}>›</span>
            <span onClick={() => changeYear(setLeftDate, leftDate, 1)}>»</span>
          </div>
        </div>

        <div className="week">
          {"M T W T F S S".split(" ").map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        <div className="days">
          {renderDays(leftDate.getFullYear(), leftDate.getMonth())}
        </div>
      </div>

      <div className="divider"></div>

      {/* RIGHT */}
      <div className="calendar-box">
        <div className="calendar-header">
          <div className="nav-left">
            <span onClick={() => changeYear(setRightDate, rightDate, -1)}>«</span>
            <span onClick={() => changeMonth(setRightDate, rightDate, -1)}>‹</span>
          </div>

          <div className="month-title">
            {months[rightDate.getMonth()]} {rightDate.getFullYear()}
          </div>

          <div className="nav-right">
            <span onClick={() => changeMonth(setRightDate, rightDate, 1)}>›</span>
            <span onClick={() => changeYear(setRightDate, rightDate, 1)}>»</span>
          </div>
        </div>

        <div className="week">
          {"M T W T F S S".split(" ").map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        <div className="days">
          {renderDays(rightDate.getFullYear(), rightDate.getMonth())}
        </div>
      </div>

    </div>
  );
};

export default Calendar;