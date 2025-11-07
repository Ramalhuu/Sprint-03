
'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useJogadoras } from './useJogadoras'; 

const JogadorasContext = createContext(null);


export const JogadorasProvider = ({ children }) => {

    const jogadorasState = useJogadoras();
    
    
    useEffect(() => {
        jogadorasState.fetchJogadoras();
    }, [jogadorasState.fetchJogadoras]); 

    return (
        <JogadorasContext.Provider value={jogadorasState}>
            {children}
        </JogadorasContext.Provider>
    );
};


export const useJogadorasContext = () => {
    const context = useContext(JogadorasContext);
    if (!context) {
        throw new Error('useJogadorasContext deve ser usado dentro de um JogadorasProvider');
    }
    return context;
};