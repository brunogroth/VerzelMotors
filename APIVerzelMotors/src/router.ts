import path from 'node:path';
// Router para handle de http requests
import { Router } from 'express';

// Multer para fazer o Parse do FormData
import multer from 'multer';

import { createMake } from './app/useCases/makes/createMake';
import { listMakes } from './app/useCases/makes/listMakes';
import { createVehicle } from './app/useCases/vehicles/createVehicle';
import { listVehicles } from './app/useCases/vehicles/listVehicles';
import { editVehicle } from './app/useCases/vehicles/editVehicle';
import { deleteVehicle } from './app/useCases/vehicles/deleteVehicle';
import { listVehiclesByMake } from './app/useCases/makes/listVehiclesByMake';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
  destination(req, file, callback) {
    // Armazenamento das imagens na pasta Uploads
    callback(null, path.resolve(__dirname, '..', 'uploads'));
  },
  // Construção do nome do arquivo
  filename(req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
})});

// List Makes
router.get('/makes', listMakes);

// Create Maker
router.post('/makes', upload.single('imagePath'), createMake);

//Get Vehicles by Maker
router.get('/makes/:makeId/vehicles', listVehiclesByMake);

// Create Vehicle
router.post('/vehicles', upload.single('imagePath'), createVehicle);

// List Vehicles
router.get('/vehicles', upload.single('imagePath'), listVehicles);

// Edit Vehicle
router.patch('/vehicles/:vehicleId',upload.single('imagePath'), editVehicle);

// Delete Vehicle
router.delete('/vehicles/:vehicleId', deleteVehicle);