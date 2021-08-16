import api from "./api";

export class ServiceConsultantController{
  errorMessage = 'Estamos com problemas internos, por favor tente novamente mais tarde.'
  getServicesConsultants = async()=>{
    try{
      const res = await api.get('/serviceConsultant')
      return res.data.servicosConsultores
    }catch (err){
      throw new Error(err.response.data.message || this.errorMessage)
    }
  }
}