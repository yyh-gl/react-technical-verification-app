import React from 'react';
import { withRouter } from 'react-router-dom'

import Layout from '../layout';

const Home = ({ history }) => {
  const goToHome = () => {
    history.push('/');
  };

  return (
    <Layout>
      <div className="my-page">
        <h1>My Page</h1>

        <button
          type="button"
          onClick={goToHome}
        >
          ホーム画面へ
        </button>
      </div>
    </Layout>
  );
};

export default withRouter(Home);
