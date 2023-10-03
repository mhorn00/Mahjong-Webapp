import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useLazyCreateRoomQuery} from '../store';
import TopBar from '../components/PageComponents/TopBar';
import './HomePage.scss';
import {setRoomId} from '../slices/gameStateSlice';

const HomePage = () => {
	const dispatch = useDispatch();
	const nav = useNavigate();
	const [trigger] = useLazyCreateRoomQuery();

	const handleCreateGame = async () => {
		console.log('Create Game');
		trigger()
			.then((res) => {
				console.log(res);
				dispatch(setRoomId(res.data));
				nav(`/game/${res.data}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};

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
