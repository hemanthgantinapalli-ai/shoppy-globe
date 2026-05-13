# ShoppyGlobe - E-Commerce Application

A modern, fully-functional e-commerce web application built with **React**, **Vite**, **Redux Toolkit**, and **React Router**. ShoppyGlobe showcases best practices in React development including component structure, state management, API integration, and responsive design.

## 🌟 Features

### ✅ Completed Requirements

- **Component Structure** - Modular, reusable React components
  - App, Header, ProductList, ProductItem, ProductDetail, Cart, CartItem, Checkout, NotFound, Home
  
- **Data Fetching** - Using `useEffect` and custom hooks
  - `useFetchProducts` - Fetches all products from DummyJSON API
  - `useFetchProductDetail` - Fetches individual product details
  - Error handling and loading states

- **State Management** - Redux Toolkit for complex state
  - `cartSlice` - Add, remove, update product quantities
  - `searchSlice` - Filter products by search query
  - Centralized store configuration

- **React Routing** - Dynamic routes with React Router v6
  - `/` - Home (Product List)
  - `/product/:id` - Product Details (Dynamic routing)
  - `/cart` - Shopping Cart
  - `/checkout` - Checkout Page
  - `/*` - 404 Not Found Page

- **Performance Optimization**
  - Code splitting with `React.lazy` and `Suspense`
  - Lazy loading for component bundles
  - Lazy loading for images using HTML5 `loading="lazy"`

- **Event Handling**
  - Add to Cart functionality
  - Remove from Cart functionality
  - Increase/Decrease product quantity (min: 1)
  - Search/Filter products in real-time

- **Responsive Design**
  - Mobile-first approach
  - Breakpoints: 768px, 480px
  - Fully functional on desktop, tablet, and mobile devices

- **Styling**
  - Modern CSS with Flexbox and CSS Grid
  - Beautiful gradient design
  - Smooth animations and transitions
  - Proper indentation and comments

- **Error Handling**
  - API call failures handled gracefully
  - User-friendly error messages
  - Loading states during data fetching

- **Design Improvements**
  - Premium hero section with CTA and feature highlights
  - Modern card UI with lifted shadows and hover animations
  - Responsive layout optimized for desktop, tablet, and mobile
  - Enhanced checkout and cart visuals for a polished shopping flow

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hemanthgantinapalli-ai/shoppy-globe.git
cd shoppy-globe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
shoppyglobe/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── Checkout.jsx
│   │   └── NotFound.jsx
│   ├── pages/              # Page components
│   │   └── Home.jsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useFetchProducts.js
│   │   └── useFetchProductDetail.js
│   ├── redux/              # Redux store setup
│   │   ├── store.js
│   │   ├── cartSlice.js
│   │   └── searchSlice.js
│   ├── styles/             # CSS files
│   │   ├── Header.css
│   │   ├── ProductList.css
│   │   ├── ProductItem.css
│   │   ├── ProductDetail.css
│   │   ├── Cart.css
│   │   ├── CartItem.css
│   │   ├── Checkout.css
│   │   ├── NotFound.css
│   │   ├── Home.css
│   │   └── App.css
│   ├── App.jsx             # Main app component with routing
│   ├── App.css
│   ├── index.css           # Global styles
│   └── main.jsx            # React entry point
├── public/                 # Static assets
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite 8** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Redux Toolkit** - State management
- **React-Redux** - Redux binding for React
- **CSS3** - Styling with responsive design
- **DummyJSON API** - Product data

## 📋 Key Features Explained

### 1. Custom Hooks
- `useFetchProducts()` - Fetches all products with error handling and loading state
- `useFetchProductDetail(id)` - Fetches individual product details based on ID

### 2. Redux State Management
```javascript
// Cart State
- addToCart(product) - Add product to cart
- removeFromCart(id) - Remove product from cart
- increaseQty(id) - Increase product quantity
- decreaseQty(id) - Decrease product quantity (min: 1)
- clearCart() - Clear all items from cart

// Search State
- setSearch(query) - Update search query to filter products
```

### 3. Dynamic Routing
All routes are implemented using React Router v6 with dynamic parameters:
- Product detail pages use `:id` parameter for dynamic routing
- Routes support lazy loading with React.lazy and Suspense

### 4. Responsive Design
- **Desktop (1024px+)** - Full grid layout with 4+ columns
- **Tablet (768px - 1023px)** - 2-3 columns
- **Mobile (< 768px)** - 2 columns
- **Small Mobile (< 480px)** - Optimized single/double column layout

### 5. Performance Optimization
- **Code Splitting** - Components loaded on-demand with lazy loading
- **Image Lazy Loading** - Images load only when visible
- **Suspense Boundaries** - Loading fallback UI during component loading

## 🎨 UI/UX Highlights

- **Modern Gradient Design** - Purple gradient theme throughout
- **Smooth Animations** - Hover effects and transitions
- **Loading States** - Spinner animation during data fetching
- **Error Handling** - User-friendly error messages with 404 page
- **Order Summary** - Clear breakdown of costs with tax calculation
- **Cart Badge** - Real-time cart item counter in header

## 🧪 Testing the Application

1. **Browse Products** - View the product grid with images and prices
2. **Search Products** - Use the header search to filter products
3. **View Product Details** - Click on a product to see full details
4. **Add to Cart** - Add products to cart and see counter update
5. **Manage Cart** - Adjust quantities or remove items
6. **Checkout** - Fill form and place order
7. **Success Message** - See confirmation and auto-redirect
8. **404 Page** - Navigate to unknown route to see error page

## 📊 Code Quality

- ✅ Proper indentation and formatting
- ✅ Comprehensive comments explaining logic
- ✅ Functional and reusable components
- ✅ Proper prop usage and validation
- ✅ Error boundaries and error handling
- ✅ Responsive CSS with mobile-first approach

## 🔗 GitHub Repository

**Repository Link:** [Add your GitHub repository URL here after creating the repo]

## 📝 Commits

The project includes 25+ meaningful commits documenting the development process:
- Initial project setup
- Component creation and implementation
- Redux store and slices setup
- API integration and custom hooks
- Styling and responsive design
- Performance optimization (lazy loading)
- Bug fixes and improvements

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

ShoppyGlobe Development Team

## 🙏 Acknowledgments

- DummyJSON API for product data
- React, Vite, and Redux communities
- Modern web development best practices

---

**Built with ❤️ using React and Vite**
