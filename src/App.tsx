import { ChangeEvent, useState } from 'react';
import { useDebounce } from './shared/hooks/useDebounce';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const searchTerm = useDebounce(inputValue, 300);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>UseDebounce</h1>
      <input type="text" value={inputValue} onChange={onChangeInput} />

      <p className="searchResult">{searchTerm}</p>
    </div>
  );
}

export default App;
