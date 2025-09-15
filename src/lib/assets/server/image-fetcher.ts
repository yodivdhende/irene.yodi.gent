import { readdir }from 'node:fs/promises';

class ImageFetcher {
  public async getImagesForPage({dir, page, step: stepInput}:
    {dir: string, page: number, step?: number} 
  ): Promise<Image[]> {
    const step = stepInput ?? 15;
    const files: string[]  = await readdir(`static/assets/images/${dir}`)
    return files.slice(page * step, (page * step) + step).map(src => ({name: src}));
  }
  
  public async getNext({dir, name}: {dir: string, name:string}) {
    const files: string[]  = await readdir(`static/assets/images/${dir}`)
    const index = files.indexOf(name) + 1;
    if (index >= files.length) return undefined;
    if (index < 0 ) return undefined;
    return files[index];
  }

  public async getPrevious({dir, name}: {dir: string, name:string}) {
    const files: string[]  = await readdir(`static/assets/images/${dir}`)
    const index = files.indexOf(name) -1;
    if (index < 0 ) return undefined;
    if (index >= files.length) return undefined;
    return files[index];
  }

}

export const imageFetcher = new ImageFetcher();

export type Image = {
  name: string,
}