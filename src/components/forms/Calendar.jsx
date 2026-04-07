import React, { useState, useRef, useEffect } from "react";
import { Images } from "../../images/Images";
import { MdOutlineKeyboardDoubleArrowLeft,MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight,MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const Calendar = () => {
  const [show, setShow] = useState(false);

  const [leftDate, setLeftDate] = useState(new Date(2024, 1));
  const [rightDate, setRightDate] = useState(new Date(2024, 2));

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current?.contains(e.target)) setShow(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const formatRange = () => {
  if (!startDate) return "Select Date Range";

  const format = (d) =>
    d.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

  if (startDate && !endDate) return format(startDate);

  return `${format(startDate)} - ${format(endDate)}`;
};

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };
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
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div className="day muted" key={"p" + i}>
          {prevDays - firstDay + i + 1}
        </div>
      );
    }
    for (let i = 1; i <= totalDays; i++) {
      const current = new Date(year, month, i);
      const isStart =
        startDate && current.toDateString() === startDate.toDateString();
      const isEnd =
        endDate && current.toDateString() === endDate.toDateString();
      const inRange =
        startDate && endDate && current > startDate && current < endDate;
      days.push(
        <div
          key={i}
          className={`day 
            ${isStart || isEnd ? "selected" : ""} 
            ${inRange ? "in-range" : ""}
          `}
          onClick={() => handleDateClick(current)}
        >
          {i}
        </div>
      );
    }
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
    <div className="calendar-wrapper" ref={ref}>
      <div className="calendar-input" onClick={() => setShow(!show)}>
        <img src={Images.calendar1} alt="Error" />
        <span>{formatRange()}</span>
        <span>{show ? <img src={Images.uparrow} alt="error"/> : <img src={Images.dropdown} alt="error"/>}</span>
      </div>
      {show && (
        <div className="calendar-container">
          <div className="calendar-box">
            <div className="calendar-header">
              <div className="nav-group">
                <span onClick={() => changeYear(setLeftDate, leftDate, -1)}><MdOutlineKeyboardDoubleArrowLeft /></span>
                <span onClick={() => changeMonth(setLeftDate, leftDate, -1)}><MdOutlineKeyboardArrowLeft /></span>
              </div>
              <div className="month-title">
                {months[leftDate.getMonth()]} {leftDate.getFullYear()}
              </div>
              <div className="nav-group">
                <span onClick={() => changeMonth(setLeftDate, leftDate, 1)}><MdOutlineKeyboardArrowRight /></span>
                <span onClick={() => changeYear(setLeftDate, leftDate, 1)}><MdOutlineKeyboardDoubleArrowRight /></span>
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
          <div className="calendar-box">
            <div className="calendar-header">
              <div className="nav-group">
                <span onClick={() => changeYear(setRightDate, rightDate, -1)}><MdOutlineKeyboardDoubleArrowLeft /></span>
                <span onClick={() => changeMonth(setRightDate, rightDate, -1)}><MdOutlineKeyboardArrowLeft /></span>
              </div>
              <div className="month-title">
                {months[rightDate.getMonth()]} {rightDate.getFullYear()}
              </div>
              <div className="nav-group">
                <span onClick={() => changeMonth(setRightDate, rightDate, 1)}><MdOutlineKeyboardArrowRight /></span>
                <span onClick={() => changeYear(setRightDate, rightDate, 1)}><MdOutlineKeyboardDoubleArrowRight /></span>
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
      )}
    </div>
  );
};

export default Calendar;