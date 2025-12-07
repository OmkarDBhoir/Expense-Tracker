import { useEffect } from "react";
import { useLoader } from "../hooks/useLoader"
import { registerLoader } from "../service/loaderService";


const LoaderBridge: React.FC = () => {
    const { setLoading } = useLoader();


    useEffect(() => {
        registerLoader(setLoading);
    }, [setLoading]);


    return null;
}

export default LoaderBridge;