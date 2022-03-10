import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

import { TextInput, Checkbox, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';

export const LoginForm = (props) => {
    const form = useForm({
        initialValues: {
          email: '',
          termsOfService: false,
        },
    
        validationRules: {
          email: (value) => /^\S+@\S+$/.test(value),
        },
      });

    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))} className='LoginFormDesign'>
        
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          required
          label="Password"
          placeholder="6 characters min"
          {...form.getInputProps('password')}
        />
  
        <Checkbox
          mt="md"
          label="Remember Me"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />
  
        <Button type="submit">Submit</Button>
      </form>
    )
}
export default LoginForm;