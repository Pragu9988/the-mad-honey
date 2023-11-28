export const replaceBaseUrl = (url?: any) => {
  return url?.replace(process.env.NEXT_PUBLIC_WORDPRESS_URL, "");
};

export const convertBase64 = (file?: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader?.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader?.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
