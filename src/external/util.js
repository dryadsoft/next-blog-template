const removeLineBreak = (str) => str.replace(/(\r\n|\n|\r)/gm, "");

const getHref = (strUrl, title) => {
  let aTaghref;
  let aTagTitle;
  strUrl = removeLineBreak(strUrl);
  if (strUrl && strUrl !== "") {
    aTaghref = strUrl.match(/<a.*?href="([^"]*)"[^>]*>/);
    aTagTitle = strUrl.match(/<a\s+.*?>(.*)<\/a>/);
  }
  return aTaghref && `[${title}${aTagTitle[1]}](${aTaghref[1]})`;
};

const isTag = (tagName, strTag) => {
  const regex = new RegExp(`<(\/${tagName}|${tagName})([^>]*)>`);
  return String(strTag).match(regex) ? true : false;
};

exports.removeLineBreak = removeLineBreak;
exports.getHref = getHref;
exports.isTag = isTag;
