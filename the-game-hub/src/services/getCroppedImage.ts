export const getCroppedImage = (url: string) => {
  if (url) {
    const target = "media/";
    const index = url.indexOf("media/") + target.length;
    const URL = url.slice(0, index) + "crop/600/400/" + url.slice(index);

    return URL;
  }
  
};
