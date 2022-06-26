import { CgChevronLeft } from 'react-icons/cg';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import AddTaskForm from '../components/AddTaskForm';
import { TaskToDo } from '../model';

const UpdateTask = () => {

    const selectorItems = useAppSelector((state) => state.toDo) as Array<TaskToDo>;
    
    const params = useParams();
    const item = selectorItems.find(item => item.id === params.id);

    return (
        <div>
            <Header>
                <LeftCol><Link to="/"><CgChevronLeft size={32}/></Link></LeftCol>
                <Title>New task</Title>
            </Header>
            <div style={{paddingLeft: '2rem', paddingRight: '2rem'}}>
                <AddTaskForm task={item?.task} color={item?.color} defaultDate={item?.scheduleDate}/>
            </div>
        </div>
    );
}

export default UpdateTask;

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1em;
  font-size: 1rem;
  font-weight: 700;
  align-items: center;
`;

const Title = styled.span`
    display: flex;
    justify-content: center;
    flex: 1;
`;

const LeftCol = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;