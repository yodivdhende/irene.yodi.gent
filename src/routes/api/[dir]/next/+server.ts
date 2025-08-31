import { imageFetcher } from "$lib/assets/server/image-fetcher"
import { type RequestHandler, error, json } from "@sveltejs/kit"

export const POST: RequestHandler = async ({request, params}) => {
    const dir = params.dir;
    if(typeof dir !== 'string') throw error(400, { message: `wrong route`});
    const name = (await request.json())?.name;
    if(typeof name !== 'string') throw error(400, { message: `request doesn't has correct name variable`});
    return json({
      name: await imageFetcher.getNext({dir, name}),
    })
}