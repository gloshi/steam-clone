import { createSlice } from "@reduxjs/toolkit";

const paramsSlice = createSlice({
    name: 'cart',
    initialState: {
        searchValue: '',
        categoriesValue: 'Все',
    },
    reducers: {
        setSearchValue: (state,action) => {
            state.searchValue = action.payload
        },
        setСategoriesValue: (state,action) => {
            state.categoriesValue = action.payload
        },
        deleteSearchValue: (state) => {
            state.searchValue = ''
        }
    }
})

export const {setSearchValue,deleteSearchValue,setСategoriesValue} = paramsSlice.actions
export default paramsSlice.reducer