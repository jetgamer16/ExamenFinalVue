import axios from "axios"
export class grupoRepository{

    
async getAll(){
    const response = await axios.get("http://localhost:3000/grupos")
    return response.data
}

async getgrupos(id){
    const response = await axios.get("http://localhost:3000/grupos/"+id)
    return response.data
}

async addGroup(item){
    const response = await axios.post("http://localhost:3000/grupos",item)
    return response.data
}

async editGroup(item){
    const response = await axios.put("http://localhost:3000/grupos/"+item.id,item)
    return response.data
}

async changeUnitsItem(idProduct,newUnits){
    const response = await axios.patch("http://localhost:3000/grupos/"+idProduct,{units:newUnits})
    return response.data;
}

async delItem(id){
    const response = await axios.delete("http://localhost:3000/grupos/"+id)
    return response.data
}

}