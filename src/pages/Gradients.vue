<template>
    <q-page padding class="flex column flex-center q-gutter-sm">
        <q-btn
            flat
            label="uiGradients"
            size="xl"
            no-caps
            type="a"
            target="blank"
            href="http://uiGradients.com"
        />
        <div class="row q-gutter-xs justify-center">
            <q-btn
                v-for="(gradient, id) in gradients"
                :key="id"
                no-caps
                class="col-12 col-md-5"
                :label="`${id + 1} - ${gradient.name}`"
                style="min-width: 100px"
                :style="{
                    background: styleBG(gradient.colors),
                    color: styleFG(gradient.colors),
                }"
                @click="setColors(gradient.colors)"
            />
        </div>
        <q-btn outline label="Voltar" class="std-btn" :to="{ name: 'Index' }" />
    </q-page>
</template>

<script>
import defaultGradient from "assets/defaultGradient"
import axios from "axios"

export default {
    name: "PageGradients",
    data() {
        return {
            gradients: [],
        }
    },
    methods: {
        styleFG(colors) {
            return this.lightOrDark(colors[0]) ? "#000" : "#FFF"
        },
        styleBG(colors) {
            return [
                colors[0],
                `-webkit-linear-gradient(to right,${[...colors].join(",")})`,
                `linear-gradient(to right,${[...colors].join(",")})`,
            ]
        },
        setColors(colors) {
            this.$store.commit("config/setColors", [...colors])

            const lightColor = this.lightOrDark(colors[0])

            if (this.$q.dark.isActive == lightColor) {
                this.$q
                    .dialog({
                        title: "Cor do Texto",
                        message: `Mudar cor do texto para ${
                            lightColor ? "Escuro" : "Claro"
                        }?`,
                        cancel: true,
                        persistent: true,
                    })
                    .onOk(() => {
                        this.$q.dark.set(!lightColor)
                        this.$q.localStorage.set(
                            "darkTheme",
                            this.$q.dark.isActive
                        )
                    })
                    .onDismiss(() => {
                        this.$router.push({ name: "Index" })
                    })
            } else {
                this.$router.push({ name: "Index" })
            }
        },
        lightOrDark(color) {
            let r, g, b

            // Check the format of the color, HEX or RGB?
            if (color.match(/^rgb/)) {
                // If HEX --> store the red, green, blue values in separate variables
                color = color.match(
                    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
                )

                r = color[1]
                g = color[2]
                b = color[3]
            } else {
                // If RGB --> Convert it to HEX: http://gist.github.com/983661
                color = +(
                    "0x" +
                    color.slice(1).replace(color.length < 5 && /./g, "$&$&")
                )

                r = color >> 16
                g = (color >> 8) & 255
                b = color & 255
            }

            // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
            const hsp = Math.sqrt(
                0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)
            )

            // Using the HSP value, determine whether the color is light or dark
            // if (hsp > 127.5) {
            //     return "light"
            // } else {
            //     return "dark"
            // }

            return hsp > 127.5
        },
    },
    mounted() {
        const gradient = {
            name: "Original",
            colors: [...defaultGradient],
        }
        const ufv2001 = {
            name: "UFV 2001",
            colors: ["#FFEE00", "FFFF00"],
        }

        this.gradients = this.$q.localStorage.getItem("uiGradients") ?? [
            gradient,
            ufv2001,
        ]

        axios
            .get("https://uigradients.com/gradients.json")
            .then((response) => {
                this.gradients = [...response.data]
                this.gradients.unshift(ufv2001)
                this.gradients.unshift(gradient)

                this.$q.localStorage.set("uiGradients", [...this.gradients])
            })
            .catch((e) => {
                console.error(e)
                this.$q.notify({
                    message: "Algo deu errado",
                    color: "negative",
                })
            })
    },
}
</script>
