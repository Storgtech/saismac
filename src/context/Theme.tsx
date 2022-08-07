import React, { ReactNode, createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from 'react';

interface IContext {
    theme: string
    setTheme: Dispatch<SetStateAction<string>>
    currentPage: string
    setCurrentPage: Dispatch<SetStateAction<string>>
    isShowingAside: boolean
    setIsShowingAside: Dispatch<SetStateAction<boolean>>
    isShowingMyProfile: boolean
    setIsShowingMyProfile: Dispatch<SetStateAction<boolean>>
}

interface props {
    children: ReactNode;
}

function getInitialTheme () {
    if(typeof window !== 'undefined'){
        const storedTheme = localStorage.getItem('color-theme')

        if(storedTheme){
            return storedTheme
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')

        if(userMedia.matches){
            return 'dark'
        }
    }

    return 'light'
}

const Theme = createContext({} as IContext)

export function ThemeProvider({children}: props){

    let initialTheme = getInitialTheme()

    const [theme, setTheme] = useState(initialTheme)
    const [currentPage, setCurrentPage] = useState('cars')
    const [isShowingMyProfile, setIsShowingMyProfile] = useState(false)
    const [isShowingAside, setIsShowingAside] = useState(false)

    const toggleTheme = (rawTheme: string) => {
        const root = window.document.documentElement
        const isdark = rawTheme === 'dark'

        root.classList.remove(isdark ? 'light' : 'dark')
        root.classList.add(rawTheme)

        localStorage.setItem('color-theme', rawTheme)
    }

    useEffect(()=> {
        toggleTheme(theme)
    },[theme])

    return (
        <Theme.Provider value={{
            theme,
            setTheme,
            currentPage,
            setCurrentPage,
            isShowingAside,
            setIsShowingAside,
            isShowingMyProfile,
            setIsShowingMyProfile
        }}>
            {children}
        </Theme.Provider>
    )
}

export function useTheme(){
    return useContext(Theme)
}