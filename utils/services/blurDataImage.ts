import axios, { AxiosResponse } from "axios";

export default async function blurDataImage (response: AxiosResponse) {
    const data = await Promise.all(
      response.data.map(async ( data : { url: string } ) => {
          const response = await axios.get('/api/blur', {
              params: {
                  url: data.url
              }
          })
          return {
            ...data,
            base64: response.data.base64,
          };
      })
    ).then((value) => value)

    let blurredResponse = response;
    blurredResponse.data = data;

    return blurredResponse;
  }