import React from 'react';

const Slider = ({ 
  label, 
  value, 
  onChange, 
  min = 1, 
  max = 10 
}) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex items-center">
        <input 
          type="range" 
          min={min} 
          max={max} 
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <span className="ml-4 text-sm font-medium text-gray-500">
          {value}
        </span>
      </div>
    </div>
  );
};

export default Slider;