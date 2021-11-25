<template>
    <div class="q-py-md">
        <div class="row">
            <div class="text-h5 text-left">
                <span>{{ segment.index }}. </span>
                <span class="text-capitalize">{{ segment.name }}</span>
            </div>
        </div>
        
        <div class="text-subtitle1 text-left">{{ segment.description }}</div>
        <q-separator class="q-my-md"></q-separator>
        <div class="row items-start gutter-md">
            <exercise v-for="exercise in segment.exercises" :key="exercise.index" :exercise="exercise"></exercise>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Exercise from '../components/Exercise.vue';

export default defineComponent({
    name: 'Segment',
    props: {
        segment: { }
    },
    setup() {
        return {
            
        }
    },
    components: {
        Exercise
    }
})
</script>
