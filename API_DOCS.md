# API Documentation

## DummyJSON API Integration

### Products Endpoint

**Fetch All Products**
```
GET https://dummyjson.com/products
```

Returns array of products with:
- `id` - Product ID
- `title` - Product name
- `price` - Price in USD
- `thumbnail` - Product image URL
- `rating` - Product rating
- `stock` - Available quantity
- `description` - Product description

### Product Detail Endpoint

**Fetch Single Product**
```
GET https://dummyjson.com/products/{id}
```

Returns detailed product information including:
- Full product details
- Multiple images
- Customer reviews
- Specifications

## Error Handling

All API calls include:
- Error state management
- Loading indicators
- User-friendly error messages
- Retry capabilities

## Performance

- Lazy loading of product images
- Code splitting for components
- Caching strategies through Redux
