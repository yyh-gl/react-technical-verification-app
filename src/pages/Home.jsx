import React from 'react';
import { withRouter } from 'react-router-dom'

import Layout from '../layout';

const Home = ({ history }) => {
  const goToMyPage = () => {
    history.push('/me');
  };

  return (
    <Layout>
      <div className="home">
        <h1>Home</h1>

        <button
          type="button"
          onClick={goToMyPage}
        >
          マイページへ
        </button>
      </div>
    </Layout>
  );
};

export default withRouter(Home);
