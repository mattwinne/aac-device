const cacheImages = async (srcArray: [...Item[]], firstIteration: boolean) => {
  const promises = await srcArray.map((src) => {
    if (firstIteration && src.folder) {
      cacheImages(src.folder, false);
    }
    return new Promise((resolve: Function, reject: Function) => {
      const img = new Image();
      img.src = `https://res.cloudinary.com/dscty5rng/image/upload/v1658520965/aac/${src.image}`;
      // If using local assets
      // img.src = require(`../assets/symbols/${src.image}`);
      img.onload = resolve();
      img.onerror = reject();
    });
  });

  await Promise.all(promises);
};

export default cacheImages;
