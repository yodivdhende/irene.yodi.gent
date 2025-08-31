import type { PageLoad } from "./$types";

export const load: PageLoad = ({params}) => {
  const dir = params.dir;
  const name = params.name;
  console.log({ dir, name });
  return {
    imageUrl: `/src/lib/assets/images/${dir}/${name}`,
    dir,
  }
}

