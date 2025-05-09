
import { FC } from 'react';
import { RangeSelector } from '../../RangeSelector/RangeSelector';

interface BetslipModalProps {
  onClose: () => void;
}

export const BetslipModal: FC<BetslipModalProps> = ({ onClose }) => {
  const handleGenerate = (value: number) => {
    console.log('Modal odds value:', value);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-t-lg shadow-lg w-full max-w-[700px]">
        <div className="flex items-center justify-between p-4 border-b border-lighter">
          <h2 className="text-20 font-bold text-darker">Generate betslip</h2>
          <button onClick={onClose} className="text-24 text-dark">&times;</button>
        </div>
        <RangeSelector onGenerate={handleGenerate} className="border-b-0" />
      </div>
    </div>
  );
};
