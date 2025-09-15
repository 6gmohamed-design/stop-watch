import React, { useEffect, useState } from 'react';
import './p.css';

const Digitalwatch = () => {
  const [h, setH] = useState('');
  const [m, setM] = useState('');
  const [s, setS] = useState('');
  const [am_pm, setAm_pm] = useState('');
  const [day2, setDay2] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      setH(formattedHours < 10 ? '0' + formattedHours : formattedHours);
      setM(date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
      setS(date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
      setAm_pm(hours >= 12 ? 'pm' : 'am');
      setDay2(date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
      const realMonth = date.getMonth() + 1;
      setMonth(realMonth < 10 ? '0' + realMonth : realMonth);
      setYear(date.getFullYear());
    };

    updateTime(); // أول مرة
    const interval = setInterval(updateTime, 1000); // كل ثانية

    return () => clearInterval(interval); // تنظيف عند الخروج
  }, []);

  return (
    <div className="containermain">
      <div className="digitalwatch fs-1 text-white text-center border rounded shadow-lg w-50 z-index-1 bg-warning mx-auto mt-5">
        Digitalwatch
      </div>
      <p className="digitalwatch fs-1 text-white text-center border rounded shadow-lg w-25 position-relative top-50 start-50 translate-middle z-index-1 bg-dark">
        {h}:{m}:{s} {am_pm}
      </p>
      <p className="digitalwatch fs-1 text-white text-center border rounded shadow-lg w-25 position-relative top-50 start-50 translate-middle z-index-1 bg-dark">
        {day2}/{month}/{year}
      </p>
    </div>
  );
};

export default Digitalwatch;