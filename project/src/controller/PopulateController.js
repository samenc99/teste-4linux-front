import api from "./api";

export class PopulateController{
  populate = async()=>{
    try{
      await api.post('/populate')
    }catch (err){
      if(err.response.data.message.includes('Duplicate entry')){
        throw new Error('Base de dados já foi criada.')
      }
      throw new Error(err.response.data.message)
    }
  }
}