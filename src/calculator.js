// src/Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');

    const appendToDisplay = (value) => {
        setInputValue(inputValue + value);
        setDisplayValue(displayValue + value);
    };

    const clearDisplay = () => {
        setInputValue('');
        setDisplayValue('');
    };

    const deleteLastCharacter = () => {
        const input = inputValue;
        const display = displayValue;
        if (input.length > 0) {
            setInputValue(input.slice(0, -1));
            setDisplayValue(display.slice(0, -1));
        }
    };

    const calculate = () => {
        try {
            const result = eval(inputValue);
            setDisplayValue(result.toString());
        } catch(error) {
            setDisplayValue('Error');
        }
    };

    return (
        React.createElement('div', { className: 'calculator' },
            React.createElement('input', { type: 'text', id: 'input', value: inputValue, readOnly: true }),
            React.createElement('input', { type: 'text', id: 'display', value: displayValue, disabled: true }),
            React.createElement('div', { className: 'button-row' },
                React.createElement('input', { type: 'button', className: 'button', value: '7', onClick: () => appendToDisplay('7') }),
                React.createElement('input', { type: 'button', className: 'button', value: '8', onClick: () => appendToDisplay('8') }),
                React.createElement('input', { type: 'button', className: 'button', value: '9', onClick: () => appendToDisplay('9') }),
                React.createElement('input', { type: 'button', className: 'button', value: '/', onClick: () => appendToDisplay('/') })
            ),
            React.createElement('div', { className: 'button-row' },
                React.createElement('input', { type: 'button', className: 'button', value: '4', onClick: () => appendToDisplay('4') }),
                React.createElement('input', { type: 'button', className: 'button', value: '5', onClick: () => appendToDisplay('5') }),
                React.createElement('input', { type: 'button', className: 'button', value: '6', onClick: () => appendToDisplay('6') }),
                React.createElement('input', { type: 'button', className: 'button', value: '*', onClick: () => appendToDisplay('*') })
            ),
            React.createElement('div', { className: 'button-row' },
                React.createElement('input', { type: 'button', className: 'button', value: '1', onClick: () => appendToDisplay('1') }),
                React.createElement('input', { type: 'button', className: 'button', value: '2', onClick: () => appendToDisplay('2') }),
                React.createElement('input', { type: 'button', className: 'button', value: '3', onClick: () => appendToDisplay('3') }),
                React.createElement('input', { type: 'button', className: 'button', value: '-', onClick: () => appendToDisplay('-') })
            ),
            React.createElement('div', { className: 'button-row' },
                React.createElement('input', { type: 'button', className: 'button', value: '0', onClick: () => appendToDisplay('0') }),
                React.createElement('input', { type: 'button', className: 'button', value: '.', onClick: () => appendToDisplay('.') }),
                React.createElement('input', { type: 'button', id: 'clear', className: 'button', value: 'C', onClick: clearDisplay }),
                React.createElement('input', { type: 'button', className: 'button', value: '+', onClick: () => appendToDisplay('+') })
            ),
            React.createElement('div', { className: 'button-row' },
                React.createElement('input', { type: 'button', id: 'delete', className: 'button', value: 'DEL', onClick: deleteLastCharacter }),
                React.createElement('input', { type: 'button', id: 'calculate', className: 'button', value: '=', onClick: calculate })
            )
        )
    );
}

export default Calculator;
