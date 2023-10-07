import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { customStyles, ModalInterface } from '../starter-modal';

export interface FinishModalInterface {
	isModalShown: boolean;
	winner: string;
}

const FinishModal = ({ isModalShown, winner }: FinishModalInterface) => (
	// const handleRestartGame = () => {
	// 	console.log('restart game');
	// };

	<Modal
		isOpen={isModalShown}
		style={customStyles}
		contentLabel="Example Modal"
	>
		<ModalTitle>{winner} wins!</ModalTitle>

		{/* <ButtonWrapper> */}
		{/*	<Button onClick={handleRestartGame}>Play again</Button> */}
		{/* </ButtonWrapper> */}
		<AdLink href="https://t.me/Glorius529" target="_blank">
			<AdWrapper>
				<AdImage src="fe-comm.jpeg" />
				<AdText>
					Join Genesis <br /> Front-End Community!
				</AdText>
			</AdWrapper>
		</AdLink>
	</Modal>
);
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

const AdWrapper = styled.div`
	margin-top: 30px;
	border: 2px solid rgba(18, 175, 194, 1);
	border-radius: 10px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		cursor: pointer;
	}
`;

const AdImage = styled.img`
	width: 100px;
	height: 100px;
	border-right: 10px;
`;

const AdText = styled.p`
	width: 300px;
	font-family: 'Nunito Sans', sans-serif;
	font-size: 22px;
	color: rgba(18, 175, 194, 1);
	font-weight: 500;
	text-align: center;
`;

const AdLink = styled.a`
	text-decoration: none;
`;
