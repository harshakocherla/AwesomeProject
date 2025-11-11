import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react'
import { Appearance } from 'react-native'

type ThemeMode = 'light' | 'dark'

type Colors = {
  background: string
  text: string
  buttonBg: string
  buttonText: string
}

type ThemeType = {
  theme: ThemeMode
  colors: Colors
  toggleTheme: () => void
}

const lightColors: Colors = {
  background: '#FFFFFF',
  text: '#000000',
  buttonBg: '#007AFF',
  buttonText: '#FFFFFF',
}

const darkColors: Colors = {
  background: '#000000',
  text: '#FFFFFF',
  buttonBg: '#1E1E1E',
  buttonText: '#FFFFFF',
}

const ThemeContext = createContext<ThemeType | null>(null)

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeMode>(
    (Appearance.getColorScheme() as ThemeMode) || 'light',
  )
  const colors = useMemo(() => (theme === 'light' ? lightColors : darkColors), [theme])
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }, [])
  const contextValue = useMemo(
    () => ({
      theme,
      colors,
      toggleTheme,
    }),
    [theme, colors, toggleTheme],
  )
  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider!')
  }
  // TypeScript assertion: after null check, context is definitely ThemeType
  return context as ThemeType
}
