<template>
    <q-layout view="lHh Lpr lFf" :style="getBackgroundStyle">
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
            <q-btn
                v-if="$router.currentRoute.name != 'Index'"
                flat
                dense
                round
                :color="$q.dark.isActive ? 'white' : 'black'"
                icon="arrow_back"
                aria-label="Início"
                :to="{ name: 'Index' }"
            />
            <q-btn flat dense round aria-label="Eu!" @click="autoClose">
                <q-avatar size="sm">
                    <img src="eu.jpg" />
                </q-avatar>
            </q-btn>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            bordered
            :content-style="{ backgroundColor: getColors[0] }"
        >
            <div class="q-ma-none q-pa-md text-center">
                <img alt="Logo" src="icons\favicon-128x128.png" />
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
                    label="Cor do Texto"
                    @input="changeThemeMode"
                />
                <q-select
                    v-model="gradientDirection"
                    :options="[
                        'Horizontal',
                        'Vertical',
                        'Diagonal',
                        'Sem Gradiente',
                    ]"
                    label="Gradiente"
                    @input="changeDirection"
                />

                <q-btn
                    outline
                    no-caps
                    class="full-width q-ma-sm"
                    label="Cores"
                    align="left"
                    :to="{ name: 'Gradients' }"
                />

                <q-btn
                    flat
                    class="full-width"
                    :label="`v${version}`"
                    align="right"
                    no-caps
                    @click="autoClose"
                ></q-btn>
            </div>
        </q-drawer>

        <q-page-container>
            <transition
                mode="out-in"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
            >
                <router-view />
            </transition>
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue"
import { version } from "../../package.json"
import { mapGetters } from "vuex"

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
            themeChoice: "Escuro",
            gradientDirection: "Vertical",
            showMenu: true,
            version,
        }
    },
    computed: {
        ...mapGetters("config", ["getBackgroundStyle", "getColors"]),
    },
    methods: {
        changeThemeMode() {
            this.$q.dark.set(this.themeChoice == "Claro")
            this.$q.localStorage.set("darkTheme", this.$q.dark.isActive)
        },
        changeDirection() {
            this.$store.commit("config/setDirection", this.gradientDirection)
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
        this.themeChoice = this.$q.dark.isActive ? "Claro" : "Escuro"
        this.gradientDirection = this.$store.getters["config/getDirection"]
    },
}
</script>
