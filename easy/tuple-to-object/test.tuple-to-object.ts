import { xTupleToObject } from './tuple-to-object';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type result = xTupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const result = {
  tesla: 'tesla',
  'model 3': 'model 3',
  'model X': 'model 3',
  'model Y': 'model Y',
};
