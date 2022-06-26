import { useContext } from 'react';
import { CgUser } from 'react-icons/cg';
import styled from 'styled-components';
import { ThemeContext } from '../utils/ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const changeHandler = () => {
        const mode = theme === 'dark' ? 'light' : 'dark';
        setTheme(mode);
    }

    return (
        <Container>
            <InnerContainer>
                <CgUser />
                <span>Task manager</span>
                <ThemeToggleButton
                    isDark={theme === 'dark'}
                    onChange={changeHandler}
                />
            </InnerContainer>
        </Container>
    );
}

export default Header;

const Container = styled.header`
    display: flex;
    justify-content: center;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 700;
`;

const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 70%;
`;
