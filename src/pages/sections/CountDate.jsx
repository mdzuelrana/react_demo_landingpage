import React, { useState, useEffect } from "react";

const CountDate = () => {
  const [time, setTime] = useState({
    days: 30,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              if (days > 0) {
                days--;
              }
              else{
                days = 30;
                hours = 23;
                minutes = 59;
                seconds = 59;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center p-20 rounded-sm shadow-2xl  m-40 bg-gray-100">
    <div className="grid grid-flow-col gap-20 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": time.days }}>{time.days}</span>
        </span>
        days
      </div>

      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": time.hours }}>{time.hours}</span>
        </span>
        hours
      </div>

      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": time.minutes }}>{time.minutes}</span>
        </span>
        min
      </div>

      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": time.seconds }}>{time.seconds}</span>
        </span>
        sec
      </div>
    </div>
    </div>
  );
};

export default CountDate;