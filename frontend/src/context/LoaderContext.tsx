import { createContext, useState } from "react";

type LoaderContextType = {
    loading: boolean;
    setLoading: (value: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextType>({
    loading: false,
    setLoading: () => { },
})


export function LoaderProvider({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {children}

            {loading && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-white/30 border-t-white animate-spin rounded-full"></div>
                </div>
            )}
        </LoaderContext.Provider>
    )

}