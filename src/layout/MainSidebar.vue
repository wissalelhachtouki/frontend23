<template>

  <div class="sidebar">
    <div class="logo_content">
      <div class="logo">
        <div v-if="user" class="logo_name">Bonjour, {{ user.name }}</div>
        <div v-else class="logo_name">no one</div>
      </div>
      <i class="bx bx-menu" id="btn"></i>
    </div>
    <div class="user">



          <div class="photo" style="text-align: left">
            <img src="@/assets/img/christian.jpg" alt="avatar">
          </div>
          <div v-if="user" class="user-info">
            <strong class="links_name" style="color: whitesmoke">{{ user.name }}</strong><a data-toggle="collapse"></a>

      </div>


    <ul class="nav_list">
      <li>
        <a href="#/profile">
          <i class="bx bx-user"></i>
          <span class="links_name">Profile</span>
        </a>
        <span class="tooltip">Profile</span>
      </li>
      <li>
        <a href="#/edituser">
          <i class="bx bxs-edit"></i>
          <span class="links_name">Edit Profile</span>
        </a>
        <span class="tooltip">Edit Profile</span>
      </li>

      <br>

      <li>
        <a href="#/dashboard">
          <i class="bx bxs-dashboard"></i>
          <span class="links_name">Dashboard</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li>

      <li>
        <a href="#/user">
          <i class="bx bx-user"></i>
          <span class="links_name">User</span>
        </a>
        <span class="tooltip">User</span>
      </li>
      <li>
        <a href="#/calendrier">
          <i class='bx bx-calendar' ></i>
          <span class="links_name">Calendar</span>
        </a>
        <span class="tooltip">Calendar</span>
      </li>
      <li>
        <a href="#/todo-list">
          <i class='bx bx-task' ></i>
          <span class="links_name">Tasks</span>
        </a>
        <span class="tooltip">Tasks</span>
      </li>
      <li>
        <a href="#/formations">
          <i class='bx bx-list-check' ></i>
          <span class="links_name">List Formations</span>
        </a>
        <span class="tooltip">Formations</span>
      </li>
      <li>

      </li>
      <li>

      </li>
    </ul>

    <div class="profile_content">
        <ul class="nav_list">
          <li>
            <a @click="handleClick">
              <i class='bx bx-log-out' ></i>
              <span class="links_name">Log out</span>
            </a>
          </li>
        </ul>

    </div>

    </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    }
  },
  mounted() {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("active");

    btn.onclick = () => {
      console.log("was click");
      sidebar.classList.toggle("active");
      if (btn.classList.contains("bx-menu")) {
        console.log("this is if");
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        console.log("this is else");
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  }
};
</script>

<style scoped>
.sidebar .caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.sidebar .user .user-info .caret {
  position: absolute;
  top: 8px;
  right: 15px;
}
.sidebar .user .photo {
  width: 34px;
  height: 34px;
  overflow: hidden;
  float: left;
  z-index: 5;
  margin-right: 13px;
  border-radius: 50%;
  margin-left: 23px;
  transition: transform .3s linear,opacity .3s linear,-webkit-transform .3s linear;
}
.sidebar .user {
  padding-bottom: 20px;
  margin: 20px auto 0;
  position: relative;
}
/* Google Font CDN Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
}
body{
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}
::selection{
  color: #fff;
  background: #11101d;
}
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 78px;
 background-color: #01579b;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
}

.sidebar.active{
  width: 240px
}
.sidebar .logo_content .logo{
  color: #fff;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease;
}
.sidebar.active .logo_content .logo{
  opacity: 1;
  pointer-events: none;
}
.logo_content .logo i{
  font-size: 28px;
  margin-right: 5px;
}
.logo_content .logo .logo_name{
  font-size: 20px;
  font-weight: 400;
}
.sidebar #btn{
  position: absolute;
  color: #fff;
  top: 6px;
  left: 50%;
  font-size: 22px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
}
.sidebar.active #btn{
  left: 90%;
}
.sidebar ul{
  margin-top: 20px;
}
.sidebar ul li{
  position: relative;
  height: 50px;
  width: 100%;
  margin: 0 5px;
  list-style: none;
  line-height: 50px;
  margin: 5px 0;
}
.sidebar ul li .tooltip{
  position: absolute;
  left: 125px;
  top: 0;
  transform: translate(-50% , -50%);
  border-radius: 6px;
  height: 35px;
  width: 120px;
  background: #fff;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;
}
.sidebar.active ul li .tooltip{
  display: none;
}
.sidebar ul li:hover .tooltip{
  transition: all 0.5s ease;
  opacity: 1;
  top: 50%
}
.sidebar ul li input{
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: black;
  padding-left: 50px;
  font-size: 18px;
  color: #fff;
}
.sidebar ul li .bx-search{
  position: absolute;
  z-index: 99;
  color: #fff;
  font-size: 22px;
  transition: all 0.5s ease;
}
.sidebar ul li .bx-search:hover{
  background: #fff;
  color: #1d1b31;
}
.sidebar ul li a{
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 12px;
  white-space: nowrap;
  transition: all 0.4s ease;
}
.sidebar ul li a:hover{
  color: #11101d;
  background: #fff;
}
.sidebar ul li i{
  font-size: 18px;
  font-weight: 400;
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}
.sidebar .links_name{
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.sidebar.active .links_name{
  transition: 0s;
  opacity: 1;
  pointer-events: auto
}
.sidebar .profile_content{
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
}
.sidebar .profile_content .profile{
  position: relative;
  padding: 10px 6px;
  height: 60px;
  background: none;
  transition: all 0.4s ease;
}
.sidebar.active .profile_content .profile{
  background: #1d1b31;
}
.profile_content .profile .profile_details{
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  transition: all 0.4s ease;
}
.sidebar.active ~ .profile .profile_details{
  opacity: 1;
  pointer-events: auto;
}
.profile .profile_details img{
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 12px;
}
.profile .profile_details .name_job{
  margin-left: 10px;
}
.profile .profile_details .name{
  font-size: 15px;
  font-weight: 400;
}
.profile .profile_details .job{
  font-size: 12px;
}
.profile #log_out{
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 50px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.4s ease;
  background: #1d1b31;
}
.sidebar.active .profile #log_out{
  left: 88%;
}
.sidebar.active .profile #log_out{
  background: none
}
.home_content{
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  background: #E4E9F7;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  transition: all 0.5s ease;
}
.sidebar.active ~ .home_content{
  z-index: 100;
}
.home_content .text{
  font-size: 25px;
  font-weight: 500;
  color: #1d1b31;
  margin: 12px;
}
.sidebar.active ~ .home_content{
  width: calc(100% - 240px);
  left: 240px;

}
</style>
