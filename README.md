INEKAS Photography photo print

This is a simple React web application for uploading photos, selecting print sizes, calculating prices, and simulating a payment flow. The application is mobile-friendly and uses Tailwind CSS for styling.

Features:

Upload up to 5 photos at a time.

Display uploaded photos as thumbnails.

Select print size from a dropdown menu (4×6, 5×7, 8×10).

Automatic price calculation based on the selected size.

Clear button to reset uploaded photos and selections.

Pay Now button to simulate payment.

Payment Complete screen showing a summary and option to place another order.

Fully responsive design suitable for mobile and desktop screens.

Tech Stack:

React (Vite or Create React App)

Tailwind CSS (via CDN or installed)

HTML5 / CSS3 / JavaScript

Getting Started:

Clone the repository to your local machine.

Navigate to the project directory.

Install dependencies by running npm install.

Start the development server:

For Vite: npm run dev

For Create React App: npm start

Open the application in your browser. For Vite, go to http://localhost:5173; for CRA, go to http://localhost:3000.

Usage:

Upload one to five photos using the file input.

Select the desired print size from the dropdown.

The total price will automatically update based on the number of photos and selected size.

Click the Pay Now button to simulate a payment.

After payment, the Payment Complete screen will appear showing the total paid.

Click Place Another Order to reset the app and start a new order.

You can also use the Clear button at any time to reset the uploaded photos and selection before payment.

Project Structure:

public/ - Contains public assets.

src/

App.jsx - Main component containing the photo upload and payment logic.

main.jsx or index.js - Entry point of the application.

index.css - Tailwind CSS styles if installed.

package.json - Project dependencies and scripts.

README.md - Project documentation.

Customization:

Modify the sizePrices object in App.jsx to change the pricing for different print sizes.

Adjust Tailwind classes such as max-w-md to change the responsive layout.

You can add more print sizes or change the currency as needed.

Deployment:

This project can be deployed easily using Vercel or Netlify.

Vercel: https://inekas-photography.vercel.app/


License:

This project is for demo purposes only. No real payment processing is implemented.