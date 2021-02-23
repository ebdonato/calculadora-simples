export function getColors(state) {
    return state.colors
}

export function getDirection(state) {
    return state.direction
}

export function getBackgroundStyle(state) {
    const colorsString = (colorsArr) => {
        return [...colorsArr].join(",")
    }

    const gradientString = (direction) => {
        const gradientOptions = {
            Horizontal: "to right",
            Vertical: "to bottom",
            Diagonal: "to right bottom",
        }

        return (
            gradientOptions[direction] ?? "to right bottom"
        )
    }

    return {
        background:
            state.colors.length > 1 && state.direction != "Sem Gradiente"
                ? [
                    state.colors[0],
                    `-webkit-linear-gradient(${gradientString(state.direction)},${colorsString(state.colors)})`,
                    `linear-gradient(${gradientString(state.direction)},${colorsString(state.colors)})`,
                ]
                : state.colors[0],
        height: "100%",
        width: " 100%",
    }
}

