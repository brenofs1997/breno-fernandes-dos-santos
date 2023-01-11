import { Router } from 'express';
export const router = Router();

import { listClients } from './app/useCases/clients/listClients';
import { createClient } from './app/useCases/clients/createClient';
import { updateClient } from './app/useCases/clients/updateClient';
import { deleteClient } from './app/useCases/clients/deleteClients';

router.get('/clients', listClients);

router.post('/clients', createClient);

router.put('/clients', updateClient);

router.delete('/clients/:clientId', deleteClient);
