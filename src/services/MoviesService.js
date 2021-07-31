import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api, topApi } from './AxiosService'

class MoviesService {
  async getSearch(name) {
    try {
      const res = await api.get(name)
      AppState.movies = res.data.results
      logger.log(res.data.items)
    } catch (error) {
      logger.log(error)
    }
  }

  async getComingSoon() {
    try {
      const res = await topApi.get()
      AppState.comingSoon = res.data.items
      logger.log(res.data.items)
    } catch (error) {
      logger.log(error)
    }
  }
}

export const moviesService = new MoviesService()
