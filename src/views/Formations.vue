<template>
  <div class="wrapper">
    <div class="page-header header-filter" :style="headerStyle">
      <MainSidebar />

      <div class="home_content">
        <div><MainNavbar2/></div>

        <div class="d-flex  width">
          <div class="   mt-5 w-100 ">
            <!-- Main content -->
            <div class="card-styling" style="border-radius: 10px">
              <div class="card-header border-0">
                <div class="row">
                  <div class="col-6">
                    <h3 class="mb-0"><strong>Liste des Formation</strong></h3>
                  </div>
                  <div class="col-6 text-right">
                    <button
                      type="warning"
                      class="btn    btn-sm btn-info"
                      @click="showModal = true"
                      ><!---->

                      <i class="fas fa-edit"></i>
                      <span class="btn-inner--text">Add</span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="el-table__header-wrapper">
                <table
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  class="el-table__header"
                  style="width: 1250px;"
                >
                  <colgroup>
                    <col name="el-table_4_column_13" width="76" />
                    <col name="el-table_4_column_14" width="220" />
                    <col name="el-table_4_column_15" width="294" />
                    <col name="el-table_4_column_16" width="220" />
                    <col name="el-table_4_column_17" width="220" />
                    <col name="el-table_4_column_18" width="220" />
                  </colgroup>
                  <thead class="">
                    <tr class="">
                      <th
                        colspan="1"
                        rowspan="1"
                        class="el-table_4_column_13  is-center   is-leaf"
                      >
                        <div class="cell">ID</div>
                      </th>
                      <th
                        colspan="1"
                        rowspan="1"
                        class="el-table_4_column_14     is-leaf"
                      >
                        <div class="cell">Titre</div>
                      </th>
                      <th
                        colspan="1"
                        rowspan="1"
                        class="el-table_4_column_15     is-leaf"
                      >
                        <div class="cell">Nombre de jours</div>
                      </th>
                      <th
                        colspan="1"
                        rowspan="1"
                        class="el-table_4_column_16  is-center   is-leaf"
                      >
                        <div class="cell">Nombre de participant</div>
                      </th>
                      <th
                        colspan="1"
                        rowspan="1"
                        class="el-table_4_column_17  is-right   is-leaf"
                      >
                        <div class="cell">Tarifs/J</div>
                      </th>
                      <th
                        colspan="1"
                        rowspan="1"
                        class="el-table_4_column_18  is-right   is-leaf"
                      >
                        <div class="cell">Actions</div>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>

              <div class="card-body">
                <table class="table  ">
                  <tbody style=" border-radius: 15px">
                    <tr
                      v-for="(formation, index) in formations"
                      :key="formation.id"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>{{ formation.title }}</td>
                      <td>{{ formation.nombreDeJours }}</td>
                      <td>{{ formation.tarifsParJours }} DH</td>
                      <td>{{ formation.nombreDeParticipant }}</td>
                      <td>
                        <span
                          ><i
                            @click="
                              showModalDetails = true;
                              forDetails(formation);
                            "
                            class="bx bxs-plus-square btn btn-info"
                            style="margin: 0 5px ; border-radius: 15px"
                          ></i
                        ></span>
                        <span
                          ><i
                            @click="
                              showModalEdit = true;
                              editFormationPart1(formation);
                            "
                            class="fa fa-edit btn btn-warning"
                            style="margin: 0 5px ; border-radius: 15px"
                          ></i
                        ></span>
                        <span
                          ><i
                            @click="deleteFormation(formation)"
                            class="bx bxs-trash btn btn-danger"
                            style="margin: 0 5px ; border-radius: 15px"
                          ></i
                        ></span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="card-footer">
                    <!---->
                    <div
                      class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
                    >
                      <div></div>
                      <ul
                        class="pagination pagination-no-border pagination-primary"
                      >
                        <li class="page-item prev-page">
                          <a aria-label="Previous" class="page-link">
                            <i
                              aria-hidden="true"
                              class=" fas fa-angle-double-left"
                            ></i
                          ></a>
                        </li>
                        <li class="page-item"><a class="page-link">1</a></li>
                        <li class="page-item"><a class="page-link">2</a></li>
                        <li class="page-item"><a class="page-link">3</a></li>
                        <li class="page-item active">
                          <a class="page-link">4</a>
                        </li>
                        <li class="page-item"><a class="page-link">5</a></li>
                        <li class="page-item page-pre next-page">
                          <a aria-label="Next" class="page-link">
                            <i
                              aria-hidden="true"
                              class=" fas fa-angle-double-right"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
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
                <div class="modal-dialog  modal-md" role="document">
                  <div class="modal-content" style=" border-radius: 10px">
                    <div class="modal-header" style=" border-radius: 10px">
                      <h5 class="modal-title">
                        <strong>Entrer votre formation</strong>
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true" @click="showModal = false"
                          >&times;</span>
                      </button>
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
                    <div class="modal-footer" style=" border-radius: 10px">
                      <button
                        class="btn btn-outline-info btn-block"
                        @click="showModalPage2 = true"
                        style=" border-radius: 10px"
                      >
                        Continuer vers le Plan
                      </button>
                      <button
                        class="btn btn btn-outline-secondary"
                        @click="showModal = false"
                        style=" border-radius: 10px"
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
                        <div class="card-header">
                          <div class="row"></div>
                          <label class="col-md-4">Title : </label>
                          <label class="col-md-8">{{ formations.title }}</label>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <label class="col-md-4">lieuFormation : </label>
                            <label class="col-md-8"
                              >{{ formations.lieuFormation }}
                            </label>
                          </div>
                          <div class="row">
                            <label class="col-md-4">public concerné : </label>
                            <label class="col-md-8"
                              >{{ formations.publicConcerne }}
                            </label>
                          </div>
                          <div class="row">
                            <label class="col-md-4">modalites : </label>
                            <label class="col-md-8"
                              >{{ formations.modalites }}
                            </label>
                          </div>
                          <div class="row">
                            <label class="col-md-4">dureeFormation : </label>
                            <label class="col-md-8"
                              >{{ formations.dureeFormation }}
                            </label>
                          </div>
                          <div class="row">
                            <label class="col-md-4">date : </label>
                            <label class="col-md-8"
                              >De {{ formations.dateDebut }} A {{ formations.dateFin }}
                            </label>
                          </div>
                          <div class="row">
                            <label class="col-md-4">horaire : </label>
                            <label class="col-md-8"
                              >De {{ formations.horaireDebut }} A {{ formations.horaireFin }}
                            </label>
                          </div>
                          <div class="row">
                            <label class="col-md-4"
                              >objectifs et contenus :
                            </label>
                            <p class="col-md-8">{{ formations.description }}</p>
                          </div>
                        </div>
                        <div class="card-footer">
                          <button
                            class="btn btn-primary"
                            @click="showModalDetails = false"
                            style=" border-radius: 15px"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer" style="border-radius: 15px">
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

    <footer class="footer">
      <div class="container-fluid">
        <ul class="nav"></ul>
        <div class="copyright">
          © 2021, made with <i class="fa-favorite"></i> by Us .
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MainSidebar from "@/layout/MainSidebar";
import MainNavbar2 from "@/layout/MainNavbar2";
import axios from "axios";
import { mapGetters } from "vuex";

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
