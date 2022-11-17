import { Router } from 'express';
import { createMake } from './app/useCases/makes/createMake';
import { listMakes } from './app/useCases/makes/listMakes';

export const router = Router();

// List Makes
router.get('/makes', listMakes);

// Create Maker
router.post('/makes', createMake);

//Get Vehicles by Maker
router.get('/makes/:makeId/vehicles', (req, res) => {
  res.send('OK');
});

// Create Vehicle
router.post('/vehicles', (req, res) => {
  res.send('OK');
});
// List Vehicles
router.get('/vehicles', (req, res) => {
  res.send('OK');
});

// Edit Vehicle
router.patch('/vehicles/:vehicleId', (req, res) => {
  res.send('OK');
});

// Delete Vehicle
router.delete('/vehicles/:vehicleId', (req, res) => {
  res.send('OK');
});