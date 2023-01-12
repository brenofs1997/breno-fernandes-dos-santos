import { useState } from 'react';
import { Header } from '../Header';
import Users from '../Users';
import {Container,Content} from './styles';

export function Home() {
    const [navOpen, setNav] = useState(false);
    
    return (
        <Container>
            <Header />
            <Content>
                <Users />
            </Content>
        </Container>
    );
}
