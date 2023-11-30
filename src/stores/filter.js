import { ref } from "vue";
import { defineStore } from "pinia";

export const filterStore = defineStore("filter", () => {
  let priceCount = ref(0),
  priceCount2 = ref(100000);
  let searchPro = ref("");
  let brends = ref(null);
  let ids = ref(null)
  return { priceCount, priceCount2,searchPro, brends, ids };
});
