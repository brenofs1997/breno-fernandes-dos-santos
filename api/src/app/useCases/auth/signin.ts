import { Request, Response} from 'express';
import { User } from '../../models/User';
import { compare } from 'bcryptjs';

export async function signin(req:Request,res:Response) {

  try {
 
    const { username, password, } = req.body;

    if (!username) {
        return res.status(400).send({
            message: 'Campo username não pode ser vazio'
        })
    }

    if (!password) {
        return res.status(400).send({
            message: 'Campo senha não pode ser vazio'
        })
    }

    if (username === 'desafiosharenergy' && password === 'sh@r3n3rgy') {
        return res.status(200).send({
            message: 'Operação realizada com sucesso'
        })
    }

    const  user = await User.findOne({
        username, password
    });

    if (!user) {
        return res.status(400).send({
            message: 'Username ou password incorreto'
        })

    }

    const passwordMath = compare(password, user.password)

    if (!passwordMath) {
        return res.status(400).send({
            message: 'Senha incorreta'
        })
    }

    res.status(200).json(user);

  } catch (error) {
    console.log(error);

    res.status(500);
  }

}
