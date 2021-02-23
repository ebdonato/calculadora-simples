<template>
    <div id="q-app">
        <router-view />
    </div>
</template>
<script>
export default {
    name: "App",
    created() {
        this.$q.dark.set(this.$q.localStorage.getItem("darkTheme") ?? false)
        this.$store.commit(
            "config/setColors",
            this.$q.localStorage.getItem("gradientColors") ?? [
                "#ffe000",
                "#fff292",
            ]
        )
        this.$store.commit(
            "config/setDirection",
            this.$q.localStorage.getItem("gradientDirection") ?? "Horizontal"
        )
    },
}
</script>
