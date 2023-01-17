import { Request, Response} from 'express';
import { Client } from '../../models/Client';

export async function createClient(req:Request,res:Response) {

  try {
   // nome, email, telefone, endereço e cpf.
    const { name, email, phone, adress, cpf } = req.body;

    const  client = await Client.create({
      name,
      email,
      phone,
      adress,
      cpf,
    });

    res.status(201).json(client);

  } catch (error) {
    console.log(error);

    res.status(500);
  }

}
