const nodemailer = require('nodemailer');

async function sendEmail() {
  try {
    // Konfigurasi transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com', // Ganti dengan email pengirim
        pass: 'your-password' // Ganti dengan password email pengirim
      }
    });

    // Pengaturan email
    const mailOptions = {
      from: 'your-email@gmail.com', // Ganti dengan email pengirim
      to: 'recipient-email@example.com', // Ganti dengan email penerima
      subject: 'Contoh Email',
      text: 'Halo, ini adalah contoh email yang dikirim menggunakan Node.js.'
    };

    // Mengirim email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email terkirim: ' + info.response);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

// Memanggil fungsi untuk mengirim email
sendEmail();
