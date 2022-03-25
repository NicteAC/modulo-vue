<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand mx-1" href="#">
          <font-awesome-icon class="mx-2" :icon="['fas', 'headset']" />Games
          Opinion
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <router-link class="nav-link" :to="{ name: 'Home' }">
              <font-awesome-icon class="mx-1" :icon="['fas', 'home']" />Home
            </router-link>
            <router-link
              class="nav-link"
              data-cy="opinionesClick"
              :to="{ name: 'Opiniones' }"
            >
              <font-awesome-icon
                class="mx-1"
                :icon="['fas', 'comments']"
              />Opiniones
            </router-link>
            <router-link
              class="nav-link"
              data-cy="administraClick"
              :to="{ name: 'Administracion' }"
            >
              <font-awesome-icon
                class="mx-1"
                :icon="['fas', 'users-cog']"
              />Administración
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
