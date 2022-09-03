import { useState } from 'react';
import { CgAddR } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../app/store';
import ButtonsGroup from '../components/ButtonsGroup';
import Greetings from '../components/Greetings';
import Header from '../components/Header';
import List from '../components/List';
import { CompletionState, TaskToDo } from '../model';

const Home = () => {

    const todos = useSelector((state: RootState) => state.toDo);

    const FILTER_MAP = {
        Today: (item: TaskToDo) => item.scheduleDate >= new Date().setUTCHours(0,0,0,0) && item.scheduleDate <= new Date().setUTCHours(23,59,59,999),
        Upcoming: (item: TaskToDo) => item.state === CompletionState.OPEN && item.scheduleDate >= new Date().setUTCHours(0,0,0,0),
        Overdue: (item: TaskToDo) => item.state === CompletionState.OPEN && item.scheduleDate < new Date().setUTCHours(0,0,0,0),
        Open: (item: TaskToDo) => item.state === CompletionState.OPEN,
        Finished: (item: TaskToDo) => item.state === CompletionState.FINISHED,
    }

    const [filter, setFilter] = useState<string>(Object.keys(FILTER_MAP)[0])

    return (
        <div>
            <Header />
            <StledMain>
                <ListSection>
                    <Greetings name="Joe" tasksCounter={todos.filter(FILTER_MAP['Today']).length} />
                    <ButtonsGroup buttons={Object.keys(FILTER_MAP)} selected={filter} setSelected={setFilter} />
                    <ListContainer>
                        <List filter={filter} filters={FILTER_MAP} />
                    </ListContainer>
                </ListSection>
                <Navigation>
                    <Button to={'/add-task'}><CgAddR style={{verticalAlign: 'middle', paddingRight: '.25em'}}/><span style={{verticalAlign: 'middle'}}>Add task</span></Button>
                </Navigation>
            </StledMain>
        </div>
    );
}

export default Home;

const StledMain = styled.main`
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ListSection = styled.section`
    min-width: 70%;
`

const ListContainer = styled.div`
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`

const Button = styled(Link)`
  background-color: ${({theme}) => theme.buttonGroup.active.color};
  color: ${({theme}) => theme.buttonGroup.active.text}; 
  border: none;
  padding: .5em 1.5em;
  border-radius: 1.5em;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  
  position: fixed;
  bottom: 1rem;
  
  box-shadow: 0px 4px 5px -4px rgba(66, 68, 90, 1);
`;