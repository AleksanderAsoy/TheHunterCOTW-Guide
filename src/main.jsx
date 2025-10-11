/**
 * Application Entry Point
 * 
 * This is where the React application is initialized and mounted to the DOM.
 * 
 * - Creates a root render point targeting the #root div in index.html
 * - Wraps App in StrictMode for development checks and warnings
 * - Imports global CSS styles from index.css (includes Tailwind)
 * 
 * StrictMode Benefits:
 * - Identifies components with unsafe lifecycles
 * - Warns about legacy string ref API usage
 * - Detects unexpected side effects
 * - Only runs in development mode (no performance impact in production)
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Global styles including Tailwind CSS
import App from './App.jsx'

// Mount the React application to the #root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
