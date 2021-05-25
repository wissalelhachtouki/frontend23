import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  user: null,
  formations: [],
  todos: [],
  events: [],
  areas1: [],
  areas2: [],
  line: [],
  bar: [],
  form: [],
  revenu: null,
  revenuParjour: null,
  revenuGlobal: null,
  moyennePart: null
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
    },
    areas1: state => {
      return state.areas1;
    },
    areas2: state => {
      return state.areas2;
    },
    line: state => {
      return state.line;
    },
    bar: state => {
      return state.bar;
    },
    form: state => {
      return state.form;
    },
    revenu: state => {
      return state.revenu;
    },
    revenuParjour: state => {
      return state.revenuParjour;
    },
    revenuGlobal: state => {
      return state.revenuGlobal;
    },
    moyennePart: state => {
      return state.moyennePart;
    }
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    async setRevenu(state) {
      const response = await axios.get("formations");
      let newValue = null;

      newValue = (response.data.data[response.data.data.length-1].nombreDeParticipant*response.data.data[response.data.data.length-1].tarifsParJours*response.data.data[response.data.data.length-1].nombreDeJours);

      state.commit("setRevenu", newValue);
    },
    async setRevenuParjour(state) {
      const response = await axios.get("formations");
      let newValue = null;

      newValue = (response.data.data[response.data.data.length-1].nombreDeParticipant*response.data.data[response.data.data.length-1].tarifsParJours);

      state.commit("setRevenuParjour", newValue);
    },
    async setRevenuGlobal(state) {
      const response = await axios.get("formations");
      let newValue = null;
      for (let i = 0; i < response.data.data.length; i++) {
        newValue += (response.data.data[response.data.data.length-1].nombreDeParticipant*response.data.data[response.data.data.length-1].tarifsParJours*response.data.data[response.data.data.length-1].nombreDeJours);
      }
      state.commit("setRevenuGlobal", newValue);
    },
    async setMoyennePart(state) {
      const response = await axios.get("formations");
      let newValue = null;
      for (let i = 0; i < response.data.data.length; i++) {
        newValue += response.data.data[i].nombreDeParticipant;
      }
      newValue = newValue / response.data.data.length;

      state.commit("setMoyennePart", newValue);
    },
    async updateProfile(context, profile) {
      const response = await axios.post("updateProfile", profile);
      console.log("this is updated profile");
      console.log(response.data.data);
      context.commit("updateProfile", response.data.data);
    },
    async updatePicture(context, picture) {
      const response = await axios.post("updatePicture", picture);
      console.log("this is updated profile");
      console.log(response.data.data);
      context.commit("updatePicture", response.data.data);
    },
    async setAreas1(state) {
      const response = await axios.get("formations");
      state.commit("setAreas1", response.data);
    },
    async setAreas2(state) {
      const response = await axios.get("formations");
      state.commit("setAreas2", response.data);
    },
    async setLine(state) {
      const response = await axios.get("formations");
      state.commit("setLine", response.data);
    },
    async setBar(state) {
      const response = await axios.get("formations");
      state.commit("setBar", response.data);
    },
    async setForm(state) {
      const response = await axios.get("formations");
      state.commit("setForm", response.data);
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
        newValue.push({
          start:
            response.data.data[i].dateDebut +
            " " +
            response.data.data[i].horaireDebut,
          end:
            response.data.data[i].dateFin +
            " " +
            response.data.data[i].horaireFin,
          title:
            response.data.data[i].title +
            " - " +
            response.data.data[i].lieuFormation,
          repeat: {
            every: "day",
            until: response.data.data[i].dateFin
          }
        });
      }
      console.log("the 2 ");
      console.log(newValue);
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
      newValue[todoToUpdateIndex].completed = true;
      newValue[todoToUpdateIndex].completed_at = updatedTodo.completed_at;
      context.commit("updateTodo", newValue);
    }
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    setRevenu(state, newValue) {
      state.revenu = newValue;
    },
    setRevenuParjour(state, newValue) {
      state.revenuParjour = newValue;
    },
    setRevenuGlobal(state, newValue) {
      state.revenuGlobal = newValue;
    },
    setMoyennePart(state, newValue) {
      state.moyennePart = newValue;
    },
    updateProfile(state, profile) {
      state.user = profile;
    },
    updatePicture(state, profile) {
      state.user = profile;
    },
    setAreas1(state, theValue) {
      for (let i = 0; i < theValue.data.length; i++) {
        state.areas1.push(theValue.data[i].nombreDeParticipant);
      }
      console.log("this is the area1");
      console.log(state.areas1);

    },
    setAreas2(state, theValue) {
      for (let i = 0; i < theValue.data.length; i++) {
        state.areas2.push(theValue.data[i].tarifsParJours);
      }
      console.log("this is area2");
      console.log(state.areas2);

    },
    setLine(state, theValue) {
      for (let i = 0; i < theValue.data.length; i++) {
        state.line.push(theValue.data[i].nombreDeParticipant*theValue.data[i].tarifsParJours*theValue.data[i].nombreDeJours);
      }
      console.log("this is line chart");
      console.log(state.line);

    },
    setBar(state, theValue) {
      for (let i = 0; i < theValue.data.length; i++) {
        state.bar.push(theValue.data[i].nombreDeJours);
      }
      console.log("this is bar chart");
      console.log(state.bar);
    },
    setForm(state, theValue) {
      for (let i = 1; i <= theValue.data.length; i++) {
        state.form.push("formation "+i);
      }
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
