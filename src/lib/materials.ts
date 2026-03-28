import { TopicMaterial } from './types';

export const materials: TopicMaterial[] = [
  // ─── TOPIK 1: Pengantar Hak Asasi Manusia ────────────────────────────────────
  {
    topicNumber: 1,
    topicName: 'Pengantar Hak Asasi Manusia',
    topicTag: 'HAM Dasar',
    isEnglish: false,
    relatedQuestionId: 1,
    overview:
      'Topik ini membahas konsep dasar HAM sebagai hak kodrati yang melekat sejak lahir, sejarah perkembangannya dari Magna Carta hingga UDHR 1948, lima prinsip universal HAM, tiga generasi hak, serta jaminan HAM dalam konstitusi Indonesia dan kewajiban tiga dimensi negara.',

    textContent: [
      {
        id: 't1-s1',
        order: 1,
        title: 'Apa Itu Hak Asasi Manusia?',
        content:
          'Hak Asasi Manusia (HAM) adalah hak yang melekat pada setiap manusia sejak lahir, bersifat universal, tidak dapat dicabut, dan tidak bergantung pada pengakuan negara. Istilah "asasi" menunjukkan bahwa ini adalah hak paling mendasar yang dimiliki manusia sebagai manusia — bukan sebagai warga negara tertentu, bukan karena jabatan atau kekayaan.\n\nSecara filosofis, HAM berakar pada gagasan bahwa setiap manusia memiliki martabat (human dignity) yang setara dan inheren. Gagasan ini dapat ditemukan dalam berbagai tradisi — dari filosofi Yunani Kuno tentang hukum alam, ajaran agama-agama besar, hingga pemikiran pencerahan Eropa abad 17-18. HAM bukan pemberian pemerintah; pemerintah hanya berkewajiban mengakui dan melindunginya.\n\nPerbedaan penting: HAM berbeda dari hak sipil (civil rights). Hak sipil diberikan dan dapat dicabut oleh negara. HAM melekat pada setiap manusia tanpa syarat apapun — bahkan negara yang paling otoriter pun tidak dapat menghapus HAM secara legal, meskipun bisa melanggarnya secara faktual.',
        keyPoints: [
          'HAM adalah hak kodrati yang melekat sejak lahir, bukan pemberian negara',
          'Setiap manusia memiliki martabat (human dignity) yang setara dan inheren',
          'HAM berlaku bagi semua orang tanpa diskriminasi ras, gender, agama, atau status',
          'HAM berbeda dari hak warga negara — HAM tidak bergantung pada kewarganegaraan',
        ],
      },
      {
        id: 't1-s2',
        order: 2,
        title: 'Sejarah Perkembangan HAM',
        content:
          'Perkembangan HAM modern dimulai dari dokumen-dokumen bersejarah. Magna Carta (1215) di Inggris membatasi kekuasaan raja atas bangsawan — meskipun terbatas pada kalangan elit, dokumen ini menjadi preseden bahwa kekuasaan negara dapat dibatasi oleh hukum. Dua abad kemudian, Deklarasi Virginia (1776) menegaskan bahwa semua manusia dilahirkan sama dan memiliki hak atas kehidupan, kebebasan, dan kebahagiaan.\n\nTitik balik paling signifikan terjadi setelah Perang Dunia II (1939-1945). Kekejaman Nazi — genosida 6 juta Yahudi, eksperimen manusia, dan pembantaian massal — mengejutkan dunia dan membuktikan betapa berbahayanya negara tanpa batas. Pada 10 Desember 1948, Majelis Umum PBB mengesahkan Universal Declaration of Human Rights (UDHR) — dokumen yang menjadi fondasi sistem HAM internasional modern. Tanggal 10 Desember kini diperingati sebagai Hari HAM Internasional.\n\nPasca UDHR, sistem HAM terus berkembang. Tahun 1966 lahir dua kovenan utama: ICCPR (hak sipil-politik) dan ICESCR (hak ekonomi-sosial-budaya). Dekade berikutnya melahirkan konvensi-konvensi khusus: CEDAW untuk perempuan (1979), CRC untuk anak (1989), CRPD untuk disabilitas (2006), dan lain-lain.',
        keyPoints: [
          'Magna Carta (1215) menjadi preseden bahwa kekuasaan negara dapat dibatasi hukum',
          'UDHR 1948 lahir sebagai respons atas kekejaman Perang Dunia II',
          'ICCPR dan ICESCR (1966) mengubah deklarasi menjadi kewajiban hukum yang mengikat',
          'Sistem HAM terus berkembang dengan konvensi-konvensi khusus per kelompok rentan',
          '10 Desember diperingati sebagai Hari HAM Internasional',
        ],
      },
      {
        id: 't1-s3',
        order: 3,
        title: 'Lima Prinsip Fundamental HAM',
        content:
          'HAM dibangun di atas lima prinsip fundamental yang saling melengkapi. Pertama, universalitas: HAM berlaku bagi semua manusia di mana pun berada, tanpa diskriminasi. Tidak ada pengecualian berdasarkan budaya, agama, atau sistem politik — meskipun debat tentang relativisme budaya terus berlangsung. Prinsip ini menolak argumen bahwa HAM hanya produk Barat yang tidak berlaku di Asia atau negara berkembang.\n\nKedua, indivisibilitas: semua hak — sipil, politik, ekonomi, sosial, budaya — adalah satu kesatuan yang tidak dapat dipisahkan. Mengabaikan hak ekonomi (kemiskinan ekstrem) berdampak pada hak sipil (tidak mampu membayar pengacara). Memisahkan hak-hak ini adalah keliru secara prinsip. Ketiga, interdependensi: satu hak bergantung pada hak lainnya. Hak atas kesehatan bergantung pada hak atas air bersih; hak atas pendidikan bergantung pada hak atas pangan.\n\nKeempat, inalienabilitas: hak-hak ini tidak dapat dialihkan atau dicabut dari seseorang, termasuk oleh negara. Beberapa hak bersifat non-derogable (mutlak) — tidak boleh dikurangi bahkan dalam keadaan darurat nasional, seperti larangan penyiksaan dan perbudakan. Kelima, non-diskriminasi: HAM harus dijamin tanpa pembedaan apapun.',
        keyPoints: [
          'Universalitas: HAM berlaku bagi semua manusia tanpa pengecualian budaya atau agama',
          'Indivisibilitas: semua kategori hak (sipol, ekosob) tidak dapat dipisahkan',
          'Interdependensi: pemenuhan satu hak bergantung pada pemenuhan hak lainnya',
          'Inalienabilitas: hak tidak dapat dicabut; hak non-derogable tidak dapat dikurangi bahkan dalam darurat',
          'Non-diskriminasi: HAM harus dijamin tanpa pembedaan apapun',
        ],
      },
      {
        id: 't1-s4',
        order: 4,
        title: 'Tiga Generasi Hak Asasi Manusia',
        content:
          'Karel Vasak (1977) mengklasifikasikan HAM dalam tiga generasi berdasarkan perkembangan historisnya. Generasi pertama adalah hak sipil dan politik (hak sipol) — hak untuk hidup, bebas dari penyiksaan, bebas bergerak, kebebasan berpendapat, hak memilih. Hak-hak ini muncul dari revolusi liberal abad 17-18 dan dijamin dalam ICCPR. Fokusnya adalah pembatasan kekuasaan negara (hak negatif — negara dilarang melakukan sesuatu).\n\nGenerasi kedua adalah hak ekonomi, sosial, dan budaya (hak ekosob) — hak atas pekerjaan, perumahan, kesehatan, pendidikan, dan standar hidup yang layak. Muncul dari gerakan sosialis abad 19-20 dan dijamin dalam ICESCR. Berbeda dari generasi pertama, hak ekosob memerlukan tindakan positif negara — menyediakan layanan, mengalokasikan anggaran. Karena keterbatasan sumber daya, implementasinya dilakukan secara progresif (progressive realization).\n\nGenerasi ketiga adalah hak kolektif dan solidaritas — hak atas pembangunan, hak atas lingkungan hidup yang bersih, hak atas perdamaian. Muncul dari dekolonisasi abad 20 dan masih dalam perdebatan hukum internasional karena belum dicodifikasi dalam instrumen mengikat.',
        keyPoints: [
          'Gen 1 (sipol): kebebasan individu dari intervensi negara — ICCPR',
          'Gen 2 (ekosob): tuntutan tindakan positif negara — ICESCR, implementasi progresif',
          'Gen 3 (solidaritas): hak kolektif atas pembangunan dan lingkungan, masih berkembang',
          'Ketiga generasi saling melengkapi, bukan bertentangan',
        ],
      },
      {
        id: 't1-s5',
        order: 5,
        title: 'HAM dalam Konstitusi Indonesia dan Kewajiban Negara',
        content:
          'Indonesia mengakui HAM secara konstitusional melalui Pasal 28A–28J UUD 1945 (hasil amandemen 1999-2002). Pasal 28A menjamin hak untuk hidup; 28B tentang hak berkeluarga; 28C hak atas pendidikan; 28D hak atas pengakuan hukum; 28E kebebasan beragama dan berpendapat; 28F hak atas informasi; 28G perlindungan diri; 28H hak atas kesejahteraan; 28I hak-hak yang tidak dapat dikurangi (non-derogable); dan 28J mewajibkan setiap orang menghormati HAM orang lain. UU No. 39 Tahun 1999 tentang HAM memperkuat jaminan ini di tingkat undang-undang.\n\nNegara memiliki kewajiban tiga dimensi dalam HAM. Kewajiban menghormati (to respect): negara tidak boleh secara aktif melanggar HAM — tidak boleh menangkap warga tanpa surat perintah, tidak boleh menyiksa tahanan. Kewajiban melindungi (to protect): negara harus mencegah pihak ketiga (individu, korporasi) melanggar HAM warga — membuat regulasi, mengawasi perusahaan. Kewajiban memenuhi (to fulfill): negara mengambil langkah aktif untuk memastikan HAM dapat dinikmati — membangun rumah sakit, menyelenggarakan sekolah.\n\nDalam kasus Wadas, ketiga kewajiban ini terlanggar: negara secara aktif melanggar (penangkapan sewenang-wenang), gagal melindungi (membiarkan intimidasi), dan gagal memenuhi (tidak ada konsultasi bermakna sebelum proyek).',
        keyPoints: [
          'UUD 1945 Pasal 28A-28J menjamin HAM — hasil amandemen 1999-2002',
          'Pasal 28I menetapkan hak-hak non-derogable yang tidak dapat dikurangi',
          'Tiga kewajiban negara: menghormati (pasif), melindungi (preventif), memenuhi (aktif)',
          'UU 39/1999 memperkuat jaminan HAM di tingkat undang-undang',
          'Kewajiban tiga dimensi berlaku juga dalam konteks pembangunan infrastruktur',
        ],
      },
    ],

    flashCards: [
      {
        id: 't1-fc-1',
        category: 'definition',
        front: 'Apa definisi Hak Asasi Manusia?',
        back: 'Hak yang melekat pada setiap manusia sejak lahir, bersifat universal dan tidak dapat dicabut, tidak bergantung pada pengakuan negara. HAM adalah hak kodrati yang lahir bersamaan dengan keberadaan manusia itu sendiri.',
      },
      {
        id: 't1-fc-2',
        category: 'concept',
        front: 'Apa yang dimaksud dengan prinsip universalitas HAM?',
        back: 'HAM berlaku bagi semua manusia di mana pun berada, tanpa memandang ras, jenis kelamin, kebangsaan, agama, atau status lainnya. Tidak ada pengecualian budaya atau geografis — HAM bersifat universal, bukan hanya produk Barat.',
      },
      {
        id: 't1-fc-3',
        category: 'concept',
        front: 'Apa maksud prinsip indivisibilitas?',
        back: 'Semua hak — sipil, politik, ekonomi, sosial, dan budaya — saling berkaitan dan tidak dapat dipisahkan. Mengabaikan hak ekonomi (kemiskinan) berdampak langsung pada hak sipil (tidak mampu mengakses keadilan).',
      },
      {
        id: 't1-fc-4',
        category: 'concept',
        front: 'Apa itu inalienabilitas dalam HAM?',
        back: 'Hak yang tidak dapat dialihkan atau dicabut dari seseorang, termasuk oleh negara. Hak non-derogable (mutlak) seperti larangan penyiksaan tidak dapat dikurangi bahkan dalam keadaan darurat nasional sekalipun.',
      },
      {
        id: 't1-fc-5',
        category: 'legal',
        front: 'Kapan UDHR dideklarasikan dan apa signifikansinya?',
        back: '10 Desember 1948 oleh Majelis Umum PBB, sebagai respons atas kekejaman Perang Dunia II. UDHR menjadi fondasi sistem HAM internasional modern — meskipun bersifat deklarasi (soft law), ia menjadi referensi universal bagi semua negara.',
      },
      {
        id: 't1-fc-6',
        category: 'concept',
        front: 'Apa perbedaan HAM Generasi 1 dan Generasi 2?',
        back: 'Gen 1 (hak sipol): hak negatif yang membatasi intervensi negara — kebebasan, hak memilih, bebas dari penyiksaan, dijamin ICCPR. Gen 2 (hak ekosob): hak positif yang menuntut tindakan aktif negara — pendidikan, kesehatan, pekerjaan, dijamin ICESCR.',
      },
      {
        id: 't1-fc-7',
        category: 'legal',
        front: 'Apa isi Pasal 28I UUD 1945?',
        back: 'Menetapkan hak-hak yang tidak dapat dikurangi (non-derogable) dalam kondisi apapun: hak untuk hidup, bebas dari penyiksaan, perbudakan, bebas dari penuntutan berdasarkan hukum berlaku surut, dan hak beragama.',
      },
      {
        id: 't1-fc-8',
        category: 'concept',
        front: 'Apa kewajiban "menghormati" negara terhadap HAM?',
        back: 'Kewajiban pasif: negara tidak boleh secara aktif melanggar HAM warganya. Contoh: negara tidak boleh menangkap tanpa surat perintah, tidak boleh menyiksa tahanan, tidak boleh melarang ibadah.',
      },
      {
        id: 't1-fc-9',
        category: 'concept',
        front: 'Apa perbedaan kewajiban "melindungi" dan "memenuhi"?',
        back: 'Melindungi: negara mencegah pihak ketiga (korporasi, individu) melanggar HAM — membuat regulasi bisnis, mengawasi keamanan. Memenuhi: negara mengambil tindakan positif agar HAM dapat dinikmati — membangun sekolah, menyediakan layanan kesehatan.',
      },
      {
        id: 't1-fc-10',
        category: 'case',
        front: 'Bagaimana kasus Wadas mencerminkan pelanggaran prinsip HAM?',
        back: 'Kasus Wadas melanggar universalitas (penangkapan sewenang-wenang terhadap warga biasa), indivisibilitas (hak sipil dan hak atas tanah dilanggar bersamaan), serta inalienabilitas (kebebasan warga dicabut tanpa proses hukum yang sah).',
      },
    ],

    glossary: [
      { term: 'Hak Asasi Manusia (HAM)', definition: 'Hak yang melekat pada setiap manusia sejak lahir, bersifat universal, tidak dapat dicabut, dan tidak bergantung pada pengakuan negara manapun.', relatedTerms: ['Martabat Manusia', 'Hak Kodrati'], category: 'concept' },
      { term: 'Universalitas', definition: 'Prinsip bahwa HAM berlaku bagi semua manusia di mana pun tanpa pengecualian berdasarkan ras, gender, agama, kebangsaan, atau status lainnya.', relatedTerms: ['Non-diskriminasi', 'Indivisibilitas'], category: 'concept' },
      { term: 'Indivisibilitas', definition: 'Prinsip keterkaitan dan kesatuan semua kategori hak — sipil, politik, ekonomi, sosial, budaya — yang tidak dapat dipisahkan satu sama lain.', relatedTerms: ['Interdependensi', 'Universalitas'], category: 'concept' },
      { term: 'Inalienabilitas', definition: 'Sifat hak yang tidak dapat dialihkan atau dicabut dari pemegangnya, termasuk oleh negara sekalipun. Beberapa hak bersifat non-derogable secara absolut.', relatedTerms: ['Non-derogable Rights', 'Martabat Manusia'], category: 'concept' },
      { term: 'Non-derogable Rights', definition: 'Hak mutlak yang tidak dapat dikurangi bahkan dalam keadaan darurat nasional, meliputi larangan penyiksaan, perbudakan, dan penuntutan retroaktif.', relatedTerms: ['Inalienabilitas', 'Pasal 28I UUD 1945'], category: 'legal' },
      { term: 'UDHR', definition: 'Universal Declaration of Human Rights — Deklarasi HAM Universal yang disahkan PBB pada 10 Desember 1948 sebagai standar pencapaian bersama bagi semua bangsa.', relatedTerms: ['ICCPR', 'ICESCR'], category: 'legal' },
      { term: 'Martabat Manusia', definition: 'Nilai inheren dan setara yang dimiliki setiap manusia hanya karena keberadaannya sebagai manusia — fondasi filosofis dari seluruh sistem HAM.', relatedTerms: ['HAM', 'Universalitas'], category: 'concept' },
      { term: 'Kewajiban Tiga Dimensi', definition: 'Tiga kewajiban negara terhadap HAM: menghormati (tidak melanggar aktif), melindungi (mencegah pelanggaran oleh pihak ketiga), dan memenuhi (tindakan aktif pemenuhan).', relatedTerms: ['Akuntabilitas Negara', 'Implementasi HAM'], category: 'mechanism' },
      { term: 'Generasi HAM', definition: 'Kategorisasi HAM berdasarkan perkembangan historis: Gen 1 (sipol), Gen 2 (ekosob), Gen 3 (hak kolektif/solidaritas). Ketiga generasi saling melengkapi.', relatedTerms: ['ICCPR', 'ICESCR'], category: 'concept' },
      { term: 'Jus Cogens', definition: 'Norma hukum internasional yang bersifat memaksa (peremptory norm) — tidak dapat disimpangi oleh perjanjian apapun. Larangan genosida dan perbudakan adalah contoh jus cogens.', relatedTerms: ['Erga Omnes', 'Non-derogable Rights'], category: 'legal' },
      { term: 'Erga Omnes', definition: 'Kewajiban yang berlaku terhadap semua negara (bukan hanya pihak dalam perjanjian). Perlindungan HAM fundamental dianggap kewajiban erga omnes.', relatedTerms: ['Jus Cogens', 'Universalitas'], category: 'legal' },
      { term: 'Relativisme Budaya', definition: 'Pandangan yang menolak universalitas HAM dengan alasan HAM bersifat relatif terhadap budaya atau konteks lokal. Pandangan ini ditolak dalam sistem HAM internasional.', relatedTerms: ['Universalitas', 'UDHR'], category: 'concept' },
    ],

    essayGuide: {
      introduction: {
        title: 'Menulis Pembuka Esai HAM',
        explanation: 'Pembuka yang kuat langsung mengidentifikasi topik hukum utama dan menghubungkannya dengan fakta kasus. Hindari pembukaan yang terlalu umum atau hanya mendeskripsi kronologi kejadian.',
        template: 'Kasus Wadas mencerminkan ketegangan nyata antara kepentingan pembangunan infrastruktur negara dan perlindungan hak asasi warga. Tiga prinsip fundamental HAM — universalitas, indivisibilitas, dan inalienabilitas — terlanggar secara bersamaan dalam konteks ini, menunjukkan kegagalan sistemik dalam pelaksanaan kewajiban tiga dimensi negara.',
        doList: ['Sebutkan prinsip HAM yang akan dianalisis di awal', 'Hubungkan prinsip dengan fakta kasus secara singkat', 'Cantumkan landasan hukum yang akan digunakan', 'Akhiri dengan tesis yang jelas tentang posisi Anda'],
        dontList: ['Jangan mulai dengan definisi kamus yang panjang', 'Jangan hanya menceritakan kronologi kasus', 'Jangan tunda menyebut prinsip HAM hingga paragraf akhir'],
      },
      body: {
        title: 'Membangun Isi Esai secara Sistematis',
        explanation: 'Isi esai harus menganalisis setiap prinsip secara berurutan, menghubungkan teori dengan fakta kasus, dan menyertakan dasar hukum yang relevan. Struktur: Prinsip → Definisi singkat → Aplikasi pada kasus → Dasar hukum.',
        template: 'Pertama, prinsip universalitas menegaskan bahwa HAM berlaku bagi setiap warga tanpa pengecualian, termasuk warga Wadas. Penangkapan tanpa surat perintah melanggar Pasal 28G UUD 1945 dan Pasal 17 ICCPR (UU 12/2005) yang melindungi kebebasan dari tindakan sewenang-wenang.',
        doList: ['Bahas setiap prinsip dalam paragraf tersendiri', 'Gunakan kata penghubung: "Pertama... Kedua... Ketiga..."', 'Hubungkan setiap pelanggaran dengan dasar hukum spesifik', 'Sertakan analisis kewajiban tiga dimensi negara', 'Evaluasi, bukan hanya deskripsi'],
        dontList: ['Jangan campur adukkan semua prinsip dalam satu paragraf', 'Jangan hanya menyebut nama UU tanpa penjelasan relevansinya', 'Jangan lupa analisis: mengapa ini merupakan pelanggaran?'],
      },
      conclusion: {
        title: 'Menulis Penutup dengan Rekomendasi Konkret',
        explanation: 'Penutup harus merangkum temuan analisis dan memberikan rekomendasi yang spesifik, terukur, dan dapat diimplementasikan. Hindari rekomendasi yang terlalu umum seperti "pemerintah harus lebih baik".',
        template: 'Berdasarkan analisis di atas, terdapat kegagalan sistemik dalam pemenuhan kewajiban tiga dimensi negara. Untuk memulihkan hak yang terlanggar sekaligus melanjutkan pembangunan, pemerintah perlu mengambil lima langkah konkret berikut.',
        doList: ['Rangkum poin analisis utama dalam 1-2 kalimat', 'Berikan 3-5 rekomendasi yang spesifik dan terukur', 'Tunjukkan bahwa rekomendasi bisa seimbangkan pembangunan dan HAM', 'Akhiri dengan kalimat yang tegas namun konstruktif'],
        dontList: ['Jangan hanya mengulangi isi tanpa menambah nilai', 'Hindari rekomendasi yang abstrak seperti "tingkatkan kesadaran"', 'Jangan lupa bahwa pemulihan korban harus menjadi bagian dari rekomendasi'],
      },
      sampleOutline:
        'I. PEMBUKA\n   • Identifikasi tiga prinsip HAM yang dilanggar dalam kasus Wadas\n   • Kewajiban tiga dimensi negara sebagai kerangka analisis\n   • Tesis: kegagalan sistemik yang memerlukan perbaikan struktural\n\nII. ISI\n   A. Pelanggaran Prinsip Universalitas\n      - Penangkapan tanpa surat perintah (Pasal 28G UUD 1945, ICCPR Pasal 9)\n      - Intimidasi terhadap semua warga tanpa kecuali\n   B. Pelanggaran Prinsip Indivisibilitas\n      - Hak sipil (kebebasan) + hak ekonomi (tanah) dilanggar bersamaan\n      - Tidak dapat dipisahkan satu sama lain\n   C. Pelanggaran Prinsip Inalienabilitas\n      - Penangkapan = pencabutan hak kebebasan yang tidak sah\n      - Non-derogable rights tidak dapat dikurangi\n   D. Evaluasi Kewajiban Tiga Dimensi Negara\n      - Gagal menghormati: aparat melakukan intimidasi\n      - Gagal melindungi: tidak ada mekanisme pengaduan efektif\n      - Gagal memenuhi: tidak ada konsultasi bermakna\n\nIII. PENUTUP & REKOMENDASI\n   1. Investigasi independen oleh Komnas HAM\n   2. HRIA sebelum melanjutkan proyek\n   3. Konsultasi bermakna (FPIC) dengan warga\n   4. Pemulihan dan kompensasi korban\n   5. Revisi mekanisme pengadaan tanah',
      tips: [
        'Gunakan framing "kewajiban tiga dimensi" sebagai struktur analisis — ini menunjukkan kedalaman pemahaman',
        'Setiap prinsip HAM harus dihubungkan dengan minimal satu pasal UU atau konvensi yang spesifik',
        'Bedakan antara deskripsi (apa yang terjadi) dan analisis (mengapa ini melanggar HAM)',
        'Rekomendasi yang baik adalah SMART: Specific, Measurable, Achievable, Relevant, Time-bound',
        'Istilah "konsultasi bermakna" lebih tepat daripada sekadar "konsultasi" — menunjukkan pemahaman FPIC',
        'Hindari penilaian moral yang berlebihan; gunakan bahasa hukum dan analitis',
      ],
      commonMistakes: [
        'Mencampur adukkan universalitas, indivisibilitas, dan inalienabilitas tanpa membedakan masing-masing dengan jelas',
        'Memberikan rekomendasi yang terlalu umum: "pemerintah harus lebih memperhatikan HAM" — tidak spesifik dan tidak terukur',
        'Hanya mendeskripsikan kasus tanpa analisis mengapa tindakan tersebut merupakan pelanggaran prinsip HAM',
        'Melupakan aspek pemulihan korban dalam rekomendasi — padahal ini salah satu kewajiban utama negara',
      ],
    },

    infographic: {
      title: 'Peta Konsep Pengantar HAM',
      centerTopic: 'HAM',
      branches: [
        { label: 'Definisi & Sifat', items: ['Hak Kodrati', 'Universal', 'Tidak Dapat Dicabut', 'Melekat Sejak Lahir'], color: 'teal-soft' },
        { label: 'Sejarah', items: ['Magna Carta 1215', 'UDHR 1948', 'ICCPR & ICESCR 1966', 'Konvensi Khusus'], color: 'sage' },
        { label: 'Prinsip Utama', items: ['Universalitas', 'Indivisibilitas', 'Inalienabilitas', 'Non-diskriminasi'], color: 'lavender' },
        { label: 'Generasi HAM', items: ['Gen 1: Sipil-Politik', 'Gen 2: Ekosob', 'Gen 3: Solidaritas'], color: 'sand' },
        { label: 'Konstitusi RI', items: ['Pasal 28A-28J UUD', 'UU 39/1999', 'RANHAM', 'UU 26/2000'], color: 'rose-dust' },
        { label: 'Kewajiban Negara', items: ['Menghormati', 'Melindungi', 'Memenuhi'], color: 'teal-soft' },
      ],
      connections: [
        'Sejarah → landasan UDHR → Prinsip Utama',
        'Prinsip Utama → dicodifikasi → Konstitusi RI',
        'Generasi HAM → kewajiban berbeda → Kewajiban Negara',
      ],
    },
  },

  // ─── TOPIK 2: Pengenalan Badan-Badan HAM ─────────────────────────────────────
  {
    topicNumber: 2,
    topicName: 'Pengenalan Badan-Badan HAM',
    topicTag: 'Kelembagaan HAM',
    isEnglish: false,
    relatedQuestionId: 2,
    overview:
      'Topik ini membahas lembaga HAM nasional (Komnas HAM, KPAI, Komnas Perempuan, Ombudsman) dan internasional (UNHRC, ICC, OHCHR), mekanisme UPR dan Special Procedures, serta koordinasi antar lembaga dalam penanganan dugaan pelanggaran HAM berat.',

    textContent: [
      {
        id: 't2-s1',
        order: 1,
        title: 'Lembaga HAM Nasional di Indonesia',
        content:
          'Indonesia memiliki beberapa lembaga HAM nasional yang masing-masing memiliki mandat berbeda. Komnas HAM (Komisi Nasional Hak Asasi Manusia) adalah lembaga independen yang dibentuk berdasarkan UU 39/1999. Tugas utamanya adalah pengkajian, penelitian, penyuluhan, pemantauan, dan mediasi HAM. Dalam konteks pelanggaran HAM berat, Komnas HAM berwenang melakukan penyelidikan — namun tidak berwenang melakukan penyidikan atau penuntutan.\n\nKomisi Nasional Anti Kekerasan terhadap Perempuan (Komnas Perempuan) dibentuk via Perpres 65/2005, berfokus pada penghapusan kekerasan terhadap perempuan dan pemantauan implementasi CEDAW. Komisi Perlindungan Anak Indonesia (KPAI) dibentuk berdasarkan UU 23/2002, bertugas melindungi anak dari kekerasan, eksploitasi, dan diskriminasi. Ombudsman Republik Indonesia menangani maladministrasi pelayanan publik — yang seringkali merupakan bentuk pelanggaran HAM tidak langsung.',
        keyPoints: [
          'Komnas HAM: penyelidikan pelanggaran HAM berat, mediasi, pengkajian — bukan penyidikan',
          'Komnas Perempuan: fokus kekerasan gender dan implementasi CEDAW',
          'KPAI: perlindungan anak dari kekerasan, eksploitasi, dan diskriminasi',
          'Ombudsman: maladministrasi pelayanan publik — bentuk pelanggaran HAM tidak langsung',
        ],
      },
      {
        id: 't2-s2',
        order: 2,
        title: 'Kewenangan dan Keterbatasan Komnas HAM',
        content:
          'Komnas HAM memiliki kewenangan yang cukup luas dalam pengkajian dan pemantauan, namun keterbatasannya terletak pada tahap penindakan. Komnas HAM dapat memanggil pihak-pihak untuk dimintai keterangan, melakukan investigasi lapangan, menerima pengaduan, dan memberikan rekomendasi. Namun, rekomendasinya tidak mengikat secara hukum — lembaga lain tidak wajib mengikutinya.\n\nDalam penanganan pelanggaran HAM berat (genosida dan kejahatan terhadap kemanusiaan), Komnas HAM hanya berwenang melakukan penyelidikan (mencari bukti awal dan menyimpulkan dugaan pelanggaran). Penyidikan dilakukan oleh Jaksa Agung. Ini menciptakan celah: jika Jaksa Agung menolak berkas penyelidikan Komnas HAM, kasus dapat macet. Inilah yang terjadi dalam kasus Kanjuruhan — Komnas HAM menyimpulkan ada pelanggaran HAM berat, tetapi Jaksa Agung menolak berkas karena dianggap tidak memenuhi syarat formil.',
        keyPoints: [
          'Komnas HAM: penyelidikan (mencari bukti awal) — bukan penyidikan (mengumpulkan bukti untuk penuntutan)',
          'Rekomendasi Komnas HAM tidak mengikat secara hukum — bergantung pada kemauan politik lembaga lain',
          'Jika Jaksa Agung menolak berkas, tidak ada mekanisme banding yang jelas',
          'Keterbatasan ini menciptakan potensi impunitas dalam kasus HAM berat',
        ],
      },
      {
        id: 't2-s3',
        order: 3,
        title: 'Pengadilan HAM dan Mekanisme Ad Hoc',
        content:
          'Pengadilan HAM diatur dalam UU 26/2000. Untuk pelanggaran HAM berat yang terjadi setelah UU ini berlaku, Pengadilan HAM bersifat permanen dan berlokasi di beberapa kota. Untuk pelanggaran HAM berat yang terjadi sebelum UU 26/2000, diperlukan Pengadilan HAM Ad Hoc yang pembentukannya melalui mekanisme khusus.\n\nMekanisme Pengadilan HAM Ad Hoc: (1) Komnas HAM melakukan penyelidikan dan menyerahkan hasil ke Jaksa Agung; (2) Jaksa Agung melakukan penyidikan; (3) Jaksa Agung mengajukan ke DPR; (4) DPR mengeluarkan rekomendasi kepada Presiden; (5) Presiden mengeluarkan Keputusan Presiden pembentukan Pengadilan Ad Hoc. Mekanisme ini sangat bergantung pada kemauan politik DPR dan Presiden, sehingga mudah terhambat.',
        keyPoints: [
          'UU 26/2000: Pengadilan HAM permanen untuk pelanggaran setelah 2000',
          'Pengadilan Ad Hoc untuk kasus sebelum 2000 membutuhkan rekomendasi DPR dan Keppres',
          'Lima tahap mekanisme ad hoc — bergantung pada kemauan politik, bukan otomatis',
          'Impunitas struktural terjadi ketika rantai ini putus di salah satu tahap',
        ],
      },
      {
        id: 't2-s4',
        order: 4,
        title: 'Lembaga HAM Internasional',
        content:
          'Di tingkat internasional, Dewan HAM PBB (UN Human Rights Council/UNHRC) adalah badan antar-pemerintah yang bertanggung jawab memperkuat promosi dan perlindungan HAM global. UNHRC memiliki 47 anggota yang dipilih oleh Majelis Umum PBB. Kantor Komisioner Tinggi HAM PBB (OHCHR) adalah sekretariat yang mendukung kerja UNHRC dan berbagai mekanisme HAM PBB.\n\nKomite-komite Perjanjian (Treaty Bodies) adalah badan ahli independen yang memantau implementasi konvensi HAM spesifik: CCPR (ICCPR), CESCR (ICESCR), CEDAW (CEDAW), CRC (CRC), dan lainnya. Setiap negara yang meratifikasi konvensi wajib menyampaikan laporan berkala. Mahkamah Pidana Internasional (ICC) mengadili individu yang diduga melakukan genosida, kejahatan perang, dan kejahatan terhadap kemanusiaan — bukan mengadili negara.',
        keyPoints: [
          'UNHRC: badan antar-pemerintah, 47 anggota, membahas situasi HAM dan membuat resolusi',
          'OHCHR: sekretariat teknis yang mendukung mekanisme HAM PBB',
          'Treaty Bodies: komite ahli yang memantau implementasi setiap konvensi HAM',
          'ICC: mengadili individu atas kejahatan berat — bukan mengadili negara (itu wilayah ICJ)',
        ],
      },
      {
        id: 't2-s5',
        order: 5,
        title: 'Mekanisme UPR dan Special Procedures',
        content:
          'Universal Periodic Review (UPR) adalah mekanisme unik UNHRC di mana setiap negara anggota PBB dievaluasi HAM-nya secara berkala (setiap 4,5 tahun). Indonesia telah menjalani beberapa siklus UPR. Dalam proses ini, negara lain dan masyarakat sipil dapat memberikan rekomendasi. Negara yang dievaluasi dapat menerima, menolak, atau "mencatat" rekomendasi. Kelemahan: tidak ada sanksi untuk negara yang menolak rekomendasi.\n\nSpecial Procedures adalah mekanisme independen UNHRC berupa mandate holders (individu atau kelompok kerja) yang memantau isu HAM spesifik atau situasi di negara tertentu. Terdapat Special Rapporteur untuk berbagai isu: hak atas makanan, hak atas perumahan, kebebasan berekspresi, situasi pembela HAM, dan lainnya. Mereka dapat melakukan country visits (dengan persetujuan negara), menerima laporan dugaan pelanggaran, dan memberikan pernyataan publik.',
        keyPoints: [
          'UPR: semua 193 negara anggota PBB dievaluasi berkala — mekanisme paling inklusif',
          'Rekomendasi UPR tidak mengikat, namun memberikan tekanan diplomatik',
          'Special Rapporteur: ahli independen, tidak mewakili negara manapun',
          'Country visits membutuhkan undangan/persetujuan negara yang bersangkutan',
        ],
      },
    ],

    flashCards: [
      { id: 't2-fc-1', category: 'definition', front: 'Apa perbedaan penyelidikan dan penyidikan dalam HAM berat?', back: 'Penyelidikan dilakukan Komnas HAM: mencari dan menentukan ada tidaknya dugaan pelanggaran HAM berat. Penyidikan dilakukan Jaksa Agung: mengumpulkan bukti-bukti untuk keperluan penuntutan. Keduanya berbeda tahap dan kewenangan.' },
      { id: 't2-fc-2', category: 'definition', front: 'Apa kewenangan Komnas HAM?', back: 'Pengkajian, penelitian, penyuluhan, pemantauan, mediasi, dan penyelidikan pelanggaran HAM berat. Komnas HAM tidak berwenang menyidik, menuntut, atau mengeksekusi putusan — rekomendasinya tidak mengikat secara hukum.' },
      { id: 't2-fc-3', category: 'concept', front: 'Bagaimana mekanisme Pengadilan HAM Ad Hoc diaktifkan?', back: 'Lima tahap: Komnas HAM menyelidiki → Jaksa Agung menyidik → Jaksa Agung mengajukan ke DPR → DPR merekomendasikan ke Presiden → Presiden menerbitkan Keppres pembentukan Pengadilan Ad Hoc.' },
      { id: 't2-fc-4', category: 'concept', front: 'Apa itu UPR (Universal Periodic Review)?', back: 'Mekanisme UNHRC yang mengevaluasi situasi HAM semua negara anggota PBB setiap 4,5 tahun. Semua 193 negara anggota PBB tunduk pada UPR — paling inklusif, namun rekomendasi tidak mengikat.' },
      { id: 't2-fc-5', category: 'definition', front: 'Apa perbedaan UNHRC dan OHCHR?', back: 'UNHRC adalah badan antar-pemerintah (47 negara anggota) yang membuat keputusan politik tentang HAM. OHCHR adalah kantor sekretariat teknis yang mendukung kerja UNHRC dan mekanisme perjanjian.' },
      { id: 't2-fc-6', category: 'definition', front: 'Apa mandat Special Rapporteur PBB?', back: 'Ahli independen yang ditunjuk UNHRC untuk memantau isu HAM spesifik atau situasi negara tertentu. Mereka tidak mewakili negara manapun, dapat menerima laporan dugaan pelanggaran, melakukan country visit, dan mengeluarkan pernyataan publik.' },
      { id: 't2-fc-7', category: 'definition', front: 'Apa peran KPAI?', back: 'Komisi Perlindungan Anak Indonesia bertugas melindungi anak dari kekerasan, eksploitasi, diskriminasi, dan perlakuan salah. KPAI menerima pengaduan, melakukan pengawasan, dan merekomendasikan kebijakan perlindungan anak.' },
      { id: 't2-fc-8', category: 'legal', front: 'Apa itu ICC dan apa bedanya dengan ICJ?', back: 'ICC (Mahkamah Pidana Internasional) mengadili individu atas genosida, kejahatan perang, dan kejahatan kemanusiaan. ICJ (Mahkamah Internasional) mengadili sengketa antar negara. Indonesia belum meratifikasi Statuta Roma (ICC).' },
      { id: 't2-fc-9', category: 'case', front: 'Mengapa kasus Kanjuruhan menunjukkan keterbatasan Komnas HAM?', back: 'Komnas HAM menyimpulkan ada pelanggaran HAM berat, namun Jaksa Agung menolak berkas karena dianggap tidak memenuhi syarat formil. Tanpa penyidikan Jaksa Agung, pengadilan HAM tidak dapat diproses — menciptakan impunitas.' },
      { id: 't2-fc-10', category: 'definition', front: 'Apa peran Ombudsman dalam konteks HAM?', back: 'Ombudsman RI menangani maladministrasi pelayanan publik. Maladministrasi (diskriminasi layanan, penundaan yang tidak wajar, penyalahgunaan wewenang) sering merupakan bentuk pelanggaran HAM tidak langsung — khususnya hak ekosob.' },
    ],

    glossary: [
      { term: 'Komnas HAM', definition: 'Komisi Nasional Hak Asasi Manusia — lembaga negara independen yang bertugas pengkajian, pemantauan, mediasi, dan penyelidikan pelanggaran HAM berat di Indonesia.', relatedTerms: ['Penyelidikan', 'Impunitas'], category: 'institution' },
      { term: 'Penyelidikan', definition: 'Tahap awal penegakan HAM berat oleh Komnas HAM — menentukan ada tidaknya dugaan pelanggaran HAM berat. Berbeda dari penyidikan yang dilakukan Jaksa Agung.', relatedTerms: ['Penyidikan', 'Komnas HAM'], category: 'mechanism' },
      { term: 'Penyidikan', definition: 'Tahap pengumpulan bukti-bukti untuk keperluan penuntutan dalam perkara HAM berat, dilakukan oleh Jaksa Agung setelah menerima hasil penyelidikan Komnas HAM.', relatedTerms: ['Penyelidikan', 'Jaksa Agung'], category: 'mechanism' },
      { term: 'UNHRC', definition: 'UN Human Rights Council — Dewan HAM PBB, badan antar-pemerintah dengan 47 anggota yang bertanggung jawab memperkuat promosi dan perlindungan HAM global.', relatedTerms: ['OHCHR', 'UPR'], category: 'institution' },
      { term: 'UPR', definition: 'Universal Periodic Review — mekanisme UNHRC yang mengevaluasi situasi HAM semua 193 negara anggota PBB setiap 4,5 tahun secara berkala.', relatedTerms: ['UNHRC', 'Special Rapporteur'], category: 'mechanism' },
      { term: 'Special Rapporteur', definition: 'Ahli independen yang ditunjuk UNHRC untuk memantau isu HAM spesifik atau situasi negara tertentu. Tidak mewakili pemerintah manapun.', relatedTerms: ['UNHRC', 'UPR'], category: 'institution' },
      { term: 'ICC', definition: 'International Criminal Court — Mahkamah Pidana Internasional yang mengadili individu atas genosida, kejahatan perang, dan kejahatan terhadap kemanusiaan.', relatedTerms: ['ICJ', 'Statuta Roma'], category: 'institution' },
      { term: 'OHCHR', definition: 'Office of the High Commissioner for Human Rights — Kantor Komisioner Tinggi HAM PBB, sekretariat teknis yang mendukung seluruh mekanisme HAM sistem PBB.', relatedTerms: ['UNHRC', 'Treaty Bodies'], category: 'institution' },
      { term: 'Impunitas', definition: 'Kondisi di mana pelanggar HAM tidak dapat dimintai pertanggungjawaban hukum karena kegagalan mekanisme penegakan hukum atau kemauan politik yang tidak ada.', relatedTerms: ['Akuntabilitas', 'Pengadilan HAM'], category: 'concept' },
      { term: 'Pengadilan HAM Ad Hoc', definition: 'Pengadilan HAM yang dibentuk khusus untuk mengadili pelanggaran HAM berat yang terjadi sebelum UU 26/2000, dibentuk berdasarkan rekomendasi DPR dan Keppres.', relatedTerms: ['UU 26/2000', 'Komnas HAM'], category: 'mechanism' },
      { term: 'Treaty Bodies', definition: 'Komite ahli independen yang memantau implementasi konvensi HAM spesifik — CCPR untuk ICCPR, CESCR untuk ICESCR, CEDAW Committee untuk CEDAW, dll.', relatedTerms: ['OHCHR', 'UNHRC'], category: 'institution' },
      { term: 'KPAI', definition: 'Komisi Perlindungan Anak Indonesia — lembaga negara yang bertugas mengawasi dan melindungi hak anak, menerima pengaduan, dan merekomendasikan kebijakan perlindungan anak.', relatedTerms: ['CRC', 'UU 35/2014'], category: 'institution' },
    ],

    essayGuide: {
      introduction: {
        title: 'Pembuka Esai Kelembagaan HAM',
        explanation: 'Pembuka harus langsung menunjukkan pemahaman tentang arsitektur kelembagaan HAM dan mengidentifikasi masalah koordinasi yang menjadi inti soal.',
        template: 'Tragedi Kanjuruhan mengekspos keterbatasan struktural sistem kelembagaan HAM Indonesia: ketika Komnas HAM menyimpulkan adanya pelanggaran HAM berat namun Jaksa Agung menolak melanjutkan penyidikan, celah kewenangan ini menciptakan impunitas yang sistemik dan melemahkan kepercayaan publik terhadap mekanisme penegakan HAM.',
        doList: ['Identifikasi lembaga-lembaga yang terlibat secara langsung', 'Jelaskan masalah koordinasi sebagai inti analisis', 'Tunjukkan pemahaman tentang perbedaan penyelidikan dan penyidikan'],
        dontList: ['Jangan mulai dengan daftar nama lembaga tanpa konteks', 'Jangan anggap Komnas HAM bisa langsung mengadili'],
      },
      body: {
        title: 'Analisis Koordinasi Antar Lembaga',
        explanation: 'Uraikan peran masing-masing lembaga, tunjukkan di mana koordinasi gagal, dan analisis akar masalahnya — apakah ini masalah hukum, kapasitas, atau kemauan politik.',
        template: 'Komnas HAM, sebagai lembaga penyelidik pelanggaran HAM berat berdasarkan UU 39/1999 jo. UU 26/2000, telah menyelesaikan fungsinya dengan menyimpulkan dugaan pelanggaran dan menyerahkan berkas ke Jaksa Agung. Namun, penolakan Jaksa Agung atas berkas tersebut memutus rantai penegakan hukum yang seharusnya berlanjut ke pengadilan.',
        doList: ['Analisis setiap lembaga: peran, kewenangan, dan apa yang gagal', 'Gunakan dasar hukum: UU 39/1999, UU 26/2000, Pasal 43 UU 26/2000', 'Tunjukkan bahwa masalah bukan hanya hukum, tetapi juga kemauan politik', 'Bahas mekanisme pengadilan ad hoc secara spesifik'],
        dontList: ['Jangan hanya menyebutkan nama lembaga tanpa analisis fungsinya', 'Jangan asumsikan bahwa rekomendasi Komnas HAM otomatis mengikat'],
      },
      conclusion: {
        title: 'Rekomendasi Perbaikan Kelembagaan',
        explanation: 'Rekomendasi harus bersifat sistemik — bukan hanya untuk kasus Kanjuruhan, tetapi untuk memperbaiki arsitektur kelembagaan HAM Indonesia secara keseluruhan.',
        template: 'Untuk mencegah berulangnya kebuntuan serupa, diperlukan reformasi kelembagaan yang mencakup penguatan kewenangan Komnas HAM, mekanisme koordinasi yang wajib dan terukur, serta pembatasan waktu yang jelas bagi DPR dan Presiden untuk merespons rekomendasi pengadilan ad hoc.',
        doList: ['Rekomendasikan perbaikan mekanisme koordinasi yang konkret', 'Usulkan penguatan kewenangan atau kapasitas lembaga yang lemah', 'Pertimbangkan reformasi legislatif yang diperlukan'],
        dontList: ['Jangan hanya merekomendasikan "komunikasi yang lebih baik" — tidak spesifik', 'Jangan abaikan dimensi kemauan politik dalam rekomendasi'],
      },
      sampleOutline:
        'I. PEMBUKA\n   • Kasus Kanjuruhan: celah koordinasi Komnas HAM – Jaksa Agung\n   • Tesis: keterbatasan kewenangan + absennya kemauan politik = impunitas\n\nII. ISI\n   A. Peran dan Keterbatasan Komnas HAM\n      - Kewenangan penyelidikan (bukan penyidikan)\n      - Rekomendasi tidak mengikat\n      - Dasar hukum: UU 39/1999\n   B. Peran Jaksa Agung dan Titik Kemacetan\n      - Kewenangan penyidikan HAM berat\n      - Penolakan berkas dan implikasinya\n      - Dasar hukum: UU 26/2000\n   C. Mekanisme Pengadilan Ad Hoc\n      - Lima tahap: Komnas HAM → Jaksa → DPR → Presiden → Keppres\n      - Ketergantungan pada kemauan politik DPR dan Presiden\n   D. Evaluasi Koordinasi Kelembagaan\n      - Tidak ada mekanisme banding jika Jaksa Agung menolak\n      - DPR: pasif dalam kasus Kanjuruhan\n\nIII. REKOMENDASI\n   1. Perkuat kewenangan Komnas HAM (hak subpoena)\n   2. Mekanisme koordinasi wajib Komnas HAM – Jaksa Agung\n   3. Batas waktu DPR merespons rekomendasi ad hoc\n   4. Unit khusus HAM berat di Kejaksaan Agung\n   5. Tinjauan legislatif UU 26/2000',
      tips: [
        'Bedakan dengan tegas penyelidikan (Komnas HAM) vs penyidikan (Jaksa Agung) — ini poin teknis yang sering salah',
        'Jelaskan mengapa mekanisme pengadilan ad hoc rentan terhadap hambatan politik',
        'Tunjukkan pemahaman bahwa Komnas HAM bukan pengadilan — rekomendasinya tidak mengikat',
        'Analisis konsep impunitas sebagai dampak dari kegagalan koordinasi',
        'Bedakan antara pelanggaran HAM biasa (kepolisian, pengadilan umum) dan HAM berat (Pengadilan HAM)',
        'Sertakan perspektif korban: apa yang mereka butuhkan dari sistem kelembagaan?',
      ],
      commonMistakes: [
        'Menyebut Komnas HAM sebagai "pengadilan" atau menganggapnya dapat menghukum pelanggar',
        'Tidak menjelaskan perbedaan pelanggaran HAM biasa dan pelanggaran HAM berat',
        'Mengabaikan dimensi kemauan politik — seolah masalah hanya teknis-prosedural',
        'Rekomendasi terlalu sempit (hanya untuk kasus Kanjuruhan) tanpa menyentuh reformasi sistemik',
      ],
    },

    infographic: {
      title: 'Ekosistem Kelembagaan HAM',
      centerTopic: 'Kelembagaan HAM',
      branches: [
        { label: 'Nasional', items: ['Komnas HAM', 'Komnas Perempuan', 'KPAI', 'Ombudsman RI'], color: 'teal-soft' },
        { label: 'Internasional', items: ['UNHRC', 'OHCHR', 'ICC', 'Treaty Bodies'], color: 'sage' },
        { label: 'Mekanisme PBB', items: ['UPR (4,5 tahun)', 'Special Rapporteur', 'Country Visit', 'Treaty Review'], color: 'lavender' },
        { label: 'Pengadilan HAM', items: ['Pengadilan HAM Permanen', 'Pengadilan Ad Hoc', 'UU 26/2000', 'Rekomendasi DPR'], color: 'sand' },
        { label: 'Alur HAM Berat', items: ['Penyelidikan Komnas HAM', 'Penyidikan Jaksa Agung', 'Dakwaan', 'Persidangan'], color: 'rose-dust' },
      ],
      connections: [
        'Komnas HAM → berkas → Jaksa Agung → tuntutan → Pengadilan HAM',
        'UNHRC → mekanisme → tekanan diplomatik → negara',
        'Treaty Bodies → review laporan → rekomendasi → negara',
      ],
    },
  },

  // ─── TOPIK 3: Pengenalan Instrumen HAM ───────────────────────────────────────
  {
    topicNumber: 3,
    topicName: 'Pengenalan Instrumen Hak Asasi Manusia',
    topicTag: 'Instrumen HAM',
    isEnglish: false,
    relatedQuestionId: 3,
    overview:
      'Topik ini membahas berbagai instrumen HAM internasional (UDHR, ICCPR, ICESCR, CEDAW, CRC, CRPD, CAT), perbedaan soft law dan hard law, proses ratifikasi Indonesia, instrumen nasional (UU 39/1999, UU 26/2000, RANHAM), serta hierarki norma dalam sistem hukum nasional.',

    textContent: [
      {
        id: 't3-s1',
        order: 1,
        title: 'Soft Law vs Hard Law dalam HAM Internasional',
        content:
          'Instrumen HAM internasional terbagi menjadi dua kategori utama berdasarkan kekuatan mengikatnya. Soft law adalah instrumen yang tidak secara hukum mengikat negara, namun memiliki pengaruh moral dan politik yang signifikan. Contoh: Universal Declaration of Human Rights (UDHR) 1948 — berbentuk deklarasi yang diadopsi melalui resolusi Majelis Umum PBB, sehingga tidak mengikat secara hukum. Namun UDHR telah menjadi referensi universal dan dianggap sebagai bagian dari hukum kebiasaan internasional.\n\nHard law adalah instrumen yang mengikat secara hukum bagi negara yang meratifikasinya. Bentuknya berupa konvensi, kovenan, atau traktat. Ketika negara meratifikasi, mereka tunduk pada kewajiban pelaporan berkala kepada komite pemantau dan dapat ditagih pertanggungjawabannya. Perbedaan krusial: menandatangani (sign) tidak sama dengan meratifikasi (ratify) — ratifikasi adalah tindakan yang membuat perjanjian mengikat secara hukum domestik.',
        keyPoints: [
          'Soft law: tidak mengikat secara hukum, tetapi berpengaruh secara moral dan politik (contoh: UDHR)',
          'Hard law: mengikat secara hukum bagi negara yang meratifikasi (konvensi, kovenan)',
          'Tanda tangan ≠ ratifikasi — ratifikasi yang membuat instrumen mengikat secara domestik',
          'UDHR meskipun soft law, telah berkembang menjadi bagian hukum kebiasaan internasional',
        ],
      },
      {
        id: 't3-s2',
        order: 2,
        title: 'Instrumen HAM Internasional Utama',
        content:
          'Sistem instrumen HAM internasional berpusat pada Piagam Internasional HAM (International Bill of Human Rights), yang terdiri dari UDHR, ICCPR, dan ICESCR beserta protokol opsionalnya. ICCPR (International Covenant on Civil and Political Rights) menjamin hak sipil dan politik — hak hidup, bebas dari penyiksaan, kebebasan berpendapat, hak atas pengadilan yang adil. ICESCR (International Covenant on Economic, Social and Cultural Rights) menjamin hak ekosob — pekerjaan, pendidikan, kesehatan, standar hidup layak.\n\nSelain piagam utama, terdapat konvensi-konvensi tematik: CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women, 1979) untuk perempuan; CRC (Convention on the Rights of the Child, 1989) untuk anak; CRPD (Convention on the Rights of Persons with Disabilities, 2006) untuk penyandang disabilitas; CAT (Convention Against Torture, 1984) untuk larangan penyiksaan; CERD (Convention on the Elimination of Racial Discrimination, 1965) untuk penghapusan diskriminasi rasial. Setiap konvensi memiliki komite pemantau (treaty body) dan mekanisme pelaporan berkala.',
        keyPoints: [
          'International Bill of Rights: UDHR + ICCPR + ICESCR — fondasi sistem HAM internasional',
          'Konvensi tematik: CEDAW (perempuan), CRC (anak), CRPD (disabilitas), CAT (penyiksaan)',
          'Setiap konvensi hard law memiliki treaty body yang memantau implementasi',
          'Protokol Opsional memungkinkan mekanisme pengaduan individual',
        ],
      },
      {
        id: 't3-s3',
        order: 3,
        title: 'Ratifikasi Indonesia terhadap Instrumen Internasional',
        content:
          'Indonesia telah meratifikasi sejumlah instrumen HAM internasional utama. ICCPR diratifikasi melalui UU 12/2005 — ini berarti Indonesia tunduk pada kewajiban melaporkan implementasi hak sipol kepada CCPR. ICESCR diratifikasi melalui UU 11/2005. CRPD (konvensi disabilitas) diratifikasi melalui UU 19/2011 — menjadi dasar hukum kebijakan disabilitas inklusif. Indonesia juga meratifikasi CEDAW (UU 7/1984), CRC (Keppres 36/1990), dan CAT (UU 5/1998).\n\nNamun ratifikasi baru langkah pertama. Gap antara ratifikasi dan implementasi nyata sering terjadi. Kasus CRPD mencerminkan ini: meskipun diratifikasi sejak 2011, implementasi di tingkat daerah masih sangat lemah — aksesibilitas fisik bangunan publik, layanan pendidikan inklusif, dan akomodasi yang wajar di tempat kerja masih jauh dari standar CRPD. Indonesia juga membuat reservasi terhadap beberapa ketentuan dalam konvensi yang dianggap bertentangan dengan hukum nasional.',
        keyPoints: [
          'ICCPR: UU 12/2005 | ICESCR: UU 11/2005 | CRPD: UU 19/2011 | CEDAW: UU 7/1984',
          'Ratifikasi menciptakan kewajiban pelaporan berkala kepada treaty body terkait',
          'Reservasi: negara dapat membatasi berlakunya ketentuan tertentu',
          'Gap implementasi: ratifikasi tidak otomatis berarti pemenuhan di lapangan',
        ],
      },
      {
        id: 't3-s4',
        order: 4,
        title: 'Instrumen HAM Nasional',
        content:
          'Di tingkat nasional, Indonesia memiliki kerangka hukum HAM yang cukup komprehensif. UU 39/1999 tentang HAM adalah undang-undang induk yang mendefinisikan HAM, menetapkan hak-hak yang dilindungi, dan membentuk Komnas HAM. UU 26/2000 tentang Pengadilan HAM mengatur mekanisme penuntutan pelanggaran HAM berat — genosida dan kejahatan terhadap kemanusiaan.\n\nRencana Aksi Nasional HAM (RANHAM) adalah dokumen perencanaan pemerintah yang menetapkan target, indikator, dan rencana implementasi HAM secara berkala (setiap 5 tahun). RANHAM 2021-2025 mencakup empat kelompok sasaran: perempuan, anak, penyandang disabilitas, dan masyarakat adat. Pelaksanaannya melibatkan kementerian dan lembaga pemerintah, termasuk Kementerian Hukum dan HAM sebagai koordinator.',
        keyPoints: [
          'UU 39/1999: undang-undang HAM induk, membentuk Komnas HAM',
          'UU 26/2000: pengadilan HAM untuk genosida dan kejahatan terhadap kemanusiaan',
          'RANHAM: rencana aksi 5 tahunan dengan indikator terukur',
          'Kementerian HAM sebagai koordinator implementasi RANHAM',
        ],
      },
      {
        id: 't3-s5',
        order: 5,
        title: 'Hierarki Norma dan Kedudukan Konvensi dalam Hukum Nasional',
        content:
          'Ketika Indonesia meratifikasi konvensi internasional, bagaimana kedudukannya dalam hierarki norma nasional? UU 12/2011 tentang Pembentukan Peraturan Perundang-undangan menetapkan hierarki: UUD 1945 → TAP MPR → UU/Perpu → PP → Perpres → Perda. Konvensi yang diratifikasi melalui undang-undang (seperti ICCPR via UU 12/2005) memiliki kedudukan setara dengan undang-undang.\n\nImplikasinya: jika ada konflik antara UU domestik dan ketentuan konvensi yang diratifikasi, berlaku asas lex posterior (hukum yang lebih baru mengalahkan yang lama) atau lex specialis (hukum yang lebih khusus mengalahkan yang umum). Dalam praktik, pengadilan Indonesia jarang langsung mengaplikasikan norma konvensi internasional tanpa undang-undang implementasi — berbeda dari negara monisme yang secara otomatis mengintegrasikan hukum internasional.',
        keyPoints: [
          'Konvensi diratifikasi lewat UU → berkedudukan setara undang-undang dalam hierarki norma',
          'Indonesia menganut sistem dualisme: hukum internasional perlu ditransformasi ke hukum nasional',
          'Lex posterior dan lex specialis mengatur konflik antara norma yang setara',
          'Pengadilan Indonesia masih jarang menerapkan norma konvensi secara langsung',
        ],
      },
    ],

    flashCards: [
      { id: 't3-fc-1', category: 'concept', front: 'Apa perbedaan soft law dan hard law dalam HAM?', back: 'Soft law: tidak mengikat secara hukum, berpengaruh moral/politik — contoh UDHR. Hard law: mengikat secara hukum bagi negara yang meratifikasi — contoh ICCPR, ICESCR. Pelanggaran hard law dapat dituntut, pelanggaran soft law hanya dapat dikecam.' },
      { id: 't3-fc-2', category: 'legal', front: 'Apa yang dimaksud dengan International Bill of Human Rights?', back: 'Kumpulan tiga instrumen HAM utama: UDHR (1948, deklarasi), ICCPR (1966, hak sipol), dan ICESCR (1966, hak ekosob). Bersama-sama membentuk fondasi sistem HAM internasional.' },
      { id: 't3-fc-3', category: 'legal', front: 'Indonesia meratifikasi ICCPR melalui UU apa?', back: 'UU No. 12 Tahun 2005 tentang Pengesahan International Covenant on Civil and Political Rights. Dengan ini Indonesia terikat melaporkan implementasi hak sipol kepada CCPR setiap 5 tahun.' },
      { id: 't3-fc-4', category: 'legal', front: 'Apa itu CRPD dan Indonesia meratifikasi kapan?', back: 'Convention on the Rights of Persons with Disabilities — konvensi hak penyandang disabilitas. Indonesia meratifikasi melalui UU 19/2011. Namun implementasi di tingkat daerah masih sangat lemah.' },
      { id: 't3-fc-5', category: 'concept', front: 'Apa perbedaan menandatangani dan meratifikasi konvensi?', back: 'Menandatangani (sign): menyatakan niat untuk terikat, belum mengikat secara hukum. Meratifikasi (ratify): tindakan yang membuat konvensi mengikat secara hukum — negara wajib melaksanakannya dan melapor kepada treaty body.' },
      { id: 't3-fc-6', category: 'legal', front: 'Apa itu RANHAM?', back: 'Rencana Aksi Nasional Hak Asasi Manusia — dokumen perencanaan pemerintah 5 tahunan yang menetapkan target, indikator, dan program implementasi HAM. Kementerian HAM bertindak sebagai koordinator.' },
      { id: 't3-fc-7', category: 'concept', front: 'Apa itu reservasi dalam konteks konvensi HAM?', back: 'Pernyataan unilateral suatu negara saat meratifikasi konvensi, yang membatasi atau mengubah berlakunya ketentuan tertentu bagi negara tersebut. Reservasi diperbolehkan asal tidak bertentangan dengan objek dan tujuan konvensi.' },
      { id: 't3-fc-8', category: 'concept', front: 'Apa fungsi Protokol Opsional pada konvensi HAM?', back: 'Protokol Opsional memberikan kewenangan tambahan pada treaty body, termasuk menerima pengaduan individual dari warga negara yang mengaku haknya dilanggar oleh negara peserta yang meratifikasi protokol tersebut.' },
      { id: 't3-fc-9', category: 'legal', front: 'Bagaimana kedudukan konvensi yang diratifikasi dalam hukum Indonesia?', back: 'Setara dengan undang-undang jika diratifikasi melalui UU. Indonesia menganut dualisme — hukum internasional perlu ditransformasi menjadi hukum nasional melalui UU ratifikasi sebelum dapat diterapkan pengadilan.' },
      { id: 't3-fc-10', category: 'case', front: 'Apa yang dimaksud dengan gap implementasi dalam kasus CRPD?', back: 'Meskipun Indonesia meratifikasi CRPD pada 2011, implementasi di daerah masih lemah: aksesibilitas bangunan publik tidak memadai, pendidikan inklusif belum merata, akomodasi yang wajar di tempat kerja masih langka.' },
    ],

    glossary: [
      { term: 'ICCPR', definition: 'International Covenant on Civil and Political Rights — Kovenan Internasional Hak Sipil dan Politik, diratifikasi Indonesia melalui UU 12/2005. Treaty body: Human Rights Committee (CCPR).', relatedTerms: ['ICESCR', 'UDHR', 'CCPR'], category: 'legal' },
      { term: 'ICESCR', definition: 'International Covenant on Economic, Social and Cultural Rights — Kovenan Internasional Hak Ekonomi, Sosial, dan Budaya, diratifikasi Indonesia melalui UU 11/2005.', relatedTerms: ['ICCPR', 'CESCR'], category: 'legal' },
      { term: 'CEDAW', definition: 'Convention on the Elimination of All Forms of Discrimination Against Women — konvensi penghapusan diskriminasi terhadap perempuan. Indonesia meratifikasi melalui UU 7/1984.', relatedTerms: ['CRC', 'Komnas Perempuan'], category: 'legal' },
      { term: 'CRC', definition: 'Convention on the Rights of the Child — Konvensi Hak Anak PBB (1989). Indonesia meratifikasi melalui Keppres 36/1990. Treaty body: Committee on the Rights of the Child.', relatedTerms: ['CEDAW', 'KPAI'], category: 'legal' },
      { term: 'CRPD', definition: 'Convention on the Rights of Persons with Disabilities — Konvensi Hak Penyandang Disabilitas (2006). Indonesia meratifikasi melalui UU 19/2011.', relatedTerms: ['Model Sosial Disabilitas', 'Akomodasi yang Wajar'], category: 'legal' },
      { term: 'CAT', definition: 'Convention Against Torture — Konvensi Menentang Penyiksaan (1984). Indonesia meratifikasi melalui UU 5/1998. Melarang penyiksaan dalam kondisi apapun.', relatedTerms: ['Non-derogable Rights', 'ICCPR'], category: 'legal' },
      { term: 'Ratifikasi', definition: 'Tindakan formal negara yang membuat suatu perjanjian internasional mengikat secara hukum bagi negara tersebut. Di Indonesia dilakukan melalui Undang-Undang atau Keputusan Presiden.', relatedTerms: ['Soft Law', 'Hard Law'], category: 'mechanism' },
      { term: 'Reservasi', definition: 'Pernyataan unilateral negara saat meratifikasi yang membatasi berlakunya ketentuan tertentu. Diperbolehkan asal tidak bertentangan dengan objek dan tujuan konvensi.', relatedTerms: ['Ratifikasi', 'Konvensi'], category: 'legal' },
      { term: 'RANHAM', definition: 'Rencana Aksi Nasional Hak Asasi Manusia — dokumen perencanaan 5 tahunan pemerintah Indonesia yang menetapkan target dan indikator implementasi HAM.', relatedTerms: ['UU 39/1999', 'Kementerian HAM'], category: 'mechanism' },
      { term: 'Akomodasi yang Wajar', definition: 'Kewajiban dalam CRPD untuk menyesuaikan lingkungan, prosedur, atau layanan bagi penyandang disabilitas agar mereka dapat berpartisipasi setara, sepanjang tidak menimbulkan beban yang tidak proporsional.', relatedTerms: ['CRPD', 'Model Sosial Disabilitas'], category: 'concept' },
      { term: 'Treaty Body', definition: 'Komite ahli independen yang memantau implementasi konvensi HAM tertentu. Negara peserta wajib menyampaikan laporan berkala; komite memberikan concluding observations.', relatedTerms: ['UNHRC', 'Ratifikasi'], category: 'institution' },
      { term: 'Protokol Opsional', definition: 'Instrumen tambahan pada konvensi yang memberikan mekanisme lebih kuat, seperti pengaduan individual atau investigasi — negara dapat memilih meratifikasi atau tidak.', relatedTerms: ['Treaty Body', 'Ratifikasi'], category: 'legal' },
    ],

    essayGuide: {
      introduction: {
        title: 'Pembuka Esai Instrumen HAM',
        explanation: 'Pembuka harus menunjukkan pemahaman tentang hierarki instrumen dan kewajiban yang timbul dari ratifikasi, dikaitkan dengan kasus konkret.',
        template: 'Ratifikasi CRPD melalui UU 19/2011 seharusnya menjadi tonggak bersejarah perlindungan hak penyandang disabilitas di Indonesia. Namun gap antara kewajiban hukum internasional dan realitas implementasi di tingkat daerah menunjukkan bahwa ratifikasi semata tidak cukup tanpa mekanisme implementasi yang terstruktur dan akuntabel.',
        doList: ['Tunjukkan pemahaman tentang kewajiban yang timbul dari ratifikasi', 'Identifikasi gap antara norma dan implementasi', 'Gunakan istilah teknis yang tepat: ratifikasi, treaty body, kewajiban pelaporan'],
        dontList: ['Jangan anggap menandatangani konvensi sama dengan meratifikasi', 'Jangan abaikan bahwa reservasi dapat membatasi kewajiban'],
      },
      body: {
        title: 'Analisis Instrumen dan Implementasi',
        explanation: 'Uraikan isi instrumen yang relevan, kewajiban yang timbul, dan analisis gap implementasi dengan bukti konkret.',
        template: 'CRPD mengamanatkan tiga kewajiban utama negara peserta: aksesibilitas universal (Pasal 9), akomodasi yang wajar (Pasal 2), dan pendidikan inklusif (Pasal 24). Meskipun UU 19/2011 meratifikasi seluruh ketentuan ini, survei Kementerian PUPR 2023 menunjukkan kurang dari 20% gedung pemerintah di daerah memenuhi standar aksesibilitas.',
        doList: ['Kutip pasal-pasal spesifik dari konvensi yang relevan', 'Tunjukkan kewajiban konkret yang timbul dari ratifikasi', 'Berikan data/fakta untuk mengilustrasikan gap implementasi', 'Analisis penyebab gap: kapasitas, anggaran, atau komitmen politik?'],
        dontList: ['Jangan hanya menyebutkan nama konvensi tanpa isi dan kewajiban spesifik', 'Jangan abaikan mekanisme pemantauan (treaty body) sebagai alat akuntabilitas'],
      },
      conclusion: {
        title: 'Rekomendasi Peningkatan Implementasi',
        explanation: 'Rekomendasi harus menjembatani gap antara kewajiban hukum internasional dan realitas implementasi nasional.',
        template: 'Untuk menutup gap implementasi CRPD, Indonesia memerlukan strategi multi-tingkat yang mencakup penguatan regulasi turunan, alokasi anggaran yang memadai, pelatihan aparatur daerah, dan mekanisme pemantauan independen yang terhubung dengan pelaporan ke Committee on the Rights of Persons with Disabilities.',
        doList: ['Rekomendasikan regulasi turunan yang lebih operasional', 'Usulkan mekanisme koordinasi pusat-daerah yang konkret', 'Kaitkan rekomendasi dengan siklus pelaporan ke treaty body'],
        dontList: ['Jangan hanya merekomendasikan "sosialisasi" tanpa struktur yang jelas', 'Jangan abaikan perspektif penyandang disabilitas dalam proses kebijakan'],
      },
      sampleOutline:
        'I. PEMBUKA\n   • CRPD dan kewajiban Indonesia sebagai negara peserta\n   • Gap implementasi di tingkat daerah sebagai masalah utama\n\nII. ISI\n   A. Isi dan Kewajiban CRPD\n      - Model sosial vs model medis disabilitas\n      - Kewajiban aksesibilitas (Pasal 9)\n      - Akomodasi yang wajar (Pasal 2)\n      - Pendidikan inklusif (Pasal 24)\n   B. Status Ratifikasi Indonesia\n      - UU 19/2011: transformasi ke hukum nasional\n      - Kewajiban pelaporan ke CRPD Committee\n   C. Analisis Gap Implementasi\n      - Aksesibilitas fisik: gedung, transportasi\n      - Layanan pendidikan inklusif di daerah\n      - Kapasitas dan komitmen pemerintah daerah\n   D. Faktor Penyebab Gap\n      - Regulasi turunan tidak operasional\n      - Kapasitas SDM daerah terbatas\n      - Alokasi anggaran tidak memadai\n\nIII. REKOMENDASI\n   1. Peraturan Daerah yang mengoperasionalkan CRPD\n   2. Alokasi anggaran khusus aksesibilitas\n   3. Pelatihan aparatur sipil tentang hak disabilitas\n   4. Mekanisme pengaduan yang mudah diakses\n   5. Laporan bayangan LSM ke CRPD Committee',
      tips: [
        'Pahami perbedaan model medis (disabilitas sebagai penyakit) vs model sosial (disabilitas karena hambatan lingkungan) — CRPD mengadopsi model sosial',
        'Jelaskan konsep akomodasi yang wajar secara spesifik — bukan sekedar kemurahan hati, melainkan kewajiban hukum',
        'Gunakan mekanisme pelaporan treaty body sebagai alat akuntabilitas dalam rekomendasi',
        'Tunjukkan bahwa gap implementasi adalah masalah sistemik, bukan sekadar kelalaian teknis',
        'Sertakan perspektif partisipasi penyandang disabilitas dalam pembuatan kebijakan (disability-inclusive policy)',
        'Bedakan kewajiban yang segera berlaku vs yang diimplementasikan secara progresif',
      ],
      commonMistakes: [
        'Menganggap UDHR mengikat secara hukum seperti ICCPR — UDHR adalah deklarasi (soft law)',
        'Tidak membedakan apa kewajiban yang timbul dari ratifikasi vs dari sekadar penandatanganan',
        'Menggunakan model medis dalam analisis disabilitas — CRPD menggunakan model sosial',
        'Mengabaikan mekanisme pelaporan berkala ke treaty body sebagai elemen akuntabilitas',
      ],
    },

    infographic: {
      title: 'Peta Instrumen HAM Internasional',
      centerTopic: 'Instrumen HAM',
      branches: [
        { label: 'Soft Law', items: ['UDHR 1948', 'Deklarasi Vienna 1993', 'Prinsip Panduan PBB', 'Resolusi UNHRC'], color: 'lavender' },
        { label: 'Hard Law Umum', items: ['ICCPR (UU 12/2005)', 'ICESCR (UU 11/2005)', 'Protokol Opsional'], color: 'teal-soft' },
        { label: 'Konvensi Tematik', items: ['CEDAW (perempuan)', 'CRC (anak)', 'CRPD (disabilitas)', 'CAT (penyiksaan)'], color: 'sage' },
        { label: 'Instrumen Nasional', items: ['UU 39/1999', 'UU 26/2000', 'RANHAM 2021-2025', 'Perpres 75/2015'], color: 'sand' },
        { label: 'Pemantauan', items: ['Treaty Bodies', 'Laporan Berkala', 'Concluding Observations', 'Pengaduan Individual'], color: 'rose-dust' },
      ],
      connections: [
        'Soft Law → dicodifikasi → Hard Law',
        'Hard Law → diratifikasi → Instrumen Nasional',
        'Instrumen Nasional → dilaporkan → Treaty Bodies',
      ],
    },
  },

  // ─── TOPIK 4: Analisis Kebijakan Publik Berbasis HAM ─────────────────────────
  {
    topicNumber: 4,
    topicName: 'Analisis Kebijakan Publik Berbasis HAM',
    topicTag: 'Kebijakan HAM',
    isEnglish: false,
    relatedQuestionId: 4,
    overview:
      'Topik ini membahas Human Rights-Based Approach (HRBA) dalam kebijakan publik, lima prinsip HRBA (partisipasi, non-diskriminasi, akuntabilitas, transparansi, pemberdayaan), siklus kebijakan berbasis HAM, Human Rights Impact Assessment (HRIA), indikator HAM, serta peran masyarakat sipil dalam advokasi kebijakan.',

    textContent: [
      {
        id: 't4-s1',
        order: 1,
        title: 'Pendekatan Berbasis HAM (HRBA) dalam Kebijakan Publik',
        content:
          'Human Rights-Based Approach (HRBA) adalah kerangka konseptual yang menempatkan HAM sebagai dasar dalam perencanaan, pelaksanaan, dan evaluasi kebijakan publik. Berbeda dari pendekatan berbasis kebutuhan (needs-based approach) yang memandang rakyat sebagai penerima bantuan pasif, HRBA melihat rakyat sebagai pemegang hak (rights holders) yang dapat menuntut pemenuhan hak dari negara sebagai pemangku kewajiban (duty bearers).\n\nDalam praktiknya, HRBA mengubah cara kebijakan dirancang. Program pengentasan kemiskinan bukan hanya soal distribusi bantuan sosial, melainkan soal memastikan orang miskin berpartisipasi dalam merancang program yang memengaruhi kehidupan mereka. Program kesehatan bukan sekadar membangun puskesmas, tetapi memastikan semua kelompok — termasuk yang selama ini marjinal — dapat mengaksesnya tanpa diskriminasi.\n\nHRBA telah diadopsi oleh banyak lembaga pembangunan internasional (UNDP, UNICEF, UNFPA) dan menjadi standar dalam perancangan program pembangunan. Di Indonesia, HRBA diterapkan dalam RANHAM dan semakin banyak kebijakan sektoral.',
        keyPoints: [
          'HRBA menempatkan rakyat sebagai pemegang hak, bukan penerima bantuan pasif',
          'Negara adalah duty bearer yang memiliki kewajiban HAM terhadap warganya',
          'HRBA mengubah cara kebijakan dirancang: partisipasi, non-diskriminasi, akuntabilitas',
          'Berbeda dari needs-based approach yang lebih berorientasi pada output teknis',
        ],
      },
      {
        id: 't4-s2',
        order: 2,
        title: 'Lima Prinsip HRBA',
        content:
          'HRBA dibangun di atas lima prinsip yang dikenal dengan akronim PANTHER (Participation, Accountability, Non-discrimination, Transparency, Human Dignity, Empowerment, Rule of Law) atau versi yang lebih ringkas. Pertama, partisipasi bermakna (meaningful participation): semua pemangku kepentingan, terutama kelompok yang paling terdampak, harus dilibatkan secara aktif dalam pengambilan keputusan. Partisipasi bermakna bukan sekadar konsultasi formalitas.\n\nKedua, non-diskriminasi dan kesetaraan: kebijakan harus memastikan semua orang, termasuk kelompok marjinal, mendapatkan manfaat yang setara. Diperlukan analisis disagregasi data berdasarkan gender, usia, disabilitas, dll. Ketiga, akuntabilitas: ada mekanisme yang memungkinkan pemegang hak menuntut pertanggungjawaban duty bearer atas kegagalan pemenuhan hak. Keempat, transparansi: informasi tentang kebijakan harus dapat diakses publik. Kelima, pemberdayaan: kebijakan harus memperkuat kapasitas individu dan komunitas untuk memperjuangkan hak mereka sendiri.',
        keyPoints: [
          'Partisipasi bermakna: lebih dari sekadar konsultasi, warga aktif membentuk kebijakan',
          'Non-diskriminasi: analisis disagregasi data untuk memastikan semua kelompok terjangkau',
          'Akuntabilitas: mekanisme pengaduan dan pertanggungjawaban yang efektif',
          'Transparansi dan pemberdayaan saling memperkuat: informasi terbuka + kapasitas warga',
        ],
      },
      {
        id: 't4-s3',
        order: 3,
        title: 'Siklus Kebijakan yang Berperspektif HAM',
        content:
          'Pendekatan HAM diterapkan di setiap tahap siklus kebijakan. Pada tahap perencanaan: identifikasi siapa pemegang hak dan apa haknya, siapa duty bearer dan apa kewajibannya, serta analisis gap antara standar HAM dan kondisi aktual. Pada tahap implementasi: memastikan partisipasi kelompok rentan, memantau proses pelaksanaan, dan menjamin non-diskriminasi dalam akses program.\n\nPada tahap monitoring: gunakan indikator HAM yang mengukur lebih dari sekadar output (jumlah sekolah dibangun), tetapi juga outcome (angka partisipasi sekolah kelompok marjinal) dan impact (apakah hak atas pendidikan terpenuhi?). Pada tahap evaluasi: libatkan penerima manfaat dalam proses evaluasi, nilai apakah program memperkuat atau melemahkan kapasitas penerima hak, dan pastikan pembelajaran ditransformasi menjadi perbaikan kebijakan.',
        keyPoints: [
          'Perencanaan: identifikasi rights holders, duty bearers, dan gap pemenuhan HAM',
          'Implementasi: pastikan partisipasi dan non-diskriminasi dalam pelaksanaan',
          'Monitoring: indikator struktural, proses, dan outcome — bukan hanya output',
          'Evaluasi partisipatif: penerima manfaat aktif menilai efektivitas program',
        ],
      },
      {
        id: 't4-s4',
        order: 4,
        title: 'Human Rights Impact Assessment (HRIA)',
        content:
          'Human Rights Impact Assessment (HRIA) adalah proses sistematis untuk mengidentifikasi, mencegah, dan memitigasi dampak negatif suatu kebijakan atau proyek terhadap HAM sebelum implementasi. HRIA bukan evaluasi pasca-kejadian; ia adalah alat pencegahan yang dilakukan di fase perencanaan.\n\nProses HRIA mencakup empat tahap. Pertama, scoping: identifikasi hak-hak yang berpotensi terdampak dan kelompok yang paling rentan. Kedua, assessment: analisis mendalam tentang potensi dampak positif dan negatif terhadap masing-masing hak. Ketiga, rekomendasi: langkah-langkah mitigasi yang konkret untuk mencegah atau meminimalkan dampak negatif. Keempat, pemantauan: mekanisme follow-up untuk memastikan rekomendasi diimplementasikan.\n\nContoh aplikasi: sebelum meluncurkan Program Makan Bergizi Gratis (MBG), HRIA seharusnya dilakukan untuk menganalisis dampaknya terhadap hak anak atas makanan bergizi, hak petani lokal (apakah sumber pangan dari petani lokal?), dan hak partisipasi orang tua dalam menentukan menu.',
        keyPoints: [
          'HRIA adalah alat pencegahan — dilakukan sebelum implementasi kebijakan',
          'Empat tahap: scoping → assessment → rekomendasi → pemantauan',
          'Mengidentifikasi siapa yang paling rentan terdampak dan hak apa yang berisiko',
          'Berbeda dari evaluasi dampak sosial biasa karena menggunakan standar HAM',
        ],
      },
      {
        id: 't4-s5',
        order: 5,
        title: 'Peran Masyarakat Sipil dan Akuntabilitas Kebijakan',
        content:
          'Masyarakat sipil — LSM, kelompok advokasi, media, akademisi — memainkan peran vital dalam siklus kebijakan berbasis HAM. Dalam fase perencanaan, mereka menyuarakan aspirasi kelompok rentan yang sering tidak terwakili dalam proses formal. Dalam fase implementasi, mereka memantau apakah program berjalan sesuai komitmen HAM. Dalam fase evaluasi, mereka menyampaikan laporan bayangan (shadow reports) kepada lembaga pemantau internasional.\n\nAkuntabilitas dalam kebijakan HAM memerlukan beberapa elemen: mekanisme pengaduan yang mudah diakses, transparansi anggaran dan data, audit independen, dan responsivitas pemerintah terhadap temuan. Di Indonesia, keterbukaan informasi dijamin UU 14/2008, yang menjadi alat advokasi penting bagi masyarakat sipil untuk mengakses data pelaksanaan kebijakan.',
        keyPoints: [
          'Masyarakat sipil: monitor implementasi, suarakan kelompok marjinal, sampaikan shadow reports',
          'Akuntabilitas membutuhkan: mekanisme pengaduan, transparansi, audit independen',
          'UU 14/2008 tentang KIP sebagai alat akses informasi untuk advokasi',
          'Shadow reports kepada treaty body sebagai mekanisme akuntabilitas internasional',
        ],
      },
    ],

    flashCards: [
      { id: 't4-fc-1', category: 'concept', front: 'Apa perbedaan HRBA dengan needs-based approach?', back: 'HRBA: warga sebagai pemegang hak yang dapat menuntut pemenuhan dari negara sebagai duty bearer. Needs-based: warga sebagai penerima bantuan pasif yang bergantung pada kebaikan pemerintah. HRBA menciptakan akuntabilitas, needs-based tidak.' },
      { id: 't4-fc-2', category: 'concept', front: 'Siapa rights holders dan duty bearers dalam HRBA?', back: 'Rights holders: individu dan kelompok yang memiliki hak (semua warga negara). Duty bearers: pihak yang berkewajiban memenuhi hak tersebut (terutama negara, juga aktor non-negara dalam konteks tertentu).' },
      { id: 't4-fc-3', category: 'concept', front: 'Apa yang dimaksud partisipasi bermakna dalam HRBA?', back: 'Keterlibatan aktif semua pemangku kepentingan, terutama kelompok terdampak, dalam pengambilan keputusan. Bukan sekadar konsultasi formalitas — warga benar-benar dapat memengaruhi keputusan yang berdampak pada kehidupan mereka.' },
      { id: 't4-fc-4', category: 'concept', front: 'Apa itu HRIA dan kapan dilakukan?', back: 'Human Rights Impact Assessment — proses sistematis mengidentifikasi dampak kebijakan/proyek terhadap HAM. Dilakukan sebelum implementasi (fase perencanaan) sebagai alat pencegahan, bukan evaluasi pasca-kejadian.' },
      { id: 't4-fc-5', category: 'concept', front: 'Apa tiga jenis indikator HAM dalam monitoring kebijakan?', back: 'Indikator struktural (apakah regulasi/lembaga sudah ada?), indikator proses (apakah kebijakan diimplementasikan dengan benar?), dan indikator outcome (apakah hak benar-benar terpenuhi bagi semua kelompok?).' },
      { id: 't4-fc-6', category: 'case', front: 'Bagaimana menganalisis Program MBG dari perspektif HRBA?', back: 'MBG menyentuh hak atas pangan (ICESCR Pasal 11), hak anak (CRC), dan hak pendidikan. Analisis HRBA: apakah semua kelompok terjangkau tanpa diskriminasi? Apakah ada partisipasi orang tua dan penerima dalam perancangan? Apakah ada mekanisme pengaduan?' },
      { id: 't4-fc-7', category: 'legal', front: 'Dasar hukum apa yang mendukung HRBA dalam kebijakan Indonesia?', back: 'UU 39/1999 (HAM), RANHAM (Perpres), ICESCR dan ICCPR yang diratifikasi. Untuk kebijakan pangan: ICESCR Pasal 11. Untuk hak anak: CRC dan UU 35/2014. Untuk partisipasi: Pasal 28C UUD 1945.' },
      { id: 't4-fc-8', category: 'concept', front: 'Mengapa non-diskriminasi penting dalam desain kebijakan?', back: 'Kebijakan universal tanpa analisis kelompok rentan sering menguntungkan mereka yang sudah beruntung. Non-diskriminasi mengharuskan analisis disagregasi data: siapa yang belum terjangkau? Mengapa? Apa hambatan spesifik yang mereka hadapi?' },
      { id: 't4-fc-9', category: 'concept', front: 'Apa peran shadow report dalam akuntabilitas HAM?', back: 'Laporan alternatif yang disampaikan masyarakat sipil kepada treaty body PBB, berisi informasi yang berbeda atau melengkapi laporan resmi pemerintah. Treaty body mempertimbangkan keduanya dalam concluding observations.' },
      { id: 't4-fc-10', category: 'concept', front: 'Apa yang dimaksud pemberdayaan dalam konteks HRBA?', back: 'Penguatan kapasitas individu dan komunitas untuk memahami hak mereka, mengorganisir diri, dan menuntut pertanggungjawaban negara. Pemberdayaan membuat pemenuhan HAM berkelanjutan, bukan bergantung pada baik-buruknya niat pemerintah.' },
    ],

    glossary: [
      { term: 'HRBA', definition: 'Human Rights-Based Approach — pendekatan berbasis HAM dalam kebijakan publik yang menempatkan warga sebagai pemegang hak dan negara sebagai duty bearer.', relatedTerms: ['Rights Holders', 'Duty Bearers'], category: 'concept' },
      { term: 'Rights Holders', definition: 'Individu atau kelompok yang memiliki hak (dalam HRBA: semua warga) dan dapat menuntut pemenuhannya dari pihak yang berkewajiban.', relatedTerms: ['Duty Bearers', 'HRBA'], category: 'concept' },
      { term: 'Duty Bearers', definition: 'Pihak yang berkewajiban memenuhi hak pemegang hak — terutama negara, namun juga mencakup aktor non-negara dalam konteks tertentu.', relatedTerms: ['Rights Holders', 'Akuntabilitas'], category: 'concept' },
      { term: 'HRIA', definition: 'Human Rights Impact Assessment — penilaian dampak HAM yang dilakukan sebelum implementasi kebijakan/proyek untuk mengidentifikasi dan mencegah dampak negatif terhadap HAM.', relatedTerms: ['HRBA', 'Siklus Kebijakan'], category: 'mechanism' },
      { term: 'Partisipasi Bermakna', definition: 'Keterlibatan aktif yang benar-benar memengaruhi keputusan, bukan sekadar konsultasi formalitas. Salah satu prinsip utama HRBA.', relatedTerms: ['HRBA', 'FPIC'], category: 'concept' },
      { term: 'Indikator HAM', definition: 'Ukuran terstruktur untuk memantau pemenuhan HAM: struktural (regulasi/lembaga), proses (implementasi), dan outcome (pemenuhan aktual).', relatedTerms: ['Monitoring', 'HRBA'], category: 'mechanism' },
      { term: 'Disagregasi Data', definition: 'Pemilahan data berdasarkan karakteristik kelompok (gender, usia, disabilitas, etnis) untuk mengidentifikasi ketidaksetaraan tersembunyi dalam akses kebijakan.', relatedTerms: ['Non-diskriminasi', 'HRBA'], category: 'mechanism' },
      { term: 'Shadow Report', definition: 'Laporan alternatif yang disampaikan masyarakat sipil kepada treaty body PBB, melengkapi atau mengkritisi laporan resmi pemerintah.', relatedTerms: ['Treaty Body', 'Akuntabilitas'], category: 'mechanism' },
      { term: 'Akuntabilitas', definition: 'Kewajiban duty bearer untuk mempertanggungjawabkan tindakan atau kegagalan dalam pemenuhan HAM, disertai mekanisme pengaduan yang efektif.', relatedTerms: ['HRBA', 'Transparansi'], category: 'concept' },
      { term: 'FPIC', definition: 'Free, Prior and Informed Consent — hak masyarakat adat untuk memberikan atau menolak persetujuan atas proyek yang berdampak pada tanah dan kehidupan mereka, sebelum proyek dimulai.', relatedTerms: ['Partisipasi Bermakna', 'Masyarakat Adat'], category: 'legal' },
      { term: 'Progressive Realization', definition: 'Kewajiban negara untuk mengambil langkah-langkah progresif menuju pemenuhan penuh hak ekosob, sesuai sumber daya yang tersedia — namun bukan alasan untuk tidak bertindak.', relatedTerms: ['ICESCR', 'Hak Ekosob'], category: 'concept' },
      { term: 'KIP', definition: 'Keterbukaan Informasi Publik — dijamin UU 14/2008, memberikan hak kepada publik untuk mengakses informasi yang dipegang badan publik, kecuali yang dikecualikan.', relatedTerms: ['Transparansi', 'Akuntabilitas'], category: 'legal' },
    ],

    essayGuide: {
      introduction: {
        title: 'Pembuka Esai Kebijakan HAM',
        explanation: 'Pembuka harus menunjukkan bahwa Anda memahami HRBA sebagai kerangka analisis dan menghubungkannya dengan kasus kebijakan yang dianalisis.',
        template: 'Program Makan Bergizi Gratis (MBG) 2025 menawarkan peluang besar bagi pemenuhan hak anak atas gizi yang memadai, namun juga menghadirkan risiko jika tidak dirancang dengan perspektif HAM. Penerapan Human Rights-Based Approach (HRBA) dalam desain dan implementasi MBG menjadi krusial untuk memastikan program ini tidak hanya menjangkau yang mudah dijangkau, tetapi juga yang paling membutuhkan.',
        doList: ['Identifikasi hak-hak HAM yang terkait dengan kebijakan yang dianalisis', 'Tunjukkan pemahaman tentang HRBA sebagai kerangka', 'Sebutkan kelompok yang paling berpotensi terdampak'],
        dontList: ['Jangan langsung memuji atau mengkritik program tanpa analisis berbasis HAM', 'Jangan abaikan kelompok rentan yang berpotensi tidak terjangkau'],
      },
      body: {
        title: 'Analisis Kebijakan dengan Kerangka HRBA',
        explanation: 'Aplikasikan lima prinsip HRBA satu per satu pada kebijakan yang dianalisis, dengan contoh konkret kegagalan atau keberhasilan masing-masing prinsip.',
        template: 'Dari perspektif partisipasi bermakna, desain MBG seharusnya melibatkan orang tua, siswa, ahli gizi, dan produsen pangan lokal sejak fase perencanaan. Dari perspektif non-diskriminasi, program perlu memastikan jangkauan ke anak-anak di daerah terpencil, anak berkebutuhan khusus, dan kelompok minoritas dengan kebutuhan diet spesifik.',
        doList: ['Aplikasikan minimal tiga prinsip HRBA dengan contoh konkret', 'Gunakan HRIA sebagai rekomendasi pencegahan masalah', 'Sertakan dasar hukum: ICESCR Pasal 11, CRC, UU 35/2014', 'Analisis siapa yang berisiko tidak terjangkau program'],
        dontList: ['Jangan hanya deskripsikan program tanpa analisis HAM', 'Jangan lupa dimensi akuntabilitas: ada mekanisme pengaduan?'],
      },
      conclusion: {
        title: 'Rekomendasi Penguatan Kebijakan Berbasis HAM',
        explanation: 'Rekomendasikan perbaikan konkret yang akan memperkuat dimensi HAM kebijakan tanpa menghambat implementasinya.',
        template: 'Untuk memastikan MBG benar-benar menjadi instrumen pemenuhan hak anak, diperlukan lima penguatan: analisis disagregasi penerima manfaat, mekanisme partisipasi orang tua, prioritas sumber pangan lokal, sistem pengaduan yang mudah diakses, dan evaluasi berkala dengan indikator outcome berbasis HAM.',
        doList: ['Rekomendasikan penguatan yang spesifik dan bisa diimplementasikan', 'Sertakan rekomendasi untuk monitoring berbasis indikator HAM', 'Usulkan mekanisme partisipasi yang konkret'],
        dontList: ['Jangan hanya merekomendasikan "lebih banyak sosialisasi"', 'Jangan abaikan dimensi akuntabilitas dalam rekomendasi'],
      },
      sampleOutline:
        'I. PEMBUKA\n   • Program MBG: peluang pemenuhan hak anak atas gizi\n   • HRBA sebagai kerangka analisis\n   • Tesis: MBG perlu penguatan dimensi HAM agar efektif dan adil\n\nII. ISI\n   A. Hak-Hak HAM yang Relevan\n      - Hak atas pangan (ICESCR Pasal 11)\n      - Hak anak atas tumbuh kembang (CRC Pasal 27)\n      - Hak atas pendidikan (UUD 28C)\n   B. Analisis Prinsip HRBA\n      - Partisipasi: apakah penerima dilibatkan dalam desain?\n      - Non-diskriminasi: siapa yang berpotensi tidak terjangkau?\n      - Akuntabilitas: mekanisme pengaduan yang ada\n   C. Rekomendasi HRIA Sebelum/Selama Implementasi\n      - Siapa kelompok rentan yang berisiko terlewat?\n      - Dampak terhadap petani lokal\n      - Isu gizi untuk anak berkebutuhan khusus\n\nIII. REKOMENDASI\n   1. Disagregasi data penerima manfaat\n   2. Mekanisme partisipasi orang tua\n   3. Prioritas pangan lokal (dampak ekonomi petani)\n   4. Sistem pengaduan yang mudah diakses\n   5. Indikator outcome berbasis HAM',
      tips: [
        'Terapkan prinsip HRBA satu per satu — jangan sebutkan semua sekaligus tanpa analisis',
        'HRIA adalah alat yang sangat berguna: rekomendasikan penggunaannya sebelum implementasi besar',
        'Jangan hanya fokus pada output (berapa porsi dibagikan), tetapi pada outcome (apakah hak terpenuhi?)',
        'Kelompok yang "tidak tampak" — anak disabilitas, daerah terpencil, minoritas etnis — harus disebutkan eksplisit',
        'Mekanisme pengaduan yang efektif adalah elemen akuntabilitas yang sering dilupakan',
        'Gunakan data disagregasi sebagai argumen mengapa pendekatan universal saja tidak cukup',
      ],
      commonMistakes: [
        'Menganalisis kebijakan dari perspektif efisiensi atau fiskal, bukan perspektif HAM',
        'Menyebut "partisipasi" tanpa menjelaskan apa yang membuat partisipasi itu bermakna',
        'Fokus hanya pada kelompok mayoritas penerima manfaat, mengabaikan kelompok yang berisiko tereksklusi',
        'Tidak menyertakan mekanisme akuntabilitas dalam rekomendasi — padahal ini inti HRBA',
      ],
    },

    infographic: {
      title: 'Kerangka Kebijakan Berbasis HAM',
      centerTopic: 'HRBA',
      branches: [
        { label: 'Prinsip HRBA', items: ['Partisipasi Bermakna', 'Non-diskriminasi', 'Akuntabilitas', 'Transparansi', 'Pemberdayaan'], color: 'teal-soft' },
        { label: 'Siklus Kebijakan', items: ['Perencanaan', 'Implementasi', 'Monitoring', 'Evaluasi'], color: 'sage' },
        { label: 'HRIA', items: ['Scoping', 'Assessment', 'Rekomendasi', 'Pemantauan'], color: 'lavender' },
        { label: 'Aktor', items: ['Rights Holders (warga)', 'Duty Bearers (negara)', 'Masyarakat Sipil', 'Sektor Swasta'], color: 'sand' },
        { label: 'Indikator', items: ['Struktural (regulasi)', 'Proses (implementasi)', 'Outcome (pemenuhan)', 'Disagregasi data'], color: 'rose-dust' },
      ],
      connections: [
        'Prinsip HRBA → diterapkan di → Siklus Kebijakan',
        'HRIA → mencegah dampak negatif → sebelum implementasi',
        'Masyarakat Sipil → memantau → akuntabilitas duty bearers',
      ],
    },
  },

  // ─── TOPIK 5: Hak Kelompok Rentan ────────────────────────────────────────────
  {
    topicNumber: 5,
    topicName: 'Hak Kelompok Rentan',
    topicTag: 'Kelompok Rentan',
    isEnglish: false,
    relatedQuestionId: 5,
    overview:
      'Topik ini membahas perlindungan HAM bagi kelompok rentan meliputi perempuan, anak, penyandang disabilitas, lansia, masyarakat adat, dan pekerja migran. Mencakup instrumen perlindungan per kelompok, konsep interseksionalitas, model sosial vs medis disabilitas, dan strategi kebijakan perlindungan.',

    textContent: [
      {
        id: 't5-s1',
        order: 1,
        title: 'Siapa yang Dimaksud Kelompok Rentan?',
        content:
          'Kelompok rentan (vulnerable groups) adalah individu atau komunitas yang menghadapi risiko lebih tinggi terhadap pelanggaran HAM karena faktor-faktor struktural, historis, atau sistemik yang membuat mereka lebih mudah didiskriminasi, dieksploitasi, atau diabaikan. Kerentanan bukan berasal dari "kelemahan bawaan" individu, melainkan dari ketidaksetaraan struktur sosial, ekonomi, dan politik yang melingkupi mereka.\n\nKelompok rentan utama dalam sistem HAM internasional meliputi: perempuan, anak-anak, penyandang disabilitas, lansia, masyarakat adat (indigenous peoples), pengungsi dan pencari suaka, pekerja migran, tahanan dan orang dalam penahanan, dan minoritas etnis/agama/bahasa. Setiap kelompok memiliki instrumen HAM spesifik yang mengatur perlindungannya, karena satu ukuran kebijakan tidak dapat memenuhi kebutuhan semua kelompok.',
        keyPoints: [
          'Kerentanan berasal dari struktur sosial, bukan "kelemahan bawaan" individu',
          'Kelompok rentan utama: perempuan, anak, disabilitas, lansia, masyarakat adat, pengungsi',
          'Setiap kelompok memiliki instrumen HAM spesifik tersendiri',
          'Pendekatan satu ukuran untuk semua tidak cukup — perlu kebijakan yang sensitif kerentanan',
        ],
      },
      {
        id: 't5-s2',
        order: 2,
        title: 'Perlindungan Hak Perempuan',
        content:
          'CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women, 1979) adalah instrumen HAM perempuan yang paling komprehensif. CEDAW mendefinisikan diskriminasi terhadap perempuan sebagai "setiap pembedaan, pengecualian, atau pembatasan berdasarkan jenis kelamin yang memiliki efek melemahkan atau meniadakan pengakuan, penikmatan, atau pelaksanaan hak perempuan." CEDAW diratifikasi Indonesia melalui UU 7/1984.\n\nKomnas Perempuan (Komisi Nasional Anti Kekerasan terhadap Perempuan) adalah lembaga nasional yang memantau implementasi CEDAW dan menangani kasus kekerasan terhadap perempuan. Data Catatan Tahunan (Catahu) Komnas Perempuan 2024 mencatat puluhan ribu kasus kekerasan berbasis gender, dengan kekerasan dalam rumah tangga (KDRT) sebagai kategori terbesar. UU 23/2004 tentang Penghapusan KDRT dan UU 12/2022 tentang TPKS (Tindak Pidana Kekerasan Seksual) memperkuat perlindungan hukum perempuan di Indonesia.',
        keyPoints: [
          'CEDAW: mendefinisikan dan melarang semua bentuk diskriminasi terhadap perempuan',
          'KDRT sebagai kategori kekerasan terbesar menurut Catahu Komnas Perempuan',
          'UU 23/2004 (KDRT) dan UU 12/2022 (TPKS) sebagai instrumen nasional perlindungan',
          'Komnas Perempuan: lembaga nasional pemantau CEDAW dan penanganan kasus',
        ],
      },
      {
        id: 't5-s3',
        order: 3,
        title: 'Hak Anak dan Perlindungannya',
        content:
          'Convention on the Rights of the Child (CRC/KHA) 1989 adalah konvensi HAM yang paling banyak diratifikasi (hampir universal). CRC mengakui empat prinsip utama hak anak: non-diskriminasi, kepentingan terbaik anak (best interest of the child), hak hidup dan tumbuh kembang, dan partisipasi anak. Di Indonesia, CRC diratifikasi melalui Keppres 36/1990 dan diperkuat dengan UU 23/2002 jo. UU 35/2014 tentang Perlindungan Anak.\n\nKPAI (Komisi Perlindungan Anak Indonesia) dibentuk untuk memantau implementasi dan menerima pengaduan terkait hak anak. Data KPAI 2024 menunjukkan peningkatan kasus bullying di sekolah — baik fisik, verbal, maupun cyberbullying. Bullying melanggar hak anak atas keamanan (Pasal 28G UUD 1945), hak atas pendidikan (Pasal 28C), dan prinsip best interest of the child dalam CRC. Negara wajib mengambil langkah preventif, protektif, dan rehabilitatif.',
        keyPoints: [
          'CRC: empat prinsip utama — non-diskriminasi, best interest, hak tumbuh kembang, partisipasi anak',
          'UU 35/2014 tentang Perlindungan Anak sebagai instrumen nasional utama',
          'KPAI: lembaga pemantau dan pengaduan hak anak',
          'Bullying melanggar hak keamanan, hak pendidikan, dan prinsip best interest',
        ],
      },
      {
        id: 't5-s4',
        order: 4,
        title: 'Hak Penyandang Disabilitas: Model Sosial',
        content:
          'CRPD (Convention on the Rights of Persons with Disabilities, 2006) menandai pergeseran paradigma dari model medis ke model sosial disabilitas. Model medis: disabilitas sebagai kondisi medis atau "kecacatan" yang perlu disembuhkan atau direhabilitasi — individu dianggap bermasalah. Model sosial: disabilitas terjadi karena interaksi antara kondisi fisik/mental individu dengan hambatan lingkungan sosial (arsitektur tidak ramah, sikap diskriminatif, informasi tidak aksesibel) — masyarakat dan lingkunganlah yang perlu diubah.\n\nKonsep kunci CRPD: aksesibilitas universal (semua ruang dan informasi harus dapat diakses), akomodasi yang wajar (penyesuaian khusus yang tidak menimbulkan beban tidak proporsional), dan kehidupan mandiri (hak tinggal di komunitas, bukan institusi). Indonesia meratifikasi CRPD melalui UU 19/2011, diperkuat dengan UU 8/2016 tentang Penyandang Disabilitas yang mengadopsi model sosial.',
        keyPoints: [
          'Model sosial: hambatan ada di lingkungan/masyarakat, bukan di individu penyandang disabilitas',
          'Aksesibilitas universal: kewajiban menyesuaikan lingkungan agar semua orang dapat mengaksesnya',
          'Akomodasi yang wajar: penyesuaian khusus yang tidak menimbulkan beban tidak proporsional',
          'UU 8/2016 mengadopsi model sosial CRPD dalam hukum nasional Indonesia',
        ],
      },
      {
        id: 't5-s5',
        order: 5,
        title: 'Interseksionalitas: Kerentanan Berlapis',
        content:
          'Interseksionalitas adalah konsep yang menggambarkan bagaimana berbagai identitas sosial (gender, ras, kelas, disabilitas, usia) saling berinteraksi dan menciptakan kerentanan yang berlapis. Seorang perempuan dengan disabilitas di daerah terpencil menghadapi kerentanan tiga kali lipat: sebagai perempuan (diskriminasi gender), sebagai penyandang disabilitas (hambatan aksesibilitas), dan sebagai warga daerah terpencil (keterbatasan layanan). Kebijakan yang hanya mempertimbangkan satu dimensi tidak akan cukup.\n\nContoh konkret interseksionalitas dalam kasus bullying di sekolah: anak yang mengalami bullying paling berat seringkali adalah mereka yang memiliki identitas berlapis — anak perempuan dengan disabilitas, anak dari kelompok minoritas agama, anak miskin dari daerah terpencil. Pendekatan perlindungan yang efektif harus menganalisis dan merespons kerentanan berlapis ini, bukan hanya melindungi "anak" sebagai kategori tunggal.',
        keyPoints: [
          'Interseksionalitas: identitas berlapis (gender + disabilitas + kelas) menciptakan kerentanan berlapis',
          'Kebijakan yang mengabaikan interseksionalitas sering mengecualikan yang paling rentan',
          'Analisis interseksional diperlukan dalam desain kebijakan yang inklusif',
          'Data disagregasi multi-dimensi penting untuk menangkap realitas kerentanan berlapis',
        ],
      },
    ],

    flashCards: [
      { id: 't5-fc-1', category: 'concept', front: 'Mengapa kelompok rentan membutuhkan perlindungan HAM khusus?', back: 'Kerentanan lahir dari ketidaksetaraan struktural, bukan kelemahan individu. Instrumen HAM umum seringkali tidak cukup untuk menjangkau mereka karena hambatan sistemik yang spesifik. Perlindungan khusus menyeimbangkan ketidaksetaraan yang ada.' },
      { id: 't5-fc-2', category: 'legal', front: 'Apa empat prinsip utama CRC?', back: 'Non-diskriminasi (setiap anak tanpa pembedaan), kepentingan terbaik anak (best interest) dalam setiap keputusan, hak hidup dan tumbuh kembang optimal, dan hak partisipasi anak sesuai kapasitasnya.' },
      { id: 't5-fc-3', category: 'concept', front: 'Apa perbedaan model medis dan model sosial disabilitas?', back: 'Model medis: disabilitas sebagai kondisi yang perlu disembuhkan/direhabilitasi — individu "bermasalah". Model sosial: disabilitas terjadi karena hambatan lingkungan/sosial — lingkunganlah yang harus diubah, bukan individu. CRPD menggunakan model sosial.' },
      { id: 't5-fc-4', category: 'legal', front: 'Apa itu akomodasi yang wajar dalam CRPD?', back: 'Penyesuaian dan modifikasi yang diperlukan dan sesuai untuk memastikan penyandang disabilitas dapat menikmati HAM setara dengan orang lain, sepanjang tidak menimbulkan beban yang tidak proporsional bagi pemberi layanan.' },
      { id: 't5-fc-5', category: 'concept', front: 'Apa itu interseksionalitas dan mengapa penting dalam HAM?', back: 'Konsep yang menggambarkan bagaimana identitas berlapis (gender + disabilitas + kelas + etnis) saling berinteraksi menciptakan kerentanan berlapis. Penting karena kebijakan satu dimensi sering gagal melindungi mereka yang paling rentan.' },
      { id: 't5-fc-6', category: 'definition', front: 'Apa peran KPAI dalam perlindungan anak?', back: 'KPAI menerima dan menangani pengaduan pelanggaran hak anak, melakukan pemantauan kebijakan perlindungan anak, dan merekomendasikan kebijakan kepada pemerintah. KPAI juga melaporkan situasi hak anak secara berkala.' },
      { id: 't5-fc-7', category: 'legal', front: 'CEDAW mendefinisikan diskriminasi terhadap perempuan sebagai apa?', back: 'Setiap pembedaan, pengecualian, atau pembatasan berdasarkan jenis kelamin yang memiliki efek melemahkan atau meniadakan pengakuan, penikmatan, atau pelaksanaan hak asasi perempuan atas dasar kesetaraan antara laki-laki dan perempuan.' },
      { id: 't5-fc-8', category: 'case', front: 'Bagaimana bullying di sekolah melanggar HAM anak?', back: 'Bullying melanggar: hak atas keamanan dan perlindungan dari kekerasan (Pasal 28G UUD/CRC), hak atas pendidikan yang kondusif (Pasal 28C), dan prinsip best interest of the child. Negara wajib mencegah (preventif), melindungi (protektif), dan memulihkan (rehabilitatif).' },
      { id: 't5-fc-9', category: 'legal', front: 'Apa isi UU 35/2014 tentang Perlindungan Anak?', back: 'Perubahan atas UU 23/2002, memperkuat perlindungan anak dari kekerasan dan eksploitasi, memperketat sanksi bagi pelaku, mewajibkan pendampingan korban, dan mengatur kewajiban pelaporan kasus kekerasan anak.' },
      { id: 't5-fc-10', category: 'concept', front: 'Apa itu aksesibilitas universal dalam konteks CRPD?', back: 'Prinsip bahwa semua lingkungan fisik, transportasi, informasi, komunikasi, dan layanan harus dapat diakses oleh semua orang termasuk penyandang disabilitas — bukan sebagai tambahan khusus, melainkan sebagai standar desain.' },
    ],

    glossary: [
      { term: 'Kelompok Rentan', definition: 'Individu atau komunitas yang menghadapi risiko pelanggaran HAM lebih tinggi akibat faktor struktural, historis, atau sistemik — bukan karena kelemahan bawaan mereka.', relatedTerms: ['Interseksionalitas', 'Perlindungan Khusus'], category: 'concept' },
      { term: 'CEDAW', definition: 'Convention on the Elimination of All Forms of Discrimination Against Women — konvensi HAM perempuan yang diratifikasi Indonesia melalui UU 7/1984. Melarang semua bentuk diskriminasi berbasis gender.', relatedTerms: ['Komnas Perempuan', 'KBG'], category: 'legal' },
      { term: 'CRC', definition: 'Convention on the Rights of the Child — Konvensi Hak Anak, diratifikasi Indonesia melalui Keppres 36/1990. Empat prinsip: non-diskriminasi, best interest, tumbuh kembang, dan partisipasi.', relatedTerms: ['KPAI', 'UU 35/2014'], category: 'legal' },
      { term: 'Best Interest of the Child', definition: 'Prinsip CRC yang mengharuskan kepentingan terbaik anak menjadi pertimbangan utama dalam setiap keputusan yang memengaruhi anak, baik oleh negara, lembaga, maupun individu.', relatedTerms: ['CRC', 'KPAI'], category: 'legal' },
      { term: 'Model Sosial Disabilitas', definition: 'Paradigma yang memandang disabilitas sebagai hasil interaksi antara kondisi individu dan hambatan lingkungan/sosial — fokus pada perubahan lingkungan, bukan "penyembuhan" individu.', relatedTerms: ['CRPD', 'Aksesibilitas Universal'], category: 'concept' },
      { term: 'Aksesibilitas Universal', definition: 'Prinsip bahwa semua lingkungan, informasi, dan layanan dirancang agar dapat digunakan semua orang termasuk penyandang disabilitas — bukan sebagai tambahan, melainkan standar desain.', relatedTerms: ['CRPD', 'Akomodasi yang Wajar'], category: 'concept' },
      { term: 'Akomodasi yang Wajar', definition: 'Modifikasi atau penyesuaian yang diperlukan agar penyandang disabilitas dapat berpartisipasi setara, sepanjang tidak menimbulkan beban tidak proporsional bagi pemberi.', relatedTerms: ['CRPD', 'Aksesibilitas'], category: 'legal' },
      { term: 'Interseksionalitas', definition: 'Konsep yang menggambarkan bagaimana berbagai identitas sosial (gender, ras, kelas, disabilitas) saling berinteraksi menciptakan kerentanan yang berlapis dan unik.', relatedTerms: ['Kelompok Rentan', 'Disagregasi Data'], category: 'concept' },
      { term: 'KPAI', definition: 'Komisi Perlindungan Anak Indonesia — lembaga negara yang menerima pengaduan, memantau kebijakan, dan merekomendasikan perlindungan hak anak berdasarkan CRC dan UU 35/2014.', relatedTerms: ['CRC', 'UU 35/2014'], category: 'institution' },
      { term: 'Masyarakat Adat', definition: 'Komunitas yang memiliki identitas, tradisi, dan ikatan historis dengan wilayah tertentu sebelum kedatangan kelompok lain. Dilindungi oleh ILO 169 dan Deklarasi PBB tentang Hak Masyarakat Adat (UNDRIP).', relatedTerms: ['FPIC', 'ILO 169'], category: 'concept' },
      { term: 'Perlindungan Khusus', definition: 'Tindakan afirmatif yang ditujukan untuk memastikan kelompok rentan dapat menikmati HAM setara dengan kelompok lain — bukan diskriminasi, melainkan koreksi atas ketidaksetaraan yang ada.', relatedTerms: ['Kelompok Rentan', 'HRBA'], category: 'concept' },
      { term: 'Cyberbullying', definition: 'Perilaku bullying yang dilakukan melalui media digital. Melanggar hak anak atas keamanan dan privasi, diatur dalam UU ITE dan UU 35/2014.', relatedTerms: ['Bullying', 'HAM Digital'], category: 'concept' },
    ],

    essayGuide: {
      introduction: {
        title: 'Pembuka Esai Hak Kelompok Rentan',
        explanation: 'Pembuka harus mengidentifikasi kelompok rentan yang dianalisis, instrumen HAM yang relevan, dan masalah utama yang dihadapi kelompok tersebut.',
        template: 'Peningkatan kasus bullying di sekolah menurut data KPAI 2024 bukan sekadar masalah disiplin sekolah — ini adalah pelanggaran serius terhadap hak anak yang dijamin dalam Convention on the Rights of the Child (CRC) dan UU 35/2014. Analisis berbasis HAM diperlukan untuk merancang respons yang komprehensif: dari pencegahan, perlindungan, hingga pemulihan korban.',
        doList: ['Identifikasi kelompok rentan dan instrumen HAM yang melindunginya', 'Tunjukkan mengapa ini masalah HAM, bukan sekadar masalah sosial', 'Sebutkan lembaga yang relevan (KPAI untuk anak)'],
        dontList: ['Jangan mulai dengan sejarah panjang tentang hak anak secara umum', 'Jangan abaikan dimensi interseksionalitas pada korban yang paling rentan'],
      },
      body: {
        title: 'Analisis Hak yang Dilanggar dan Kewajiban Negara',
        explanation: 'Identifikasi hak-hak spesifik yang dilanggar, tunjukkan kewajiban negara berdasarkan instrumen HAM, dan analisis kegagalan atau keberhasilan respons yang ada.',
        template: 'Bullying di sekolah melanggar setidaknya tiga hak anak: hak atas keamanan dan perlindungan dari kekerasan (CRC Pasal 19, Pasal 28G UUD 1945), hak atas pendidikan dalam lingkungan yang kondusif (CRC Pasal 28, Pasal 28C UUD 1945), dan prinsip kepentingan terbaik anak yang menuntut setiap institusi pendidikan memprioritaskan keselamatan anak.',
        doList: ['Hubungkan setiap hak yang dilanggar dengan pasal konvensi/UU yang spesifik', 'Analisis kewajiban negara: preventif, protektif, dan rehabilitatif', 'Tunjukkan peran KPAI dan lembaga terkait dalam merespons', 'Sertakan dimensi interseksionalitas: siapa yang paling rentan?'],
        dontList: ['Jangan hanya fokus pada pelaku — korban dan pemulihan sama pentingnya', 'Jangan abaikan kewajiban sekolah sebagai lembaga yang berkewajiban melindungi'],
      },
      conclusion: {
        title: 'Rekomendasi Perlindungan Komprehensif',
        explanation: 'Rekomendasi harus mencakup tiga dimensi: pencegahan (preventif), perlindungan (protektif), dan pemulihan (rehabilitatif), sesuai dengan prinsip perlindungan anak.',
        template: 'Respons komprehensif terhadap kasus bullying memerlukan strategi tiga lapis: pencegahan melalui pendidikan karakter dan kebijakan sekolah anti-bullying, perlindungan melalui mekanisme pelaporan yang aman dan responsif, dan pemulihan melalui layanan konseling dan dukungan psikologis bagi korban.',
        doList: ['Tiga dimensi: preventif, protektif, rehabilitatif', 'Rekomendasikan mekanisme pelaporan yang aman dan mudah diakses anak', 'Sertakan peran keluarga, sekolah, dan komunitas'],
        dontList: ['Jangan fokus hanya pada sanksi pelaku tanpa menyentuh pemulihan korban', 'Jangan abaikan kebutuhan khusus korban yang memiliki kerentanan berlapis'],
      },
      sampleOutline:
        'I. PEMBUKA\n   • Data KPAI 2024: peningkatan bullying di sekolah\n   • Ini adalah pelanggaran HAM, bukan sekadar masalah disiplin\n   • Kerangka: CRC + UU 35/2014 + kewajiban tiga dimensi\n\nII. ISI\n   A. Hak Anak yang Dilanggar\n      - Hak keamanan: CRC Pasal 19, Pasal 28G UUD\n      - Hak pendidikan kondusif: CRC Pasal 28\n      - Prinsip best interest of the child\n   B. Analisis Faktor Penyebab\n      - Budaya kekerasan yang diterima\n      - Lemahnya mekanisme pelaporan\n      - Kurangnya kapasitas guru dalam deteksi dini\n   C. Kelompok Paling Rentan (Interseksionalitas)\n      - Anak disabilitas\n      - Anak minoritas\n      - Cyberbullying pada anak perempuan\n\nIII. REKOMENDASI\n   A. Preventif\n      - Pendidikan karakter dan anti-bullying\n      - Pelatihan guru deteksi dini\n   B. Protektif\n      - Mekanisme pelaporan aman\n      - Proteksi identitas korban\n   C. Rehabilitatif\n      - Layanan konseling sekolah\n      - Dukungan pemulihan psikososial',
      tips: [
        'Gunakan kerangka tiga dimensi (preventif-protektif-rehabilitatif) sebagai struktur rekomendasi',
        'Bedakan antara hak anak (CRC) dengan hak anak dalam hukum nasional (UU 35/2014) — tunjukkan keterkaitan keduanya',
        'Dimensi interseksionalitas (anak perempuan, anak disabilitas, anak minoritas) sering menghasilkan poin analisis yang kuat',
        'Peran lembaga: KPAI, sekolah, pemerintah daerah, dan keluarga — masing-masing punya tanggung jawab berbeda',
        'Pemulihan korban sering diabaikan dalam analisis — padahal ini kewajiban HAM yang eksplisit',
        'Bedakan bullying fisik, verbal, dan cyberbullying — implikasi hukum dan respons berbeda',
      ],
      commonMistakes: [
        'Membahas bullying hanya sebagai masalah psikologis atau disiplin sekolah, tanpa kerangka HAM',
        'Melupakan prinsip best interest of the child — ini harus menjadi pertimbangan utama setiap respons',
        'Tidak menyebutkan kewajiban pemulihan korban — padahal ini eksplisit dalam CRC',
        'Mengabaikan dimensi interseksionalitas — tidak semua anak memiliki tingkat kerentanan yang sama',
      ],
    },

    infographic: {
      title: 'Peta Perlindungan Kelompok Rentan',
      centerTopic: 'Kelompok Rentan',
      branches: [
        { label: 'Perempuan', items: ['CEDAW (UU 7/1984)', 'UU 23/2004 (KDRT)', 'UU 12/2022 (TPKS)', 'Komnas Perempuan'], color: 'rose-dust' },
        { label: 'Anak', items: ['CRC (Keppres 36/1990)', 'UU 35/2014', 'KPAI', 'Best Interest Principle'], color: 'sage' },
        { label: 'Disabilitas', items: ['CRPD (UU 19/2011)', 'UU 8/2016', 'Model Sosial', 'Akomodasi Wajar'], color: 'teal-soft' },
        { label: 'Masyarakat Adat', items: ['ILO 169', 'UNDRIP', 'FPIC', 'Hak atas Tanah'], color: 'sand' },
        { label: 'Konsep Lintas', items: ['Interseksionalitas', 'Kerentanan Berlapis', 'Perlindungan Khusus', 'Disagregasi Data'], color: 'lavender' },
      ],
      connections: [
        'Instrumen internasional → diratifikasi → UU nasional',
        'Interseksionalitas → mempengaruhi → tingkat kerentanan semua kelompok',
        'Lembaga nasional → mengimplementasikan → instrumen HAM per kelompok',
      ],
    },
  },

  // ─── TOPIK 6: HAM dan Teknologi Digital ──────────────────────────────────────
  {
    topicNumber: 6,
    topicName: 'HAM dan Teknologi Digital',
    topicTag: 'HAM Digital',
    isEnglish: false,
    relatedQuestionId: 6,
    overview:
      'Topik ini membahas keterkaitan HAM dengan teknologi digital: hak privasi dan perlindungan data (UU PDP/UU 27/2022), kebebasan berekspresi online, pengawasan digital (surveillance), kebocoran data dan tanggung jawab negara/korporasi, hak akses internet, serta dampak kecerdasan buatan (AI) terhadap HAM.',

    textContent: [
      {
        id: 't6-s1',
        order: 1,
        title: 'HAM di Era Digital: Peluang dan Risiko',
        content:
          'Teknologi digital menghadirkan paradoks bagi HAM: di satu sisi, ia memperluas pemenuhan hak — akses informasi yang lebih luas, platform advokasi bagi kelompok rentan, layanan kesehatan dan pendidikan jangkauan jauh. Di sisi lain, ia menciptakan vektor baru pelanggaran HAM yang belum pernah ada sebelumnya: surveilans masif, kebocoran data jutaan warga, penyebaran ujaran kebencian, dan diskriminasi algoritmik.\n\nKomite HAM PBB (Human Rights Committee) dalam General Comment No. 16 menegaskan bahwa privasi adalah hak fundamental yang berlaku di ruang digital. Dewan HAM PBB melalui resolusi A/HRC/20/8 (2012) menyatakan bahwa hak yang berlaku offline juga berlaku online — termasuk kebebasan berekspresi, privasi, dan kebebasan berkumpul. Ini berarti standar HAM yang sama berlaku di dunia maya.',
        keyPoints: [
          'Teknologi digital = peluang pemenuhan HAM sekaligus vektor pelanggaran baru',
          'Resolusi UNHRC: hak yang berlaku offline juga berlaku online — tanpa pengecualian',
          'Privasi digital adalah hak fundamental yang dilindungi ICCPR Pasal 17',
          'HAM digital mencakup: privasi, kebebasan berekspresi, akses informasi, kebebasan berkumpul',
        ],
      },
      {
        id: 't6-s2',
        order: 2,
        title: 'Hak Privasi Digital dan Perlindungan Data Pribadi',
        content:
          'Hak privasi dijamin dalam ICCPR Pasal 17: "Tidak seorang pun boleh dijadikan sasaran campur tangan yang sewenang-wenang atau tidak sah terhadap privasi, keluarga, rumah, atau korespondensinya." Di era digital, "korespondensi" mencakup komunikasi digital — email, pesan, data browsing.\n\nIndonesia mengesahkan UU 27/2022 tentang Perlindungan Data Pribadi (UU PDP) — regulasi komprehensif pertama tentang data pribadi. UU PDP mengatur: kewajiban pengendali data (data controller) untuk memperoleh persetujuan, melindungi keamanan data, dan melapor jika terjadi kebocoran; hak subjek data (individu pemilik data) untuk mengakses, mengoreksi, menghapus, dan membatasi penggunaan datanya. Kebocoran data 105 juta data pemilih KPU menjadi uji nyata penerapan UU PDP — apakah KPU sebagai pengendali data telah memenuhi kewajibannya?',
        keyPoints: [
          'ICCPR Pasal 17: privasi — termasuk komunikasi digital — adalah hak yang dilindungi',
          'UU PDP 27/2022: kewajiban pengendali data + hak subjek data',
          'Data controller wajib: persetujuan, keamanan, dan notifikasi kebocoran',
          'Hak subjek data: akses, koreksi, penghapusan (right to be forgotten), dan portabilitas',
        ],
      },
      {
        id: 't6-s3',
        order: 3,
        title: 'Kebebasan Berekspresi di Dunia Maya',
        content:
          'Kebebasan berekspresi online adalah hak yang dilindungi ICCPR Pasal 19, namun dapat dibatasi dalam kondisi tertentu yang ketat: harus diatur oleh hukum (by law), untuk tujuan yang sah (legitimate aim), dan proporsional (proportionate). Batasan yang sah mencakup: perlindungan keamanan nasional, ketertiban umum, kesehatan masyarakat, dan hak orang lain — termasuk perlindungan dari ujaran kebencian (hate speech).\n\nIndonesia memiliki UU ITE (UU 11/2008 jo. UU 19/2016) yang mengatur tindak pidana di ruang siber, termasuk pencemaran nama baik dan konten yang dianggap mengandung SARA. UU ITE telah dikritik oleh berbagai pihak — termasuk pelapor khusus PBB untuk kebebasan berekspresi — karena dianggap terlalu luas dan memiliki pasal karet yang dapat disalahgunakan untuk membungkam kritik. Keseimbangan antara perlindungan dari ujaran kebencian dan jaminan kebebasan berekspresi adalah tantangan utama.',
        keyPoints: [
          'Kebebasan berekspresi online: ICCPR Pasal 19 — dapat dibatasi hanya jika memenuhi tiga syarat',
          'Tiga syarat pembatasan: by law, legitimate aim, proportionate',
          'UU ITE dikritik karena pasal karet yang bisa membungkam kritik legitimate',
          'Batas ujaran kebencian vs ekspresi sah memerlukan analisis kontekstual, bukan generalisasi',
        ],
      },
      {
        id: 't6-s4',
        order: 4,
        title: 'Pengawasan Digital (Surveillance) dan Risiko HAM',
        content:
          'Pengawasan digital oleh negara atau korporasi menciptakan risiko serius terhadap HAM. Surveilans massal — pemantauan komunikasi semua warga secara indiscriminate tanpa dasar hukum individual — melanggar ICCPR Pasal 17 (privasi) dan berpotensi menimbulkan chilling effect terhadap kebebasan berekspresi dan berkumpul. Orang akan mengekang diri ketika mengetahui mereka dipantau.\n\nPrinsip-prinsip Necesitas dan Proporsionalitas dalam surveillance: pemantauan hanya boleh dilakukan jika memenuhi syarat mendesak (necessary), proporsional dengan tujuan, atas dasar hukum yang jelas, dan di bawah pengawasan independen. Penggunaan spyware (seperti Pegasus) terhadap jurnalis dan aktivis HAM melanggar standar ini. Indonesia perlu memperkuat regulasi pengawasan negara agar selaras dengan standar HAM internasional.',
        keyPoints: [
          'Surveilans massal indiscriminate melanggar ICCPR Pasal 17 (privasi)',
          'Chilling effect: ancaman pengawasan membuat orang mengekang ekspresi dan asosiasi',
          'Empat syarat pengawasan sah: necessary, proportionate, by law, independent oversight',
          'Spyware terhadap jurnalis dan aktivis HAM adalah pelanggaran HAM serius',
        ],
      },
      {
        id: 't6-s5',
        order: 5,
        title: 'Kecerdasan Buatan, Algoritma, dan Diskriminasi',
        content:
          'Kecerdasan buatan (Artificial Intelligence/AI) dan sistem algoritma menghadirkan dimensi baru dalam HAM digital. Algoritma yang melatih diri pada data historis sering mewarisi dan mengamplifikasi bias yang ada dalam data — misalnya sistem rekrutmen AI yang lebih jarang merekomendasikan perempuan untuk posisi teknis, atau sistem pengenalan wajah yang memiliki tingkat kesalahan jauh lebih tinggi untuk wajah berkulit gelap. Ini adalah bentuk diskriminasi algoritmik.\n\nDeepfakes — konten media sintetis yang memanipulasi wajah dan suara — menciptakan ancaman baru terhadap hak privasi, hak atas nama baik, dan integritas pemilu. Profiling digital — pengkategorian individu berdasarkan data perilaku — dapat digunakan untuk manipulasi opini, diskriminasi kredit, atau penargetan iklan politik yang manipulatif. Prinsip explainability (transparansi algoritma), non-diskriminasi, dan akuntabilitas dalam sistem AI menjadi tuntutan HAM yang semakin mendesak.',
        keyPoints: [
          'Bias algoritmik mewarisi dan mengamplifikasi diskriminasi yang ada dalam data historis',
          'Deepfakes: ancaman terhadap privasi, reputasi, dan integritas informasi publik',
          'Profiling digital: pengkategorian yang dapat mengarah pada diskriminasi atau manipulasi',
          'Tiga prinsip AI yang selaras HAM: explainability, non-diskriminasi, akuntabilitas',
        ],
      },
    ],

    flashCards: [
      { id: 't6-fc-1', category: 'legal', front: 'Pasal berapa ICCPR yang melindungi privasi digital?', back: 'ICCPR Pasal 17 — melarang campur tangan sewenang-wenang terhadap privasi, termasuk korespondensi (yang mencakup komunikasi digital). Human Rights Committee menegaskan perlindungan ini berlaku di ruang digital.' },
      { id: 't6-fc-2', category: 'legal', front: 'Apa isi UU PDP (UU 27/2022)?', back: 'Regulasi komprehensif perlindungan data pribadi Indonesia: mewajibkan pengendali data memperoleh persetujuan, melindungi keamanan, dan melaporkan kebocoran. Memberikan hak subjek data untuk mengakses, mengoreksi, menghapus, dan membatasi penggunaan datanya.' },
      { id: 't6-fc-3', category: 'concept', front: 'Siapa pengendali data (data controller) dan apa kewajibannya?', back: 'Pihak yang menentukan tujuan dan cara pengolahan data pribadi (pemerintah, perusahaan, platform). Kewajibannya: memperoleh persetujuan, menjaga keamanan, membatasi penggunaan sesuai tujuan, dan melapor jika terjadi kebocoran.' },
      { id: 't6-fc-4', category: 'legal', front: 'Apa tiga syarat sah pembatasan kebebasan berekspresi online?', back: 'Berdasarkan ICCPR Pasal 19: (1) diatur oleh hukum (by law) yang jelas, (2) untuk tujuan yang sah (legitimate aim: keamanan, ketertiban, kesehatan, hak orang lain), dan (3) proporsional (tidak berlebihan dari tujuannya).' },
      { id: 't6-fc-5', category: 'case', front: 'Mengapa kebocoran data KPU relevan dengan HAM?', back: 'Kebocoran 105 juta data pemilih melanggar hak privasi (ICCPR Pasal 17), kewajiban UU PDP tentang keamanan data, dan berpotensi merusak hak atas pemilu yang jujur. KPU sebagai pengendali data wajib melapor dan memberi pemulihan kepada subjek data.' },
      { id: 't6-fc-6', category: 'concept', front: 'Apa itu chilling effect dalam konteks HAM digital?', back: 'Dampak penghambat tidak langsung dari pengawasan atau hukum yang berlebihan: orang mengekang diri dalam berekspresi atau berkumpul karena takut dipantau atau terkena sanksi, meski tidak melakukan kesalahan. Ini pelanggaran HAM meski tidak ada tindakan aktif.' },
      { id: 't6-fc-7', category: 'concept', front: 'Apa itu bias algoritmik?', back: 'Kecenderungan sistem AI menghasilkan output yang mendiskriminasi kelompok tertentu karena mewarisi bias dari data pelatihan historis. Contoh: sistem rekrutmen yang merendahkan skor perempuan, atau sistem pengenalan wajah yang tidak akurat untuk wajah gelap.' },
      { id: 't6-fc-8', category: 'concept', front: 'Apa bahaya deepfakes bagi HAM?', back: 'Deepfakes mengancam hak privasi (penggunaan wajah/suara tanpa izin), hak atas nama baik (konten palsu yang merusak reputasi), integritas pemilu (video disinformasi calon), dan kepercayaan publik terhadap informasi.' },
      { id: 't6-fc-9', category: 'concept', front: 'Mengapa hak akses internet dianggap hak fundamental?', back: 'Resolusi UNHRC A/HRC/20/8 menegaskan internet adalah ruang utama pemenuhan hak lain: kebebasan berekspresi, akses informasi, pendidikan, dan partisipasi politik. Pemutusan internet oleh negara (internet shutdowns) adalah pelanggaran HAM.' },
      { id: 't6-fc-10', category: 'legal', front: 'Apa kritik terhadap UU ITE dari perspektif HAM?', back: 'Pelapor Khusus PBB untuk kebebasan berekspresi mengkritik UU ITE karena: pasal pencemaran nama baik terlalu luas, sanksi pidana tidak proporsional, tidak memenuhi syarat pembatasan ICCPR Pasal 19, dan berpotensi membungkam kritik dan jurnalisme.' },
    ],

    glossary: [
      { term: 'Perlindungan Data Pribadi', definition: 'Kewajiban hukum untuk melindungi informasi yang dapat mengidentifikasi individu dari pengumpulan, penggunaan, atau penyebaran yang tidak sah. Di Indonesia diatur dalam UU 27/2022 (UU PDP).', relatedTerms: ['Data Controller', 'Subjek Data'], category: 'legal' },
      { term: 'Pengendali Data (Data Controller)', definition: 'Pihak yang menentukan tujuan dan cara pengolahan data pribadi — pemerintah, perusahaan, platform digital. Berkewajiban memperoleh persetujuan, menjaga keamanan, dan melapor kebocoran.', relatedTerms: ['UU PDP', 'Subjek Data'], category: 'legal' },
      { term: 'Subjek Data', definition: 'Individu yang data pribadinya diolah. Memiliki hak akses, koreksi, penghapusan (right to be forgotten), portabilitas, dan pembatasan penggunaan berdasarkan UU PDP.', relatedTerms: ['Pengendali Data', 'UU PDP'], category: 'legal' },
      { term: 'Right to be Forgotten', definition: 'Hak subjek data untuk meminta penghapusan data pribadinya dari sistem pengendali data dalam kondisi tertentu, seperti data tidak lagi relevan atau persetujuan dicabut.', relatedTerms: ['Subjek Data', 'UU PDP'], category: 'legal' },
      { term: 'Surveilans Massal', definition: 'Pemantauan komunikasi atau aktivitas warga secara indiscriminate (tanpa target spesifik berbasis bukti) oleh negara atau korporasi. Melanggar ICCPR Pasal 17 dan menciptakan chilling effect.', relatedTerms: ['Privasi', 'Chilling Effect'], category: 'concept' },
      { term: 'Chilling Effect', definition: 'Dampak penghambat tidak langsung pada hak berekspresi atau berkumpul karena ancaman pengawasan atau sanksi berlebihan — orang mengekang diri meski tidak melanggar hukum.', relatedTerms: ['Surveilans', 'Kebebasan Berekspresi'], category: 'concept' },
      { term: 'Bias Algoritmik', definition: 'Kecenderungan sistem AI mendiskriminasi kelompok tertentu karena mewarisi bias dari data pelatihan historis. Contoh: sistem rekrutmen yang merugikan perempuan atau sistem wajah yang tidak akurat untuk ras tertentu.', relatedTerms: ['AI', 'Diskriminasi'], category: 'concept' },
      { term: 'Deepfake', definition: 'Konten media sintetis yang memanipulasi wajah atau suara seseorang menggunakan AI. Mengancam privasi, reputasi, dan integritas informasi publik.', relatedTerms: ['AI', 'Privasi Digital'], category: 'concept' },
      { term: 'Internet Shutdown', definition: 'Pemutusan akses internet secara sengaja oleh negara, biasanya dalam konteks demonstrasi atau ketidakstabilan politik. Dianggap pelanggaran HAM oleh resolusi UNHRC.', relatedTerms: ['Hak Akses Internet', 'Kebebasan Berekspresi'], category: 'mechanism' },
      { term: 'UU ITE', definition: 'UU 11/2008 jo. UU 19/2016 tentang Informasi dan Transaksi Elektronik. Mengatur tindak pidana siber termasuk pencemaran nama baik digital yang dikritik karena pasal karet.', relatedTerms: ['Kebebasan Berekspresi', 'Chilling Effect'], category: 'legal' },
      { term: 'Profiling Digital', definition: 'Pengkategorian dan prediksi perilaku individu berdasarkan data digital yang dikumpulkan. Dapat digunakan untuk diskriminasi kredit, penargetan iklan politik, atau pengawasan berbasis risiko.', relatedTerms: ['Bias Algoritmik', 'Privasi'], category: 'concept' },
      { term: 'Explainability', definition: 'Prinsip bahwa sistem AI harus dapat menjelaskan bagaimana keputusannya diambil secara terverifikasi — kunci akuntabilitas dalam penggunaan AI yang berdampak pada HAM.', relatedTerms: ['AI', 'Akuntabilitas'], category: 'concept' },
    ],

    essayGuide: {
      introduction: {
        title: 'Pembuka Esai HAM Digital',
        explanation: 'Pembuka harus menunjukkan pemahaman bahwa teknologi digital adalah ruang baru HAM, dan menghubungkan kasus konkret dengan kerangka HAM yang relevan.',
        template: 'Dugaan kebocoran 105 juta data pemilih KPU bukan sekadar insiden keamanan siber — ini adalah pelanggaran serius terhadap hak privasi jutaan warga Indonesia yang dilindungi ICCPR Pasal 17 dan UU 27/2022 tentang Perlindungan Data Pribadi. Insiden ini menguji kesiapan Indonesia dalam melindungi HAM di ruang digital.',
        doList: ['Gunakan kasus konkret sebagai titik masuk', 'Hubungkan insiden teknis dengan kerangka HAM', 'Identifikasi hak spesifik yang terlanggar', 'Sebutkan instrumen hukum yang relevan'],
        dontList: ['Jangan mulai dengan penjelasan teknis tentang bagaimana kebocoran terjadi', 'Jangan anggap ini hanya masalah keamanan siber tanpa dimensi HAM'],
      },
      body: {
        title: 'Analisis Hak, Kewajiban, dan Tanggung Jawab',
        explanation: 'Analisis tiga dimensi: hak yang dilanggar, kewajiban pengendali data, dan akses pemulihan bagi korban.',
        template: 'Pertama, kebocoran data KPU melanggar hak privasi warga (ICCPR Pasal 17, Pasal 28G UUD 1945) yang mencakup perlindungan data pribadi dari akses tidak sah. Kedua, KPU sebagai pengendali data berdasarkan UU PDP Pasal 46 wajib melaporkan insiden kebocoran dalam 14 hari dan mengambil langkah mitigasi. Ketiga, 105 juta subjek data berhak atas pemulihan berupa notifikasi, akses informasi tentang data yang bocor, dan kompensasi atas kerugian.',
        doList: ['Identifikasi secara eksplisit: hak yang dilanggar + pasal hukum', 'Analisis kewajiban pengendali data berdasarkan UU PDP', 'Bahas hak subjek data atas pemulihan', 'Tunjukkan nexus antara kebocoran data dan risiko HAM lanjutan (penyalahgunaan data)'],
        dontList: ['Jangan hanya fokus pada aspek teknis keamanan siber', 'Jangan lupakan hak pemulihan korban sebagai kewajiban HAM'],
      },
      conclusion: {
        title: 'Rekomendasi Penguatan Tata Kelola Digital',
        explanation: 'Rekomendasikan langkah konkret yang memperkuat perlindungan HAM di ruang digital, baik untuk penanganan kasus ini maupun pencegahan ke depan.',
        template: 'Indonesia memerlukan penguatan tata kelola digital berbasis HAM: penegakan UU PDP yang konsisten dengan sanksi yang efektif, pembentukan Komisi Perlindungan Data yang independen dan berwenang, serta penerapan prinsip privacy by design dalam setiap sistem yang mengelola data publik.',
        doList: ['Rekomendasikan pembentukan lembaga pengawas data independen', 'Usulkan mekanisme pemulihan yang konkret bagi korban', 'Sertakan rekomendasi pencegahan: privacy by design, audit keamanan berkala'],
        dontList: ['Jangan hanya merekomendasikan "peningkatan keamanan siber" tanpa dimensi HAM', 'Jangan abaikan hak korban atas pemulihan dan kompensasi'],
      },
      sampleOutline:
        'I. PEMBUKA\n   • Kebocoran data KPU: insiden keamanan atau pelanggaran HAM?\n   • ICCPR Pasal 17 + UU PDP 2022 sebagai kerangka\n\nII. ISI\n   A. Hak yang Dilanggar\n      - Hak privasi digital (ICCPR Pasal 17)\n      - Hak atas perlindungan data (UU PDP)\n      - Risiko lanjutan: penyalahgunaan data pemilih\n   B. Kewajiban Pengendali Data (KPU)\n      - Kewajiban keamanan data\n      - Kewajiban notifikasi dalam 14 hari (UU PDP Pasal 46)\n      - Tanggung jawab atas kerugian subjek data\n   C. Hak Subjek Data atas Pemulihan\n      - Notifikasi data yang bocor\n      - Informasi tentang penyalahgunaan\n      - Kompensasi atas kerugian\n   D. Dimensi HAM Lebih Luas\n      - Integritas pemilu: penyalahgunaan data pemilih\n      - Kepercayaan publik terhadap sistem digital\n\nIII. REKOMENDASI\n   1. Penegakan UU PDP dengan sanksi efektif\n   2. Komisi perlindungan data independen\n   3. Mekanisme pemulihan yang mudah diakses\n   4. Privacy by design untuk sistem pemerintah\n   5. Audit keamanan berkala oleh pihak independen',
      tips: [
        'Gunakan framing "kebocoran data = pelanggaran privasi = pelanggaran HAM" — bukan hanya masalah teknis',
        'UU PDP adalah regulasi baru — tunjukkan pengetahuan tentang kewajiban dan hak yang diaturnya',
        'Hak pemulihan subjek data sering dilupakan — padahal ini inti dari akuntabilitas UU PDP',
        'Dimensi pemilu: kebocoran data pemilih berpotensi mengancam hak atas pemilu yang bebas dan adil',
        'Komisi perlindungan data independen (seperti GDPR di Eropa) adalah rekomendasi strategis yang kuat',
        'Bedakan ancaman dari negara (surveillance) dan dari aktor swasta (pelanggaran pengendali data)',
      ],
      commonMistakes: [
        'Membahas kebocoran data hanya dari perspektif teknis keamanan siber tanpa kerangka HAM',
        'Tidak menyebutkan kewajiban spesifik pengendali data berdasarkan UU PDP',
        'Mengabaikan hak subjek data atas pemulihan — padahal ini kewajiban eksplisit dalam UU PDP',
        'Tidak membedakan antara surveilans negara dan pelanggaran oleh pengendali data swasta/pemerintah',
      ],
    },

    infographic: {
      title: 'HAM di Ruang Digital',
      centerTopic: 'HAM Digital',
      branches: [
        { label: 'Privasi & Data', items: ['ICCPR Pasal 17', 'UU PDP 27/2022', 'Right to be Forgotten', 'Data Controller'], color: 'teal-soft' },
        { label: 'Kebebasan Ekspresi', items: ['ICCPR Pasal 19', 'UU ITE (dikritik)', 'Hate Speech vs Ekspresi Sah', 'Tiga Syarat Pembatasan'], color: 'sage' },
        { label: 'Surveilans', items: ['Chilling Effect', 'Syarat Necessary & Proportionate', 'Spyware', 'Internet Shutdown'], color: 'rose-dust' },
        { label: 'AI & Algoritma', items: ['Bias Algoritmik', 'Deepfakes', 'Profiling Digital', 'Explainability'], color: 'sand' },
        { label: 'Akuntabilitas', items: ['Komisi Data Independen', 'Privacy by Design', 'Pemulihan Korban', 'Audit Keamanan'], color: 'lavender' },
      ],
      connections: [
        'Privasi → terancam oleh → Surveilans + Kebocoran Data',
        'Kebebasan Ekspresi → dibatasi oleh → UU ITE yang berlebihan',
        'AI & Algoritma → menghasilkan → Bias Diskriminatif',
      ],
    },
  },

  // ─── TOPIK 7: Implementasi HAM di Indonesia ──────────────────────────────────
  {
    topicNumber: 7,
    topicName: 'Implementasi HAM di Indonesia',
    topicTag: 'Implementasi HAM',
    isEnglish: false,
    relatedQuestionId: 7,
    overview:
      'Topik ini membahas bagaimana HAM diimplementasikan di Indonesia melalui kerangka regulasi nasional, kelembagaan, dan mekanisme pemantauan. Mencakup NAP HAM, RANHAM, peran Kementerian HAM, Komnas HAM, serta tantangan dan capaian implementasi HAM di Indonesia.',

    textContent: [
      {
        id: 't7-s1',
        order: 1,
        title: 'Kerangka Hukum HAM di Indonesia',
        content:
          'Indonesia memiliki kerangka hukum HAM yang cukup komprehensif. Landasan konstitusional tertuang dalam UUD 1945 Pasal 28A–28J yang ditambahkan melalui Amandemen II tahun 2000. Pasal-pasal ini menjamin hak hidup, hak atas keamanan pribadi, hak atas keadilan, hak beragama, serta larangan diskriminasi.\n\nUU No. 39 Tahun 1999 tentang HAM merupakan undang-undang induk yang mengatur definisi, prinsip, dan kewajiban negara dalam pemajuan dan perlindungan HAM. Undang-undang ini juga membentuk Komnas HAM sebagai lembaga independen. Selain itu, Indonesia telah meratifikasi sejumlah instrumen internasional penting, termasuk ICCPR (UU 12/2005), ICESCR (UU 11/2005), CAT (UU 5/1998), CEDAW (UU 7/1984), dan CRC (Keppres 36/1990).\n\nKerangka hukum sektoral juga turut memperkuat implementasi HAM, seperti UU No. 26 Tahun 2000 tentang Pengadilan HAM untuk pelanggaran HAM berat, UU No. 23 Tahun 2004 tentang PKDRT, UU No. 40 Tahun 2008 tentang Penghapusan Diskriminasi Ras dan Etnis, serta berbagai regulasi perlindungan kelompok rentan.',
        keyPoints: [
          'UUD 1945 Pasal 28A–28J sebagai landasan konstitusional HAM',
          'UU No. 39 Tahun 1999 sebagai undang-undang induk HAM',
          'Indonesia telah meratifikasi 7 instrumen HAM inti internasional',
          'UU No. 26 Tahun 2000 khusus menangani pelanggaran HAM berat',
        ],
      },
      {
        id: 't7-s2',
        order: 2,
        title: 'Rencana Aksi Nasional HAM (RANHAM)',
        content:
          'Rencana Aksi Nasional Hak Asasi Manusia (RANHAM) adalah dokumen perencanaan strategis pemerintah Indonesia untuk pemajuan dan perlindungan HAM. RANHAM pertama kali diluncurkan pada 1998 dan terus diperbaharui setiap lima tahun. RANHAM generasi kelima (2021–2025) mencakup empat kelompok sasaran prioritas: perempuan, anak, penyandang disabilitas, dan masyarakat adat.\n\nStruktur RANHAM melibatkan panitia nasional yang diketuai Menteri Hukum dan HAM (kini Menteri HAM), dengan panitia daerah di tingkat provinsi dan kabupaten/kota. Setiap instansi pemerintah wajib menyusun rencana aksi sektoral yang terintegrasi dengan RANHAM.\n\nRANHAM 2021–2025 memiliki enam pilar: hak sipil dan politik; hak ekonomi, sosial, dan budaya; hak perempuan; hak anak; hak penyandang disabilitas; dan hak masyarakat adat. Setiap pilar dilengkapi indikator capaian yang terukur dan mekanisme pelaporan berkala kepada Presiden.',
        keyPoints: [
          'RANHAM adalah dokumen perencanaan strategis HAM pemerintah tiap 5 tahun',
          'RANHAM generasi ke-5 (2021–2025) fokus pada 4 kelompok sasaran prioritas',
          'Melibatkan panitia nasional dan daerah dengan koordinasi lintas kementerian',
          'Enam pilar: sipol, ekosob, perempuan, anak, disabilitas, masyarakat adat',
        ],
      },
      {
        id: 't7-s3',
        order: 3,
        title: 'Kelembagaan HAM di Indonesia',
        content:
          'Sistem kelembagaan HAM Indonesia terdiri dari lembaga negara, lembaga independen, dan mekanisme yudisial. Kementerian Hak Asasi Manusia (hasil pemisahan dari Kemenkumham pada 2024) bertugas merumuskan kebijakan, koordinasi, dan pemantauan implementasi HAM di Indonesia.\n\nKomnas HAM adalah lembaga negara independen yang bertugas melakukan pengkajian, penelitian, penyuluhan, pemantauan, dan mediasi HAM. Komnas HAM memiliki kewenangan penyelidikan untuk pelanggaran HAM berat. Selain Komnas HAM, terdapat lembaga khusus: Komnas Perempuan (kekerasan terhadap perempuan), KPAI (perlindungan anak), Ombudsman RI (maladministrasi), dan LPSK (perlindungan saksi dan korban).\n\nDi ranah yudisial, Pengadilan HAM dibentuk berdasarkan UU No. 26 Tahun 2000 untuk mengadili pelanggaran HAM berat (genosida dan kejahatan terhadap kemanusiaan). Hingga kini, hanya beberapa kasus yang telah disidangkan, antara lain kasus Timor-Timur dan Tanjung Priok.',
        keyPoints: [
          'Kementerian HAM (2024) bertanggung jawab atas kebijakan dan koordinasi HAM',
          'Komnas HAM sebagai lembaga independen dengan kewenangan penyelidikan HAM berat',
          'Lembaga khusus: Komnas Perempuan, KPAI, Ombudsman, LPSK',
          'Pengadilan HAM untuk mengadili pelanggaran HAM berat (genosida, kejahatan kemanusiaan)',
        ],
      },
      {
        id: 't7-s4',
        order: 4,
        title: 'Tantangan Implementasi HAM',
        content:
          'Meski kerangka hukum sudah tersedia, implementasi HAM di Indonesia masih menghadapi berbagai tantangan. Pertama, kesenjangan antara normative framework dan praktik di lapangan. UU ada, namun penegakan hukum lemah, terutama untuk kasus-kasus yang melibatkan aparat negara.\n\nKedua, impunitas atas pelanggaran HAM masa lalu. Kasus-kasus seperti Peristiwa 1965, Penghilangan Paksa 1997–1998, Trisakti, dan Semanggi belum tuntas diselesaikan secara yudisial. Ketiga, kriminalisasi pembela HAM — aktivis, jurnalis, dan warga yang memperjuangkan hak mereka kerap dihadapkan pada pasal-pasal karet seperti pencemaran nama baik dan makar.\n\nKeempat, keterbatasan anggaran dan kapasitas lembaga HAM daerah. RANHAM daerah sering tidak terealisasi karena kurangnya dukungan anggaran dan SDM. Kelima, tantangan HAM kontemporer seperti penggunaan teknologi untuk surveilans dan pembatasan kebebasan berekspresi digital.',
        keyPoints: [
          'Kesenjangan antara regulasi dan praktik lapangan dalam penegakan HAM',
          'Impunitas pelanggaran HAM berat masa lalu belum tuntas diselesaikan',
          'Kriminalisasi pembela HAM melalui pasal-pasal karet (pencemaran nama baik, makar)',
          'Tantangan baru: surveilans digital dan pembatasan kebebasan berekspresi online',
        ],
      },
      {
        id: 't7-s5',
        order: 5,
        title: 'Capaian dan Indeks HAM Indonesia',
        content:
          'Indonesia telah mencapai sejumlah kemajuan dalam implementasi HAM. Di bidang kelembagaan, pembentukan Kementerian HAM pada 2024 merupakan langkah serius untuk memperkuat koordinasi kebijakan HAM. Indonesia aktif berpartisipasi dalam Universal Periodic Review (UPR) di Dewan HAM PBB dan menerima rekomendasi dari negara-negara lain.\n\nDalam bidang legislasi, Indonesia telah menerbitkan berbagai undang-undang perlindungan seperti UU Disabilitas (2016), UU TPKS (2022), dan UU Masyarakat Adat (dalam proses). Indeks Pembangunan Manusia (IPM) Indonesia terus meningkat, mencerminkan perbaikan dalam pemenuhan hak ekonomi, sosial, dan budaya.\n\nNamun, indeks kebebasan dari lembaga internasional seperti Freedom House dan V-Dem menunjukkan tren penurunan kebebasan sipil dan politik dalam beberapa tahun terakhir. Ini menjadi tantangan bagi Indonesia untuk membuktikan komitmen HAM bukan hanya di tingkat formal, tetapi juga substantif.',
        keyPoints: [
          'Kementerian HAM (2024) memperkuat koordinasi kebijakan HAM nasional',
          'Indonesia aktif dalam UPR dan mekanisme pelaporan HAM internasional',
          'UU Disabilitas (2016) dan UU TPKS (2022) sebagai kemajuan legislasi',
          'Indeks kebebasan sipil dari lembaga internasional menunjukkan tren penurunan',
        ],
      },
    ],

    flashCards: [
      { id: 't7-fc-1', front: 'Apa itu RANHAM?', back: 'Rencana Aksi Nasional Hak Asasi Manusia — dokumen perencanaan strategis pemerintah untuk pemajuan dan perlindungan HAM, diperbarui setiap 5 tahun.', category: 'concept' },
      { id: 't7-fc-2', front: 'Berapa pilar RANHAM 2021–2025?', back: 'Enam pilar: hak sipil dan politik; hak ekonomi, sosial, dan budaya; hak perempuan; hak anak; hak penyandang disabilitas; dan hak masyarakat adat.', category: 'concept' },
      { id: 't7-fc-3', front: 'UU No. 39 Tahun 1999 mengatur apa?', back: 'Undang-undang induk HAM Indonesia yang mendefinisikan HAM, mengatur prinsip-prinsip, kewajiban negara, serta membentuk Komnas HAM.', category: 'legal' },
      { id: 't7-fc-4', front: 'UU No. 26 Tahun 2000 mengatur apa?', back: 'Pengadilan HAM untuk mengadili pelanggaran HAM berat: genosida dan kejahatan terhadap kemanusiaan.', category: 'legal' },
      { id: 't7-fc-5', front: 'Apa kewenangan Komnas HAM?', back: 'Pengkajian, penelitian, penyuluhan, pemantauan, mediasi, dan penyelidikan untuk kasus pelanggaran HAM berat.', category: 'definition' },
      { id: 't7-fc-6', front: 'Apa itu UPR (Universal Periodic Review)?', back: 'Mekanisme PBB di mana setiap negara anggota direview rekam jejak HAM-nya secara berkala oleh negara-negara lain di Dewan HAM PBB.', category: 'definition' },
      { id: 't7-fc-7', front: 'Apa yang dimaksud impunitas?', back: 'Kondisi di mana pelaku pelanggaran HAM tidak diadili atau dihukum, menciptakan siklus kekerasan karena tidak ada efek jera.', category: 'concept' },
      { id: 't7-fc-8', front: 'Apa itu National Action Plan (NAP) HAM?', back: 'Dokumen strategis negara yang memuat komitmen, target, dan langkah konkret pemajuan HAM — di Indonesia dikenal sebagai RANHAM.', category: 'definition' },
      { id: 't7-fc-9', front: 'Amandemen berapa UUD 1945 yang menambahkan Pasal 28A–28J?', back: 'Amandemen II UUD 1945 tahun 2000, yang secara eksplisit memasukkan jaminan hak asasi manusia ke dalam konstitusi.', category: 'legal' },
      { id: 't7-fc-10', front: 'Apa peran LPSK dalam sistem HAM?', back: 'Lembaga Perlindungan Saksi dan Korban — memberikan perlindungan fisik, psikologis, dan hukum bagi saksi serta korban kejahatan, termasuk korban pelanggaran HAM.', category: 'definition' },
    ],

    glossary: [
      { term: 'RANHAM', definition: 'Rencana Aksi Nasional Hak Asasi Manusia — dokumen perencanaan HAM pemerintah Indonesia yang direvisi setiap lima tahun.', relatedTerms: ['NAP', 'kebijakan HAM'], category: 'concept' },
      { term: 'Komnas HAM', definition: 'Komisi Nasional Hak Asasi Manusia — lembaga negara independen yang dibentuk UU No. 39/1999 untuk pemajuan dan perlindungan HAM.', relatedTerms: ['Komnas Perempuan', 'KPAI'], category: 'institution' },
      { term: 'Pengadilan HAM', definition: 'Pengadilan khusus berdasarkan UU 26/2000 untuk mengadili pelanggaran HAM berat (genosida dan kejahatan terhadap kemanusiaan).', relatedTerms: ['pelanggaran HAM berat', 'impunitas'], category: 'institution' },
      { term: 'UPR', definition: 'Universal Periodic Review — mekanisme PBB di mana rekam jejak HAM setiap negara anggota dikaji secara berkala oleh negara lain.', relatedTerms: ['Dewan HAM PBB', 'pelaporan HAM'], category: 'mechanism' },
      { term: 'Impunitas', definition: 'Kondisi di mana pelaku pelanggaran HAM tidak diadili atau dihukum secara memadai, mengakibatkan tidak adanya pertanggungjawaban.', relatedTerms: ['akuntabilitas', 'penegakan hukum'], category: 'concept' },
      { term: 'Pelanggaran HAM Berat', definition: 'Pelanggaran HAM yang termasuk genosida atau kejahatan terhadap kemanusiaan sebagaimana didefinisikan UU 26/2000, tidak memiliki kadaluarsa.', relatedTerms: ['genosida', 'Pengadilan HAM'], category: 'legal' },
      { term: 'LPSK', definition: 'Lembaga Perlindungan Saksi dan Korban — lembaga negara yang memberikan perlindungan dan bantuan kepada saksi dan korban tindak pidana.', relatedTerms: ['korban', 'saksi'], category: 'institution' },
      { term: 'Ratifikasi', definition: 'Proses formal suatu negara mengikatkan diri pada perjanjian internasional, menjadikan norma internasional bagian dari hukum nasional.', relatedTerms: ['instrumen HAM', 'ICCPR', 'ICESCR'], category: 'legal' },
      { term: 'Pembela HAM', definition: 'Individu atau kelompok yang secara damai memperjuangkan pemajuan dan perlindungan HAM; dilindungi oleh Deklarasi Pembela HAM PBB 1998.', relatedTerms: ['kriminalisasi', 'aktivis HAM'], category: 'concept' },
      { term: 'Kriminalisasi', definition: 'Penggunaan hukum pidana secara tidak proporsional untuk membungkam atau menghukum pembela HAM, aktivis, atau warga yang kritis.', relatedTerms: ['pasal karet', 'pembela HAM'], category: 'concept' },
      { term: 'KPAI', definition: 'Komisi Perlindungan Anak Indonesia — lembaga independen yang memantau implementasi perlindungan anak sesuai UU 23/2002.', relatedTerms: ['CRC', 'perlindungan anak'], category: 'institution' },
      { term: 'Ombudsman RI', definition: 'Lembaga negara pengawas pelayanan publik yang menangani laporan maladministrasi dan dapat merekomendasikan tindakan korektif kepada instansi.', relatedTerms: ['maladministrasi', 'pelayanan publik'], category: 'institution' },
    ],

    essayGuide: {
      introduction: {
        title: 'Paragraf Pembuka: Konteks Implementasi HAM',
        explanation: 'Buka dengan fakta spesifik tentang kondisi implementasi HAM di Indonesia, misalnya capaian atau tantangan terkini dari RANHAM.',
        template: 'Indonesia telah membangun kerangka hukum HAM yang relatif komprehensif sejak reformasi 1998, ditandai dengan [regulasi kunci]. Namun, [tantangan spesifik dari kasus/konteks soal] menunjukkan masih adanya kesenjangan antara komitmen normatif dan implementasi di lapangan. Esai ini menganalisis [aspek yang ditanyakan soal].',
        doList: ['Sebutkan regulasi atau kebijakan HAM yang relevan', 'Gunakan data atau fakta konkret tentang kondisi HAM Indonesia', 'Tunjukkan pemahaman tentang RANHAM dan kelembagaan HAM'],
        dontList: ['Jangan terlalu umum tanpa menyebut konteks Indonesia', 'Hindari hanya memuji tanpa mengakui tantangan yang ada'],
      },
      body: {
        title: 'Isi Esai: Analisis Tiga Dimensi',
        explanation: 'Bahas tiga hal: (1) kerangka regulasi yang relevan, (2) kelembagaan dan mekanisme, (3) tantangan dan capaian.',
        template: 'Dari perspektif regulasi, [UU/kebijakan relevan] mewajibkan [kewajiban spesifik]. Kelembagaan HAM Indonesia, khususnya [lembaga relevan], memiliki mandat [mandat spesifik] untuk menangani isu ini. Namun, implementasi terkendala oleh [tantangan konkret], sebagaimana terlihat dalam [kasus atau data]. Capaian yang perlu diakui meliputi [capaian positif].',
        doList: ['Hubungkan analisis dengan RANHAM dan kebijakan HAM spesifik', 'Sebutkan peran lembaga HAM yang relevan (Komnas HAM, KPAI, dll.)', 'Gunakan contoh kasus nyata Indonesia untuk memperkuat argumen', 'Bahas dimensi pusat dan daerah dalam implementasi'],
        dontList: ['Jangan hanya deskriptif — berikan penilaian kritis', 'Hindari mengabaikan aspek kelembagaan dalam analisis'],
      },
      conclusion: {
        title: 'Penutup: Rekomendasi Kebijakan',
        explanation: 'Tutup dengan rekomendasi konkret yang dapat diterapkan oleh pemerintah atau Kementerian HAM.',
        template: 'Untuk memperkuat implementasi HAM dalam konteks [isu soal], pemerintah perlu [rekomendasi 1] melalui [mekanisme konkret]. Selain itu, [rekomendasi 2] akan memastikan [dampak positif]. Kementerian HAM dapat memimpin [langkah strategis] untuk menutup kesenjangan antara komitmen formal dan realitas lapangan.',
        doList: ['Rekomendasikan langkah kebijakan yang spesifik dan realistis', 'Tunjukkan pemahaman tentang koordinasi antar-lembaga', 'Kaitkan rekomendasi dengan RANHAM atau kerangka internasional'],
        dontList: ['Jangan berikan rekomendasi yang terlalu abstrak atau tidak operasional', 'Hindari mengulang isi tanpa menambah nilai di penutup'],
      },
      sampleOutline: '1. Pendahuluan: Kerangka HAM Indonesia dan konteks isu\n2. Analisis Regulasi: UU yang relevan dan kewajiban negara\n3. Analisis Kelembagaan: Peran lembaga HAM terkait\n4. Tantangan Implementasi: Kesenjangan normatif-praktis\n5. Capaian: Kemajuan yang dicapai\n6. Rekomendasi: Langkah kebijakan konkret\n7. Kesimpulan',
      tips: [
        'Selalu mulai dengan menyebut regulasi spesifik yang relevan (nomor UU)',
        'Bedakan antara pelanggaran HAM biasa dan pelanggaran HAM berat',
        'Gunakan terminologi RANHAM untuk menunjukkan keahlian konteks Indonesia',
        'Berikan contoh kasus nyata Indonesia (Wadas, Nduga, dll.) jika relevan',
        'Akhiri dengan rekomendasi multi-level: legislasi, kebijakan, dan implementasi',
      ],
      commonMistakes: [
        'Hanya menyebut kerangka internasional tanpa menghubungkan dengan hukum Indonesia',
        'Mengabaikan peran lembaga HAM daerah (panitia RANHAM provinsi/kab/kota)',
        'Tidak membedakan peran Kementerian HAM vs Komnas HAM',
        'Lupa menyebutkan mekanisme pelaporan (UPR, treaty body) sebagai konteks',
      ],
    },

    infographic: {
      title: 'Implementasi HAM di Indonesia',
      centerTopic: 'Implementasi HAM',
      branches: [
        { label: 'Regulasi', items: ['UUD 1945 Ps 28A–28J', 'UU 39/1999', 'UU 26/2000', 'UU TPKS 2022'], color: 'teal-soft' },
        { label: 'Kelembagaan', items: ['Kementerian HAM', 'Komnas HAM', 'KPAI', 'LPSK', 'Ombudsman'], color: 'sage' },
        { label: 'RANHAM', items: ['6 Pilar', '4 Kelompok Prioritas', 'Panitia Nasional', 'Panitia Daerah'], color: 'lavender' },
        { label: 'Tantangan', items: ['Impunitas', 'Kriminalisasi', 'Kesenjangan Normatif', 'Kapasitas Daerah'], color: 'rose-dust' },
        { label: 'Mekanisme Int\'l', items: ['UPR PBB', 'Treaty Bodies', 'Special Procedures', 'Pelaporan Berkala'], color: 'sand' },
      ],
      connections: [
        'Regulasi → dilaksanakan oleh → Kelembagaan',
        'RANHAM → koordinasi oleh → Kementerian HAM',
        'Tantangan → harus dijawab melalui → Reformasi Kelembagaan',
      ],
    },
  },

  // ─── TOPIK 8: Mekanisme Penanganan Dugaan Pelanggaran HAM ─────────────────────
  {
    topicNumber: 8,
    topicName: 'Mekanisme Penanganan Dugaan Pelanggaran HAM',
    topicTag: 'Penegakan HAM',
    isEnglish: false,
    relatedQuestionId: 8,
    overview:
      'Topik ini membahas mekanisme hukum dan kelembagaan untuk menangani dugaan pelanggaran HAM di Indonesia. Mencakup alur penanganan, perbedaan pelanggaran HAM biasa vs berat, peran Komnas HAM dalam penyelidikan, mekanisme pra-penuntutan, serta peran LPSK dan KKR.',

    textContent: [
      {
        id: 't8-s1',
        order: 1,
        title: 'Klasifikasi Pelanggaran HAM',
        content:
          'Sistem hukum Indonesia membedakan dua kategori utama pelanggaran HAM yang memiliki mekanisme penanganan berbeda. Pelanggaran HAM biasa (ordinary human rights violations) adalah pelanggaran yang dilakukan oleh perorangan atau aparat dalam kapasitas individual, seperti penganiayaan, penangkapan sewenang-wenang, atau penyiksaan dalam skala terbatas. Kasus ini ditangani melalui mekanisme hukum pidana umum.\n\nPelanggaran HAM berat (gross violations of human rights) adalah pelanggaran yang bersifat sistematis, meluas, dan melibatkan kebijakan atau perintah atasan. UU No. 26 Tahun 2000 mengidentifikasi dua kategori: genosida (perbuatan yang bertujuan menghancurkan seluruh atau sebagian kelompok nasional, etnis, ras, atau agama) dan kejahatan terhadap kemanusiaan (serangan meluas atau sistematis terhadap penduduk sipil).\n\nKejahatan terhadap kemanusiaan mencakup 11 tindakan spesifik: pembunuhan, pemusnahan, perbudakan, pengusiran, perampasan kemerdekaan, penyiksaan, pemerkosaan dan kekerasan seksual, penganiayaan terhadap kelompok tertentu, penghilangan paksa, apartheid, dan tindakan tidak manusiawi lainnya.',
        keyPoints: [
          'Pelanggaran HAM biasa ditangani melalui hukum pidana umum',
          'Pelanggaran HAM berat: genosida dan kejahatan terhadap kemanusiaan',
          'Kejahatan terhadap kemanusiaan harus bersifat meluas atau sistematis',
          'Kejahatan HAM berat tidak mengenal daluwarsa',
        ],
      },
      {
        id: 't8-s2',
        order: 2,
        title: 'Alur Penanganan Pelanggaran HAM Berat',
        content:
          'Mekanisme penanganan pelanggaran HAM berat memiliki alur khusus yang berbeda dari hukum pidana biasa. Tahap pertama adalah penyelidikan oleh Komnas HAM. Berdasarkan UU 26/2000, Komnas HAM diberi wewenang eksklusif untuk melakukan penyelidikan awal terhadap dugaan pelanggaran HAM berat. Komnas HAM membentuk tim penyelidik yang dapat memanggil saksi, meminta dokumen, dan melakukan pemeriksaan lapangan.\n\nJika Komnas HAM menyimpulkan terdapat bukti permulaan yang cukup, hasil penyelidikan diserahkan kepada Jaksa Agung untuk penyidikan. Jaksa Agung kemudian menentukan apakah akan diteruskan ke penuntutan. Pengadilan HAM ad hoc dapat dibentuk oleh Presiden atas usul DPR untuk kasus yang terjadi sebelum UU 26/2000, sementara kasus pasca-UU ditangani Pengadilan HAM permanen.\n\nTantangan utama mekanisme ini adalah bottleneck antara penyelidikan Komnas HAM dan penyidikan Jaksa Agung. Sejumlah berkas hasil penyelidikan Komnas HAM (kasus 1965, Semanggi, Penghilangan Paksa) dinyatakan "belum lengkap" oleh Jaksa Agung, sehingga kasus tidak berlanjut ke penuntutan.',
        keyPoints: [
          'Komnas HAM memiliki wewenang eksklusif penyelidikan pelanggaran HAM berat',
          'Hasil penyelidikan diserahkan ke Jaksa Agung untuk penyidikan dan penuntutan',
          'Pengadilan HAM ad hoc untuk kasus pra-UU 26/2000, pengadilan permanen untuk kasus pasca-UU',
          'Bottleneck Komnas HAM–Jaksa Agung jadi hambatan utama penuntutan',
        ],
      },
      {
        id: 't8-s3',
        order: 3,
        title: 'Peran LPSK dalam Perlindungan Korban dan Saksi',
        content:
          'Lembaga Perlindungan Saksi dan Korban (LPSK) dibentuk berdasarkan UU No. 13 Tahun 2006 (diperbarui UU No. 31 Tahun 2014) untuk memberikan perlindungan kepada saksi dan korban dalam proses peradilan pidana, termasuk kasus pelanggaran HAM.\n\nLPSK memiliki empat fungsi utama: perlindungan fisik (pengamanan, relokasi, identitas baru), perlindungan hukum (pendampingan hukum, larangan pertanyaan yang merendahkan martabat), bantuan medis (perawatan, rehabilitasi), dan kompensasi/restitusi bagi korban pelanggaran HAM berat.\n\nKhusus untuk korban pelanggaran HAM berat, LPSK dapat mengajukan permohonan kompensasi kepada pengadilan atas permintaan korban. Kompensasi diberikan oleh negara ketika pelaku tidak mampu atau tidak mau membayar, sementara restitusi (ganti rugi dari pelaku) juga dapat diupayakan. Pemulihan psikologis dan medis juga menjadi bagian dari mandat LPSK.',
        keyPoints: [
          'LPSK dibentuk UU 13/2006 untuk melindungi saksi dan korban',
          'Empat fungsi: perlindungan fisik, hukum, bantuan medis, kompensasi/restitusi',
          'LPSK dapat mengajukan kompensasi ke pengadilan untuk korban HAM berat',
          'Kompensasi dari negara, restitusi dari pelaku',
        ],
      },
      {
        id: 't8-s4',
        order: 4,
        title: 'Komisi Kebenaran dan Rekonsiliasi (KKR)',
        content:
          'Komisi Kebenaran dan Rekonsiliasi (KKR) adalah mekanisme transitional justice yang bertujuan mengungkap kebenaran, memberikan pengakuan kepada korban, dan membangun rekonsiliasi nasional atas pelanggaran HAM masa lalu. Indonesia telah dua kali mencoba membentuk KKR.\n\nUU No. 27 Tahun 2004 tentang KKR dibatalkan seluruhnya oleh Mahkamah Konstitusi melalui Putusan MK No. 006/PUU-IV/2006, dengan alasan bahwa syarat amnesti yang dikaitkan dengan pemberian kompensasi bertentangan dengan konstitusi dan hak korban. Upaya pembentukan KKR baru melalui RUU KKR terus berlanjut dalam pembahasan legislasi.\n\nKKR dianggap penting untuk menangani kasus-kasus pelanggaran HAM berat masa lalu yang tidak dapat atau sulit dituntaskan melalui jalur pengadilan, seperti Peristiwa 1965, penghilangan paksa aktivis 1997–1998, dan berbagai konflik bersenjata di daerah. Model KKR Afrika Selatan dan Argentina sering dijadikan referensi.',
        keyPoints: [
          'KKR adalah mekanisme transitional justice untuk mengungkap kebenaran dan rekonsiliasi',
          'UU KKR No. 27/2004 dibatalkan MK karena syarat amnesti melanggar hak korban',
          'RUU KKR baru masih dalam proses legislasi',
          'KKR penting untuk kasus yang sulit ditangani lewat jalur pengadilan biasa',
        ],
      },
    ],

    flashCards: [
      { id: 't8-fc-1', front: 'Apa bedanya genosida dan kejahatan terhadap kemanusiaan?', back: 'Genosida bertujuan menghancurkan kelompok tertentu (nasional/etnis/ras/agama). Kejahatan kemanusiaan adalah serangan meluas/sistematis terhadap penduduk sipil tanpa perlu motif pemusnahan kelompok.', category: 'concept' },
      { id: 't8-fc-2', front: 'Siapa yang berwenang menyelidiki pelanggaran HAM berat?', back: 'Komnas HAM memiliki wewenang eksklusif untuk penyelidikan awal (pro-justicia), kemudian menyerahkan hasil ke Jaksa Agung untuk penyidikan dan penuntutan.', category: 'concept' },
      { id: 't8-fc-3', front: 'Apa itu Pengadilan HAM ad hoc?', back: 'Pengadilan HAM yang dibentuk oleh Presiden atas usul DPR untuk mengadili pelanggaran HAM berat yang terjadi sebelum berlakunya UU No. 26 Tahun 2000.', category: 'legal' },
      { id: 't8-fc-4', front: 'Apa fungsi LPSK?', back: 'Memberikan perlindungan fisik, perlindungan hukum, bantuan medis, serta kompensasi dan restitusi bagi saksi dan korban tindak pidana termasuk pelanggaran HAM.', category: 'definition' },
      { id: 't8-fc-5', front: 'Mengapa UU KKR No. 27/2004 dibatalkan MK?', back: 'Karena syarat amnesti yang dikaitkan dengan pemberian kompensasi dianggap bertentangan dengan UUD 1945 dan melanggar hak konstitusional korban untuk mendapat keadilan.', category: 'legal' },
      { id: 't8-fc-6', front: 'Apa itu transitional justice?', back: 'Serangkaian proses dan mekanisme untuk mengatasi pelanggaran HAM skala besar di masa lalu, mencakup pengadilan, KKR, reparasi, dan reformasi kelembagaan.', category: 'concept' },
      { id: 't8-fc-7', front: 'Apa itu bottleneck dalam penanganan HAM berat?', back: 'Hambatan dalam alur penanganan dimana berkas penyelidikan Komnas HAM dinyatakan belum lengkap oleh Jaksa Agung, sehingga kasus tidak berlanjut ke penuntutan.', category: 'concept' },
      { id: 't8-fc-8', front: 'Apa perbedaan kompensasi dan restitusi?', back: 'Kompensasi dibayar oleh negara kepada korban. Restitusi adalah ganti rugi yang harus dibayar oleh pelaku kepada korban sebagai bagian dari putusan pengadilan.', category: 'definition' },
      { id: 't8-fc-9', front: 'UU berapa dasar LPSK?', back: 'UU No. 13 Tahun 2006 tentang Perlindungan Saksi dan Korban, sebagaimana diubah dengan UU No. 31 Tahun 2014.', category: 'legal' },
      { id: 't8-fc-10', front: 'Apa itu penghilangan paksa?', back: 'Penangkapan, penahanan, atau penculikan seseorang oleh negara atau kelompok dengan persetujuan negara, diikuti penolakan mengakui tindakan tersebut — termasuk kejahatan terhadap kemanusiaan.', category: 'definition' },
    ],

    glossary: [
      { term: 'Pelanggaran HAM Berat', definition: 'Genosida dan kejahatan terhadap kemanusiaan sebagaimana diatur UU 26/2000 — bersifat sistematis/meluas dan tidak mengenal daluwarsa.', relatedTerms: ['genosida', 'kejahatan kemanusiaan'], category: 'legal' },
      { term: 'Genosida', definition: 'Tindakan yang dilakukan dengan maksud menghancurkan seluruh atau sebagian kelompok nasional, etnis, ras, atau agama.', relatedTerms: ['pelanggaran HAM berat', 'Konvensi Genosida 1948'], category: 'legal' },
      { term: 'Kejahatan Terhadap Kemanusiaan', definition: 'Serangan yang meluas atau sistematis yang ditujukan secara langsung terhadap penduduk sipil, mencakup 11 tindakan spesifik dalam UU 26/2000.', relatedTerms: ['genosida', 'Pengadilan HAM'], category: 'legal' },
      { term: 'LPSK', definition: 'Lembaga Perlindungan Saksi dan Korban — memberikan perlindungan fisik, hukum, medis, dan kompensasi bagi saksi dan korban tindak pidana.', relatedTerms: ['kompensasi', 'restitusi'], category: 'institution' },
      { term: 'KKR', definition: 'Komisi Kebenaran dan Rekonsiliasi — mekanisme transitional justice untuk mengungkap kebenaran dan rekonsiliasi atas pelanggaran HAM masa lalu.', relatedTerms: ['transitional justice', 'amnesti'], category: 'mechanism' },
      { term: 'Transitional Justice', definition: 'Pendekatan holistik untuk menangani pelanggaran HAM masa lalu melalui kombinasi pengadilan, pencarian kebenaran, reparasi, dan reformasi institusional.', relatedTerms: ['KKR', 'reparasi'], category: 'concept' },
      { term: 'Penghilangan Paksa', definition: 'Penangkapan/penculikan oleh atau dengan persetujuan negara diikuti penolakan mengakui tindakan itu — diklasifikasikan sebagai kejahatan terhadap kemanusiaan.', relatedTerms: ['pelanggaran HAM berat', 'Konvensi Penghilangan Paksa'], category: 'legal' },
      { term: 'Kompensasi', definition: 'Pembayaran dari negara kepada korban pelanggaran HAM berat sebagai bentuk reparasi ketika pelaku tidak mampu membayar restitusi.', relatedTerms: ['restitusi', 'LPSK'], category: 'mechanism' },
      { term: 'Pengadilan HAM Ad Hoc', definition: 'Pengadilan HAM yang dibentuk khusus oleh Presiden atas usul DPR untuk mengadili pelanggaran HAM berat yang terjadi sebelum berlakunya UU 26/2000.', relatedTerms: ['Pengadilan HAM', 'UU 26/2000'], category: 'institution' },
      { term: 'Penyelidikan Pro-Justicia', definition: 'Penyelidikan yang hasilnya dapat digunakan sebagai dasar penuntutan di pengadilan — kewenangan eksklusif Komnas HAM untuk kasus pelanggaran HAM berat.', relatedTerms: ['Komnas HAM', 'penyidikan'], category: 'mechanism' },
      { term: 'Reparasi', definition: 'Pemulihan yang diberikan kepada korban pelanggaran HAM, mencakup kompensasi finansial, rehabilitasi, restitusi, dan jaminan non-repetisi.', relatedTerms: ['kompensasi', 'korban HAM'], category: 'concept' },
      { term: 'Non-Derogable Rights', definition: 'Hak-hak yang tidak boleh dikurangi bahkan dalam keadaan darurat, termasuk larangan penyiksaan, perbudakan, dan hak atas nyawa.', relatedTerms: ['derogasi', 'keadaan darurat'], category: 'legal' },
    ],

    essayGuide: {
      introduction: {
        title: 'Pembuka: Konteks Pelanggaran HAM',
        explanation: 'Buka dengan menggambarkan jenis pelanggaran HAM yang dibahas dan mekanisme yang relevan.',
        template: 'Kasus [deskripsi singkat dari soal] mencerminkan [jenis pelanggaran: biasa/berat] yang memerlukan respons melalui [mekanisme yang relevan]. Berdasarkan UU No. [nomor] Tahun [tahun], [kewajiban/kewenangan lembaga]. Esai ini menganalisis mekanisme penanganan yang tepat dan rekomendasi untuk [tujuan].',
        doList: ['Identifikasi jenis pelanggaran (biasa vs berat)', 'Sebutkan lembaga yang berwenang (Komnas HAM, LPSK, dll.)', 'Cantumkan dasar hukum yang relevan (UU 26/2000 dll.)'],
        dontList: ['Jangan mencampur alur penanganan HAM biasa dan HAM berat', 'Hindari pernyataan umum tanpa landasan hukum'],
      },
      body: {
        title: 'Isi: Analisis Mekanisme dan Alur Penanganan',
        explanation: 'Jelaskan alur penanganan tahap demi tahap, identifikasi hambatan, dan tunjukkan peran setiap lembaga.',
        template: 'Mekanisme penanganan [jenis pelanggaran] dimulai dari [langkah pertama: Komnas HAM/polisi]. Berdasarkan [dasar hukum], [lembaga] memiliki kewenangan [kewenangan spesifik]. Tantangan yang muncul adalah [hambatan konkret], yang terlihat dari [contoh kasus]. LPSK berperan dalam [fungsi spesifik], sementara mekanisme [KKR/reparasi] diperlukan untuk [tujuan].',
        doList: ['Jelaskan alur kronologis: penyelidikan → penyidikan → penuntutan', 'Bedakan kewenangan Komnas HAM, Polri, dan Jaksa Agung', 'Sertakan peran LPSK dalam perlindungan korban', 'Bahas tantangan impunitas secara spesifik'],
        dontList: ['Jangan skip tahapan dalam alur penanganan', 'Hindari mengabaikan aspek perlindungan korban'],
      },
      conclusion: {
        title: 'Penutup: Rekomendasi Perbaikan Mekanisme',
        explanation: 'Rekomendasikan perbaikan sistem yang konkret dan dapat diterapkan.',
        template: 'Untuk mengatasi [hambatan utama], diperlukan [rekomendasi 1] yang dapat [dampak konkret]. Selain itu, [rekomendasi 2] akan memperkuat [aspek perlindungan]. Pembentukan [mekanisme baru/reformasi] merupakan langkah krusial untuk memastikan pertanggungjawaban dan pemulihan korban.',
        doList: ['Rekomendasikan reformasi mekanisme yang spesifik', 'Sertakan rekomendasi untuk perlindungan korban dan saksi', 'Bahas urgensi penyelesaian kasus HAM masa lalu'],
        dontList: ['Jangan berikan kesimpulan yang hanya deskriptif', 'Hindari rekomendasi yang tidak dapat dioperasionalkan'],
      },
      sampleOutline: '1. Pendahuluan: Identifikasi jenis pelanggaran dan urgensi\n2. Klasifikasi: Membedakan pelanggaran HAM biasa vs berat\n3. Alur Penanganan: Penyelidikan Komnas HAM → Jaksa Agung → Pengadilan\n4. Peran LPSK: Perlindungan korban dan saksi\n5. Hambatan: Impunitas, bottleneck kelembagaan\n6. Rekomendasi: Reformasi mekanisme dan penuntasan kasus lama\n7. Kesimpulan',
      tips: [
        'Selalu bedakan "penyelidikan" (oleh Komnas HAM) dan "penyidikan" (oleh Jaksa Agung)',
        'Ingat bahwa genosida dan kejahatan kemanusiaan adalah dua kategori berbeda',
        'Sebutkan kasus nyata Indonesia sebagai ilustrasi (1965, Semanggi, dll.)',
        'Tunjukkan pemahaman tentang transitional justice sebagai pendekatan holistik',
      ],
      commonMistakes: [
        'Mengira Polri berwenang menyelidiki pelanggaran HAM berat (bukan — itu kewenangan Komnas HAM)',
        'Tidak membedakan kompensasi (dari negara) dan restitusi (dari pelaku)',
        'Mengabaikan peran LPSK dalam sistem perlindungan saksi dan korban',
        'Tidak menyebutkan tantangan bottleneck Komnas HAM–Jaksa Agung',
      ],
    },

    infographic: {
      title: 'Mekanisme Penanganan Pelanggaran HAM',
      centerTopic: 'Penanganan HAM',
      branches: [
        { label: 'Klasifikasi', items: ['HAM Biasa → Pidana Umum', 'HAM Berat → UU 26/2000', 'Genosida', 'Kejahatan Kemanusiaan'], color: 'teal-soft' },
        { label: 'Alur Penanganan', items: ['Penyelidikan Komnas HAM', 'Penyidikan Jaksa Agung', 'Penuntutan', 'Pengadilan HAM'], color: 'sage' },
        { label: 'Perlindungan', items: ['LPSK', 'Perlindungan Fisik', 'Bantuan Hukum', 'Kompensasi/Restitusi'], color: 'lavender' },
        { label: 'Transitional Justice', items: ['KKR', 'Reparasi', 'Pengungkapan Kebenaran', 'Rekonsiliasi'], color: 'rose-dust' },
        { label: 'Hambatan', items: ['Impunitas', 'Bottleneck Jaksa', 'Kasus Lama Belum Tuntas', 'Tekanan Politik'], color: 'sand' },
      ],
      connections: [
        'Pelanggaran HAM Berat → wajib diselidiki oleh → Komnas HAM',
        'Penyelidikan → diserahkan ke → Jaksa Agung untuk penyidikan',
        'Korban → dilindungi oleh → LPSK selama proses hukum',
      ],
    },
  },

  // ─── TOPIK 9: Pencegahan dan Penanganan KBG & KDRT ───────────────────────────
  {
    topicNumber: 9,
    topicName: 'Pencegahan dan Penanganan Kekerasan Berbasis Gender',
    topicTag: 'KBG & KDRT',
    isEnglish: false,
    relatedQuestionId: 9,
    overview:
      'Topik ini membahas kekerasan berbasis gender (KBG) dan kekerasan dalam rumah tangga (KDRT) dalam perspektif HAM. Mencakup definisi dan bentuk kekerasan, kerangka hukum (UU 23/2004 dan UU 12/2022 TPKS), lembaga layanan korban, serta strategi pencegahan dan penanganan.',

    textContent: [
      {
        id: 't9-s1',
        order: 1,
        title: 'Definisi dan Bentuk Kekerasan Berbasis Gender',
        content:
          'Kekerasan Berbasis Gender (KBG) adalah kekerasan yang ditujukan kepada seseorang berdasarkan gender atau seks mereka, atau yang berdampak tidak proporsional pada kelompok gender tertentu. KBG merupakan pelanggaran HAM karena mengingkari martabat, keamanan, dan hak hidup bebas dari kekerasan yang dimiliki setiap orang.\n\nBentuk KBG meliputi: (1) kekerasan fisik — pemukulan, pembakaran, mutilasi; (2) kekerasan seksual — perkosaan, pelecehan seksual, eksploitasi seksual; (3) kekerasan psikologis/emosional — ancaman, penghinaan, isolasi sosial; (4) kekerasan ekonomi — penelantaran, pengambilalihan harta; (5) kekerasan berbasis teknologi — revenge porn, cyberstalking, doxing.\n\nKDRT (Kekerasan Dalam Rumah Tangga) adalah bentuk KBG yang terjadi dalam lingkup domestik, dilakukan oleh anggota keluarga terhadap anggota keluarga lainnya. Data Catatan Tahunan (Catahu) Komnas Perempuan 2024 menunjukkan KDRT tetap menjadi bentuk kekerasan tertinggi yang dilaporkan, dengan perempuan sebagai korban terbesar.',
        keyPoints: [
          'KBG adalah kekerasan berbasis gender atau seks, berdampak tidak proporsional',
          'Lima bentuk KBG: fisik, seksual, psikologis, ekonomi, berbasis teknologi',
          'KDRT adalah KBG dalam lingkup domestik',
          'Data Catahu Komnas Perempuan: KDRT tetap kasus terbanyak dilaporkan',
        ],
      },
      {
        id: 't9-s2',
        order: 2,
        title: 'Kerangka Hukum: UU PKDRT dan UU TPKS',
        content:
          'UU No. 23 Tahun 2004 tentang Penghapusan Kekerasan Dalam Rumah Tangga (UU PKDRT) merupakan terobosan hukum yang mengkriminalisasi kekerasan dalam lingkup domestik. Sebelum UU ini, KDRT dianggap "urusan privat" yang tidak dapat diintervensi negara. UU PKDRT mendefinisikan empat bentuk KDRT: kekerasan fisik, psikis, seksual, dan penelantaran rumah tangga.\n\nUU No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (UU TPKS) merupakan tonggak legislasi baru yang lebih komprehensif. UU ini mengatur 9 jenis tindak pidana kekerasan seksual, termasuk pelecehan seksual non-fisik (pertama kali dikriminalisasi), kekerasan seksual berbasis elektronik (KSBE), dan pemaksaan kontrasepsi.\n\nUU TPKS juga memperkenalkan sistem peradilan yang berperspektif korban: hak korban atas informasi, pendampingan, perlindungan dari pertanyaan yang merendahkan martabat (rape shield), dan hak atas restitusi. UU ini melarang mediasi untuk kasus kekerasan seksual dan menempatkan pembuktian yang berimbang.',
        keyPoints: [
          'UU 23/2004 mengkriminalisasi KDRT dan membuka intervensi negara di ranah domestik',
          'UU TPKS 12/2022 mengatur 9 jenis TKPS termasuk KSBE dan pelecehan non-fisik',
          'Sistem peradilan berperspektif korban: hak informasi, pendampingan, rape shield',
          'UU TPKS melarang mediasi untuk kasus kekerasan seksual',
        ],
      },
      {
        id: 't9-s3',
        order: 3,
        title: 'Lembaga Layanan Korban KBG',
        content:
          'Sistem layanan korban KBG di Indonesia terdiri dari berbagai lembaga dengan mandat berbeda. P2TP2A (Pusat Pelayanan Terpadu Pemberdayaan Perempuan dan Anak) adalah unit pelaksana daerah yang memberikan layanan terpadu: konseling, bantuan hukum, rumah aman, dan pendampingan. P2TP2A beroperasi di provinsi dan kabupaten/kota.\n\nUnit PPA (Perlindungan Perempuan dan Anak) Polri adalah unit khusus dalam kepolisian yang menangani kasus KBG dengan pendekatan sensitif gender. Petugas Unit PPA mendapat pelatihan khusus untuk menghindari reviktimisasi korban. LPSK memberikan perlindungan saksi dan korban, serta dapat mengajukan permohonan restitusi dari pelaku.\n\nRumah Perlindungan Sosial / Rumah Aman (shelter) menyediakan tempat berlindung sementara bagi korban KBG yang tidak aman kembali ke rumah. Komnas Perempuan berfungsi sebagai lembaga pemantau dan advokasi yang merilis Catahu tahunan sebagai sumber data kekerasan terhadap perempuan.',
        keyPoints: [
          'P2TP2A: layanan terpadu daerah (konseling, bantuan hukum, rumah aman)',
          'Unit PPA Polri: penanganan KBG dengan pendekatan sensitif gender',
          'LPSK: perlindungan dan pengajuan restitusi untuk korban KBG',
          'Komnas Perempuan: pemantauan dan publikasi data Catahu tahunan',
        ],
      },
      {
        id: 't9-s4',
        order: 4,
        title: 'Strategi Pencegahan dan Penanganan',
        content:
          'Penanganan KBG memerlukan pendekatan multi-sektor yang mencakup pencegahan primer, sekunder, dan tersier. Pencegahan primer bertujuan mencegah kekerasan sebelum terjadi melalui pendidikan gender di sekolah, kampanye publik, dan penguatan norma sosial yang menolak kekerasan. Program "Sekolah Ramah Anak" dan kurikulum anti-kekerasan merupakan contoh intervensi primer.\n\nPencegahan sekunder menargetkan individu yang berisiko tinggi: perempuan dalam hubungan yang rentan, korban yang baru mengalami kekerasan pertama kali. Layanan konseling, hotline darurat (Hotline Komnas Perempuan: 021-80157855), dan pengawasan berbasis komunitas termasuk dalam kategori ini.\n\nPencegahan tersier fokus pada korban pasca-kekerasan: pemulihan trauma, rehabilitasi psikologis, pemberdayaan ekonomi, dan pencegahan berulangnya kekerasan. Perspektif HAM dalam penanganan KBG menekankan bahwa korban harus diperlakukan sebagai subjek yang berdaya (agency), bukan objek yang pasif.',
        keyPoints: [
          'Tiga level pencegahan: primer (sebelum terjadi), sekunder (risiko tinggi), tersier (pasca-kekerasan)',
          'Pencegahan primer: pendidikan gender dan kampanye anti-kekerasan',
          'Perspektif HAM: korban sebagai subjek berdaya, bukan objek pasif',
          'Pemulihan komprehensif: psikologis, ekonomi, dan sosial',
        ],
      },
    ],

    flashCards: [
      { id: 't9-fc-1', front: 'Apa itu Kekerasan Berbasis Gender (KBG)?', back: 'Kekerasan yang ditujukan kepada seseorang karena gender/seks mereka, atau yang berdampak tidak proporsional pada kelompok gender tertentu — merupakan pelanggaran HAM.', category: 'definition' },
      { id: 't9-fc-2', front: 'UU apa yang mengatur KDRT?', back: 'UU No. 23 Tahun 2004 tentang Penghapusan Kekerasan Dalam Rumah Tangga (UU PKDRT), yang mengkriminalisasi 4 bentuk KDRT: fisik, psikis, seksual, penelantaran.', category: 'legal' },
      { id: 't9-fc-3', front: 'Apa kebaruan UU TPKS 2022?', back: 'Mengkriminalisasi 9 jenis TPKS termasuk pelecehan non-fisik dan KSBE untuk pertama kalinya; sistem peradilan berperspektif korban; melarang mediasi kasus kekerasan seksual.', category: 'legal' },
      { id: 't9-fc-4', front: 'Apa itu KSBE?', back: 'Kekerasan Seksual Berbasis Elektronik — kekerasan seksual yang dilakukan melalui media digital, seperti penyebaran foto/video intim tanpa konsensus (revenge porn) atau ancaman berbasis konten seksual.', category: 'definition' },
      { id: 't9-fc-5', front: 'Apa itu Catahu?', back: 'Catatan Tahunan (Catahu) Komnas Perempuan — laporan tahunan yang mendokumentasikan data kekerasan terhadap perempuan di Indonesia berdasarkan laporan yang masuk ke berbagai lembaga.', category: 'definition' },
      { id: 't9-fc-6', front: 'Apa itu P2TP2A?', back: 'Pusat Pelayanan Terpadu Pemberdayaan Perempuan dan Anak — unit layanan daerah yang memberikan konseling, bantuan hukum, rumah aman, dan pendampingan bagi korban KBG.', category: 'definition' },
      { id: 't9-fc-7', front: 'Apa itu rape shield?', back: 'Prinsip dalam hukum acara yang melindungi korban kekerasan seksual dari pertanyaan yang merendahkan martabat tentang riwayat seksual mereka selama persidangan.', category: 'concept' },
      { id: 't9-fc-8', front: 'Apa tiga level pencegahan KBG?', back: 'Primer: mencegah kekerasan sebelum terjadi. Sekunder: menargetkan individu berisiko tinggi. Tersier: pemulihan korban dan mencegah kekerasan berulang.', category: 'concept' },
      { id: 't9-fc-9', front: 'Apa itu reviktimisasi?', back: 'Proses di mana korban kekerasan mengalami trauma tambahan akibat respons sistem (polisi, pengadilan, keluarga) yang menyalahkan korban atau tidak sensitif gender.', category: 'concept' },
      { id: 't9-fc-10', front: 'Apa peran Unit PPA Polri?', back: 'Unit khusus kepolisian yang menangani kasus kekerasan terhadap perempuan dan anak dengan pendekatan sensitif gender, termasuk pemeriksaan korban dengan cara yang tidak menambah trauma.', category: 'definition' },
    ],

    glossary: [
      { term: 'KBG', definition: 'Kekerasan Berbasis Gender — kekerasan yang ditujukan karena gender/seks seseorang atau berdampak tidak proporsional pada kelompok gender tertentu.', relatedTerms: ['KDRT', 'TPKS'], category: 'concept' },
      { term: 'KDRT', definition: 'Kekerasan Dalam Rumah Tangga — bentuk KBG dalam lingkup domestik yang diatur UU 23/2004, mencakup kekerasan fisik, psikis, seksual, dan penelantaran.', relatedTerms: ['KBG', 'UU PKDRT'], category: 'legal' },
      { term: 'TPKS', definition: 'Tindak Pidana Kekerasan Seksual — 9 jenis kekerasan seksual yang diatur UU 12/2022, termasuk pelecehan non-fisik dan kekerasan seksual berbasis elektronik.', relatedTerms: ['UU TPKS', 'KSBE'], category: 'legal' },
      { term: 'KSBE', definition: 'Kekerasan Seksual Berbasis Elektronik — kekerasan seksual melalui media digital, dikriminalisasi pertama kali oleh UU TPKS 2022.', relatedTerms: ['TPKS', 'siber'], category: 'legal' },
      { term: 'Catahu', definition: 'Catatan Tahunan Komnas Perempuan — laporan tahunan tentang kekerasan terhadap perempuan sebagai sumber data utama untuk advokasi kebijakan.', relatedTerms: ['Komnas Perempuan', 'data KBG'], category: 'mechanism' },
      { term: 'P2TP2A', definition: 'Pusat Pelayanan Terpadu Pemberdayaan Perempuan dan Anak — unit layanan daerah terintegrasi untuk korban KBG.', relatedTerms: ['rumah aman', 'layanan korban'], category: 'institution' },
      { term: 'Reviktimisasi', definition: 'Trauma tambahan yang dialami korban akibat respons sistem yang tidak sensitif gender, seperti pertanyaan yang menyalahkan korban.', relatedTerms: ['rape shield', 'perspektif korban'], category: 'concept' },
      { term: 'Rape Shield', definition: 'Prinsip hukum acara yang melindungi korban kekerasan seksual dari pertanyaan tentang riwayat seksual mereka di persidangan.', relatedTerms: ['reviktimisasi', 'UU TPKS'], category: 'legal' },
      { term: 'Komnas Perempuan', definition: 'Komisi Nasional Anti Kekerasan terhadap Perempuan — lembaga negara independen pemantau dan advokasi penghapusan kekerasan terhadap perempuan.', relatedTerms: ['Catahu', 'KBG'], category: 'institution' },
      { term: 'Femisida', definition: 'Pembunuhan perempuan karena jenis kelaminnya — bentuk paling ekstrem KBG yang menjadi indikator tingkat kekerasan gender dalam suatu masyarakat.', relatedTerms: ['KBG', 'kekerasan fisik'], category: 'concept' },
      { term: 'Consent', definition: 'Persetujuan — dasar etis dan hukum dalam hubungan seksual; tidak adanya consent merupakan elemen kunci dalam mendefinisikan kekerasan seksual.', relatedTerms: ['TPKS', 'kekerasan seksual'], category: 'concept' },
      { term: 'Unit PPA', definition: 'Unit Perlindungan Perempuan dan Anak dalam Polri — unit khusus yang menangani kasus KBG dengan pendekatan sensitif gender.', relatedTerms: ['P2TP2A', 'penegakan hukum'], category: 'institution' },
    ],

    essayGuide: {
      introduction: {
        title: 'Pembuka: Konteks KBG sebagai Isu HAM',
        explanation: 'Framing KBG sebagai pelanggaran HAM yang memerlukan respons negara yang komprehensif.',
        template: 'Kekerasan berbasis gender terhadap [kelompok dari soal] merupakan pelanggaran hak dasar atas keamanan pribadi dan martabat manusia. Data [Catahu/lembaga relevan] menunjukkan [fakta statistik]. UU No. [nomor/tahun] memberikan mandat kepada negara untuk [kewajiban spesifik]. Esai ini menganalisis [aspek yang ditanya soal].',
        doList: ['Framing KBG sebagai pelanggaran HAM, bukan sekadar masalah kriminal', 'Gunakan data Catahu atau statistik untuk kontekstualisasi', 'Identifikasi kelompok korban yang relevan dengan kasus'],
        dontList: ['Jangan normalisasi atau meminimalisasi kekerasan dengan framing "urusan privat"', 'Hindari bahasa yang menyalahkan korban'],
      },
      body: {
        title: 'Isi: Analisis Hukum, Kelembagaan, dan Hambatan',
        explanation: 'Bahas regulasi yang berlaku, lembaga yang terlibat, dan tantangan dalam penanganan.',
        template: 'UU No. [nomor] Tahun [tahun] mewajibkan [kewajiban negara]. Dalam konteks kasus ini, [lembaga terkait] bertanggung jawab atas [fungsi spesifik]. Namun, implementasi terkendala oleh [hambatan: stigma sosial/kurangnya layanan/dll.]. Perspektif korban perlu diutamakan dengan [pendekatan yang mendukung korban].',
        doList: ['Sebutkan regulasi spesifik: UU PKDRT 23/2004 dan UU TPKS 12/2022', 'Jelaskan peran P2TP2A, Unit PPA, LPSK dalam penanganan', 'Bahas pentingnya menghindari reviktimisasi dalam proses hukum', 'Sertakan dimensi pencegahan, bukan hanya penanganan'],
        dontList: ['Jangan fokus hanya pada penuntutan — abaikan pemulihan korban', 'Hindari framing yang memposisikan perempuan sebagai objek yang lemah'],
      },
      conclusion: {
        title: 'Penutup: Rekomendasi Multi-Sektor',
        explanation: 'Tutup dengan rekomendasi yang mencakup aspek hukum, sosial, dan ekonomi.',
        template: 'Untuk memperkuat perlindungan [kelompok korban], diperlukan [rekomendasi 1: penguatan regulasi/implementasi]. Pencegahan jangka panjang memerlukan [rekomendasi 2: pendidikan/norma sosial]. Selain itu, [rekomendasi 3: penguatan layanan] akan memastikan korban mendapatkan pemulihan komprehensif.',
        doList: ['Rekomendasikan langkah multi-sektor: hukum, sosial, ekonomi', 'Sertakan rekomendasi untuk pencegahan primer', 'Tunjukkan kesinambungan antara penanganan dan pencegahan'],
        dontList: ['Jangan berikan rekomendasi yang hanya fokus pada hukuman pelaku', 'Hindari mengabaikan perspektif korban dalam rekomendasi'],
      },
      sampleOutline: '1. Pendahuluan: KBG sebagai pelanggaran HAM dan konteks statistik\n2. Kerangka Hukum: UU PKDRT dan UU TPKS\n3. Lembaga Layanan: P2TP2A, Unit PPA, LPSK, Komnas Perempuan\n4. Hambatan: Stigma, reviktimisasi, akses layanan di daerah\n5. Pencegahan: Strategi primer, sekunder, tersier\n6. Rekomendasi: Penguatan implementasi UU TPKS dan layanan korban\n7. Kesimpulan',
      tips: [
        'Selalu gunakan framing HAM, bukan hanya framing kriminal atau sosial',
        'Bedakan KDRT (UU 23/2004) dan TPKS (UU 12/2022) — cakupannya berbeda',
        'Sebutkan Catahu Komnas Perempuan sebagai sumber data otoritatif',
        'Tunjukkan pemahaman tentang trauma-informed approach dalam penanganan korban',
      ],
      commonMistakes: [
        'Mengira KDRT hanya kekerasan fisik (padahal juga psikis, seksual, penelantaran)',
        'Tidak menyebutkan UU TPKS 2022 padahal ini legislasi paling baru dan komprehensif',
        'Mengabaikan aspek KSBE (kekerasan seksual berbasis elektronik) yang semakin relevan',
        'Lupa menyebut prinsip rape shield dan larangan mediasi dalam UU TPKS',
      ],
    },

    infographic: {
      title: 'KBG & KDRT: Pencegahan dan Penanganan',
      centerTopic: 'KBG & KDRT',
      branches: [
        { label: 'Bentuk KBG', items: ['Fisik', 'Seksual', 'Psikologis', 'Ekonomi', 'Berbasis Elektronik'], color: 'rose-dust' },
        { label: 'Regulasi', items: ['UU PKDRT 23/2004', 'UU TPKS 12/2022', 'CEDAW (UU 7/1984)', 'RANHAM 2021–2025'], color: 'teal-soft' },
        { label: 'Lembaga Layanan', items: ['P2TP2A', 'Unit PPA Polri', 'LPSK', 'Komnas Perempuan', 'Rumah Aman'], color: 'sage' },
        { label: 'Pencegahan', items: ['Pendidikan Gender', 'Kampanye Publik', 'Hotline Darurat', 'Penguatan Norma'], color: 'lavender' },
        { label: 'Perlindungan Korban', items: ['Rape Shield', 'Larangan Mediasi', 'Restitusi', 'Trauma-Informed'], color: 'sand' },
      ],
      connections: [
        'KBG → harus ditangani melalui → Regulasi + Lembaga Layanan',
        'UU TPKS → menjamin → Perlindungan Korban di persidangan',
        'Pencegahan → mengurangi → Insiden KBG jangka panjang',
      ],
    },
  },

  // ─── TOPIK 10: Peran Negara dan Non-Negara Terhadap HAM ───────────────────────
  {
    topicNumber: 10,
    topicName: 'Peran, Kewajiban, dan Tanggung Jawab Negara dan Non Negara Terhadap HAM',
    topicTag: 'Negara & Non-Negara',
    isEnglish: false,
    relatedQuestionId: 10,
    overview:
      'Topik ini membahas kewajiban negara dan tanggung jawab aktor non-negara (korporasi, LSM, individu) dalam pemajuan dan perlindungan HAM. Mencakup tiga pilar Prinsip Panduan PBB (UNGP), due diligence HAM, kewajiban extraterritorial, dan standar Equator Principles.',

    textContent: [
      {
        id: 't10-s1',
        order: 1,
        title: 'Kewajiban Negara dalam Sistem HAM',
        content:
          'Dalam hukum HAM internasional, negara adalah primary duty-bearer — pemangku kewajiban utama untuk menghormati, melindungi, dan memenuhi HAM. Kewajiban ini bersifat tiga dimensi.\n\nKewajiban menghormati (respect) berarti negara tidak boleh secara langsung melanggar HAM warganya. Ini adalah kewajiban negatif: negara harus menahan diri dari tindakan yang mengintervensi hak-hak. Kewajiban melindungi (protect) berarti negara harus mencegah pihak ketiga (termasuk korporasi dan individu lain) melanggar HAM orang lain. Ini termasuk membuat regulasi, menegakkan hukum, dan memberikan akses pada pemulihan. Kewajiban memenuhi (fulfil) berarti negara harus mengambil langkah positif untuk mewujudkan HAM — membangun infrastruktur, menyediakan layanan publik, dan mengalokasikan anggaran untuk pemenuhan hak.\n\nKewajiban negara bersifat progresif untuk hak ekonomi, sosial, dan budaya (Pasal 2 ICESCR): negara wajib mengambil langkah maksimal sesuai sumber daya yang tersedia. Namun, untuk hak sipil dan politik, kewajiban bersifat segera (immediate): tidak ada alasan untuk menunda jaminan hak sipil.',
        keyPoints: [
          'Negara adalah primary duty-bearer: menghormati, melindungi, memenuhi HAM',
          'Kewajiban menghormati: jangan langsung melanggar',
          'Kewajiban melindungi: cegah pelanggaran oleh pihak ketiga',
          'Kewajiban memenuhi: langkah positif untuk mewujudkan HAM',
        ],
      },
      {
        id: 't10-s2',
        order: 2,
        title: 'Prinsip Panduan PBB tentang Bisnis dan HAM (UNGP)',
        content:
          'UN Guiding Principles on Business and Human Rights (UNGP) diadopsi Dewan HAM PBB pada 2011 dan merupakan standar global tentang tanggung jawab korporasi terhadap HAM. UNGP dibangun di atas tiga pilar utama.\n\nPilar I — Protect: Kewajiban negara untuk melindungi warga dari pelanggaran HAM oleh korporasi melalui regulasi dan penegakan hukum. Pilar II — Respect: Tanggung jawab korporasi untuk menghormati HAM, yaitu tidak melanggar dan mengatasi dampak negatif operasi bisnis mereka. Ini bukan kewajiban hukum melainkan tanggung jawab sosial yang berlaku untuk semua perusahaan di semua sektor.\n\nPilar III — Remedy: Akses pada pemulihan efektif bagi korban pelanggaran HAM terkait bisnis, melalui mekanisme yudisial maupun non-yudisial. UNGP mendorong perusahaan memiliki mekanisme pengaduan (grievance mechanism) yang aksesibel bagi masyarakat yang terdampak operasi bisnis mereka.',
        keyPoints: [
          'UNGP 2011: tiga pilar Protect (negara), Respect (korporasi), Remedy (pemulihan)',
          'Pilar II: tanggung jawab korporasi untuk tidak melanggar dan mengatasi dampak negatif',
          'Pilar III: akses pemulihan melalui mekanisme yudisial dan non-yudisial',
          'Grievance mechanism: wajib ada dan aksesibel bagi masyarakat terdampak',
        ],
      },
      {
        id: 't10-s3',
        order: 3,
        title: 'Due Diligence HAM (Human Rights Due Diligence)',
        content:
          'Human Rights Due Diligence (HRDD) adalah proses berkelanjutan yang harus dilakukan korporasi untuk mengidentifikasi, mencegah, mengurangi, dan mempertanggungjawabkan dampak HAM dari operasi bisnis mereka. UNGP menguraikan empat langkah HRDD.\n\nLangkah 1 — Identifikasi dan penilaian: Perusahaan harus mengidentifikasi dampak HAM aktual dan potensial dari operasi, rantai pasok, dan mitra bisnis. Langkah 2 — Integrasi: Temuan HRDD harus diintegrasikan ke dalam kebijakan dan praktik perusahaan di semua divisi. Langkah 3 — Pemantauan: Perusahaan harus memantau efektivitas respons mereka terhadap dampak HAM secara berkelanjutan. Langkah 4 — Komunikasi: Perusahaan harus mengomunikasikan secara transparan bagaimana mereka menangani dampak HAM kepada pemangku kepentingan yang relevan.\n\nHRDD bukan sekadar audit sekali-waktu; ini adalah proses dinamis yang harus menyesuaikan diri dengan perubahan konteks. Negara-negara seperti Prancis (Loi de Vigilance 2017), Jerman (Lieferkettensorgfaltspflichtengesetz 2021), dan UE (Corporate Sustainability Due Diligence Directive) telah mewajibkan HRDD secara hukum.',
        keyPoints: [
          'HRDD: identifikasi, integrasi, pemantauan, dan komunikasi dampak HAM',
          'Proses berkelanjutan, bukan audit sekali-waktu',
          'Cakupan: operasi langsung, rantai pasok, dan mitra bisnis',
          'Beberapa negara telah mewajibkan HRDD secara hukum (Prancis, Jerman, UE)',
        ],
      },
      {
        id: 't10-s4',
        order: 4,
        title: 'Peran Aktor Non-Negara Lainnya',
        content:
          'Selain korporasi, aktor non-negara lain juga memiliki peran penting dalam ekosistem HAM. LSM dan organisasi masyarakat sipil berperan dalam pemantauan, advokasi, pemberian layanan, dan dokumentasi pelanggaran HAM. Mereka adalah mitra kritis pemerintah, sekaligus watchdog yang mengawasi kinerja negara.\n\nLembaga internasional seperti UNHCR (pengungsi), UNICEF (anak), dan WHO (kesehatan) berperan dalam memberikan layanan kemanusiaan dan mendorong standar HAM di negara-negara anggota. Lembaga keuangan internasional (World Bank, IMF, ADB) memiliki kebijakan safeguard sosial dan lingkungan yang harus dipenuhi proyek yang mereka biayai.\n\nIndividu dan komunitas juga merupakan aktor yang berdaya dalam sistem HAM. Konsep community-based monitoring dan mekanisme pengaduan berbasis komunitas menempatkan warga sebagai aktor aktif, bukan sekadar penerima manfaat. Ekosistem HAM yang sehat membutuhkan partisipasi semua lapisan — negara, korporasi, masyarakat sipil, dan individu.',
        keyPoints: [
          'LSM: pemantauan, advokasi, layanan, dan dokumentasi HAM',
          'Lembaga internasional: standar dan layanan kemanusiaan',
          'Lembaga keuangan: safeguard sosial dalam proyek pembangunan',
          'Individu dan komunitas: aktor aktif dalam sistem HAM',
        ],
      },
    ],

    flashCards: [
      { id: 't10-fc-1', front: 'Apa tiga kewajiban negara dalam HAM?', back: 'Menghormati (respect): tidak langsung melanggar. Melindungi (protect): cegah pelanggaran oleh pihak ketiga. Memenuhi (fulfil): langkah positif untuk mewujudkan HAM.', category: 'concept' },
      { id: 't10-fc-2', front: 'Apa itu UNGP?', back: 'UN Guiding Principles on Business and Human Rights — standar PBB 2011 tentang tanggung jawab korporasi terhadap HAM, dibangun atas tiga pilar: Protect, Respect, Remedy.', category: 'concept' },
      { id: 't10-fc-3', front: 'Apa tiga pilar UNGP?', back: 'Pilar I Protect: kewajiban negara. Pilar II Respect: tanggung jawab korporasi. Pilar III Remedy: akses pemulihan bagi korban.', category: 'concept' },
      { id: 't10-fc-4', front: 'Apa itu Human Rights Due Diligence (HRDD)?', back: 'Proses berkelanjutan korporasi untuk mengidentifikasi, mencegah, mengurangi, dan mempertanggungjawabkan dampak HAM dari operasi bisnis termasuk rantai pasok.', category: 'definition' },
      { id: 't10-fc-5', front: 'Apa empat langkah HRDD?', back: '1. Identifikasi dan penilaian dampak. 2. Integrasi ke kebijakan perusahaan. 3. Pemantauan efektivitas. 4. Komunikasi transparan kepada pemangku kepentingan.', category: 'concept' },
      { id: 't10-fc-6', front: 'Apa itu kewajiban extraterritorial?', back: 'Kewajiban negara untuk memastikan korporasi yang berdomisili di wilayahnya tidak melanggar HAM di negara lain tempat korporasi tersebut beroperasi.', category: 'legal' },
      { id: 't10-fc-7', front: 'Apa itu grievance mechanism dalam konteks bisnis?', back: 'Mekanisme pengaduan yang disediakan perusahaan bagi masyarakat yang terdampak operasi bisnis mereka — harus aksesibel, transparan, dan mampu memberikan pemulihan.', category: 'definition' },
      { id: 't10-fc-8', front: 'Apa perbedaan kewajiban progresif dan segera dalam HAM?', back: 'Kewajiban progresif (hak ekosob ICESCR): dilaksanakan bertahap sesuai sumber daya. Kewajiban segera (hak sipol ICCPR): harus dilaksanakan sekarang tanpa penundaan.', category: 'concept' },
      { id: 't10-fc-9', front: 'Apa peran LSM dalam ekosistem HAM?', back: 'Pemantauan dan dokumentasi pelanggaran, advokasi kebijakan, pemberian layanan langsung kepada korban, dan fungsi watchdog terhadap kinerja negara dan korporasi.', category: 'concept' },
      { id: 't10-fc-10', front: 'Siapa yang dimaksud primary duty-bearer dalam HAM?', back: 'Negara — sebagai pihak yang menandatangani perjanjian HAM internasional dan memiliki kewajiban utama untuk menghormati, melindungi, dan memenuhi HAM warganya.', category: 'definition' },
    ],

    glossary: [
      { term: 'UNGP', definition: 'UN Guiding Principles on Business and Human Rights — kerangka global 2011 tentang tanggung jawab korporasi terhadap HAM dengan tiga pilar.', relatedTerms: ['Protect-Respect-Remedy', 'HRDD'], category: 'concept' },
      { term: 'HRDD', definition: 'Human Rights Due Diligence — proses berkelanjutan identifikasi, pencegahan, pengurangan, dan pertanggungjawaban dampak HAM dari operasi bisnis.', relatedTerms: ['UNGP', 'Pilar II'], category: 'mechanism' },
      { term: 'Primary Duty-Bearer', definition: 'Pemangku kewajiban utama dalam sistem HAM — yaitu negara, yang berkewajiban menghormati, melindungi, dan memenuhi HAM.', relatedTerms: ['kewajiban negara', 'hukum HAM internasional'], category: 'concept' },
      { term: 'Extraterritorial Obligations', definition: 'Kewajiban negara untuk memastikan korporasi berdomisili di wilayahnya tidak melanggar HAM di negara lain tempat mereka beroperasi.', relatedTerms: ['UNGP', 'rantai pasok global'], category: 'legal' },
      { term: 'Grievance Mechanism', definition: 'Mekanisme pengaduan perusahaan bagi masyarakat terdampak — harus aksesibel, transparan, dan mampu memberikan pemulihan.', relatedTerms: ['Pilar III', 'pemulihan'], category: 'mechanism' },
      { term: 'Rantai Pasok', definition: 'Supply chain — jaringan pemasok, produsen, dan distributor yang terlibat dalam produksi suatu barang/jasa; HRDD harus mencakup seluruh rantai pasok.', relatedTerms: ['HRDD', 'korporasi transnasional'], category: 'concept' },
      { term: 'Kewajiban Progresif', definition: 'Kewajiban negara untuk memenuhi hak ekosob secara bertahap menggunakan sumber daya maksimal yang tersedia (Pasal 2 ICESCR).', relatedTerms: ['ICESCR', 'hak ekosob'], category: 'legal' },
      { term: 'Watchdog', definition: 'Fungsi pemantau independen — biasanya dilakukan LSM atau media — yang mengawasi dan mendokumentasikan kinerja negara dan korporasi dalam implementasi HAM.', relatedTerms: ['LSM', 'masyarakat sipil'], category: 'concept' },
      { term: 'Safeguard Sosial', definition: 'Kebijakan lembaga keuangan internasional yang mewajibkan proyek yang mereka biayai memenuhi standar sosial dan lingkungan tertentu untuk mencegah dampak negatif.', relatedTerms: ['World Bank', 'HRDD'], category: 'mechanism' },
      { term: 'Protect-Respect-Remedy', definition: 'Tiga pilar UNGP: negara melindungi, korporasi menghormati, dan tersedia pemulihan bagi korban — kerangka komprehensif bisnis dan HAM.', relatedTerms: ['UNGP', 'kewajiban negara'], category: 'concept' },
      { term: 'Masyarakat Adat', definition: 'Indigenous peoples — kelompok dengan sejarah, budaya, dan teritorial khas yang mendahului negara modern; memiliki hak kolektif atas tanah dan sumber daya.', relatedTerms: ['UNDRIP', 'FPIC'], category: 'concept' },
      { term: 'FPIC', definition: 'Free, Prior and Informed Consent — hak masyarakat adat untuk memberikan atau menolak persetujuan atas proyek yang mempengaruhi wilayah atau kehidupan mereka.', relatedTerms: ['masyarakat adat', 'UNDRIP'], category: 'legal' },
    ],

    essayGuide: {
      introduction: {
        title: 'Pembuka: Ekosistem Aktor HAM',
        explanation: 'Buka dengan menggambarkan kompleksitas ekosistem HAM yang melibatkan negara dan non-negara.',
        template: 'Pemajuan dan perlindungan HAM tidak dapat hanya menjadi tanggung jawab negara semata. Dalam konteks [isu dari soal], aktor [korporasi/LSM/individu] memiliki peran krusial yang diatur oleh [UNGP/regulasi yang relevan]. Esai ini menganalisis [kewajiban/tanggung jawab spesifik yang ditanya].',
        doList: ['Identifikasi semua aktor yang relevan dengan kasus', 'Bedakan kewajiban negara (legal binding) dari tanggung jawab korporasi (non-binding tapi normatif)', 'Gunakan kerangka UNGP Protect-Respect-Remedy sebagai analisis'],
        dontList: ['Jangan abaikan perbedaan antara kewajiban hukum dan tanggung jawab moral', 'Hindari menyamakan posisi negara dan korporasi dalam hukum HAM'],
      },
      body: {
        title: 'Isi: Analisis Kewajiban per Aktor',
        explanation: 'Analisis kewajiban/tanggung jawab setiap aktor dalam kasus secara terstruktur.',
        template: 'Dari perspektif negara, kewajiban [menghormati/melindungi/memenuhi] mengharuskan [tindakan konkret] berdasarkan [dasar hukum]. Korporasi [nama/jenis] bertanggung jawab untuk [HRDD spesifik] sesuai Pilar II UNGP. Hambatan dalam [aspek tertentu] mencakup [tantangan]. Mekanisme pemulihan yang tersedia meliputi [Pilar III].',
        doList: ['Analisis kewajiban negara dengan tiga dimensi respect-protect-fulfil', 'Jelaskan tanggung jawab korporasi dengan HRDD empat langkah', 'Bahas mekanisme pemulihan (yudisial dan non-yudisial)', 'Sertakan peran masyarakat sipil sebagai watchdog'],
        dontList: ['Jangan hanya menyebut kewajiban tanpa menjelaskan implementasinya', 'Hindari mengabaikan dimensi rantai pasok dalam analisis korporasi'],
      },
      conclusion: {
        title: 'Penutup: Rekomendasi Penguatan Ekosistem HAM',
        explanation: 'Rekomendasikan langkah untuk memperkuat tanggung jawab setiap aktor.',
        template: 'Untuk memperkuat ekosistem HAM dalam konteks [isu], negara perlu [rekomendasi regulasi HRDD]. Korporasi harus [implementasi HRDD spesifik]. Masyarakat sipil dapat berperan melalui [mekanisme pemantauan]. Kombinasi langkah ini akan menciptakan ekosistem pertanggungjawaban HAM yang efektif.',
        doList: ['Rekomendasikan regulasi HRDD wajib di Indonesia', 'Sertakan penguatan mekanisme grievance', 'Tunjukkan pentingnya transparansi pelaporan HAM korporasi'],
        dontList: ['Jangan rekomendasikan langkah yang tidak realistis secara kapasitas', 'Hindari rekomendasi yang mengabaikan salah satu pilar UNGP'],
      },
      sampleOutline: '1. Pendahuluan: Ekosistem aktor HAM dan relevansi kasus\n2. Kewajiban Negara: Tiga dimensi respect-protect-fulfil\n3. Tanggung Jawab Korporasi: UNGP dan HRDD\n4. Peran Aktor Non-Negara Lain: LSM, individu, komunitas\n5. Hambatan: Kesenjangan regulasi, akses pemulihan\n6. Rekomendasi: Penguatan regulasi dan mekanisme akuntabilitas\n7. Kesimpulan',
      tips: [
        'Hafal tiga pilar UNGP: Protect (negara), Respect (korporasi), Remedy (pemulihan)',
        'Bedakan kewajiban hukum negara vs tanggung jawab normatif korporasi',
        'Gunakan contoh nyata seperti kasus tambang Wadas atau proyek infrastruktur',
        'Tunjukkan pemahaman tentang HRDD sebagai proses, bukan checklist',
      ],
      commonMistakes: [
        'Mengira UNGP adalah instrumen hukum yang mengikat korporasi (UNGP bersifat soft law)',
        'Tidak membedakan tiga dimensi kewajiban negara (respect vs protect vs fulfil)',
        'Mengabaikan dimensi rantai pasok dalam analisis tanggung jawab korporasi',
        'Tidak menyebutkan akses pemulihan (Pilar III) yang merupakan pilar penting UNGP',
      ],
    },

    infographic: {
      title: 'Negara dan Non-Negara dalam HAM',
      centerTopic: 'Ekosistem HAM',
      branches: [
        { label: 'Kewajiban Negara', items: ['Menghormati (Respect)', 'Melindungi (Protect)', 'Memenuhi (Fulfil)', 'Primary Duty-Bearer'], color: 'teal-soft' },
        { label: 'UNGP — 3 Pilar', items: ['Pilar I: Protect (Negara)', 'Pilar II: Respect (Korporasi)', 'Pilar III: Remedy (Pemulihan)', 'Diadopsi 2011'], color: 'sage' },
        { label: 'HRDD', items: ['Identifikasi Dampak', 'Integrasi Kebijakan', 'Pemantauan', 'Komunikasi Transparan'], color: 'lavender' },
        { label: 'Aktor Non-Negara', items: ['Korporasi', 'LSM/OMS', 'Lembaga Internasional', 'Komunitas'], color: 'rose-dust' },
        { label: 'Pemulihan', items: ['Mekanisme Yudisial', 'Mekanisme Non-Yudisial', 'Grievance Mechanism', 'FPIC'], color: 'sand' },
      ],
      connections: [
        'Negara → berkewajiban mengatur → Korporasi melalui regulasi',
        'Korporasi → wajib melaksanakan → HRDD dalam operasi bisnis',
        'Korban → berhak atas → Pemulihan melalui tiga jalur',
      ],
    },
  },

  // ─── TOPIK 11: HAM Berbahasa Inggris ─────────────────────────────────────────
  {
    topicNumber: 11,
    topicName: 'HAM Berbahasa Inggris',
    topicTag: 'English HAM',
    isEnglish: true,
    relatedQuestionId: 11,
    overview:
      'This topic covers advanced human rights concepts in English, including jus cogens norms, erga omnes obligations, the international human rights system, human rights defenders, and treaty monitoring bodies. All content is in English to develop professional language skills for international HR work.',

    textContent: [
      {
        id: 't11-s1',
        order: 1,
        title: 'Peremptory Norms: Jus Cogens and Erga Omnes',
        content:
          'In international law, jus cogens (also called peremptory norms) are fundamental principles from which no derogation is permitted, regardless of state consent. They represent the highest category of international norms and cannot be overridden by treaty or custom. Examples include the prohibition of genocide, torture, slavery, and crimes against humanity.\n\nErga omnes obligations are duties owed by states to the international community as a whole. Unlike bilateral treaty obligations, erga omnes obligations can be enforced by any state, not just those directly injured. The International Court of Justice first articulated this concept in the Barcelona Traction case (1970), recognizing that some obligations concern all states due to their importance to humanity.\n\nThe distinction is critical: jus cogens concerns the status of a norm (it cannot be derogated), while erga omnes concerns who can enforce it (any state). Both concepts reflect the idea that some human rights are so fundamental that they transcend ordinary state sovereignty and create obligations to the entire international community.',
        keyPoints: [
          'Jus cogens: peremptory norms from which no derogation is permitted',
          'Examples: prohibition of genocide, torture, slavery, crimes against humanity',
          'Erga omnes: obligations owed to the international community as a whole',
          'Barcelona Traction case (1970) first articulated erga omnes doctrine',
        ],
      },
      {
        id: 't11-s2',
        order: 2,
        title: 'The International Human Rights Treaty System',
        content:
          'The international human rights system consists of nine core treaties, each monitored by a treaty body (committee of independent experts). The major treaties include: the International Covenant on Civil and Political Rights (ICCPR), monitored by the Human Rights Committee; the International Covenant on Economic, Social and Cultural Rights (ICESCR), monitored by the Committee on Economic, Social and Cultural Rights; and the Convention Against Torture (CAT), monitored by the Committee Against Torture.\n\nTreaty bodies perform several functions: reviewing state party reports submitted periodically, issuing general comments that interpret treaty provisions, and — where states have accepted the individual complaint procedure — examining individual communications. Optional protocols to the main treaties often introduce these individual complaint mechanisms.\n\nThe Universal Periodic Review (UPR) is a separate mechanism under the UN Human Rights Council (not a treaty body) where all 193 UN member states are reviewed every 4-5 years. Unlike treaty body reviews, UPR covers all human rights obligations regardless of which treaties a state has ratified.',
        keyPoints: [
          'Nine core HR treaties, each monitored by an independent expert committee (treaty body)',
          'Treaty bodies: review state reports, issue general comments, examine individual complaints',
          'Optional protocols often add individual complaint mechanisms',
          'UPR: all 193 states reviewed every 4-5 years by the Human Rights Council',
        ],
      },
      {
        id: 't11-s3',
        order: 3,
        title: 'Human Rights Defenders',
        content:
          'Human rights defenders (HRDs) are individuals, groups, or organizations working to promote and protect human rights. The UN Declaration on Human Rights Defenders (1998) recognizes their right to: individually and collectively promote and strive for the protection of human rights; form, join, and participate in NGOs; seek, obtain, receive, and hold information about human rights; submit criticism of governments and official policies; and be effectively protected by national law against unlawful interference.\n\nHRDs face significant risks: surveillance, arbitrary detention, harassment, forced disappearance, and in extreme cases, extrajudicial killing. The UN Special Rapporteur on the Situation of Human Rights Defenders monitors these threats globally and issues country-specific reports.\n\nIndonesia has seen numerous cases of HRD criminalization using broadly worded laws such as Article 27 and 28 of the Electronic Information and Transactions Law (ITE Law), defamation provisions, and treason charges. International standards require states to create a safe and enabling environment for HRDs.',
        keyPoints: [
          'HRDs are protected by the UN Declaration on Human Rights Defenders (1998)',
          'Rights include: promote HR, form NGOs, access information, criticize government policies',
          'Risks: surveillance, arbitrary detention, forced disappearance, extrajudicial killing',
          'UN Special Rapporteur on HRDs monitors global threats and issues reports',
        ],
      },
      {
        id: 't11-s4',
        order: 4,
        title: 'Derogation, Limitation, and Non-Derogable Rights',
        content:
          'States may limit or derogate from certain rights under specific conditions. Limitation clauses appear within the treaty text itself: for example, the right to freedom of expression (ICCPR Art. 19) may be restricted for purposes such as national security, public order, or the rights of others — but only if restrictions are provided by law and necessary in a democratic society.\n\nDerogation is a more drastic measure: states may temporarily suspend certain rights during a declared public emergency that threatens the life of the nation (ICCPR Art. 4). However, derogation must be strictly necessary, proportionate, and non-discriminatory. States must notify the UN Secretary-General of the derogation and its scope.\n\nNon-derogable rights cannot be suspended even in states of emergency. Under ICCPR Article 4(2), these include: the right to life (Art. 6), prohibition of torture (Art. 7), prohibition of slavery (Art. 8.1–2), prohibition of imprisonment for debt (Art. 11), nullum crimen sine lege (Art. 15), right to recognition as a person before the law (Art. 16), and freedom of thought, conscience, and religion (Art. 18).',
        keyPoints: [
          'Limitation: permanent restrictions permissible if lawful, necessary, and proportionate',
          'Derogation: temporary suspension during genuine public emergency — must notify UN',
          'Non-derogable rights cannot be suspended even in emergencies (ICCPR Art. 4.2)',
          'Non-derogable examples: right to life, prohibition of torture and slavery',
        ],
      },
    ],

    flashCards: [
      { id: 't11-fc-1', front: 'What is jus cogens?', back: 'Peremptory norms of international law from which no derogation is permitted. Examples: prohibition of genocide, torture, slavery, and crimes against humanity.', category: 'legal' },
      { id: 't11-fc-2', front: 'What is the difference between jus cogens and erga omnes?', back: 'Jus cogens concerns the status of a norm (cannot be derogated). Erga omnes concerns who can enforce it (any state, not just directly injured parties).', category: 'concept' },
      { id: 't11-fc-3', front: 'What is a treaty body?', back: 'A committee of independent experts that monitors state compliance with a specific human rights treaty. Each of the nine core HR treaties has its own treaty body.', category: 'definition' },
      { id: 't11-fc-4', front: 'What is the Universal Periodic Review (UPR)?', back: 'A Human Rights Council mechanism reviewing all 193 UN member states every 4-5 years on their full HR obligations — not limited to ratified treaties.', category: 'definition' },
      { id: 't11-fc-5', front: 'Who are Human Rights Defenders (HRDs)?', back: 'Individuals, groups, or organizations working to promote and protect human rights, protected by the 1998 UN Declaration on Human Rights Defenders.', category: 'definition' },
      { id: 't11-fc-6', front: 'What is derogation in human rights law?', back: 'Temporary suspension of certain rights during a declared public emergency threatening the life of the nation — must be strictly necessary, proportionate, non-discriminatory, and notified to the UN.', category: 'legal' },
      { id: 't11-fc-7', front: 'Name three non-derogable rights under ICCPR Art. 4(2).', back: 'Right to life (Art. 6), prohibition of torture (Art. 7), prohibition of slavery (Art. 8.1–2). These cannot be suspended even during national emergencies.', category: 'legal' },
      { id: 't11-fc-8', front: 'What is the Barcelona Traction case (1970)?', back: 'ICJ case that first articulated the erga omnes doctrine — recognizing that certain obligations concern all states due to their fundamental importance to humanity.', category: 'case' },
      { id: 't11-fc-9', front: 'What is the ICCPR Optional Protocol?', back: 'An optional treaty that allows individuals to submit complaints to the UN Human Rights Committee after exhausting domestic remedies — Indonesia has not ratified it.', category: 'legal' },
      { id: 't11-fc-10', front: 'What is nullum crimen sine lege?', back: 'Latin for "no crime without law" — the principle that a person cannot be punished for an act that was not a criminal offense at the time it was committed. Non-derogable under ICCPR Art. 15.', category: 'legal' },
    ],

    glossary: [
      { term: 'Jus Cogens', definition: 'Peremptory norms of international law from which no derogation is permitted — the highest category of international legal norms.', relatedTerms: ['erga omnes', 'non-derogable'], category: 'legal' },
      { term: 'Erga Omnes', definition: 'Obligations owed by states to the international community as a whole — enforceable by any state, not just those directly injured.', relatedTerms: ['jus cogens', 'Barcelona Traction'], category: 'legal' },
      { term: 'Treaty Body', definition: 'Independent expert committee monitoring state compliance with a specific human rights treaty; issues general comments and reviews state reports.', relatedTerms: ['ICCPR', 'state report'], category: 'institution' },
      { term: 'UPR', definition: 'Universal Periodic Review — Human Rights Council mechanism reviewing all 193 UN member states on their full human rights obligations every 4–5 years.', relatedTerms: ['Human Rights Council', 'treaty body'], category: 'mechanism' },
      { term: 'Human Rights Defender', definition: 'Individual or group working peacefully to promote and protect human rights, protected by the 1998 UN Declaration on Human Rights Defenders.', relatedTerms: ['Special Rapporteur', 'criminalization'], category: 'concept' },
      { term: 'Derogation', definition: 'Temporary suspension of certain human rights during a genuine public emergency — must be strictly necessary, proportionate, and notified to the UN Secretary-General.', relatedTerms: ['non-derogable', 'ICCPR Art. 4'], category: 'legal' },
      { term: 'Non-Derogable Rights', definition: 'Rights that cannot be suspended even in states of emergency — including right to life, prohibition of torture, and prohibition of slavery under ICCPR Art. 4(2).', relatedTerms: ['derogation', 'jus cogens'], category: 'legal' },
      { term: 'Optional Protocol', definition: 'Supplementary treaty to a core HR convention that adds additional obligations or mechanisms, such as individual complaint procedures.', relatedTerms: ['treaty body', 'ICCPR-OP'], category: 'legal' },
      { term: 'Special Rapporteur', definition: 'Independent UN expert appointed by the Human Rights Council to monitor and report on specific thematic HR issues or country situations.', relatedTerms: ['Human Rights Council', 'HRD'], category: 'institution' },
      { term: 'Exhaustion of Domestic Remedies', definition: 'Requirement that individuals must first pursue all available legal remedies in their own country before bringing a case to an international body.', relatedTerms: ['individual complaint', 'treaty body'], category: 'legal' },
      { term: 'General Comment', definition: 'Authoritative interpretation of a treaty provision issued by a treaty body to clarify states\' obligations and guide implementation.', relatedTerms: ['treaty body', 'ICCPR'], category: 'mechanism' },
      { term: 'Enabling Environment', definition: 'Conditions in which civil society and human rights defenders can operate freely, safely, and effectively — a key international standard for state obligations.', relatedTerms: ['HRD', 'civil society'], category: 'concept' },
    ],

    essayGuide: {
      introduction: {
        title: 'Opening: International HR Framework',
        explanation: 'Open by situating the issue within the international human rights system.',
        template: 'The [issue from the question] raises fundamental questions about [core concept: state obligations/corporate accountability/HR defenders]. Under international human rights law, particularly [relevant treaty/principle], states are obligated to [specific obligation]. This essay analyzes [specific aspect asked], drawing on [legal framework] and [relevant case/precedent].',
        doList: ['Identify the relevant treaty or principle (ICCPR, UNGP, jus cogens)', 'State clearly whether the issue involves state or non-state actors', 'Use precise international law terminology from the outset'],
        dontList: ['Do not open with general statements without legal anchoring', 'Avoid mixing Indonesian and international law frameworks without transition'],
      },
      body: {
        title: 'Body: Legal Analysis and Application',
        explanation: 'Apply the relevant legal framework to the facts, identify gaps, and analyze implications.',
        template: 'Under [treaty/principle], [right/obligation] requires [specific content]. The situation described [summary from question] arguably [constitutes/violates/engages] [legal standard] because [reasoning]. The [treaty body/court/rapporteur] has interpreted [provision] to mean [authoritative interpretation]. However, [counterargument or complication] suggests [nuance].',
        doList: ['Apply the legal test (necessity, proportionality, legitimate aim) for any limitation', 'Reference treaty body general comments or relevant case law', 'Distinguish between limitation and derogation where applicable', 'Address both state and non-state actor responsibilities if relevant'],
        dontList: ['Do not simply describe the law — apply it to the facts', 'Avoid using Indonesian law terminology for what should be analyzed under international law'],
      },
      conclusion: {
        title: 'Conclusion: Recommendations for Compliance',
        explanation: 'Recommend concrete steps to bring the situation into compliance with international standards.',
        template: 'To ensure compliance with [treaty/standard], [state/actor] should [recommendation 1: legislative/policy measure]. Additionally, [recommendation 2: institutional/procedural step] would strengthen [specific protection]. Indonesia should [recommendation 3: ratification/reporting action] to demonstrate its commitment to international human rights obligations.',
        doList: ['Recommend ratification of relevant optional protocols if not yet ratified', 'Suggest engagement with relevant treaty body or special rapporteur', 'Address both immediate and structural reforms'],
        dontList: ['Do not close with vague calls for "more awareness"', 'Avoid recommendations that contradict sovereignty principles without explanation'],
      },
      sampleOutline: '1. Introduction: Situating the issue in international HR law\n2. Applicable Framework: Relevant treaties, norms, and principles\n3. Analysis: Applying the legal framework to the facts\n4. Jus Cogens/Erga Omnes dimension (if applicable)\n5. Treaty Body or Special Rapporteur perspective\n6. Recommendations for compliance\n7. Conclusion',
      tips: [
        'Master the jus cogens vs erga omnes distinction — a common exam topic',
        'Always identify which treaty body monitors the relevant covenant',
        'Reference specific articles (ICCPR Art. 4(2) for non-derogable) for precision',
        'Show awareness of Indonesia\'s ratification status for relevant treaties',
        'Use formal academic English register — avoid colloquial expressions',
      ],
      commonMistakes: [
        'Confusing jus cogens (status of norm) with erga omnes (who can enforce it)',
        'Forgetting that the UPR is NOT a treaty body review',
        'Ignoring the four conditions for valid derogation (emergency, necessity, proportionality, notification)',
        'Not distinguishing between "limitation" (permanent, proportionate) and "derogation" (emergency, temporary)',
      ],
    },

    infographic: {
      title: 'International Human Rights System',
      centerTopic: 'Int\'l HR Law',
      branches: [
        { label: 'Core Norms', items: ['Jus Cogens', 'Erga Omnes', 'Non-Derogable Rights', 'Prohibition of Torture'], color: 'teal-soft' },
        { label: 'Treaty System', items: ['9 Core Treaties', 'Treaty Bodies', 'State Reports', 'Individual Complaints'], color: 'sage' },
        { label: 'UN Mechanisms', items: ['UPR (all states)', 'Special Rapporteurs', 'Human Rights Council', 'OHCHR'], color: 'lavender' },
        { label: 'HR Defenders', items: ['1998 Declaration', 'Right to Organize', 'Access Information', 'UN Special Rapporteur'], color: 'rose-dust' },
        { label: 'Derogation', items: ['Emergency Condition', 'Strictly Necessary', 'Non-Discriminatory', 'Notify UNSG'], color: 'sand' },
      ],
      connections: [
        'Jus Cogens → cannot be derogated → even by treaty agreement',
        'Treaty Bodies → monitor → State compliance with core treaties',
        'UPR → reviews → All 193 UN member states periodically',
      ],
    },
  },

  // ─── TOPIK 12: Dukungan Manajemen ────────────────────────────────────────────
  {
    topicNumber: 12,
    topicName: 'Dukungan Manajemen',
    topicTag: 'Manajemen & Administrasi',
    isEnglish: false,
    relatedQuestionId: 12,
    overview:
      'Topik ini membahas aspek manajemen dan administrasi pemerintahan yang mendukung pelaksanaan HAM di Kementerian HAM. Mencakup perencanaan anggaran (RKAKL), akuntabilitas kinerja (LKIP/SAKIP), manajemen ASN (SKP), tata naskah dinas, dan zona integritas dalam konteks pemajuan HAM.',

    textContent: [
      {
        id: 't12-s1',
        order: 1,
        title: 'Sistem Perencanaan dan Penganggaran',
        content:
          'Pelaksanaan HAM memerlukan dukungan anggaran yang terencana dan akuntabel. Rencana Kerja dan Anggaran Kementerian/Lembaga (RKAKL) adalah dokumen perencanaan anggaran tahunan yang memuat rencana kegiatan, output, dan alokasi anggaran setiap satuan kerja. RKAKL disusun berdasarkan Rencana Kerja Pemerintah (RKP), Rencana Strategis (Renstra) kementerian, dan pagu anggaran yang ditetapkan Kementerian Keuangan.\n\nProses penganggaran dimulai dari Rencana Strategis (Renstra) 5 tahunan, diturunkan ke Rencana Kerja (Renja) tahunan, kemudian didetailkan dalam RKAKL yang memuat Kerangka Acuan Kerja (KAK) dan Rincian Anggaran Biaya (RAB) untuk setiap kegiatan. Dalam konteks Kementerian HAM, penganggaran harus selaras dengan RANHAM dan prioritas RPJMN terkait HAM.\n\nPeraturan Menteri Keuangan (PMK) No. 62 Tahun 2023 tentang Perencanaan Anggaran, Pelaksanaan Anggaran, serta Akuntansi dan Pelaporan Keuangan mengatur siklus anggaran yang harus dipatuhi seluruh kementerian/lembaga, termasuk Kementerian HAM.',
        keyPoints: [
          'RKAKL: dokumen perencanaan anggaran tahunan setiap satuan kerja',
          'Hierarki: Renstra 5 tahun → Renja tahunan → RKAKL dengan KAK dan RAB',
          'Penganggaran Kementerian HAM harus selaras dengan RANHAM dan RPJMN',
          'PMK 62/2023 mengatur siklus anggaran kementerian/lembaga',
        ],
      },
      {
        id: 't12-s2',
        order: 2,
        title: 'Akuntabilitas Kinerja: SAKIP dan LKIP',
        content:
          'Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP) adalah sistem untuk mengukur, menilai, dan mengelola kinerja pemerintah secara terintegrasi. SAKIP diatur dalam Perpres No. 29 Tahun 2014 dan Peraturan Menteri PAN-RB No. 88 Tahun 2021. Komponen SAKIP meliputi: perencanaan kinerja, pengukuran kinerja, pelaporan kinerja, evaluasi kinerja, dan capaian kinerja.\n\nLaporan Kinerja Instansi Pemerintah (LKIP, sebelumnya LAKIP) adalah dokumen pertanggungjawaban tahunan yang memuat realisasi capaian kinerja dibandingkan target yang ditetapkan. LKIP disusun setiap akhir tahun anggaran dan disampaikan kepada Kementerian PAN-RB. Nilai SAKIP mencerminkan kualitas tata kelola pemerintahan — kementerian dengan nilai SAKIP tinggi (A atau AA) dianggap memiliki manajemen kinerja yang baik.\n\nDalam konteks HAM, LKIP memuat capaian pelaksanaan RANHAM, jumlah penyuluhan HAM yang dilaksanakan, indeks pelayanan hukum, dan indikator-indikator HAM lainnya.',
        keyPoints: [
          'SAKIP: sistem akuntabilitas kinerja pemerintah yang terintegrasi',
          'Komponen SAKIP: perencanaan, pengukuran, pelaporan, evaluasi, capaian kinerja',
          'LKIP: laporan tahunan realisasi kinerja vs target yang ditetapkan',
          'Nilai SAKIP mencerminkan kualitas tata kelola dan manajemen kinerja',
        ],
      },
      {
        id: 't12-s3',
        order: 3,
        title: 'Manajemen ASN dan Sasaran Kinerja Pegawai (SKP)',
        content:
          'Aparatur Sipil Negara (ASN) yang berkualitas adalah prasyarat implementasi HAM yang efektif. UU No. 20 Tahun 2023 tentang ASN memperkenalkan paradigma baru manajemen ASN berbasis merit, kompetensi, dan kinerja. Sistem merit mengutamakan profesionalisme, bukan senioritas atau kedekatan personal.\n\nSasaran Kinerja Pegawai (SKP) adalah dokumen yang memuat rencana kinerja individu ASN selama satu tahun, terdiri dari unsur kualitas, kuantitas, waktu, dan biaya. SKP diintegrasikan dengan kinerja organisasi — setiap ASN harus berkontribusi pada pencapaian Indikator Kinerja Utama (IKU) unit kerjanya. Penilaian kinerja ASN mempengaruhi pengembangan karier, tunjangan kinerja, dan sanksi jika tidak memenuhi standar.\n\nDalam Kementerian HAM, SKP ASN harus mencerminkan kontribusi terhadap target RANHAM dan pelayanan HAM kepada masyarakat. Penguatan kapasitas SDM melalui pelatihan, bimtek (bimbingan teknis), dan pendidikan lanjutan merupakan investasi strategis untuk meningkatkan kualitas implementasi HAM.',
        keyPoints: [
          'UU ASN 20/2023: paradigma manajemen berbasis merit, kompetensi, dan kinerja',
          'SKP: rencana kinerja individu ASN yang terhubung dengan IKU organisasi',
          'Penilaian kinerja mempengaruhi karier, tunjangan, dan sanksi ASN',
          'SKP di Kementerian HAM harus mencerminkan kontribusi pada target RANHAM',
        ],
      },
      {
        id: 't12-s4',
        order: 4,
        title: 'Tata Naskah Dinas dan Zona Integritas',
        content:
          'Tata naskah dinas adalah pengaturan tentang pengelolaan dokumen dan korespondensi resmi di lingkungan kementerian/lembaga. PermenPAN-RB No. 6 Tahun 2011 (diperbarui Permendagri 54/2009 untuk daerah) mengatur format, penomoran, kode klasifikasi, dan prosedur distribusi surat dinas. Pengelolaan naskah dinas yang tertib merupakan fondasi akuntabilitas administrasi.\n\nZona Integritas (ZI) adalah predikat yang diberikan kepada unit kerja pemerintah yang berkomitmen mencegah korupsi dan meningkatkan kualitas pelayanan publik. Terdapat dua predikat: Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM). Proses pembangunan ZI mencakup enam komponen: manajemen perubahan, penataan tata laksana, penataan sistem SDM, penguatan akuntabilitas, penguatan pengawasan, dan peningkatan kualitas pelayanan publik.\n\nDalam konteks Kementerian HAM, zona integritas sangat relevan karena pelayanan HAM harus bebas dari korupsi, kolusi, dan nepotisme. Layanan permohonan status WNA, pengesahan badan hukum (sekarang di Kemenkumham), atau layanan yang bersinggungan dengan hak-hak warga harus transparan dan akuntabel.',
        keyPoints: [
          'Tata naskah dinas: pengaturan pengelolaan dokumen dan surat resmi kementerian',
          'Zona Integritas: predikat WBK/WBBM untuk unit kerja antikorupsi dan pelayanan prima',
          'Enam komponen pembangunan ZI termasuk manajemen perubahan dan akuntabilitas',
          'ZI relevan bagi Kementerian HAM karena layanan harus bebas KKN',
        ],
      },
    ],

    flashCards: [
      { id: 't12-fc-1', front: 'Apa itu RKAKL?', back: 'Rencana Kerja dan Anggaran Kementerian/Lembaga — dokumen perencanaan anggaran tahunan yang memuat rencana kegiatan, output, dan alokasi anggaran setiap satuan kerja.', category: 'definition' },
      { id: 't12-fc-2', front: 'Apa itu SAKIP?', back: 'Sistem Akuntabilitas Kinerja Instansi Pemerintah — sistem untuk mengukur, menilai, dan mengelola kinerja pemerintah, diatur Perpres No. 29 Tahun 2014.', category: 'definition' },
      { id: 't12-fc-3', front: 'Apa itu LKIP?', back: 'Laporan Kinerja Instansi Pemerintah — dokumen pertanggungjawaban tahunan yang memuat realisasi capaian kinerja dibandingkan target. Disampaikan ke Kementerian PAN-RB.', category: 'definition' },
      { id: 't12-fc-4', front: 'Apa itu SKP (dalam konteks ASN)?', back: 'Sasaran Kinerja Pegawai — dokumen rencana kinerja individu ASN selama satu tahun, mencakup kualitas, kuantitas, waktu, dan biaya, terhubung dengan IKU organisasi.', category: 'definition' },
      { id: 't12-fc-5', front: 'Apa dua predikat Zona Integritas?', back: 'WBK (Wilayah Bebas dari Korupsi) dan WBBM (Wilayah Birokrasi Bersih dan Melayani) — diberikan kepada unit kerja yang berkomitmen antikorupsi dan pelayanan prima.', category: 'concept' },
      { id: 't12-fc-6', front: 'Apa itu sistem merit dalam UU ASN?', back: 'Kebijakan manajemen ASN berbasis kompetensi, kualifikasi, dan kinerja secara adil dan wajar tanpa membedakan latar belakang politik, ras, agama, atau kondisi lainnya.', category: 'concept' },
      { id: 't12-fc-7', front: 'Berapa komponen pembangunan Zona Integritas?', back: 'Enam komponen: manajemen perubahan, penataan tata laksana, penataan sistem SDM, penguatan akuntabilitas, penguatan pengawasan, dan peningkatan kualitas pelayanan publik.', category: 'concept' },
      { id: 't12-fc-8', front: 'Apa hierarki perencanaan kementerian?', back: 'Renstra 5 tahun → Renja tahunan → RKAKL (dengan KAK dan RAB) → pelaksanaan kegiatan → pelaporan LKIP.', category: 'concept' },
      { id: 't12-fc-9', front: 'UU berapa yang mengatur ASN terbaru?', back: 'UU No. 20 Tahun 2023 tentang Aparatur Sipil Negara — memperkenalkan paradigma manajemen ASN berbasis merit, kompetensi, dan kinerja.', category: 'legal' },
      { id: 't12-fc-10', front: 'Apa itu IKU dalam konteks SAKIP?', back: 'Indikator Kinerja Utama — ukuran keberhasilan organisasi dalam mencapai tujuan strategisnya; menjadi acuan penilaian SKP setiap ASN.', category: 'definition' },
    ],

    glossary: [
      { term: 'RKAKL', definition: 'Rencana Kerja dan Anggaran Kementerian/Lembaga — dokumen perencanaan anggaran tahunan satuan kerja pemerintah.', relatedTerms: ['KAK', 'RAB', 'DIPA'], category: 'mechanism' },
      { term: 'SAKIP', definition: 'Sistem Akuntabilitas Kinerja Instansi Pemerintah — sistem perencanaan, pengukuran, pelaporan, dan evaluasi kinerja pemerintah secara terintegrasi.', relatedTerms: ['LKIP', 'IKU'], category: 'mechanism' },
      { term: 'LKIP', definition: 'Laporan Kinerja Instansi Pemerintah — laporan tahunan pertanggungjawaban realisasi kinerja terhadap target yang ditetapkan.', relatedTerms: ['SAKIP', 'akuntabilitas'], category: 'mechanism' },
      { term: 'SKP', definition: 'Sasaran Kinerja Pegawai — dokumen rencana kinerja individu ASN tahunan yang terhubung dengan IKU organisasi.', relatedTerms: ['ASN', 'IKU', 'tunjangan kinerja'], category: 'mechanism' },
      { term: 'Zona Integritas', definition: 'Program pembangunan unit kerja menuju WBK/WBBM melalui enam komponen reformasi birokrasi dan antikorupsi.', relatedTerms: ['WBK', 'WBBM', 'antikorupsi'], category: 'concept' },
      { term: 'WBK', definition: 'Wilayah Bebas dari Korupsi — predikat pertama Zona Integritas yang menunjukkan unit kerja berkomitmen mencegah korupsi.', relatedTerms: ['WBBM', 'Zona Integritas'], category: 'concept' },
      { term: 'WBBM', definition: 'Wilayah Birokrasi Bersih dan Melayani — predikat tertinggi Zona Integritas yang menunjukkan unit kerja bersih dari korupsi dan pelayanan prima.', relatedTerms: ['WBK', 'Zona Integritas'], category: 'concept' },
      { term: 'Renstra', definition: 'Rencana Strategis — dokumen perencanaan 5 tahunan kementerian/lembaga yang memuat visi, misi, tujuan, dan strategi pencapaian.', relatedTerms: ['RKAKL', 'RPJMN'], category: 'mechanism' },
      { term: 'IKU', definition: 'Indikator Kinerja Utama — ukuran keberhasilan organisasi dalam mencapai tujuan strategis; acuan dalam SAKIP dan SKP.', relatedTerms: ['SAKIP', 'SKP'], category: 'concept' },
      { term: 'Tata Naskah Dinas', definition: 'Sistem pengelolaan dokumen dan korespondensi resmi pemerintah — format, penomoran, kode klasifikasi, dan distribusi surat dinas.', relatedTerms: ['administrasi', 'kearsipan'], category: 'mechanism' },
      { term: 'Sistem Merit', definition: 'Prinsip manajemen ASN yang mengutamakan kompetensi, kualifikasi, dan kinerja tanpa diskriminasi dalam rekrutmen, promosi, dan pengembangan karier.', relatedTerms: ['ASN', 'UU ASN 20/2023'], category: 'concept' },
      { term: 'DIPA', definition: 'Daftar Isian Pelaksanaan Anggaran — dokumen pelaksanaan anggaran yang ditetapkan Menteri Keuangan sebagai dasar pengeluaran negara.', relatedTerms: ['RKAKL', 'anggaran'], category: 'mechanism' },
    ],

    essayGuide: {
      introduction: {
        title: 'Pembuka: Konteks Manajemen dan HAM',
        explanation: 'Hubungkan aspek manajemen/administrasi yang ditanya dengan tujuan pemajuan HAM.',
        template: 'Implementasi HAM yang efektif tidak hanya memerlukan regulasi yang kuat, tetapi juga sistem manajemen pemerintahan yang akuntabel dan berintegritas. Dalam konteks [isu dari soal], [aspek manajemen: SAKIP/SKP/Zona Integritas] berperan penting dalam [tujuan konkret]. Berdasarkan [regulasi yang relevan], [kewajiban/mekanisme spesifik].',
        doList: ['Hubungkan aspek teknis manajemen dengan tujuan HAM', 'Sebutkan regulasi spesifik (Perpres 29/2014, UU ASN 20/2023, dll.)', 'Tunjukkan pemahaman bahwa manajemen yang baik adalah enabler HAM'],
        dontList: ['Jangan bahas manajemen terlepas dari konteks pelayanan HAM', 'Hindari jargon teknis tanpa penjelasan singkat'],
      },
      body: {
        title: 'Isi: Analisis Sistem dan Implementasi',
        explanation: 'Analisis bagaimana sistem manajemen yang baik mendukung atau menghambat implementasi HAM.',
        template: 'Dalam sistem [SAKIP/RKAKL/SKP], [mekanisme konkret] memastikan [tujuan akuntabilitas]. Kaitannya dengan HAM terlihat dari [contoh konkret: pelaporan RANHAM dalam LKIP/target HAM dalam SKP]. Namun, tantangan [hambatan spesifik] berpotensi mengurangi efektivitas [aspek yang dianalisis]. Zona Integritas [WBK/WBBM] relevan karena [alasan terkait pelayanan HAM].',
        doList: ['Jelaskan mekanisme teknis secara tepat (bukan hanya nama singkatan)', 'Hubungkan IKU dengan capaian RANHAM atau program HAM spesifik', 'Bahas bagaimana integritas birokrasi berdampak pada kualitas layanan HAM', 'Gunakan contoh konkret dari konteks Kementerian HAM'],
        dontList: ['Jangan sekadar mendaftar singkatan tanpa substansi', 'Hindari mengabaikan dimensi antikorupsi dalam pelayanan publik'],
      },
      conclusion: {
        title: 'Penutup: Penguatan Sistem Manajemen HAM',
        explanation: 'Rekomendasikan perbaikan sistem manajemen untuk meningkatkan implementasi HAM.',
        template: 'Untuk memperkuat [aspek manajemen yang dibahas], Kementerian HAM perlu [rekomendasi 1: teknis]. Integrasi target HAM dalam [SKP/IKU/LKIP] akan memastikan [dampak konkret]. Pembangunan Zona Integritas yang konsisten akan [manfaat bagi layanan HAM]. Kombinasi manajemen yang akuntabel dan komitmen integritas adalah fondasi implementasi HAM yang berkelanjutan.',
        doList: ['Rekomendasikan integrasi target HAM dalam sistem kinerja', 'Sertakan rekomendasi peningkatan kapasitas SDM', 'Tunjukkan koneksi antara integritas birokrasi dan kepercayaan publik'],
        dontList: ['Jangan tutup esai dengan pernyataan teknis yang kering tanpa relevansi HAM', 'Hindari rekomendasi yang melampaui kewenangan Kementerian HAM'],
      },
      sampleOutline: '1. Pendahuluan: Manajemen sebagai enabler implementasi HAM\n2. Sistem Perencanaan: RKAKL dan integrasi dengan RANHAM\n3. Akuntabilitas Kinerja: SAKIP, LKIP, dan indikator HAM\n4. Manajemen SDM: SKP dan sistem merit ASN\n5. Integritas: Zona Integritas WBK/WBBM\n6. Rekomendasi: Penguatan sistem dan kapasitas\n7. Kesimpulan',
      tips: [
        'Selalu hubungkan teknis manajemen dengan tujuan HAM — jangan bahas keduanya terpisah',
        'Hafal hierarki perencanaan: Renstra → Renja → RKAKL → DIPA → LKIP',
        'Tunjukkan pemahaman bahwa SAKIP bukan sekadar pelaporan, tapi manajemen kinerja',
        'Zona Integritas relevan karena layanan HAM harus bebas dari KKN',
      ],
      commonMistakes: [
        'Menulis tentang manajemen tanpa menghubungkan dengan konteks HAM',
        'Menggunakan singkatan (RKAKL, SAKIP, SKP) tanpa menjelaskan kepanjangannya minimal sekali',
        'Mengabaikan aspek SDM/ASN dalam analisis manajemen HAM',
        'Tidak menyebutkan Zona Integritas padahal sangat relevan untuk kementerian pelayan publik',
      ],
    },

    infographic: {
      title: 'Dukungan Manajemen untuk Implementasi HAM',
      centerTopic: 'Manajemen HAM',
      branches: [
        { label: 'Perencanaan', items: ['Renstra 5 Tahun', 'RKAKL Tahunan', 'KAK & RAB', 'Integrasi RANHAM'], color: 'teal-soft' },
        { label: 'Akuntabilitas', items: ['SAKIP', 'LKIP Tahunan', 'IKU', 'Nilai SAKIP (A/AA)'], color: 'sage' },
        { label: 'Manajemen ASN', items: ['UU ASN 20/2023', 'SKP Individual', 'Sistem Merit', 'Tunjangan Kinerja'], color: 'lavender' },
        { label: 'Zona Integritas', items: ['WBK', 'WBBM', '6 Komponen ZI', 'Antikorupsi'], color: 'rose-dust' },
        { label: 'Administrasi', items: ['Tata Naskah Dinas', 'Kode Klasifikasi', 'DIPA', 'e-Government'], color: 'sand' },
      ],
      connections: [
        'Renstra → diturunkan ke → RKAKL sebagai dokumen anggaran tahunan',
        'SKP ASN → berkontribusi pada → IKU dan target RANHAM',
        'Zona Integritas → memastikan → Layanan HAM bebas KKN',
      ],
    },
  },
];
