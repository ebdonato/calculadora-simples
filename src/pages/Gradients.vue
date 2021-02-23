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
                :label="gradient.name"
                :style="{
                    background: style(gradient.colors),
                }"
                @click="setColors(gradient.colors)"
            />
        </div>
        <q-btn outline label="Voltar" class="std-btn" :to="{ name: 'Index' }" />
    </q-page>
</template>

<script>
import axios from "axios"

export default {
    name: "PageGradients",
    data() {
        return {
            gradients: [],
        }
    },
    methods: {
        style(colors) {
            return [
                colors[0],
                `-webkit-linear-gradient(to right,${[...colors].join(",")})`,
                `linear-gradient(to right,${[...colors].join(",")})`,
            ]
        },
        setColors(colors) {
            this.$store.commit("config/setColors", [...colors])
            this.$router.push({ name: "Index" })
        },
    },
    mounted() {
        this.gradients = this.$q.localStorage.getItem("uiGradients") ?? [
            "#ffe000",
            "#fff292",
        ]

        axios
            .get("https://uigradients.com/gradients.json")
            .then((response) => {
                this.gradients = [...response.data]
                this.$q.localStorage.set("uiGradients", [...response.data])
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
