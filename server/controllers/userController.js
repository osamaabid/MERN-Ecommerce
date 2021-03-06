import User from "../models/User.js";

export const testUser = (req, res) => {
  res.send("user test successful");
};

export const getAllUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users =
      query === "true"
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

//returns total number of users per month
export const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // res.status(200).json(updatedUser);
    const { password, ...others } = updatedUser._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "user deleted" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
