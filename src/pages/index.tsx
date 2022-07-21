import { Link } from 'gatsby';
import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';

function index() {
    return (
        <Layout>
            <Header mainText='This is our Home Page' subText='Show feature products here' />
        </Layout>
    )
}

export default index;