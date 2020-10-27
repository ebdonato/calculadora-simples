<template>
    <q-page class="flex flex-center q-ma-none">
        <div class="q-pa-xl q-ma-none">
            <!-- Linhas do Display -->

            <Display :value="digit4" iconName="looks_4" />
            <Display :value="digit3" iconName="looks_3" />
            <Display :value="digit2" iconName="looks_two" />
            <Display
                :value="digit1"
                :iconName="preStack ? 'edit' : 'looks_one'"
            />

            <!-- Primeira Linha -->

            <div class="row q-py-xs">
                <div class="col-6 q-pr-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="Remover"
                        class="full-width"
                        size="1.5rem"
                        @click="remove"
                    />
                </div>
                <div class="col-6 q-pl-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="Trocar"
                        class="full-width"
                        size="1.5rem"
                        @click="swap"
                    />
                </div>
            </div>

            <!-- Segunda Linha -->

            <div class="row q-py-xs">
                <div class="col-6 q-pr-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="Limpar"
                        class="full-width"
                        size="1.5rem"
                        @click="clearMemory"
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="x^y"
                        class="full-width"
                        size="1.5rem"
                        @click="operation('**')"
                    />
                </div>
                <div class="col-3 q-pl-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="+"
                        class="full-width"
                        size="1.5rem"
                        @click="operation('+')"
                    />
                </div>
            </div>

            <!-- Terceira Linha -->

            <div class="row q-py-xs">
                <div class="col-3 q-pr-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="7"
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('7')"
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="8"
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('8')"
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="9"
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('9')"
                    />
                </div>
                <div class="col-3 q-pl-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="-"
                        class="full-width"
                        size="1.5rem"
                        @click="operation('-')"
                    />
                </div>
            </div>
            <!-- Quarta Linha -->

            <div class="row q-py-xs">
                <div class="col-3 q-pr-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="4"
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('4')"
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="5"
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('5')"
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="6"
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('6')"
                    />
                </div>
                <div class="col-3 q-pl-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="/"
                        class="full-width"
                        size="1.5rem"
                        @click="operation('/')"
                    />
                </div>
            </div>
            <!-- Quinta Linha -->

            <div class="row q-py-xs">
                <div class="col-3 q-pr-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="1"
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('1')"
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="2"
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('2')"
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="3"
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('3')"
                    />
                </div>
                <div class="col-3 q-pl-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="*"
                        class="full-width"
                        size="1.5rem"
                        @click="operation('*')"
                    />
                </div>
            </div>

            <!-- Sexta Linha -->

            <div class="row q-py-xs">
                <div class="col-3 q-pr-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="0"
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('0')"
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="."
                        class="full-width"
                        size="1.5rem"
                        @click="addDigit('.')"
                    />
                </div>

                <div class="col-6 q-pl-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="OK"
                        class="full-width"
                        size="1.5rem"
                        @click="enter"
                    />
                </div>
            </div>

            <!-- Fim -->
        </div>
    </q-page>
</template>

<script>
import Display from "components/Display.vue"

export default {
    name: "PageIndex",
    components: { Display },
    data() {
        return {
            editMode: false,
            preStack: "0",
            stack: [],
        }
    },
    computed: {
        digit1() {
            return this.preStack || this.stack[0] || ""
        },
        digit2() {
            let n = this.preStack !== "" ? -1 : 0
            return this.stack[1 + n] || ""
        },
        digit3() {
            let n = this.preStack !== "" ? -1 : 0
            return this.stack[2 + n] || ""
        },
        digit4() {
            let n = this.preStack !== "" ? -1 : 0
            return this.stack[3 + n] || ""
        },
    },

    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
        },

        addDigit(n) {
            const lastAtStack = this.preStack

            if (n === "." && lastAtStack.includes(".")) {
                return
            }

            if (n === "0" && lastAtStack === "0") {
                return
            }

            this.preStack = lastAtStack === "0" ? n : lastAtStack + n
        },

        enter(event, callback, doubleNumber = true) {
            if (this.preStack === "") {
                if (doubleNumber) {
                    this.stack.unshift(this.stack[0])
                }
            } else {
                this.stack.unshift(this.preStack)

                this.preStack = ""
            }
        },

        remove() {
            if (this.preStack === "") {
                this.stack.shift()
            } else {
                this.preStack = ""
            }

            this.preStack = this.stack.length > 0 ? "" : "0"
        },

        swap() {
            if (this.stack.length < 2) return

            const last = this.stack.shift()
            const secondLast = this.stack.shift()

            this.stack.unshift(last)
            this.stack.unshift(secondLast)
        },

        operation(op) {
            this.enter({}, () => {}, false)
            if (this.stack.length < 2) return

            const last = this.stack.shift()
            const secondLast = this.stack.shift()

            console.log(secondLast, op, last)

            try {
                this.stack.unshift(eval(`${secondLast} ${op} ${last}`))
            } catch (e) {
                this.stack.unshift(secondLast)
                this.stack.unshift(last)
            }
        },
    },
}
</script>

<style lang="sass">
.q-btn__wrapper
    .q-btn__content
        max-width: 280px
</style>
