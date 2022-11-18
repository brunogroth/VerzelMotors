import { Request, Response } from "express";
import { Vehicle } from "../../models/Vehicle";
export async function listVehicles(req: Request, res: Response) {
  try {
    const vehicles = await Vehicle.find();

    res.json(vehicles);
  } catch {
    res.send(500);
  }
}