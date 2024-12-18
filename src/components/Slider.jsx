import React from 'react';

const Slider = ({ 
  label, 
  value, 
  onChange, 
  min = 1, 
  max = 10 
}) => {
  // Calculate the width of the blue progress based on the current value
  const progressWidth = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full my-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative w-full h-2 bg-gray-200 rounded-lg">
        {/* Blue progress overlay */}
        <div 
          className="absolute top-0 left-0 h-2 bg-blue-600 rounded-lg" 
          style={{ width: `${progressWidth}%` }}
        />
        <input 
          type="range" 
          min={min} 
          max={max} 
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute top-0 left-0 w-full h-2 appearance-none cursor-pointer bg-transparent"
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-sm font-medium text-gray-500">{min}</span>
        <span className="text-2xl font-bold mt-1 text-gray-500">{value}</span>
        <span className="text-sm font-medium text-gray-500">{max}</span>
      </div>
    </div>
  );
};

export default Slider;