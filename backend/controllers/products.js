import products from "../models/productModels.js";
import User from "../models/userModels.js";

export async function get_products(req, res) {
  try {
    let response
    if (req.role === "admin") {
      response = await products.findAll({
        include: [{
          model: User
        }]
      })
    } else {
      response = await products.findAll({
        where: {
          userId: req.userId
        },
        include: [{
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
  const { name, price } = req.body;
  try {
    await products.create({
      name: name,
      price: price,
      userId: req.userId
    })
    return res.status(201).json({ msg: "product created successfully" })
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}
export async function update_products(req, res) {
  try {
    const product = await products.update({
      where: {
        uuid: req.params.id
      }
    })
    if (!product) {
      return res.status(404).json({ msg: "data tidak ditemukan" })
    }
    const {name, price} = req.body
    if (req.role === "admin") {
    await products.update({name, price},{
      where: {
        id : product.id
      }
    })
    }else {
      await products.update({name, price},{
        where: {
          id : product.id
        }
      })
    }
  } catch (error) {

  }
}
export function delete_products(req, res) {

}
