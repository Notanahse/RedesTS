import fs from 'fs';

let arr=new Array<Mascotas>();
function importDesJson(filePath:string){
    const contenido=fs.readFileSync(filePath,'utf-8');
    try{
        const jsonData=JSON.parse(contenido);
        console.log(jsonData);
        return jsonData;
    }catch(error){
        console.log(error);
    }
}
const data=importDesJson("Src/mascota.json");
data.forEach((item:{nombre:string,tipo:string})=>{
    const ms= new Mascotas(item.nombre,item.tipo);
    arr.push(ms);
});
