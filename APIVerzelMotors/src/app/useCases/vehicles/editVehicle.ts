import { Request, Response } from "express";
import { Vehicle } from "../../models/Vehicle";

export async function createVehicle(req: Request, res: Response) {
  try {
    const { vehicleId } = req.params;


    // res.json(vehicle);
  } catch {
    res.send(500);
  }
}
