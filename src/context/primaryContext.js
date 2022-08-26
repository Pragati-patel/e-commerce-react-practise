import { createContext, useContext, useState } from "react";

const PrimaryContext = createContext({
  user: 'Pragati',
  setuser: null,
  selected:null,
  setSelected:null
});

export const PrimaryContextProvider = (props) => {
    const [users, setusers] = useState('Pragati')
    const [selected, setSelected] = useState(null)
    return (
        <PrimaryContext.Provider
            value={{
                user: users,
                setuser: setusers,
                selected,
                setSelected
            }}
            >
            {props.children}
        </PrimaryContext.Provider>
    )
}

export const usePrimaryContextProvider = () => useContext(PrimaryContext);