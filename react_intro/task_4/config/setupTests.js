import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import toJSON from 'enzyme-to-json';

configure({ adapter: new Adapter() });

// Add a serializer for Enzyme snapshots
expect.addSnapshotSerializer(toJSON);