import React from 'react';

export const StoreContext = React.createContext();

export const StoreContextProvider = ({children, store}) => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export const useStoreContext = () =>  React.useContext(StoreContext);

export const withStoreContext = (Component) => (props) => {
    return (<Component {...props} store={useStoreContext()} />);
};
