import React from 'react';
import { createRoot } from 'react-dom/client';
import Design from './Design.js';
import HexaColorGenerator from './HexaColorGenerator.js';
import Images from './Images.js';
import UserCard from './UserCard.js';

const app = (
    <div className="container">
        <Images/>
        <Design/>
        <HexaColorGenerator/>
        <UserCard/>
    </div>
)
const container = document.getElementById('root');
const root = createRoot(container);

root.render(app)