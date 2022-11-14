import products from "../models/productModels.js";
import argon2 from 'argon2';
import User from "../models/userModels.js";

export async function get_products(req, res) {
  try {
    let response;
    if (req.role === "admin") {
      response = await products.findAll({
        include : [{
          model: User
        }]
      })
    }else {
      response = await products.findAll({
        where: {
          userId : req.userId
        },
        include : [{
          model: User
        }]
      })
    }
    res.status(200).json()
  } catch (error) {
    console.log(error);
  }
}
export async function get_products_by_Id(req, res) {

}
export async function create_products(req, res) {
  const {name, price} = req.body;
  try {
    await products.create({
      name: name,
      price : price,
      userId: req.userId
    })
    res.status(201).json({msg:"product created successfully"})
  } catch (error) {
    console.log(error);
  }
}
export function update_products(req, res) {

}
export function delete_products(req, res) {

}
