document.addEventListener('DOMContentLoaded', () => {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const hexValue = document.getElementById('hexValue');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');

    function updateColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        const hex = `#${parseInt(red).toString(16).padStart(2, '0')}${parseInt(green).toString(16).padStart(2, '0')}${parseInt(blue).toString(16).padStart(2, '0')}`;
        hexValue.textContent = `Código Hexadecimal: ${hex}`;

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;

        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        colorPicker.value = hex;
    }

    function updateFromInput(event) {
        const inputId = event.target.id;
        const value = event.target.value;

        if (inputId === 'redInput') {
            redSlider.value = value;
        } else if (inputId === 'greenInput') {
            greenSlider.value = value;
        } else if (inputId === 'blueInput') {
            blueSlider.value = value;
        }

        updateColor();
    }

    function updateFromPicker() {
        const hex = colorPicker.value;
        const rgb = hexToRgb(hex);

        redSlider.value = rgb.r;
        greenSlider.value = rgb.g;
        blueSlider.value = rgb.b;

        redInput.value = rgb.r;
        greenInput.value = rgb.g;
        blueInput.value = rgb.b;

        updateColor();
    }

    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    }

    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    redInput.addEventListener('input', updateFromInput);
    greenInput.addEventListener('input', updateFromInput);
    blueInput.addEventListener('input', updateFromInput);

    colorPicker.addEventListener('input', updateFromPicker);

    // Inicializar con valores predeterminados
    updateColor();
});
