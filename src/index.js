// Libraries
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// Styles
const RangeWrapper = styled.div`
	display: block;
`;

const RangeLabel = styled.label`
	font-weight: 500;
	font-size: 1rem;
`;

const RangeInput = styled.input`
	--slider-value: 10;
	display: block;
	width: 100%;
	appearance: none;

	&:focus {
		outline: none;
	}

	&::-webkit-slider-runnable-track,
	&::-webkit-slider-thumb {
		appearance: none;
	}

	&::-webkit-slider-thumb {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-top: -9px;
		background: #999;
		border: 3px solid #fff;
	}

	&::-webkit-slider-runnable-track {
		border-radius: 2px;
		height: 3px;
		background: linear-gradient(
			to right #00697b calc(var(--slider-value) * 1%),
			#e0e0e0 0
		);
	}
`;

// Component
function HtmlRange({
	name = '',
	min = 0,
	max = 10,
	step = 1,
	label = '',
	value = '',
	onInputChange
}) {
	const rangeElement = useRef(null);

	useEffect(() => {
		const inputEl = rangeElement.current;
		const inputMin = inputEl.getAttribute('min');
		const inputMax = inputEl.getAttribute('max');
		const inputValue = inputEl.value;
		const actualized = (inputMax - inputMin) / 100;
		inputEl.style.setProperty(
			'--slider-value',
			(inputValue - inputMin) / actualized
		);
	}, [value]);

	return (
		<RangeWrapper className="HtmlRange">
			<RangeLabel htmlFor={name}>{label}</RangeLabel>
			<RangeInput
				name={name}
				type="range"
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={onInputChange}
				ref={rangeElement}
			/>
		</RangeWrapper>
	);
}

export default HtmlRange;
