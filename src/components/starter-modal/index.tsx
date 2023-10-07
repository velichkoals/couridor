import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Input from '../common/input/Input';
import { Button } from '../common/button';

export interface ModalInterface {
	isModalShown: boolean;
	handleStartGame: (player1: string, player2: string) => void;
}
export const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		background: '#ffffff',
		maxWidth: '640px',
		width: 'calc(100vw - 40px)',
		border: 'none',
		padding: '50px',
		borderRadius: '10px',
	},
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
};

const StarterModal = ({ isModalShown, handleStartGame }: ModalInterface) => {
	const firstPlayerRef = useRef(null);
	const secondPlayerRef = useRef(null);

	const [firstPlayerName, setFirstPlayerName] = useState<string>('Player1');
	const [secondPlayerName, setSecondPlayerName] = useState<string>('Player2');

	const isButtonDisabled = useMemo(
		() => !firstPlayerName.length || !secondPlayerName.length,
		[firstPlayerName, secondPlayerName],
	);

	return (
		<Modal
			isOpen={isModalShown}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<ModalTitle>Welcome to Quoridor!</ModalTitle>

			<Settings>
				<SettingsItem>
					<Text>Enter Player 1 name:</Text>
					<Input
						inputRef={firstPlayerRef}
						isValid
						isQuizFlow={false}
						formValue={firstPlayerName}
						setFormValue={setFirstPlayerName}
						placeholder="Player1"
					/>
				</SettingsItem>
				{/* <SettingsItem> */}
				{/*	<Text>Select color:</Text> */}
				{/* </SettingsItem> */}
			</Settings>
			<Settings>
				<SettingsItem>
					<Text>Enter 2nd player name:</Text>
					<Input
						inputRef={secondPlayerRef}
						isValid
						isQuizFlow={false}
						formValue={secondPlayerName}
						setFormValue={setSecondPlayerName}
						placeholder="Player1"
					/>
				</SettingsItem>
				{/* <SettingsItem> */}
				{/*	<Text>Select color:</Text> */}
				{/* </SettingsItem> */}
			</Settings>
			<ButtonWrapper>
				<Button
					disabled={isButtonDisabled}
					onClick={() => handleStartGame(firstPlayerName, secondPlayerName)}
				>
					Start Game
				</Button>
			</ButtonWrapper>
		</Modal>
	);
};

export default StarterModal;

const ModalTitle = styled.h2`
	font-family: 'Nunito Sans', sans-serif;
	margin-bottom: 20px;
	text-align: center;
	font-size: 30px;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const SettingsItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Text = styled.p`
	margin-left: 10px;
	font-weight: 500;
	color: #2a2a2a;
	font-family: 'Nunito Sans', sans-serif;
	font-size: 16px;
`;

const Settings = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;
