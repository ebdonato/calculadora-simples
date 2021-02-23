<template>
    <q-page padding class="constrain flex flex-center">
        <div class="column col q-gutter-sm">
            <div class="column q-gutter-sm">
                <!-- Linhas do Display -->
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="looks_4"
                    :label="digit4"
                    align="between"
                    @click="copyData(digit4)"
                    aria-label="Pilha Linha 4"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Pilha Linha 4</q-tooltip
                    >
                </q-btn>
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="looks_3"
                    :label="digit3"
                    align="between"
                    @click="copyData(digit3)"
                    aria-label="Pilha Linha 3"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Pilha Linha 3</q-tooltip
                    >
                </q-btn>
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="looks_two"
                    :label="digit2"
                    align="between"
                    @click="copyData(digit2)"
                    aria-label="Pilha Linha 2"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Pilha Linha 2</q-tooltip
                    >
                </q-btn>
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    :icon="preStack ? 'edit' : 'looks_one'"
                    :label="digit1"
                    align="between"
                    @click="copyData(digit1)"
                    aria-label="Pilha Linha 1"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Pilha Linha 1</q-tooltip
                    >
                </q-btn>
            </div>
            <!-- Primeira Linha -->

            <div class="row q-gutter-sm">
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="las la-trash"
                    @click="clearMemory"
                    aria-label="Limpar tudo"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Limpar toda a pilha</q-tooltip
                    >
                </q-btn>
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="swap_vert"
                    @click="swap"
                    aria-label="Inverter"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Inverter a posição dos dois últimos números da
                        pilha</q-tooltip
                    >
                </q-btn>
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="x^y"
                    no-caps
                    @click="operation('**')"
                    aria-label="Potência"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Potência</q-tooltip
                    >
                </q-btn>
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="las la-divide"
                    @click="operation('/')"
                    aria-label="Divisão"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Divisão</q-tooltip
                    >
                </q-btn>
            </div>

            <!-- Segunda Linha -->

            <div class="row q-gutter-sm">
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="7"
                    @click="addDigit('7')"
                    aria-label="Digíto 7"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="8"
                    @click="addDigit('8')"
                    aria-label="Digíto 8"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="9"
                    @click="addDigit('9')"
                    aria-label="Digíto 9"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="las la-times"
                    @click="operation('*')"
                    aria-label="Multiplicação"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Multiplicação</q-tooltip
                    >
                </q-btn>
            </div>

            <!-- Terceira Linha -->

            <div class="row q-gutter-sm">
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="4"
                    @click="addDigit('4')"
                    aria-label="Digíto 4"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="5"
                    @click="addDigit('5')"
                    aria-label="Digíto 5"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="6"
                    @click="addDigit('6')"
                    aria-label="Digíto 6"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="las la-minus"
                    @click="operation('-')"
                    aria-label="Subtração"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Subtração</q-tooltip
                    >
                </q-btn>
            </div>

            <!-- Quarta Linha -->

            <div class="row q-gutter-sm">
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="1"
                    @click="addDigit('1')"
                    aria-label="Digíto 1"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="2"
                    @click="addDigit('2')"
                    aria-label="Digíto 2"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="3"
                    @click="addDigit('3')"
                    aria-label="Digíto 3"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="las la-plus"
                    @click="operation('+')"
                    aria-label="Adição"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Adição</q-tooltip
                    >
                </q-btn>
            </div>

            <!-- Quinta Linha -->

            <div class="row q-gutter-sm">
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="0"
                    @click="addDigit('0')"
                    aria-label="Digíto 0"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    label="."
                    @click="addDigit('.')"
                    aria-label="Decimal"
                />
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="las la-backspace"
                    @click="remove"
                    aria-label="Remover"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Remover último número da pilha</q-tooltip
                    >
                </q-btn>
                <q-btn
                    outline
                    rounded
                    size="lg"
                    class="col"
                    icon="keyboard_return"
                    @click="enter"
                    aria-label="Confirmar entrada"
                >
                    <q-tooltip :delay="1000" :offset="[0, 10]"
                        >Confirmar entrada</q-tooltip
                    >
                </q-btn>
            </div>

            <!-- Fim -->
        </div>
    </q-page>
</template>

<script>
import { copyToClipboard } from "quasar"

export default {
    name: "PageIndex",
    data() {
        return {
            editMode: false,
            preStack: "0",
            stack: [],
        }
    },
    computed: {
        digit1() {
            return this.preStack || (this.stack[0] ?? "")
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

        copyData(value) {
            copyToClipboard(value)
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

        enter() {
            if (this.preStack === "") {
                this.stack.unshift(this.stack[0])
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
            if (this.preStack != "") {
                this.enter()
            }

            if (this.stack.length < 2) return

            const last = this.stack.shift()
            const secondLast = this.stack.shift()

            this.stack.unshift(last)
            this.stack.unshift(secondLast)
        },

        operation(op) {
            if (this.preStack != "") {
                this.enter()
            }

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
