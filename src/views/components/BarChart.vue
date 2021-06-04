<script>
import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
  computed: {
    ...mapGetters(["bar"]),
    ...mapGetters(["form"])
  },
  mounted() {
    this.renderChart(
      {
        labels: this.form,
        datasets: [
          {
            label: "Nombre de jour",
            backgroundColor: "#1eae98",
            data: this.bar
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
