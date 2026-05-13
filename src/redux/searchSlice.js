import { createSlice } from "@reduxjs/toolkit";

const loadSearchFromStorage = () => {
  try {
    const savedQuery = localStorage.getItem("shoppyglobe_search");
    return savedQuery || "";
  } catch (error) {
    console.warn("Unable to load search query from storage:", error);
    return "";
  }
};

const saveSearchToStorage = query => {
  try {
    localStorage.setItem("shoppyglobe_search", query);
  } catch (error) {
    console.warn("Unable to save search query to storage:", error);
  }
};

const searchSlice = createSlice({
  name: "search",
  initialState: loadSearchFromStorage(),
  reducers: {
    setSearch: (state, action) => {
      saveSearchToStorage(action.payload);
      return action.payload;
    },
  }
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;