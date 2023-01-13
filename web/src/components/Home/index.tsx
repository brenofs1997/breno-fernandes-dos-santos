import { Header } from '../Header';
import Users from '../Users';
import { Container, Content } from './styles';

export function Home() {

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <Users />
                </Content>
            </Container>
        </>
    );
}
