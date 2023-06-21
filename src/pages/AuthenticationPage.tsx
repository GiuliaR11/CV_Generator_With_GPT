import {
  Paper,
  createStyles,
  Button,
  Title,
  Text,
  Anchor,
  rem,
  TextInput,
  Stack,
} from '@mantine/core';
import { ForgotPasswordInput } from '../bp-components/ForgotPasswordInput';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { createUser } from '../services/UserService';
import { signIn } from '../services/AuthService';
import { CreateUserDto } from '../models/User';
import { useNavigate } from 'react-router-dom';
import { setLogIn } from '../store/slices/auth-slice';
import { useDispatch } from 'react-redux';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: 'cover', 
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(900),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  passwordInput: {
    marginTop: rem(10),
    fontSize: '14px'
  }
}));

export function AuthenticationPage() {
  const dispatch = useDispatch();

  const [isRegistering, setIsRegistering] = useState(false)

  const { classes } = useStyles();

  const navigate = useNavigate();

  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    },

    validate: {
      email: (value: string) => /^\S+@\S+$/.test(value) ? null : 'Email is invalid',
      password: (value: string) => {
        return value.trim().length === 0 
          ? 'Password is required' 
          : value.trim().length < 2 
            ? 'Password must have at least 2 characters' 
            : null
      }
      ,
      firstName: (value: string) => isRegistering ? value.trim().length > 0 ? null : 'First name is required' : null,
      lastName: (value: string) => isRegistering ? value.trim().length > 0 ? null : 'Last name is required' : null 
    },
    validateInputOnBlur: ['email', 'password', 'firstName', 'lastName']
  });

  const handleSubmitHandler = async (values: CreateUserDto) => {
    loginForm.validate()
    
    if (!loginForm.isValid()) {
      return;
    }


    if (isRegistering) {
      await createUser(values);
      return;
    }

    const isLoggedIn = await signIn({
      password: values.password,
      email: values.email
    });
  
    if (isLoggedIn) {
      dispatch(setLogIn(true));
      navigate("/my-cvs");
      return;
    }
  }

  const handleChnageAuthTypeClicked = (e: any) => {
    e.preventDefault()
    setIsRegistering(!isRegistering)
    loginForm.reset()
  }

  const getFormTitle = () => {
    return isRegistering 
      ? 'Register your CVCrafter account now'
      : 'Welcome back to CVCrafter!'
  }
  
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          { getFormTitle()}
        </Title>
        <form onSubmit={loginForm.onSubmit(handleSubmitHandler)}>
          <Stack>
            {isRegistering && <TextInput
              label="First Name"
              {...loginForm.getInputProps('firstName')}
            />}
            {
              isRegistering && <TextInput
              label="Last Name"
              {...loginForm.getInputProps('lastName')}
            />
            }
            
            <TextInput
              label="Email"
              {...loginForm.getInputProps('email')}
            />
            <ForgotPasswordInput
              className={classes.passwordInput}
              isRegistering={isRegistering}
              {...loginForm.getInputProps('password')}
            />
          </Stack>
          
          <Button fullWidth mt="xl" size="md" type="submit" >
            {isRegistering ? 'Register' : 'Login'}
          </Button>
        </form>
        

        <Text ta="center" mt="md">
          {!isRegistering  ? `Don't have an account? ` : 'Already have an account? '} 
          <Anchor<'a'> href="#" weight={700} onClick={event => handleChnageAuthTypeClicked(event)}>
            {isRegistering ? 'Login' : 'Register'}
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}