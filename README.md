# React HTML Range Input

A simple React component for the HTML range input.

## Implementation Guide

##### 1. Installation

- Yarn:

  `yarn add react-html-range`

- NPM:

  `npm install react-html-range --save`

##### 2. Use

```javascript
import React from 'react';

// Import the component
import HtmlRange from 'react-html-range';

function MyComponent({ value, onValueChange, stylesObject }) {
	// Use the component
	return (
		<HtmlRange
			name="foo"
			label="bar"
			min={0}
			max={10}
			step={1}
			value={value}
			onInputChange={onValueChange}
			styles={stylesObject}
		/>
	);
}
```

## API

| Name            | Type       | Default | Description                                                                                          |
| :-------------- | :--------- | :------ | :--------------------------------------------------------------------------------------------------- |
| `name`          | `string`   | None    | Used as the `name` property on the input.                                                            |
| `label`         | `string`   | None    | Used as the `label` for the input.                                                                   |
| `min`           | `number`   | 0       | The minimum value of the range.                                                                      |
| `max`           | `number`   | 10      | The maximum value of the range.                                                                      |
| `step`          | `number`   | 1       | The incremental value of the range.                                                                  |
| `value`         | `number`   | None    | The value of the range.                                                                              |
| `onInputChange` | `function` | None    | The callback function for the `onChange` event on the input.                                         |
| `styles`        | `object`   | `{}`    | Controls the styling of the `HtmlRange` component. See the **Styling** section for more information. |

## Styling

Styling can be done by providing an object to the `styles` property of the component. This object accepts three nested objects - `wrapperStyles`, `labelStyles`, and `inputStyles` - that can be used to apply styles to html nodes just as you typically would in React (camel-case CSS properties). The fourth nested object - `otherStyles` - can be used to apply further styling.

### `otherStyles`

| Name               | Default          | Purpose                                       |
| :----------------- | :--------------- | :-------------------------------------------- |
| `ballColor`        | `#444`           | The color of the range track ball.            |
| `ballSize`         | `20px`           | The width and height of the range track ball. |
| `ballBorder`       | `3px solid #fff` | The border surrounding the range track ball.  |
| `trackHeight`      | `3px`            | The height of the range's track.              |
| `trackFilledColor` | `#00697b`        | The filled color of the track.                |
| `trackEmptyColor`  | `#e0e0e0`        | The unfilled color of the track.              |

### Example Styles Object

```javascript
const styles = {
	// CSS property objects
	wrapperStyles: { marginTop: '10px' },
	labelStyles: { color: 'red' },
	inputStyles: { width: '400px' },
	// Custom property object
	otherStyles: {
		ballColor: '#444',
		ballSize: '20px',
		ballBorder: '3px solid #fff',
		trackHeight: '3px',
		trackFilledColor: '#00697b',
		trackEmptyColor: '#e0e0e0'
	}
};
```

## Creator

[Curtis](https://curtisrodgers.com/)
