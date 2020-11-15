import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { MarriageList } from './components/Marriage/MarriageList'
import { MarriageCreate } from './components/Marriage/MarriageCreate'
import { MarriageEdit } from './components/Marriage/MarriageEdit'
import Dashboard from './components/Dashboard'

import { authProvider } from './hooks/authProvider'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={MarriageList} create={MarriageCreate} edit={MarriageEdit} />
    <Resource name="Marriages" list={MarriageList} create={MarriageCreate} edit={MarriageEdit} />
  </Admin>
)

export default App;
