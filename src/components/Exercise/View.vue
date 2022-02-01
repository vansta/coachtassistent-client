<template>
    <layout>
        <template #name>
            <div class="text-h6 text-left text-capitalize">{{ exercise.name }}</div>
        </template>
        <template #description>
                <div v-html="exercise.description"></div>
        </template>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Layout from '@/components/Exercise/Layout.vue'
export default defineComponent({
    name: 'View',
    props: {
        exercise: {

        }
    },
    components: {
        Layout
    },
    setup() {
        return {
            
        }
    }
})
</script>
