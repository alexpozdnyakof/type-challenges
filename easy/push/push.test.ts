import { Push } from './push';

type Result = Push<[1, 2], '3'>; // [1, 2, '3']
