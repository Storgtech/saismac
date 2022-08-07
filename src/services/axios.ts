import { destroyCookie, parseCookies, setCookie } from "nookies";
import axios, { AxiosError } from "axios";
import Router from "next/router";
import { authError } from "../erros/authError";

export const base_url = process.env.NEXT_PUBLIC_BASE_URL 

export const useApi = axios.create({
    baseURL: base_url,
})

let isRefreshing = false;
let failedRequestQueue = []

export function apiJWT(ctx = undefined) {

    let cookies = parseCookies(ctx)

    const api = axios.create({
        baseURL: base_url,
        headers: {
            authorization: `Bearer ${cookies['ctradingAuth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response
    }, (error: any) => {
        if (error.response.status == 401) {
            if (error.response.data?.code == 'token.expired') {
                cookies = parseCookies(ctx)
                const originalConfig = error.config
                const { 'nextAuth.refresh': refreshToken } = cookies

                if (!isRefreshing) {

                    isRefreshing = true

                    api.post('/api/user/refresh', {
                        refresh: refreshToken
                    }).then(response => {
                        const { token } = response?.data

                        setCookie(ctx, 'ctradingAuth.token', token, {
                            maxAge: 60 * 60 * 24 * 30,
                            path: '/'
                        })

                        setCookie(ctx, 'ctradingAuth.refresh', response?.data.refreshToken, {
                            maxAge: 60 * 60 * 24 * 30,
                            path: '/'
                        })

                        api.defaults.headers['authorization'] = `Bearer ${token}`

                        failedRequestQueue.forEach(request => request.onSuccess(token))
                        failedRequestQueue = []

                    }).catch(error => {
                        failedRequestQueue.forEach(request => request.onFailure(error))
                        failedRequestQueue = []

                        if (typeof window) {
                            Router.push('/')
                        }
                    }).finally(() => {
                        isRefreshing = false
                    })

                }

                return new Promise((resolve, reject) => {
                    failedRequestQueue.push({
                        onSuccess: (token: string) => {
                            originalConfig.headers['authorization'] = `Bearer ${token}`
                            resolve(api(originalConfig))
                        },
                        onFailure: (error: AxiosError) => {
                            reject(error)
                        }
                    })
                })
            } else {
                destroyCookie(ctx, 'ctradingAuth.token')
                destroyCookie(ctx, 'ctradingAuth.refresh')

                if (typeof window) {
                    Router.push('/')
                } else {
                    return Promise.reject(new authError())
                }
            }

        }

        return Promise.reject(error)
    })

    return api

}