// import { useFetch } from "nuxt/app"




export default defineEventHandler(async (event) => {

    function getmembers(){
        let sum=0
        for (let index = 0; index < 5; index++) {
            sum = sum+index;
            
        }
        return sum
    }

    // const id = 1
    // const { data: product, pending, error } = await useFetch(() => `https://dummyjson.com/products/1`)

    return {
      member: 'what the hell2',
      exit: 'why is this here?',
      calc:  getmembers(),
      // product: product
      
    }
  })
  