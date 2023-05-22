const Employer = require("@models").Employer;
const Company = require("@models").Company;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthenticationController {
  static async login(req, res) {
    if (
      !req.body.username ||
      !req.body.password ||
      req.body.password.length < 8
    ) {
      return res.status(400).json({
        code: 400,
        success: false,
        message:
          "Username or Password cant be null or Password must 8 character",
      });
    } else {
      try {
        const { username, password } = req.body;
        const data = await Employer.findOne({
          where: { username: username },
          include: [
            {
              model: Company,
            },
          ],
        });
        if (!data) {
          return res.status(400).json({
            code: 400,
            success: false,
            message: "Username not found",
          });
        }
        const isPasswordValid = await bcrypt.compare(password, data.password);
        if (!isPasswordValid) {
          return res.status(400).json({
            code: 400,
            success: false,
            message: "Password incorrect",
          });
        }
        const token = jwt.sign(
          {
            type: "employer",
            user_id: data.id,
          },
          process.env.JWT_SECRET
        );

        res.status(200).json({
          code: 200,
          succcess: true,
          message: "Login Successfully",
          data: {
            employer_id: data.id,
            company_name: data.Company.company_name,
            company_id: data.Company.id,
            token: token,
          },
        });
      } catch (err) {
        return res.status(500).json({
          error: err.message,
        });
      }
    }
  }
  static async register(req, res) {
    if (
      !req.body.username ||
      !req.body.password ||
      !req.body.email ||
      !req.body.company_name
    ) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: "Username or password or email or company_name cant be null",
      });
    } else {
      try {
        const { email, username, password, company_name } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const createCompany = await Company.create({
          company_name: company_name,
          email: email,
        });
        const createEmployer = await Employer.create({
          username: username,
          password: hashedPassword,
          company_id: createCompany.id,
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
