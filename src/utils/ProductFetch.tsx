import NodeApi from "../NodeApi"

const ProductFetch = async (query: string) => {
    try {
        const response = await NodeApi.get(`/product/get/particular_product/${query}`)
        return response

    } catch (error) {
        console.error("Error : ", error)
    }
}

export default ProductFetch