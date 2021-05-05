<template>
  <div class="wrapper">
    <div id="javascriptComponents">
      <div class="title">
        <h2 style="font-family: 'Arial Rounded MT Bold' ; text-align: center" ><strong> Venez Decouvrir Nos Blogs</strong></h2>

      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
          <md-card>
            <carousel
                :per-page="1"
                loop
                :speed="700"
                autoplay
                :autoplay-timeout="5000"
                :mouse-drag="false"
                navigationEnabled
                navigationNextLabel="<i class='material-icons '>keyboard_arrow_right</i>"
                navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
            >
              <slide>

                <a href="#/blog2" target="_blank">

                <img :src="carousel1" alt="blog1" />
                </a>
              </slide>
              <slide>

                <a href="#/blog1" target="_blank">
                <img :src="carousel2" alt="carousel2" />
                </a>
              </slide>
              <slide>
                <a href="#/blog1" target="_blank">
                <img :src="carousel3" alt="carousel3" />
                </a>
              </slide>
            </carousel>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {


  },
  data() {
    return {
      classicModal: false,
      selectedDate: new Date("2018/03/26"),
      carousel1: require("@/assets/img/blog2.jpg"),
      carousel2: require("@/assets/img/blog1.jpg"),
      carousel3: require("@/assets/img/blog1.jpg")
    };
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    }
  }
};
</script>
