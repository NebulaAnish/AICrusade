import { Transformer } from '../types/types';

const transformers: Transformer[] = [
    {
        latitude: 27.2,
        longitude: 85,
        installed_at: new Date(),
        transformer_type: 'Type 1',
        manufacture_type: 'Man Type 1',
        fault: 0,
        location: 'Kathmandu',
    },
    {
        latitude: 27,
        longitude: 85.1,
        installed_at: new Date(),
        transformer_type: 'Type 1',
        manufacture_type: 'Man Type 1',
        fault: 1,
        location: 'Gorkha',
    },
    {
        latitude: 27.1,
        longitude: 85.23,
        installed_at: new Date(),
        transformer_type: 'Type 1',
        manufacture_type: 'Man Type 1',
        fault: 0,
        location: 'Bhaktapur',
    },
];

export default transformers;
