<template>
    <q-page-container class="q-pa-md">
        <div class="row justify-between">
            <div class="text-left">
                <span class="text-h3 text-capitalize">
                    {{ training.name }}
                </span>
                <span class="q-pl-sm text-subtitle1">
                    {{ training.date }}
                </span>
            </div>
            <div>
                <q-btn-dropdown label="Download" color="primary">
                    <q-list>
                        <q-item>
                            <q-item-section>Pdf</q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section>Word</q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </div>
        </div>
        <segment v-for="segment in training.segments" :key="segment.index" :segment="segment"></segment>
        <q-btn class="full-width" outline>Add segment</q-btn>
    </q-page-container>
</template>

<script lang="ts">
import Segment from '@/components/Segment.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Segment },
    setup() {
      return {
          training: {
              name: 'test',
              date: '24/11/2021',
              segments: [
                { 
                    index: 0,
                    name: 'test',
                    description: 'Lorem ipsum',
                    exercises: [
                        {
                            index: 0,
                            name: 'Exercise 1',
                            description: 'Everyone do something'
                        }
                    ]
                },
                { 
                    index: 1,
                    name: 'test',
                    description: 'Lorem ipsum',
                    exercises: [
                        {
                            index: 0,
                            name: 'Exercise 1',
                            description: 'Everyone do something'
                        },
                        {
                            index: 1,
                            name: 'Exercise 2',
                            description: 'Everyone do something else'
                        }
                    ]
                }
            ]
          }
      }  
    },
})
</script>
