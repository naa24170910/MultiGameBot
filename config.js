// ==================================================
// ⚙️ KONFIGURASI UTAMA - EDIT BAGIAN INI SAJA ⚠️
// ==================================================
module.exports = {
  // 🔑 KONEKSI TELEGRAM
  botToken: "MASUKKAN_TOKEN_BOTFATHER_DISINI", // << GANTI INI
  ownerID: [123456789, 987654321], // << GANTI ID KAMU (Bisa >1)
  ownerUsername: "@KamuDev",

  // 🧩 DASAR
  botName: "MultiGame RPG Bot",
  prefix: "/",
  timezone: "Asia/Jakarta",
  mode: "public", // public = Semua Orang | private = Khusus Owner
  databaseType: "json", // json / mongodb

  // 🖼️ ASSET VISUAL (LINK RESMI / IMGUR - BEBAS WATERMARK) 🖼️
  assets: {
    logo: "https://i.imgur.com/7Z8XQ9A.jpeg",
    menuBg: "https://i.imgur.com/K9sZ7bL.png",
    // GAME ASSETS
    werewolfGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ216aHk1d215d2FscW5sN2x4bXk1d215d2FscW5sJmM1Z2lkOi8vZ2lwaHkvcG9wdXBhaS1naWZ8cD1naXZ8ZW58MHx8fHw%3D/giphy.gif",
    avalonCard: "https://i.imgur.com/9bKxR2y.png",
    minecraftImg: "https://i.imgur.com/dQw4w9W.jpeg",
    monopolyBoard: "https://i.imgur.com/3vYJ8Lb.jpeg",
    ularTanggaGif: "https://i.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    ludoBoard: "https://i.imgur.com/uJ9aR5H.png",
    hnsGif: "https://i.giphy.com/media/xT0Gqn9yxu6Mh2eQgy/giphy.gif",
    amongUsGif: "https://i.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif",
    citampiBg: "https://i.imgur.com/5aRgH7c.jpeg",
    mlRank: "https://i.imgur.com/kL9pR4j.png",
    keluargaImg: "https://i.imgur.com/1bX2cVn.png",
    todCard: "https://i.imgur.com/6nP7bKy.png",
    akinatorImg: "https://i.imgur.com/8sD3XqY.png"
  },

  // 👑 SISTEM EKONOMI & LEVEL (STANDAR RPG)
  levelSystem: {
    1: 0,
    5: 500,
    10: 2000,
    15: 5000,
    20: 12000,
    30: 40000,
    50: 150000,
    100: 1000000
  },

  // 💳 SISTEM PREMIUM & PEMBAYARAN
  premium: {
    price: 15000,
    duration: 30, // Hari
    qris: "https://i.imgur.com/Qr89Zwx.png" // QRIS Sendiri Kamu
  }
};