const User = require("@models").User;
const JobSeeker = require("@models").JobSeeker;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthenticationController {
  static async login(req, res) {
    if (!req.body.email || !req.body.password || req.body.password.length < 8) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: "Email cant be null, atau Password must 8 character",
      });
    } else {
      try {
        const { email, password } = req.body;
        const data = await User.findOne({
          where: { email: email },
          include: [
            {
              model: JobSeeker,
            },
          ],
        });
        if (!data) {
          return res.status(400).json({
            code: 400,
            success: false,
            message: "Email not found",
          });
        } else {
          const isPasswordValid = await bcrypt.compare(password, data.password);
          if (!isPasswordValid) {
            return res.status(400).json({
              code: 400,
              success: false,
              message: "Password incorrect",
            });
          }
          const token = jwt.sign({ user_id: data.id }, process.env.JWT_SECRET);

          res.status(200).json({
            code: 200,
            succcess: true,
            message: "Login Successfully",
            data: {
              user_id: data.id,
              name: data.JobSeekers[0].fullname,
              email: data.email,
              profile_id: data.JobSeekers[0].id,
              token: token,
            },
          });
        }
      } catch (err) {
        return res.status(500).json({
          error: err.message,
        });
      }
    }
  }
  static async register(req, res) {
    if (!req.body.email || !req.body.password || !req.body.name) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: "Email or password or name cant be null",
      });
    } else {
      try {
        const { email, password, name } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          email: email,
          password: hashedPassword,
        });
        const job_seeker = await JobSeeker.create({
          fullname: name,
          user_id: user.id,
        });
        return res.status(201).json({
          code: 201,
          succcess: true,
          message: "Account has been added!",
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
  }
}
module.exports = AuthenticationController;
