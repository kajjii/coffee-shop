import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { productsApi } from "./productsApi";
import { productsApiKey } from "./productsApiKey";

export const useGetProductsQuery = ({ page, filter }) =>
  useQuery({
    queryKey: [productsApiKey.products, page, filter],
    queryFn: () => productsApi.getProducts({ page, filter }),
    placeholderData: keepPreviousData
  });

export const useGetProductQuery = id =>
  useQuery({
    queryKey: [productsApiKey.products, id],
    queryFn: () => productsApi.getProduct(id)
  });

  export const useGetBestProductQuery = () => 
  useQuery({
    queryKey: [productsApiKey.bestProducts],
    queryFn: productsApi.getBestProducts
  })
