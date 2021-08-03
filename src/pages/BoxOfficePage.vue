<template>
  <div class="boxOffice">
    <h5>Box Office Page</h5>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import { moviesService } from '../services/MoviesService'

export default {
  name: 'BoxOffice',
  setup() {
    const state = reactive({
      boxOffice: computed(() => AppState.boxOffice)
    })
    onMounted(async() => {
      try {
        await moviesService.getBoxOffice()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
