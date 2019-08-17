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
	--slider-value: ${props => props.value};
	--track-empty-color: ${props =>
		props.otherStyles && props.otherStyles.trackEmptyColor
			? props.otherStyles.trackEmptyColor
			: '#e0e0e0'};
	--track-filled-color: ${props =>
		props.otherStyles && props.otherStyles.trackFilledColor
			? props.otherStyles.trackFilledColor
			: '#00697b'};
	--ball-size: ${props =>
		props.otherStyles && props.otherStyles.ballSize
			? props.otherStyles.ballSize
			: '20px'};
	--ball-border: ${props =>
		props.otherStyles && props.otherStyles.ballBorder
			? props.otherStyles.ballBorder
			: '3px solid #fff'};
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
		width: var(--ball-size);
		height: var(--ball-size);
		border-radius: 50%;
		margin-top: -50%;
		background: #999;
		border: var(--ball-border);
	}

	&::-webkit-slider-runnable-track {
		border-radius: 2px;
		height: ${props =>
			props.otherStyles && props.otherStyles.trackHeight
				? props.otherStyles.trackHeight
				: '3px'};
		background: linear-gradient(
			to right var(--track-filled-color) calc(var(--slider-value) * 1%),
			var(--track-empty-color) 0
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
	onInputChange,
	styles: {
		wrapperStyles = {},
		labelStyles = {},
		inputStyles = {},
		otherStyles = {}
	} = {}
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
		<RangeWrapper className="HtmlRange" style={wrapperStyles}>
			{label && (
				<RangeLabel htmlFor={name} style={labelStyles}>
					{label}
				</RangeLabel>
			)}
			<RangeInput
				name={name}
				type="range"
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={onInputChange}
				ref={rangeElement}
				style={inputStyles}
				otherStyles={otherStyles}
			/>
		</RangeWrapper>
	);
}

export default HtmlRange;
