function createFocusImageService() {

  let focusImage: {
		dir: string;
		name: string;
	} | null = $state(null);

  return {
    get focusImage() { return focusImage},
    setFocusImage: (value: {dir: string, name: string} | null) => {
      focusImage = value;
    }
  }
}

export const focusImageService = createFocusImageService();
