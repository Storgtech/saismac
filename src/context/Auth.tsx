import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useApi } from '../services/axios';

export interface User {
    id: string;
    userId: string;
    email: string;
    avatarUrl: string;
    username: string;
}

export interface Cars {
    id: string;
    type: string;
    brand: string;
    model: string;
    avatarUrl: string;
}

export interface Entity {
    id: string;
    name: string;
    email: string;
    phone: string;
    alternativePhone: string;
    state: string;
    cars: Cars[]
}

interface IContext {
    user: User
    entity: Entity
    signin: (email: string, password: string) => Promise<void>;
    signout: () => void;
    isLoading: boolean;
    loginError: string | null;
    setLoginError: Dispatch<SetStateAction<string | null>>
}

interface props {
    children: ReactNode;
}

const Auth = createContext({} as IContext)

export function AuthProvider({ children }: props) {

    const client = useQueryClient()

    const cookies = parseCookies(undefined)

    const route = useRouter()

    const [loginError, setLoginError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const refresh = cookies['ctradingAuth.refresh']

    const { data, error } = useQuery<{ user: User, entity: Entity }>("me", async () => {
        if (refresh) {
            const { data } = await useApi.get(`/api/user/me/${refresh}`)
            return data            
        }

        return {
            user: {

            },
            entity: {

            }
        }
    })

    const user = data?.user
    const entity = data?.entity

    const signin = async (email: string, password: string) => {

        if (email.trim() == '' || password.trim() == '') {
            return
        }

        try {
            setIsLoading(true)
            const { data } = await useApi.post('/api/user/auth', { email, password })


            setCookie(undefined, 'ctradingAuth.token', data.token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })

            setCookie(undefined, 'ctradingAuth.refresh', data.refreshToken, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })

            if(!refresh){

                const response = await useApi.get(`/api/user/me/${data.refreshToken}`)
                console.log(response.data)
                client.setQueryData('me', response.data)
                route.push(`/dashboard/${response?.data.user.userId}`)

                return
            }

           route.push(`/dashboard/${data.userId}`)

        } catch (err) {
            setLoginError(err.response?.data.message || null)
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }

    const signout = () => {
        setCookie(undefined, 'ctradingAuth.refresh', '', {
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
        })

        route.replace('/login')
    }

    return (
        <Auth.Provider value={{
            user,
            entity,
            signin,
            signout,
            loginError,
            setLoginError,
            isLoading
        }}>
            {children}
        </Auth.Provider>
    )
}

export function useAuth() {
    return useContext(Auth)
}