<template>
    <q-card class="my-card">
        <q-card-section>
            <div class="row">
                <div class="col text-h6 text-left text-capitalize">{{ segment.name }}</div>
                <div class="col-1"><q-btn icon="edit" color="primary" flat round :to="{ name: 'EditSegment', params: { id: segment.id }}"></q-btn></div>
                <div class="col-1"><q-btn icon="delete" color="negative" flat round @click="remove"></q-btn></div>
            </div>
            
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section>
            <div v-html="segment.description"></div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section>
            <q-list>
                <q-item v-for="exercise in segment.exercises" :key="exercise">
                    <q-item-section side>
                        <q-item-label>
                            {{ exercise }}
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { ISegment } from '@/interfaces'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'OverviewItem',
    props: {
        segment: {

        }
    },
    components: {
        
    },
    setup() {
        return {
            
        }
    },
    methods: {
        // edit (id) {
        //     this
        // },
        remove () {
            this.$api.deleteSegment((this.segment as ISegment).id)
                .then(() => this.$emit('remove'));
        }
    }
})
</script>

<style lang="scss" scoped>
    .my-card {
        min-width: 400px;
    }
</style>
