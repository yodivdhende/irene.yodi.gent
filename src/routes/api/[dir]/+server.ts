import { imageFetcher } from "$lib/assets/server/image-fetcher";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({request, params}) => {
    const dir = params.dir;
    if(typeof dir !== 'string') throw error(400, { message: `wrong route`});
    const {page} = await request.json();
    if(typeof page !== 'number') throw error(400, { message: `request doesn't has correct page variable`});
    const images = await imageFetcher.getImagesForPage({dir, page})
    return json({ images })
}
