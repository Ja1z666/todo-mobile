import { TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { TrashIcon } from '../icons/Icons';

type TodoProp = {
    todo: {
        id: number;
        title: string;
    };
    todos: any;
    setTodos: any;
    navigation: any;
}

const TodoBlock = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0px 20px;
  height: 50px;
  background-color: #4c4c4c;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
`;

const TodoText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
`;

const Button = styled.TouchableOpacity`
  height: 25px;
  width: 25px;
`;

const DeleteTodo = (todo:any, todos:any, setTodos:any) => {
    setTodos([...todos].filter(t => t.id != todo.id));
    Alert.alert("Deleted", `${todo.title} has been deleted`);
}

const Todo = ({todo, todos, setTodos, navigation}:TodoProp) => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate('Todo', { todo })}>
            <TodoBlock>
                <TodoText>{todo.title}</TodoText>
                <Button onPress={() => DeleteTodo(todo, todos, setTodos)}>
                    <TrashIcon />
                </Button>
            </TodoBlock>
        </TouchableOpacity>
    );
}

export default Todo;