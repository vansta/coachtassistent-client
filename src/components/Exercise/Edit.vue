<template>
    <layout>
        <template #name>
            <div class="row">
                <div class="col"><q-input v-model="editExercise.name" label="Name" outlined dense></q-input></div>
                <div class="col-1"><q-btn icon="save" color="primary" flat round @click="save"></q-btn></div>
                <div class="col-1"><q-btn icon="delete" color="negative" flat round @click="remove"></q-btn></div>
            </div>
            
            
        </template>
        <template #description>
            <q-editor v-model="editExercise.description" height="50" />
        </template>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Layout from '@/components/Exercise/Layout.vue'
export default defineComponent({
    name: 'Edit',
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
    },
    data () {
        return {
            editExercise: this.exercise
        }
    },
    methods: {
        save () {
            this.$emit('save');
        },
        remove () {
            this.$emit('remove');
        }
    }
})
</script>
