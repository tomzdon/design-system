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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-t-lg w-full max-w-[700px] shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-lighter">
          <h2 className="text-20 font-medium text-darker">Generate betslip</h2>
          <button onClick={onClose} className="text-24 text-dark">
            &times;
          </button>
        </div>

        <div className="p-4 border-b border-lighter">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-14">2</span>
            <input
              type="range"
              min={2}
              max={1000}
              value={value}
              className="w-full h-2 bg-lighter rounded accent-primary"
            />
            <span className="text-14">1000</span>
            <input
              type="number"
              value={value}
              className="w-16 p-2 border border-primary rounded text-center"
            />
          </div>

          <div className="grid grid-cols-3 text-center">
            <div>
              <div className="text-14 text-dark mb-1">Target odds:</div>
              <div className="text-16 font-bold">14.00</div>
            </div>
            <div>
              <div className="text-14 text-dark mb-1">Actual odds:</div>
              <div className="text-16 font-bold">14.18</div>
            </div>
            <div>
              <div className="text-14 text-dark mb-1">Selections:</div>
              <div className="text-16 font-bold">14</div>
            </div>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {[1, 2].map((i) => (
            <div key={i} className="p-4 border-b border-lighter">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-14">12:00pm Tue 15/12</span>
                  <span className="text-purple-500">↑</span>
                </div>
                <span className="px-3 py-1 bg-dark/10 rounded-full text-14">
                  1.73
                </span>
              </div>
              <div className="mb-1">Manchester United - Athletic Bilbao</div>
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
          className="w-full rounded-none py-4 uppercase"
        />
      </div>
    </div>
  );
};
