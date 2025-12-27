import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfiguratorState {
  isOpen: boolean;
  fixedNavbar: boolean;
  sidenavType: "transparent" | "white";
  sidebarColor: "purple" | "blue" | "green" | "orange" | "red" | "pink";
}

const initialState: ConfiguratorState = {
  isOpen: false,
  fixedNavbar: false, // Default to fixed
  sidenavType: "transparent",
  sidebarColor: "purple", // Default color
};

export const configuratorSlice = createSlice({
  name: "configurator",
  initialState,
  reducers: {
    toggleConfigurator: (state) => {
      state.isOpen = !state.isOpen;
    },
    setConfiguratorOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setFixedNavbar: (state, action: PayloadAction<boolean>) => {
      state.fixedNavbar = action.payload;
    },
    setSidenavType: (state, action: PayloadAction<"transparent" | "white">) => {
      state.sidenavType = action.payload;
    },
    setSidebarColor: (
      state,
      action: PayloadAction<ConfiguratorState["sidebarColor"]>
    ) => {
      state.sidebarColor = action.payload;
    },
  },
});

export const {
  toggleConfigurator,
  setConfiguratorOpen,
  setFixedNavbar,
  setSidenavType,
  setSidebarColor,
} = configuratorSlice.actions;
export const configuratorReducer = configuratorSlice.reducer;
