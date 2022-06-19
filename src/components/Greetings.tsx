import styled from "styled-components";

interface GreetingsProps {
    name: string;
    tasksCounter: number; 
}

const Greetings = (props: GreetingsProps) => {
    const { name, tasksCounter } = props;
    return (
        <div>
            <Title>Hello {name}! 👋</Title>
            <Subtitle>{tasksCounter} tasks for you Today</Subtitle>
        </div>
    );
}

export default Greetings;

const Title = styled.h1`
    margin: 1rem 0 .5rem 0;
`;

const Subtitle = styled.h4`
    margin: 0 0 2rem 0;
    color: #656565;
    font-weight: 400;
`;