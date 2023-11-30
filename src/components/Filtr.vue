<template>
    <div class="filtr">
        <div class="filtr_content">
            <div class="filtr_title">
            <n-icon size="20">

            </n-icon>
            Фильтры
            </div>
            <div class="price">
                <n-collapse arrow-placement="right">
                    <template #header-extra>
                        <n-icon>
                            <KeyboardArrowDownTwotone />
                        </n-icon>
                    </template>
                    <n-collapse-item title="Цена, ₽" name="1">
                    <div class="price_input">
                        <n-input-number
                            v-model:value="price_input"
                            placeholder="от 500" 
                            :onUpdate:value="PriceFilter" 
                            style="width: 120px;"
                        />
                        <n-input v-model:value="price_input2" placeholder="от 12 500" />
                    </div>
                    </n-collapse-item>
                </n-collapse>
            </div>
            <div class="brend">
                <n-collapse arrow-placement="right">
                    <template #header-extra>
                        <n-icon>
                            <KeyboardArrowDownTwotone />
                        </n-icon>
                    </template>
                    <n-collapse-item title="Бренд" name="1">
                    <div class="bren">
                        <n-checkbox-group v-model:value="checks" @update:value="checkingValue">
                            <n-space style="display: flex; flex-direction: column;">
                                    <n-checkbox 
                                        value="svbony"
                                        label="SVBONY" />
                                    <n-checkbox  
                                        value="Levenhuk" 
                                        label="Levenhuk" />
                                    <n-checkbox 
                                        value="Celestron" 
                                        label="Celestron" />
                                    <n-checkbox  
                                        value="Discovery" 
                                        label="Discovery" />
                                    <n-checkbox  
                                        value="Meade" 
                                        label="Meade" />
                            </n-space>
                        </n-checkbox-group>
                        <n-gradient-text class="link" type="info">
                            Показать все
                        </n-gradient-text>
                    </div>
                    </n-collapse-item>
                </n-collapse>
            </div>
            <div class="diametr">
                <n-collapse arrow-placement="right">
                    <template #header-extra>
                        <n-icon>
                            <KeyboardArrowDownTwotone />
                        </n-icon>
                    </template>
                    <n-collapse-item title="Диаметр объектива, мм" name="1">
                    <div class="price_input">
                        <n-input v-model:value="diametr_count" placeholder="от 500" />
                        <n-input placeholder="от 12 500" />
                        <n-slider v-model:value="diametr_count" range :marks="marks" :step="10" />
                    </div>
                    </n-collapse-item>
                </n-collapse>
            </div>
            <div class="diametr">
                <n-collapse arrow-placement="right">
                    <template #header-extra>
                        <n-icon>
                            <KeyboardArrowDownTwotone />
                        </n-icon>
                    </template>
                    <n-collapse-item title="Материал оптики, мм" name="1">
                    <div class="price_input">
                        <n-input v-model:value="material_count" placeholder="от 500" />
                        <n-input placeholder="от 12 500" />
                        <n-slider v-model:value="material_count" range :marks="marks" :step="10" />
                    </div>
                    </n-collapse-item>
                </n-collapse>
            </div>
            </div>
    </div>
</template>

<script setup>
import {KeyboardArrowDownTwotone} from "@vicons/material";
import {filterStore} from "../stores/filter"
import {ref} from "vue";
const FilterStore = filterStore();
      const value = ref([50, 70]);
      const price_input = ref("100");
      const price_input2 = ref("100000");
      const diametr_count = ref([50, 70]);
      const material_count = ref([50, 70]);
      const marks =  ref({
              34: "от 500",
              75: "от 12 500"
            }
      );
      const cities = ref(false);
      const checks = ref(null);
      const checkingValue = (e) => {
            // console.log(checks, "checks")
            FilterStore.$state.brends = e;
      }
    //   const emits = defineEmits(["priceInput"])
const PriceFilter = () => {
    //   emits('priceInput', price_input, price_input2)
    FilterStore.$state.priceCount = price_input.value;
    FilterStore.$state.priceCount2 = price_input2.value;
}
// const props = defineProps(['price_input'])
</script>

<style scoped>
.filtr{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* margin: 0 auto; */
    /* border: 1px solid black; */
}
.filtr .filtr_content{
    border: 1px solid grey;
    padding: 10px;
    border-radius: 2px;
    margin-top: 28px;
}
.n-gradient-text{
    text-decoration: underline !important;
    color: blue;
}
.price .n-collapse-item, .brend, .diametr{
    width: 250px !important;
    /* border: 1px solid red !important; */
    margin: 10px 0px;
}
.n-collapse .n-collapse-item .n-collapse-item__header .n-collapse-item__header-main{
    width: 300px !important;
    justify-content: space-between !important;
}
.bren{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.price_input{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.price_input .n-input{
    width: 45%;
}
@media(max-width: 360px){
.filtr{
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 0 auto; */
    /* border: 1px solid black; */
}
.filtr .filtr_content{
    border: 1px solid grey;
    padding: 10px;
    border-radius: 2px;
    margin-top: 28px;
}
.n-gradient-text{
    text-decoration: underline !important;
    color: blue;
}
.price .n-collapse-item, .brend, .diametr{
    width: 250px !important;
    /* border: 1px solid red !important; */
    margin: 10px 0px;
}
.n-collapse .n-collapse-item .n-collapse-item__header .n-collapse-item__header-main{
    width: 300px !important;
    justify-content: space-between !important;
}
.bren{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.price_input{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.price_input .n-input{
    width: 45%;
}
}

@media(max-width: 412px){
.filtr{
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 0 auto; */
    /* border: 1px solid black; */
}
.filtr .filtr_content{
    border: 1px solid grey;
    padding: 10px;
    border-radius: 2px;
    margin-top: 8px;
}
.n-gradient-text{
    text-decoration: underline !important;
    color: blue;
}
.price .n-collapse-item, .brend, .diametr{
    width: 250px !important;
    /* border: 1px solid red !important; */
    margin: 10px 0px;
}
.n-collapse .n-collapse-item .n-collapse-item__header .n-collapse-item__header-main{
    width: 300px !important;
    justify-content: space-between !important;
}
.bren{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.price_input{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.price_input .n-input{
    width: 45%;
}
}
</style>