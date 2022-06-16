import { CgAddR } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import List from "../components/List";

const Home = () => {
    return (
        <main>
            <Header>
              Task manager
            </Header>
            <section>
                <List />
            </section>
            <Navigation>
                <Button to={"/add-task"}><CgAddR style={{verticalAlign: 'middle', paddingRight: '.25em'}}/><span style={{verticalAlign: 'middle'}}>Add task</span></Button>
            </Navigation>
        </main>
    );
}

export default Home;

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1em;
  font-size: 1rem;
  font-weight: 700;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`

const Button = styled(Link)`
  background-color: #000;
  color: #fff;
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