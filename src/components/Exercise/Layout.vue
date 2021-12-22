<template>
    <q-card class="my-card">
        <q-card-section>
            <slot name="name"><div class="text-h6 text-left text-capitalize">Name</div></slot>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section>
            <div><slot name="description">Description</slot></div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Layout',
    props: {
    },
    setup() {
        return {
            
        }
    },
})
</script>

<style lang="scss" scoped>
    .my-card {
        min-width: 400px;
    }
</style>
