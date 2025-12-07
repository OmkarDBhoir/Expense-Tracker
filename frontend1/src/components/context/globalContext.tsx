import { createContext, useContext, useState } from "react";
import axios, { AxiosError } from "axios";
import { BaseConstants } from "../../Services/baseconstants";
import { incomeData } from "../../Pojos/dataPojos";

interface GlobalContextType {
    addIncome: (incomes: incomeData) => Promise<void>;
    getIncome: () => Promise<void>;
    incomes: incomeData[];
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [incomes, setIncomes] = useState<incomeData[]>([]);
    const [expenses, setExpenses] = useState<unknown[]>([]);
    const [error, setError] = useState<unknown>(null);

    const addIncome = async (incomes: incomeData) => {
        try {
            await axios.post(`${BaseConstants.BASE_URL}/income/addIncome`, incomes);
        } catch (error) {
            console.error(error);
            setError((error as AxiosError).response?.data);
        }
    }

    const getIncome = async () => {
        try {
            const response = await axios.get(`${BaseConstants.BASE_URL}/income/getIncome`);
            console.log(response.data);
            setIncomes(response.data);
        } catch (error) {
            console.error(error);
            setError((error as AxiosError).response?.data);
        }
    }

    return <GlobalContext.Provider value={{ addIncome, getIncome, incomes }}>
        {children}
    </GlobalContext.Provider>
}

export const useGlobalContext = () => {
    const globalContext = useContext(GlobalContext);

    if (!globalContext) {
        throw new Error("Global Context is undefined");
    }

    return globalContext;
}