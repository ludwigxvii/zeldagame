class Sprite {
    //il numero frame è naturalmente 1 quindi se non specificato sono un frame singolo come lo sfondo
    constructor({ position, source, numero_frame = 1, animazioni, loop=true, }) {
        this.numero_frame=numero_frame
        this.position = position
        this.image= new Image()
        this.image.onload = () => {
            this.caricata = true
            //quelli ha singolo frame ovviamente hanno la loro width intera
            this.width = this.image.width / this.numero_frame
            this.height = this.image.height
        }
        this.image.src = source
        this.caricata = false
        this.frame_corrente = 0
        this.frame_veloce = 0
        this.divisore_frame = 12
        //carica dall'array animazioni passato al momento della creazione dello sprite le immagini varie
        this.animazioni= animazioni
        this.loop=loop
        if (this.animazioni){
            for (let key in this.animazioni){
                const image = new Image()
                image.src = this.animazioni[key].source
                this.animazioni[key].image = image
            }
            
        }
    }
    draw(){
        //questo if serve solo per evitare errori se l'immagine non è caricata
        if(!this.caricata) return
        const ritaglio = {
            position: {
            x: this.width * this.frame_corrente,
            y:0
            },
            width: this.width,
            height: this.height
        }
        //questo Drawimage è specifico per caricare uno specifico segmento dello sprite, dato che nel nostro progetto
        //i frame sono posti in ordine orizzontale in sezioni 100*100
        c.drawImage(this.image, ritaglio.position.x, ritaglio.position.y,
            ritaglio.width, ritaglio.height, this.position.x, this.position.y, this.width, this.height)
            this.updateFrames()

    }
    updateFrames(){
        //frame che aumenta ad ogni update del canvas
        this.frame_veloce++
        if(this.frame_veloce % this.divisore_frame === 0)
            {
                //il frame corrente viene aggiornato solo quando il frame veloce è divisibile per il divisore
                //per questo un numero altro rallenta l'animazione
                if(this.frame_corrente < this.numero_frame -1) this.frame_corrente++

        else if(this.loop) this.frame_corrente = 0
    }
        
        
    }
}