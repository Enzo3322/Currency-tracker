import { createContext } from "react";
import { useMutation, useQuery } from "react-query";

const getCurrency = async () => {
    const availableCurrencys = await fetch('https://economia.awesomeapi.com.br/json/available')

    const currencysJson = await availableCurrencys.json()

    const queryString = Object.keys(currencysJson).join(',')

    const res = await fetch(`https://economia.awesomeapi.com.br/last/${queryString}`)

    if (!res.ok) throw new Error()

    return await res.json()

}

interface CurrencyContextData {
    data: any,
    isLoading: boolean
    error: unknown
    mutate: () => void
}

interface CurrencyContextProps {
    children: React.ReactNode;
}

const CurrencyContext = createContext<CurrencyContextData>({} as CurrencyContextData);

const CurrencyProvider: React.FC<CurrencyContextProps> = ({ children }) => {

    const { error, isLoading, data, mutate } = useMutation(["whoami"], getCurrency);

    return (
        <CurrencyContext.Provider value={{ data, error, isLoading, mutate }}>
            {children}
        </CurrencyContext.Provider>
    )
};

export { CurrencyContext, CurrencyProvider };
