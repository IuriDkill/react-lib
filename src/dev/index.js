import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactLib from '../lib';


const App = () => (<ReactLib/>);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);