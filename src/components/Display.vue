<template>
    <q-item>
        <q-item-section avatar>
            <q-icon color="primary" :name="iconName" />
        </q-item-section>

        <q-item-section align="right">{{ value }}</q-item-section>
    </q-item>
</template>

<script>
export default {
    name: "display",
    props: ["value", "iconName"]
};
</script>
