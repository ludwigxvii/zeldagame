class BlocchiCollisione {
    constructor(number){
        //i quattro lati della mappa normalmente caricati
        this.blocchiCollisione= [] 
        this.number = number
        switch (this.number){
            case 1:
        const primolato_alto = new Collisione({
            position :{
            x: 0,
            y:0
        },
        position2 :{
            x: 470,
            y:86
        },
        })
        this.blocchiCollisione.push(primolato_alto)
        const secondolato_alto = new Collisione({
            position :{
            x: 555,
            y:0
        },
        position2 :{
            x: 1024,
            y:86
        },
        })
        this.blocchiCollisione.push(secondolato_alto)
        const primolato_sinistro = new Collisione({
            position :{
            x: 0,
            y:0
        },
        position2 :{
            x: 105,
            y:327
        },
        })
        this.blocchiCollisione.push(primolato_sinistro)
        const secondolato_sinistro = new Collisione({
            position :{
            x: 0,
            y:414
        },
        position2 :{
            x:105,
            y:768
        },
        })
        this.blocchiCollisione.push(secondolato_sinistro)
        const primolato_destro = new Collisione({
            position :{
            x: 925,
            y:0
        },
        position2 :{
            x: 1024,
            y:326
        },
        })
        this.blocchiCollisione.push(primolato_destro)
        const secondolato_destro = new Collisione({
            position :{
            x: 925,
            y:415
        },
        position2 :{
            x: 1024,
            y:768
        },
        })
        this.blocchiCollisione.push(secondolato_destro)
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
            x: 317,
            y:297
        },
        position2 :{
            x: 761,
            y:439
        },
        })
        //blocchi da aggiungere alla mappa in base alla stanza
        this.blocchiCollisione.push(blocco1)

        const blocco2 = new Collisione({
            position :{
            x: 0,
            y:0
        },
        position2 :{
            x: 356,
            y:110
        },
        })
        this.blocchiCollisione.push(blocco2)

        const blocco3 = new Collisione({
            position :{
            x: 667,
            y:49
        },
        position2 :{
            x: 868,
            y:110
        },
        })
        this.blocchiCollisione.push(blocco3)
        break
        case 2:
            const lato_alto2 = new Collisione({
            position :{
            x: 0,
            y:0
        },
        position2 :{
            x: 1024,
            y:86
        },
        })
        this.blocchiCollisione.push(lato_alto2)
        
        const primolato_sinistro2 = new Collisione({
            position :{
            x: 0,
            y:0
        },
        position2 :{
            x: 105,
            y:327
        },
        })
        this.blocchiCollisione.push(primolato_sinistro2)
        const secondolato_sinistro2 = new Collisione({
            position :{
            x: 0,
            y:414
        },
        position2 :{
            x:105,
            y:768
        },
        })
        this.blocchiCollisione.push(secondolato_sinistro2)
            const lato_destro2 = new Collisione({
                position :{
                x: 925,
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
                x: 320,
                y:188
            },
            position2 :{
                x: 698,
                y:281
            },
            })
            //blocchi da aggiungere alla mappa in base alla stanza
            this.blocchiCollisione.push(blocco21)
    
            const blocco22 = new Collisione({
                position :{
                x: 112,
                y:448
            },
            position2 :{
                x: 302,
                y:687
            },
            })
            this.blocchiCollisione.push(blocco22)
    
            const blocco23 = new Collisione({
                position :{
                x: 732,
                y:448
            },
            position2 :{
                x: 1024,
                y:768
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
                y:65
            },
            })
            this.blocchiCollisione.push(lato_alto3)
            const lato_sinistro3 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 103,
                y:674
            },
            })
            this.blocchiCollisione.push(lato_sinistro3)
            const lato_destro3 = new Collisione({
                position :{
                x: 925,
                y:0
            },
            position2 :{
                x: 1020,
                y:764
            },
            })
            this.blocchiCollisione.push(lato_destro3)
    
            const primolato_sotto3 = new Collisione({
                position :{
                x: 0,
                y:665
            },
            position2 :{
                x: 470,
                y:764
            },
            })
            this.blocchiCollisione.push(primolato_sotto3)
            const secondolato_sotto3 = new Collisione({
                position :{
                x: 555,
                y:665
            },
            position2 :{
                x: 1024,
                y:768
            },
            })
            this.blocchiCollisione.push(secondolato_sotto3)
            const blocco31 = new Collisione({
                position :{
                x: 158,
                y:131
            },
            position2 :{
                x: 876,
                y:197
            },
            })
            //blocchi da aggiungere alla mappa in base alla stanza
            this.blocchiCollisione.push(blocco31)
    
            const blocco32 = new Collisione({
                position :{
                    x: 223,
                    y:212
                },
                position2 :{
                    x: 452,
                    y:255
            },
            })
            this.blocchiCollisione.push(blocco32)
    
            const blocco33 = new Collisione({
                
                position :{
                    x: 578,
                    y:212
                },
                position2 :{
                    x: 806,
                    y:255
            },
            })
            this.blocchiCollisione.push(blocco33)
            const blocco34 = new Collisione({
                position :{
                x: 235,
                y:443
            },
            position2 :{
                x: 799,
                y:504
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
                x: 1024,
                y:86
            },
            })
            this.blocchiCollisione.push(lato_alto0)
            const lato_sinistro0 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 100,
                y:674
            },
            })
            this.blocchiCollisione.push(lato_sinistro0)
            const primolato_destro0 = new Collisione({
                position :{
                x: 925,
                y:0
            },
            position2 :{
                x: 1024,
                y:326
            },
            })
            this.blocchiCollisione.push(primolato_destro0)
            const secondolato_destro0 = new Collisione({
                position :{
                x: 925,
                y:415
            },
            position2 :{
                x: 1024,
                y:768
            },
            })
            this.blocchiCollisione.push(secondolato_destro0)
    
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
                x: 462,
                y:54
            },
            position2 :{
                x: 558,
                y:180
            },
            })
            //blocchi da aggiungere alla mappa in base alla stanza
            this.blocchiCollisione.push(blocco01)
    
            const blocco02 = new Collisione({
                position :{
                x: 615,
                y:60
            },
            position2 :{
                x: 768,
                y:135
            },
            })
            this.blocchiCollisione.push(blocco02)
    
            const blocco03 = new Collisione({
                position :{
                x: 257,
                y:269
            },
            position2 :{
                x: 560,
                y:415
            },
            })
            this.blocchiCollisione.push(blocco03)
            
        break
        case 4:
            const lato_alto4 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 1024,
                y:1
            },
            })
            this.blocchiCollisione.push(lato_alto4)
            const lato_destro4 = new Collisione({
                position :{
                x: 1023,
                y:0
            },
            position2 :{
                x: 1024,
                y:767
            },
            })
            this.blocchiCollisione.push(lato_destro4)
            const lato_sinistro4 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 1,
                y:767
            },
            })
            this.blocchiCollisione.push(lato_sinistro4)
            const lato_sotto4 = new Collisione({
                position :{
                x: 0,
                y:767
            },
            position2 :{
                x: 1024,
                y:768
            },
            })
            this.blocchiCollisione.push(lato_sotto4)
            const blocco41 = new Collisione({
                position :{
                x: 774,
                y:0
            },
            position2 :{
                x: 975,
                y:183
            },
            })
            this.blocchiCollisione.push(blocco41)
            const blocco42 = new Collisione({
                position :{
                x: 879,
                y:117
            },
            position2 :{
                x: 912,
                y:236
            },
            })
            this.blocchiCollisione.push(blocco42)
            const blocco43 = new Collisione({
                position :{
                x: 548,
                y:69
            },
            position2 :{
                x: 623,
                y:373
            },
            })
            this.blocchiCollisione.push(blocco43)
            const blocco44 = new Collisione({
                position :{
                x: 876,
                y:512
            },
            position2 :{
                x: 1024,
                y:666
            },
            })
            this.blocchiCollisione.push(blocco44)
            const blocco45 = new Collisione({
                position :{
                x: 783,
                y:429
            },
            position2 :{
                x: 809,
                y:553
            },
            })
            this.blocchiCollisione.push(blocco45)
            const blocco46 = new Collisione({
                position :{
                x: 740,
                y:444
            },
            position2 :{
                x: 840,
                y:519
            },
            })
            this.blocchiCollisione.push(blocco46)
            const blocco47 = new Collisione({
                position :{
                x: 120,
                y:109
            },
            position2 :{
                x: 493,
                y:487
            },
            })
            this.blocchiCollisione.push(blocco47)
            const blocco48 = new Collisione({
                position :{
                x: 464,
                y:565
            },
            position2 :{
                x: 866,
                y:700
            },
            })
            this.blocchiCollisione.push(blocco48)
            const blocco49 = new Collisione({
                position :{
                x: 154,
                y:0
            },
            position2 :{
                x: 509,
                y:29
            },
            })
            this.blocchiCollisione.push(blocco49)
            break
            case 5:
            const lato_alto5 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 1024,
                y:40
            },
            })
            this.blocchiCollisione.push(lato_alto5)
            const lato_destro5 = new Collisione({
                position :{
                x: 984,
                y:0
            },
            position2 :{
                x: 1024,
                y:767
            },
            })
            this.blocchiCollisione.push(lato_destro5)
            const lato_sinistro5 = new Collisione({
                position :{
                x: 0,
                y:0
            },
            position2 :{
                x: 40,
                y:767
            },
            })
            this.blocchiCollisione.push(lato_sinistro5)
            const lato_sotto5 = new Collisione({
                position :{
                x: 0,
                y:728
            },
            position2 :{
                x: 1024,
                y:768
            },
            })
            this.blocchiCollisione.push(lato_sotto5)
            break
    }
        }
        draw(){
            this.blocchiCollisione.forEach(element => {
                
                element.draw()
            });
        }
    }