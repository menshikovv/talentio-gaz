import { makeAutoObservable } from "mobx";

export type Theme = 'default' | 'night' | 'katana';

class ThemeStore {
    theme: Theme = 'default';

    constructor() { makeAutoObservable(this) }

    switchTheme = (newTheme: Theme) => {
        this.theme = newTheme;
    }
}

export const themeStore = new ThemeStore();
