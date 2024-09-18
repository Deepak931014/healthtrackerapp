import { useState } from 'react';
import { createRecord } from '../services/api';

const AddHealthRecordForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    date: '',
    bodyTemperature: '',
    systolic: '',
    diastolic: '',
    heartRate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const record = {
      ...formData,
      bloodPressure: {
        systolic: formData.systolic,
        diastolic: formData.diastolic,
      },
    };
    try {
      await createRecord(record);
      if (typeof onAdd === 'function') {
        onAdd(); // Call the onAdd function passed from the parent
      }
      setFormData({
        date: '',
        bodyTemperature: '',
        systolic: '',
        diastolic: '',
        heartRate: '',
      });
    } catch (error) {
      console.error('Failed to create record:', error);
    }
  };

  return (
    <form className="w-full max-w-lg mx-auto p-4 bg-white shadow-lg rounded-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Body Temperature (°C)</label>
        <input
          type="number"
          name="bodyTemperature"
          value={formData.bodyTemperature}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Systolic Blood Pressure</label>
        <input
          type="number"
          name="systolic"
          value={formData.systolic}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Diastolic Blood Pressure</label>
        <input
          type="number"
          name="diastolic"
          value={formData.diastolic}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Heart Rate (bpm)</label>
        <input
          type="number"
          name="heartRate"
          value={formData.heartRate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Submit</button>
    </form>
  );
};

export default AddHealthRecordForm;
