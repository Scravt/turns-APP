import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, differenceInDays } from "date-fns";
import { getAppointmentConfig } from "../../../api/services/appointmentConfig";

const Step3 = () => {
    const { values, setFieldValue, errors, touched } = useFormikContext();
    const [selectedDate, setSelectedDate] = useState(values.date ? new Date(values.date) : null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [appointmenConfig, setAppointmenConfig] = useState(null);
    
    useEffect(() => {
        getAppointmentConfig()
            .then((config) => setAppointmenConfig(config))
            .catch(err => console.error("Error al obtener la configuración:", err));
    }, []);

    const mindays = appointmenConfig?.minWaitingDays ?? 0;
    const daysvalid = appointmenConfig?.datesAvailability ?? [];
    
    const availableSlots = {
        "2025-03-31": 3, // Lunes
        "2025-04-03": 5, // Jueves
        "2025-04-04": 2, // Viernes
        "2025-04-07": 4  // Lunes
    };
    const occupiedTimes = {
        "2025-03-17": ["08:00", "09:30"],
        "2025-03-24": ["10:00"]
    };

    const generateTimeSlots = () => {
        let times = [];
        for (let hour = 8; hour <= 11; hour++) {
            times.push(`${hour}:00`, `${hour}:30`);
        }
        return times;
    };

    const isSelectable = (date) => {
        if (!appointmenConfig) return false;
        const day = date.getDay();
        const formattedDate = format(date, "yyyy-MM-dd");
        const daysDifference = differenceInDays(date, new Date());
        return (
            daysvalid.includes(day) && 
            daysDifference >= mindays && 
            (availableSlots[formattedDate] ?? 0) > 0 
        );
    };

    useEffect(() => {
        if (selectedDate) {
            const formattedDate = format(selectedDate, "yyyy-MM-dd");
            const occupied = occupiedTimes[formattedDate] || [];
            setAvailableTimes(generateTimeSlots().filter(time => !occupied.includes(time)));
        }
    }, [selectedDate]);

    return (
        <div className="flex flex-col gap-4">
            <label className="font-medium">Fecha</label>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                    setSelectedDate(date);
                    setFieldValue("date", date ? format(date, "yyyy-MM-dd") : "");
                    setFieldValue("time", "");
                }}
                dateFormat="yyyy-MM-dd"
                className="p-2 border rounded w-full"
                filterDate={isSelectable}
                placeholderText="Selecciona una fecha"
                dayClassName={(date) => {
                    const formattedDate = format(date, "yyyy-MM-dd");
                    return isSelectable(date)
                        ? availableSlots[formattedDate] > 0
                            ? "text-green-600 font-bold"
                            : "text-red-600"
                        : "text-gray-400";
                }}
            />
            {touched.date && errors.date && <div className="text-red-500">{errors.date}</div>}

            {selectedDate && (
                <>
                    <label className="font-medium">Horario</label>
                    <select
                        name="time"
                        value={values.time}
                        onChange={(e) => setFieldValue("time", e.target.value)}
                        className="p-2 border rounded w-full"
                        disabled={availableTimes.length === 0}
                    >
                        <option value="">Selecciona un horario disponible</option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                    {touched.time && errors.time && <div className="text-red-500">{errors.time}</div>}
                    {availableTimes.length === 0 && (
                        <p className="text-red-500">No hay turnos disponibles para esta fecha</p>
                    )}
                </>
            )}
        </div>
    );
};

export default Step3;