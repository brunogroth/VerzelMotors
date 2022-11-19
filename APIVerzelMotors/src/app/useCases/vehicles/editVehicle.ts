import { Request, Response } from "express";
import { Vehicle } from "../../models/Vehicle";

export async function editVehicle(req: Request, res: Response) {
  try {
    const { vehicleId } = req.params;
    const { name, model, makeId, price, imagePath } = req.body;

    await Vehicle.findByIdAndUpdate(vehicleId, {name, model, makeId, price, imagePath});

    res.sendStatus(204);
  } catch {
    res.send(500);
  }
}
