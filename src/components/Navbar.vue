<template>
  <div class="container-fluid p-0">
    <div class="row nm-row m-0 pb-2">
      <div class="">
        <img class="main-img p-1" v-for="m in comingSoon" :key="m.id" :src="m.image" alt="">
      </div>
    </div>
  </div>
  <div class="container-fluid bg-dark">
    <nav class="navbar p-0 navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center">
          <img
            alt="logo"
            src="../assets/img/imdb-logo-transparent.png"
            height="45"
          />
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="nav-link">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'BoxOffice' }" class="nav-link">
              Box Office
            </router-link>
          </li>
        </ul>
        <span class="navbar-text">
          <button
            class="btn btn-outline-light text-uppercase"
            @click="login"
            v-if="!user.isAuthenticated"
          >
            Login
          </button>

          <div class="dropdown" v-else>
            <div
              class="dropdown-toggle"
              @click="state.dropOpen = !state.dropOpen"
            >
              <img
                :src="user.picture"
                alt="user photo"
                height="40"
                class="rounded"
              />
              <span class="mx-3">{{ user.name }}</span>
            </div>
            <div
              class="dropdown-menu p-0 list-group w-100"
              :class="{ show: state.dropOpen }"
              @click="state.dropOpen = false"
            >
              <router-link :to="{ name: 'Account' }">
                <div class="list-group-item list-group-item-action hoverable">
                  Account
                </div>
              </router-link>
              <div
                class="list-group-item list-group-item-action hoverable"
                @click="logout"
              >
                logout
              </div>
            </div>
          </div>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, onMounted, reactive } from 'vue'
import { moviesService } from '../services/MoviesService'
import { logger } from '../utils/Logger'

export default {
  setup() {
    const state = reactive({
      dropOpen: false
    })
    onMounted(async() => {
      try {
        await moviesService.getComingSoon()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      state,
      comingSoon: computed(() => AppState.comingSoon),
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.nm-row{
  overflow-x: scroll;
  white-space: nowrap;
  max-height: 205px;
  background-color: rgba(0, 0, 0, 0.971);
}
.main-img{
  height: 180px;
display: inline-block;
max-width: 100%;
border-radius: 20px;
border: transparent;
margin: 5px;
}
.main-img:hover{
/* box-shadow: rgba(255, 202, 57, 0.63) 1px 0px 10px; */
animation: shake 2s;
animation-iteration-count: infinite;
}
@keyframes shake {
  0% { transform: translate(1px, -1px) rotate(0deg); }
  10% { transform: translate(-1px, -1px) rotate(-1deg); }
  20% { transform: translate(-1px, 0px) rotate(.75deg); }
  30% { transform: translate(1px, 1px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(.75deg); }
  50% { transform: translate(-1px, 1px) rotate(-.75deg); }
  60% { transform: translate(-1px, 1px) rotate(0deg); }
  70% { transform: translate(1px, 1px) rotate(-.5deg); }
  80% { transform: translate(-1px, -1px) rotate(.5deg); }
  90% { transform: translate(1px, 1px) rotate(.75deg); }
  100% { transform: translate(1px, -1px) rotate(0deg); }
  }

.pa{
padding-left: 1px;
}
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color:rgb(233, 201, 63);
}
</style>
