<template>
    <div id="q-app">
        <router-view />
    </div>
</template>
<script>
const options = require("assets/themeOptions");

export default {
    name: "App",
    created() {
        const themeChoice = localStorage.getItem("themeMode") || "Auto";

        this.$q.dark.set(options[themeChoice]);
    }
};
</script>
