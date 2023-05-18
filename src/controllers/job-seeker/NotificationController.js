const UserNotifications = require("@models").UserNotifications;

class NotificationController {
    static async notification (req, res) {
        try {
            const id = req.params.id
            const data = await UserNotifications.findByPK(id)
            return res.status(200).json({
                code: 200,
                success: true,
                message: "Notification Fetched",
                data: data,
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
module.exports = NotificationController;