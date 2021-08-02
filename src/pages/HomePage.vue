<template>
  <div class="home container-fluid">
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed, onMounted } from '@vue/runtime-core'
import { moviesService } from '../services/MoviesService'
import { logger } from '../utils/Logger'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      movies: computed(() => AppState.movies),
      activeMovie: computed(() => AppState.activeMovie)
    })
    onMounted(async() => {
      try {
        await moviesService.getSearch()
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

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
