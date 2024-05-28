import { reactive } from 'vue';

export const store = reactive({

  
  card_columns: [
    {
      load: true,
      cards: [
        { id: 1, url: '/src/assets/1.jpg', description: 'Image 1', tags: ['tag1', 'tag2'] },
        { id: 2, url: '/src/assets/2.jpg', description: 'Image 2', tags: ['tag3', 'tag4'] },
      ]
    },
    {
      load: true,
      cards: [
        { id: 3, url: '/src/assets/3.jpg', description: 'Image 3', tags: ['tag5', 'tag6'] },
        { id: 4, url: '/src/assets/4.png', description: 'Image 4', tags: ['tag7', 'tag8'] }
      ]
    },
    {
        load: true,
        cards: [
          { id: 5, url: '/src/assets/5.jpg', description: 'Image 5', tags: ['tag5', 'tag6'] },
          { id: 6, url: '/src/assets/6.jpg', description: 'Image 6', tags: ['tag2', 'tag6'] },

          
        ]
      },
  ]
});
