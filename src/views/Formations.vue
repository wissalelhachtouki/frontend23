<template>
  <div class="formations">
    <MainSidebar/>
    <div class="home_content">
      <div class="d-flex  width">
        <div class="   mt-5 w-100 ">
      <!-- Main content -->
          <div class="card" style=" border-radius: 15px">
            <h3 style="text-align: center"><strong>Liste des Formation</strong></h3>
            <div class="card-body" style=" border-radius: 15px">

              <table class="table  table-hover" style="border-radius: 15px">
                <thead style=" border-radius: 15px">

                <th class="font-weight-bold">ID</th>
                <th class="font-weight-bold">Titre</th>
                <th class="font-weight-bold">Nombre de jours</th>
                <th class="font-weight-bold">Tarifs/J</th>
                <th class="font-weight-bold">Nombre de participants</th>
                <th class="font-weight-bold">Actions</th>

                </thead>

                <tbody style=" border-radius: 15px">

                <tr v-for="(formation, index) in formations" :key="formation.id">

                  <td>{{ index+1 }}</td>
                  <td>{{ formation.title }}</td>
                  <td>{{ formation.nombreDeJours }}</td>
                  <td>{{ formation.tarifsParJours }} DH</td>
                  <td>{{ formation.nombreDeParticipant }}</td>
                  <td>
                    <span><i @click="showModalDetails = true ; forDetails(formation)" class="bx bxs-plus-square btn btn-info" style="margin: 0 5px ; border-radius: 15px"></i></span>
                    <span><i @click="showModalEdit = true ; editFormationPart1(formation)" class="fa fa-edit btn btn-warning" style="margin: 0 5px ; border-radius: 15px"></i></span>
                    <span><i @click="deleteFormation(formation)" class="bx bxs-trash btn btn-danger" style="margin: 0 5px ; border-radius: 15px"></i></span>
                  </td>
                </tr>

                </tbody>
              </table>


            </div>
            <div class="card-footer">
              <div class="card border">
                  <button class="btn btn-outline-primary btn-block" @click="showModal = true" style=" border-radius: 15px">Ajouter une formation</button>
              </div>
            </div>
          </div>
        </div>

      <!-- /.content -->
        </div>



        <div v-if="showModal" v-cloak>
          <transition name="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content" style=" border-radius: 15px">
                    <div class="modal-header" style=" border-radius: 15px">
                      <h5 class="modal-title">Entrer votre formation</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" @click="showModal = false">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">

                      <div class="card" style=" border-radius: 15px">
                        <div class="card-body">

                          <div class="form-group">
                            <label>Titre</label>
                            <input v-model="title" type="text" class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="row">
                            <div class="form-group col-md-4">
                              <label>Nombre de jours de la formation</label>
                              <input v-model="nombreDeJours" type="number"  class="form-control" style=" border-radius: 15px">
                            </div>

                            <div class="form-group col-md-4">
                              <label>Tarifs par jours</label>
                              <input v-model="tarifsParJours" type="number"  class="form-control" style=" border-radius: 15px">
                            </div>

                            <div class="form-group col-md-4">
                              <label>Nombre de participants dans la formation</label>
                              <input v-model="nombreDeParticipant" type="number"  class="form-control" style=" border-radius: 15px">
                            </div>
                          </div>



                        </div>
                      </div>

                    </div>
                    <div class="modal-footer" style=" border-radius: 15px">
                      <button class="btn btn-outline-info btn-block" @click="showModalPage2 = true" style=" border-radius: 15px">Continuer vers le Plan</button>
                      <button class="btn btn btn-outline-secondary"  @click="showModal = false" style=" border-radius: 15px">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>


      <div v-if="showModalPage2" v-cloak>
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content" style=" border-radius: 15px">
                  <div class="modal-header" style=" border-radius: 15px">
                    <h5 class="modal-title">Entrer votre plan de formation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" @click="showModalPage2 = false ; showModal = false">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">

                    <div class="card" style=" border-radius: 15px">
                      <div class="card-body">



                        <div class="row">


                          <div class="form-group col-md-4">
                            <label>lieuFormation</label>
                            <input v-model="lieuFormation" type="text"  class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="form-group col-md-4">
                            <label>public concerné</label>
                            <input v-model="publicConcerne" type="text"  class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="form-group col-md-4">
                            <label>modalites</label>
                            <input v-model="modalites" type="text"  class="form-control" style=" border-radius: 15px">
                          </div>


                          <div class="form-group col-md-4">
                            <label>dureeFormation</label>
                            <input v-model="dureeFormation" type="number"  class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="form-group col-md-4">
                            <label>dateDebut</label>
                            <input v-model="dateDebut" type="text" data-date-format="yyyy/mm/dd" placeholder="yyyy/mm/dd" class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="form-group col-md-4">
                            <label>horaire</label>
                            <input v-model="horaire" type="text"  class="form-control" style=" border-radius: 15px">
                          </div>

                        </div>

                        <div class="form-group">
                          <label>objectifs et contenus</label>
                          <textarea v-model="description" rows="5" class="form-control" style=" border-radius: 15px"/>
                        </div>



                      </div>
                    </div>

                  </div>
                  <div class="modal-footer" style=" border-radius: 15px">
                    <button class="btn btn-outline-success btn-block" @click.prevent="handleValid" style=" border-radius: 15px">Valider</button>
                    <button class="btn btn btn-outline-secondary"  @click="showModalPage2 = false"  style=" border-radius: 15px">Back</button>
                    <button class="btn btn btn-outline-secondary"  @click="showModalPage2 = false ; showModal = false"  style=" border-radius: 15px">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>






      <div v-if="showModalDetails" v-cloak>
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content" style=" border-radius: 15px">
                  <div class="modal-header" style=" border-radius: 15px">
                    <h5 class="modal-title">Details de la formation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" @click="showModalDetails = false">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div v-if="formations" class="card">
                      <div class="card-header">
                        <label>Title : </label>
                        <label>{{ formations.title }}</label>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <label class="col-md-4">lieuFormation : </label>
                          <label class="col-md-8">{{ formations.lieuFormation }} </label>
                        </div>
                        <div class="row">
                          <label class="col-md-4">public concerné : </label>
                          <label class="col-md-8">{{ formations.publicConcerne }} </label>
                        </div>
                        <div class="row">
                          <label class="col-md-4">modalites : </label>
                          <label class="col-md-8">{{ formations.modalites }} </label>
                        </div>
                        <div class="row">
                          <label class="col-md-4">dureeFormation : </label>
                          <label class="col-md-8">{{ formations.dureeFormation }} </label>
                        </div>
                        <div class="row">
                          <label class="col-md-4">dateDebut : </label>
                          <label class="col-md-8">{{ formations.dateDebut }} </label>
                        </div>
                        <div class="row">
                          <label class="col-md-4">horaire : </label>
                          <label class="col-md-8">{{ formations.horaire }} </label>
                        </div>
                        <div class="row">
                          <label class="col-md-4">objectifs et contenus : </label>
                          <p class="col-md-8">{{ formations.description }} </p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <button class="btn btn-primary"  @click="showModalDetails = false" style=" border-radius: 15px">+</button>

                      </div>
                    </div>


                  </div>
                  <div class="modal-footer" style="border-radius: 15px">
                    <button class="btn btn btn-outline-secondary"  @click="showModalDetails = false" style=" border-radius: 15px">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>





      <div v-if="showModalEdit" v-cloak>
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content" style=" border-radius: 15px">
                  <div class="modal-header" style=" border-radius: 15px">
                    <h5 class="modal-title">Entrer votre formation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" @click="showModalEdit = false">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">

                    <div class="card" style=" border-radius: 15px">
                      <div class="card-body">

                        <div class="form-group">
                          <label>Titre</label>
                          <input v-model="formations.title" type="text" class="form-control" style=" border-radius: 15px">
                        </div>

                        <div class="row">
                          <div class="form-group col-md-4">
                            <label>Nombre de jours de la formation</label>
                            <input v-model="formations.nombreDeJours" type="number"  class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="form-group col-md-4">
                            <label>Tarifs par jours</label>
                            <input v-model="formations.tarifsParJours" type="number"  class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="form-group col-md-4">
                            <label>Nombre de participants dans la formation</label>
                            <input v-model="formations.nombreDeParticipant" type="number"  class="form-control" style=" border-radius: 15px">
                          </div>
                        </div>



                      </div>
                    </div>

                  </div>
                  <div class="modal-footer" style=" border-radius: 15px">
                    <button class="btn btn-outline-info btn-block" @click="showModalEditpage2 = true ; editFormationPart2()" style=" border-radius: 15px">Continuer pour editer le Plan</button>
                    <button class="btn btn btn-outline-secondary"  @click="showModalEdit = false" style=" border-radius: 15px">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>


      <div v-if="showModalEditpage2" v-cloak>
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content" style=" border-radius: 15px">
                  <div class="modal-header" style=" border-radius: 15px">
                    <h5 class="modal-title">Entrer votre plan de formation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" @click="showModalEditpage2 = false ; showModalEdit = false">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">

                    <div class="card" style=" border-radius: 15px">
                      <div class="card-body">



                        <div class="row">


                          <div class="form-group col-md-4">
                            <label>lieuFormation</label>
                            <input v-model="formations.lieuFormation" type="text"  class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="form-group col-md-4">
                            <label>public concerné</label>
                            <input v-model="formations.publicConcerne" type="text"  class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="form-group col-md-4">
                            <label>modalites</label>
                            <input v-model="formations.modalites" type="text"  class="form-control" style=" border-radius: 15px">
                          </div>


                          <div class="form-group col-md-4">
                            <label>dureeFormation</label>
                            <input v-model="formations.dureeFormation" type="number"  class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="form-group col-md-4">
                            <label>dateDebut</label>
                            <input v-model="formations.dateDebut" type="text" data-date-format="yyyy/mm/dd" placeholder="yyyy/mm/dd" class="form-control" style=" border-radius: 15px">
                          </div>

                          <div class="form-group col-md-4">
                            <label>horaire</label>
                            <input v-model="formations.horaire" type="text"  class="form-control" style=" border-radius: 15px">
                          </div>

                        </div>

                        <div class="form-group">
                          <label>objectifs et contenus</label>
                          <textarea v-model="formations.description" rows="5" class="form-control" style=" border-radius: 15px"/>
                        </div>



                      </div>
                    </div>

                  </div>
                  <div class="modal-footer" style=" border-radius: 15px">
                    <button class="btn btn-outline-success btn-block" @click.prevent="updateUser" style=" border-radius: 15px">Valider</button>
                    <button class="btn btn btn-outline-secondary"  @click="showModalEditpage2 = false"  style=" border-radius: 15px">Back</button>
                    <button class="btn btn btn-outline-secondary"  @click="showModalEditpage2 = false ; showModalEdit = false"  style=" border-radius: 15px">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

  </div>

  </div>
