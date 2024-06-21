const openExternalUrl = (url: string) => {
  window.open(url, "_blank");
};

const closeExternalUrl = (url: string) => {
  //need to be deleted
  window.open(url, "_blank");
};

export { openExternalUrl, closeExternalUrl }; //need to be modify
