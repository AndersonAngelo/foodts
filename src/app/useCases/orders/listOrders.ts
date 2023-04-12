import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {

    const orders = await Order.find().populate({ path: 'products', select: 'product.ref' });

    res.status(200).json(orders);

  } catch(e) {
    console.error(e);
    res.sendStatus(500);
  }
}