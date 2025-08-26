import { imageFetcher } from "$lib/assets/server/image-fetcher";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({request}) => {
    const {page} = await request.json();
    if(typeof page !== 'number') throw error(400, { message: `request doesn't has correct page varible`});
    const images = await imageFetcher.getImagesForPage({dir:'20250801', page})
    console.log('Post for images', { page, images})
    return json({ images })
}

export const GET: RequestHandler = async () => {
    return json({
      images: await imageFetcher.getImagesForPage({dir:'20250801', page: 0}),
    })
}