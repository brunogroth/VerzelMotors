import { Request, Response } from "express";
import { Vehicle } from "../../models/Vehicle";

export async function deleteVehicle(req: Request, res: Response) {
  try {
    const { vehicleId } = req.params;

    await Vehicle.findByIdAndDelete(vehicleId);

    res.sendStatus(202);
  } catch {
    res.send(500);
  }
}
