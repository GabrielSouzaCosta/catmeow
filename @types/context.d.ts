export interface AppContextInterface {
    theme: 'light'|'dark',
    setTheme: (value) => void,
    toggleTheme?: (checked: boolean) => void,
}