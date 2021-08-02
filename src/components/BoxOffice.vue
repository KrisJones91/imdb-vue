<template>
  <div class="box-office">
    <div class="col">
      <div class="">
        <img class="box-image" :src="boxProp.image" alt="">
        <p>{{ boxProp.title }}</p>
      </div>
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
.box-image{
  /* max-height: 50%; */
  max-width: 200px;
}
</style>
