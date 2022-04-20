import { Includes } from './includes';

type isPillarMenFalse = Includes<
  ['Kars', 'Esidisi', 'Wamuu', 'Santana'],
  'Dio'
>; // expected to be `false`
type isPillarMenTrue = Includes<
  ['Kars', 'Esidisi', 'Wamuu', 'Santana'],
  'Kars'
>; // expected to be `true`
