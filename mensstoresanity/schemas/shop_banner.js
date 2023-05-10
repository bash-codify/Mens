export default {
    name: 'shop_banner',
    title: 'Shop_Banner',
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