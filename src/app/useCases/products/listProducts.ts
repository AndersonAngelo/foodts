import { Request, Response } from "express";
import { Product } from "../../models/Product";


export async function listProducts(req: Request, res: Response) {
  try {

    const Products = await Product.find();

    res.json(Products)

  } catch(e) {
    console.error(e);
    res.sendStatus(500);
  }
}