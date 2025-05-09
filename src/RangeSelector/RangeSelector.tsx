
import { useState, ChangeEvent } from 'react';
import { Button } from '../Button/Button';
import clsx from 'clsx';

type RangeSelectorProps = {
  min?: number;
  max?: number;
  defaultValue?: number;
  onGenerate?: (value: number) => void;
  className?: string;
  showTitle?: boolean;
  showGenerateButton?: boolean;
  onChange?: (value: number) => void;
};

export const RangeSelector = ({
  min = 2,
  max = 1000,
  defaultValue = 2,
  onGenerate,
  className,
  showTitle = true,
  showGenerateButton = true,
  onChange,
}: RangeSelectorProps) => {
  const [value, setValue] = useState(defaultValue);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className={clsx('bg-white rounded-lg shadow-md p-5', className)}>
      {showTitle && (
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-darker text-lg font-medium">Bet Builder</h2>
            <span className="cursor-pointer">ⓘ</span>
          </div>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-darker"
          >
            {isCollapsed ? '▼' : '▲'}
          </button>
        </div>
      )}
      
      {!isCollapsed && (
        <>
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleSliderChange}
                className="w-full appearance-none h-2 bg-lighter rounded-lg accent-primary"
              />
              <input
                type="number"
                min={min}
                max={max}
                value={value}
                onChange={handleInputChange}
                className="w-20 p-2 border border-lighter rounded-lg text-center"
              />
            </div>
          </div>
          
          {showGenerateButton && (
            <div className="flex justify-end">
              <Button
                variant="secondary"
                title="Generate"
                onClick={() => onGenerate?.(value)}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
