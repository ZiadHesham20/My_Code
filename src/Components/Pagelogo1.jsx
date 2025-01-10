import React, { useEffect, useState } from 'react';

export default function Pagelogo1() {
  const data = [50, 70, 30, 90, 60, 80, 40, 100]; // بيانات الرسم البياني
  const maxVal = Math.max(...data); // أعلى قيمة لتطبيع البيانات
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  // تأثير زيادة الأرقام
  useEffect(() => {
    const incrementCounter = (setter, target) => {
      const interval = setInterval(() => {
        setter((prev) => {
          if (prev < target) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 20);
    };
    incrementCounter(setCounter1, 100);
    incrementCounter(setCounter2, 100);
    incrementCounter(setCounter3, 100);
  }, []);

  return (
    <div className="space-y-10">
      {/* الرسم البياني */}
      <div className="w-[600px] h-[300px] mx-auto relative bg-gradient-to-b from-pink-100 to-gray-100 shadow-lg rounded-lg p-4">
        <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
          {data.map((value, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 50 - (value / maxVal) * 50;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="1.5"
                className="fill-pink-500 animate-pulse"
              />
            );
          })}

          <polyline
            className="fill-none stroke-pink-500 stroke-[0.5] stroke-linejoin-round stroke-linecap-round animate-dash"
            points={data
              .map(
                (value, index) =>
                  `${(index / (data.length - 1)) * 100},${50 - (value / maxVal) * 50}`
              )
              .join(' ')}
          />
        </svg>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 font-sans text-sm text-pink-500 animate-fade">
          Animating...
        </div>
      </div>

      {/* القسم الآخر مع الدوائر */}
      <div className="flex justify-center gap-8">
        {[counter1, counter2, counter3].map((counter, index) => (
          <div
            key={index}
            className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-pink-300 to-gray-300 rounded-full shadow-md text-xl font-bold text-gray-700 animate-pulse"
          >
            {counter}
          </div>
        ))}
      </div>
    </div>
  );
}