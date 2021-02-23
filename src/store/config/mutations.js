import { LocalStorage, AddressbarColor, colors } from 'quasar'
const { setBrand } = colors

export function setColors(state, colors) {
    state.colors = [...colors]
    LocalStorage.set("gradientColors", [...colors])
    AddressbarColor.set(colors[0])
    setBrand('primary', colors[0])
    setBrand('secondary', colors[1])
    setBrand('accent', colors[2] ?? colors[1])
}

export function setDirection(state, direction) {
    state.direction = direction
    LocalStorage.set("gradientDirection", direction)
}

