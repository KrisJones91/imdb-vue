<template>
  <div class="home bg-dark container-fluid">
    <div class="row">
      <div class="col m-3 text-left">
        <h2 class="m-0">
          Box Office
        </h2>
      </div>
      <div class="row image-row">
        <div>
          <img class="main-image" v-for="box in state.boxOffice" :src="box.image" :key="box.id">
        </div>
        <!-- <BoxOffice v-for="box in state.boxOffice" :key="box.id" :box-prop="box" /> -->
      </div>
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
.image-row{
  overflow-x: scroll;
  white-space: nowrap;
  max-height: 500px;
}
.main-image{
  height: 300px;
  max-width: 200px;
  display: inline-block;
}
</style>
