
export const updateObject = <T, K extends keyof T>(setState: React.Dispatch<React.SetStateAction<T>>, accessor: K, value: typeof K) => {
    setState((prevState) => ({ ...prevState, [accessor]: value }));
}
