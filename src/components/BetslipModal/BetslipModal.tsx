import { FC, useState, ChangeEvent } from 'react';
import { Button } from '../../Button/Button';
import clsx from 'clsx';

interface BetslipModalProps {
  onClose: () => void;
  value?: number;
}

export const BetslipModal: FC<BetslipModalProps> = ({
  onClose,
  value: initialValue = 14,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= 2 && newValue <= 1000) {
      setValue(newValue);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-end animate-slide-up">
      <div className="bg-white rounded-t-lg w-full max-w-[700px] mx-auto shadow-xl">
        <div className="h-1 bg-lighter rounded-t-lg cursor-grab"></div>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-20 font-bold text-darker">Generate betslip</h2>
          <button onClick={onClose} className="text-24 text-dark hover:text-darker">
            ×
          </button>
        </div>

        <div className="px-6">
          <div className="bg-lightest rounded-lg p-4 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-14 text-dark">2</span>
              <div className="w-full bg-lighter rounded-full h-2">
                <input
                  type="range"
                  min={2}
                  max={1000}
                  value={value}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-transparent rounded-full accent-success"
                />
              </div>
              <span className="text-14 text-dark">1000</span>
              <input
                type="number"
                value={value}
                onChange={handleInputChange}
                className="w-16 p-2 border border-success bg-white rounded text-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-lighter text-center border-b border-lighter pb-6">
            <div>
              <div className="text-16 font-bold mb-1">14.00</div>
              <div className="text-14 text-dark">Target odds</div>
            </div>
            <div>
              <div className="text-16 font-bold mb-1">14.18</div>
              <div className="text-14 text-dark">Actual odds</div>
            </div>
            <div>
              <div className="text-16 font-bold mb-1">14</div>
              <div className="text-14 text-dark">Selections</div>
            </div>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto p-4">
          {[1, 2].map((i) => (
            <div key={i} className="p-4 border-b border-lighter">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-14">12:00pm Tue 15/12</span>
                  <span className="text-purple">↑</span>
                </div>
                <span className="px-3 py-1 bg-dark/10 rounded-full text-14">
                  1.73
                </span>
              </div>
              <div className="font-medium mb-1">
                Manchester United <span className="mx-1">–</span> Athletic Bilbao
              </div>
              <div className="text-14 text-dark mb-1">
                Football / UEFA Europa League
              </div>
              <div className="font-bold">
                Both teams to score - Full Time - Yes 🔥
              </div>
            </div>
          ))}
        </div>

        <Button
          title="LOAD BETSLIP"
          variant="primary"
          className="w-full py-4 uppercase font-bold text-darker"
        />
      </div>
    </div>
  );
};