import logo from '../../assets/logo.png';
import { FormLogin } from '../forms/FormLogin';
import { Container, Content } from './styles';

export function Login() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="Logo" width="600" height="400"/>
                <FormLogin />
            </Content>
        </Container>

    );
}