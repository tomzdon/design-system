
import './App.scss';
import { RangeSelector } from './RangeSelector/RangeSelector';

function App() {
  const handleGenerate = (value: number) => {
    console.log('Generated value:', value);
  };

  return (
    <div className="min-h-screen bg-lighter p-4">
      <div className="max-w-[700px] mx-auto">
        <RangeSelector onGenerate={handleGenerate} />
      </div>
    </div>
  );
}

export default App;
