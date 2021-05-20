<template>
  <div class="wrapper">


        <div class="md-layout">
          <div class="md-layout-item">
    <md-toolbar class="md-info">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <h3 v-if="$route.name" class="md-title">{{ $route.name }}</h3>
        </div>
        <div class="md-toolbar-section-end">

            <md-button
              class="md-just-icon md-simple md-toolbar-toggle"
              :class="{ toggled: toggledClass }"
              @click="toggleNavbarMobile()"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </md-button>

            <div class="md-collapse">
              <div class="md-collapse-wrapper">
                <mobile-menu nav-mobile-section-start="false">
                  <!-- Here you can add your items from the section-start of your toolbar -->
                </mobile-menu>
                <md-list>

                  <md-list-item>
                    <a href="#/dashboard">
                      <i class="material-icons">dashboard</i>

                    </a>
                  </md-list-item>

                  <md-list-item>
                    <a href="#/todo-list">
                      <i class="material-icons">notifications</i>

                    </a>
                  </md-list-item>

                  <md-list-item>
                    <a href="#/user">
                      <i class="material-icons">account_circle</i>

                    </a>
                  </md-list-item>


                </md-list>
              </div>
            </div>




        </div>
      </div>
    </md-toolbar>
    <!-- Container wrapper -->
          </div>
        </div>
      </div>


  <!-- Navbar -->
</template>

<script>
export default {
  name: "MainNavbar2"
};
</script>

<style scoped></style>
