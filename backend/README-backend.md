# ShoppyGlobe Backend

This backend implements the ShoppyGlobe API using Node.js, Express, MongoDB, and JWT authentication.

## Features

- `GET /api/products` - fetch all products
- `GET /api/products/:id` - fetch a single product by ID
- `POST /api/cart` - add a product to the logged-in user's cart
- `PUT /api/cart/:id` - update quantity for a cart item
- `DELETE /api/cart/:id` - remove a product from the cart
- `POST /api/register` - register a new user
- `POST /api/login` - login and receive a JWT token
- All cart routes are protected by JWT authentication

## Setup

1. Copy `.env.example` to `.env`.
2. Fill in:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `PORT` (optional)
3. Install dependencies:

```bash
cd shoppyglobe/backend
npm install
```

4. Seed sample products:

```bash
npm run seed
```

5. Start the server:

```bash
npm run dev
```

## API Testing

Use ThunderClient, Postman, or another REST client.

1. Register: `POST /api/register`
   - body: `{ "name": "Jane", "email": "jane@example.com", "password": "password123" }`
2. Login: `POST /api/login`
   - body: `{ "email": "jane@example.com", "password": "password123" }`
3. Use the returned token in the `Authorization` header:
   - `Authorization: Bearer <token>`
4. Fetch products: `GET /api/products`
5. Fetch a product: `GET /api/products/:id`
6. Add to cart: `POST /api/cart`
   - body: `{ "productId": "<id>", "quantity": 2 }`
7. Update cart item: `PUT /api/cart/:id`
   - body: `{ "quantity": 3 }`
8. Delete cart item: `DELETE /api/cart/:id`
## MongoDB Screenshots

A MongoDB Atlas screenshot showing the connected cluster and database state is included with the project submission to satisfy the backend documentation requirement.
## Notes

- The backend responds with JSON and includes error handling for missing fields, invalid IDs, unauthorized access, and not found resources.
- Cart items are scoped to the authenticated user.
- Use `GET /api/cart` to inspect the current user's cart.
