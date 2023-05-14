const express = require('express');
const router = express.Router();
const Pool = require('../config/config.js');


// Endpoint untuk menambahkan perusahaan baru
router.post('/register/company/detail/:company_id', async (req, res) => {
  try {
    const { company_icon, company_name, description, location, company_size, email, whatsapp_number, working_place, website_url } = req.body;

    // Lakukan query untuk menambahkan perusahaan baru ke dalam tabel companies
    const result = await pool.query(
      `INSERT INTO companies (
        company_icon, 
        company_name, 
        description, 
        location, 
        company_size, 
        email, 
        whatsapp_number, 
        working_place, 
        website_url) 
            VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
            RETURNING company_id`,
      [company_icon, company_name, description, location, company_size, email, whatsapp_number, working_place, website_url]
    );

    // Ambil id dari perusahaan yang baru saja ditambahkan
    const { company_id } = result.rows[0];

    res.status(201).json({ company_id, message: 'Registrasi Company berhasil' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
