import { useState } from 'react';
import './App.scss';
import { RangeSelector } from './RangeSelector/RangeSelector';
import { BetslipModal } from './components/BetslipModal/BetslipModal';
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleGenerate = (value: number) => {
    console.log('Generated value:', value);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-lighter p-4">
      <div className="max-w-[700px] mx-auto">
        <RangeSelector onGenerate={handleGenerate} />
        {showModal && <BetslipModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default App;
