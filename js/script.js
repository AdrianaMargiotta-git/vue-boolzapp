var app = new Vue ({
    el: '#root',
    data: {
      contatti: [
        //   visible per adesso mi serve solo per provare lo scroll sx
        {
          name: "Michele",
          avatar: "img/avatar_1.jpg",
          visible: true,
          messages: [
            {
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '15.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.59',
                status: 'sent'
            },
            {
                message:'Ciao amico tutto bene, che fai stasera?',
                date: '22/11/2020',
                time: '16.15',
                status: 'received'
            },
            {
                message:'Vado al cinema',
                date: '22/11/2020',
                time: '17.30',
                status: 'sent'
            }
          ]
        },
        {
          name: "Fabio",
          avatar: "img/avatar_2.jpg",
          visible: true,
          messages: [
            {
                message:'Ciao amico stasera andiamo in discoteca',
                date: '22/11/2020',
                time: '15.58',
                status: 'received'
            },
            {
                message:'Si dai, cosi ci dervertiamo un pò',
                date: '22/11/2020',
                time: '16.00',
                status: 'sent'
            },
            {
                message:'Ti passo a prendere alle 23',
                date: '22/11/2020',
                time: '16.16',
                status: 'received'
            },
            {
                message:'Ok a dopo',
                date: '22/11/2020',
                time: '16.30',
                status: 'sent'
            },
            {
                message:'Ti raccomando non farmi aspettare',
                date: '24/11/2020',
                time: '16.39',
                status: 'received'
            }
          ]
        },
        {
          name: "Samuele",
          avatar: "img/avatar_3.jpg",
          visible: true,
          messages: [
            {
                message:'Quale e il colmo per un mistero? ',
                date: '22/11/2020',
                time: '00.10',
                status: 'received'
            },
            {
                message:'Nessuno lo sa.',
                date: '22/11/2020',
                time: '00.20',
                status: 'sent'
            },
            {
                message:'Quale e il colmo per un pupazzo di neve?',
                date: '22/11/2020',
                time: '01.35',
                status: 'sent'
            },
            {
                message:'Avere i piedi gelati',
                date: '22/11/2020',
                time: '01.40',
                status: 'received'
            },
            {
                message:"No va be, eccone un'altra",
                date: '22/11/2020',
                time: '10.30',
                status: 'sent'
            },
            {
                message:"Qual'e il colmo per un polizziotto informatico?",
                date: '22/11/2020',
                time: '10.35',
                status: 'sent'
            },
            {
                message:'Non lo so',
                date: '22/11/2020',
                time: '12.00',
                status: 'received'
            },
            {
                message:'Mettere le sirene per arrestare il sistema.',
                date: '22/11/2020',
                time: '12.10',
                status: 'sent'
            }
            
          ]
        },
        {
          name: "Federico",
          avatar: "img/avatar_5.jpg",
          visible: true,
          messages: [
            {
                message:'Sono triste raccontami una barzelletta',
                date: '22/11/2020',
                time: '15.58',
                status: 'received'
            },
            {
                message:'Una lumachina esce per la prima volta da sola con le amiche. Il papa la saluta dicendo: "Mi raccomando, fai la bava!',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:"Quale e l'animale più dispettoso?",
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Il riccio. Per ogni riccio un capriccio',
                date: '22/11/2020',
                time: '16.58',
                status: 'received'
            },
            {
                message:'Si mette in tavola, si taglia e non  si mangia. Cosa e?',
                date: '22/11/2020',
                time: '17.50',
                status: 'sent'
            },
            {
                message:'Il mazzo di carte',
                date: '22/11/2020',
                time: '17.50',
                status: 'received'
            }
          ]
        },
        {
          name: "Patrizia",
          avatar: "img/avatar_6.jpg",
          visible: true,
          messages: [
            {
                message:"Sai qual'e il colmo per un pilota di Formula 1",
                date: '22/11/2020',
                time: '11.11',
                status: 'received'
            },
            {
                message:"Rifiutare l'auto aziendale",
                date: '22/11/2020',
                time: '11.14',
                status: 'sent'
            },
            {
                message:'Il capo che una veterinaria deve assolutamente avere nel suo armadio?',
                date: '22/11/2020',
                time: '11.50',
                status: 'sent'
            },
            {
                message:"Un paio di pantaloni a zampa d'elefante",
                date: '22/11/2020',
                time: '12.12',
                status: 'received'
            },
            {
                message:'Addio',
                date: '22/11/2020',
                time: '17.50',
                status: 'sent'
            }
          ]
        },
        {
          name: "Rudy",
          avatar: "img/avatar_7.jpg",
          visible: true,
          messages: [
            {
                message:'Due colleghi chiacchierano delle future vancanza. "Questa estate, per le vacanze parto a cavallo tra giugno e luglio!". Il suo collega risponde:"Wow io invece partirò in aereo"',
                date: '22/11/2020',
                time: '15.15',
                status: 'received'
            },
            {
                message:"I pesci detestano giocare a tennis. Non voglio mai avvicinarsi alla rete",
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:"Qual'e il ballo preferito dai cani?",
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Il can-can!',
                date: '22/11/2020',
                time: '16.58',
                status: 'received'
            },
            {
                message:"La pasta e il sugo hanno litigato. Sono entrambi all'arrabbiata!",
                date: '22/11/2020',
                time: '17.50',
                status: 'sent'
            }
          ]
        },
        {
          name: "Marco",
          avatar: "img/avatar_8.jpg",
          visible: true,
          messages: [
            {
                message:'Cosa fanno due patate che inciampano?',
                date: '22/11/2020',
                time: '08.58',
                status: 'received'
            },
            {
                message:'Un pasticcio',
                date: '22/11/2020',
                time: '09.10',
                status: 'sent'
            },
            {
                message:'Cosa hanno in comune un gallo e una montagna??',
                date: '22/11/2020',
                time: '09.15',
                status: 'sent'
            },
            {
                message:'La cresta',
                date: '22/11/2020',
                time: '09.30',
                status: 'received'
            },
            {
                message:"Sai qual'è il colmo per un fotografo?",
                date: '22/11/2020',
                time: '09.46',
                status: 'sent'
            },
            {
                message:"Andare a correre e non riuscire a fare uno scatto",
                date: '22/11/2020',
                time: '09.50',
                status: 'received'
            }
          ]
        }
      ],
      indice: 0, //si aggirona qualvolta clicchiamo su un contatto per farne apparire la chat (milestone 2)
      nuovoMessaggio: '', //legge-resetta l'input per l'inserimento(milestone 3)
      inputRicerca: '', //legge l'input per la ricerca (milestone 4)
      //Bonus cancellare un messaggio
      index: 0, //controllo eliminazione messaggio
      dropToggle: '', //visibilità toggle-menu
      check: -1, //visibilità toggle-menu
      dropDownPosition: 'null', //posizione dropdown
      checkDelBtn: false, //controllo eliminazione messaggio
    },
    methods: {
        //Milestone 2, al click sul contatto vengono generate le rispettive chat. Il v-for porta con se l'indice i che corrisponde al singolo contatto, esso poi verrà salvato in indice (riga 261)
        conversazione: function(i){
            this.indice = i;
        },
        //Milestone 3: stampo a schermo il messaggio scritto nell'input
        userIndice: function(indice){
            const date = new Date().toLocaleDateString();
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            let userMessaggio = {
                message: this.nuovoMessaggio,
                date,
                time,
                status: 'sent'
            };
            this.contatti[this.indice].messages.push(userMessaggio); //pusho
            this.nuovoMessaggio = '', //reset del campo input
            //ritardo di 1s per la risposta automatica
            setTimeout(() => {
                let rispostaAutomatica = ['Ok', 'Ci vediamo dopo', 'A presto!'];
                let rispostaRandom = Math.round(Math.random() * 2);
                let userMessaggio = {
                    message: rispostaAutomatica[rispostaRandom],
                    date,
                    time,
                    status: 'received'
                };
                this.contatti[this.indice].messages.push(userMessaggio); //pusho
            }, 1000);
        },
        //Milestone 4: cerco un contatto
        ricercaContatto: function(){
            this.contatti.forEach((item) => {
                if (item.name.toLowerCase().includes(this.inputRicerca)){
                    item.visible = true;
                } else {
                    item.visible = false;
                }
            });
        },
        //Bonus cancellare un messaggio
        toggleDropMenu: function(i){
            this.check = i;
            if (this.dropToggle == '') {
                this.dropToggle = 'active';
            } else if (this.dropToggle == 'active'){
                this.dropToggle = '';
            };
        },
        deleteMessage: function(i) {
            this.contatti[this.indice].messages.splice(this.index,1);
            this.checkDelBtn = false;
        }
    },
  })


/******************CONSEGNA ESERCIZIO******************/
  //Milestone 1 : realizzare il layout
  //Milestone 2:
    /*cliccando sulla chat vedo quella corrispondente;
    con header con dati relativi a chat attiva;
    relativa chat in elenco rimane selezionata*/
  //Milestone 3:
    /*l’utente può scrivere nel campo di input in basso;
    al click sull’invio succedono due cose:
        1. il mio msg viene inviato alla chat relativa;
        2. ottengo un msg di risposta automatico;
    il msg di risposta non è istantaneo, ma viene dopo 1 secondo;
    chiaramente tutto ciò viene agganciato/creato solo nella chat dove stò chattando; quindi ogni chat avrà i proprio messaggi.*/
  //Milestone 4:
    /*l’utente può scrivere nel campo di input a sx;
    alla digitazione, ad ogni carattere digitato il istato si aggiorna in base alla corrispondenza della stringa scritta nell’input, rispetto al nomeContatto/Chat*/