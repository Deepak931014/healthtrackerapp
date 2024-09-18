const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  bodyTemperature: { type: Number, required: true },
  bloodPressure: {
    systolic: { type: Number, required: true },
    diastolic: { type: Number, required: true },
  },
  heartRate: { type: Number, required: true },
}, { timestamps: true });

const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema);
module.exports = HealthRecord;
