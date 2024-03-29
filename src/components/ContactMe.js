import { Screen } from './Screen';
import bgImg5 from '../assets/bgImg5.jpeg';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

const ContactMe = () => {
  const { isLoading, response, submit } = useSubmit();

  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',

      email: '',

      type: '',

      comment: '',
    },

    onSubmit: (values) => {
      submit('https://manuel.com/contactme', values);
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),

      email: Yup.string()
        .email('Invalid Email Address')
        .required('Email is required'),

      comment: Yup.string()
        .min(25, 'Must be at least 25 characteres')
        .required('Your message is required'),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);

      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);
  return (
    <Screen
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
    >
      <VStack w="100vw" h={'850px'} style={{ paddingTop: '200px' }} mx={'auto'}>
        <Box p={6} rounded="md" mt={'-140px'} width={['80vw', '60vw', '60vw']} bg={'rgba(0, 0,0,0.5)'}>
          <Heading as="h1" id="contact-me" color={'white'}>
            Contact me
          </Heading>
          <form onSubmit={formik.handleSubmit} style={{ marginTop: '45px' }}>
            <VStack spacing={4} position={'relative'}>
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
              >
                <FormLabel htmlFor="firstName" className="formLabel">
                  Name
                </FormLabel>

                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />

                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                <FormLabel className="formLabel" htmlFor="email">
                  Email Address
                </FormLabel>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />

                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type" className="formLabel">
                  Type of enquiry
                </FormLabel>

                <Select
                  id="type"
                  name="type"
                  color="cyan"
                  {...formik.getFieldProps('type')}
                >
                  <option value="hireMe">Freelance project proposal</option>

                  <option value="openSource">
                    Open source consultancy session
                  </option>

                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment" className="formLabel">
                  Your message
                </FormLabel>

                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  color={'white'}
                  {...formik.getFieldProps('comment')}
                />

                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="cyan"
                width={['90%', '92vw', '95%']}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Screen>
  );
};

export default ContactMe;
