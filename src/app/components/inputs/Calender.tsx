"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type CalenderProps = {
  value: Range;
  onChange: (valeu: RangeKeyDict) => void;
  disabledDates?: Date[];
};

export default function Calender({
  value,
  onChange,
  disabledDates,
}: CalenderProps) {
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
}
