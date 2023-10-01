export interface StoreProduct {
    requestProducts: string;
    requestCategories: string;
    categories: [];
    products: [];
    selectCategory: string;
    selectProduct: string;
    selectLimit: "";
    loading: Boolean;
    error: string | null;
  }
  export const initialStateProductStore: StoreProduct = {
    requestProducts: "products",
    requestCategories: "products/categories",
    categories: [],
    products: [],
    selectCategory: "",
    selectProduct: "",
    selectLimit: "",
    loading: false,
    error: null,
  };
  