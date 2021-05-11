<template>
  <div class="formations">
    <MainSidebar/>
    <div class="home_content">
      <div class="d-flex  width">
        <div class="   mt-5 w-100 ">
      <!-- Main content -->
          <div class="card" >
           <h3>Liste des Formation</h3>
            <div class="card-body">

              <table class="table  table-hover ">
                <thead>

                <th STYLE="color: tomato">ID</th>
                <th STYLE="color: tomato">Titre</th>
                <th STYLE="color: tomato">Nombre de jours</th>
                <th STYLE="color: tomato">Tarifs/J</th>
                <th STYLE="color: tomato">Nombre de participants</th>
                <th STYLE="color: tomato">Actions</th>

                </thead>

                <tbody>

                <tr>

                  <td class="font-weight-bold">1</td>
                  <td class="font-weight-bold">test2</td>
                  <td class="font-weight-bold">test3</td>
                  <td class="font-weight-bold">test4 DH</td>
                  <td class="font-weight-bold">test5</td>
                  <td>

                    <span><i class="fa fa-edit btn btn-warning" style="margin: 0 5px"></i></span>
                    <span><i class="bx bxs-trash btn btn-danger" style="margin: 0 5px"></i></span>
                  </td>
                </tr>

                </tbody>
              </table>


            </div>
            <div class="card-footer">
              <div class="card border">
                  <button class="btn btn-block" @click="showModal = true">Ajouter une formation</button>

              </div>
            </div>
          </div>
        </div>

      <!-- /.content -->
        </div>


      <div class="home_content">
        <div v-if="showModal" v-cloak>
          <transition name="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content" >
                    <div class="modal-header" >
                      <h5 class="modal-title">Entrer votre formation</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" @click="showModal = false">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">

                      <div class="card"  >
                        <div class="card-body">

                          <div class="form-group">
                            <label>Titre</label>
                            <input type="text" class="form-control">
                          </div>

                          <div class="row">
                            <div class="form-group col-md-4">
                              <label>Nombre de jours de la formation</label>
                              <input type="number"  class="form-control">
                            </div>

                            <div class="form-group col-md-4">
                              <label>Tarifs par jours</label>
                              <input type="number"  class="form-control">
                            </div>

                            <div class="form-group col-md-4">
                              <label>Nombre de participants dans la formation</label>
                              <input type="number"  class="form-control">
                            </div>
                          </div>


                          <div class="form-group">
                            <label>Description</label>
                            <textarea  class="form-control"/>
                          </div>



                        </div>
                      </div>

                    </div>
                    <div class="modal-footer">
                      <button class="btn  btn-outline-success" >Valider</button>
                      <button class="btn btn btn-outline-secondary"  @click="showModal = false">Close</button>
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

export default {
  name: "Formations",
  components: {
    MainSidebar
  },
  data(){
    return{
      showModal: false
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}



</style>
