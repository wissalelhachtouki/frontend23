<template>
  <div class="wrapper">
    <div class="page-header header-filter">
      <MainAdminSidebar />

      <div class="home_content">
        <svg
          height="100%"
          width="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stop-color="#0c2340ff"></stop>
              <stop offset="95%" stop-color="#2a5788ff"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 205.71428571428572,257.14285714285717 822.8571428571429,228.57142857142858 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            class="transition-all duration-300 ease-in-out delay-150"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
        <header><NavBarAdmin/></header>

        <div class="d-flex  width" style="margin-top: 2%">
          <div class="   mt-5 w-100 ">
            <div class="container-fluid">
              <div class="col-md-12">
                <div class="card card-styling " style=" margin-bottom: 30px">
                  <div class="card-header card-header-primary card-header-icon">
                    <h4 class="card-title">
                      Liste des formateurs
                      <div
                        class="md-layout-item md-size-10 "
                        style="float: right"
                      ></div>
                    </h4>
                  </div>

                  <table class="table">
                    <thead>
                      <tr>
                        <th class="text-center">verifier</th>
                        <th class="text-center">user name</th>
                        <th class="text-center">email</th>
                        <th class="text-center">first last name</th>
                        <th class="text-center">job</th>
                        <th class="text-center">age</th>
                        <th class="text-center">city</th>
                        <th class="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="user in users"
                        :key="user.id"
                        v-if="user.type === 0"
                      >
                        <td class="text-center">
                          <strong
                            ><span
                              v-if="user.email_verified_at"
                              style="color: green"
                              >compte verifié</span
                            ><span v-else style="color: red"
                              >compte non verifié</span
                            ></strong
                          >
                        </td>
                        <td class="text-center">{{ user.name }}</td>
                        <td class="text-center">{{ user.email }}</td>
                        <td class="text-center">
                          {{ user.firstName }} {{ user.lastName }}
                        </td>
                        <td class="text-center">{{ user.job }}</td>
                        <td class="text-center">{{ user.age }}</td>
                        <td class="text-center">{{ user.city }}</td>
                        <td class="text-center">
                          <span
                            ><i
                              @click="
                                showModalDetails = true;
                                forDetails(user);
                              "
                              class="btn btn-link text-info material-icons"
                              style="margin: 0 5px ; border-radius: 15px"
                              >list</i
                            ></span
                          >

                          <span
                            ><i
                              @click="deleteUser(user)"
                              style="margin: 0 5px ; border-radius: 15px"
                              class="btn btn-link text-danger material-icons"
                              >close</i
                            ></span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="showModalDetails" v-cloak>
          <transition name="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content" style=" border-radius: 10px;">
                    <div
                      class="modal-header card-header card-header-primary card-header-icon"
                    >
                      <h4 class="modal-title card-title">
                        Details des formations
                      </h4>
                      <md-button
                        class="md-simple md-just-icon md-round modal-default-button"
                        @click="showModalDetails = false"
                      >
                        <md-icon><strong>clear</strong></md-icon>
                      </md-button>
                    </div>
                    <div class="modal-body" style="border-radius: 20px;
                                                    max-height: 60vh;
                                                    overflow-y: auto;">
                      <div
                        v-if="forms"
                        class="card"
                        style="border-radius: 20px"
                      >
                        <div class="card-body">
                          <table class="table">
                            <thead>
                              <tr>
                                <th class="text-center">Titre</th>
                                <th class="text-center">Nombre Jours</th>
                                <th class="text-center">Tarifs/J</th>
                                <th class="text-center">Nombre Participants</th>
                                <th class="text-center">lieuFormation</th>
                                <th class="text-center">publicConcerne</th>
                                <th class="text-center">Horaire</th>
                                <th class="text-center">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="form in forms" :key="form.id">
                                <td class="text-center">{{ form.title }}</td>
                                <td class="text-center">
                                  {{ form.nombreDeJours }}
                                </td>
                                <td class="text-center">
                                  {{ form.tarifsParJours }} DH
                                </td>
                                <td class="text-center">
                                  {{ form.nombreDeParticipant }}
                                </td>
                                <td class="text-center">
                                  {{ form.lieuFormation }}
                                </td>
                                <td class="text-center">
                                  {{ form.publicConcerne }}
                                </td>
                                <td class="text-center">De {{ form.dateDebut }} à
                                  {{ form.dateFin }}</td>
                                <td class="text-center">
                                  <span><i
                                      @click="deleteFormation(form)"
                                      style="margin: 0 5px ; border-radius: 15px"
                                      class="btn btn-link text-danger material-icons">close</i></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <md-button
                      class="md-simple"
                      @click="showModalDetails = false"
                      ><strong> Close</strong>
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainAdminSidebar from "@/layout/MainAdminSidebar";
import NavBarAdmin from "@/layout/NavBarAdmin";
import { mapGetters, mapState } from "vuex";
import store from "vuex";
import axios from "axios";

export default {
  name: "AdminDashboard",
  components: {
    MainAdminSidebar,
    NavBarAdmin
  },
  data() {
    return {
      showModalDetails: false,
      id: "",
      name: "",
      email: "",
      firstName: "",
      lastName: "",
      job: "",
      age: "",
      adresse: "",
      city: "",
      country: "",
      codePostal: "",
      aboutMe: "",
      picture: "",
      forms: []
    };
  },
  methods: {
    async forDetails(user) {
      const response = await axios.get("admin/formations/" + user.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          verification: "Bearer " + localStorage.getItem("tokenV")
        }
      });
      this.forms = response.data.data;
      this.id = user.id;
    },
    async deleteUser(user) {
      // Delete from database
      const response = await axios.delete("admin/destroy/" + user.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          verification: "Bearer " + localStorage.getItem("tokenV")
        }
      });
      // Delete from the state

      await this.$store.dispatch("deleteUser", user);
      alert("User deleted!");
    },
    async deleteFormation(form) {
      // Delete from database
      const response = await axios.delete("admin/" + this.id +"/formations/" + form.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          verification: "Bearer " + localStorage.getItem("tokenV")
        }
      });
      // Delete from the state

      alert("formation deleted!");
      this.showModalDetails = false;
    }
  },
  computed: {
    ...mapGetters(["users"]),
    ...mapGetters(["formationsAdmin"])
  },
  mounted() {
    this.$store.dispatch("getUsers");
    console.log(this.users);
  }
};
</script>

<style scoped>
.card-header:first-child {
  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;
}
.border-0 {
  border: 0 !important;
}

.card-header {
  padding: 1.25rem 1.5rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
col-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;
}

h3 {
  font-size: 1.0625rem;
}
.card-styling {
  margin-top: 2%;
  background-color: white;
  color: #333533;

  box-shadow: 0 8px 8px 0 rgba(0, 0, 0.3, 0.3);
  transition: 0.3s;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.card-styling:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0.5, 0.5);
}
.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  overflow-y: scroll;
  z-index: 100;
}
.sidebar.active ~ .home_content {
  z-index: 100;
  overflow-y: scroll;
}
.width {
  width: 95%;
  margin: 0 30px;
}
.home_content .text {
  font-size: 25px;
  font-weight: 500;
  color: #1d1b31;
  margin: 12px;
}
.sidebar.active ~ .home_content {
  width: calc(100% - 240px);
  left: 240px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

#btn1 {
  background: rgb(0, 183, 225);
  background: linear-gradient(
    0deg,
    rgba(0, 183, 225, 1) 0%,
    rgba(0, 231, 201, 1) 100%
  );
}

#svg {
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
}
</style>
