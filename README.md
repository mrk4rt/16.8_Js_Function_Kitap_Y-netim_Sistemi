# **Kitap Yönetim Sistemi Projesi**

## **Proje Amacı**
Kullanıcıların bir kitaplık uygulaması üzerinden kitap ekleme, listeleme, arama ve silme işlemlerini gerçekleştirebileceği bir sistem oluşturmak.

---

## **Anahtar Kelimeler ve Değişkenler**

### **Anahtar Kelimeler**
1. **Array (Dizi):** Kitapları bir arada tutmak için kullanılır.
2. **Object (Nesne):** Her bir kitabın özelliklerini tanımlamak için kullanılır.
3. **Function (Fonksiyon):** İşlemleri gerçekleştirmek için oluşturulan yapı.
4. **ID:** Her kitabı benzersiz şekilde tanımlamak için kullanılır.
5. **Conditional Statements:** Arama ve silme işlemleri için gerekli şartları tanımlar.

### **Değişkenler**
1. **`kitaplar`:** Tüm kitap nesnelerini saklayan dizi.
2. **`kitap`:** Tek bir kitabı temsil eden nesne.
   - **`id`:** Kitabın benzersiz kimliği.
   - **`isim`:** Kitabın adı.
   - **`yazar`:** Kitabın yazarı.
   - **`tur`:** Kitabın türü.
3. **`arananDeger`:** Kullanıcının arama kriterlerini girdiği değer.
4. **`silinecekID`:** Kullanıcının silmek istediği kitabın kimliği.

---

## **Proje Adımları**

### **1. Kitap Veri Yapısı**
- Her bir kitap, `id`, `isim`, `yazar`, `tur` özelliklerine sahip bir nesne olarak tanımlanacak.
- Bu nesneler bir `kitaplar` dizisinde saklanacak.

---

### **2. Kitap Ekleme**
- Kullanıcıdan yeni kitap için `isim`, `yazar`, ve `tur` bilgileri alınacak.
- Her kitaba benzersiz bir `id` atanacak (örneğin, mevcut dizi uzunluğuna göre).
- Kitap, `kitaplar` dizisine eklenerek listeye dahil edilecek.

---

### **3. Kitap Listeleme**
- `kitaplar` dizisindeki tüm kitaplar döngü ile işlenecek.
- Her bir kitabın özellikleri tablo formatında konsola yazdırılacak (örneğin, `console.table()`).

---

### **4. Kitap Arama**
- Kullanıcıdan bir arama kriteri alınacak (örneğin, isim veya yazar).
- `kitaplar` dizisi filtrelenerek kullanıcı kriterine uyan kitaplar seçilecek.
- Eşleşen kitaplar bulunursa listelenecek, bulunamazsa bir mesaj görüntülenecek.

---

### **5. Kitap Silme**
- Kullanıcıdan silmek istediği kitabın `id` bilgisi alınacak.
- `kitaplar` dizisi, verilen `id` hariç tüm kitapları içerecek şekilde güncellenecek.
- Silme işlemi başarılı olursa kullanıcı bilgilendirilecek, aksi halde bir hata mesajı gösterilecek.

---

## **Kullanıcı Etkileşimleri**
1. **Yeni Kitap Ekleme:**
   - Kullanıcıdan kitap bilgilerini al ve ekle.
2. **Mevcut Kitapları Görüntüleme:**
   - Kullanıcı tüm kitapların listesini görüntüleyebilir.
3. **Belirli Bir Kitabı Arama:**
   - Kullanıcı, bir kitabı ada veya yazara göre bulabilir.
4. **Kitap Silme:**
   - Kullanıcı, kitap listesinden bir kitabı `id` bilgisi ile silebilir.
