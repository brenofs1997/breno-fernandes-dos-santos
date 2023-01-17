import { Request, Response } from 'express';
import { Client } from '../../models/Client';

export async function updateClient(req: Request, res: Response) {

    try {
        // nome, email, telefone, endereço e cpf.
        const { clientId, name, email, phone, adress, cpf } = req.body;

        const client = await Client.findByIdAndUpdate(clientId,
            {
                name,
                email,
                phone,
                adress,
                cpf,
            });

        return res.status(204).json({ message: "Operação realizada com sucesso!" });

    } catch (error) {
        console.log(error);

        res.status(500);
    }

}
