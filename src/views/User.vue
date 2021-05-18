<template>
  <div class="user">
    <MainSidebar />
    <div class="home_content">
      <div><MainNavbar2/></div>
      <div class="row"><div class="col-md-8"><div class="card"><!----><div class="card-header"><h5 class="title">Edit Profile</h5></div><div class="card-body"><div class="row"><div class="col-md-5 pr-md-1 text-left"><div class="form-group has-label"><label> Company (disabled)  </label><div class="mb-0"><!----><input aria-describedby="addon-right addon-left" placeholder="Company" disabled="disabled" class="form-control"><!----></div><!----></div></div><div class="col-md-3 px-md-1 text-left"><div class="form-group has-label"><label> Username  </label><div class="mb-0"><!----><input aria-describedby="addon-right addon-left" placeholder="Username" class="form-control"><!----></div><!----></div></div><div class="col-md-4 pl-md-1 text-left"><div class="form-group has-label"><label> Email address  </label><div class="mb-0"><!----><input aria-describedby="addon-right addon-left" type="email" placeholder="mike@email.com" class="form-control"><!----></div><!----></div></div></div><div class="row"><div class="col-md-6 pr-md-1 text-left"><div class="form-group has-label"><label> First Name  </label><div class="mb-0"><!----><input aria-describedby="addon-right addon-left" placeholder="First Name" class="form-control"><!----></div><!----></div></div><div class="col-md-6 pl-md-1 text-left"><div class="form-group has-label"><label> Last Name  </label><div class="mb-0"><!----><input aria-describedby="addon-right addon-left" placeholder="Last Name" class="form-control"><!----></div><!----></div></div></div><div class="row"><div class="col-md-12 text-left"><div class="form-group has-label"><label> Address  </label><div class="mb-0"><!----><input aria-describedby="addon-right addon-left" placeholder="Home Address" class="form-control"><!----></div><!----></div></div></div><div class="row"><div class="col-md-4 pr-md-1 text-left"><div class="form-group has-label"><label> City  </label><div class="mb-0"><!----><input aria-describedby="addon-right addon-left" placeholder="City" class="form-control"><!----></div><!----></div></div><div class="col-md-4 px-md-1 text-left"><div class="form-group has-label"><label> Country  </label><div class="mb-0"><!----><input aria-describedby="addon-right addon-left" placeholder="Country" class="form-control"><!----></div><!----></div></div><div class="col-md-4 pl-md-1 text-left"><div class="form-group has-label"><label> Postal Code  </label><div class="mb-0"><!----><input aria-describedby="addon-right addon-left" placeholder="ZIP Code" class="form-control"><!----></div><!----></div></div></div><div class="row"><div class="col-md-8 text-left"><div class="form-group"><!----><div class="mb-0"><!----><label>About Me</label><textarea rows="4" cols="80" placeholder="Here can be your description" class="form-control"></textarea><!----></div><!----></div></div></div></div><!----><div class="card-footer text-left"><!----><button type="button" class="btn "  style="color: #00C7D9" fill=""><!---->Save</button></div></div></div><div class="col-md-4"><div class="card card-user"><!----><!----><div class="card-body"><div class="author"><div class="block block-one"></div><div class="block block-two"></div><div class="block block-three"></div><div class="block block-four"></div><a href="#"><img src="/vue-white-dashboard-pro/img/anime6.2a5a031c.png" alt="..." class="avatar"><h5 class="title">Mike Andrew</h5></a><p class="description">
        Ceo/Co-Founder
      </p></div><p class="card-description">
        Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
      </p></div><!----><div class="card-footer text-left"><!---->
        <div class="button-container">
          <button type="button" class="btn btn-facebook btn-round btn-icon btn-fab btn-default"><!----><i class="fab fa-facebook"></i></button><button type="button" class="btn btn-twitter btn-round btn-icon btn-fab btn-default"><!----><i class="fab fa-twitter"></i></button><button type="button" class="btn btn-google btn-round btn-icon btn-fab btn-default"><!----><i class="fab fa-google-plus"></i></button></div></div></div></div></div>



    </div>
  </div>
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import MainNavbar2 from "@/layout/MainNavbar2";

import { mapGetters } from "vuex";

export default {
  name: "User",
  components: {
    MainSidebar,
    MainNavbar2
  },
  computed: {
    ...mapGetters(["user"])
  }
};
</script>

<style scoped>
/* Basic Style */

body {
  background: #fff;
  color: #333;
  font-family: Lato, sans-serif;
  background-color: #e4e4e4;
}

.container {
  display: block;
  width: 400px;
  margin: 10px auto 100px;
  background-color: #fff;
  padding: 0px 10px 10px 10px;
  border-radius: 10px;
}

h2 {
  text-align: center;
  padding-top: 10px;
  margin-bottom: 0px;
}

ul {
  margin: 0;
  padding: 0;
}

li * {
  float: left;
}

li,
h3 {
  clear: both;
  list-style: none;
}

input,
button {
  outline: none;
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

button:hover {
  color: #333;
}

/* Heading */

h3,
label[for="new-task"] {
  color: #333;
  font-weight: 700;
  font-size: 15px;
  border-bottom: 2px solid #333;
  padding: 20px 0 10px;
  margin: 0;
  text-transform: uppercase;
}

input[type="text"] {
  margin: 0;
  font-size: 18px;
  line-height: 18px;
  height: 18px;
  padding: 10px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 6px;
  font-family: Lato, sans-serif;
  color: #888;
}

input[type="text"]:focus {
  color: #333;
}

/* New Task */

label[for="new-task"] {
  display: block;
  margin: 0 0 20px;
}

input#new-task {
  float: left;
  width: 318px;
}

p > button:hover {
  color: #0fc57c;
}

/* Task list */

li {
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

li > input[type="checkbox"] {
  margin: 0 10px;
  position: relative;
  top: 15px;
}

li > label {
  font-size: 18px;
  line-height: 40px;
  width: 237px;
  padding: 0 0 0 11px;
}

li > input[type="text"] {
  width: 226px;
}

li > .delete:hover {
  color: #cf2323;
}

/* Completed */

#completed-tasks label {
  text-decoration: line-through;
  color: #888;
}

/* Edit Task */

ul li input[type="text"] {
  display: none;
}

ul li.editMode input[type="text"] {
  display: block;
}

ul li.editMode label {
  display: none;
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
.background-color {
  background-color: #fff;
}
.border {
  -webkit-box-shadow: -1px -1px 17px 4px #e1e5ea;
  box-shadow: -1px -1px 17px 4px #e1e5ea;
  border: 2px solid #1c6ea4;
  border-radius: 10px;
}
</style>
