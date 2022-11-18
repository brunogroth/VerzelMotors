import { Request, Response } from "express";
import { Make } from "../../models/Make";

export async function listMakes(req: Request, res: Response) {
  try {
    const makes = await Make.find();

    res.json(makes);
  } catch {
    res.send(500);
  }
}