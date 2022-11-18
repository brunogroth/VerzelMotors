import { Request, Response } from "express";
import { Make } from "../../models/Make";


export async function createMake(req: Request, res: Response) {
  try {
    const { name } = req.body;
    const imagePath = req.file?.filename;
    console.log({ name, imagePath });

    const make = await Make.create({ name, imagePath });

    res.json(make);
  } catch (error) {


    res.sendStatus(500);
  }
}