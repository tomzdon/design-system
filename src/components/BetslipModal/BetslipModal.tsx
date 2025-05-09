
import { FC, useState } from 'react';
import { Button } from '../../Button/Button';
import { RangeSelector } from '../../RangeSelector/RangeSelector';

type Match = {
  time: string;
  date: string;
  league: string;
  description: string;
  odds: number;
  isPopular?: boolean;
};

export const BetslipModal: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [selectedOdds, setSelectedOdds] = useState<number>(2);
  const [matches] = useState<Match[]>([
    {
      time: '12:00pm',
      date: 'Tue 15/12',
      league: 'Football / UEFA Europa League',
      description: 'Both teams to score - Full Time - Yes 🔥',
      odds: 1.73,
      isPopular: true,
    },
  ]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-t-lg shadow-lg w-full max-w-[700px]">
        <div className="flex items-center justify-between p-4 border-b border-lighter">
          <h2 className="text-20 font-bold">Generate betslip</h2>
          <button onClick={onClose} className="text-24">&times;</button>
        </div>
        
        <div className="p-4 border-b border-lighter">
          <RangeSelector onGenerate={(value) => setSelectedOdds(value)} />
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <div className="text-14 text-light">Target odds</div>
              <div className="text-16 font-bold">{selectedOdds.toFixed(2)}</div>
            </div>
            <div className="text-center">
              <div className="text-14 text-light">Actual odds</div>
              <div className="text-16 font-bold">14.00</div>
            </div>
            <div className="text-center">
              <div className="text-14 text-light">Selections</div>
              <div className="text-16 font-bold">{matches.length}</div>
            </div>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {matches.map((match, index) => (
            <div key={index} className="p-4 border-b border-lighter">
              <div className="flex items-center gap-2">
                <span className="text-purple">↑</span>
                <span className="text-14">{match.time} {match.date}</span>
              </div>
              <div className="text-14 text-light mt-1">{match.league}</div>
              <div className="flex items-center justify-between mt-1">
                <div className="font-bold">{match.description}</div>
                <div className="bg-lighter px-2 py-1 rounded">
                  {match.odds.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4">
          <Button 
            title="Load betslip"
            variant="primary"
            size="large"
            fullwidth
          />
        </div>
      </div>
    </div>
  );
};
