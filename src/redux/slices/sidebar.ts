import { SidebarState } from '@/types/SidebarState.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SidebarState = {
  state: null,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebar(state, action: PayloadAction<SidebarState>) {
      state = action.payload;
    },
    openSidebarFilter(state) {
      state.state = 'filter';
    },
    closeSidebar(state) {
      state.state = null;
    },
  },
});

export const { setSidebar, openSidebarFilter, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
