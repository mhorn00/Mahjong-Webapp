import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import store from './store.js';
import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import GamePage from './pages/GamePage.js';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/game',
		element: <GamePage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<DndProvider backend={HTML5Backend}>
				<RouterProvider router={router} />
			</DndProvider>
		</Provider>
	</React.StrictMode>
);
