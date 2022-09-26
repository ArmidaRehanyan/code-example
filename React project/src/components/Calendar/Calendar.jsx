import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./Calendar.module.css"

export default function TableDatePicker() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    return (
        <div className={style.calendar}>
            <div className={style.startData}>
                <p className={style.dataTitle}>Departure time</p>
                <DatePicker
                    isClearable
                    filterDate={d => {
                        return new Date() < d;
                    }}
                    placeholderText="Select Start Date"
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={date => setStartDate(date)}
                />
            </div>
            <div className={style.endData}>
                <p className={style.dataTitle}>Return time</p>
                <DatePicker
                    isClearable
                    placeholderText="Select End Date"
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={date => setEndDate(date)}
                />
            </div>
        </div>
    );
}