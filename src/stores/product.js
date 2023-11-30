import { ref } from "vue";
import { defineStore } from "pinia";

export const Products = defineStore("productCard",{
    state: () => ({
      product: [],
      cardLengths: 0
    }),
    actions: {
        setProduct(products){
            let item = products;
        item = {...item, quantity: 1, soni: 1, narx: item.price}
        if(this.product.length > 0){
            let x = this.product.some(e => e.id == item.id)
             if(x){
                 let index = this.product.findIndex(x => x.id == item.id)
                 this.product.splice(index, 1)
             } else{
              this.product.push(item)
             }
            } else{
            this.product.push(item)
            }
        },
        ProductDecrement(item){
            if(this.product.length > 0){
                let bool = this.product.some(a => a.id == item.id)
                if(bool){
                    let index = this.product.findIndex(key => key.id == item.id)
                    this.product[index]['quantity']++;
                    this.product[index]['soni']++;
                    this.product[index]['narx'] = parseInt(this.product[index]['price']) * parseInt(this.product[index]['soni'])
                }
                else{
                    this.product.push(item)
                }
            }
            else{
                this.product.push(item)
            }
        },
        ProductIncrement(item){
            if(this.product.length > 0){
                let bool = this.product.some(a => a.id == item.id)
                if(bool){
                    let index = this.product.findIndex(key => key.id == item.id)
                    if(this.product[index]['quantity'] != 0){
                        this.product[index]['quantity']--;
                        this.product[index]['soni']--;
                        this.product[index]['narx'] = parseInt(this.product[index]['price']) * parseInt(this.product[index]['soni'])
                    }
                }
                else{
                    this.product.push(item)
                }
            }
            else{
                this.product.push(item)
            }
        },
        DeleteCard(id){
            let index = this.product.findIndex(item => item.id == id)
            this.product.splice(index, 1)
        },
        AllProductDelete(){
            this.product = []
        }
    },
    getters:{
        cardLength: (state) => {
            state.cardLengths = state.product.length
            return state.product.length
        }
    }
});

