import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

configure({ adapter: new Adapter() });

// Add a serializer for Enzyme snapshots
expect.addSnapshotSerializer(toJSON);