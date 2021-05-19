<template>
  <div class="wrapper">
    <div class="page-header header-filter" :style="headerStyle">
      <MainSidebar />

      <div class="home_content">
        <div><MainNavbar2 /></div>
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
                          style="border-radius: 15px"
                          class=" md-primary md-block"
                          @click="showModal = true"
                        >
                          <md-icon>library_books</md-icon> Ajouter
                        </md-button>
                      </div>
                      </h4>
                    </div>

                    <table class="table">
                      <thead>
                        <tr>
                          <th class="text-center">ID</th>
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
                          <td class="text-center">{{ index + 1 }}</td>
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
                                >person</i
                              ></span
                            >
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

        <div v-if="showModal" v-cloak>
          <transition name="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-dialog  modal-md" role="document">
                  <div class="modal-content" style=" border-radius: 10px">
                    <div class="modal-header" style=" border-radius: 10px">
                      <h5 class="modal-title">
                        <strong>Entrer votre formation</strong>
                      </h5>
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
                            <label>Titre</label>
                            <input
                              v-model="title"
                              type="text"
                              class="form-control"
                            />
                          </div>

                          <div class="form-group ">
                            <label>Nombre de jours de la formation </label>
                            <input
                              v-model="nombreDeJours"
                              type="number"
                              class="form-control"
                            />
                          </div>

                          <div class="form-group ">
                            <label>Tarifs par jours</label>
                            <input
                              v-model="tarifsParJours"
                              type="number"
                              class="form-control"
                            />
                          </div>

                          <div class="form-group ">
                            <label
                              >Nombre de participants dans la formation</label
                            >
                            <input
                              v-model="nombreDeParticipant"
                              type="number"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="modal-footer">
                      <md-button
                        class="md-simple"
                        @click="showModalPage2 = true"
                      >
                        Continuer vers le Plan
                      </md-button>
                      <md-button
                        class="md-danger md-simple"
                        @click="showModal = false"
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

        <div v-if="showModalPage2" v-cloak>
          <transition name="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content" style=" border-radius: 10px">
                    <div class="modal-header" style=" border-radius: 10px">
                      <h5 class="modal-title">
                        Entrer votre plan de formation
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span
                          aria-hidden="true"
                          @click="
                            showModalPage2 = false;
                            showModal = false;
                          "
                          >&times;</span
                        >
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="card" style=" border-radius: 15px">
                        <div class="card-body">
                          <div class="row">
                            <div class="form-group col-md-4">
                              <label>lieuFormation</label>
                              <input
                                v-model="lieuFormation"
                                type="text"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>public concerné</label>
                              <input
                                v-model="publicConcerne"
                                type="text"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>modalites</label>
                              <input
                                v-model="modalites"
                                type="text"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>dureeFormation</label>
                              <input
                                v-model="dureeFormation"
                                type="number"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>dateDebut</label>
                              <input
                                v-model="dateDebut"
                                type="text"
                                data-date-format="yyyy/mm/dd"
                                placeholder="yyyy/mm/dd"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>dateFin</label>
                              <input
                                v-model="dateFin"
                                type="text"
                                data-date-format="yyyy/mm/dd"
                                placeholder="yyyy/mm/dd"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label>objectifs et contenus</label>
                                <textarea
                                  v-model="description"
                                  rows="5"
                                  class="form-control"
                                  style=" border-radius: 15px"
                                />
                              </div>
                            </div>

                            <div class="col-md-2">
                              <div class="row form-group">
                                <label>horaire Debut</label>
                                <input
                                  v-model="horaireDebut"
                                  type="time"
                                  class="form-control"
                                  style=" border-radius: 15px"
                                />
                              </div>
                              <div class="row form-group">
                                <label>horaire Fin</label>
                                <input
                                  v-model="horaireFin"
                                  type="time"
                                  class="form-control"
                                  style=" border-radius: 15px"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" style=" border-radius: 15px">
                      <button
                        class="btn btn-outline-success btn-block"
                        @click.prevent="handleValid"
                        data-dismiss="modal"
                        style=" border-radius: 15px"
                      >
                        Valider
                      </button>
                      <button
                        class="btn btn btn-outline-secondary"
                        @click="showModalPage2 = false"
                        style=" border-radius: 15px"
                      >
                        Back
                      </button>
                      <button
                        class="btn btn btn-outline-secondary"
                        @click="
                          showModalPage2 = false;
                          showModal = false;
                        "
                        style=" border-radius: 15px"
                      >
                        Close
                      </button>
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
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span
                          aria-hidden="true"
                          @click="showModalDetails = false"
                          >&times;</span
                        >
                      </button>
                    </div>
                    <div class="modal-body">
                      <div v-if="formations" class="card">
                        <div class="card-body">
                          <table id="myTable" style="width:100%">
                            <tr>
                              <th>&nbsp;</th>
                              <th>{{ formations.title }}</th>
                            </tr>
                            <tr>
                              <td>lieuFormation :</td>
                              <td>{{ formations.lieuFormation }}</td>
                            </tr>
                            <tr>
                              <td>public concerné :</td>
                              <td>{{ formations.publicConcerne }}</td>
                            </tr>
                            <tr>
                              <td>modalites :</td>
                              <td>{{ formations.modalites }}</td>
                            </tr>
                            <tr>
                              <td>dureeFormation :</td>
                              <td>{{ formations.dureeFormation }}</td>
                            </tr>
                            <tr>
                              <td>date :</td>
                              <td>
                                De {{ formations.dateDebut }} à
                                {{ formations.dateFin }}
                              </td>
                            </tr>
                            <tr>
                              <td>horaire :</td>
                              <td>
                                De {{ formations.horaireDebut }} à
                                {{ formations.horaireFin }}
                              </td>
                            </tr>
                            <tr>
                              <td>objectifs et contenus :</td>
                              <td>{{ formations.description }}</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" style="border-radius: 15px">
                      <button
                        class="btn btn-primary"
                        @click="makePDF"
                        style="border-radius: 15px"
                      >
                        Télécharger PDF
                      </button>
                      <button
                        class="btn btn btn-outline-secondary"
                        @click="showModalDetails = false"
                        style=" border-radius: 15px"
                      >
                        Close
                      </button>
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
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true" @click="showModalEdit = false"
                          >&times;</span
                        >
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="card" style=" border-radius: 15px">
                        <div class="card-body">
                          <div class="form-group">
                            <label>Titre</label>
                            <input
                              v-model="formations.title"
                              type="text"
                              class="form-control"
                              style=" border-radius: 15px"
                            />
                          </div>

                          <div class="row">
                            <div class="form-group col-md-4">
                              <label>Nombre de jours de la formation</label>
                              <input
                                v-model="formations.nombreDeJours"
                                type="number"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>Tarifs par jours</label>
                              <input
                                v-model="formations.tarifsParJours"
                                type="number"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label
                                >Nombre de participants dans la formation</label
                              >
                              <input
                                v-model="formations.nombreDeParticipant"
                                type="number"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" style=" border-radius: 15px">
                      <button
                        class="btn btn-outline-info btn-block"
                        @click="
                          showModalEditpage2 = true;
                          editFormationPart2();
                        "
                        style=" border-radius: 15px"
                      >
                        Continuer pour editer le Plan
                      </button>
                      <button
                        class="btn btn btn-outline-secondary"
                        @click="showModalEdit = false"
                        style=" border-radius: 15px"
                      >
                        Close
                      </button>
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
                      <h5 class="modal-title">
                        Entrer votre plan de formation
                      </h5>
                      <button
                        type="button"
                        class="close"
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
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="card" style=" border-radius: 15px">
                        <div class="card-body">
                          <div class="row">
                            <div class="form-group col-md-4">
                              <label>lieuFormation</label>
                              <input
                                v-model="formations.lieuFormation"
                                type="text"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>public concerné</label>
                              <input
                                v-model="formations.publicConcerne"
                                type="text"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>modalites</label>
                              <input
                                v-model="formations.modalites"
                                type="text"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>dureeFormation</label>
                              <input
                                v-model="formations.dureeFormation"
                                type="number"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>dateDebut</label>
                              <input
                                v-model="formations.dateDebut"
                                type="text"
                                data-date-format="yyyy/mm/dd"
                                placeholder="yyyy/mm/dd"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>

                            <div class="form-group col-md-4">
                              <label>dateFin</label>
                              <input
                                v-model="formations.dateFin"
                                type="text"
                                data-date-format="yyyy/mm/dd"
                                placeholder="yyyy/mm/dd"
                                class="form-control"
                                style=" border-radius: 15px"
                              />
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-10">
                              <div class="form-group">
                                <label>objectifs et contenus</label>
                                <textarea
                                  v-model="formations.description"
                                  rows="5"
                                  class="form-control"
                                  style=" border-radius: 15px"
                                />
                              </div>
                            </div>

                            <div class="col-md-2">
                              <div class="row form-group">
                                <label>horaire Debut</label>
                                <input
                                  v-model="formations.horaireDebut"
                                  type="time"
                                  class="form-control"
                                  style=" border-radius: 15px"
                                />
                              </div>
                              <div class="row form-group">
                                <label>horaire Fin</label>
                                <input
                                  v-model="formations.horaireFin"
                                  type="time"
                                  class="form-control"
                                  style=" border-radius: 15px"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" style=" border-radius: 15px">
                      <button
                        class="btn btn-outline-success btn-block"
                        @click.prevent="updateFormation(formations.id)"
                        style=" border-radius: 15px"
                      >
                        Valider
                      </button>
                      <button
                        class="btn btn btn-outline-secondary"
                        @click="showModalEditpage2 = false"
                        style=" border-radius: 15px"
                      >
                        Back
                      </button>
                      <button
                        class="btn btn btn-outline-secondary"
                        @click="
                          showModalEditpage2 = false;
                          showModalEdit = false;
                        "
                        style=" border-radius: 15px"
                      >
                        Close
                      </button>
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
  props: {
    header: {
      type: String,
      default: require("@/assets/img/vue-mk-headerr.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
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
