/* eslint-disable no-console */
const propName = 'accentColor'

export default class ThemeManager {
    constructor($container, $root) {
        this.$container = $container
        this.$root = $root
        this.getThemeFromStorage()
    }

    getThemeFromStorage() {
        const storedValue = localStorage.getItem(propName)
        console.log(storedValue)
        if (storedValue) {
            this.setColor(storedValue)
        } else {
            this.setColor('#00ff62')
        }
        this.applyTheme(this.color)
    }

    setColor(value) {
        this.color = value
    }

    saveTheme(value) {
        this.setColor(value)
        localStorage.setItem(propName, value)
    }

    applyTheme(value) {
        this.$root.style.setProperty(`--accentColor`, value)
    }

    initColorInput() {
        const label = document.createElement('label')
        label.className = 'menu-option'
        label.innerText = 'Choose theme color'

        const colorInput = document.createElement('input')
        colorInput.setAttribute('type', 'color')
        colorInput.setAttribute('name', 'color-input')
        colorInput.setAttribute('value', this.color)
        colorInput.className = 'color-input'

        label.insertAdjacentElement('beforeend', colorInput)
        this.$container.appendChild(label)

        colorInput.addEventListener('input', (event) => {
            this.applyTheme(event.target.value)
        })
        colorInput.addEventListener('change', (event) => {
            this.saveTheme(event.target.value)
        })
    }
}
