import { Transformer } from '../types/types';

const transformers: Transformer[] = [
    {
        latitude: 27.2,
        longitude: 85,
        installed_at: new Date(),
        transformer_type: 'Type 1',
        manufacture_type: 'Man Type 1',
        fault: 0,
    },
    {
        latitude: 27,
        longitude: 85.1,
        installed_at: new Date(),
        transformer_type: 'Type 1',
        manufacture_type: 'Man Type 1',
        fault: 1,
    },
    {
        latitude: 27.1,
        longitude: 85.23,
        installed_at: new Date(),
        transformer_type: 'Type 1',
        manufacture_type: 'Man Type 1',
        fault: 0,
    },
];

export default transformers;
