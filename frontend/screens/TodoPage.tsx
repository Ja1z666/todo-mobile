import { useState, useEffect } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 30px 30px 0px 30px;
  flex: 1;
  background: #2f2f2f;
`;

const Description = styled.TextInput.attrs({
    placeholderTextColor: "#a0a0a0"
})`
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    text-align: end;
    max-height: 430px;
`;

const TodoPage = ({ route, navigation }:any) => {
    const { todo } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: todo.title,
        });
    });

    return (
        <Container>
            <Description placeholder="Type something" multiline={true} >{}</Description>
        </Container>
    );
}

export default TodoPage;