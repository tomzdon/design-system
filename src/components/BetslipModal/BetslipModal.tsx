
import { FC } from 'react';
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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-t-lg w-full max-w-[700px] shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-lighter">
          <h2 className="text-xl font-medium text-darker">Generate betslip</h2>
          <button onClick={onClose} className="text-2xl text-dark hover:text-darker">&times;</button>
        </div>

        <div className="p-6 bg-lightest mx-4 my-3 rounded-lg">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-dark">2</span>
            <div className="flex-1">
              <input
                type="range"
                min={2}
                max={1000}
                value={value}
                className="w-full h-2 bg-lighter rounded-lg accent-success"
              />
            </div>
            <span className="text-sm text-dark">1000</span>
            <input
              type="number"
              value={value}
              className="w-16 p-2 border border-success rounded text-center"
            />
          </div>

          <div className="grid grid-cols-3 text-center">
            <div>
              <div className="text-xl font-bold mb-1 text-darker">14.00</div>
              <div className="text-sm text-dark">Target odds</div>
            </div>
            <div>
              <div className="text-xl font-bold mb-1 text-darker">14.18</div>
              <div className="text-sm text-dark">Actual odds</div>
            </div>
            <div>
              <div className="text-xl font-bold mb-1 text-darker">14</div>
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
                  <span className="text-purple">↑</span>
                </div>
                <span className="px-3 py-1 bg-dark/10 rounded-full text-sm">1.73</span>
              </div>
              <div className="font-bold text-darker mb-1">Manchester United - Athletic Bilbao</div>
              <div className="text-sm text-dark mb-1">Football / UEFA Europa League</div>
              <div className="font-bold text-darker flex items-center gap-1">
                Both teams to score - Full Time - Yes <span className="text-orange">🔥</span>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-4 bg-success font-bold uppercase text-darker rounded-b-lg hover:bg-success-dark transition-colors">
          Load Betslip
        </button>
      </div>
    </div>
  );
};
