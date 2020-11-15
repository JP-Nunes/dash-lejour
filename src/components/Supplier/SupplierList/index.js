import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton, Filter, TextInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by Name" source="name" reference="users" alwaysOn />
    </Filter>
);

export const SupplierList = props => (
    <List filters={<UserFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <EmailField source="email" />
            <EmailField label="Marriage Style" source="marriage-style" />
            <TextField label="Address" source="address.street" />
            <TextField source="phone" />
            <TextField source="price" />
            <EditButton />
        </Datagrid>
    </List>
);