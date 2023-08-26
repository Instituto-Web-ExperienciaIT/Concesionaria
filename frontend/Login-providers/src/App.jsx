import './App.css'
import { ThemeConfig } from './config/theme.config'
import { LoginProviders } from './pages/login/login-providers'

function App() {

  return (
    <div>
    <ThemeConfig>
      <LoginProviders/>
    </ThemeConfig>
    </div>
  )
}

export default App
