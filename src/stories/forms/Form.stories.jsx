import React from 'react';
import { Form } from './Form';

export default {
    title: 'Tanzanite/Component/Form',
    component: Form,

};

const Template = (args) => <Form {...args} />

export const Signup = Template.bind({})
export const Signin = Template.bind({})

Signup.args = {
    label: 'Signup',
    type: 'signup'
}

Signin.args = {
    label: 'Signin',
    type: 'signin'
}
