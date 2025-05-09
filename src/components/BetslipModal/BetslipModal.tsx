
import { useState } from 'react';
import { Button } from '../../Button/Button';
import { RangeSelector } from '../../RangeSelector/RangeSelector';

interface Match {
  time: string;
  date: string;
  league: string;
  description: string;
  odds: number;
  isPopular?: boolean;
}

export const BetslipModal = () => {
  const [targetOdds, setTargetOdds] = useState(2);
  const [matches] = useState<Match[]>([
    {
      time: '12:00pm',
      date: 'Tue 15/12',
      league: 'Football / UEFA Europa League',
      description: 'Both teams to score - Full Time - Yes 🔥',
      odds: 1.73,
      isPopular: true
    }
  ]);

  const actualOdds = matches.reduce((acc, match) => acc * match.odds, 1);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-[700px] bg-white rounded-t-lg shadow-xl">
        <div className="betslip-modal-handle" />
        
        <div className="flex justify-between items-center px-6 pb-4">
          <h2 className="text-xl font-semibold text-darker">Generate betslip</h2>
          <button className="text-2xl text-darker hover:opacity-70">&times;</button>
        </div>

        <div className="px-6 pb-6">
          <RangeSelector
            min={2}
            max={1000}
            defaultValue={targetOdds}
            onGenerate={setTargetOdds}
          />

          <div className="grid grid-cols-3 gap-8 mt-8 pb-6 border-b border-gray-200">
            <div>
              <div className="text-sm text-gray-600">Target odds</div>
              <div className="font-bold text-xl">{targetOdds.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Actual odds</div>
              <div className="font-bold text-xl">{actualOdds.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Selections</div>
              <div className="font-bold text-xl">{matches.length}</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {matches.map((match, index) => (
              <div key={index} className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="betslip-modal-match-time">
                      {match.time} {match.date}
                    </span>
                    {match.isPopular && (
                      <span className="betslip-modal-match-popular">↑</span>
                    )}
                  </div>
                  <div className="betslip-modal-match-league">{match.league}</div>
                  <div className="font-medium mt-1">{match.description}</div>
                </div>
                <div className="betslip-modal-badge">
                  {match.odds.toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button
              title="LOAD BETSLIP"
              variant="primary"
              className="w-full uppercase font-bold py-3"
              onClick={() => console.log('Loading betslip...')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
