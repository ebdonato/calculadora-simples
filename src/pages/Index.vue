<template>
    <q-page class="flex flex-center q-ma-none">
        <div class="q-pa-xl q-ma-none">
            <!-- Linhas do Display -->

            <Display :value="'teste'" iconName="looks_4" />
            <Display :value="'teste'" iconName="looks_3" />
            <Display :value="'teste'" iconName="looks_two" />
            <Display :value="'teste'" iconName="looks_one" />

            <!-- Primeira Linha -->

            <div class="row q-py-xs">
                <div class="col-6 q-pr-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="Remover"
                        class="full-width"
                        size="1.5rem"
                    />
                </div>
                <div class="col-6 q-pl-xs ">
                    <q-btn
                        outline
                        color="primary"
                        label="Trocar"
                        class="full-width"
                        size="1.5rem"
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
                    />
                </div>
                <div class="col-3 q-px-xs   ">
                    <q-btn
                        outline
                        color="primary"
                        label="x^y"
                        class="full-width"
                        size="1.5rem"
                    />
                </div>
                <div class="col-3 q-pl-xs   ">
                    <q-btn
                        outline
                        color="primary"
                        label="+"
                        class="full-width"
                        size="1.5rem"
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
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="8"
                        class="full-width"
                        size="1.5rem"
                    />
                </div>
                <div class="col-3 q-px-xs   ">
                    <q-btn
                        outline
                        color="primary"
                        label="9"
                        class="full-width"
                        size="1.5rem"
                    />
                </div>
                <div class="col-3 q-pl-xs   ">
                    <q-btn
                        outline
                        color="primary"
                        label="-"
                        class="full-width"
                        size="1.5rem"
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
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="5"
                        class="full-width"
                        size="1.5rem"
                    />
                </div>
                <div class="col-3 q-px-xs   ">
                    <q-btn
                        outline
                        color="primary"
                        label="6"
                        class="full-width"
                        size="1.5rem"
                    />
                </div>
                <div class="col-3 q-pl-xs   ">
                    <q-btn
                        outline
                        color="primary"
                        label="/"
                        class="full-width"
                        size="1.5rem"
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
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="2"
                        class="full-width"
                        size="1.5rem"
                    />
                </div>
                <div class="col-3 q-px-xs   ">
                    <q-btn
                        outline
                        color="primary"
                        label="3"
                        class="full-width"
                        size="1.5rem"
                    />
                </div>
                <div class="col-3 q-pl-xs   ">
                    <q-btn
                        outline
                        color="primary"
                        label="*"
                        class="full-width"
                        size="1.5rem"
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
                    />
                </div>
                <div class="col-3 q-px-xs">
                    <q-btn
                        outline
                        color="primary"
                        label="."
                        class="full-width"
                        size="1.5rem"
                    />
                </div>

                <div class="col-6 q-pl-xs   ">
                    <q-btn
                        outline
                        color="primary"
                        label="OK"
                        class="full-width"
                        size="1.5rem"
                    />
                </div>
            </div>

            <!-- Fim -->
        </div>
    </q-page>
</template>

<script>
import Display from "components/Display.vue";

export default {
    name: "PageIndex",
    components: { Display }
};
</script>
