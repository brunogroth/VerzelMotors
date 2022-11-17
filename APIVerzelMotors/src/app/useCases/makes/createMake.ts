import { Request, Response } from "express";
import { Make } from "../../models/Make";

export async function createMake(req:Request, res:Response) {
  const { name, imagePath } = req.body;

  const make = await Make.create({name, imagePath});

  res.json(make);
}