type xCapitalize<S extends string> = S extends `${infer F}${infer T}`
  ? `${Uppercase<F>}${T}`
  : S;

type Capitalized = xCapitalize<'hello world'>; // expected to be 'Hello world'
