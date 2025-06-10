# 🍔 E-Commerce Food App – MERN Stack

A full-stack **E-Commerce Food Ordering Web Application** developed using the **MERN Stack**. This platform allows users to browse menus, place orders, manage their cart, and view order history, while admins can efficiently manage food items and user orders. Built with scalability, clean UI, and secure authentication in mind.

---

## ⚙️ Tech Stack

* **Frontend:** React.js (⚡ Vite), HTML5, CSS3, Bootstrap, TailwindCSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud)
* **Authentication:** JWT (JSON Web Tokens)
* **API Testing:** Postman
* **State Management:** React Context API
* **Tools:** VS Code, Git, GitHub

---
### 🖼️ Screenshots

![Home](screenshots/home.png)
![Menu](screenshots/menu.png)
![Cart](screenshots/cart.png)
![Admin](screenshots/admin.png)


## ✨ Key Features

### 👤 User Panel

* Register & Login securely with JWT
* Browse available food items by category
* Add items to cart and place orders
* View and manage past orders
* Mobile responsive user interface

### 🛠️ Admin Panel

* Admin authentication and secure access
* Add, edit, and delete food items
* Manage user orders and statuses
* Dashboard view for order management

---

## 🚀 Getting Started – Run Locally

### 🔽 Step 1: Clone the Repository

```bash
git clone https://github.com/Dipanshu-sandhaki/Ecommerce-Food-App-Using---MERN-Stack.git
cd Ecommerce-Food-App-Using---MERN-Stack
```

---

### 🧱 Step 2: Setup Backend (Express + MongoDB)

```bash
cd backend
npm install
```

#### Create a `.env` file in `/backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_key
```

#### Start Backend Server:

```bash
npm run server
```

The backend will start on `http://localhost:5000`.

---

### 🌐 Step 3: Setup Frontend (React + Vite)

```bash
cd ../my-food-app
npm install
```

#### Start React App:

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`.

---

## 📁 Project Structure

```
Ecommerce-Food-App-Using---MERN-Stack/
️
├── backend/                 # Express.js Server
│   ├── controllers/         # Route controllers
│   ├── middleware/          # JWT auth middleware
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express routes
│   ├── .env                 # Environment variables
│   └── server.js            # Server entry point
│
├── my-food-app/             # React Frontend (Vite)
│   ├── src/
│   │   ├── assets/          # Static assets
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Route pages (Home, Cart, etc.)
│   │   ├── context/         # Global state using Context API
│   │   └── App.jsx          # Root component
│
└── README.md                # Project documentation
```

## 🔧 Future Enhancements

* 🔐 Google & social auth
* 💳 Stripe / Razorpay payment integration
* 📟 Order receipt download as PDF
* 📲 Mobile app with React Native
* 📈 Analytics dashboard for admins

---

## 🙋‍♂️ About Me

**Dipanshu Sandhaki**
🎓 MCA Student | Full Stack Developer
🌍 Based in Dehradun, India
📬 [LinkedIn](https://www.linkedin.com/in/dipanshusandhaki)

---

## ⭐ Show Some Love

If you like this project:

* ⭐ Star this repo
* 🍝 Fork it and contribute
* 🐞 Submit issues or suggestions
* 📢 Share with others in the dev community!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE)
