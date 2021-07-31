import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class MoviesService {
  async getSearch(name) {
    try {
      const res = await api.get(name)
      logger.log(res)
      AppState.movies = res.data.results
      logger.log(res.data.results)
    } catch (error) {
      logger.log(error)
    }
  }
}

export const moviesService = new MoviesService()
