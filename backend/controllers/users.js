import User from "../models/userModels.js";
import argon2 from 'argon2';

export const getUser = async (req, res) => {
  const response = await User.findAll();
  if (response) {
    return res.status(200).json({ response })
  } else {
    return res.status(500).json({ msg: error.message });
  }
}

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        uuid: req.params.id
      }
    });
    return res.status(200).json(response)

  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}

export const createUser = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body;
  if (password !== confPassword)
    return res.status(400).json({ msg: "password dan confirm password nya tidak sama banh" });

  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role
    })
    return res.status(201).json({ msg: "account was created" })
  } catch (error) {
    return res.status(400).json({ msg: "gagal membuat akun" })
  }
}
export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!user) {
    return res.status(404).json({ msg: "User Tidak ditemukan" })
  }

  //jika user ditemukan req.body maka akan di distruct
  const { name, email, password, confPassword, role } = req.body;
  let hashPassword;

  if (password === "" || null) {
    hashPassword = user.password
  } else {
    hashPassword = await argon2.hash(password)
  }
  if (password !== confPassword) {
    return res.status(400).json({ msg: "password dan confirm password tidak sama" })
  }
  try {
    await User.update({
      name: name,
      email: email,
      password: hashPassword,
      role: role
    }, {
      where: {
        id: user.id
      }
    });

    res.status(200).json({ msg: "password telah diupdate" })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!user) return res.status(404).json({ msg: "user tidak ditemukan" })
  try {
    await User.destroy({
      where: {
        id: user.id
      }
    });
    res.status(200).json({ msg: "user deleted" })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}
