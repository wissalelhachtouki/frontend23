<template>
  <div class="todos">
    <div class="page-header header-filter">
    <MainSidebar />

    <div class="home_content">
      <header><MainNavbar2/></header>
      <div class=" d-flex  width" >
        <div class="mt-5 w-100" >
          <div class="container-fluid">
            <div class="col-md-12">
              <div class="card card-styling " style="border-radius: 20px ; margin-bottom: 30px">


            <div class="card-header card-header-primary card-header-icon">

              <h4 class="card-title">Tasks
                <div
                  class="md-layout-item md-size-10 "
                  style="float: right "
                >
                  <md-button
                    id="btn1"
                    class=" md-warning md-sm  md-block"
                    @click="showModaltodo = true"
                    v-model="name"
                  >
                    <md-icon>task</md-icon> Add Task
                  </md-button>


            </div>
              </h4>
            </div>





            <div class="wrapper">
              <div style="position: static;" class="ps ps--active-y">
                <div class="ps-content">
                  <ul class=" list-group list-group-flush">
                    <li
                      v-for="(todo, index) in todos"
                      :key="todo.id"
                      class="list-group-item"
                    >
                      <div class="widget-subheading">
                        <i> N° {{ index + 1 }}</i>
                      </div>
                      <div v-if="!todo.completed" class="todo-indicator bg-info"></div>
                      <div v-else class="todo-indicator bg-success"></div>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-2"></div>
                          <div class="widget-content-left">
                            <div v-if="!todo.completed" class="widget-heading">
                              {{ todo.name }}
                            </div>
                            <div v-else class="widget-heading" style="text-decoration: line-through">
                              {{ todo.name }}
                            </div>
                            <div class="widget-subheading">
                              By : {{ user.name }}
                            </div>
                          </div>
                          <div class="widget-content-right">
                            <button
                                v-if="!todo.completed"
                              @click.prevent="updateTodo(todo.id)"
                              class="border-0 btn-transition btn btn-outline-success"
                            >
                              <i class="fa fa-check"></i>
                            </button>
                            <button
                                v-if="todo.completed"
                                disabled
                                class="border-0 btn-transition btn btn-outline-success"
                            >
                              <i class="fa fa-check"></i>Done
                            </button>
                            <button
                              @click="deleteTodo(todo)"
                              class="border-0 btn-transition btn btn-outline-danger"
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
          </div>
        </div>
      </div>
      <footer> <h2>hhh</h2></footer>

      <div v-if="showModaltodo" v-cloak>
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog  modal-md" role="document">
                <div class="modal-content" style=" border-radius: 10px">
                  <div class="modal-header card-header card-header-primary card-header-icon"  >
                    <h4 class="modal-title card-title " >
                      <strong style="text-align: left">Entrer votre formation</strong>
                    </h4>

                    <md-button
                      type="button"
                      class="md-simple md-just-icon md-round modal-default-button"
                      data-dismiss="modal"
                      aria-label="Close"
                      @click="showModaltodo = false"
                    ><md-icon>clear</md-icon>
                    </md-button>
                  </div>
                  <div class="modal-body">
                    <div class="card" style=" border-radius: 10px">
                      <div class="card-body">
                        <div class="form-group">
                          <md-field class="md-form-group" slot="inputs">
                            <md-icon >  </md-icon>
                            <md-input v-model="title" type="text"></md-input>
                            <label>Task...</label>

                          </md-field>
                        </div>



                      </div>
                    </div>
                  </div>


                  <md-button
                    class="md-simple md-rose"
                    @click.prevent="handleValid"
                  ><strong>
                    Ajouter</strong>
                  </md-button>
                  <md-button
                    class="md-simple"
                    @click="showModaltodo = false"
                  ><strong>
                    Supprimer</strong>
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
import MainSidebar from "@/layout/MainSidebar";
import MainNavbar2 from "@/layout/MainNavbar2";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Todos",
  components: {
    MainSidebar,
    MainNavbar2
  },
  data() {
    return {
      name: "",
      completed: false
    };
  },

  computed: {

    ...mapGetters(["todos"]),
    ...mapGetters(["user"])
  },
  mounted() {
    this.$store.dispatch("setTodos");
  },
  methods: {
    async handleValid() {
      try {
        const data = {
          name: this.name,
          completed: false,
          completed_at: null
        };

        await this.$store.dispatch("addTodo", data);

        this.name = "";
      } catch (e) {
        this.error = "Error occurred !";
      }
    },
    async deleteTodo(todo) {
      // Delete from database
      const response = await axios.delete("todos/" + todo.id);
      // Delete from the state

      await this.$store.dispatch("deleteTodo", todo);
      console.log(response);
      //alert("Todo deleted!");
    },
    async updateTodo(id) {
      try {
        const data = {
          id: id,
          completed: true
        };

        console.log("this data id");
        console.log(data.id);
        console.log("this data updated");
        console.log(data);
        await this.$store.dispatch("updateTodo", data);


      } catch (e) {
        console.log(e);
      }
    }
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

#btn1{
  background: rgb(0,183,225);
  background: linear-gradient(0deg, rgba(0,183,225,1) 0%, rgba(0,231,201,1) 100%);
}
</style>
