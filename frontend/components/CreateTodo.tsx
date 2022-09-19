import { View } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';

const InputBar = styled.TextInput.attrs({
    placeholderTextColor: "#a0a0a0"
})`
    color: #ffffff;
    background-color: #4c4c4c;
    height: 50px;
    border-radius: 10px;
    padding: 0px 20px;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 30px;
`;

const CreateTodo = ({setTodos, todos}:any) => {
    const [title, setTitle] = useState("");

    const createTodo = () => {
        if(title == "") return;
        setTodos([
            {
                id: Date.now(),
                title
            },
            ...todos
        ])
        setTitle("");
    }

    return(
        <View>
            <InputBar placeholder="Type todo" onChangeText={setTitle} value={title} onSubmitEditing={() => createTodo()}/>
        </View>
    );
}

export default CreateTodo;