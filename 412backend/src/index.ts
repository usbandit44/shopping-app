import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  signUp,
  signIn,
  itemsForSale,
  specifiedItem,
  likedItems,
  shoppingCart,
  getProfile,
  sellerItems,
  addLiked,
  removeLiked,
  addCart,
  removeCart,
  addItems,
  updateProfile,
  buyItems,
  sellItem,
} from "./queries";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173", // Allow only this origin
  // You can add more options like methods, allowed headers, etc.
};

// Use CORS middleware with specified options
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes for CRUD operations
// app.get("/users", getUsers);
// app.get("/users/:id", getUserById);
// app.post("/users", createUser);
// app.put("/users/:id", updateUser);
// app.delete("/users/:id", deleteUser);
app.post("/signup", signUp);
app.post("/signin", signIn);
app.get("/forSale", itemsForSale);
app.post("/specifiedItemForSale", specifiedItem);
app.post("/likedItems", likedItems);
app.post("/shoppingCart", shoppingCart);
app.post("/profile", getProfile);
app.post("/sellerItems", sellerItems);
app.post("/addLiked", addLiked);
app.post("/removeLiked", removeLiked);
app.post("/addCart", addCart);
app.post("/removeCart", removeCart);
app.post("/addItem", addItems);
app.post("/updateProfile", updateProfile);
app.post("/buyItem", buyItems);
app.post("/sellItem", sellItem);

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
