import React from 'react';
import { createRoot } from 'react-dom/client';
import { DkillComponent } from '../lib';


const App = () => (<DkillComponent nick="Dkill" team="SW" agent="Raze" rank="Ascendente"/>);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);