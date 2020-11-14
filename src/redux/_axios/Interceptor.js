/**
 * Manage request header and response
 * @author Eshan
 * @param axios
 */
export function setupAxios(axios) {
    //request interceptor
    axios.interceptors.request.use(
        config => {
            config.baseURL = "http://localhost:6969";
            return config;
        },
        error => {
            return Promise.resolve(error);
        }
    );

    //response interceptor
    axios.interceptors.response.use(
        response => {
            return response;
        },
        function (error) {
            return Promise.reject(error.response);

        }
    );
}

