import api from "./api";

export class SchedulingController {
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
      const res = await api.get(`/scheduling?data=${data}&idServico=${idServico}&idConsultor=${idConsultor}`)
      return res.data.schedules
    }catch (err){
      throw new Error(err.response.data.message || this.errorMessage)
    }
  }
}