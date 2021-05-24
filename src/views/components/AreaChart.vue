<script>
import { Line } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  computed: {
    ...mapGetters(["areas1"])
  },
  mounted() {
    this.$store.dispatch("setAreas1");
    console.log("dbudbazdhzoidzj");
    console.log(this.areas1);

    this.gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

    this.renderChart(
        {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          datasets: [
            {
              label: "Nb de Participants",
              borderColor: "#FC2525",
              pointBackgroundColor: "white",
              borderWidth: 1,
              pointBorderColor: "red",
              backgroundColor: this.gradient,
              data: [100, 165, 80]
            },
            {
              label: "Tarifs",
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "blue",
              borderWidth: 1,
              backgroundColor: this.gradient2,
              data: [200, 65, 80]
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
