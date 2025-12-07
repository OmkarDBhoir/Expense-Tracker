
let setGlobalLoader: ((value: boolean) => void) | null = null;


export const registerLoader = (setter: (value: boolean) => void) => {
    setGlobalLoader = setter;
}

export const showLoader = () => setGlobalLoader?.(true);
export const hideLoader = () => setGlobalLoader?.(false);