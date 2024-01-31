import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async () => {
        const response = await filmsAPI.getGenre();
        return response.data.genres;
    }
);

export const fetchGenresMovies = createAsyncThunk(
    'fetchGenresMovies',
    async (id) => {
        const res = await filmsAPI.getGenreMovies(id);
        return res.data.results;
    }
);

const genresSlice = createSlice({
    name: "genresSlice",
    initialState: {
        genres: [],
        genreMovie : [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
        })
        builder.addCase(fetchGenresMovies.fulfilled, (state, action) => {
            state.genreMovie = action.payload;
        })
    }
});

export default genresSlice.reducer;