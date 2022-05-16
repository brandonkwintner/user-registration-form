import React from 'react';
import { Container } from 'react-bootstrap';

interface IProps {
  children: React.ReactNode;
}

const FormContainer: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <div className="p-3"> {children} </div>
    </Container>
  );
};

export default FormContainer;
