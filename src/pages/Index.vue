<template>
    <q-page>
        <Display :value="'teste'" iconName="looks_4" />
        <Display :value="'teste'" iconName="looks_3" />
        <Display :value="'teste'" iconName="looks_two" />
        <Display :value="'teste'" iconName="looks_one" />
    </q-page>
</template>

<script>
import Display from "components/Display.vue";

export default {
    name: "PageIndex",
    components: { Display }
};
</script>