</template>

<script>


import MainSidebar from "@/layout/MainSidebar";
import axios from "axios";
import { mapGetters } from "vuex";


export default {
  name: "Formations",
  components: {
    MainSidebar
  },
  data(){
    return{
      showModal: false,
      showModalDetails: false,
      showModalEdit: false,
      showModalPage2: false,
      showModalEditpage2: false,
      title: "",
      nombreDeJours: "",
      tarifsParJours: "",
      nombreDeParticipant: "",
      modalites: "",
      publicConcerne: "",
      lieuFormation: "",
      dureeFormation: "",
      dateDebut: "",
      horaire: "",
      description: "",
      error: "",
      frm: {}
    }
  },
  computed: {
    ...mapGetters(["formations"])
  },
  methods: {
    async handleValid(){
      try{
        const data = {
          title: this.title,
          nombreDeJours: this.nombreDeJours,
          tarifsParJours: this.tarifsParJours,
          nombreDeParticipant: this.nombreDeParticipant,
          modalites: this.modalites,
          publicConcerne: this.publicConcerne,
          lieuFormation: this.lieuFormation,
          dureeFormation: this.dureeFormation,
          dateDebut: this.dateDebut,
          horaire: this.horaire,
          description: this.description
        };


        //const response = await axios.post("formations", data);

        await this.$store.dispatch("addFormation", data);

        alert("formation added!");
      }
      catch (e){
        this.error = "Error occurred !"
      }
    },

    async forDetails(formation) {
      this.formations.title = formation.title;
      this.formations.nombreDeJours = formation.nombreDeJours;
      this.formations.tarifsParJours = formation.tarifsParJours;
      this.formations.nombreDeParticipant = formation.nombreDeParticipant;
      this.formations.modalites = formation.modalites;
      this.formations.publicConcerne = formation.publicConcerne;
      this.formations.lieuFormation = formation.lieuFormation;
      this.formations.dureeFormation = formation.dureeFormation;
      this.formations.dateDebut = formation.dateDebut;
      this.formations.horaire = formation.horaire;
      this.formations.description = formation.description;
      console.log(formation);
    },

    async editFormationPart1(formation) {
      this.formations.id = formation.id;
      this.formations.title = formation.title;
      this.formations.nombreDeJours = formation.nombreDeJours;
      this.formations.tarifsParJours = formation.tarifsParJours;
      this.formations.nombreDeParticipant = formation.nombreDeParticipant;
      console.log(formation);
      this.frm = formation;
    },
    async editFormationPart2() {
      this.formations.modalites = this.frm.modalites;
      this.formations.publicConcerne = this.frm.publicConcerne;
      this.formations.lieuFormation = this.frm.lieuFormation;
      this.formations.dureeFormation = this.frm.dureeFormation;
      this.formations.dateDebut = this.frm.dateDebut;
      this.formations.horaire = this.frm.horaire;
      this.formations.description = this.frm.description;
      console.log(this.frm);
    },

    async updateUser() {
      try {
        const response = await axios.put("formations/" + this.formations.id,
            {
              title: this.formations.title,
              nombreDeJours: this.formations.nombreDeJours,
              tarifsParJours: this.formations.tarifsParJours,
              nombreDeParticipant: this.formations.nombreDeParticipant,
              modalites: this.formations.modalites,
              publicConcerne: this.formations.publicConcerne,
              lieuFormation: this.formations.lieuFormation,
              dureeFormation: this.formations.dureeFormation,
              dateDebut: this.formations.dateDebut,
              horaire: this.formations.horaire,
              description: this.formations.description
            }
        );

        console.log(response.data);
        alert("formation updated!");
      } catch (e) {
        console.log(e);
      }
    }


    ,
    async deleteFormation(formation) {


        // Delete from database
        const response = await axios.delete("formations/" + formation.id);
        // Delete from the state 

        await this.$store.dispatch("deleteFormation", formation);
        console.log(response);
        alert("Formation deleted!");

    }
  },
  mounted() {
     this.$store.dispatch("setFormations");
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
