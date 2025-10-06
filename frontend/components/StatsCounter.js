import { useState, useEffect } from 'react';

export function StatsCounter({ value, label, icon, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    let start = 0;
    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return (
    <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-white mb-1">
        {count.toLocaleString()}{value.replace(/\d/g, '')}
      </div>
      <div className="text-blue-200 text-sm">{label}</div>
    </div>
  );
}