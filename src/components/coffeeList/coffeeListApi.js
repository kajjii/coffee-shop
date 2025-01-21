// import { queryOptions } from "@tanstack/react-query";

// const BASE_URL = "http://localhost:3001/beans";

// const coffeeListApi = {
//     getAllBeans: ({page}, {signal}) => {
//         return fetch(`${BASE_URL}?_page=${page}&_per_page=6&_filter='coffee'`, 
//             {signal}).then(res => res.json())
//     },

//     getAllBeansQueryOptions: ({page}) => {
//         return queryOptions({
//             queryKey: ["beans", {page}],
//             queryFn: meta => coffeeListApi.getAllBeans({page}, meta),
//         })
//     }
// }

// export default coffeeListApi;