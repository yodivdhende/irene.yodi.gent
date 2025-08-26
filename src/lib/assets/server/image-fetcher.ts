import { readdir }from 'node:fs/promises';

class ImageFetcher {
  public async getImagesForPage({dir, page, step: stepInput}:
    {dir: string, page: number, step?: number} 
  ): Promise<Image[]> {
    const step = stepInput ?? 15;
    const files: string[]  = await readdir(`src/lib/assets/images/${dir}`)
    return files.slice(page * step, (page * step) + step).map(src => ({name: src}));
  }
}

export const imageFetcher = new ImageFetcher();

export type Image = {
  name: string,
}