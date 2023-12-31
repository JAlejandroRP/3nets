import { GetProductProps } from "../interfaces/GetProductProps";
import { GetProductResponse } from "../interfaces/GetProductResponse";
const API = process.env.REACT_APP_SERVER_ENDPOINT

export const getProducts = async (props: GetProductProps) => {
  try {
    const response = await fetch(API + '/product/get', {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props)
    })

    const responseData: GetProductResponse = await response.json();

    if (!responseData.success) throw responseData.error

    return {
      success: true,
      products: responseData.products
    }
  } catch (e: any) {
    return { success: false, error: e || e.message }
  }
}