<template>
  <div class="container-fluid p-0">
    <div class="sticky">
      <div class="row nm-row">
        <div class="overlayL"></div>
        <div class="overlayR"></div>
        <div class="sidebar">
          <img class="main-img" src="https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="">
          <img class="main-img" src="https://upload.wikimedia.org/wikipedia/en/2/2b/F9_film_poster.jpg" alt="">
          <img class="main-img" src="https://m.media-amazon.com/images/M/MV5BZGRkYzNhMDYtMzU0Ni00ZmZhLTg1MzctZjE4NzkyOTVkY2UyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" alt="">
          <img class="main-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jolt_poster.jpeg/220px-Jolt_poster.jpeg" alt="">
          <img class="main-img" src="https://i.redd.it/ywioufl6af871.jpg" alt="">
          <img class="main-img" src="https://m.media-amazon.com/images/M/MV5BNWQwNGUzYzUtOGM5Yy00ZTAwLTg4OWMtODhlMThlZTJmNDkxXkEyXkFqcGdeQXVyNjE2MzI5ODM@._V1_.jpg" alt="">
          <img class="main-img" src="https://m.media-amazon.com/images/M/MV5BYjQ2MWI2OGMtMTgzNy00N2RlLWE5YjYtMzEzZmE1OGUyMWZiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="">
          <img class="main-img" src="https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg" alt="">
          <img class="main-img" src="https://m.media-amazon.com/images/M/MV5BODMxZjgyNTgtZGQ1ZS00NmQ1LTg0OWEtODVmMDBjZjZkY2ZlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
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
.sidebar{
  padding-left: 70px;
  background-color: rgba(0, 0, 0, 0.971);
  padding-right: 70px;
}
.nm-row{
  overflow-x: scroll;
  white-space: nowrap;
  height: 300px;
}
.overlayL{
  position: absolute;
  width: 7vw;
  height: 60%;
  background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0.368), rgb(0, 0, 0));
  left: 0;
}
.overlayR{
  position: absolute;
  width: 7vw;
  height: 60%;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.368), rgb(0, 0, 0));
  right: 0;
}
/* .sticky{

} */
.main-img{
height: 300px;
display: inline-block;
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
