import { client } from "./sanity"

export const getClientData =async ()=>{

try {
    const data = await client.fetch(`
    *[_type == "threeDModel"]{
      ModelUrl,
        ThmUrl,
      title
    
      
    }
    `)

    return data
} catch (error) {
    console.log("data could not be loaded",error)
}



}





