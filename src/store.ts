import { create } from "zustand";

// Interface describing queries for searching/filtering through games
interface GameQuery {
  searchText?: string;
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
}

// Interface describing the object and functions of the store
// Store takes a GameQuery as well as setter functions
interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

// Create a store of GameQueryStore
// Pass in the set function to merge state
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { searchText: searchText } })),
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId: genreId } })),
  setPlatformId: (platformId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId: platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortOrder: sortOrder },
    })),
}));

export default useGameQueryStore;
