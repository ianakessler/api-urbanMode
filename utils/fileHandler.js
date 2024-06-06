import fs from "fs";

function readFileData(path){
    try{
        const data = fs.readFileSync(path, 'utf8');
        const res = JSON.parse(data);
        return res;
    } catch(Error){
        console.log(Error);
        return null;
    }
}

export {
    readFileData
}