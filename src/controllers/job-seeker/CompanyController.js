const Company = require("@models").company;
class CompanyPage {
    static async companylist (req, res){
        try {
            const company = await Company.findAll()
            const response = {
                company: company
            }

            return res.status(200).json({
                code: 200,
                success: true,
                message: "Companies Fetched",
                data: response,
            })
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: "Error Message Here",
            })
        }    
    }

    static async companydetail (req, res){
        try {
            const id = req.params.id
            const data = await Company.findByPK(id)
            const Company = data ? data : '${id} not found in db'
            return res.status(200).json({
                code: 200,
                success: true,
                message: "Companies Fetched",
            })
        } catch (error) {
            return res.status(500).json({
                code: 500,
                success: false,
                message: "Error Message Here",
            })
        }
    }
}

module.exports = CompanyPage;
