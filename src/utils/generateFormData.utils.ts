const generateFormData = (object: Record<string, any>): FormData => {
  const formData = new FormData();

  Object.keys(object).forEach((key: string, keyIndex: number) => {
    if (object[key]) {
      if (typeof object[key] === "object") {
        // if it's an object
        if (Array.isArray(object[key])) {
          // if the determined object is in array form
          object[key].forEach((item: any, index: number) => {
            if (typeof item === "object") {
              if (item?.type) {
                // this is specifically for file objects....if there is any other with type key, then we'll have to think something else here
                formData.append(`${key}[${index}]`, item);
              } else {
                Object.keys(item).forEach((objectItemKey: string) => {
                  formData.append(
                    `${key}[${index}][${objectItemKey}]`,
                    item[objectItemKey]
                  );
                });
              }
            } else {
              // console.log('else condition')
              formData.append(`${key}[${index}]`, item);
            }
          });
        } else {
          // if it's not in array form
          if (typeof object[key] === "object") {
            Object.keys(object[key]).forEach((objectItemKey: string) => {
              // if (object[key][objectItemKey]) {
              formData.append(
                `orderList[${keyIndex}][${objectItemKey}]`,
                object[key][objectItemKey] ?? ""
              );
              // }
            });
          } else {
            formData.append(key, object[key]);
          }
        }
      } else {
        formData.append(key, object[key]);
      }
    } else if (object[key] === "") {
      formData.append(key, "");
    }
  });

  return formData;
};

export default generateFormData;
