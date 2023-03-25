import React, { useState, useEffect, createContext, } from 'react'
import { fetchAPIData, randomUserAPI } from '../utils/api'

export const Context = createContext();

export const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [randomUser, setRandomUser] = useState("")

    useEffect(() => {
        fetchSelectedCategoriesData(selectCategories);
        fetchRandomUserPic()
    }, [selectCategories])

    const fetchSelectedCategoriesData = (query) => {
        setLoading(true)
        fetchAPIData(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResult(contents)
            setLoading(false)
        })
    }

    const fetchRandomUserPic = () => {
        randomUserAPI().then(res => setRandomUser(res?.results[0]?.picture?.thumbnail))
    }

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResult,
            setSearchResult,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu,
            randomUser
        }}>
            {children}
        </Context.Provider>
    )
}