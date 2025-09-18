import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type GlobalState = {};

type GlobalActions = {
  reset: () => void;
};

type GlobalStore = GlobalState & GlobalActions;

const initialState: GlobalState = {};

export const useGlobalStore = create<GlobalStore>()(
  devtools(
    persist(
      (set, _get) => ({
        ...initialState,
        reset: () => {
          console.log("reset");
          set(initialState);
        },
      }),
      {
        name: "global-storage",
        storage: createJSONStorage(() => localStorage),
        // skipHydration: true,
      },
    ),
  ),
);
