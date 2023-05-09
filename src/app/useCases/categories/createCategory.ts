import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {

  try {
    const categories = await Category.create(req.body);

    res.status(201).send(categories);

  } catch(e) {
    console.error(e);
    res.sendStatus(500);
  }
}
