import create from "zustand";

type PrefecturesStore = {
  prefCodes: Array<number>;
  addPrefecture: (prefCode: number) => void;
  removePrefecture: (prefCode: number) => void;
};

export const usePrefecturesStore = create<PrefecturesStore>((set) => ({
  prefCodes: [],
  addPrefecture: (prefCode) =>
    set((state) => ({
      prefCodes: [...state.prefCodes, prefCode],
    })),
  removePrefecture: (prefCode) =>
    set((state) => ({
      prefCodes: state.prefCodes.filter((code) => code !== prefCode),
    })),
}));
