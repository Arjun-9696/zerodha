import React, { useReducer, useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useToast,
  Text,
  Link,
} from '@chakra-ui/react';
import './Signup.css';
import { REGISTER_SUCCESS } from '../../Redux/Auth/actionTypes';
import { useNavigate } from 'react-router-dom';
import { register } from '../../Redux/Auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link as SignupLink } from 'react-router-dom';

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.payload,
      };
    case 'email':
      return {
        ...state,
        email: action.payload,
      };
    case 'password':
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
}
const initialState = {
  name: '',
  email: '',
  password: '',
};
const Signup = () => {
  const [state, setter] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  let isError = useSelector((state) => state.AuthReducer.isError);
  if(isError) {
      toast({
        title: 'Sign Up Failed',
        description: 'User already registered.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
  }
  
  const signupHandler = () => {
    if (
      state.name === '' ||
      state.email === '' ||
      state.password === ''
    ) {
      toast({
        title: 'Enter all the information.',
        description: 'Enter all the information for creating a new account.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
    dispatch(register(state)).then((r) => {
      if (r === REGISTER_SUCCESS) {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
        navigate('/signin', { replace: true });
      }
    });
  };
  {
    return (
      <Box className="signup" paddingTop="100px">
        <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={3} flex={1} align={'center'} justify={'center'}>
            <Stack className="signupbox" spacing={2} w={'full'} maxW={'md'}>
              <Heading fontSize={'2xl'}>Create a new account</Heading>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="name"
                  value={state.name}
                  onChange={(e) =>
                    setter({ type: 'name', payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    setter({ type: 'email', payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={state.password}
                  onChange={(e) =>
                    setter({ type: 'password', payload: e.target.value })
                  }
                />
              </FormControl>
              <Stack>
                <Button
                  marginTop="20px"
                  colorScheme={'blue'}
                  variant={'solid'}
                  onClick={signupHandler}
                >
                  Create Account
                </Button>
              </Stack>
              <Text
                paddingTop="20px"
                paddingBottom="20px"
                fontSize={'lg'}
                color={'gray.600'}
              >
                Already have an account?
                <br />
                <SignupLink to="/signin">
                  <Link color="blue.500">Sign in</Link>
                </SignupLink>
                ✌️
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Box>
    );
  }
};
export default Signup;
