import './App.scss';
import { Button } from './Button/Button.tsx';

function App() {
  return (
    <>
      <div className="bg-primary text-white p-4">Tailwind?</div>
      <Button title={'BetPawa'} size="medium" variant="secondary"></Button>
    </>
  );
}

export default App;
