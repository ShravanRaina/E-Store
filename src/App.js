import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Category from './components/Category';
import { getCategories, getProducts } from './fetcher';
import CategoryProduct from './components/categoryProduct';

function App() {
  const [categories, setCategories] = useState({errorMessage:'', data:[]});
  const [products, setProducts] = useState({errorMessage:'', data:[]});

  useEffect(()=>{
    const fetchData = async() => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, []);

  const handleCategoryClick = id => {
    const fetchData = async() => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchData();
  }

  const renderCategories = () =>{
    
    return categories.data.map((c) => 
     <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)}/>
    );
  }

  const renderProducts= () =>{
    return products.data.map((p) => 
      <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
    )
  }


  return (
    <>
    <header>My Store</header>

    <section>
      <nav>
        {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
        {categories.data && renderCategories()}
      </nav>

      <main>
        {products.errorMessage && <div>Error: {products.errorMessage}</div>}
        <h1>Products: </h1>
        {products.data && renderProducts()}
      </main>

    </section>

    <footer>footer</footer>
    </>
  );
}

export default App;
