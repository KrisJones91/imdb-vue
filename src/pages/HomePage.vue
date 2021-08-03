<template>
  <div class="home bg-dark container-fluid">
    <div class="row">
      <div class="col m-3 text-left">
        <h2 class="ml-4 mb-0">
          Box Office
        </h2>
      </div>
      <div class="row image-row">
        <div class="ml-0 mx-0 m-1">
          <img class="main-image ml-2 mr-0" v-for="box in state.boxOffice" :src="box.image" :key="box.id">
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
  max-height: 100%;
  border: transparent;
  // box-shadow: 5px 8px 10px #71717155;
  margin: 0% 3% 0% 3%;
  // background-image: linear-gradient(10deg,black, #ffffff,black);
  border-radius: 30px;
}
.main-image{
  max-height: 350px;
  min-width: 240px;
  display: inline-block;
  border-radius: 15px;
  transition: .3s;
}
.main-image:hover{
  transform: scale(1.015);

}

</style>
