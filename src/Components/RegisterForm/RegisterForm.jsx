import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';

import { TextInput, Checkbox, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';

export const RegisterForm = (props) => {
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
        <form onSubmit={form.onSubmit((values) => console.log(values))} className='registerFormDesign'>
        
        <TextInput
          required
          label="Name"
          placeholder=""
          {...form.getInputProps('name')}
        />
        <TextInput
          required
          label="Surname"
          placeholder=""
          {...form.getInputProps('surname')}
        />
        <TextInput
          required
          label="Age"
          placeholder=""
          {...form.getInputProps('age')}
        />
        <TextInput
          required
          label="Nickname"
          placeholder=""
          {...form.getInputProps('nickname')}
        />
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
          label="I agree to sell my privacy to this corporation"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />
  
        <Button type="submit">Submit</Button>
      </form>
    )
}
export default RegisterForm;