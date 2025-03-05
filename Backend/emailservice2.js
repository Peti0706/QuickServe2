const nodemailer = require('nodemailer');

// Email küldés konfigurációja
const transporter = nodemailer.createTransport({
    service: 'gmail', // Használhatsz mást is, pl. SendGrid, Mailgun stb.
    auth: {
        user: 'quickserveprojekt2025@gmail.com', // A te email címed
        pass: 'xwjb zuzc emvm xykd'   // Gmail esetén alkalmazás-specifikus jelszó kell
    }
});

// Email küldő függvény
const sendStatuszChange = (Statusz, Megrendelo_email,rendelesid,callback) => {
    const mailOptions = {
      from: 'quickserveprojekt2025@gmail.com',
      to: Megrendelo_email,
      subject: 'Rendelésed státusza megváltozott',
      html: `
      Kedves Vásárlónk!
      <br>
      <br>
      A(z) ${rendelesid} rendelésed státusza megváltozott. Jelenlegi állapota: ${Statusz}
      <br>
      <br>
      Üdvözlettel: QuickServe csapata!
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Hiba az email küldésekor:', error);
          return callback(error);
        }
        console.log('Email sikeresen elküldve:', info.response);
        callback(null);
      });
   
   
   
};

module.exports = { sendStatuszChange };