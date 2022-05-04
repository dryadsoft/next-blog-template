export const getAllImgUrls = (content: string) =>
  content.match(/\!\[([^\]]+)\]\(([^\)]+)\)/g);

export const getImgUrl = (imgUrl: string) => imgUrl.match(/\]\(.+?\)/g);
