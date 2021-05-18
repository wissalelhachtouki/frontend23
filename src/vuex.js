import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  user: null,
  formations: [],
  todos: [],
  events: []
};

const store = new Vuex.Store({
  state,
  getters: {
    user: state => {
      return state.user;
    },
    formations: state => {
      return state.formations;
    },
    todos: state => {
      return state.todos;
    },
    events: state => {
      return state.events;
    }
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    deleteFormation(context, formationToRemove) {
      const newValue = state.formations.filter(
        formation => formation !== formationToRemove
      );
      console.log(newValue);
      context.commit("deleteFormation", newValue);
    },
    async addFormation(context, formationToAdd) {
      const response = await axios.post("formations", formationToAdd);
      console.log("this is add formation");
      console.log(response.data.data);
      context.commit("addFormation", response.data.data);
    },
    async updateFormation(context, updatedFormation) {
      // axios call to update the formation in the database
      const response = await axios.put(
        "formations/" + updatedFormation.id,
        updatedFormation
      );
      console.log("this is update formation");
      console.log(response.data);

      let formationToUpdateIndex = state.formations.findIndex(
        formation => formation.id === updatedFormation.id
      );

      let newValue = state.formations;
      newValue[formationToUpdateIndex] = updatedFormation;
      context.commit("updateFormation", newValue);
    },
    async setFormations(state) {
      const response = await axios.get("formations");
      console.log(response.data);
      state.commit("setFormations", response.data);
    },

    async setEvents(state) {
      let newValue = [];

      const response = await axios.get("formations");

      console.log("the 1 " + newValue);

      for (let i = 0; i < response.data.data.length; i++) {
        newValue.push(
              {
                start: response.data.data[i].dateDebut + " " + response.data.data[i].horaireDebut,
                end: response.data.data[i].dateFin + " " + response.data.data[i].horaireFin,
                title: response.data.data[i].title + " - " + response.data.data[i].lieuFormation
              }
          );
      }
      console.log("the 2 " + newValue);
      state.commit("setEvents", newValue);
    },

    async setTodos(state) {
      const response = await axios.get("todos");
      console.log(response.data);
      state.commit("setTodos", response.data);
    },
    deleteTodo(context, todoToRemove) {
      const newValue = state.todos.filter(todo => todo !== todoToRemove);
      console.log(newValue);
      context.commit("deleteTodo", newValue);
    },
    async addTodo(context, todoToAdd) {
      const response = await axios.post("todos", todoToAdd);
      console.log("this is add todo");
      console.log(response.data.data);
      context.commit("addTodo", response.data.data);
    },
    async updateTodo(context, updatedTodo) {
      // axios call to update the formation in the database
      const response = await axios.put("todos/" + updatedTodo.id, updatedTodo);
      console.log("this is update todo");
      console.log(response.data);

      let todoToUpdateIndex = state.todos.findIndex(
        todo => todo.id === updatedTodo.id
      );

      let newValue = state.todos;
      newValue[todoToUpdateIndex] = updatedTodo;
      context.commit("updateTodo", newValue);
    }
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    deleteFormation(state, newValue) {
      state.formations = newValue;
    },
    updateFormation(state, newValue) {
      state.formations = newValue;
    },
    addFormation(state, formationToAdd) {
      state.formations.push(formationToAdd);
    },
    setFormations(state, formations) {
      state.formations = formations.data;
    },

    setTodos(state, todos) {
      state.todos = todos.data;
    },
    deleteTodo(state, newValue) {
      state.todos = newValue;
    },
    addTodo(state, todoToAdd) {
      state.todos.push(todoToAdd);
    },
    updateTodo(state, newValue) {
      state.todos = newValue;
    },

    setEvents(state, events) {
      state.events = events;
    }
  }
});

export default store;
