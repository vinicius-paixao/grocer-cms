import { IProduct } from "./product"

export interface ICollection {
  id: string,
  attributes: {
    title: string,
    init: string,
    end: string,
    products: IProduct[],
    banner: [
      {
        id: number,
        ext: string,
        url: string,
        hash: string,
        mime: string,
        name: string,
        size: number
        width: number,
        height: number,
        caption: null,
        formats: {
          large: {
            ext: string,
            url: string,
            hash: string,
            mime: string,
            name: string,
            path: null,
            size: number,
            width: number,
            height: number
          },
          small: {
            ext: string,
            url: string,
            hash: string,
            mime: string,
            name: string,
            path: null,
            size: number,
            width: number,
            height: number
          },
          medium: {
            ext: string,
            url: string,
            hash: string,
            mime: string,
            name: string,
            path: null,
            size: number,
            width: number,
            height: number
          },
          thumbnail: {
            ext: string,
            url: string,
            hash: string,
            mime: string,
            name: string,
            path: null,
            size: number,
            width: number,
            height: number
          }
        },
      }
    ],
  }
}
