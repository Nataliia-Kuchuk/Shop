import axios from 'axios'

export const productServices = {
  getProducts: async () => {
       try {
         const {data} = await axios.get('/db/data.json')
         return data
       } catch (error) {
        console.log(error)
       }
  }
}
