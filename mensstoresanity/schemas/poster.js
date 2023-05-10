export default {

    name: 'poster',
    title: 'Poster',
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
            name: 'desc',
            title: 'desc',
            type:'string',

        },

        {
            name: 'button',
            title: 'button',
            type: 'string',
        },
    
    ],
};