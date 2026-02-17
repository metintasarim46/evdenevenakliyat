import fs from 'fs';

// Örnek geniş veri yapısı (Burayı elindeki ilçe/mahalle isimleriyle doldurabiliriz)
const iller = [
 { il: "Adana", slug: "adana", ilceler: ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"] },
    { il: "Adıyaman", slug: "adiyaman", ilceler: ["Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Merkez", "Samsat", "Sincik", "Tut"] },
    { il: "Afyonkarahisar", slug: "afyonkarahisar", ilceler: ["Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Merkez", "Sandıklı", "Sinanpaşa", "Sultandağı", "Şuhut"] },
    { il: "Ağrı", slug: "agri", ilceler: ["Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Merkez", "Patnos", "Taşlıçay", "Tutak"] },
    { il: "Amasya", slug: "amasya", ilceler: ["Göynücek", "Gümüşhacıköy", "Hamamözü", "Merkez", "Merzifon", "Suluova", "Taşova"] },
    {
      il: "Ankara",
      slug: "ankara",
      ilceler: [
        { ad: "Çankaya", mahalleler: ["Kızılay", "Bahçelievler", "Çayyolu", "Ümitköy", "Dikmen", "Oran", "Yıldız"] },
        { ad: "Keçiören", mahalleler: ["Etlik", "İncirli", "Bağlum", "Ufuktepe", "Esertepe"] },
        { ad: "Yenimahalle", mahalleler: ["Batıkent", "Demetevler", "Şentepe", "Çayyolu"] },
        { ad: "Etimesgut", mahalleler: ["Eryaman", "Bağlıca", "Elvan", "Şeker"] },
        { ad: "Mamak", mahalleler: ["Abidinpaşa", "Akdere", "Boğaziçi", "Ege"] },
        "Akyurt", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çubuk", "Elmadağ", "Evren", "Gölbaşı", "Güdül", "Haymana", "Kahramankazan", "Kalecik", "Kızılcahamam", "Nallıhan", "Polatlı", "Pursaklar", "Sincan", "Şereflikoçhisar"
      ]
    },
    { il: "Antalya", slug: "antalya", ilceler: ["Akseki", "Aksu", "Alanya", "Demre", "Döşemealtı", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı", "Kaş", "Kemer", "Kepez", "Konyaaltı", "Korkuteli", "Kumluca", "Manavgat", "Muratpaşa", "Serik"] },
    { il: "Artvin", slug: "artvin", ilceler: ["Ardanuç", "Arhavi", "Borçka", "Hopa", "Kemalpaşa", "Merkez", "Murgul", "Şavşat", "Yusufeli"] },
    { il: "Aydın", slug: "aydin", ilceler: ["Bozdoğan", "Buharkent", "Çine", "Didim", "Efeler", "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Nazilli", "Söke", "Sultanhisar", "Yenipazar"] },
    { il: "Balıkesir", slug: "balikesir", ilceler: ["Altıeylül", "Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Karesi", "Kepsut", "Manyas", "Marmara", "Savaştepe", "Sındırgı", "Susurluk"] },
    { il: "Bilecik", slug: "bilecik", ilceler: ["Bozüyük", "Gölpazarı", "İnhisar", "Merkez", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"] },
    { il: "Bingöl", slug: "bingol", ilceler: ["Adaklı", "Genç", "Karlıova", "Kiğı", "Merkez", "Solhan", "Yayladere", "Yedisu"] },
    { il: "Bitlis", slug: "bitlis", ilceler: ["Adilcevaz", "Ahlat", "Güroymak", "Hizan", "Merkez", "Mutki", "Tatvan"] },
    { il: "Bolu", slug: "bolu", ilceler: ["Dörtdivan", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Merkez", "Mudurnu", "Seben", "Yeniçağa"] },
    { il: "Burdur", slug: "burdur", ilceler: ["Ağlasun", "Altınyayla", "Bucak", "Çavdır", "Çeltikçi", "Gölhisar", "Karamanlı", "Kemer", "Merkez", "Tefenni", "Yeşilova"] },
    { il: "Bursa", slug: "bursa", ilceler: ["Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl", "İznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafakemalpaşa", "Nilüfer", "Orhaneli", "Orhangazi", "Osmangazi", "Yenişehir", "Yıldırım"] },
    { il: "Çanakkale", slug: "canakkale", ilceler: ["Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Merkez", "Yenice"] },
    { il: "Çankırı", slug: "cankiri", ilceler: ["Atkaracalar", "Bayramören", "Çerkeş", "Eldivan", "Ilgaz", "Kızılırmak", "Korgun", "Kurşunlu", "Merkez", "Orta", "Şabanözü", "Yapraklı"] },
    { il: "Çorum", slug: "corum", ilceler: ["Alaca", "Bayat", "Boğazkale", "Dodurga", "İskilip", "Kargı", "Laçin", "Mecitözü", "Merkez", "Oğuzlar", "Ortaköy", "Osmancık", "Sungurlu", "Uğurludağ"] },
    { il: "Denizli", slug: "denizli", ilceler: ["Acıpayam", "Babadağ", "Baklan", "Bekilli", "Beyağaç", "Bozkurt", "Buldan", "Çal", "Çameli", "Çardak", "Çivril", "Güney", "Honaz", "Kale", "Merkezefendi", "Pamukkale", "Sarayköy", "Serinhisar", "Tavas"] },
    { il: "Diyarbakır", slug: "diyarbakir", ilceler: ["Bağlar", "Bismil", "Çermik", "Çınar", "Çüngüş", "Dicle", "Eğil", "Ergani", "Hani", "Hazro", "Kayapınar", "Kocaköy", "Kulp", "Lice", "Silvan", "Sur", "Yenişehir"] },
    { il: "Edirne", slug: "edirne", ilceler: ["Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Merkez", "Süloğlu", "Uzunköprü"] },
    { il: "Elazığ", slug: "elazig", ilceler: ["Ağın", "Alacakaya", "Arıcak", "Baskil", "Karakoçan", "Keban", "Kovancılar", "Maden", "Merkez", "Palu", "Sivrice"] },
    { il: "Erzincan", slug: "erzincan", ilceler: ["Çayırlı", "İliç", "Kemah", "Kemaliye", "Merkez", "Otlukbeli", "Refahiye", "Tercan", "Üzümlü"] },
    { il: "Erzurum", slug: "erzurum", ilceler: ["Aşkale", "Aziziye", "Çat", "Hınıs", "Horasan", "İspir", "Karaçoban", "Karayazı", "Köprüköy", "Narman", "Oltu", "Olur", "Palandöken", "Pasinline", "Pazaryolu", "Şenkaya", "Tekman", "Tortum", "Uzundere", "Yakutiye"] },
    { il: "Eskişehir", slug: "eskisehir", ilceler: ["Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Odunpazarı", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Tepebaşı"] },
    { il: "Gaziantep", slug: "gaziantep", ilceler: ["Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"] },
    { il: "Giresun", slug: "giresun", ilceler: ["Alucra", "Bulancak", "Çamoluk", "Çanakçı", "Dereli", "Doğankent", "Espiye", "Eynesil", "Görele", "Güce", "Keşap", "Merkez", "Piraziz", "Şebinkarahisar", "Tirebolu", "Yağlıdere"] },
    { il: "Gümüşhane", slug: "gumushane", ilceler: ["Kelkit", "Köse", "Kürtün", "Merkez", "Şiran", "Torul"] },
    { il: "Hakkari", slug: "hakkari", ilceler: ["Çukurca", "Derecik", "Merkez", "Şemdinli", "Yüksekova"] },
    { il: "Hatay", slug: "hatay", ilceler: ["Altınözü", "Antakya", "Arsuz", "Belen", "Defne", "Dörtyol", "Erzin", "Hassa", "İskenderun", "Kırıkhan", "Kumlu", "Payas", "Reyhanlı", "Samandağ", "Yayladağı"] },
    { il: "Isparta", slug: "isparta", ilceler: ["Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Keçiborlu", "Merkez", "Senirkent", "Sütçüler", "Şarkikaraağaç", "Uluborlu", "Yalvaç", "Yenişarbademli"] },
    { il: "Mersin", slug: "mersin", ilceler: ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke", "Tarsus", "Toroslar", "Yenişehir"] },
    {
      il: "İstanbul",
      slug: "istanbul",
      ilceler: [
        { ad: "Başakşehir", mahalleler: ["Kayaşehir", "Bahçeşehir", "Ispartakule", "Altınşehir", "Güvercintepe", "Şahintepe", "Ziya Gökalp", "Fenertepe"] },
        { ad: "Ümraniye", mahalleler: ["Çakmak", "Ihlamurkuyu", "Şerifali", "Dudullu", "Atakent", "Armağanevler", "Parseller", "Altınşehir"] },
        { ad: "Kadıköy", mahalleler: ["Moda", "Fenerbahçe", "Göztepe", "Bostancı", "Erenköy", "Suadiye", "Acıbadem", "Kozyatağı"] },
        { ad: "Beşiktaş", mahalleler: ["Levent", "Etiler", "Bebek", "Ortaköy", "Ulus", "Gayrettepe", "Dikilitaş", "Balmumcu"] },
        { ad: "Üsküdar", mahalleler: ["Altunizade", "Çengelköy", "Kandilli", "Beylerbeyi", "Kuzguncuk", "Acıbadem", "Bulgurlu"] },
        { ad: "Bakırköy", mahalleler: ["Yeşilköy", "Yeşilyurt", "Florya", "Ataköy", "Zuhuratbaba", "Kartaltepe", "Osmaniye"] },
        { ad: "Şişli", mahalleler: ["Nişantaşı", "Teşvikiye", "Mecidiyeköy", "Fulya", "Feriköy", "Kurtuluş", "Esentepe"] },
        { ad: "Ataşehir", mahalleler: ["Batı Ataşehir", "İçerenköy", "Kayışdağı", "Küçükbakkalköy", "Örnek", "Ferhatpaşa"] },
        { ad: "Maltepe", mahalleler: ["Küçükyalı", "İdealtepe", "Zümrütevler", "Bağlarbaşı", "Cevizli", "Dragos"] },
        { ad: "Sarıyer", mahalleler: ["Zekeriyaköy", "Tarabya", "İstinye", "Yeniköy", "Maslak", "Emirgan", "Bahçeköy"] },
        { ad: "Beylikdüzü", mahalleler: ["Adnan Kahveci", "Barış", "Cumhuriyet", "Gürpınar", "Kavaklı", "Yakuplu"] },
        { ad: "Esenyurt", mahalleler: ["Mehmet Akif Ersoy", "Piri Reis", "Güzelyurt", "Saadetdere", "Kıraç", "Akçaburgaz"] },
        "Adalar", "Arnavutköy", "Bağcılar", "Bahçelievler", "Bayrampaşa", "Beykoz", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kağıthane", "Kartal", "Küçükçekmece", "Pendik", "Sancaktepe", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Tuzla", "Zeytinburnu"
      ]
    },
    {
      il: "İzmir",
      slug: "izmir",
      ilceler: [
        { ad: "Karşıyaka", mahalleler: ["Mavişehir", "Bostanlı", "Atakent", "Bahçelievler", "Alaybey", "Nergiz", "Şemikler"] },
        { ad: "Bornova", mahalleler: ["Özkanlar", "Manavkuyu", "Mevlana", "Erzene", "Kazımdirik", "Işıklar", "Pınarbaşı"] },
        { ad: "Buca", mahalleler: ["Şirinyer", "Gediz", "Yıldız", "Adatepe", "Kuruçeşme", "Yaylacık", "Efeler"] },
        { ad: "Konak", mahalleler: ["Alsancak", "Göztepe", "Güzelyalı", "Hatay", "Küçükyalı", "Kahramanlar", "Eşrefpaşa"] },
        "Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ", "Çeşme", "Çiğli", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Kemalpaşa", "Kınık", "Kiraz", "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla"
      ]
    },
    { il: "Kars", slug: "kars", ilceler: ["Akyaka", "Arpaçay", "Digor", "Kağızman", "Merkez", "Sarıkamış", "Selim", "Susuz"] },
    { il: "Kastamonu", slug: "kastamonu", ilceler: ["Abana", "Ağlı", "Araç", "Azdavay", "Bozkurt", "Cide", "Çatalzeytin", "Daday", "Devrekani", "Doğanyurt", "Hanönü", "İhsangazi", "İnebolu", "Küre", "Merkez", "Pınarbaşı", "Seydiler", "Şenpazar", "Taşköprü", "Tosya"] },
    { il: "Kayseri", slug: "kayseri", ilceler: ["Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Kocasinan", "Melikgazi", "Özvatan", "Pınarbaşı", "Sarıoğlan", "Sarız", "Talas", "Tomarza", "Yahyalı", "Yeşilhisar"] },
    { il: "Kırklareli", slug: "kirklareli", ilceler: ["Babaeski", "Demirköy", "Kofçaz", "Lüleburgaz", "Merkez", "Pehlivanköy", "Pınarhisar", "Vize"] },
    { il: "Kırşehir", slug: "kirsehir", ilceler: ["Akçakent", "Akpınar", "Boztepe", "Çiçekdağı", "Kaman", "Merkez", "Mucur"] },
    { il: "Kocaeli", slug: "kocaeli", ilceler: ["Başiskele", "Çayırova", "Darica", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez"] },
    { il: "Konya", slug: "konya", ilceler: ["Ahırlı", "Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Cihanbeyli", "Çeltik", "Çumra", "Derbent", "Derebucak", "Doğanhisar", "Emirgazi", "Ereğli", "Güneysınır", "Hadim", "Halkapınar", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Karatay", "Kulu", "Meram", "Sarayönü", "Selçuklu", "Seydişehir", "Taşkent", "Tuzlukçu", "Yalıhüyük", "Yunak"] },
    { il: "Kütahya", slug: "kutahya", ilceler: ["Altıntaş", "Aslanapa", "Çavdarhisar", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Hisarcık", "Merkez", "Pazarlar", "Şaphane", "Simav", "Tavşanlı"] },
    { il: "Malatya", slug: "malatya", ilceler: ["Akçadağ", "Arapgir", "Arguvan", "Battalgazi", "Darende", "Doğanşehir", "Doğanyol", "Hekimhan", "Kale", "Kuluncak", "Pütürge", "Yazıhan", "Yeşilyurt"] },
    { il: "Manisa", slug: "manisa", ilceler: ["Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Köprübaşı", "Kula", "Salihli", "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Şehzadeler", "Turgutlu", "Yunusemre"] },
    {
      il: "Kahramanmaraş",
      slug: "kahramanmaras",
      ilceler: [
        { ad: "Onikişubat", mahalleler: ["Yirmikigün", "Hürriyet", "Haydar Aliyev", "Boğaziçi", "Tekerek"] },
        { ad: "Dulkadiroğlu", mahalleler: ["Doğukent", "Namık Kemal", "Yavuz Selim", "Güneşevler"] },
        "Afşin", "Andırın", "Çağlayancerit", "Ekinözü", "Elbistan", "Göksun", "Nurhak", "Pazarcık", "Türkoğlu"
      ]
    },
    { il: "Mardin", slug: "mardin", ilceler: ["Artuklu", "Dargeçit", "Derik", "Kızıltepe", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"] },
    { il: "Muğla", slug: "mugla", ilceler: ["Bodrum", "Dalaman", "Datça", "Fethiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Menteşe", "Milas", "Ortaca", "Seydikemer", "Ula", "Yatağan"] },
    { il: "Muş", slug: "mus", ilceler: ["Bulanık", "Hasköy", "Korkut", "Malazgirt", "Merkez", "Varto"] },
    { il: "Nevşehir", slug: "nevsehir", ilceler: ["Acıgöl", "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Merkez", "Ürgüp"] },
    { il: "Niğde", slug: "nigde", ilceler: ["Altunhisar", "Bor", "Çamardı", "Çiftlik", "Merkez", "Ulukışla"] },
    { il: "Ordu", slug: "ordu", ilceler: ["Akkuş", "Altınordu", "Aybastı", "Çamaş", "Çatalpınar", "Çaybaşı", "Fatsa", "Gölköy", "Gülyalı", "Gürgentepe", "İkizce", "Kabadüz", "Kabataş", "Korgan", "Kumru", "Mesudiye", "Perşembe", "Ulubey", "Ünye"] },
    { il: "Rize", slug: "rize", ilceler: ["Ardeşen", "Çamlıhemşin", "Çayeli", "Derepazarı", "Fındıklı", "Güneysu", "Hemşin", "İkizdere", "İyidere", "Kalkandere", "Merkez", "Pazar"] },
    { il: "Sakarya", slug: "sakarya", ilceler: ["Adapazarı", "Akyazı", "Arifiye", "Erenler", "Ferizli", "Geyve", "Hendek", "Karapürçek", "Karasu", "Kaynarca", "Kocaali", "Pamukova", "Sapanca", "Serdivan", "Söğütlü", "Taraklı"] },
    { il: "Samsun", slug: "samsun", ilceler: ["19 Mayıs", "Alaçam", "Asarcık", "Atakum", "Ayvacık", "Bafra", "Canik", "Çarşamba", "Havza", "İlkadım", "Kavak", "Ladik", "Salıpazarı", "Tekkeköy", "Terme", "Vezirköprü", "Yakakent"] },
    { il: "Siirt", slug: "siirt", ilceler: ["Baykan", "Eruh", "Kurtalan", "Merkez", "Pervari", "Şirvan", "Tillo"] },
    { il: "Sinop", slug: "sinop", ilceler: ["Ayancık", "Boyabat", "Dikmen", "Durağan", "Erfelek", "Gerze", "Merkez", "Saraydüzü", "Türkeli"] },
    { il: "Sivas", slug: "sivas", ilceler: ["Akıncılar", "Altınyayla", "Divriği", "Doğanşar", "Gemerek", "Gölova", "Gürün", "Hafik", "İmranlı", "Kangal", "Koyulhisar", "Merkez", "Suşehri", "Şarkışla", "Ulaş", "Yıldızeli", "Zara"] },
    { il: "Tekirdağ", slug: "tekirdag", ilceler: ["Çerkezköy", "Çorlu", "Ergene", "Hayrabolu", "Kapaklı", "Malkara", "Marmaraereğlisi", "Muratlı", "Saray", "Süleymanpaşa", "Şarköy"] },
    { il: "Tokat", slug: "tokat", ilceler: ["Almus", "Artova", "Başçiftlik", "Erbaa", "Merkez", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Turhal", "Yeşilyurt", "Zile"] },
    { il: "Trabzon", slug: "trabzon", ilceler: ["Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı", "Maçka", "Of", "Ortahisar", "Sürmene", "Şalpazarı", "Tonya", "Vakfıkebir", "Yomra"] },
    { il: "Tunceli", slug: "tunceli", ilceler: ["Çemişgezek", "Hozat", "Mazgirt", "Merkez", "Nazımiye", "Ovacık", "Pertek", "Pülümür"] },
    { il: "Şanlıurfa", slug: "sanliurfa", ilceler: ["Akçakale", "Birecik", "Bozova", "Ceylanpınar", "Eyyübiye", "Halfeti", "Haliliye", "Harran", "Hilvan", "Karaköprü", "Siverek", "Suruç", "Viranşehir"] },
    { il: "Uşak", slug: "usak", ilceler: ["Banaz", "Eşme", "Karahallı", "Merkez", "Sivaslı", "Ulubey"] },
    { il: "Van", slug: "van", ilceler: ["Bahçesaray", "Başkale", "Çaldıran", "Çatak", "Edremit", "Erciş", "Gevaş", "Gürpınar", "İpekyolu", "Muradiye", "Özalp", "Saray", "Tuşba"] },
    { il: "Yozgat", slug: "yozgat", ilceler: ["Akdağmadeni", "Aydıncık", "Boğazlıyan", "Çandır", "Çayıralan", "Çekerek", "Kadışehri", "Saraykent", "Sarıkaya", "Sorgun", "Şefaatli", "Yenifakılı", "Yerköy", "Merkez"] },
    { il: "Zonguldak", slug: "zonguldak", ilceler: ["Alaplı", "Çaycuma", "Devrek", "Ereğli", "Gökçebey", "Kilimli", "Kozlu", "Merkez"] },
    { il: "Aksaray", slug: "aksaray", ilceler: ["Ağaçören", "Eskil", "Gülağaç", "Güzelyurt", "Merkez", "Ortaköy", "Sarıyahşi", "Sultanhanı"] },
    { il: "Bayburt", slug: "bayburt", ilceler: ["Aydıntepe", "Demirözü", "Merkez"] },
    { il: "Karaman", slug: "karaman", ilceler: ["Ayrancı", "Başyayla", "Ermenek", "Kazımkarabekir", "Merkez", "Sarıveliler"] },
    { il: "Kırıkkale", slug: "kirikkale", ilceler: ["Bahşılı", "Balışeyh", "Çelebi", "Delice", "Karakeçili", "Keskin", "Merkez", "Yahşihan"] },
    { il: "Batman", slug: "batman", ilceler: ["Beşiri", "Gercüş", "Hasankeyf", "Merkez", "Kozluk", "Sason"] },
    { il: "Şırnak", slug: "sirnak", ilceler: ["Beytüşşebap", "Cizre", "Güçlükonak", "İdil", "Merkez", "Silopi", "Uludere"] },
    { il: "Bartın", slug: "bartin", ilceler: ["Amasra", "Kurucaşile", "Merkez", "Ulus"] },
    { il: "Ardahan", slug: "ardahan", ilceler: ["Çıldır", "Damal", "Göle", "Hanak", "Merkez", "Posof"] },
    { il: "Iğdır", slug: "igdir", ilceler: ["Aralık", "Karakoyunlu", "Merkez", "Tuzluca"] },
    { il: "Yalova", slug: "yalova", ilceler: ["Altınova", "Armutlu", "Çiftlikköy", "Çınarcık", "Merkez", "Termal"] },
    { il: "Karabük", slug: "karabuk", ilceler: ["Eflani", "Eskipazar", "Merkez", "Ovacık", "Safranbolu", "Yenice"] },
    { il: "Kilis", slug: "kilis", ilceler: ["Elbeyli", "Merkez", "Musabeyli", "Polateli"] },
    { il: "Osmaniye", slug: "osmaniye", ilceler: ["Bahçe", "Düziçi", "Hasanbeyli", "Kadirli", "Merkez", "Sumbas", "Toprakkale"] },
    { il: "Düzce", slug: "duzce", ilceler: ["Akçakoca", "Cumayeri", "Çilimli", "Gölyaka", "Gümüşova", "Kaynaşlı", "Merkez", "Yığılca"] }
  // Lütfü, buraya en çok iş aldığın diğer illeri de ekleyebilirsin
];

// Mahalleleri simüle eden bir yardımcı (Her ilçeye otomatik 10 örnek mahalle ekler)
const mahalleSayıcı = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

const hostname = 'https://evdeneve.metintasarim.io';
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

// 1. Sabit Sayfalar
['', '/hizmet-bolgelerimiz', '/blog', '/site-haritasi'].forEach(page => {
  xml += `\n  <url><loc>${hostname}${page}</loc><priority>1.0</priority></url>`;
});

// 2. Binlerce Sayfayı Üreten Döngü
iller.forEach((il) => {
  il.ilceler.forEach((ilce) => {
    // İlçe ana sayfası
    xml += `\n  <url><loc>${hostname}/${il.ad}/${ilce}</loc><priority>0.8</priority></url>`;
    
    // Her ilçeye 10 mahalle linki ekliyoruz (Örnek: kadikoy-mahalle-1)
    mahalleSayıcı.forEach(m => {
      const mahalleUrl = `${hostname}/${il.ad}/${ilce}/mahalle-${m}`;
      xml += `\n  <url><loc>${mahalleUrl}</loc><priority>0.6</priority></url>`;
      
      const evTasimaUrl = `${hostname}/ev-tasima/${il.ad}/${ilce}/mahalle-${m}`;
      xml += `\n  <url><loc>${evTasimaUrl}</loc><priority>0.5</priority></url>`;
    });
  });
});

xml += `\n</urlset>`;
fs.writeFileSync('./public/sitemap.xml', xml);
console.log('Binlerce satırlık sitemap.xml başarıyla oluşturuldu!');