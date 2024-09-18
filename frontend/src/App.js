import { useState } from 'react';
import AddHealthRecordForm from './components/AddHealthRecordForm';
import HealthMetricsDashboard from './components/HealthMetricsDashboard';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => {
    setRefresh(!refresh); // Toggle refresh state to trigger reloading
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-500 to-green-400 py-12">
        <h1 className="text-4xl font-extrabold text-white text-center drop-shadow-lg">
          Health Tracking Dashboard
        </h1>
      </header>
      <div className="p-6">
        <AddHealthRecordForm onAdd={handleAdd} />
        <HealthMetricsDashboard refresh={refresh} />
      </div>
    </div>
  );
}

export default App;
