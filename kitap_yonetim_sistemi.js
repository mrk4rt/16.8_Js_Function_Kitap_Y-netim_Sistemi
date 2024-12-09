// Kitapları tutacak dizi
let kitaplar = [];

// Kitap Ekleme Fonksiyonu
function kitapEkle(isim, yazar, tur) {
    const id = kitaplar.length + 1; // Benzersiz ID oluştur
    const yeniKitap = { id, isim, yazar, tur };
    kitaplar.push(yeniKitap); // Kitapları diziye ekle
    console.log("Kitap eklendi:", yeniKitap);
}

// Kitap Listeleme Fonksiyonu
function kitapListele() {
    if (kitaplar.length === 0) {
        console.log("Hiç kitap bulunmuyor.");
    } else {
        console.table(kitaplar); // Tablo formatında kitapları listele
    }
}

// Kitap Arama Fonksiyonu
function kitapAra(kriter, deger) {
    const bulunanKitaplar = kitaplar.filter(kitap => kitap[kriter].toLowerCase() === deger.toLowerCase());
    if (bulunanKitaplar.length > 0) {
        console.log("Bulunan Kitaplar:");
        console.table(bulunanKitaplar);
    } else {
        console.log("Aradığınız kriterlere uygun kitap bulunamadı.");
    }
}

// Kitap Silme Fonksiyonu
function kitapSil(id) {
    const kitapIndex = kitaplar.findIndex(kitap => kitap.id === id);
    if (kitapIndex !== -1) {
        const silinenKitap = kitaplar.splice(kitapIndex, 1);
        console.log("Silinen Kitap:", silinenKitap[0]);
    } else {
        console.log("Belirtilen ID'ye sahip bir kitap bulunamadı.");
    }
}

// Örnek Kullanımlar
kitapEkle("Simyacı", "Paulo Coelho", "Roman");
kitapEkle("1984", "George Orwell", "Distopya");
kitapEkle("Bir Ömür Nasıl Yaşanır?", "İlber Ortaylı", "Kişisel Gelişim");

kitapListele();

kitapAra("isim", "Simyacı");
kitapAra("yazar", "George Orwell");

kitapSil(2);

kitapListele();
