import api from '../../../services/api'
import { FormEvent, useEffect, useState } from 'react'
import closeIcon from '../../../assets/close-icon.svg';
import { ModalBody, Overlay } from './styles';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

interface Item {
    _id: string,
    name: string,
    email: string,
    phone: string,
    adress: string,
    cpf: string
}

interface ClientModalProps {
    visible: boolean;
    item: Item | null;
    onClose: () => void;
    isLoading: boolean;
}
export default function AddClient({
    visible,
    item,
    onClose,
    isLoading
}: ClientModalProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")
    const [cpf, setCpf] = useState("")

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!visible || !item) {
        return null;
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const response = await api.post("/clients", {
                name,
                email,
                phone,
                adress,
                cpf
            })
            setName("")
            setAdress("")
            setPhone("")
            setCpf("")
            setEmail("")
            toast.success('Cadastro realizado com sucesso!');
            window.location.reload()
        } catch (error) {
            let errorMenssage = '';
            if (error instanceof AxiosError) {
                errorMenssage = error.response?.data.message
                toast.error(errorMenssage);
            }
        }
    }

    return (
        <>
            <Overlay>
                <ModalBody>
                    <header>
                        <button type="button" onClick={onClose}>
                            <img src={closeIcon} alt="Ícone de fechar" />
                        </button>
                    </header>

                    <form onSubmit={handleSubmit}>
                        <hr />
                        <div className="input-details">
                            <label htmlFor="name">Name</label>
                            <input id="name"
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                        </div>

                        <div className="input-details">
                            <label htmlFor="email">Email</label>
                            <input id="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="input-details">
                            <label htmlFor="phone">Phone</label>
                            <input id="phone"
                                value={phone}
                                onChange={event => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="input-details">
                            <label htmlFor="adress">Adress</label>
                            <input id="adress"
                                value={adress}
                                onChange={event => setAdress(event.target.value)}
                            />
                        </div>
                        <div className="input-details">
                            <label htmlFor="cpf">CPF</label>
                            <input id="cpf"
                                value={cpf}
                                onChange={event => setCpf(event.target.value)}
                            />
                        </div>
                        <button type="submit" className="primary">
                            Cadastrar
                        </button>
                    </form>

                </ModalBody>
            </Overlay>
        </>
    )
}