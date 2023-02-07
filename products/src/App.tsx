import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import DefaultLayout from 'shell/DefaultLayout';

import ProductList from './components/ProductList';

const App = () => (
    <DefaultLayout>
        <ProductList />
    </DefaultLayout>
);

ReactDOM.render(<App />, document.getElementById('app'));
