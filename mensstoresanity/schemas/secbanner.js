export default {

    name: 'secbanner',
    title: 'SecBanner',
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
            name: 'ButtonText',
            title: 'FirstButton',
            type: 'string',
        },
    
    ],
};