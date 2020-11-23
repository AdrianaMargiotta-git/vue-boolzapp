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
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Ciao amico tutto bene, che fai stasera?',
                date: '22/11/2020',
                time: '16.58',
                status: 'received'
            },
            {
                message:'Vado al cinema',
                date: '22/11/2020',
                time: '17.50',
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
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '15.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '16.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '24/11/2020',
                time: '18.50',
                status: 'sent'
            }
          ]
        },
        {
          name: "Samuele",
          avatar: "img/avatar_3.jpg",
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
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '16.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '17.50',
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
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '15.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '16.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '17.50',
                status: 'sent'
            }
          ]
        },
        {
          name: "Patrizia",
          avatar: "img/avatar_6.jpg",
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
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '16.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
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
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '15.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '16.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
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
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '15.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '15.50',
                status: 'sent'
            },
            {
                message:'Ciao come va?',
                date: '22/11/2020',
                time: '16.58',
                status: 'received'
            },
            {
                message:'Tutto bene grazie e tu?',
                date: '22/11/2020',
                time: '17.50',
                status: 'sent'
            }
          ]
        }
      ],

    //   Milestone 2
      indice: 0,


    /*Milestone 3 per ricercare il nome di un contatto creare un @keyup nell'input. Prima bisogna creare:
    1.creare una variabile che legga l'input dell'utente, ovviamente all'inizio sarà vuoto
    2.creare un arry nel quale verrano inseriri i nomi trovati (all'inizio sarà vuoto)*/

    


    }
  })