import React from 'react';
import TopBar from '../components/PageComponents/TopBar';
import './HomePage.scss';
import { useDispatch } from 'react-redux';
import {createNewRoomThunk} from '../slices/mainStateSlice';
import {ItemTypes} from '../enums/ItemTypes';

const HomePage = () => {
	const dispatch = useDispatch();

	const handleCreateGame = () => {
		console.log('Create Game');
		//dispatch(createNewRoomThunk());
	};

	console.log(ItemTypes);

	return (
		<div className='RootContainer'>
			<TopBar className='TopBar' />
			<div className='HomeContainer'>
				<form className='form'>
					<button className='button' type='button' onClick={handleCreateGame}>
						Create Game
					</button>
				</form>
			</div>
		</div>
	);
};

export default HomePage;
