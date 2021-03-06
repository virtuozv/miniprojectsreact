const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
// router.get("/", (req, res) => {
//     res.send("hey its user route");
// })

//update user
router.put("/:id", async (req, res) => {
    if (req.params.id === req.body.userId || req.user.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.getSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated.");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can update only your account");
    }
});
//get user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc
        res.status(200).json(other);
    } catch (err) {
        return res.status(500).json(err);
    }
});
//create user
//delete user
router.delete("/:id", async (req, res) => {
    if (req.params.id === req.body.userId || req.user.isAdmin) {
        try {
            const user = await User.findByIdAndRemove(req.params.id);
            res.status(200).json("Account has been deleted.");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can delete only your account!");
    }
});
//follow a user
router.put("/:userId/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.userId);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: [req.body.userId] } })
                await currentUser.updateOne({ $push: { followings: [req.body.userId] } })
                res.status(200).json("user has been followed");
            } else {
                res.status(403).json("you already follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant follow yourself!");
    }
})
//unfollow a user
router.put("/:userId/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.userId);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: [req.body.userId] } })
                await currentUser.updateOne({ $pull: { followings: [req.body.userId] } })
                res.status(200).json("user has been unfollowed");
            } else {
                res.status(403).json("you dont followthis user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant unfollow yourself!");
    }
})

module.exports = router;