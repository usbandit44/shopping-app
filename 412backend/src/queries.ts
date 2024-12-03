import { Request, Response } from "express";
import pool from "./db";

// Get all users
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query("SELECT * FROM Customer");
    console.log("test");
    res.status(200).json(result.rows);
  } catch (error) {
    console.log("test2");
    res.status(500).json({ error: (error as Error).message });
  }
};

// Get a user by ID
export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query("SELECT * FROM Customer");
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Create a new user
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Update a user by ID
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Delete a user by ID
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);
  try {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

//Sign Up Function
export const signUp = async (req: Request, res: Response): Promise<void> => {
  const { name, username, password, birthday, phoneNumber, address, type } =
    req.body;
  try {
    const id = Math.floor(Math.random() * 90000) + 10000;
    if (type === "buyer") {
      // Insert into Customer table
      const result = await pool.query(
        `INSERT INTO Customer (c_id, c_name, c_username, c_password, c_birthday, c_number, c_address)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING c_id`,
        [id, name, username, password, birthday, phoneNumber, address]
      );
      res.status(201).json({ id: result.rows[0].c_id });
    } else if (type === "seller") {
      // Insert into Seller table
      const result = await pool.query(
        `INSERT INTO Seller (s_id, s_name, s_username, s_password, s_birthday, s_number, s_address)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING s_id`,
        [id, name, username, password, birthday, phoneNumber, address]
      );
      res.status(201).json({ id: result.rows[0].s_id });
    } else {
      // Invalid type provided
      res
        .status(400)
        .json({ error: "Invalid type. Must be 'buyer' or 'seller'." });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
  const { username, password, type } = req.body;
  try {
    if (type === "buyer") {
      // Insert into Customer table
      const result = await pool.query(
        `SELECT c_id FROM Customer WHERE c_username = $1 AND c_password = $2`,
        [username, password]
      );
      res.status(201).json({ id: result.rows[0].c_id });
    } else if (type === "seller") {
      // Insert into Seller table
      const result = await pool.query(
        `SELECT s_id FROM Seller WHERE s_username = $1 AND s_password = $2`,
        [username, password]
      );
      res.status(201).json({ id: result.rows[0].s_id });
    } else {
      // Invalid type provided
      res
        .status(400)
        .json({ error: "Invalid type. Must be 'buyer' or 'seller'." });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const itemsForSale = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Insert into Customer table
    const result = await pool.query(
      `SELECT cl_id FROM Clothing WHERE cl_status = 'Available'`
    );
    res.status(201).json({ ids: result.rows });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const specifiedItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.body;
    const result = await pool.query(
      `SELECT cl_name, cl_size, cl_price, cl_image, cl_status FROM Clothing WHERE cl_id = $1`,
      [id]
    );
    res.status(201).json({ item: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const likedItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.body;
    const result = await pool.query(
      `SELECT l_item FROM Liked WHERE l_customerId = $1`,
      [id]
    );
    res.status(201).json({ item: result.rows });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const shoppingCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.body;
    const result = await pool.query(
      `SELECT ca_item FROM Cart WHERE ca_customerId = $1`,
      [id]
    );
    res.status(201).json({ item: result.rows });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, type } = req.body;
    if (type === "buyer") {
      // Insert into Customer table
      const result = await pool.query(
        `SELECT c_name, c_username, c_password, c_birthday, c_number, c_address FROM Customer WHERE c_id = $1`,
        [id]
      );
      res.status(201).json({ user: result.rows[0] });
    } else if (type === "seller") {
      // Insert into Seller table
      const result = await pool.query(
        `SELECT s_name, s_username, s_password, s_birthday, s_number, s_address FROM Seller WHERE s_id = $1`,
        [id]
      );
      res.status(201).json({ user: result.rows[0] });
    } else {
      // Invalid type provided
      res
        .status(400)
        .json({ error: "Invalid type. Must be 'buyer' or 'seller'." });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const sellerItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.body;
    const result = await pool.query(
      `SELECT cl_id FROM Clothing WHERE cl_sellerId = $1`,
      [id]
    );
    res.status(201).json({ item: result.rows });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const addLiked = async (req: Request, res: Response): Promise<void> => {
  try {
    const { c_id, cl_id } = req.body;

    // Check if the item is already liked by the customer
    const checkResult = await pool.query(
      `SELECT * FROM Liked WHERE l_customerId = $1 AND l_item = $2`,
      [c_id, cl_id]
    );

    if (checkResult.rowCount === 0) {
      // If not liked, append the item to the array
      await pool.query(
        `INSERT INTO Liked (l_customerId, l_item) VALUES ($1, $2)`,
        [c_id, cl_id]
      );
      res.status(201).json({ message: "Item added to liked list." });
    } else {
      res.status(200).json({ message: "Item already in liked list." });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const removeLiked = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { c_id, cl_id } = req.body;

    // Check if the item is already liked by the customer
    await pool.query(
      `DELETE FROM Liked WHERE l_customerId = $1 AND l_item = $2`,
      [c_id, cl_id]
    );
    res.status(201).json({ message: "Item removed to liked list." });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const addCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { c_id, ca_id } = req.body;

    // Check if the item is already liked by the customer
    const checkResult = await pool.query(
      `SELECT * FROM Cart WHERE ca_customerId = $1 AND ca_item = $2`,
      [c_id, ca_id]
    );

    if (checkResult.rowCount === 0) {
      // If not liked, append the item to the array
      await pool.query(
        `INSERT INTO Cart (ca_customerId, ca_item) VALUES ($1, $2)`,
        [c_id, ca_id]
      );
      res.status(201).json({ message: "Item added to cart list." });
    } else {
      res.status(200).json({ message: "Item already in cart list." });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const removeCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { c_id, ca_id } = req.body;

    // Check if the item is already liked by the customer
    await pool.query(
      `DELETE FROM Cart WHERE ca_customerId = $1 AND ca_item = $2`,
      [c_id, ca_id]
    );
    res.status(201).json({ message: "Item removed to cart list." });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const addItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, desc, size, price, image, s_id } = req.body;
    const id = Math.floor(Math.random() * 90000) + 10000;

    // Check if the item is already liked by the customer
    await pool.query(
      `INSERT INTO Clothing (cl_id, cl_sellerId, cl_name, cl_desc, cl_size, cl_price, cl_image, cl_status) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [id, s_id, name, desc, size, price, image, "Available"]
    );
    res.status(201).json({ message: "Item Added." });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, username, password, birthday, number, address, id, type } =
      req.body;

    if (type === "buyer") {
      // Insert into Customer table
      await pool.query(
        `UPDATE Customer SET c_name = $1, c_username = $2, c_password = $3, c_birthday = $4, c_number = $5, c_address = $6 WHERE c_id = $7`,
        [name, username, password, birthday, number, address, id]
      );
      res.status(201).json({ messages: "Customer Profile Updated." });
    } else if (type === "seller") {
      // Insert into Seller table
      await pool.query(
        `UPDATE Seller SET s_name = $1, s_username = $2, s_password = $3, s_birthday = $4, s_number = $5, s_address = $6 WHERE s_id = $7`,
        [name, username, password, birthday, number, address, id]
      );
      res.status(201).json({ messages: "Seller Profile Updated." });
    } else {
      // Invalid type provided
      res
        .status(400)
        .json({ error: "Invalid type. Must be 'buyer' or 'seller'." });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const buyItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body;

    // Check if the item is already liked by the customer
    await pool.query(`DELETE FROM Cart WHERE ca_customerid = $1`, [id]);
    res.status(201).json({ message: "Item Added." });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const sellItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body;

    // Check if the item is already liked by the customer
    await pool.query(`UPDATE Clothing SET cl_status = $1 WHERE cl_id = $2`, [
      "Sold Out",
      id,
    ]);
    res.status(201).json({ message: "Item Added." });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
