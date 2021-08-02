<template>
  <div class="box-office">
    <div class="col">
      <p>{{ boxProp.title }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'BoxOffice',
  props: {
    boxProp: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      boxOfficeMovies: computed(() => AppState.boxOffice)
    })
    onMounted(async() => {

    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
