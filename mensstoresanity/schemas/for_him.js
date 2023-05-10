export default {

    name: 'for_him',
    title: 'For_Him',
    type: 'document',
    fields: [

        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        
        {
            name: 'Desc',
            title: 'Desc',
            type:'string',

        },

        {
            name: 'price',
            title: 'price',
            type: 'string',
        },
        {
            name: 'button',
            title: 'button',
            type: 'string',
        },
    
    ],
};