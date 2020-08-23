<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="leftDrawerOpen = !leftDrawerOpen"
                />

                <q-toolbar-title>
                    Calculadora Super Simples
                </q-toolbar-title>

                <div>Quasar v{{ quasarVersion }}</div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-item>
                <div style="width: 100vw;">
                    <q-img
                        src="../assets/calculator-logo.svg"
                        style="height: 100%; max-width: 100%"
                    />
                </div>
            </q-item>
            <q-list>
                <q-item-label header>
                    Links e Configurações
                </q-item-label>
                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />

                <q-item>
                    <div style="width: 100vw;">
                        <q-select
                            v-model="themeChoice"
                            :options="options"
                            label="Tema"
                            @input="changeThemeMode"
                        />
                    </div>
                </q-item>
            </q-list>
        </q-drawer>

        <q-footer elevated>
            <q-toolbar>
                <q-item
                    clickable
                    tag="a"
                    target="_blank"
                    href="https://www.linkedin.com/in/ebdonato/"
                    style="align-items: center;"
                >
                    @ebdonato
                </q-item>

                <q-space />

                <q-item
                    type="a"
                    href="https://icon54.com/"
                    target="_blank"
                    clickable
                    style="align-items: center;"
                    class="q-pr-none"
                >
                    Icons made by Pixel Perfect
                </q-item>
                <q-item
                    type="a"
                    href="https://www.flaticon.com/"
                    target="_blank"
                    clickable
                    style="align-items: center;"
                    class="q-pl-xs"
                >
                    from www.flaticon.com
                </q-item>
                <q-item style="align-items: center;">
                    &copy; {{ new Date().getFullYear() }}
                </q-item>
            </q-toolbar>
        </q-footer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const options = require("assets/themeOptions");

const linksData = [
    {
        title: "Github",
        caption: "github.com/ebdonato",
        icon: "code",
        link: "https://github.com/ebdonato"
    },
    {
        title: "Twitter",
        caption: "@ebdonato",
        icon: "rss_feed",
        link: "https://twitter.com/ebdonato"
    },
    {
        title: "Facebook",
        caption: "@ebdonato",
        icon: "public",
        link: "https://fb.me/ebdonato"
    },
    {
        title: "Gravatar",
        caption: "@ebdonato",
        icon: "record_voice_over",
        link: "https://gravatar.com/ebdonato"
    },
    {
        title: "Linkedin",
        caption: "@ebdonato",
        icon: "apartment",
        link: "https://www.linkedin.com/in/ebdonato/"
    },
    {
        title: "Instagram",
        caption: "@ebdonato",
        icon: "insert_photo",
        link: "https://instagram.com/ebdonato"
    }
];

export default {
    name: "MainLayout",
    components: { EssentialLink },
    data() {
        return {
            quasarVersion: this.$q.version,
            leftDrawerOpen: false,
            essentialLinks: linksData,
            options: Object.keys(options),
            themeChoice: localStorage.getItem("themeMode") || "Auto"
        };
    },
    methods: {
        changeThemeMode() {
            this.$q.dark.set(options[this.themeChoice]);
            localStorage.setItem("themeMode", this.themeChoice);
        }
    }
};
</script>
