import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import DefaultLayout from 'shell/DefaultLayout';

const App = () => (
    <DefaultLayout>
        <h1>Product Page</h1>
    </DefaultLayout>
);

ReactDOM.render(<App />, document.getElementById('app'));
