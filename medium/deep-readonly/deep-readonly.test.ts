type IsObject<T> = T extends Record<string | number | symbol, any>
  ? true
  : false;

export type DeepReadonly<T> = {
  readonly [K in keyof T]: IsObject<T[K]> extends true
    ? DeepReadonly<T[K]>
    : T[K];
};

type Alpha = {
  alpha: {
    gamma: number;
    delta: string;
    zeta: Array<number>;
    epsilon: {
      tetha: number;
    };
  };
  beta: string;
};

const result: DeepReadonly<Alpha> = {
  alpha: {
    gamma: 1,
    delta: 'hi',
    zeta: [1, 2, 3],
    epsilon: {
      tetha: 3,
    },
  },
  beta: 'hey',
};

result.alpha.gamma = 3;
result.alpha.delta = 'hello';
result.beta = 'hi';
result.alpha.epsilon.tetha = 4;
result.alpha.zeta.push(3);
