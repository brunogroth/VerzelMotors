import { Request, Response } from "express";
import { Make } from "../../models/Make";
import { Vehicle } from "../../models/Vehicle";

export async function listVehiclesByMake(req:Request, res:Response) {
  try {
    const  { makeId } = req.params;

    const vehicle = await Vehicle.find().where('makeId').equals(makeId);

    res.json(vehicle);
  } catch {
    res.send(500);
  }

}