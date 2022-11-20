import { Request, Response } from "express";
import { Vehicle } from "../../models/Vehicle";

export async function createVehicle(req: Request, res: Response) {
  try {
    const { name, makeId, model, price } = req.body;
    const imagePath = req.file?.filename;

    const vehicle = await Vehicle.create({ name, makeId, model, price, imagePath });

    res.json(vehicle);
  } catch {
    res.send(500);
  }
}
