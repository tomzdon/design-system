
import { FC, useState, ChangeEvent, useEffect } from 'react';
import { Button } from '../../Button/Button';
import clsx from 'clsx';

interface Match {
  id: number;
  time: string;
  date: string;
  team1: string;
  team2: string;
  odds: number;
  league: string;
  market: string;
}

interface BetslipModalProps {
  onClose: () => void;
  initialRange: number;
}

export const BetslipModal: FC<BetslipModalProps> = ({
  onClose,
  initialRange,
}) => {
  const [value, setValue] = useState(initialRange);
  const [matches, setMatches] = useState<Match[]>([]);

  const clampValue = (val: number) => Math.min(Math.max(val, 2), 1000);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(clampValue(Number(e.target.value)));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue)) {
      setValue(clampValue(newValue));
    }
  };

  const generateMatches = (count: number) => {
    const teams = [
      'Manchester United',
      'Liverpool',
      'Arsenal',
      'Chelsea',
      'Barcelona',
      'Real Madrid',
      'Bayern Munich',
      'PSG',
    ];
    const leagues = [
      'Premier League',
      'La Liga',
      'Bundesliga',
      'Ligue 1',
      'UEFA Champions League',
    ];
    const markets = [
      'Both teams to score - Yes',
      'Over 2.5 goals',
      'Home win',
      'Away win',
      'Draw',
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      time: '12:00pm',
      date: 'Tue 15/12',
      team1: teams[Math.floor(Math.random() * teams.length)],
      team2: teams[Math.floor(Math.random() * teams.length)],
      odds: Number((1.5 + Math.random() * 2).toFixed(2)),
      league: leagues[Math.floor(Math.random() * leagues.length)],
      market: markets[Math.floor(Math.random() * markets.length)],
    }));
  };

  useEffect(() => {
    setMatches(generateMatches(value));
  }, [value]);

  const actualOdds = matches.reduce((acc, match) => acc * match.odds, 1);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-end animate-slide-up">
      <div className="bg-white rounded-t-lg w-full max-w-[700px] mx-auto shadow-xl flex flex-col max-h-[90vh]">
        <div className="sticky top-0 z-10 bg-white rounded-t-lg">
          <div className="h-1 bg-lighter rounded-t-lg cursor-grab"></div>
          <div className="flex items-center justify-between p-4 border-b border-lighter">
            <h2 className="text-20 font-bold text-darker">Generate betslip</h2>
            <button
              onClick={onClose}
              className="text-24 text-dark hover:text-darker">
              ×
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          <div className="p-4">
            <div className="bg-lightest rounded-lg p-4 mb-6">
              <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                <span className="text-14 text-dark">{2}</span>
                <div className="flex-1">
                  <input
                    type="range"
                    min={2}
                    max={1000}
                    value={value}
                    onChange={handleSliderChange}
                    className="w-full appearance-none h-2 bg-lighter rounded-lg accent-primary"
                  />
                </div>
                <span className="text-14 text-dark">{1000}</span>
                <input
                  type="number"
                  min={2}
                  max={1000}
                  value={value}
                  onChange={handleInputChange}
                  className="w-20 p-2 border border-lighter rounded-lg text-center"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-lighter text-center my-6 border-b border-lighter pb-6">
              <div>
                <div className="text-16 font-bold mb-1">14.00</div>
                <div className="text-14 text-dark">Target odds</div>
              </div>
              <div>
                <div className="text-16 font-bold mb-1">
                  {actualOdds.toFixed(2)}
                </div>
                <div className="text-14 text-dark">Actual odds</div>
              </div>
              <div>
                <div className="text-16 font-bold mb-1">{matches.length}</div>
                <div className="text-14 text-dark">Selections</div>
              </div>
            </div>

            <div className="space-y-4">
              {matches.map((match) => (
                <div key={match.id} className="p-4 border-b border-lighter">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-14">
                        {match.time} {match.date}
                      </span>
                      <span className="text-purple">↑</span>
                    </div>
                    <span className="px-3 py-1 bg-dark/10 rounded-full text-14">
                      {match.odds}
                    </span>
                  </div>
                  <div className="font-medium mb-1">
                    {match.team1} <span className="mx-1">–</span> {match.team2}
                  </div>
                  <div className="text-14 text-dark mb-1">
                    Football / {match.league}
                  </div>
                  <div className="font-bold">{match.market} 🔥</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 z-10 bg-white border-t border-lighter">
          <Button
            title="LOAD BETSLIP"
            variant="primary"
            className="w-full py-4 uppercase font-bold text-darker"
          />
        </div>
      </div>
    </div>
  );
};
