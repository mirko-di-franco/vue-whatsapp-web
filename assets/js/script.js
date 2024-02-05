const {createApp} = Vue;

createApp({

  data(){
    return{
      contacts: [
        {
          name: 'Alexander',
          avatar: 'avatar_1.jpg',
          visible:true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hey Alexander, come stai?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao! Sto bene, grazie. E tu?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Anche io sto bene, grazie. Hai piani per il weekend?',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Olivia',
          avatar: 'avatar_2.jpg',
          visible:true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: "Hey Olivia, hai visto l'ultimo episodio della tua serie preferita?",
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: "Sì, l'ho visto. Non posso credere a quella svolta!",
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'È stato incredibile! Possiamo discuterne la prossima volta che ci vediamo?',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Benjamin',
          avatar: 'avatar_3.jpg',
          visible:true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Salve Benjamin, hai sentito parlare della nuova serie TV?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: "Sì, l'ho vista. È fantastica!",
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Wow, devo assolutamente iniziarla. Grazie per la raccomandazione!',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Christopher',
          avatar: 'avatar_4.jpg',
          visible:true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Christopher, come è andata la tua giornata?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'È stata piuttosto stressante, ma ora è meglio. Grazie.',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Capisco. Se hai bisogno di parlare, sono qui.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'David',
          avatar: 'avatar_5.jpg',
          visible:true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao David, hai visto il nuovo film in uscita?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: "Sì, l'ho visto. Mi è piaciuto molto!",
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ottimo, penso che andrò a vederlo questo fine settimana.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Ethan',
          avatar: 'avatar_6.jpg',
          visible:true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ehi Ethan, cosa pensi di fare domani sera?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Non ho piani, perché?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Stavo pensando di organizzare una cena a casa mia. Vuoi unirti?',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Frederick',
          avatar: 'avatar_7.jpg',
          visible:true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Frederick, come stanno andando le cose?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Bene, grazie! E tu?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto tranquillo. Hai qualche progetto interessante in corso?',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Gabriel',
          avatar: 'avatar_8.jpg',
          visible:true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: "Salve Gabriel, hai sentito parlare dell'evento in programma?",
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Sì, ne ho sentito parlare. Sembra interessante!',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Stavo pensando di partecipare. Vuoi venire anche tu?',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Henry',
          avatar: 'avatar_9.jpg',
          visible:true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Henry, hai qualche consiglio su libri da leggere?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Certo, cosa ti interessa?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Sto cercando un buon romanzo. Qualcosa di avvincente.',
              status: 'sent'
            }
          ],
        },
      ],
      currentIndex: 0,
    }
  },

  methods:{

  }

}).mount('#app');