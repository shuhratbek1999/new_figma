import { ref } from "vue";
import { defineStore } from "pinia";

export const SevimliProduct = defineStore("sevimli", {
    state: () => ({
        sevimliProduct: [],
        searchProductName: ""
    }),
    actions:{
        setSevimli(data){
            let item = data;
            item = {...item, heart: false}
            if(this.sevimliProduct.length > 0){
                let product = this.sevimliProduct.some(pro => pro.id == item.id)
                if(product){
                    let index = this.sevimliProduct.findIndex(item => item.id == item.id)
                    if(index){
                        this.sevimliProduct.splice(index, 1)
                    }
                }
                else{
                    item.heart = true;
                    this.sevimliProduct.push(item)
                }
            }
            else{
               this.sevimliProduct.push(data)
            }
        },
        DeleteCard(id) {
            
        }
    }
});
