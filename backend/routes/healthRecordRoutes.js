const express = require('express');
const { createHealthRecord, getHealthRecords, getHealthRecordById, updateHealthRecord, deleteHealthRecord } = require('../controllers/healthRecordController');
const router = express.Router();

router.post('/health-records', createHealthRecord);
router.get('/health-records', getHealthRecords);
router.get('/health-records/:id', getHealthRecordById);
router.put('/health-records/:id', updateHealthRecord);
router.delete('/health-records/:id', deleteHealthRecord);

module.exports = router;
