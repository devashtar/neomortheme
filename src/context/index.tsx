import React from 'react'

type TypeChildren = React.ReactNode | React.ReactNode[]
type TypeThemeMode = 'light' | 'dark'
interface IThemeStore {
  themeMode: string
  switchThemeMode: () => void
}

export const ThemeContext = React.createContext<IThemeStore | null>(null)

export const ThemeProvider: React.FC<{ children: TypeChildren }> = ({
  children
}) => {
  const [themeMode, setThemeMode] = React.useState<TypeThemeMode>('dark')

  const switchThemeMode = () => {
    setThemeMode((state) => (state === 'dark' ? 'light' : 'dark'))
  }

  React.useEffect(() => {
    setColorTheme(themeMode)
  }, [themeMode])

  const value = React.useMemo(
    () => ({ themeMode, switchThemeMode } as IThemeStore),
    [themeMode]
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function setColorTheme(mode: TypeThemeMode) {
  const root = document.querySelector<HTMLElement>(':root')!
  const computedStyle = window.getComputedStyle(root)

  const bgcolor = computedStyle.getPropertyValue(`--${mode}-bgcolor`)
  const color = computedStyle.getPropertyValue(`--${mode}-color`)
  const blackShadow = computedStyle.getPropertyValue(`--${mode}-black-shadow`)
  const whiteShadow = computedStyle.getPropertyValue(`--${mode}-white-shadow`)
  const convex = computedStyle.getPropertyValue(`--${mode}-convex`)
  const concave = computedStyle.getPropertyValue(`--${mode}-concave`)

  root.style.setProperty('--main-bgcolor', bgcolor)
  root.style.setProperty('--main-color', color)
  root.style.setProperty('--main-black-shadow', blackShadow)
  root.style.setProperty('--main-white-shadow', whiteShadow)
  root.style.setProperty('--main-convex', convex)
  root.style.setProperty('--main-concave', concave)
}
