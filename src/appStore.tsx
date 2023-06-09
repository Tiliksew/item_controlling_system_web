import {create} from 'zustand';
import { persist } from 'zustand/middleware';

// interface AppStore {
//   dopen: boolean;
//   updateOpen: (dopen: boolean) => void;
// }
interface Row {
  "Item No": string;
  "Description": string;
  " Qty ": number;
  " Amount ": number;
  " Rate ": number;
}

interface StoreState {
  
  selectedRow: Row | null;
  items: Row[] | [];
  setItems: (row: Row[] | null) => void;
  setSelectedRow: (row: Row | null) => void;
  dopen: boolean;
  isLoading: boolean;
  updateOpen: (dopen: boolean) => void;
  updateLoading: (dopen: boolean) => void;

}

const appStore = persist<StoreState>((set) => ({
  dopen: true,
  isLoading: false,
  items: [],
  setItems: (items) => set({ items:items || []}),
  updateOpen: (dopen) => set({ dopen }),
  selectedRow: null,
  setSelectedRow: (row) => set({ selectedRow: row }),
  updateLoading: (isLoading) => set({ isLoading: isLoading }),

}), { name: 'my_app_store' });

export const useAppStore = create(appStore);