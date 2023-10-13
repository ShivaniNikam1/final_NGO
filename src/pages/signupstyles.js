import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #445d48;
  height: 100vh;
`;

export const SignupForm = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  margin-top: 75px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
`;

export const SuccessMessage = styled.div`
  color: green;
  background-color: #fff;
  width: 300px;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  border: 1px solid black;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ProfileInput = styled.input`
  margin-top: 5px;
`;

export const SignupHeader = styled.h2`
  margin: 20px;
  font-weight: bold;
  text-align: center;
`;

export const SignupImageLabel = styled.label`
  margin-top: 10px;
  font-weight: bold;
`;

export const SignupImageInput = styled.input`
  margin-top: 5px;
`;

export const SignupSuccess = styled.div`
  color: green;
  font-size: 18px;
`;

export const SignupError = styled.div`
  color: red;
  font-size: 18px;
`;
