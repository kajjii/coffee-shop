export const dataBaseDocumentsList = {
  beans: "beans"
};

class ServerHelpers {
    findItemById = id =>
    this.throttle(async () => {
      const beans = await this.fetchDataBase(dataBaseDocumentsList.beans);

      return beans.find(item => String(item.id) === id);
    }, 500);

  throttle = (fn, ms) => {
    if (typeof fn !== "function") {
      throw new Error("Первый аргумент должен быть функцией");
    }

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(fn());
      }, ms);
    });
  };

  filter = (data, filter) => {
    let filteredData = data;

    for (let key in filter) {
      const value = filter[key];

      const currentFilteredData = data?.filter(dataItem =>
        dataItem[key].toLowerCase().includes(value.toLowerCase())
      );
      filteredData = currentFilteredData;
    }
    return filteredData;
  };

  pagination = (page, perPage) => {
    const lastIndex = page * perPage;
    const firstIndex = lastIndex - perPage;
    return [firstIndex, lastIndex];
  };
}

class Server extends ServerHelpers {
  fetchDataBase = documentKey =>
    import("../../../../beansData.json").then(d => d[documentKey]);

  getData = ({ pagination, filter }) =>
    this.throttle(async () => {
      try {
        const beans = await this.fetchDataBase(dataBaseDocumentsList.beans);

        const { page, perPage } = pagination;

        const filteredProducts = this.filter(beans, filter);
        const productsAmount = filteredProducts?.length;
        const totalPages = Math.ceil(productsAmount / perPage);
        const slicedData = filteredProducts?.slice(
          ...this.pagination(Math.min(page, totalPages), perPage)
        );
        return { products: slicedData, totalPages };
      } catch (err) {
        reject(err);
      }
    }, 500);
}

export const server = new Server();


