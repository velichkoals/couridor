import React from 'react';
import styled from 'styled-components';

const Input = ({ isValid, formValue, setFormValue, placeholder, inputRef }) => (
	<CustomInput
		ref={inputRef}
		type="text"
		className={`input ${isValid ? 'input--valid' : ''}`}
		value={formValue}
		onChange={(e) => setFormValue(e.target.value)}
		placeholder={placeholder}
		style={{ maxWidth: '100%' }}
	/>
);

const CustomInput = styled.input`
	font-family: 'Nunito Sans', sans-serif;
	padding: 7px;
	margin: 12px 0 15px;
	color: #0f0f0f;

	width: 60%;
	max-height: fit-content;
	font-weight: 500;

	font-size: 15px;
	line-height: 28px;
	transition: 0.3s all;

	background: transparent;
	border: 2px solid #e8eaf2;
	border-radius: 8px;

	&:focus {
		outline: none;
		border: 2px solid #ab95d5;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&::placeholder {
		opacity: 0.2;
		color: #0f0f0f;
	}
`;

export default Input;
