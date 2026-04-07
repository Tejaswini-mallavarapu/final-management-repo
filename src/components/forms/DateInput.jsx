import { useState, useRef, useEffect } from "react";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardDoubleArrowLeft,
    MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Images } from "../../images/Images";

const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
];

const DateInput = () => {
    const [show, setShow] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const ref = useRef();

    useEffect(() => {
        const handleClick = (e) => {
            if (!ref.current?.contains(e.target)) setShow(false);
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    const formatDate = (date) => {
        if (!date) return "dd/mm/yyyy";
        const d = date.getDate().toString().padStart(2, "0");
        const m = (date.getMonth() + 1).toString().padStart(2, "0");
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    };

    const changeMonth = (val) => {
        const d = new Date(currentDate);
        d.setMonth(d.getMonth() + val);
        setCurrentDate(d);
    };

    const changeYear = (val) => {
        const d = new Date(currentDate);
        d.setFullYear(d.getFullYear() + val);
        setCurrentDate(d);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setShow(false);
    };

    const renderDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

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
            const isSelected =
                selectedDate &&
                current.toDateString() === selectedDate.toDateString();
            days.push(
                <div
                    key={i}
                    className={`day ${isSelected ? "selected" : ""}`}
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
        <div className="custom-select " ref={ref}>
            <div
                className="select-box"
                onClick={(e) => {
                    e.stopPropagation();
                    setShow(!show);
                }}
            >
                <span className={!selectedDate ? "placeholder" : ""}>
                    {formatDate(selectedDate)}
                </span>
                <span>
                    <img src={Images.calendar1} alt="calendar" />
                </span>
            </div>

            {show && (
                <div
                    className="calendar-container"
                    style={{ left: "10px" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="calendar-box"> 
                        <div className="calendar-header">
                            <div className="nav-group">
                                <span onClick={() => changeYear(-1)}>
                                    <MdOutlineKeyboardDoubleArrowLeft />
                                </span>
                                <span onClick={() => changeMonth(-1)}>
                                    <MdOutlineKeyboardArrowLeft />
                                </span>
                            </div>
                            <div className="month-title">
                                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                            </div>
                            <div className="nav-group">
                                <span onClick={() => changeMonth(1)}>
                                    <MdOutlineKeyboardArrowRight />
                                </span>
                                <span onClick={() => changeYear(1)}>
                                    <MdOutlineKeyboardDoubleArrowRight />
                                </span>
                            </div>
                        </div>
                        <div className="week">
                            {"M T W T F S S".split(" ").map((d) => (
                                <span key={d}>{d}</span>
                            ))}
                        </div>
                        <div className="days">{renderDays()}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateInput;