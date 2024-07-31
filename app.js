class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.displayValue = '';
    }

    handleInput(value) {
        switch (value) {
            case '=':
                this.calculate();
                break;
            case 'C':
                this.clear();
                break;
            case 'sin':
            case 'cos':
            case 'tan':
                this.calculateTrigonometry(value);
                break;
            default:
                this.appendToDisplay(value);
        }
    }

    appendToDisplay(value) {
        this.displayValue += value;
        this.displayElement.value = this.displayValue;
    }

    calculate() {
        try {
            this.displayValue = eval(this.displayValue);
            this.displayElement.value = this.displayValue;
        } catch (error) {
            this.displayElement.value = 'Erro';
        }
    }

    clear() {
        this.displayValue = '';
        this.displayElement.value = this.displayValue;
    }

    calculateTrigonometry(func) {
        try {
            const value = eval(this.displayValue);
            this.displayValue = Math[func](value).toString();
            this.displayElement.value = this.displayValue;
        } catch (error) {
            this.displayElement.value = 'Erro';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    const calculator = new Calculator(display);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            calculator.handleInput(value);
        });
    });
});
