const User = require('../models/User');

const updateUser = async (req, res) => {
    const userId = req.params.userId;
    const newData = req.body;

    try {
        // Find the user by ID and update the data
        const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    updateUser,
};
