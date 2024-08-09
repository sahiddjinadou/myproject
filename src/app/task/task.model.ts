export class Task {
    uuid:string = ""; 
    description : string = "";
    isDone!:boolean ;

    constructor(uuid:string,description:string,isDone:boolean){
        this.uuid = uuid
        this.description = description ;
        this.isDone = isDone ; 
    }
}
// un modele n'est rien d'autre qu'une representation d'un objet