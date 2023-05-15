interface DataLoaders{
    UserLoader: ReturnType<typeof import('../User/UserLoader').UserLoader.getLoader>;
}

type Loaders = {[Name in keyof DataLoaders]: () => DataLoaders[Name]} | Record<string, () => unknown>

const loaders: Loaders = {};

const registerLoader = <Name extends keyof DataLoaders>(key: Name, getLoader: () => DataLoaders[Name]) => {
  loaders[key] = getLoader;
};

const getDataLoaders = (): DataLoaders =>
  (Object.keys(loaders) as (keyof DataLoaders)[]).reduce(
    (prev, loaderKey) => ({
      ...prev,
      [loaderKey]: loaders[loaderKey](),
    }),
    {},
  ) as DataLoaders;

export type { DataLoaders };
export { registerLoader, getDataLoaders };