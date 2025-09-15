import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    let timer;

    if (start) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds + 1 === 60) {
            setMinutes(prevMinutes => {
              if (prevMinutes + 1 === 60) {
                setHours(prevHours => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }

    if (reset) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setStart(false);
      setReset(false);
    }

    return () => clearInterval(timer);
  }, [start, reset]);

  return (
    <>
      <div>Timer</div>
      <h1>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</h1>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
      <button onClick={() => setReset(true)}>Reset</button>
    </>
  );
};

export default Timer;