import { createContext, useContext, useState } from "react";

const PrimaryContext = createContext({
  user: 'Pragati',
  setuser: null
});

export const PrimaryContextProvider = (props) => {
    const [users, setusers] = useState('Pragati')
    return (
        <PrimaryContext.Provider
            value={{
                user: users,
                setuser: setusers
            }}
            >
            {props.children}
        </PrimaryContext.Provider>
    )
}

export const usePrimaryContextProvider = () => useContext(PrimaryContext);