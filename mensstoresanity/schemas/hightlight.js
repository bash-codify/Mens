export default {
    name: 'highlight',
    title: 'Highlight',
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
            name: 'name',
            title: 'name',
            type:'string',

        },
        {
            name: 'price',
            title: 'price',
            type: 'string',
        },
    
    ],
};