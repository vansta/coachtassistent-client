<template>
    <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mode" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
            
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inventory_2" />
              </q-item-section>

              <q-item-section>
                Archive
              </q-item-section>
            </q-item>

            

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="add_circle" />
              </q-item-section>

              <q-item-section>
                Create
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="{ name: 'Segments' }">
              <q-item-section avatar>
                <q-icon name="view_agenda" />
              </q-item-section>

              <q-item-section>
                Segments
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="{ name: 'Exercises' }">
              <q-item-section avatar>
                <q-icon name="view_module" />
              </q-item-section>

              <q-item-section>
                Exercises
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {

        }
    },
})
</script>
