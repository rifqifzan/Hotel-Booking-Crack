"use client";

import { useState } from "react";
import { useActionState } from "react";
import { addDays } from "date-fns";

import { createReserve } from "@/lib/actions";
import { RoomProps2, DisabledDateProps } from "@/types/room";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";

const ReserveForm = ({
  room,
  disabledDate,
}: {
  room: RoomProps2;
  disabledDate: DisabledDateProps[];
}) => {
  const StartDate = new Date();
  const EndDate = addDays(StartDate, 1);

  const [startDate, setStartDate] = useState(StartDate);
  const [endDate, setEndDate] = useState(EndDate);

  const handleDateChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const [state, formAction, isPending] = useActionState(
    createReserve.bind(null, room.id, room.price, startDate, endDate),
    null
  );

  const excludeDates = disabledDate.map((item) => {
    return {
      start: item.startDate,
      end: item.endDate,
    };
  });

  return (
    <div>
      <form action={formAction} className="space-y-6">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-emerald-900 uppercase tracking-wider">
            Arrival - Departure*
          </label>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange={true}
            dateFormat={"dd-MM-YYYY"}
            onChange={handleDateChange}
            excludeDateIntervals={excludeDates}
            wrapperClassName="w-full"
            className="py-2.5 px-0 bg-transparent border-b border-gray-300 w-full focus:outline-none focus:border-emerald-900 font-light text-slate-700 placeholder-slate-400 transition-colors"
          />

          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.messageDate}</p>
          </div>
        </div>
        {/* Your Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-emerald-900 uppercase tracking-wider"
          >
            Your Name*
          </label>
          <input
            type="text"
            name="name"
            className="py-2.5 px-0 bg-transparent border-b border-gray-300 w-full focus:outline-none focus:border-emerald-900 font-light text-slate-700 placeholder-slate-400 transition-colors"
            placeholder="Full Name..."
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
          </div>
        </div>
        {/* Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-emerald-900 uppercase tracking-wider"
          >
            Phone Number*
          </label>
          <input
            type="text"
            name="phone"
            className="py-2.5 px-0 bg-transparent border-b border-gray-300 w-full focus:outline-none focus:border-emerald-900 font-light text-slate-700 placeholder-slate-400 transition-colors"
            placeholder="Phone Number..."
          />
          <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500 mt-2">{state?.error?.phone}</p>
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className={clsx(
            "px-10 py-3 mt-6 text-center font-semibold text-white w-full bg-gold-400 rounded-[2px] cursor-pointer hover:bg-[#A37B5C] transition-colors duration-200 uppercase tracking-wider",
            {
              "opacity-50 cursor-progress": isPending,
            }
          )}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Reserve Now"}
        </button>
      </form>
    </div>
  );
};

export default ReserveForm;
