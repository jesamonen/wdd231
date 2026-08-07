const DATA_PATH = "./data/services.json";
export async function getServices(){
    try{
        const response = await fetch(DATA_PATH);
        if(!response.ok){
            throw new Error("File failed to load");
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
    return [];
}