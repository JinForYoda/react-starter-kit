import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')!
const root = createRoot(container)
const PROJECT_NAME = 'NEW_REPO_NAME'

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename={'/' + PROJECT_NAME}>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
