import * as React from "react";
import { Create, SimpleForm, TextInput, EmailField } from 'react-admin';


export const MarriageCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <EmailField source="email" />
      <TextInput source="address.street" />
      <TextInput source="phone" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Create>
);