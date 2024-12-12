import { useDispatch } from "react-redux";
import { addtocart } from "../redux/slices/cartSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./Product.css";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products"); //Api for get product data
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch products.");
      }
    };
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    await dispatch(
      addtocart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
      })
    );
  };
  return (
    <>
      <div className="cart-container1">
        <h2 className="cart-title1">My Products</h2>
        <div className="cart-products">
          {products.map((product) => (
            <div key={product.id} className="product-container1">
              <img
                src={product.image}
                alt={product.title}
                className="product-image1"
              />
              <div className="product-info1">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
