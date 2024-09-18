import { fetchRecords } from '../services/api';
import { useState } from 'react';

const SearchBar = ({ setRecords }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const records = await fetchRecords();
    const filteredRecords = records.filter(record =>
      new Date(record.date).toLocaleDateString().includes(searchTerm)
    );
    setRecords(filteredRecords);
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded-lg w-1/2"
        placeholder="Search by date..."
      />
      <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
    </div>
  );
};

export default SearchBar;
