import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RandomEmoji from './components/randomEmoji'
import Toggle from './components/toggle'
import "./styles/randomEmoji.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toggle />
    <RandomEmoji />
  </StrictMode>,
)
