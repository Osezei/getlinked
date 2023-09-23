import axios from 'axios';

//pass new generated access token here
//const token = localStorage.getItem('user-token')

//apply base url for axios
const API_URL = 'https://backend.getlinked.ai';

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.defaults.withCredentials = true;

axiosApi.defaults.headers.common['Authorization'] = `Bearer`;
axiosApi.defaults.headers.common['Accept'] = `application/json`;

axiosApi.interceptors.response.use(
  (response) => response,

  (error) => {
    console.log(error);

    if (
      error.response.status === 401 &&
      error.code === 'ERR_BAD_REQUEST' &&
      error.response.data.includes('Microsoft.IdentityModel.Tokens')
    ) {
      // if (localStorage.getItem("loggedUser")) {
      //   toast.info("Your session as expired", {
      //     position: "bottom",
      //   });
      // }

      localStorage.clear();
      window.location.href = `/login?info=session_expired&redirected_from=`;
    } else {
      return Promise.reject(error);
    }
  }
);

export async function post(url, data, config = {}) {
  return axiosApi.post(url, { ...data }, { ...config });
}
