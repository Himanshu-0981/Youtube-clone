import React, { useState, useEffect, createContext, } from 'react'
import { fetchAPIData } from '../utils/api'

const Context = createContext();

export const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoriesData(selectCategories);
    }, [selectCategories])

    const fetchSelectedCategoriesData = (query) => {
        setLoading(true)
        fetchAPIData(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResult(contents)
            setLoading(false)
        })
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
            setMobileMenu
        }}>
            {children}
        </Context.Provider>
    )
}