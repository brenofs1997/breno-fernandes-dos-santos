import { useState } from 'react';
import { Header } from '../Header';
import {Container,Content} from './styles';

export function Home() {
    const [navOpen, setNav] = useState(false);
    
    return (
        <Container>
            <Header />
            <Content>
                oi
            </Content>
        </Container>
    );
}
