<script>
import { Line } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Line,
  computed: {
    ...mapGetters(["line"]),
    ...mapGetters(["form"])
  },
  mounted() {
    this.renderChart(
      {
        labels: this.form,
        datasets: [
          {
            label: "Revenu par formation",
            data: this.line,
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Revenu"
        }
      }
    );
  }
};
</script>
