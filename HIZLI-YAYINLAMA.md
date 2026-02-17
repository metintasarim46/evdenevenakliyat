# 🚀 NETLIFY DROP ile Anında Yayınlama

## Adım 1: Netlify Drop Sayfasına Git
https://app.netlify.com/drop

## Adım 2: Dist Klasörünü Sürükle
- Windows Gezgini'nde açılan `dist` klasörünü
- Netlify sayfasındaki kutucuğa sürükleyip bırak

## Adım 3: Bekle (10-20 saniye)
Site otomatik yüklenecek ve size bir URL verilecek:
Örnek: `magical-cupcake-abc123.netlify.app`

## Adım 4: Test Et
- Verilen URL'yi aç
- Site canlıda!

## 🎯 Avantajları:
- ✅ Hesap gerektirmiyor (opsiyonel)
- ✅ 30 saniyede yayında
- ✅ Ücretsiz
- ✅ SSL otomatik
- ✅ CDN hızı

## 🔄 Güncelleme Yapmak İçin:
1. Kodda değişiklik yap
2. `npm run build` çalıştır
3. Yeni `dist` klasörünü tekrar drop et
4. Eski site güncellenecek!

## 💡 Domain Bağlamak İçin:
1. Netlify'de hesap aç (GitHub ile giriş)
2. Site Settings → Domain Management
3. Custom domain ekle

---

## Alternatif: Vercel CLI

### Kurulum:
```bash
npm install -g vercel
vercel login
vercel
```

### Deploy:
```bash
vercel --prod
```

---

## ⚡ Hızlı Test:

Site canlıda olunca test edin:
- ✅ Telefon numarası tıklanıyor mu? (0543 210 70 58)
- ✅ WhatsApp açılıyor mu?
- ✅ Form çalışıyor mu?
- ✅ Mobilde düzgün görünüyor mu?

---

**Başarılar! 🎉**
