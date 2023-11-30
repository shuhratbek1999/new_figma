<template>
    <div class="card">
    <div class="card_top">
        <div>
        <span class="kor">Sevimli</span>
        </div> 
        <div class="chiqish" @click="Tozalash">X</div>
    </div>
    <div v-if="LengthCard != 0" class="card_content">
        <div class="card_list" v-for="(item, index) in CardProduct" :key="index">
            <div class="img"><img :src="item.img" :alt="item.name"></div>
            <div class="card_name">{{item.name}}</div>
            <div class="card_price">{{item.price}} ₽</div>
            <div @click="Minus(item.id)" class="close">X</div>
        </div>
    </div>
    <div v-else class="card_pustoy">
        <div class="card_list">
            Sevimlida maxsulot mavjud emas
         </div>
   </div>
    <div class="card_footer">
        <div class="footer_top">
            <div class="footer_top_left allDelete" @click="AllDeleted">X Очистить все</div>
            <div class="footer_top_left allPrice"><span>Итого:</span> {{Price}} ₽</div>
        </div>
        <div class="footer_bottom">
            <div class="footer_bottom_left"></div>
            <div class="footer_bottom_left">
                <div class="footer_bottom_btns">Продолжить покупки</div>
                <div class="footer_bottom_btn">Купить</div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import {ref, computed, defineEmits} from "vue";
import {SevimliProduct} from '../stores/Sevimli';
let SevimliPinia = SevimliProduct();
const count = ref(0);
let AllPrice = ref(0);
const card_product = ref([])
const emit = defineEmits(["tozala"]);
const CardProduct = computed(() => {
   return SevimliPinia.sevimliProduct;
})
const Minus = (id) => {
    SevimliPinia.DeleteCard(id)
}
const Tozalash = () => {
    emit("tozala", {bool: false});
}
const AllDeleted = () => {
    SevimliPinia.AllProductDelete()
}
const Price = computed(() => {
    let price = 0;
    SevimliPinia.sevimliProduct.map(key => {
        price += (key['narx'] * 1)
    })
    return price;
})
const LengthCard = computed(() => {
    return SevimliPinia.sevimliLength;
})
</script>

<style scoped>
.chiqish{
    cursor: pointer;
}
.allPrice{
    font-size: 20px;
    font-weight: bold;
}
.allDelete{
    cursor: pointer;
}
.allPrice span{
    margin-right: 10px;
}
.card_pustoy{
    width: 100%;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
}
.footer_top, .footer_bottom{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
}
.footer_top{
    background-color: #FFFFFF;
}
.footer_bottom{
    background-color: #F7F8FB;
}
.footer_bottom .footer_bottom_left{
    display: flex;
    /* width: 50%; */
}
.footer_bottom_left .footer_bottom_btns{
    padding: 13px 20px 13px 20px;
    border: 1px solid #0696E7;
    border-radius: 5px;
    margin-right: 10px;
    color: #0696E7;
    cursor: pointer;
}
.footer_bottom_left .footer_bottom_btn{
    padding: 13px 50px 13px 50px;
    background-color: #0696E7;
    border-radius: 5px;
     cursor: pointer;
     color: white;
}
.btn_add{
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D7D9DC;
    border-radius: 5px;
    cursor: pointer;
}
.btn_add .minus{
    font-size: 40px;
}
.card_price{
    font-weight: bold;
}
.btn_add .soni{
    font-size: 20px;
    margin: 0px 8px;
}
.plus{
    font-size: 25px;
}
.card_content .card_list{
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid grey;
    margin: 10px 0px;
    /* background-color: yellow; */
}
.card_list .img{
    margin-left: 20px;
    border: 1px solid grey;
    border-radius: 10px;
}
.card_list .img img{
    width: 80px;
}
.card_name{
    width: 250px;
}
.card_list .close{
    margin-right: 20px;
    line-height: 25px;
    width: 25px;
    height: 26px;
    cursor: pointer;
    text-align: center;
    background-color: rgb(206, 203, 203);
    border-radius: 50%;
}
</style>