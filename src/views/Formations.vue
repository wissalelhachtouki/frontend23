<template>
  <div class="wrapper">

      <MainSidebar />

      <div class="home_content">
        <header><MainNavbar2 /></header>
        <div class="d-flex  width">
          <div class="   mt-5 w-100 ">
            <div class="container-fluid">
                <div class="col-md-12">
                  <div class="card card-styling " style="border-radius: 10px ; margin-bottom: 30px">
                    <div
                      class="card-header card-header-primary card-header-icon"
                    >
                      <h4 class="card-title">List des Formations
                      <div
                        class="md-layout-item md-size-10 "
                        style="float: right"
                      >
                        <md-button

                          class=" md-primary md-sm  md-block"
                          @click="showModal = true"
                        >
                          <md-icon>playlist_add</md-icon> Ajouter
                        </md-button>
                      </div>
                      </h4>
                    </div>

                    <table class="table">
                      <thead>
                        <tr>
                          <th class="text-center" >ID</th>
                          <th class="text-center">Titre</th>
                          <th class="text-center">Nombre Jours</th>
                          <th class="text-center">Tarifs/J</th>
                          <th class="text-center">Nombre Participants</th>
                          <th class="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(formation, index) in formations"
                          :key="formation.id"
                        >
                          <td class="text-center" >{{ index + 1 }}</td>
                          <td class="text-center">{{ formation.title }}</td>
                          <td class="text-center">{{ formation.nombreDeJours }}</td>
                          <td class="text-center">{{ formation.tarifsParJours }} DH</td>
                          <td class="text-center">{{ formation.nombreDeParticipant }}</td>
                          <td class="text-center">
                            <span
                              ><i
                                @click="
                                  showModalDetails = true;
                                  forDetails(formation);
                                "
                                class="btn btn-link text-info material-icons"
                                style="margin: 0 5px ; border-radius: 15px"
                                >list</i
                              ></span  >

                            <span
                              ><i
                                @click="
                                  showModalEdit = true;
                                  editFormationPart1(formation);
                                "
                                class="btn btn-link text-success material-icons"
                                style="margin: 0 5px ; border-radius: 15px"
                                >edit</i
                              ></span
                            >
                            <span
                              ><i
                                @click="deleteFormation(formation)"
                                style="margin: 0 5px ; border-radius: 15px"
                                class="btn btn-link text-danger material-icons"
                                >close</i
                              ></span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

              </div>
            </div>
          </div>
        </div>

        <footer> <h2>hhh</h2></footer>


        <div v-if="showModal" v-cloak>
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
                        @click="showModal = false"
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
                              <label>Titre...</label>

                            </md-field>
                          </div>

                          <div class="form-group ">
                            <md-field class="md-form-group" slot="inputs">

                              <md-icon >  </md-icon>
                              <md-input v-model="nombreDeJours" type="number"></md-input>
                              <label>Nombre de jour...</label>

                            </md-field>
                          </div>

                          <div class="form-group ">
                            <md-field class="md-form-group" slot="inputs">
                              <div></div>
                              <md-icon >  </md-icon>
                              <md-input v-model="tarifsParJours" type="number"></md-input>
                              <label>Tarif/J...</label>

                            </md-field>
                          </div>

                          <div class="form-group ">
                            <md-field class="md-form-group" slot="inputs">
                              <div></div>
                              <md-icon >  </md-icon>
                              <md-input v-model="nombreDeParticipant" type="number"></md-input>
                              <label>Nombre de Participants...</label>

                            </md-field>
                          </div>
                        </div>
                      </div>
                    </div>


                      <md-button
                        class="md-simple md-rose"
                        @click="showModalPage2 = true"

                      ><strong>
                        Continuer vers le Plan</strong>
                      </md-button>
                      <md-button
                        class="md-simple"
                        @click="showModal = false"
                      ><strong>
                        Close</strong>
                      </md-button>

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
                  <div class="modal-content" style=" border-radius: 10px">
                    <div class="modal-header card-header card-header-primary card-header-icon" >
                      <h5 class="modal-title card-title ">
                        Plan de formation
                      </h5>
                      <md-button
                        type="button"
                        class="md-simple md-just-icon md-round modal-default-button"
                        data-dismiss="modal"
                        aria-label="Close"
                        @click="
                       showModalPage2 = false;
                        showModal = false;"
                      ><md-icon>clear</md-icon>
                      </md-button>

                    </div>
                    <div class="modal-body">
                      <div class="card" style=" border-radius: 15px">
                        <div class="card-body">
                          <div class="row">
                            <div class="form-group col-md-4 ">

                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Lieu de Formation ...</label>
                                <md-input v-model="lieuFormation" type="text"></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">

                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Public Concerné ...</label>
                                <md-input v-model="publicConcerne" type="text"></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">

                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Modalités ...</label>
                                <md-input v-model="modalites" type="text"></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Durée de Formation...</label>
                                <md-input v-model="dureeFormation" type="text"></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                              <label>Date Debut ...</label>
                              <md-input
                                v-model="dateDebut"
                                type="date"
                                data-date-format="yyyy/mm/dd"

                              ></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Date Fin ...</label>
                                <md-input
                                  v-model="dateFin"
                                  type="date"
                                  data-date-format="yyyy/mm/dd"

                                ></md-input>
                              </md-field>
                            </div>




                            <div class="form-group col-md-4">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Horaire Debut..</label>
                                <md-input
                                  v-model="horaireDebut"
                                  type="time"

                                ></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Horaire Fin..</label>
                                <md-input
                                  v-model="horaireFin"
                                  type="time"

                                ></md-input>
                              </md-field>
                            </div>


                          </div>


                          <md-field class="md-form-group" slot="inputs" >

                            <md-icon></md-icon>
                            <label>Objectifs et Contenus..</label>
                            <md-textarea v-model="description" type="text"></md-textarea>
                          </md-field>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" >
                      <md-button
                        class="md-danger md-simple"
                        @click.prevent="handleValid"
                        data-dismiss="modal"

                      >
                        <strong>
                          Valider</strong>
                      </md-button>
                      <md-button
                        class="md-simple md-warning"
                        @click="showModalPage2 = false"

                      ><strong>
                        Retourner</strong>
                      </md-button>
                      <md-button
                        class=" md-simple"
                        @click="
                          showModalPage2 = false;
                          showModal = false;
                        "

                      >
                        Close
                      </md-button>
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
                  <div class="modal-content" style=" border-radius: 10px">
                    <div class="modal-header card-header card-header-primary card-header-icon" >
                      <h4 class="modal-title card-title">Details de la formation</h4>
                      <md-button

                        class="md-simple md-just-icon md-round modal-default-button"
                        @click="showModalDetails = false"
                      >
                       <md-icon><strong>clear</strong></md-icon>
                      </md-button>
                    </div>
                    <div class="modal-body" style="border-radius: 20px">
                      <div v-if="formations" class="card" style="border-radius: 20px">
                        <div class="card-body">
                          <table id="myTable" >
                            <tr>
                              <th>&nbsp;</th>
                              <th>{{ formations.title }}</th>
                            </tr>
                            <tr>
                              <td><strong>Lieu : </strong></td>
                              <td>{{ formations.lieuFormation }}</td>
                            </tr>
                            <tr>
                              <td><strong>Public concerné :</strong></td>
                              <td>{{ formations.publicConcerne }}</td>
                            </tr>
                            <tr>
                              <td><strong>Modalités : </strong></td>
                              <td>{{ formations.modalites }}</td>
                            </tr>
                            <tr>
                              <td><strong> Durèe Formation :</strong></td>
                              <td>{{ formations.dureeFormation }}</td>
                            </tr>
                            <tr>
                              <td><strong>Date :</strong></td>
                              <td>
                                De {{ formations.dateDebut }} à
                                {{ formations.dateFin }}
                              </td>
                            </tr>
                            <tr>
                              <td><strong>Horaire :</strong></td>
                              <td>
                                De {{ formations.horaireDebut }} à
                                {{ formations.horaireFin }}
                              </td>
                            </tr>
                            <tr>
                              <td><strong>Objectifs et Contenus :</strong></td>
                              <td>{{ formations.description }}</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>

                      <md-button
                        class="md-simple md-warning"
                        @click="makePDF"

                      ><strong>
                        <md-icon>download</md-icon> Télécharger PDF</strong>

                      </md-button>
                      <md-button
                        class="md-simple"
                        @click="showModalDetails = false"

                      ><strong>
                        Close</strong>
                      </md-button>

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
                <div class="modal-dialog  modal-md" role="document">
                  <div class="modal-content" style=" border-radius: 10px">


                    <div class="modal-header card-header card-header-primary card-header-icon" >
                      <h4 class="modal-title card-title">
                        <strong style="text-align: left">Editer votre formation</strong></h4>
                      <md-button
                        type="button"
                        class="md-simple md-just-icon md-round modal-default-button"
                        data-dismiss="modal"
                        aria-label="Close"
                        @click="showModalEdit = false"
                      ><md-icon>clear</md-icon>

                      </md-button>
                    </div>
                    <div class="modal-body">
                      <div class="card" style=" border-radius: 10px">
                        <div class="card-body">
                          <div class="form-group">
                            <md-field class="md-form-group" slot="inputs">
                              <md-icon >  </md-icon>
                              <md-input v-model="formations.title" type="text"></md-input>
                              <label>Titre...</label>

                            </md-field>
                          </div>


                            <div class="form-group ">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon >  </md-icon>
                                <md-input v-model="formations.nombreDeJours" type="number"></md-input>
                                <label>Nombre de Jours..</label>

                              </md-field>
                            </div>

                            <div class="form-group ">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon >  </md-icon>
                                <md-input v-model="formations.tarifsParJours" type="number"></md-input>
                                <label>Tarfis/J...</label>

                              </md-field>
                            </div>

                            <div class="form-group ">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon >  </md-icon>
                                <md-input v-model="formations.nombreDeParticipant" type="number"></md-input>
                                <label>Nombre de Participants...</label>

                              </md-field>

                            </div>

                        </div>
                      </div>
                    </div>

                      <md-button
                        class="md-danger md-simple"
                        @click="
                          showModalEditpage2 = true;
                          editFormationPart2();
                        "

                      ><strong>
                        Editer le Plan</strong>
                      </md-button>
                      <md-button
                        class=" md-simple"
                        @click="showModalEdit = false"

                      ><strong>
                        Close</strong>
                      </md-button>
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
                  <div class="modal-content" style=" border-radius: 10px">
                    <div class="modal-header card-header card-header-primary card-header-icon" >
                      <h5 class="modal-title card-title ">
                        Modifier Votre Plan
                      </h5>

                      <md-button
                        type="button"
                        class="md-simple md-just-icon md-round modal-default-button"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span
                          aria-hidden="true"
                          @click="
                            showModalEditpage2 = false;
                            showModalEdit = false;
                          "
                          >&times;</span
                        >
                      </md-button>
                    </div>
                    <div class="modal-body">
                      <div class="card" style=" border-radius: 15px">
                        <div class="card-body">
                          <div class="row">
                            <div class="form-group col-md-4 ">

                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Lieu de Formation ...</label>
                                <md-input v-model="formations.lieuFormation" type="text"></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">

                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Public Concerné ...</label>
                                <md-input v-model="formations.publicConcerne" type="text"></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">

                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Modalités ...</label>
                                <md-input v-model="formations.modalites" type="text"></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Durée de Formation...</label>
                                <md-input v-model="formations.dureeFormation" type="text"></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Date Debut ...</label>
                                <md-input
                                  v-model="formations.dateDebut"
                                  type="date"
                                  data-date-format="yyyy/mm/dd"

                                ></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Date Fin ...</label>
                                <md-input
                                  v-model="formations.dateFin"
                                  type="date"
                                  data-date-format="yyyy/mm/dd"

                                ></md-input>
                              </md-field>
                            </div>




                            <div class="form-group col-md-4">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Horaire Debut..</label>
                                <md-input
                                  v-model="formations.horaireDebut"
                                  type="time"

                                ></md-input>
                              </md-field>
                            </div>

                            <div class="form-group col-md-4">
                              <md-field class="md-form-group" slot="inputs">
                                <md-icon></md-icon>
                                <label>Horaire Fin..</label>
                                <md-input
                                  v-model="formations.horaireFin"
                                  type="time"

                                ></md-input>
                              </md-field>
                            </div>
                          </div>

                          <md-field class="md-form-group" slot="inputs" >

                            <md-icon></md-icon>
                            <label>Objectifs et Contenus..</label>
                            <md-textarea v-model="formations.description" type="text"></md-textarea>
                          </md-field>
                        </div>
                      </div>
                    </div>

                    <div class="modal-footer" >
                      <md-button
                        class="md-danger md-simple"
                        @click.prevent="updateFormation(formations.id)"
                        data-dismiss="modal"

                      >
                        <strong>
                          Valider</strong>
                      </md-button>
                      <md-button
                        class="md-simple md-warning"
                        @click="showModalEditpage2 = false"

                      ><strong>
                        Retourner</strong>
                      </md-button>
                      <md-button
                        class=" md-simple"
                        @click="
                          showModalEditpage2 = false;
                          showModalEdit = false;
                        "

                      >
                        Close
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
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import MainNavbar2 from "@/layout/MainNavbar2";
import axios from "axios";
import { mapGetters } from "vuex";
import JSPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default {
  name: "Formations",
  components: {
    MainSidebar,
    MainNavbar2
  },
  data() {
    return {
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
      dateFin: "",
      horaireDebut: "",
      horaireFin: "",
      description: "",
      error: "",
      frm: {}
    };
  },

  computed: {

    ...mapGetters(["formations"])
  },
  methods: {
    async handleValid() {
      try {
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
          dateFin: this.dateFin,
          horaireDebut: this.horaireDebut,
          horaireFin: this.horaireFin,
          description: this.description
        };

        await this.$store.dispatch("addFormation", data);

        this.showModal = false;
        this.showModalPage2 = false;
      } catch (e) {
        this.error = "Error occurred !";
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
      this.formations.dateFin = formation.dateFin;
      this.formations.horaireDebut = formation.horaireDebut;
      this.formations.horaireFin = formation.horaireFin;
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
      this.formations.dateFin = this.frm.dateFin;
      this.formations.horaireDebut = this.frm.horaireDebut;
      this.formations.horaireFin = this.frm.horaireFin;
      this.formations.description = this.frm.description;
      console.log(this.frm);
    },

    async updateFormation(id) {
      try {
        const data = {
          id: id,
          title: this.formations.title,
          nombreDeJours: this.formations.nombreDeJours,
          tarifsParJours: this.formations.tarifsParJours,
          nombreDeParticipant: this.formations.nombreDeParticipant,
          modalites: this.formations.modalites,
          publicConcerne: this.formations.publicConcerne,
          lieuFormation: this.formations.lieuFormation,
          dureeFormation: this.formations.dureeFormation,
          dateDebut: this.formations.dateDebut,
          dateFin: this.formations.dateFin,
          horaireDebut: this.formations.horaireDebut,
          horaireFin: this.formations.horaireFin,
          description: this.formations.description
        };

        console.log("this data id");
        console.log(data.id);
        console.log("this data updated");
        console.log(data);
        await this.$store.dispatch("updateFormation", data);

        this.showModalEdit = false;
        this.showModalEditpage2 = false;
      } catch (e) {
        console.log(e);
      }
    },

    async deleteFormation(formation) {
      // Delete from database
      const response = await axios.delete("formations/" + formation.id);
      // Delete from the state

      await this.$store.dispatch("deleteFormation", formation);
      console.log(response);
      alert("Formation deleted!");
    },
    makePDF() {
      var doc = new JSPDF();

      autoTable(doc, { html: "#myTable" });

      doc.save("MaFormation.pdf");
    }
  },
  mounted() {
    this.$store.dispatch("setFormations");
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
.btn-neutral {
  color: #5e72e4;
}
.fas {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
