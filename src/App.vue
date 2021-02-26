<template>
    <div id="q-app">
        <router-view />
    </div>
</template>

<script>
import defaultGradient from "assets/defaultGradient"

export default {
    name: "App",
    created() {
        this.$q.dark.set(this.$q.localStorage.getItem("darkTheme") ?? true)
        this.$store.commit(
            "config/setColors",
            this.$q.localStorage.getItem("gradientColors") ?? [
                ...defaultGradient,
            ]
        )
        this.$store.commit(
            "config/setDirection",
            this.$q.localStorage.getItem("gradientDirection") ?? "Vertical"
        )
    },
}
</script>
