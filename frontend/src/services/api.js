import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchRecords = async () => {
  const response = await axios.get(`${API_BASE_URL}/health-records`);
  return response.data;
};

export const fetchRecordById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/health-records/${id}`);
  return response.data;
};

export const createRecord = async (record) => {
  const response = await axios.post(`${API_BASE_URL}/health-records`, record);
  return response.data;
};

export const updateRecord = async (id, updatedRecord) => {
  const response = await axios.put(`${API_BASE_URL}/health-records/${id}`, updatedRecord);
  return response.data;
};

export const deleteRecord = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/health-records/${id}`);
  return response.data;
};
