import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({resolve, event}) => {
  if(event.url.pathname.startsWith('/api')){
    if(event.request.method === 'OPTIONS'){
      return new Response(null,{
        headers: {
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        }
      })
    }
  }

  const response = await resolve(event);
  if (event.url.pathname.startsWith('/api')){
    response.headers.append('Access-control-Allow-Origin', `*`)
  }

  return response;
}