<template>
    <div class="q-py-md">
        <div class="row items-start text-h5 text-left">
            <span>{{ index }}. </span>
            <div class="">
                
                <span v-if="readonly" class="text-capitalize">{{ segment.name }}</span>
                <q-input v-else v-model="editSegment.name" outlined dense></q-input>
            </div>
        </div>
        
        <div v-if="readonly" class="text-subtitle1 text-left">{{ segment.description }}</div>
        <q-editor v-else v-model="editSegment.description" height="50" />
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
        segment: { },
        index: Number,
        readonly: Boolean
    },
    // setup(props) {
    //     const { segment } = toRefs(props);
    //     const editSegment = ref(Object.assign({ }, segment));
    //     return {
    //         editSegment
    //     }
    // },
    data () {
        return {
            editSegment: this.segment
        }
    },
    components: {
        Exercise
    }
})
</script>
