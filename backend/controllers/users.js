import User from "../models/userModels.js";
import argon2 from 'argon2';
import { response } from "express";

export async function get_user(req, res) {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
export async function get_user_by_Id(req, res) {
  try {
    const response = await User.findOne({
      where: {
        uuid: req.params.id
      }
    });
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
export async function createUser(req, res) {
  const { name, email, password, confpassword, role } = req.body;
  if (password !== confpassword) {
    return res.status(400).json({ msg: "Password dan confirm password tidak cocok" });
  }
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword
    })
  } catch (error) {

  }
}
export function update_user(req, res) {

}
export function deleteUser(req, res) {

}
