import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CirclePicker, ColorResult } from 'react-color';
import styled from 'styled-components';
import Button from './Button';
import { IoSaveOutline } from 'react-icons/io5';
import { Color } from '../model';
import DatePicker from './DatePicker';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import { addTask } from '../features/toDoList/toDoSlice';
import { useAppDispatch } from '../app/hooks';

interface TaskForm {
    task: string;
    color: Color;
    scheduleDate: number;
}

const colorPickerColors = ['#e8dff5', '#fce1e4', '#fcf4dd', '#ddedea', '#c8ffeb', '#daeaf6'] as Color[];
const defaultColor = colorPickerColors[0];

const AddTaskForm = ({color, defaultDate, task}: {color?: Color, defaultDate?: number, task?: string}) => {
    const { handleSubmit, control } = useForm<TaskForm>();

    const dispatch = useAppDispatch();
    
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TaskForm> = data => {
        dispatch(addTask(data));
        navigate('/');
    };

    const handleChangeComplete = (color: ColorResult, callback?: (...event: any[]) => void) => {
        callback && callback(color.hex)
    }

    return (
        <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Controller 
                    control={control}
                    defaultValue={color ?? defaultColor}
                    render={({ field: { onChange, value, ref } }) => (
                        <Center>
                            <CirclePicker
                                ref={ref}
                                color={value}
                                colors={colorPickerColors}
                                onChangeComplete={(color) => handleChangeComplete(color, onChange)}
                            />
                        </Center>
                    )} 
                    name="color"
                 />
                <Controller
                    control={control}
                    render={({ field: { onChange}}) => (
                        <TextInput label="Task" defaultValue={task} onChange={onChange}/>
                    )}
                    name="task"
                />
                <Controller 
                    control={control}
                    defaultValue={defaultDate ?? Date.now()}
                    render={({ field: { onChange, value }}) => (
                        <DatePicker
                            selected={new Date(value)}
                            onSelect={(selectedDate) => {
                                onChange(selectedDate?.getTime());
                            }}
                        />
                    )}
                    name="scheduleDate"
                />
                <Button className="save-btn" text="Save" type="submit" icon={IoSaveOutline} />
            </Form>
        </Col>
    );
}

export default AddTaskForm;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .save-btn {
        position: fixed;
        bottom: 1rem;
        width: 17.5rem;
    }
`;
