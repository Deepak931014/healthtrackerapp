import { useEffect, useState } from 'react';
import { fetchRecords, deleteRecord, updateRecord } from '../services/api';
import SearchBar from './SearchBar';

const HealthMetricsDashboard = ({ refresh }) => {
  const [records, setRecords] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    bodyTemperature: '',
    systolic: '',
    diastolic: '',
    heartRate: '',
  });

  // Fetch records from the server
  const loadRecords = async () => {
    try {
      const data = await fetchRecords();
      setRecords(data);
    } catch (error) {
      console.error('Failed to load records:', error);
    }
  };

  // Load records on component mount and when `refresh` changes
  useEffect(() => {
    loadRecords();
  }, [refresh]);

  // Handle record deletion
  const handleDelete = async (id) => {
    try {
      await deleteRecord(id);
      loadRecords();
    } catch (error) {
      console.error('Failed to delete record:', error);
    }
  };

  // Prepare form data for editing
  const handleEditClick = (record) => {
    setEditingRecord(record);
    setFormData({
      date: record.date,
      bodyTemperature: record.bodyTemperature,
      systolic: record.bloodPressure.systolic,
      diastolic: record.bloodPressure.diastolic,
      heartRate: record.heartRate,
    });
  };

  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRecord(editingRecord._id, {
        ...formData,
        bloodPressure: {
          systolic: formData.systolic,
          diastolic: formData.diastolic,
        },
      });
      setEditingRecord(null);
      loadRecords();
    } catch (error) {
      console.error('Failed to update record:', error);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <SearchBar setRecords={setRecords} />

      {editingRecord && (
        <div className="bg-white p-6 shadow-lg rounded-lg mb-6 md:mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Record</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Temperature (°C)</label>
                <input
                  type="number"
                  name="bodyTemperature"
                  value={formData.bodyTemperature}
                  onChange={handleFormChange}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Systolic Blood Pressure</label>
                <input
                  type="number"
                  name="systolic"
                  value={formData.systolic}
                  onChange={handleFormChange}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Diastolic Blood Pressure</label>
                <input
                  type="number"
                  name="diastolic"
                  value={formData.diastolic}
                  onChange={handleFormChange}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Heart Rate (bpm)</label>
                <input
                  type="number"
                  name="heartRate"
                  value={formData.heartRate}
                  onChange={handleFormChange}
                  className="mt-1 block w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Save</button>
              <button
                type="button"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                onClick={() => setEditingRecord(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {records.map((record) => (
          <div key={record._id} className="bg-white p-6 shadow-lg rounded-lg flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-800">{new Date(record.date).toLocaleDateString()}</h3>
            <p className="text-gray-700">Temperature: {record.bodyTemperature}°C</p>
            <p className="text-gray-700">Blood Pressure: {record.bloodPressure.systolic}/{record.bloodPressure.diastolic}</p>
            <p className="text-gray-700">Heart Rate: {record.heartRate} bpm</p>
            <div className="flex gap-4 mt-auto">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => handleEditClick(record)}>Edit</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={() => handleDelete(record._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthMetricsDashboard;
