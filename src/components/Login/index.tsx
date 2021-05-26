import React, { useCallback, useState } from 'react';
import Button from '../Button';
import InputField from '../InputField';
import Checkbox from '../CheckBox';
import Link from '../Link';
import { Container, Wrapper, ContentWrapper, Title } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../services/api';

// This is the schema to validate the form
const SingInSchema = yup.object().shape({
  email: yup
    .string()
    .email('The Email must be a valid email.')
    .required('You must provide a email address.'),
  password: yup
    .string()
    .min(6, 'The Password must be at least 6 characters long.')
    .required('You must provide a password.'),
});

interface SignInFormData {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  // Storing the state of the Checkbox
  const [isRemember, setIsRemember] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // Validating the form and retrieving the errors
    resolver: yupResolver(SingInSchema),
  });

  const onSubmit = useCallback(
    // Grabing all the inputs data
    async ({ email, password }: SignInFormData): Promise<void> => {
      console.log(email, password, isRemember);

      // Sending the data to the RESTful API
      const response = await api.post('login', {
        email,
        password,
        remember: isRemember,
      });

      // Printing the reponse on the console.
      console.log(response);
    },
    [isRemember],
  );

  const onChange = useCallback(checked => {
    setIsRemember(checked);
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <ContentWrapper>
            <Title>Sign in</Title>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <InputField
                {...register('email')}
                label='Email'
                type='text'
                error={errors.email?.message}
              />
              <InputField
                {...register('password')}
                label='Password'
                type='password'
                error={errors.password?.message}
              />
              <Checkbox
                {...register('remember')}
                isChecked={isRemember}
                handleCheckboxChange={onChange}
              >
                Remember me?
              </Checkbox>
              <Button type='submit'>Sign in</Button>
            </form>
            <Link href='#'>Forgot you password?</Link>
            <Link spanText="Don't have an account?" href='#'>
              Sign Up
            </Link>
            <Link href='#'>Resend email confirmation</Link>
          </ContentWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
