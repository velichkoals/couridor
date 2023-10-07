import styled from 'styled-components';

export const Button = styled.button`
	text-decoration: none !important;
	width: 50%;
	margin: 30px 0 0 0;

	max-width: ${({ mw }) => mw || '100%'};
	max-height: ${({ mh }) => mh || '50px'};
	background: ${({ bg }) => bg || '#8a62d5'};
	border: 1px solid #fff;

	padding: ${({ p }) => p || '16px 24px'};

	display: flex;
	align-items: center;
	justify-content: center;

	transition: all 0.5s;
	border-radius: 8px;

	font-family: 'Inter', sans-serif;
	font-style: normal;
	font-size: ${({ fs }) => fs || '17px'};
	font-weight: ${({ fw }) => fw || '900'};
	line-height: 104%;

	color: #ffffff;

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		background: rgba(171, 149, 213, 0.76);
		cursor: not-allowed;
	}
`;
