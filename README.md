# Not Amazon - E-Commerce Website

This project is a pixel-perfect replica of a sample e-commerce website built with Next.js, Tailwind CSS, and NextUI. The project includes both a Home Page and a Product Page, with functionality to add items to a shopping cart and manage the cart state.

## Features

- **Home Page**: Displays a grid of products with images, names, prices, and an "Add to Cart" button.
- **Product Page**: Shows detailed product information including image, description, price, quantity selector, and "Add to Cart" button.
- **Navigation Bar**: A top navigation bar with the "Not Amazon" brand linking to the homepage and a cart icon displaying the number of items in the cart.
- **Cart Management**: The cart is managed using a global context, with real-time updates reflected in the navigation bar.
- **Fully Responsive**: The site is responsive and adapts to different screen sizes.

## Tech Stack

- **Frontend**: Next.js, NextUI, Tailwind CSS
- **Backend**: MikroORM with SQLite for database management
- **Deployment**: Vercel

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Initialize the database:

   ```bash
   yarn tsx src/scripts/initialize-db.ts
   yarn tsx src/scripts/seed-data.ts
   ```

4. Run the development server:

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is deployed on Vercel. The app automatically redeploys on every push to the `main` branch.

To deploy it yourself, follow these steps:

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/).
3. Import your GitHub repository into Vercel.
4. Vercel will automatically build and deploy your project.

## Project Structure

- `/app`: Contains the main application files, including the `layout.tsx` and pages.
- `/components`: Reusable React components, including the `NavBar` and `ProductCard`.
- `/context`: Context files for managing global state (e.g., CartContext).
- `/lib`: Utility functions, including database interaction methods.
- `/public`: Static assets such as images.
- `/styles`: Global styles and CSS files.
- `/scripts`: Scripts for initializing and managing the database.

## Environment Variables

If your project uses environment variables, add them to a `.env.local` file in the root directory. Example:

```plaintext
DATABASE_URL=your-database-url
```

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
