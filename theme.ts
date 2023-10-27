import create from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
  mode: Theme;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  mode: "light",
  toggleTheme: () =>
    set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
}));

export default useThemeStore;
