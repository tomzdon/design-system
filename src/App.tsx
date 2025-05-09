import { useState } from 'react';
import './App.scss';
import { RangeSelector } from './RangeSelector/RangeSelector';
import { BetslipModal } from './components/BetslipModal/BetslipModal';
function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRange, setSelectedRange] = useState(2);

  const handleGenerate = (value: number) => {
    setSelectedRange(value);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-lighter p-4">
      <div className="max-w-[700px] mx-auto">
        <RangeSelector onGenerate={handleGenerate} />
        {showModal && <BetslipModal onClose={() => setShowModal(false)} initialRange={selectedRange} />}
      </div>
    </div>
  );
}

export default App;
