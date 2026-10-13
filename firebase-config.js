// Cấu hình dùng chung cho master_hub.html và kimbeauty_pos.html
window.KB = {
  firebaseConfig: {
    apiKey: "AIzaSyDAiWPk6NJlYB3228oIHlJxAylGZvC_f0A",
    authDomain: "kimbeauty-pos.firebaseapp.com",
    databaseURL: "https://kimbeauty-pos-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kimbeauty-pos",
    storageBucket: "kimbeauty-pos.firebasestorage.app",
    messagingSenderId: "230846427410",
    appId: "1:230846427410:web:b10ed332acc57868e383cb"
  },
  ADMIN_UID: "sG7ZbFNwElcTbE0HWUPrI1e9t8B3",
  slug: function (spaId) { return String(spaId).toLowerCase().replace(/[^a-z0-9]/g, '-'); },
  // Email "ngầm" để đăng nhập Firebase: người dùng vẫn chỉ gõ tên đăng nhập. ver > 0 khi tài khoản được đặt lại mật khẩu
  loginEmail: function (spaId, username, ver) { return username + (ver > 0 ? '.r' + ver : '') + '@' + this.slug(spaId) + '.kimbeauty.local'; },
  cleanUsername: function (u) { return String(u || '').trim().toLowerCase(); },
  validUsername: function (u) { return /^[a-z0-9_-]{2,30}$/.test(u); }
};
