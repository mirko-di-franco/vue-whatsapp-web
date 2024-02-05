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
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
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
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
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
              message: 'prova?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
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
              message: 'prova?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
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
              message: 'prova?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
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
              message: 'prova?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
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
              message: 'prova?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
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
              message: 'prova?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
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
              message: 'prova?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Frank',
          avatar: 'avatar_5.jpg',
          visible:true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'prova?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:30:55',
              message: 'Tutto fatto!',
              status: 'sent'
            }
          ],
        },
      ]
    }
  },

  methods:{

  }

}).mount('#app');