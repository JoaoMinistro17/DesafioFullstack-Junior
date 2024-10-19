const { User } = require('../Models');

exports.updateUserProfile = async (req, res) => {
  const { id, name, email, password, id_department } = req.body;
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update user data with new data
  user.name = name;
  user.email = email;
  user.password = password;
  user.id_department = id_department;

  await user.save();

  // Return updated user data
  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    id_department: user.id_department,
  });
};