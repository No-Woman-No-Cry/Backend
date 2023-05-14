const express = require('express');
const router = express.Router();
const Pool = require('../config/config.js');


// Endpoint untuk menambahkan pengguna baru
router.post('/profile/basic/:user_id', async (req, res) => {
  try {
    const { user_id, fullname, job_seaker_headline, whatsapp_number, linkedin_url, portofolio_url, cv_url } = req.body;

    // Lakukan query untuk menambahkan pengguna baru ke dalam tabel users
    const result = await pool.query(
      `INSERT INTO users 
      (
        user_id, 
        fullname, 
        job_seaker_headline, 
        whatsapp_number, 
        linkedin_url, 
        portofolio_url, 
        cv_url) 
        VALUES 
        (DEFAULT, $1, $2, $3, $4, $5, $6, $7) RETURNING id, user_id`,
      [fullname, job_seaker_headline, whatsapp_number, linkedin_url, portofolio_url, cv_url]
    );

    // Ambil id dan user_id dari pengguna yang baru saja ditambahkan
    const { id, user_id: newUser_id } = result.rows[0];

    res.status(201).json({ id, user_id: newUser_id, message: 'Registrasi jobseeker berhasil' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
