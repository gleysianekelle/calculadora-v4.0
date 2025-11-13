const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const themeToggle = document.getElementById('theme-toggle');

// ----------- FUNÇÕES PRINCIPAIS -----------
function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
            display.value = value;
                } else {
                        display.value += value;
                            }
                            }

                            function clearDisplay() {
                                display.value = '0';
                                }

                                function deleteLast() {
                                    display.value = display.value.slice(0, -1);
                                        if (display.value === '') display.value = '0';
                                        }

                                        function calculateResult() {
                                            try {
                                                    let expression = display.value.replace(/÷/g, '/');
                                                            expression = expression.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
                                                                    display.value = eval(expression);
                                                                        } catch {
                                                                                display.value = 'Erro';
                                                                                    }
                                                                                    }

                                                                                    // ----------- EVENTOS DE CLIQUE -----------
                                                                                    buttons.forEach(button => {
                                                                                        button.addEventListener('click', () => {
                                                                                                const value = button.textContent;

                                                                                                        if (button.classList.contains('clear')) {
                                                                                                                    clearDisplay();
                                                                                                                            } else if (value === '⌫') {
                                                                                                                                        deleteLast();
                                                                                                                                                } else if (value === '=') {
                                                                                                                                                            calculateResult();
                                                                                                                                                                    } else {
                                                                                                                                                                                appendToDisplay(value);
                                                                                                                                                                                        }
                                                                                                                                                                                            });
                                                                                                                                                                                            });

                                                                                                                                                                                            // ----------- TEMA -----------
                                                                                                                                                                                            themeToggle.addEventListener('click', () => {
                                                                                                                                                                                                document.body.classList.toggle('strong-theme');
                                                                                                                                                                                                });