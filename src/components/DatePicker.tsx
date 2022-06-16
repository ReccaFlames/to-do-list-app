import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

interface DatePickerProps {
    selected?: Date;
    onSelect?: SelectSingleEventHandler;
    footer?: React.ReactNode;
}

const DatePicker = (props: DatePickerProps) => {
    const {selected, onSelect, footer} = props;
    return <StyledDP
        mode="single"
        selected={selected}
        onSelect={onSelect}
        footer={footer}
    />
};

export default DatePicker;

const StyledDP = styled(DayPicker)`
    .rdp-day_selected:not([aria-disabled='true']) {
        background-color: #5eacff;
    }

    .rdp-day_selected:hover:not([aria-disabled='true']) {
        background-color: #5eacff;
    }
`;