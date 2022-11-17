import User from "../models/userModels.js";
import argon2 from "argon2";

export const login = async (req, res) => {
  const user = await User.findOne({
    //where adalah perintah untuk mencari data di database
    where: {
      email: req.body.email
    }
  });
  if (!user) return res.status(404).json({ msg: "user tidak ditemukan" })

  const match = await argon2.verify(user.password, req.body.password);
  
  if (!match) {
    return res.status(400).json({ msg: "wrong password" });
  }
  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ uuid, name, email, role });
}

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun anda" })
  }
  const user = await User.findOne({
    attributes: ['uuid', 'name', 'email', 'role'],
    //where adalah perintah untuk mencari data di database
    where: {
      uuid: req.session.userId
    }
  });
  if (!user) return res.status(404).json({ msg: " user tidak ditemukan" })
  res.status(200).json(user)

}

export const logout = async (req, res) => {
  req.session.destroy((error) => {
    if (error) return res.status(400).json({ msg: "tidak dapat logout" })
    return res.status(200).json({ msg: "logout berhasil" })
  })
}