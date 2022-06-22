import { CgChevronLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddTaskForm from "../components/AddTaskForm";

const AddTask = () => {

    return (
        <div>
            <Header>
                <LeftCol><Link to="/"><CgChevronLeft size={32}/></Link></LeftCol>
                <Title>New task</Title>
            </Header>
            <div style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                <AddTaskForm />
            </div>
        </div>
    );
}

export default AddTask;

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1em;
  font-size: 1rem;
  font-weight: 700;
  align-items: center;

  a {
      color: ${({theme}) => theme.color};
  }

  a:visited {
      color: ${({theme}) => theme.color};
  }
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
