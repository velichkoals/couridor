import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Input from '../common/input/Input';
import { Button } from '../common/button';
import { customStyles, ModalInterface } from '../starter-modal';

export interface FinishModalInterface {
	isModalShown: boolean;
	winner: string;
}

const FinishModal = ({ isModalShown, winner }: FinishModalInterface) => {
	const handleRestartGame = () => {
		console.log('restart game');
	};

	return (
		<Modal
			isOpen={isModalShown}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<ModalTitle>{winner} wins!</ModalTitle>

			<ButtonWrapper>
				<Button onClick={handleRestartGame}>Play again</Button>
			</ButtonWrapper>
		</Modal>
	);
};

export default FinishModal;

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
