export default {

    name: 'shop',
    title: 'shop',
    type: 'document',
    fields: [

        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of:[{
                type: 'image',
            }],
            options: {
                hotspot: true,
            },
        },
        
        {
            name: 'productname',
            title: 'name',
            type:'string',

        },

        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'string',
        },
        {
            name: 'details',
            title: 'details',
            type: 'string',
        },
    
    ],
};