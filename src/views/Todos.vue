<template>
  <div class="todos">
    <div
      class="section page-header header-filter"
      :style="headerStyle"
    >

    <MainSidebar />
    <div class="home_content">
      <div class="row d-flex  justify-content-center container" >
        <div class="col-md-17"  style="border-radius: 10px">
          <div class="card-hover-shadow-5x mb-5 card ">
            <h2><strong style="text-align: left">To do list</strong></h2>

            <div class="card-header-tab card-header">
              <div
                class="card-header-title font-size-lg text-capitalize font-weight-normal "
              >
                <i class="fa fa-plus-square"></i
                ><strong>&nbsp;Add Tasks</strong>
                <input

                  v-model="name"
                  type="text"
                  class="form-control "
                  placeholder="New tasks go here..."
                />
                <button class="btn btn-info" @click.prevent="handleValid">
                  Add
                </button>

              </div>
            </div>
            <div class="row">

            </div>

            <div class="card-header-tab card-header">
              <div
                class="card-header-title font-size-lg text-capitalize font-weight-normal"
              >
                <i class="fa fa-tasks"></i><strong>&nbsp;Task Lists</strong>
              </div>
            </div>

            <div class="wrapper">
              <div style="position: static;" class="ps ps--active-y">
                <div class="ps-content">
                  <ul class=" list-group list-group-flush">
                    <li
                      v-for="(todo, index) in todos"
                      :key="todo.id"
                      class="list-group-item"
                      v-if="!todo.completed"
                    >
                      <div class="widget-subheading">
                        <i> N° {{ index + 1 }}</i>
                      </div>
                      <div class="todo-indicator bg-info"></div>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-2"></div>
                          <div class="widget-content-left">
                            <div class="widget-heading">
                              {{ todo.name }}
                            </div>
                            <div class="widget-subheading">
                              By : {{ user.name }}
                            </div>
                          </div>
                          <div class="widget-content-right">
                            <button
                              @click.prevent="updateTodo(todo.id)"
                              class="border-0 btn-transition btn btn-outline-success"
                            >
                              <i class="fa fa-check"></i>
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

            <div class="card-header-tab card-header">
              <div
                class="card-header-title font-size-lg text-capitalize font-weight-normal"
              >
                <i class="fa fa-check-square"></i
                ><strong>&nbsp;Completed</strong>
              </div>
            </div>

            <div class="wrapper">
              <div style="position: static;" class="ps ps--active-y">
                <div class="ps-content">
                  <ul class=" list-group list-group-flush">
                    <li
                      v-for="(todo, index) in todos"
                      :key="todo.id"
                      class="list-group-item"
                      v-if="todo.completed"
                    >
                      <div class="widget-subheading">
                        <i> N° {{ index + 1 }}</i>
                      </div>
                      <div class="todo-indicator bg-success"></div>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-2"></div>
                          <div class="widget-content-left">
                            <div class="widget-heading" style="text-decoration: line-through">
                              {{ todo.name }}
                            </div>
                            <div class="widget-subheading">
                              By : {{ user.name }}
                            </div>
                          </div>
                          <div class="widget-content-right">
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
  </div>
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Todos",
  components: {
    MainSidebar
  },
  data() {
    return {
      name: "",
      completed: false
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/vue-mk-headerr.jpg")
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
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
      alert("Todo deleted!");
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
.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  overflow-y: scroll;
}
h2 {
  text-align: center;
  padding-top: 10px;
  margin-bottom: 0px;
}
.controls {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
input {
  flex: 8;
  padding: 0 10px;
  margin: 5px 20px;
  align-content: center;
  width: 60%;
}

button {
  background: none;
  border: 0px;
  color: #888;
  font-size: 15px;
  width: 60px;
  margin: 10px 0 0;
  font-family: Lato, sans-serif;
  cursor: pointer;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: left;
  background-color: #6200ea;
}

i {
  font-style: italic;
}

.container {
  margin-top: 100px;
}

.card {
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
    0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
    0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
    0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
  border-width: 0;
  transition: all 0.2s;
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-header {
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 0.625rem;
  height: 3.5rem;
  background-color: #fff;
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

.btn-outline-success {
  color: #3ac47d;
  border-color: #3ac47d;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #3ac47d;
  border-color: #3ac47d;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #3ac47d;
  border-color: #3ac47d;
}

.btn-primary {
  color: #fff;
  background-color: #3f6ad8;
  border-color: #3f6ad8;
}

.btn {
  position: relative;
  transition: color 0.15s, background-color 0.15s, border-color 0.15s,
    box-shadow 0.15s;
  outline: none !important;
}

.card-footer {
  background-color: #fff;
}

.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  overflow-y: scroll;
}
.sidebar.active ~ .home_content {
  z-index: 100;
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
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
