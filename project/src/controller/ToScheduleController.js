import api from "./api";

export class ToScheduleController{
  errorMessage = 'Estamos com problemas internos, por favor tente novamente mais tarde.'
  toSchedule = async(form)=>{
    try{
      await api.post('/scheduling', form)
    }catch (err){
      throw new Error(err.response.data.message || this.errorMessage)
    }
  }

  getSchedule = async(idServico, idConsultor, data)=>{
    try{
      const res = await api.get('/scheduling')
      return res.data.schedules
    }catch (err){
      throw new Error(err.response.data.message || this.errorMessage)
    }
  }
}