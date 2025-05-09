
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
      <div className="w-full max-w-[700px] bg-white rounded-t-lg shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Generate betslip</h2>
          <button className="text-darker">&times;</button>
        </div>

        <div className="p-4">
          <RangeSelector
            min={2}
            max={1000}
            defaultValue={targetOdds}
            onGenerate={setTargetOdds}
          />

          <div className="grid grid-cols-3 gap-4 mt-6 pb-4 border-b">
            <div>
              <div className="text-sm text-gray-600">Target odds</div>
              <div className="font-bold text-lg">{targetOdds.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Actual odds</div>
              <div className="font-bold text-lg">{actualOdds.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Selections</div>
              <div className="font-bold text-lg">{matches.length}</div>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {matches.map((match, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span>{match.time} {match.date}</span>
                    {match.isPopular && <span className="text-purple-500">↑</span>}
                  </div>
                  <div className="text-sm text-gray-600">{match.league}</div>
                  <div className="font-medium">{match.description}</div>
                </div>
                <div className="px-3 py-1 bg-gray-100 rounded-full">
                  {match.odds.toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Button
              title="Load betslip"
              variant="primary"
              className="w-full"
              onClick={() => console.log('Loading betslip...')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
