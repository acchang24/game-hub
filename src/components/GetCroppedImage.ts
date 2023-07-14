// Returns a cropped image url given its path
export default function getCroppedImage(urlPath: string) {
  const target = "media/";
  const index = urlPath.indexOf(target) + target.length;
  return urlPath.slice(0, index) + "crop/600/400/" + urlPath.slice(index);
}
