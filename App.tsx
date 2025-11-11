import { NavigationContainer } from '@react-navigation/native'
import { RootNavigation } from './src/navigation/RootNavigation'
import { ThemeProvider } from './src/context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
