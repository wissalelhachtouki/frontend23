<script>
import { Pie } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Pie,
  computed: {
    ...mapGetters(["pie"])
  },
  mounted() {
    this.renderChart(
        {
          labels: ["organisation", "deroulement", "efficacite"],
          datasets: [
            {
              backgroundColor: ["#874492", "#F74975", "#FFBF00"],
              data: this.pie
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
