import { useState, useEffect } from 'react';

export default function CustomAlert({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      const timeoutId = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [message, onClose]);

  return (
    <div className={`custom-alert ${isVisible ? 'visible' : ''}`}>
      {message}
      <style jsx>{`
        .custom-alert {
            display: none;
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: #6286e6;
            font-weight: bold;
            color: white;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left:30px;
            padding-right:30px;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
        }

        .visible {
          display: block;
        }
      `}</style>
    </div>
  );
}
