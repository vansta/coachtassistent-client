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
            <q-file outlined v-model="editExercise.attachments" multiple>
                <template v-slot:prepend>
                    <q-icon name="attach_file" />
                </template>
            </q-file>
        </template>
    </layout>
</template>

<script lang="ts">
import { IExercise, } from "@/interfaces"
import { defineComponent } from 'vue'

import Layout from '@/components/Exercise/Layout.vue'
export default defineComponent({
    name: 'Edit',
    props: {
        exercise: {}
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
            editExercise: this.exercise as IExercise
        }
    },
    methods: {
        save () {
            if (!this.editExercise.id) {
                this.$api.postExercise(this.editExercise as IExercise)
            }
            this.$emit('save');
        },
        remove () {
            if (this.editExercise.id) {
                this.$api.deleteExercise(this.editExercise.id)
            }
            this.$emit('remove');
        }
    }
})
</script>
