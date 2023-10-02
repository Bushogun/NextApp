import { setLoading } from '@/redux/features/productSlice';
import { apiUrl } from '@/api/index';
import type { AppDispatch } from "@/redux/store";

export async function fetchProductData(
    dispatch: AppDispatch,
    requestProducts: string,
    requestCategories: string,
    limit: string,
) {
  
  try {
    dispatch(setLoading(true));
    const [responseProducts , responseCategories] = await Promise.all([
        fetch(apiUrl+requestProducts),
        fetch(apiUrl+requestCategories),
    ]);

    if (!responseProducts.ok || !responseCategories.ok ) {
      throw new Error('Error al cargar productos o categorías');
    }

    const dataProducts = await responseProducts.json();
    const dataCategories = await responseCategories.json();

    dispatch(setLoading(false));
    return { products: dataProducts, categories: dataCategories };

  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
}
