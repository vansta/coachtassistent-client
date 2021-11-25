<template>
    <q-card class="my-card">
        <q-card-section>
            <div class="text-h6 text-left text-capitalize">{{ exercise.name }}</div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section>
            <div>{{ exercise.description }}</div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Exercise',
    props: {
        exercise: {

        }
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
