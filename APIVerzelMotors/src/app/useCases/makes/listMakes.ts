import { Request, Response } from "express";
import { Make } from "../../models/Make";

export async function listMakes(req:Request, res:Response){
  const makes = await Make.find();

  res.json(makes);
}