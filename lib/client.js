import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({

    projectId: "1samqa3e",
    apiVersion: "2023-04-26",
    dataset: "production",
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source )=> builder.image(source)

