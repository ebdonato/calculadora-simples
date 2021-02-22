<template>
    <q-layout
        view="lHh Lpr lFf"
        :class="{
            'drawer-bg-light': !this.$q.dark.isActive,
            'drawer-bg-dark': this.$q.dark.isActive,
        }"
    >
        <q-header class="row bg-transparent">
            <q-btn
                flat
                dense
                round
                :color="$q.dark.isActive ? 'white' : 'black'"
                icon="menu"
                aria-label="Menu"
                @click="leftDrawerOpen = !leftDrawerOpen"
            />
            <q-space></q-space>
            <q-btn flat dense round aria-label="Eu!" @click="autoClose">
                <q-avatar size="sm">
                    <img src="eu.jpg" />
                </q-avatar>
            </q-btn>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" bordered>
            <div class="q-ma-none q-pa-md text-center">
                <img alt="PDF da Sarah" src="icons\favicon-128x128.png" />
            </div>

            <q-btn
                flat
                size="sm"
                :icon="showMenu ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="toggleShowMenu"
                class="full-width"
            />

            <q-slide-transition>
                <q-list v-show="showMenu">
                    <EssentialLink
                        v-for="link in essentialLinks"
                        :key="link.title"
                        v-bind="link"
                    />
                </q-list>
            </q-slide-transition>

            <div class="absolute-bottom q-ma-md">
                <q-select
                    v-model="themeChoice"
                    :options="['Claro', 'Escuro']"
                    label="Tema"
                    @input="changeThemeMode"
                />
            </div>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue"

const linksData = [
    {
        title: "Github",
        caption: "github.com/ebdonato",
        icon: "code",
        link: "https://github.com/ebdonato",
    },
    {
        title: "Twitter",
        caption: "@ebdonato",
        icon: "rss_feed",
        link: "https://twitter.com/ebdonato",
    },
    {
        title: "Facebook",
        caption: "@ebdonato",
        icon: "public",
        link: "https://fb.me/ebdonato",
    },
    {
        title: "Gravatar",
        caption: "@ebdonato",
        icon: "record_voice_over",
        link: "https://gravatar.com/ebdonato",
    },
    {
        title: "Linkedin",
        caption: "@ebdonato",
        icon: "apartment",
        link: "https://www.linkedin.com/in/ebdonato/",
    },
    {
        title: "Instagram",
        caption: "@ebdonato",
        icon: "insert_photo",
        link: "https://instagram.com/ebdonato",
    },
]

export default {
    name: "MainLayout",
    components: { EssentialLink },
    data() {
        return {
            leftDrawerOpen: false,
            essentialLinks: linksData,
            themeChoice: "Claro",
            showMenu: true,
        }
    },
    methods: {
        changeThemeMode() {
            this.$q.dark.set(this.themeChoice == "Escuro")
            this.$q.localStorage.set("darkTheme", this.$q.dark.isActive)
        },
        toggleShowMenu() {
            this.showMenu = !this.showMenu
            this.$q.localStorage.set("showMenu", this.showMenu)
        },
        autoClose() {
            let seconds = 5

            const dialog = this.$q
                .dialog({
                    title: "Desenvolvido por",
                    message: "Eduardo Batista Donato",
                })
                .onDismiss(() => {
                    clearTimeout(timer)
                    // console.log('I am triggered on both OK and Cancel')
                })

            const timer = setInterval(() => {
                seconds--

                if (seconds <= 0) {
                    clearInterval(timer)
                    dialog.hide()
                }
            }, 1000)
        },
    },
    mounted() {
        this.themeChoice = this.$q.dark.isActive ? "Escuro" : "Claro"
    },
}
</script>
