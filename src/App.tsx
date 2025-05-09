
import { useState } from 'react';
import './App.scss';
import { Button } from './Button/Button';
import { BetslipModal } from './components/BetslipModal/BetslipModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-lighter p-4">
      <div className="max-w-[700px] mx-auto">
        <Button 
          title="Generate Betslip" 
          variant="primary" 
          onClick={() => setShowModal(true)}
        />
        {showModal && <BetslipModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default App;
