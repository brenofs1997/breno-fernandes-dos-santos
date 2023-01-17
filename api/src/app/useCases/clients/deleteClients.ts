import { Request, Response} from 'express';
import { Client } from '../../models/Client';

export async function deleteClient(req:Request,res:Response) {

  try {
    const  { clientId } = req.params;

    await Client.findByIdAndDelete(clientId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);

    res.status(500);
  }

}