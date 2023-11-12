
import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Real Madrid Adidas shirt season 2023/24', price: 80 },
    { id: 2, name: 'Napoli shirt EA7 season 2023/24', price: 70 },
    { id: 3, name: 'Argentina World Cup Champions Adidas Shirt season 2022/23', price: 100 },
    { id: 4, name: 'Manchester City Puma shirt season 2023/24', price: 90 },
    { id: 5, name: 'FC Barcelona Nike shirt season 2023/24', price: 75 },
    { id: 6, name: 'France World Cup 2022 Nike shirt season 2022/23', price: 60 },
  ]);

  const [language, setLanguage] = useState('en');
  const [language1, setLanguage1] = useState('ka');

  
  const [searchTerm, setSearchTerm] = useState('');

  
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    console.log('Datos de registro:', registerData);

    setRegisterData({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  
    console.log('Datos de inicio de sesión:', loginData);
  
    setLoginData({
      email: '',
      password: '',
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>Football Online Store</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
          </ul>
        </nav>
      </header>

 
      <h2>Language Selector</h2>
      <select onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="ge">ქართული</option>
        <option value="de">Deustch</option>
      </select>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

  
      <h2>Product List</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>


      <h2>Product Search</h2>
      <input
        type="text"
        placeholder="Search Products"
        value={searchTerm}
        onChange={handleSearchChange}
      />

  
      <h2>Register Form</h2>
      <form onSubmit={handleRegisterSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={registerData.name}
            onChange={handleRegisterChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleRegisterChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleRegisterChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>

      <h2>Login Form</h2>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
