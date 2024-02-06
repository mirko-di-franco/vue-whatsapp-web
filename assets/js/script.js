
const {createApp} = Vue;

const dt = luxon.DateTime;

createApp({

  data(){
    return{
      contacts: [
        {
          name: 'Alexander',
          avatar: 'avatar_1.jpg',
          visible:true,
          id: 0,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hey Alexander, come stai?',
              status: 'sent',
              dropDownMenu: false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao! Sto bene, grazie. E tu?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Anche io sto bene, grazie. Hai piani per il weekend?',
              status: 'sent',
              dropDownMenu: false,
            }
          ],
        },
        {
          name: 'Olivia',
          avatar: 'avatar_2.jpg',
          visible:true,
          id: 1,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: "Hey Olivia, hai visto l'ultimo episodio della tua serie preferita?",
              status: 'sent',
              dropDownMenu: false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: "Sì, l'ho visto. Non posso credere a quella svolta!",
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'È stato incredibile! Possiamo discuterne la prossima volta che ci vediamo?',
              status: 'sent',
              dropDownMenu: false,
            }
          ],
        },
        {
          name: 'Benjamin',
          avatar: 'avatar_3.jpg',
          visible:true,
          id: 2,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Salve Benjamin, hai sentito parlare della nuova serie TV?',
              status: 'sent',
              dropDownMenu: false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: "Sì, l'ho vista. È fantastica!",
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Wow, devo assolutamente iniziarla. Grazie per la raccomandazione!',
              status: 'sent',
              dropDownMenu: false,
            }
          ],
        },
        {
          name: 'Christopher',
          avatar: 'avatar_4.jpg',
          visible:true,
          id: 3,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Christopher, come è andata la tua giornata?',
              status: 'sent',
              dropDownMenu: false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'È stata piuttosto stressante, ma ora è meglio. Grazie.',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Capisco. Se hai bisogno di parlare, sono qui.',
              status: 'sent',
              dropDownMenu: false,
            }
          ],
        },
        {
          name: 'David',
          avatar: 'avatar_5.jpg',
          visible:true,
          id: 4,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao David, hai visto il nuovo film in uscita?',
              status: 'sent',
              dropDownMenu: false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: "Sì, l'ho visto. Mi è piaciuto molto!",
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ottimo, penso che andrò a vederlo questo fine settimana.',
              status: 'sent',
              dropDownMenu: false,
            }
          ],
        },
        {
          name: 'Ethan',
          avatar: 'avatar_6.jpg',
          visible:true,
          id: 5,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ehi Ethan, cosa pensi di fare domani sera?',
              status: 'sent',
              dropDownMenu: false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Non ho piani, perché?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Stavo pensando di organizzare una cena a casa mia. Vuoi unirti?',
              status: 'sent',
              dropDownMenu: false,
            }
          ],
        },
        {
          name: 'Frederick',
          avatar: 'avatar_7.jpg',
          visible:true,
          id: 6,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Frederick, come stanno andando le cose?',
              status: 'sent',
              dropDownMenu: false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Bene, grazie! E tu?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto tranquillo. Hai qualche progetto interessante in corso?',
              status: 'sent',
              dropDownMenu: false,
            }
          ],
        },
        {
          name: 'Gabriel',
          avatar: 'avatar_8.jpg',
          visible:true,
          id: 7,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: "Salve Gabriel, hai sentito parlare dell'evento in programma?",
              status: 'sent',
              dropDownMenu: false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Sì, ne ho sentito parlare. Sembra interessante!',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Stavo pensando di partecipare. Vuoi venire anche tu?',
              status: 'sent',
              dropDownMenu: false,
            }
          ],
        },
        {
          name: 'Henry',
          avatar: 'avatar_9.jpg',
          visible:true,
          id: 8,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Henry, hai qualche consiglio su libri da leggere?',
              status: 'sent',
              dropDownMenu: false,
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Certo, cosa ti interessa?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Sto cercando un buon romanzo. Qualcosa di avvincente.',
              status: 'sent',
              dropDownMenu: false,
            }
          ],
        },
      ],
      currentIndex: 0,
      newMsgStr: '',
      botAnswers: ['Si','No','Forse'],
      searchName: '',
    }
  },

  methods:{

    newMsg(){
      if(this.newMsgStr.length > 0){

        console.log(this.newMsgStr);
        const newMsg = {
          date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT),
          message: this.newMsgStr,
          status: 'sent'
        }
        this.contacts[this.currentIndex].messages.push(newMsg);
        this.newMsgStr = '';
        this.botAnswer()
      }
    },

    botAnswer(){
      setTimeout(() => {
        const newAnswer = {
          date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT),
          message: this.botAnswers[this.getRandomNumber()],
          status: 'received'
        }
        this.contacts[this.currentIndex].messages.push(newAnswer);
        console.log(this.botAnswers[this.getRandomNumber()])
      },1250)
    },

    getRandomNumber(){
      return Math.floor(Math.random() * this.botAnswers.length);
    },

    deleteMsg(index){
      this.contacts[this.currentIndex].messages.splice(index, 1)
    },

    toggleDropDownMenu(index) {
      this.showDropDownMenu(index);
      this.contacts[this.currentIndex].messages[index].dropDownMenu = !this.contacts[this.currentIndex].messages[index].dropDownMenu;
    },

    showDropDownMenu(index){
      this.contacts.forEach(contact => {
        contact.messages.forEach((message, i) => {
          if (i !== index) {
            message.dropDownMenu = false;
          }
        })
      });
    }

    

  },
  computed: {
    filterContacts() {
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.searchName.toLowerCase());
      });
      
    }

  }

  

}).mount('#app');