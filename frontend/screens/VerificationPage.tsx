import { useState } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 30px 30px 0px 30px;
  flex: 1;
  align-items: center;
  background: #2f2f2f;
`;

const Title = styled.Text`
  margin-top: 70px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
`;

const InputForm = styled.TextInput.attrs({
  placeholderTextColor: "#a0a0a0"
})`
  margin-top: 20px;
  background-color: #4c4c4c;
  height: 60px;
  width: 300px;
  border-radius: 14px;
  font-size: 24px;
  padding: 0px 30px;
  color: #ffffff;
  text-align: center;
`;

const SubmitButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #4c4c4c;
  height: 60px;
  width: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`;

const SubmitText = styled.Text`
  color: #ffffff;
  font-size: 24px;
`;

const VerificationPage = () => {
  return (
    <Container>
      <Title>Enter sms code</Title>
      <InputForm placeholder="634345" keyboardType="numeric"></InputForm>
      <SubmitButton>
        <SubmitText>Submit</SubmitText>
      </SubmitButton>
    </Container>
  );
}

export default VerificationPage;