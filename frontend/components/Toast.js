import { useState, useEffect } from 'react';

export function Toast({ message, type = 'success', duration = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const styles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white'
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <div className={`fixed bottom-4 right-4 ${styles[type]} px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-in-right z-50`}>
      <span className="text-2xl">{icons[type]}</span>
      <span className="font-semibold">{message}</span>
      <button onClick={() => setIsVisible(false)} className="ml-4 hover:opacity-75">
        ✕
      </button>
    </div>
  );
}