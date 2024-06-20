import axios from "axios"
export class alumnoRepository{

    
async getAll(){
    const response = await axios.get("http://localhost:3000/alumnos")
    return response.data
}

    
async getAlumnosById(id){
    const response = await axios.get("http://localhost:3000/alumnos/"+id)
    return response.data
}
async getAlumnosByGroup(id){
    const response = await axios.get("http://localhost:3000/alumnos?grup="+id)
    return response.data
}

async addAlumnos(item){
    const response = await axios.post("http://localhost:3000/alumnos",item)
    return response.data
}

async editAlumnos(item){
    const response = await axios.put("http://localhost:3000/alumnos/"+item.id,item)
    return response.data
}

async changeAlumnGroup(idAlumn,newGrup){
    const response = await axios.patch("http://localhost:3000/alumnos/"+idAlumn,{grup:newGrup})
    return response.data;
}

async delItem(id){
    const response = await axios.delete("http://localhost:3000/alumnos/"+id)
    return response.data
}

}