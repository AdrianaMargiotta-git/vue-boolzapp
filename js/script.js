var app = new Vue ({
    el: '#root',
    data: {
      contatti: [
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
                message:"Qual'e il colmo per un polizziotto informatico? &#128512",
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
            },
            {
                message:'&#128514',
                date: '22/11/2020',
                time: '12.15',
                status: 'sent'
            },
            {
                message:'&#129315',
                date: '22/11/2020',
                time: '12.30',
                status: 'received'
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

    //   Milestone 2
    /*cliccando sulla chat vedo quella corrispondente;
    con header con dati relativi a chat attiva;
    relativa chat in elenco rimane selezionata*/
      indice: 0, //si aggirona qualvolta clicchiamo su un contatto per farne apparire la chat


    /*Milestone ? per ricercare il nome di un contatto creare un @keyup nell'input. Prima bisogna creare:
    1.creare una variabile che legga l'input dell'utente, ovviamente all'inizio sarà vuoto
    2.creare un arry nel quale verrano inseriri i nomi trovati (all'inizio sarà vuoto)*/

    },
    methods: {
        //al click sul contatto vengono generate le rispettive chat. Il v-for porta con se l'indice i che corrisponde al singolo contatto, esso poi verrà salvato in indice (riga 261)
        conversazione: function(i){
            this.indice = i;
        }
    }
  })