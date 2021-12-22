<template>
    <q-page>
        <q-splitter>
            <template v-slot:before>
                <q-form>
                    <q-input v-model="segment.name" label="Name" outlined dense></q-input>
                </q-form>
            </template>
            <template v-slot:after>
                
            </template>
        </q-splitter>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    },
    data () {
        return {
            segment: {

            },
            exercises: []
        }
    }
})
</script>
