const loaders: Record<string, () => unknown> = {};

const registerLoader = (key: string, getLoader: () => unknown) => {
    loaders[key] = getLoader;
};

const getDataLoaders = (): Record<string, () => unknown> => 
    Object.keys(loaders).reduce(
        (prev, loaderKey) => ({
            ...prev,
            [loaderKey]: loaders[loaderKey](),
        }),
        {}
    );

export { registerLoader, getDataLoaders}