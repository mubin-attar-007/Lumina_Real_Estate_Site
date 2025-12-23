import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
    isEnquireOpen: boolean;
    openEnquire: () => void;
    closeEnquire: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isEnquireOpen, setIsEnquireOpen] = useState(false);

    const openEnquire = () => setIsEnquireOpen(true);
    const closeEnquire = () => setIsEnquireOpen(false);

    return (
        <ModalContext.Provider value={{ isEnquireOpen, openEnquire, closeEnquire }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
