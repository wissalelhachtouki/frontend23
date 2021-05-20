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
                            <div class="widget-subheading" hidden>
                              <i> N° {{ index + 1 }}</i>
                            </div>
                            <div v-if="!todo.completed" class="todo-indicator bg-warning"></div>
                            <div v-else class="todo-indicator bg-danger"></div>
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
                                  <div v-if="todo.completed" class="widget-subheading">
                                    At : {{ todo.completed_at }}
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
                    <div class="modal-body">
                      <h4 class="modal-title card-title" style="text-align: center"><strong>Create Task</strong></h4>
                          <div class="form-group">
                            <md-field class="md-form-group" slot="inputs">
                              <md-icon >  </md-icon>
                              <md-input v-model="name" type="text"></md-input>
                              <label>Task...</label>

                            </md-field>
                          </div>




                    </div>

                    <div class="modal-footer">
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
                        Annuler</strong>
                      </md-button>
                    </div>


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
      completed: false,
      showModaltodo: false
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

        this.showModaltodo = false;
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


.widget-subheading {
  color: #858a8e;
  font-size: 10px;
}

.card-header.card-header-tab .card-header-title {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.card-header .header-icon {
  font-size: 1.65rem;
  margin-right: 0.625rem;
}

.card-header.card-header-tab .card-header-title {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.btn-actions-pane-right {
  margin-left: auto;
  white-space: nowrap;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.scroll-area-sm {
  height: 288px;
  overflow-x: hidden;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}

.todo-indicator {
  position: absolute;
  width: 4px;
  height: 60%;
  border-radius: 0.3rem;
  left: 0.625rem;
  top: 20%;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.bg-warning {
  background-color: #f7b924 !important;
}

.widget-content {
  padding: 1rem;
  flex-direction: row;
  align-items: center;
}

.widget-content .widget-content-wrapper {
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
}

.widget-content .widget-content-right.widget-content-actions {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s;
}

.widget-content .widget-content-right {
  margin-left: auto;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn {
  transition: color 0.15s, background-color 0.15s, border-color 0.15s,
  box-shadow 0.15s;
}

</style>
