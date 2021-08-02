<template>
  <div class="box-office box-image">
    <img class="box-image" :src="boxProp.image" alt="">
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
  height: 150px;
  max-width: 150px;
  display: inline-block;
}

</style>
