
import { FC } from 'react';
import { Button } from '../../Button/Button';
import clsx from 'clsx';

interface BetslipModalProps {
  onClose: () => void;
  value?: number;
}

export const BetslipModal: FC<BetslipModalProps> = ({
  onClose,
  value = 14,
}) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-end z-50 animate-slide-up">
      <div className="bg-white rounded-t-lg w-full max-w-[700px] mx-auto shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-lighter">
          <h2 className="text-xl font-medium text-darker">Generate betslip</h2>
          <button onClick={onClose} className="text-2xl text-dark hover:text-darker">
            &times;
          </button>
        </div>

        <div className="p-4 border-b border-lighter bg-gray-50 rounded-lg mx-4 my-3">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-dark">2</span>
            <div className="flex-1">
              <input
                type="range"
                min={2}
                max={1000}
                value={value}
                className="w-full h-2 bg-[#E5E5E5] rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#8CE563] cursor-pointer"
              />
            </div>
            <span className="text-sm text-dark">1000</span>
            <input
              type="number"
              value={value}
              className="w-16 p-2 border border-[#8CE563] rounded text-center"
            />
          </div>

          <div className="grid grid-cols-3 text-center">
            <div>
              <div className="text-xl font-bold mb-1">14.00</div>
              <div className="text-sm text-dark">Target odds</div>
            </div>
            <div>
              <div className="text-xl font-bold mb-1">14.18</div>
              <div className="text-sm text-dark">Actual odds</div>
            </div>
            <div>
              <div className="text-xl font-bold mb-1">14</div>
              <div className="text-sm text-dark">Selections</div>
            </div>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto divide-y divide-lighter">
          {[1, 2].map((i) => (
            <div key={i} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-dark">12:00pm Tue 15/12</span>
                  <span className="text-purple-500">↑</span>
                </div>
                <span className="px-3 py-1 bg-dark/10 rounded-full text-sm">
                  1.73
                </span>
              </div>
              <div className="font-bold mb-1">Manchester United – Athletic Bilbao</div>
              <div className="text-sm text-dark mb-1">
                Football / UEFA Europa League
              </div>
              <div className="font-bold">
                Both teams to score - Full Time - Yes 🔥
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-4 bg-[#8CE563] font-bold uppercase text-darker rounded-b-lg">
          Load Betslip
        </button>
      </div>
    </div>
  );
};
