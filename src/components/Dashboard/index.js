import * as React from "react";

import Chart from './Chart'
import Header from './Header'

const styles = {
  flex: { display: 'flex' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  leftCol: { flex: 1, marginRight: '0.5em' },
  rightCol: { flex: 1, marginLeft: '0.5em' },
  singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Dashboard = () => (
  <>
    <div style={styles.singleCol}>
      <Header />
    </div>

    <div style={styles.flex}>
      <Chart />
    </div>
  </>
);

export default Dashboard;