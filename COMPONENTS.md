# Components Documentation

## Component Hierarchy

```
App
├── Header (Navigation & Search)
├── MainContent
│   ├── Home (Landing Page)
│   │   └── ProductList
│   │       ├── ProductItem (Repeated)
│   │       └── ProductItem
│   ├── ProductDetail (Dynamic Route)
│   ├── Cart
│   │   └── CartItem (Repeated)
│   ├── Checkout (Order Form)
│   └── NotFound (404 Page)
└── Footer
```

## Component Descriptions

### Header.jsx
- Navigation links (Home, Cart)
- Search bar with Redux integration
- Cart item counter badge
- Logo/Brand

### ProductList.jsx
- Displays grid of products
- Implements search filtering
- Loading and error states
- Pagination support (future)

### ProductItem.jsx
- Single product card
- Add to cart button
- Price and discount display
- Rating information
- Image hover effects

### ProductDetail.jsx
- Full product information
- Multiple product images
- Customer reviews section
- Stock availability indicator
- Add to cart with quantity

### Cart.jsx
- Lists all cart items
- Order summary with totals
- Proceed to checkout button
- Continue shopping link

### CartItem.jsx
- Product image and name
- Price per unit
- Quantity controls (+/-)
- Remove from cart button
- Item total price

### Checkout.jsx
- Customer information form
- Address collection
- Order summary
- Place order button
- Success confirmation

### NotFound.jsx
- 404 error message
- Error details display
- Navigation links (Home, Back)
- Helpful suggestions

### Home.jsx
- Hero section
- Product list section
- Landing page content
