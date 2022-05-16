import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FormContainer from '../containers/FormContainer';

import { Form as FormProps } from '../models';
import { FormValidationSchema } from '../validation';

const UserRegistration: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(FormValidationSchema),
  });

  return (
    <FormContainer>
      <h3 className="my-2">Register New User</h3>
      <hr />
      <Form>
        <FormGroup className="mb-3">
          <FormLabel>Your name</FormLabel>
          <FormControl type="text" {...register('name')} />
          {errors.name && <FormText className="text-danger d-flex align-items-center">{errors.name.message}</FormText>}
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Email</FormLabel>
          <FormControl type="email" {...register('email')} />
          {errors.email && (
            <FormText className="text-danger d-flex align-items-center">{errors.email.message}</FormText>
          )}
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" {...register('password')} />
          {errors.password && (
            <FormText className="text-danger d-flex align-items-center">{errors.password.message}</FormText>
          )}
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel>Re-enter password</FormLabel>
          <FormControl type="password" {...register('confirm')} />
          {errors.confirm && (
            <FormText className="text-danger d-flex align-items-center">{errors.confirm.message}</FormText>
          )}
        </FormGroup>
      </Form>
      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit(() => {
          alert('Now, add the logic for a successful registration!');
        })}
      >
        Register
      </Button>
    </FormContainer>
  );
};

export default UserRegistration;
