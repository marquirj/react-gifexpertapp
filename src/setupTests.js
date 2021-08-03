// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
 
 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

/**
 * Comandos para instalar enzyme
 * 1. Instalamos Enzyme : npm install --save-dev enzyme

1.1 Instalamos Enzyme-to-json : npm install --save-dev enzyme-to-json

2. Instalamos Adaptador para React 17 (noten que agregamos algo adicional al final para que pueda correr) : npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps

3.En el archivo setupTests.js agregamos: 

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
 
 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
 */
