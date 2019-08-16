import React from 'react';
import styled from 'styled-components';

const RangeWrapper = styled.div`
	display: block;
`;

const RangeLabel = styled.label`
	color: red;
`;

const RangeInput = styled.input`
	display: block;
`;

function HtmlRange({
	min = 0,
	max = 10,
	step = 1,
	label = '',
	value = '',
	onInputChange
}) {
	return (
		<RangeWrapper>
			<RangeLabel>{label}</RangeLabel>
			<RangeInput
				type="range"
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={onInputChange}
			/>
		</RangeWrapper>
	);
}

export default HtmlRange;
