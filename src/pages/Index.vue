<template>
    <q-page padding class="row justify-center items-center">
        <div class="column q-gutter-sm constrain">
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

        <div
            v-if="showHistory"
            class="column history"
            aria-label="Histórico de operações"
        >
            <div class="row items-center no-wrap">
                <div class="text-subtitle1 col">Histórico</div>
                <q-btn
                    flat
                    dense
                    round
                    icon="las la-trash"
                    aria-label="Limpar histórico"
                    :disable="!history.length"
                    @click="clearHistory"
                >
                    <q-tooltip :delay="1000">Limpar histórico</q-tooltip>
                </q-btn>
            </div>
            <q-list dense separator class="col scroll history-list">
                <q-item v-if="!history.length">
                    <q-item-section class="text-grey">
                        Nenhuma operação
                    </q-item-section>
                </q-item>
                <q-item
                    v-for="(item, i) in history"
                    :key="i"
                    clickable
                    @click="copyData(item.result)"
                >
                    <q-item-section>
                        <q-item-label caption class="ellipsis" :title="item.expression">{{
                            item.expression
                        }}</q-item-label>
                        <q-item-label class="ellipsis" :title="item.result">= {{
                            item.result
                        }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </q-page>
</template>

<script>
import { copyToClipboard } from "quasar"

export default {
    name: "PageIndex",
    data() {
        return {
            preStack: "0",
            stack: [],
            history: [],
        }
    },
    mounted() {
        this.preStack = this.$q.localStorage.getItem("preStack") ?? "0"
        this.stack = this.$q.localStorage.getItem("stack") ?? []
        this.history = this.$q.localStorage.getItem("history") ?? []
        window.addEventListener("keydown", this.handleKeydown)
    },
    beforeDestroy() {
        window.removeEventListener("keydown", this.handleKeydown)
    },
    computed: {
        showHistory() {
            return this.$store.getters["config/getShowHistory"]
        },

        digit1() {
            return this.preStack || (this.stack[0] ?? "")
        },

        digit2() {
            let n = this.preStack !== "" ? -1 : 0
            return this.stack[1 + n] ?? ""
        },

        digit3() {
            let n = this.preStack !== "" ? -1 : 0
            return this.stack[2 + n] ?? ""
        },

        digit4() {
            let n = this.preStack !== "" ? -1 : 0
            return this.stack[3 + n] ?? ""
        },
    },
    watch: {
        preStack() {
            this.$q.localStorage.set("preStack", this.preStack)
        },
        stack() {
            this.$q.localStorage.set("stack", this.stack)
        },
        history() {
            this.$q.localStorage.set("history", this.history)
        },
    },
    methods: {
        handleKeydown(event) {
            // Mantém atalhos do navegador (Ctrl+C, Ctrl+R, etc.)
            if (event.ctrlKey || event.metaKey || event.altKey) return

            // Não interfere na digitação em campos de formulário
            const target = event.target
            if (
                target &&
                (target.isContentEditable ||
                    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
            ) {
                return
            }

            const key = event.key

            if (/^[0-9]$/.test(key)) {
                this.addDigit(key)
            } else if (key === "." || key === ",") {
                this.addDigit(".")
            } else if (["+", "-", "*", "/"].includes(key)) {
                this.operation(key)
            } else if (key === "^") {
                this.operation("**")
            } else if (key === "Enter") {
                this.enter()
            } else if (key === "Backspace") {
                this.remove()
            } else if (key === "Delete" || key === "Escape") {
                this.clearMemory()
            } else if (key === "s" || key === "S") {
                this.swap()
            } else {
                return
            }

            // Evita ações padrão (ex.: Enter acionando o botão em foco,
            // "/" abrindo a busca rápida do Firefox)
            event.preventDefault()
        },

        clearMemory() {
            // O histórico não faz parte da pilha: é preservado
            const history = this.history
            Object.assign(this.$data, this.$options.data())
            this.history = history
        },

        clearHistory() {
            this.history = []
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
                this.stack.unshift(Number(this.preStack))
                this.preStack = ""
            }
        },

        remove() {
            if (this.preStack === "") {
                this.stack.shift()
                this.stack.length || (this.preStack = "0")
            } else {
                this.preStack =
                    this.preStack.split("").slice(0, -1).join("") || "0"
            }
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

            //console.log(secondLast, op, last)

            try {
                const result = eval(`${secondLast} ${op} ${last}`)

                this.stack.unshift(result)
                this.history.unshift({
                    expression: `${secondLast} ${op === "**" ? "^" : op} ${last}`,
                    result,
                })
                this.history.splice(50)
            } catch (e) {
                this.stack.unshift(secondLast)
                this.stack.unshift(last)
            }
        },
    },
}
</script>
