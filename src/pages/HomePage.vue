<template>
  <div class="home container-fluid">
    <div class="row">
      <BoxOffice v-for="box in state.boxOffice" :key="box.id" :box-prop="box" />
    </div>
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
      activeMovie: computed(() => AppState.activeMovie),
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
