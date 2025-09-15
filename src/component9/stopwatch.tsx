import { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (start) {
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current || undefined);
    }

    return () => clearInterval(timerRef.current || undefined);
  }, [start]);

  const handleReset = () => {
    setStart(false);
    setTime(0);
  };

  return (
    <div className="container text-dark p-5 border rounded mx-auto position-absolute top-50 start-50 translate-middle shadow-lg w-100" style={{ backgroundColor: "green", maxWidth: "600px", maxHeight: "600px" }}>
      <span className="fs-1 text-white text-decoration-underline text-center w-100 mt-2 mb-5 d-block">Stopwatch</span>
      <h1 className="fs-1 text-white text-center border rounded shadow-lg bg-dark w-100">
        {String(Math.floor(time / 3600000)).padStart(2, '0')}:
        {String(Math.floor((time % 3600000) / 60000)).padStart(2, '0')}:
        {String(Math.floor((time % 60000) / 1000)).padStart(2, '0')}:
        {String(Math.floor((time % 1000) / 10)).padStart(2, '0')}
      </h1>
      <div className="buttons d-flex justify-content-between">
        <button onClick={() => setStart(true)} className="btn btn-primary w-25">Start</button>
        <button onClick={() => setStart(false)} className="btn btn-danger w-25">Stop</button>
        <button onClick={handleReset} className="btn btn-secondary w-25">Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;