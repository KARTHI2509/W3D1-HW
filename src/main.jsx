import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function Main() {
    return (
        <main>
            <h2>Main Content</h2>
        </main>
    );
}

export default Main;