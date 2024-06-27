export class Files {
    name : string 
    size : string
    formID : string
    url : string
    filesArray : Files[] 
    
    files(file : Files) {
        let i= 0
    if (this.filesArray[i]==null){
        this.filesArray[i]=file
    }
    }
}
