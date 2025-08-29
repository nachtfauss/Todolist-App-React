import { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => setInputText(e.target.value);

  const handleSubmit = () => {
    if (inputText.trim() === '') return;
    onAdd(inputText.trim());
    setInputText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const isEmpty = inputText.trim() === '';

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Masukkan tugas baru..."
        className="flex-grow p-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
      />
      <button onClick={handleSubmit} disabled={isEmpty} className={`px-4 py-2 rounded-xl text-white transition ${isEmpty ? 'bg-slate-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 active:scale-[0.98]'}`}>
        Tambah
      </button>
    </div>
  );
};

export default TodoInput;
