
export const getData = () => {
    return {
      type: "GET",
    }
  };

  export const putData = (id,data) => {
    return {
      type: "PUT",
      id,
      data
    }
  };
