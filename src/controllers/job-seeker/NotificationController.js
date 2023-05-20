const UserNotifications = require("@models").UserNotifications;

class NotificationController {
  static async notification(req, res) {
    try {
      const profile_id = req.params.profile_id;
      const data = await UserNotifications.findAll({
        attributes: ["notification_message"],
        where: {
          user_id: profile_id,
        },
      });
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Notification Fetched",
        data: data.map((d) => {
          return {
            message: d.notification_message,
          };
        }),
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        message: error.message,
      });
    }
  }
}
module.exports = NotificationController;
