<template>
    <q-item>
        <q-item-section avatar>
            <q-icon color="primary" :name="iconName" />
        </q-item-section>

        <q-item-section>
            <q-btn
                flat
                color="primary"
                :label="value"
                @click="copyData"
                class="full-width"
                align="right"
            />
        </q-item-section>
    </q-item>
</template>

<script>
import { copyToClipboard } from "quasar";

export default {
    name: "display",
    props: ["value", "iconName"],
    methods: {
        copyData() {
            copyToClipboard(this.value);
        }
    }
};
</script>
