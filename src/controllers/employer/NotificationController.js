const { EmployerNotification } = require("@models"); // Import model EmployerNotification

class NotificationController {
  static async getAllMyNotification(req, res) {
    const { employer_id } = req.params;
    try {
      const notification = await EmployerNotification.findAll({
        where: {
          employer_id: employer_id,
        },
        attributes: ["notification_message", "notification_date"],
      });
      const transformedNotification = notification.map((notif) => {
        return {
          message: notif.notification_message,
          date: notif.notification_date,
        };
      });
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Notification Fetched",
        data: transformedNotification,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = NotificationController;
