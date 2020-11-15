import * as React from "react";
import { Edit, SimpleForm, TextInput, EmailField } from 'react-admin';


export const SupplierEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <EmailField source="email" />
      <TextInput source="address.street" />
      <TextInput source="phone" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Edit>
);