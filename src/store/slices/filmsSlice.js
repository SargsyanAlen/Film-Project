import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const fetchFilmsByPage = createAsyncThunk(
    'fetchFilmsByPage',
    async (pageCount) => {
        const res = await filmsAPI.getMovieByPage(pageCount);
        return res.data.results;
    }
);

export const fetchPrevFilmsByPage = createAsyncThunk(
    'fetchPrevFilmsByPage',
    async (decPage) => {
        const res = await filmsAPI.getPrevMovieByPage(decPage);
        return res.data.results;
    }
);

export const fetchOneFilm = createAsyncThunk(
    'fetchOneFilm',
    async (id) => {
        const res = await filmsAPI.getOneMovie(id);
        return res.data;
    }
);

export const fetchSearchFilm = createAsyncThunk(
    'fetchSearchFilm',
    async (text) => {
        const res = await filmsAPI.getSearchFilm(text);
        return res.data.results;
    }
);

const filmsSlice = createSlice({
    name: "filmsSlice",
    initialState: {
        filmsByPage: [],
        pageCount: 1,
        isFethcing: false,
        oneFilm : {},
        text : '',
        search : [],
    },
    reducers: {
        incrementPage(state) {
            state.pageCount = state.pageCount + 1;
        },
        decrementPage(state) {
            state.pageCount = state.pageCount - 1;
        },
        changeText(state, action) {
            state.text = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilmsByPage.pending, (state) => {
            state.isFethcing = true
        })
        builder.addCase(fetchFilmsByPage.fulfilled, (state, action) => {
            state.filmsByPage = action.payload
            state.isFethcing = false
        })
        builder.addCase(fetchPrevFilmsByPage.pending, (state) => {
            state.isFethcing = true
        })
        builder.addCase(fetchPrevFilmsByPage.fulfilled, (state, action) => {
            state.filmsByPage = action.payload
            state.isFethcing = false
        })
        builder.addCase(fetchOneFilm.fulfilled, (state, action) => {
            state.oneFilm = action.payload
        })
        builder.addCase(fetchSearchFilm.fulfilled, (state, action) => {
            state.search = action.payload
        })
    }
});

export const { incrementPage, decrementPage, changeText } = filmsSlice.actions;
export default filmsSlice.reducer;