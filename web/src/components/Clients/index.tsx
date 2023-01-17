
import { Key, useEffect, useState } from 'react';

import axios from 'axios';
import api from '../../services/api';
import { Header } from '../Header';
import AddClient from '../Modal/AddClient';
import { TrashSimple, NotePencil } from 'phosphor-react';
import { toast } from 'react-toastify';
import EditClient from '../Modal/EditClient';
import { Container } from './styles';

interface Items {
    _id: string,
    name: string,
    email: string,
    phone: string,
    adress: string,
    cpf: string
}

export default function Clients() {
    const [rows, setRows] = useState<Items[]>();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedClient, setSelectedClient] = useState<null | Items>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
    const [isLoadingEdit, setIsLoadingEdit] = useState(false);

    const clientEmpty = {
        _id: '0',
        name: '',
        email: '',
        phone: '',
        adress: '',
        cpf: ''
    } as Items;

    const clientsGenerator = async () => {
        await api.get('/clients')
            .then(({ data }) => {
                setRows(data)
            })
    };

    useEffect(() => {
        clientsGenerator();
    });


    async function deleteClient(_id: string) {
        await api.delete(`/clients/${_id}`)

        toast.success('Deletado com sucesso!');
    }

    function handleOpenModal(client: Items) {

        setIsModalVisible(true);
        setSelectedClient(client);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedClient(null);
    }

    function handleOpenModalEdit(client: Items) {

        setIsModalVisibleEdit(true);
        setSelectedClient(client);
    }

    function handleCloseModalEdit() {
        setIsModalVisible(false);
        setSelectedClient(null);
    }


    return (
        <>
            <Header />
            <AddClient
                visible={isModalVisible}
                item={selectedClient}
                onClose={handleCloseModal}
                isLoading={isLoading}
            />

            <EditClient
                visible={isModalVisibleEdit}
                item={selectedClient}
                onClose={handleCloseModalEdit}
                isLoading={isLoadingEdit}
            />
            <Container>
                <div>
                    <button className="primary" onClick={() => handleOpenModal(clientEmpty)}>
                        Novo cliente
                    </button>
                </div>
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>CPF</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                        {rows?.map((client, i) => {
                           return (
                                <tr key={client._id}>
                                    <td>{client.name}</td>

                                    <td>{client.email}</td>

                                    <td>{client.phone}</td>

                                    <td>{client.adress}</td>

                                    <td>{client.cpf}</td>

                                    <td><NotePencil onClick={() => handleOpenModalEdit(client)} /></td>

                                    <td> <TrashSimple onClick={() => deleteClient(client._id)} /></td>
                                </tr>
                           );
                        })}
                    </tbody>
                </table>
            </Container>
        </>
    );
}
