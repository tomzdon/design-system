
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
    <div className="fixed inset-0 bg-black/60 flex items-end animate-slide-up">
      <div className="bg-white rounded-t-lg w-full max-w-[700px] mx-auto shadow-xl">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-20 font-medium text-darker">Generate betslip</h2>
          <button onClick={onClose} className="text-24 text-dark">
            &times;
          </button>
        </div>

        <div className="p-4 border-b border-lighter">
          <div className="flex items-center gap-4 my-2 px-2">
            <span className="text-14">2</span>
            <div className="w-full bg-lighter rounded-full p-[2px]">
              <input
                type="range"
                min={2}
                max={1000}
                value={value}
                className="w-full h-2 bg-white rounded-full accent-primary"
              />
            </div>
            <span className="text-14">1000</span>
            <input
              type="number"
              value={value}
              className="w-16 p-2 border border-lighter rounded text-center"
            />
          </div>

          <div className="grid grid-cols-3 text-center mt-6">
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

        <div className="max-h-[400px] overflow-y-auto">
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
