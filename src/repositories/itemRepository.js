import axios from "axios"
export class itemRepository{

    
async getAll(){
    const response = await axios.get("http://localhost:3000/XXXX")
    return response.data
}

async getItemBySomething(id){
    const response = await axios.get("http://localhost:3000/XXXX->item?YYYY->something="+id)
    return response.data
}
async getItemById(id){
    const response = await axios.get("http://localhost:3000/XXXX/"+id)
    return response.data
}


async addItem(item){
    const response = await axios.post("http://localhost:3000/XXXX",item)
    return response.data
}

async editItem(item){
    const response = await axios.put("http://localhost:3000/XXXX/"+item.id,item)
    return response.data
}

async changeUnitsItem(idProduct,newUnits){
    const response = await axios.patch("http://localhost:3000/XXXX/"+idProduct,{units:newUnits})
    return response.data;
}

async delItem(id){
    const response = await axios.delete("http://localhost:3000/XXXX/"+id)
    return response.data
}

}