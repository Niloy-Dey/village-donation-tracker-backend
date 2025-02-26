const User = require("../models/User");

// 🔐 Predefined backend password
const backendPassword = "aum-108";  

exports.loginUser = async (req, res) => {
    const { name, mobile, password } = req.body;

    try {
        if (password !== backendPassword) {
            return res.status(400).json({ message: "Invalid password!" });
        }

        // ✅ Save user if not already stored
        let user = await User.findOne({ mobile });

        if (!user) {
            user = new User({ name, mobile });
            await user.save();
        }

        res.json({ message: "Login successful!", user: { name: user.name, mobile: user.mobile } });

    } catch (error) {
        res.status(500).json({ message: "Server error!" });
    }
};
