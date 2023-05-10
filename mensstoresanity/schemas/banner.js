export default {
    name: 'banner',
    title: 'Banner',
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