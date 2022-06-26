import { render } from '@testing-library/react';
import Greetings from '../Greetings';

describe('Greetings component', () => {

    it('render correctly', () => {
        const props = {
            name: 'Joe',
            tasksCounter: 2,
        } 
        
        const {baseElement} = render(<Greetings {...props}/>);

        // expect(getByText("Hello Joe! 👋")).toBeVisible();
        expect(baseElement).toMatchSnapshot();
    });
});