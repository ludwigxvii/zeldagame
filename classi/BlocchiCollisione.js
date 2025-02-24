class BlocchiCollisione {
    constructor(number){
        //i quattro lati della mappa normalmente caricati
        this.blocchiCollisione= [] 
        this.number = number
        switch (this.number){
            case 1:
        const lato_alto = new Collisione({
            position :{
            x: 0,
            y:0
        },
        position2 :{
            x: 974,
            y:108
        },
        })
        this.blocchiCollisione.push(lato_alto)
        const lato_sinistro = new Collisione({
            position :{
            x: 0,
            y:0
        },
        position2 :{
            x: 84,
            y:674
        },
        })
        this.blocchiCollisione.push(lato_sinistro)
        const lato_destro = new Collisione({
            position :{
            x: 950,
            y:0
        },
        position2 :{
            x: 1020,
            y:764
        },
        })
        this.blocchiCollisione.push(lato_destro)

        const lato_sotto = new Collisione({
            position :{
            x: 0,
            y:665
        },
        position2 :{
            x: 1022,
            y:764
        },
        })
        this.blocchiCollisione.push(lato_sotto)

        const blocco1 = new Collisione({
            position :{
            x: 243,
            y:77
        },
        position2 :{
            x: 405,
            y:163
        },
        })
        //blocchi da aggiungere alla mappa in base alla stanza
        this.blocchiCollisione.push(blocco1)

        const blocco2 = new Collisione({
            position :{
            x: 581,
            y:367
        },
        position2 :{
            x: 882,
            y:569
        },
        })
        this.blocchiCollisione.push(blocco2)

        const blocco3 = new Collisione({
            position :{
            x: 635,
            y:72
        },
        position2 :{
            x: 852,
            y:169
        },
        })
        this.blocchiCollisione.push(blocco3)
        const blocco4 = new Collisione({
            position :{
            x: 81,
            y:535
        },
        position2 :{
            x: 223,
            y:681
        },
        })
        this.blocchiCollisione.push(blocco4)
        break
        case 2:
            const lato_alto2 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 974,
                y:108
            },
            })
            this.blocchiCollisione.push(lato_alto2)
            const lato_sinistro2 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 84,
                y:674
            },
            })
            this.blocchiCollisione.push(lato_sinistro2)
            const lato_destro2 = new Collisione({
                position :{
                x: 950,
                y:0
            },
            position2 :{
                x: 1020,
                y:764
            },
            })
            this.blocchiCollisione.push(lato_destro2)
    
            const lato_sotto2 = new Collisione({
                position :{
                x: 0,
                y:665
            },
            position2 :{
                x: 1022,
                y:764
            },
            })
            this.blocchiCollisione.push(lato_sotto2)
    
            const blocco21 = new Collisione({
                position :{
                x: 145,
                y:71
            },
            position2 :{
                x: 408,
                y:147
            },
            })
            //blocchi da aggiungere alla mappa in base alla stanza
            this.blocchiCollisione.push(blocco21)
    
            const blocco22 = new Collisione({
                position :{
                x: 510,
                y:75
            },
            position2 :{
                x: 660,
                y:150
            },
            })
            this.blocchiCollisione.push(blocco22)
    
            const blocco23 = new Collisione({
                position :{
                x: 307,
                y:300
            },
            position2 :{
                x: 589,
                y:503
            },
            })
            this.blocchiCollisione.push(blocco23)
            
        break
        case 3:
            const lato_alto3 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 974,
                y:108
            },
            })
            this.blocchiCollisione.push(lato_alto3)
            const lato_sinistro3 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 84,
                y:674
            },
            })
            this.blocchiCollisione.push(lato_sinistro3)
            const lato_destro3 = new Collisione({
                position :{
                x: 950,
                y:0
            },
            position2 :{
                x: 1020,
                y:764
            },
            })
            this.blocchiCollisione.push(lato_destro3)
    
            const lato_sotto3 = new Collisione({
                position :{
                x: 0,
                y:665
            },
            position2 :{
                x: 1022,
                y:764
            },
            })
            this.blocchiCollisione.push(lato_sotto3)
    
            const blocco31 = new Collisione({
                position :{
                x: 603,
                y:275
            },
            position2 :{
                x: 879,
                y:463
            },
            })
            //blocchi da aggiungere alla mappa in base alla stanza
            this.blocchiCollisione.push(blocco31)
    
            const blocco32 = new Collisione({
                position :{
                x: 131,
                y:275
            },
            position2 :{
                x: 406,
                y:459
            },
            })
            this.blocchiCollisione.push(blocco32)
    
            const blocco33 = new Collisione({
                position :{
                x: 673,
                y:66
            },
            position2 :{
                x: 787,
                y:158
            },
            })
            this.blocchiCollisione.push(blocco33)
            const blocco34 = new Collisione({
                position :{
                x: 474,
                y:122
            },
            position2 :{
                x: 559,
                y:176
            },
            })
            this.blocchiCollisione.push(blocco34)
        break
        case 0:
            const lato_alto0 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 974,
                y:108
            },
            })
            this.blocchiCollisione.push(lato_alto0)
            const lato_sinistro0 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 84,
                y:674
            },
            })
            this.blocchiCollisione.push(lato_sinistro0)
            const lato_destro0 = new Collisione({
                position :{
                x: 950,
                y:0
            },
            position2 :{
                x: 1020,
                y:764
            },
            })
            this.blocchiCollisione.push(lato_destro0)
    
            const lato_sotto0 = new Collisione({
                position :{
                x: 0,
                y:665
            },
            position2 :{
                x: 1022,
                y:764
            },
            })
            this.blocchiCollisione.push(lato_sotto0)
    
            const blocco01 = new Collisione({
                position :{
                x: 176,
                y:80
            },
            position2 :{
                x: 603,
                y:146
            },
            })
            //blocchi da aggiungere alla mappa in base alla stanza
            this.blocchiCollisione.push(blocco01)
    
            const blocco02 = new Collisione({
                position :{
                x: 121,
                y:297
            },
            position2 :{
                x: 402,
                y:500
            },
            })
            this.blocchiCollisione.push(blocco02)
    
            const blocco03 = new Collisione({
                position :{
                x: 399,
                y:370
            },
            position2 :{
                x: 575,
                y:437
            },
            })
            this.blocchiCollisione.push(blocco03)
            
        break
    }
        }
        draw(){
            this.blocchiCollisione.forEach(element => {
                
                element.draw()
            });
        }
    }