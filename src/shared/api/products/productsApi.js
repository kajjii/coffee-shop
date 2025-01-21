import { server, dataBaseDocumentsList } from "../../api/server";

class ProductsApi {
  baseUrl = "http://localhost:3001/beans";
  perPage = 6;

  pagination = page => {
    const lastIndex = page * this.perPage;
    const firstIndex = lastIndex - this.perPage;
    return [firstIndex, lastIndex];
  };

  getProducts = ({ page, filter = {} }) => {
    function createFilter(filter) {
      const resultFilter = {};
      for (let key in filter) {
        const value = filter[key];
        if (!value) continue;

        resultFilter[key] = value;
      }

      return resultFilter;
    }

    return server.getData({
      pagination: { page, perPage: this.perPage },
      filter: createFilter(filter)
    });
  };

  getProduct = async id => {
    return await server.findItemById(id);
  };

  getBestProducts = () => {
    return server.fetchDataBase(dataBaseDocumentsList.beans);
  };
}

export const productsApi = new ProductsApi();
