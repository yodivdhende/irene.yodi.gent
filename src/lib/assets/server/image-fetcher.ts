import { readdir }from 'node:fs/promises';

class ImageFetcher {
  public async getImagesForPage({dir, page, step}:
    {dir: string, page: number, step?: number} 
  ): Promise<Image[]> {
    const files  = await readdir(`src/lib/assets/images/${dir}`)
    console.log(files);
    return files;
  }
}

export const imageFetcher = new ImageFetcher();

export type Image = {
  src: string,
}