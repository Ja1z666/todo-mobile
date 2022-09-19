import { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import CreateTodo from '../components/CreateTodo';
import Todo from '../components/Todo';

const Container = styled.View`
  padding: 30px 30px 0px 30px;
  flex: 1;
  background: #2f2f2f;
`;

const TodosList = styled.View`
  flex: 1;
`;

const MainPage = ({ navigation }:any) => {
  const [todos, setTodos] = useState([]);

  return (
    <Container>
      <CreateTodo setTodos={setTodos} todos={todos} />
      <TodosList>
        <FlatList
          data={todos}
          renderItem={todo => (
            <Todo todo={todo.item} todos={todos} setTodos={setTodos} navigation={navigation} />
          )}
        />
      </TodosList>
    </Container>
  );
}

export default MainPage;