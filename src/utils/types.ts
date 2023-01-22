type ValueOf<O> = O[keyof O];

type OneOnly<O, Key extends keyof O> = {
  [key in Exclude<keyof O, Key>]?: undefined;
} & Pick<O, Key>;

type OneOfByKey<O> = { [key in keyof O]: OneOnly<O, key> };

export type OneOfType<O> = ValueOf<OneOfByKey<O>>;
