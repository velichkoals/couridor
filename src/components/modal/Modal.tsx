import React from 'react';

interface ModalInterface {
	isModalShown: boolean;
}
const customStyles = {
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
		padding: '30px',
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

// const [isModalShown, setIsModalShown] = useState(false);
const Modal = ({ isModalShown }: ModalInterface) => (
	<Modal
		isOpen={isModalShown}
		style={customStyles}
		contentLabel="Example Modal"
	>
		<ModalTitle>THANK YOU!</ModalTitle>

		{/* <ModalSubtitle> */}
		{/*	We will process your request and get back to you via {email} */}
		{/* </ModalSubtitle> */}

		<ModalAccentText>
			Generally it takes us less than 24 hours to resolve any requests from our
			customers
		</ModalAccentText>
	</Modal>
);

export default Modal;
