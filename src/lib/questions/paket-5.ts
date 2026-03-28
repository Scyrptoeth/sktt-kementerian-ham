import { Question } from '../types';

export const paket5Questions: Question[] = [
  {
    id: 49,
    topicNumber: 8,
    topicName: 'Mekanisme Penanganan Dugaan Pelanggaran HAM',
    topicTag: 'Penegakan HAM',
    isEnglish: false,
    scenario: `Antara 2005 dan 2015, serangkaian warga negara asing — termasuk anggota "Bali Nine", sembilan warga negara Australia yang ditangkap membawa heroin di Bali pada 2005 — menghadapi hukuman mati di Indonesia atas kejahatan narkotika. Meskipun sebagian besar negara asal mereka mengajukan permintaan grasi dan menyatakan keberatan atas dasar HAM internasional, pemerintah Indonesia menolak dengan menegaskan kedaulatan dalam menetapkan kebijakan hukuman pidana. Dua pemimpin Bali Nine, Andrew Chan dan Myuran Sukumaran, dieksekusi pada April 2015 meski bukti rehabilitasi di penjara sangat kuat. Mereka mendirikan program seni dan program pemulihan di Lapas Kerobokan yang diakui otoritas penjara. Organisasi HAM internasional seperti Amnesty International dan Human Rights Watch mengkritik penggunaan hukuman mati untuk kejahatan narkotika sebagai tidak sesuai dengan standar HAM internasional.`,
    question: `Berdasarkan skenario di atas, analisis perdebatan HAM seputar penerapan hukuman mati untuk kejahatan narkotika di Indonesia. Evaluasi argumen tentang non-derogability hak hidup versus kedaulatan negara dalam menetapkan sanksi pidana, serta rekomendasikan kebijakan alternatif yang tetap tegas terhadap kejahatan narkotika namun sesuai standar HAM internasional.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'hak hidup',
        'non-derogable',
        'hukuman mati',
        'ICCPR Pasal 6',
        'most serious crimes',
        'narkotika',
        'kedaulatan',
        'rehabilitasi',
        'grasi',
        'Amnesty International',
        'moratorium',
        'hukuman alternatif',
        'proporsionalitas',
        'UN Special Rapporteur',
        'right to life',
        'abolisi',
        'hak atas peradilan adil',
      ],
      concepts: [
        'Non-derogability hak hidup sebagai norma jus cogens yang membatasi keleluasaan negara dalam menerapkan hukuman mati',
        'Interpretasi "most serious crimes" dalam ICCPR Pasal 6 yang secara konsensus terbatas pada kejahatan yang melibatkan pembunuhan langsung',
        'Kedaulatan negara dalam menetapkan kebijakan pidana versus kewajiban perjanjian internasional',
        'Bukti rehabilitasi sebagai faktor mitigasi yang relevan dalam penilaian proporsionalitas hukuman mati',
        'Tren global menuju abolisi atau moratorium hukuman mati sebagai perkembangan norma HAM internasional',
      ],
      legalBasis: [
        'ICCPR Pasal 6 — hak atas kehidupan dan pembatasan hukuman mati pada "most serious crimes"',
        'Second Optional Protocol ICCPR — abolisi hukuman mati (Indonesia belum meratifikasi)',
        'UN Commission on Human Rights Resolution 2005/59 — moratorium hukuman mati',
        'UU No. 35 Tahun 2009 tentang Narkotika',
        'KUHP Indonesia — regulasi grasi dan hukuman alternatif',
      ],
      analysis: [
        'ICCPR Pasal 6 mengizinkan hukuman mati hanya untuk "most serious crimes" — konsensus internasional mengecualikan kejahatan narkotika dari kategori ini',
        'Eksekusi Chan dan Sukumaran menunjukkan negara mengabaikan bukti rehabilitasi sebagai faktor mitigasi yang relevan',
        'Argumen kedaulatan tidak dapat mengesampingkan kewajiban perjanjian ICCPR yang telah diratifikasi Indonesia',
        'UN Special Rapporteur on extrajudicial executions secara konsisten menyatakan hukuman mati atas narkotika melanggar ICCPR',
        'Deterren effect hukuman mati tidak terbukti secara empiris lebih efektif dari hukuman penjara jangka panjang',
      ],
      recommendations: [
        'Moratorium hukuman mati segera untuk semua kejahatan narkotika sambil menunggu kajian komprehensif kebijakan',
        'Revisi UU Narkotika untuk mengganti hukuman mati dengan hukuman penjara seumur hidup atau 20-30 tahun maksimum',
        'Penguatan program rehabilitasi dan pemulihan bagi narapidana narkotika sebagai alternatif hukuman',
        'Ratifikasi Second Optional Protocol ICCPR sebagai komitmen menuju abolisi hukuman mati',
        'Reformasi mekanisme grasi agar mencerminkan standar HAM internasional dan mempertimbangkan bukti rehabilitasi',
      ],
      synonymMap: {
        'hukuman mati': ['pidana mati', 'eksekusi mati', 'death penalty', 'capital punishment'],
        'non-derogable': ['tidak dapat dikurangi', 'absolut', 'tidak dapat dicabut'],
        'moratorium': ['penundaan', 'penangguhan', 'jeda eksekusi'],
        'rehabilitasi': ['pemulihan', 'reintegrasi', 'pembinaan narapidana'],
        'abolisi': ['penghapusan hukuman mati', 'abolition'],
      },
    },
    bestAnswer: `Perdebatan seputar hukuman mati untuk kejahatan narkotika di Indonesia menyentuh tegangan fundamental antara kedaulatan negara dalam menetapkan kebijakan pidana dan kewajiban perjanjian HAM internasional.

ICCPR Pasal 6 — yang telah diratifikasi Indonesia melalui UU No. 12 Tahun 2005 — mengizinkan hukuman mati hanya untuk "the most serious crimes". Konsensus internasional yang dikembangkan oleh UN Human Rights Committee dan UN Special Rapporteur secara konsisten menyatakan bahwa "most serious crimes" merujuk pada kejahatan yang melibatkan pembunuhan yang disengaja. Kejahatan narkotika — meski serius — tidak termasuk dalam kategori ini karena tidak melibatkan pembunuhan langsung. Dengan demikian, penerapan hukuman mati untuk kejahatan narkotika bertentangan dengan kewajiban Indonesia di bawah ICCPR.

Kasus Andrew Chan dan Myuran Sukumaran memperkuat permasalahan ini. Bukti rehabilitasi yang kuat — program seni dan pemulihan yang mereka kembangkan di Lapas Kerobokan — adalah faktor mitigasi yang relevan dalam pertimbangan proporsionalitas hukuman mati. Diabaikannya bukti ini menunjukkan bahwa mekanisme grasi Indonesia tidak mempertimbangkan standar HAM internasional secara memadai.

Argumen kedaulatan negara memiliki batas yang jelas: ratifikasi ICCPR adalah pernyataan sukarela negara untuk terikat pada standar HAM internasional. Kedaulatan dalam kebijakan pidana tidak mengizinkan negara melanggar kewajiban perjanjian yang telah disepakati. Selain itu, efek jera hukuman mati tidak terbukti secara empiris lebih efektif dari hukuman penjara jangka panjang.

Tren global menuju moratorium dan abolisi hukuman mati mencerminkan perkembangan norma HAM internasional. Lebih dari 100 negara telah menghapus hukuman mati dalam hukum atau praktiknya.

Rekomendasi: (1) Moratorium segera terhadap eksekusi untuk kejahatan narkotika; (2) Revisi UU Narkotika mengganti hukuman mati dengan penjara seumur hidup; (3) Penguatan program rehabilitasi berbasis bukti sebagai inti respons terhadap kejahatan narkotika; (4) Reformasi mekanisme grasi agar mempertimbangkan bukti rehabilitasi; (5) Pertimbangan ratifikasi Second Optional Protocol ICCPR.`,
    explanation: `Soal ini menguji pemahaman tentang hak hidup sebagai hak non-derogable dan batasan "most serious crimes" dalam ICCPR Pasal 6. Poin kunci: (1) Konsensus interpretasi "most serious crimes" yang mengecualikan kejahatan narkotika; (2) Batas kedaulatan negara di bawah kewajiban perjanjian; (3) Relevansi bukti rehabilitasi dalam penilaian proporsionalitas; (4) Tren abolisi sebagai perkembangan norma HAM; (5) Rekomendasi kebijakan alternatif yang tegas namun HAM-kompatibol. Kasus Bali Nine dipilih karena memperlihatkan dimensi diplomatik sekaligus prinsipil dalam debat hukuman mati.`,
  },
  {
    id: 50,
    topicNumber: 8,
    topicName: 'Mekanisme Penanganan Dugaan Pelanggaran HAM',
    topicTag: 'Penegakan HAM',
    isEnglish: false,
    scenario: `Seorang warga di Kota Makassar mengajukan laporan kepada Ombudsman RI karena pelayanan Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) menolak menerbitkan Kartu Keluarga (KK) atas nama kepala keluarga perempuan yang berstatus janda dengan alasan "tidak ada dasar hukumnya". Penolakan ini menyebabkan anak-anak keluarga tersebut tidak dapat mendaftar sekolah negeri, tidak dapat menerima bantuan sosial, dan perempuan tersebut tidak dapat mengakses layanan kesehatan berbasis KK. Ombudsman RI menerima laporan ini dan melakukan pemeriksaan. Setelah investigasi, Ombudsman menerbitkan rekomendasi yang menyatakan bahwa Disdukcapil telah melakukan malaadministrasi karena penolakan tersebut tidak memiliki dasar hukum — peraturan perundang-undangan justru memungkinkan perempuan sebagai kepala keluarga. Namun, setelah 60 hari, Disdukcapil setempat belum juga melaksanakan rekomendasi Ombudsman.`,
    question: `Berdasarkan skenario di atas, analisis peran dan kewenangan Ombudsman RI sebagai mekanisme perlindungan HAM dalam konteks layanan publik. Jelaskan bagaimana konsep malaadministrasi berkaitan dengan pelanggaran HAM, dan evaluasi efektivitas Ombudsman mengingat rekomendasi yang tidak dilaksanakan. Rekomendasikan penguatan yang diperlukan untuk meningkatkan efektivitas Ombudsman.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'Ombudsman',
        'malaadministrasi',
        'layanan publik',
        'rekomendasi',
        'hak atas pelayanan',
        'diskriminasi',
        'akses keadilan',
        'akuntabilitas',
        'kepala keluarga perempuan',
        'non-diskriminasi',
        'administrative justice',
        'tindak lanjut',
        'UU Ombudsman',
        'hak dasar',
        'kewenangan',
      ],
      concepts: [
        'Malaadministrasi sebagai bentuk pelanggaran tidak langsung terhadap HAM melalui penghalangan akses layanan publik',
        'Ombudsman sebagai National Human Rights Institution (NHRI) quasi-judicial yang melengkapi sistem perlindungan HAM formal',
        'Rekomendasi Ombudsman sebagai instrumen akuntabilitas administratif yang mengikat secara moral dan hukum',
        'Diskriminasi layanan publik berbasis status gender (janda, kepala keluarga perempuan) sebagai pelanggaran prinsip non-diskriminasi',
        'Akses layanan publik sebagai prasyarat pemenuhan hak-hak dasar lainnya (pendidikan, kesehatan, perlindungan sosial)',
      ],
      legalBasis: [
        'UU No. 37 Tahun 2008 tentang Ombudsman Republik Indonesia',
        'UU No. 25 Tahun 2009 tentang Pelayanan Publik',
        'CEDAW Pasal 15-16 — kesetaraan dalam kehidupan sipil dan perkawinan',
        'Pasal 28H UUD 1945 — hak atas pelayanan dan jaminan sosial',
        'UU No. 24 Tahun 2013 tentang Administrasi Kependudukan',
      ],
      analysis: [
        'Penolakan KK atas dasar tidak valid adalah malaadministrasi yang secara langsung memutus akses pendidikan, kesehatan, dan sosial keluarga',
        'Diskriminasi terhadap kepala keluarga perempuan bertentangan dengan prinsip non-diskriminasi CEDAW dan UU Administrasi Kependudukan',
        'Tidak dilaksanakannya rekomendasi Ombudsman menunjukkan kelemahan mekanisme penegakan yang hanya bersifat soft power',
        'Kasus ini mencerminkan diskriminasi sistemik terhadap perempuan dalam akses administrasi kependudukan',
        'Ombudsman berfungsi sebagai "jembatan" antara warga dan aparatur negara, namun tanpa sanksi yang kuat, efektivitasnya terbatas',
      ],
      recommendations: [
        'Penguatan UU Ombudsman untuk memberikan kewenangan eksekutorial atau sanksi bagi instansi yang tidak melaksanakan rekomendasi',
        'Pelatihan sensitivitas gender bagi petugas administrasi kependudukan tentang hak kepala keluarga perempuan',
        'Mekanisme tindak lanjut wajib dengan batas waktu dan konsekuensi administratif bagi pejabat yang mengabaikan rekomendasi Ombudsman',
        'Revisi SOP Disdukcapil untuk secara eksplisit memungkinkan perempuan sebagai kepala keluarga tanpa persyaratan tambahan',
        'Penguatan koordinasi Ombudsman dengan Komnas Perempuan dalam kasus diskriminasi gender di layanan publik',
      ],
      synonymMap: {
        'malaadministrasi': ['mal-administrasi', 'buruk administrasi', 'maladministration'],
        'rekomendasi': ['saran Ombudsman', 'putusan Ombudsman'],
        'layanan publik': ['pelayanan publik', 'public service', 'layanan pemerintah'],
        'non-diskriminasi': ['anti-diskriminasi', 'kesetaraan', 'persamaan perlakuan'],
        'kepala keluarga perempuan': ['janda kepala keluarga', 'female household head'],
      },
    },
    bestAnswer: `Ombudsman RI adalah lembaga negara yang dibentuk berdasarkan UU No. 37 Tahun 2008 dengan mandat mengawasi penyelenggaraan pelayanan publik dan menangani laporan malaadministrasi. Dalam konteks HAM, Ombudsman berfungsi sebagai mekanisme perlindungan quasi-judicial yang melengkapi sistem formal (pengadilan, Komnas HAM), dengan keunggulan aksesibilitas, kecepatan, dan kemampuan menjangkau pelanggaran di level administratif sehari-hari.

Konsep malaadministrasi terkait langsung dengan pelanggaran HAM melalui mekanisme penghalangan akses. Penolakan Disdukcapil dalam kasus ini tidak hanya merupakan kesalahan prosedur administratif — ia secara langsung memutus akses keluarga tersebut terhadap pendidikan (anak tidak bisa daftar sekolah), kesehatan (tidak bisa akses layanan berbasis KK), dan perlindungan sosial (tidak bisa menerima bansos). Dengan demikian, satu tindakan malaadministrasi memicu cascade pelanggaran hak-hak dasar yang saling terhubung.

Penolakan tersebut juga mengandung dimensi diskriminasi berbasis gender: perempuan yang berstatus janda diperlakukan berbeda tanpa dasar hukum. CEDAW Pasal 15 menjamin kesetaraan perempuan dan laki-laki di hadapan hukum, termasuk dalam akses layanan sipil. UU Administrasi Kependudukan sendiri tidak melarang perempuan sebagai kepala keluarga, sehingga alasan Disdukcapil adalah konstruksi diskriminatif tanpa dasar normatif.

Kelemahan efektivitas Ombudsman terletak pada keterbatasan kewenangan penegakan: rekomendasi Ombudsman mengikat secara moral dan memiliki kekuatan hukum, tetapi tidak ada mekanisme sanksi langsung bagi instansi yang tidak melaksanakannya. Setelah 60 hari tanpa tindak lanjut, Ombudsman hanya dapat melaporkan ke DPR atau mempublikasikan — instrumen yang bergantung pada tekanan politik dan publik.

Rekomendasi: (1) Amandemen UU Ombudsman untuk memberikan kewenangan menjatuhkan sanksi administratif kepada pejabat yang tidak melaksanakan rekomendasi dalam batas waktu yang ditetapkan; (2) Pelatihan wajib aparatur Disdukcapil tentang non-diskriminasi gender dan hak kepala keluarga perempuan; (3) SOP yang secara eksplisit memperbolehkan kepala keluarga perempuan tanpa hambatan tambahan; (4) Mekanisme monitoring tindak lanjut rekomendasi yang dipublikasikan secara terbuka; (5) Penguatan koordinasi Ombudsman dengan Komnas Perempuan untuk kasus bernuansa diskriminasi gender.`,
    explanation: `Soal ini menguji pemahaman tentang Ombudsman sebagai mekanisme perlindungan HAM level administratif. Poin kunci: (1) Fungsi Ombudsman dan konsep malaadministrasi; (2) Kaitan malaadministrasi dengan cascade pelanggaran HAM; (3) Dimensi diskriminasi gender; (4) Kelemahan mekanisme penegakan rekomendasi; (5) Rekomendasi penguatan. Kasus kepala keluarga perempuan dipilih karena menunjukkan bagaimana diskriminasi systemik dalam administrasi publik berdampak berlapis pada hak-hak dasar.`,
  },
  {
    id: 51,
    topicNumber: 3,
    topicName: 'Pengenalan Instrumen Hak Asasi Manusia',
    topicTag: 'Instrumen HAM',
    isEnglish: false,
    scenario: `Dalam siklus UPR (Universal Periodic Review) ketiga Indonesia di Dewan HAM PBB pada 2022, Indonesia menerima 284 rekomendasi dari negara-negara anggota PBB. Rekomendasi mencakup berbagai isu: hak-hak kelompok agama minoritas, hukuman mati, kondisi tahanan, Papua, kebebasan berekspresi, dan diskriminasi berbasis gender. Indonesia menerima 188 rekomendasi (accepted) dan mencatat 96 rekomendasi (noted/ditolak), termasuk semua rekomendasi yang berkaitan dengan moratorium hukuman mati dan ratifikasi Statuta Roma. Beberapa isu yang disorot adalah: kondisi HAM di Papua, kriminalisasi melalui UU ITE, dan perlindungan pembela HAM. Delegasi Indonesia menyatakan bahwa rekomendasi yang "noted" tidak sesuai dengan konteks nasional atau sedang dalam proses kajian.`,
    question: `Berdasarkan skenario di atas, jelaskan mekanisme Universal Periodic Review (UPR) sebagai instrumen akuntabilitas HAM internasional. Evaluasi efektivitas UPR dalam mendorong perubahan nyata di Indonesia, termasuk implikasi rekomendasi yang "noted" versus "accepted". Rekomendasikan strategi bagi Indonesia untuk meningkatkan implementasi rekomendasi UPR.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'UPR',
        'Universal Periodic Review',
        'Dewan HAM PBB',
        'rekomendasi',
        'accepted',
        'noted',
        'akuntabilitas',
        'hukum HAM internasional',
        'siklus review',
        'National Report',
        'civil society',
        'implementasi',
        'Troika',
        'follow-up',
        'treaty bodies',
        'peer review',
      ],
      concepts: [
        'UPR sebagai mekanisme peer review universal yang mewajibkan setiap negara anggota PBB mempertanggungjawabkan kondisi HAM nasional',
        'Perbedaan "accepted" vs "noted" sebagai cerminan komitmen negara dan sensitivitas politik isu tertentu',
        'Keterlibatan civil society dalam proses UPR sebagai jaminan akuntabilitas dan inklusivitas',
        'Hubungan UPR dengan mekanisme treaty bodies dan Special Procedures sebagai ekosistem akuntabilitas HAM PBB',
        'Gap antara penerimaan rekomendasi dan implementasi nyata sebagai tantangan utama efektivitas UPR',
      ],
      legalBasis: [
        'UNGA Resolution 60/251 (2006) — pembentukan Human Rights Council dan mandat UPR',
        'HRC Resolution 5/1 (2007) — prosedur UPR dan panduan pelaksanaan',
        'ICCPR, ICESCR, CEDAW, CAT — perjanjian HAM yang menjadi dasar rekomendasi',
        'Pasal 1 (3) Piagam PBB — kerja sama internasional untuk menghormati HAM',
        'UU No. 39 Tahun 1999 tentang HAM — kerangka hukum nasional yang dikaitkan dengan UPR',
      ],
      analysis: [
        'Indonesia menerima 188 dari 284 rekomendasi (66%) — angka yang lebih tinggi dari rata-rata namun implementasinya tidak proporsional',
        'Penolakan konsisten rekomendasi moratorium hukuman mati dan Statuta Roma mencerminkan posisi politik yang kuat, bukan semata interpretasi hukum',
        'Isu Papua yang disorot dalam UPR menunjukkan kesenjangan antara narasi resmi dan observasi internasional',
        'Keterlibatan civil society Indonesia dalam UPR relatif aktif namun aksesnya ke implementasi pasca-UPR terbatas',
        'Pola rekomendasi "noted" yang berulang di setiap siklus tanpa perubahan mencerminkan stagnasi akuntabilitas',
      ],
      recommendations: [
        'Pembentukan National Mechanism for Implementation, Reporting and Follow-up (NMIRF) yang melibatkan multi-pemangku kepentingan',
        'Penetapan rencana aksi nasional berbasis rekomendasi UPR dengan indikator terukur dan tenggat waktu',
        'Transparansi publik tentang progres implementasi rekomendasi melalui platform yang dapat diakses masyarakat',
        'Kajian substantif terhadap rekomendasi yang "noted" dengan melibatkan akademisi dan civil society sebelum siklus berikutnya',
        'Integrasi rekomendasi UPR ke dalam RPJMN dan RPJMD sebagai instrumen akuntabilitas pembangunan',
      ],
      synonymMap: {
        'UPR': ['Universal Periodic Review', 'tinjauan berkala universal'],
        'accepted': ['diterima', 'disetujui', 'didukung'],
        'noted': ['dicatat', 'tidak diterima sepenuhnya', 'ditolak'],
        'civil society': ['masyarakat sipil', 'LSM', 'organisasi non-pemerintah'],
        'implementasi': ['pelaksanaan', 'tindak lanjut', 'follow-up'],
      },
    },
    bestAnswer: `Universal Periodic Review (UPR) adalah mekanisme unik dalam sistem HAM PBB: tidak seperti treaty bodies yang hanya mengawasi negara yang meratifikasi perjanjian tertentu, UPR mewajibkan semua 193 negara anggota PBB untuk mempertanggungjawabkan kondisi HAM nasional setiap 4,5 tahun. Proses ini melibatkan tiga dokumen utama: laporan nasional (disiapkan negara), laporan kompilasi UN (dari treaty bodies dan Special Procedures), dan laporan ringkasan civil society.

Perbedaan antara "accepted" dan "noted" mencerminkan sikap politik negara terhadap isu spesifik. Rekomendasi yang "accepted" merupakan komitmen publik di forum internasional — meski tidak mengikat secara hukum seperti treaty obligations, ia memiliki kekuatan moral yang kuat dan dapat dijadikan tolok ukur akuntabilitas. Rekomendasi yang "noted" tidak secara otomatis berarti penolakan permanen; dapat berarti negara membutuhkan waktu kajian lebih lanjut atau ada keberatan substantif.

Efektivitas UPR memiliki dua dimensi. Pertama, efektivitas proses: UPR berhasil memaksa negara membahas isu-isu sensitif di forum internasional dan memberikan peluang bagi civil society untuk menyuarakan perspektif alternatif dari narasi resmi. Kedua, efektivitas implementasi: ini adalah kelemahan UPR. Tidak ada mekanisme sanksi bagi negara yang menerima rekomendasi tetapi tidak mengimplementasikannya.

Pola Indonesia mengkhawatirkan dalam satu aspek: isu-isu yang paling kritis (Papua, hukuman mati, UU ITE, pembela HAM) secara konsisten masuk dalam kategori "noted" atau tidak menunjukkan kemajuan implementasi di siklus berikutnya.

Rekomendasi: (1) Indonesia membentuk National Mechanism for Implementation, Reporting and Follow-up (NMIRF) permanen yang multi-pemangku kepentingan; (2) Integrasi rekomendasi UPR ke dalam RPJMN dengan indikator spesifik dan terukur; (3) Platform publik yang transparan tentang progres implementasi rekomendasi; (4) Kajian substantif terhadap semua rekomendasi "noted" sebelum siklus UPR berikutnya, melibatkan civil society dan akademisi; (5) Penguatan kapasitas kementerian teknis dalam mengimplementasikan rekomendasi sektoral.`,
    explanation: `Soal ini menguji pemahaman mekanisme UPR sebagai instrumen akuntabilitas HAM internasional. Poin kunci: (1) Cara kerja dan keunikan UPR sebagai mekanisme universal; (2) Perbedaan "accepted" vs "noted" dan implikasinya; (3) Keterlibatan civil society; (4) Gap implementasi sebagai kelemahan utama; (5) Strategi konkret peningkatan implementasi. UPR Indonesia 2022 dipilih karena relevansi kontemporer dan menunjukkan tegangan antara komitmen internasional dan sensitivitas politik domestik.`,
  },
  {
    id: 52,
    topicNumber: 6,
    topicName: 'HAM dan Teknologi Digital',
    topicTag: 'HAM Digital',
    isEnglish: false,
    scenario: `Antara 2016 dan 2023, ribuan laporan polisi diajukan berdasarkan Undang-Undang Informasi dan Transaksi Elektronik (UU ITE) — banyak di antaranya terhadap individu yang mengkritik pejabat publik di media sosial. Kasus-kasus terkenal mencakup: Baiq Nuril Maknun, seorang guru yang merekam percakapan tentang pelecehan seksual atasannya dan kemudian dikriminalisasi karena "menyebarkan konten asusila"; seorang ibu rumah tangga yang dilaporkan karena mengeluhkan pelayanan rumah sakit di Facebook; dan sejumlah aktivis yang dilaporkan oleh pejabat pemerintah atas kritik kebijakan. Pasal-pasal "karet" dalam UU ITE — khususnya tentang pencemaran nama baik, penghinaan, dan konten "asusila" — dikritik oleh Komnas HAM, UN Special Rapporteur on Freedom of Expression, dan koalisi civil society sebagai tidak sesuai dengan standar HAM internasional. Presiden Jokowi sendiri pernah meminta agar pasal-pasal tersebut tidak digunakan untuk mengkriminalisasi rakyat kecil, meski revisi komprehensif belum terwujud.`,
    question: `Berdasarkan skenario di atas, analisis bagaimana penerapan UU ITE membatasi kebebasan berekspresi dan berpotensi melanggar hak-hak lain. Evaluasi standar pembatasan hak kebebasan berekspresi yang sah dalam ICCPR, dan rekomendasikan reformasi komprehensif UU ITE agar sesuai dengan standar HAM internasional.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'kebebasan berekspresi',
        'UU ITE',
        'kriminalisasi',
        'ICCPR Pasal 19',
        'pasal karet',
        'necessary dan proportionate',
        'legitimate aim',
        'prescribed by law',
        'pencemaran nama baik',
        'UN Special Rapporteur',
        'chilling effect',
        'media sosial',
        'hak digital',
        'reformasi hukum',
        'perempuan',
        'hak atas privasi',
      ],
      concepts: [
        'Tiga-test uji pembatasan hak kebebasan berekspresi yang sah: prescribed by law, legitimate aim, necessary and proportionate',
        'Pasal karet sebagai instrumen hukum yang terlalu luas dan tidak memenuhi standar ketepatan norma (foreseeability)',
        'Chilling effect sebagai dampak sistemik dari kriminalisasi ekspresi yang melampaui kasus individual',
        'Interseksionalitas gender dan kebebasan berekspresi: perempuan rentan dikriminalisasi saat melaporkan kekerasan',
        'Keseimbangan antara perlindungan reputasi dan kebebasan ekspresi dalam hukum HAM internasional',
      ],
      legalBasis: [
        'ICCPR Pasal 19 — kebebasan berekspresi dan syarat pembatasan yang sah',
        'UN Human Rights Committee General Comment No. 34 — interpretasi Pasal 19 ICCPR',
        'UU No. 19 Tahun 2016 tentang Perubahan UU ITE',
        'Pasal 28F UUD 1945 — kebebasan berekspresi dan memperoleh informasi',
        'UN Special Rapporteur on Freedom of Expression — laporan tentang hukum pencemaran nama baik digital',
      ],
      analysis: [
        'Pasal 27 ayat (3) UU ITE tentang pencemaran nama baik tidak memenuhi standar "prescribed by law" karena terlalu luas dan ambigu',
        'Kasus Baiq Nuril menunjukkan pasal ITE dapat membalik situasi: korban kekerasan menjadi terdakwa',
        'Chilling effect UU ITE berdampak pada jurnalis, aktivis, dan warga biasa yang membatasi diri dari ekspresi kritis',
        'Standar ICCPR Pasal 19 mengharuskan pembatasan "necessary" — tidak cukup sekadar "useful" atau "reasonable"',
        'Ketidakseimbangan kekuatan: pejabat publik melaporkan warga — bertentangan dengan prinsip toleransi lebih tinggi bagi figur publik',
      ],
      recommendations: [
        'Revisi komprehensif UU ITE menghapus atau memperketat pasal-pasal karet yang tidak memenuhi standar "prescribed by law"',
        'Dekriminalisasi pencemaran nama baik menjadi ranah hukum perdata, bukan pidana',
        'Memasukkan defenisi ketat "legitimate aim" dalam revisi UU ITE sesuai ICCPR Pasal 19 (3)',
        'Mekanisme screening kepolisian untuk mencegah penyalahgunaan pasal ITE oleh pejabat publik terhadap warga',
        'Penguatan perlindungan bagi pelapor kekerasan dari kriminalisasi balik menggunakan pasal ITE',
      ],
      synonymMap: {
        'kebebasan berekspresi': ['freedom of expression', 'kebebasan berbicara', 'kebebasan berpendapat'],
        'pasal karet': ['pasal ambigu', 'vague law', 'overly broad provisions'],
        'chilling effect': ['efek penakut', 'dampak pembungkam', 'efek dingin'],
        'kriminalisasi': ['pidanisasi', 'pemidanaan', 'criminalisation'],
        'pencemaran nama baik': ['defamasi', 'fitnah', 'penghinaan'],
      },
    },
    bestAnswer: `ICCPR Pasal 19 melindungi kebebasan berekspresi sebagai salah satu hak fundamental dalam masyarakat demokratis. Pasal ini mengizinkan pembatasan, namun hanya jika memenuhi tiga syarat kumulatif: (1) prescribed by law — norma hukum yang cukup tepat dan dapat diprediksi; (2) legitimate aim — tujuan yang sah seperti perlindungan reputasi atau keamanan nasional; dan (3) necessary and proportionate — pembatasan tidak lebih dari yang dibutuhkan untuk mencapai tujuan tersebut.

Pasal-pasal karet UU ITE gagal memenuhi syarat pertama. "Penghinaan", "pencemaran nama baik", dan "konten asusila" didefinisikan sangat luas dan ambigu — seseorang tidak dapat memperkirakan dengan pasti apakah ekspresinya akan dikriminalkan. UN Human Rights Committee General Comment No. 34 secara eksplisit menyatakan bahwa hukum pencemaran nama baik yang terlalu luas melanggar ICCPR Pasal 19. Lebih jauh, kriminalisasi pencemaran nama baik (pidana) — bukan sekadar ranah perdata — tidak sesuai dengan standar "necessary" dalam hukum HAM internasional.

Kasus Baiq Nuril mengekspos paradoks serius: seorang korban pelecehan seksual yang merekam percakapan sebagai alat bukti justru menjadi terdakwa. Ini menunjukkan bagaimana pasal ITE dapat menjadi instrumen membalik posisi korban menjadi pelanggar, dengan efek yang sangat merugikan perempuan yang melaporkan kekerasan.

Chilling effect adalah dampak yang melampaui kasus individual: ketika masyarakat melihat orang-orang dikriminalisasi karena kritik di media sosial atau keluhan terhadap layanan publik, mereka secara kolektif membatasi ekspresi. Ini merusak fondasi masyarakat demokratis.

Prinsip ICCPR juga mengharuskan toleransi lebih tinggi dari figur publik terhadap kritik — namun praktik UU ITE justru membalik ini: pejabat publik adalah pelapor terbanyak.

Rekomendasi: (1) Revisi UU ITE menghapus pasal pencemaran nama baik pidana; (2) Memindahkan sengketa reputasi ke ranah perdata; (3) Memasukkan definisi yang tepat sesuai standar ICCPR untuk pasal-pasal yang dipertahankan; (4) Mekanisme screening polisi untuk mencegah penyalahgunaan oleh pejabat; (5) Perlindungan khusus bagi pelapor kekerasan dari kriminalisasi balik.`,
    explanation: `Soal ini menguji pemahaman tentang standar pembatasan kebebasan berekspresi dalam ICCPR Pasal 19 dan aplikasinya terhadap UU ITE. Poin kunci: (1) Tiga-test pembatasan yang sah; (2) Kritik pasal karet dari perspektif "prescribed by law"; (3) Kasus Baiq Nuril sebagai contoh paradoks; (4) Chilling effect dan dampak sistemik; (5) Reformasi komprehensif berbasis standar HAM. UU ITE dipilih karena merupakan isu kontemporer yang menunjukkan tegangan nyata antara regulasi digital dan kebebasan berekspresi di Indonesia.`,
  },
  {
    id: 53,
    topicNumber: 4,
    topicName: 'Analisis Kebijakan Publik Berbasis HAM',
    topicTag: 'Kebijakan HAM',
    isEnglish: false,
    scenario: `Setiap tahun antara 2015 dan 2019, kebakaran hutan dan lahan gambut di Sumatera dan Kalimantan menghasilkan kabut asap tebal yang menutupi jutaan hektar wilayah. Pada 2015, kabut asap menjangkau Malaysia, Singapura, dan sebagian Thailand. Di Indonesia sendiri, jutaan orang — terutama anak-anak, lansia, dan pasien penyakit pernapasan — menderita ISPA (infeksi saluran pernapasan akut). Sekolah ditutup, penerbangan dibatalkan, dan aktivitas ekonomi lumpuh. Investigasi menemukan bahwa sebagian besar kebakaran disengaja untuk membuka lahan perkebunan kelapa sawit, sebagian lagi karena kelalaian perusahaan. Pemerintah Indonesia mengeluarkan moratorium izin konversi lahan gambut, namun penegakannya lemah. Perusahaan-perusahaan besar diproses hukum namun putusan perdata yang memerintahkan ganti rugi triliunan rupiah sering tidak dilaksanakan.`,
    question: `Berdasarkan skenario di atas, analisis dampak kebakaran hutan terhadap hak atas kesehatan, hak atas lingkungan hidup yang sehat, dan hak-hak anak. Evaluasi tanggung jawab negara dan korporasi dalam mencegah dan menanggulangi bencana ini, serta rekomendasikan kerangka kebijakan berbasis HAM untuk mencegah berulangnya bencana serupa.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'hak atas kesehatan',
        'hak atas lingkungan hidup',
        'ICESCR',
        'hak anak',
        'tanggung jawab korporasi',
        'UNGP',
        'moratorium',
        'lahan gambut',
        'polusi udara',
        'preventive obligation',
        'due diligence',
        'reparasi',
        'ganti rugi',
        'perubahan iklim',
        'right to clean air',
        'penegakan hukum',
      ],
      concepts: [
        'Hak atas lingkungan hidup yang sehat sebagai hak yang semakin diakui dalam hukum HAM internasional',
        'Kewajiban positif negara untuk mencegah kerusakan lingkungan yang mengancam hak-hak dasar',
        'Tanggung jawab korporasi atas dampak lingkungan melalui prinsip due diligence dan polluter pays',
        'Dampak lingkungan pada anak-anak sebagai pelanggaran khusus karena kerentanan yang lebih tinggi',
        'Ketegangan antara kepentingan ekonomi (perkebunan) dan kewajiban HAM (kesehatan, lingkungan)',
      ],
      legalBasis: [
        'ICESCR Pasal 12 — hak atas standar kesehatan fisik dan mental tertinggi yang dapat dicapai',
        'Konvensi Hak Anak Pasal 24 — hak anak atas standar kesehatan tertinggi dan lingkungan yang bersih',
        'UN Resolution 76/300 (2022) — hak atas lingkungan yang bersih, sehat, dan berkelanjutan',
        'UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup',
        'Perpres No. 57 Tahun 2016 tentang Perlindungan dan Pengelolaan Ekosistem Gambut',
      ],
      analysis: [
        'ISPA massal akibat asap adalah pelanggaran hak atas kesehatan (ICESCR Pasal 12) yang difasilitasi oleh kelalaian regulasi negara',
        'Anak-anak mengalami dampak kesehatan yang tidak proporsional — penutupan sekolah juga melanggar hak atas pendidikan',
        'Tidak dilaksanakannya putusan ganti rugi perusahaan menunjukkan kegagalan mekanisme reparasi nasional',
        'Lemahnya penegakan moratorium lahan gambut adalah bukti gap antara kebijakan dan implementasi',
        'UN Resolution 76/300 mengakui hak atas lingkungan sehat sebagai HAM — Indonesia terikat sebagai anggota PBB',
      ],
      recommendations: [
        'Penguatan moratorium lahan gambut dengan mekanisme penegakan yang lebih kuat dan sanksi korporasi yang memadai',
        'Pembentukan badan koordinasi lintas kementerian untuk pemantauan kebakaran hutan dengan mandat intervensi cepat',
        'Kewajiban due diligence lingkungan bagi perusahaan perkebunan sebagai syarat izin dengan pemantauan independen',
        'Mekanisme reparasi bagi masyarakat terdampak asap — terutama anak-anak — yang dapat diakses tanpa proses hukum panjang',
        'Integrasi perlindungan hak atas lingkungan hidup sehat ke dalam RPJMN dengan indikator kualitas udara terukur',
      ],
      synonymMap: {
        'hak atas kesehatan': ['right to health', 'hak kesehatan', 'hak atas standar kesehatan tertinggi'],
        'hak atas lingkungan hidup': ['right to clean environment', 'hak lingkungan sehat'],
        'moratorium': ['pembekuan izin', 'penghentian sementara'],
        'due diligence': ['uji tuntas', 'kewajiban kehati-hatian', 'pencegahan'],
        'reparasi': ['pemulihan', 'ganti rugi', 'kompensasi'],
      },
    },
    bestAnswer: `Kebakaran hutan dan lahan gambut di Sumatera dan Kalimantan merupakan bencana lingkungan yang memiliki dimensi HAM yang kuat dan berlapis. ICESCR Pasal 12 mengakui hak setiap orang atas standar kesehatan fisik dan mental tertinggi yang dapat dicapai — paparan masif kabut asap ISPA yang memengaruhi jutaan orang adalah pelanggaran langsung hak ini.

Dampak pada anak-anak memiliki dimensi HAM tersendiri. Konvensi Hak Anak Pasal 24 menjamin hak anak atas standar kesehatan tertinggi dan lingkungan yang bersih dan tidak tercemar. Penutupan sekolah jangka panjang akibat kabut asap juga melanggar hak atas pendidikan (CRC Pasal 28). Anak-anak memiliki kerentanan fisiologis yang lebih tinggi terhadap polusi udara — konsekuensi jangka panjang pada perkembangan paru-paru mereka adalah dampak yang tidak dapat dipulihkan.

UN Human Rights Council Resolution 76/300 (2022) secara resmi mengakui hak atas lingkungan yang bersih, sehat, dan berkelanjutan sebagai hak asasi manusia — ini berarti kerusakan lingkungan masif yang dapat dicegah merupakan pelanggaran HAM.

Tanggung jawab negara bersifat ganda: pertama, kewajiban regulasi — memastikan perusahaan tidak membakar lahan (due diligence pengawasan); kedua, kewajiban penegakan — memastikan moratorium dan putusan pengadilan dilaksanakan. Lemahnya penegakan moratorium dan tidak dilaksanakannya putusan ganti rugi menunjukkan kegagalan sistemik di kedua aspek ini.

Tanggung jawab korporasi, berdasarkan UNGP 2011, mewajibkan perusahaan untuk melakukan due diligence HAM dan lingkungan sebelum dan selama operasi. Pembakaran lahan yang disengaja adalah pelanggaran paling eksplisit dari kewajiban ini.

Rekomendasi: (1) Moratorium lahan gambut diperkuat dengan sanksi korporasi yang memadai dan mekanisme pemantauan independen; (2) Kewajiban due diligence lingkungan sebagai syarat izin usaha perkebunan; (3) Mekanisme reparasi cepat bagi masyarakat terdampak, khususnya anak-anak; (4) Integrasi hak lingkungan ke dalam indikator pembangunan nasional; (5) Koordinasi lintas negara (ASEAN) untuk mengatasi dampak asap lintas batas.`,
    explanation: `Soal ini menguji pemahaman hak atas kesehatan dan lingkungan dalam konteks bencana industri. Poin kunci: (1) ICESCR Pasal 12 dan hak atas kesehatan; (2) Dimensi hak anak yang khusus (CRC 24 dan 28); (3) Pengakuan hak lingkungan sehat sebagai HAM (Res. 76/300); (4) Tanggung jawab ganda negara (regulasi dan penegakan); (5) UNGP dan kewajiban korporasi. Kebakaran hutan dipilih karena menunjukkan bagaimana kerusakan lingkungan masif terhubung langsung dengan pelanggaran hak-hak dasar.`,
  },
  {
    id: 54,
    topicNumber: 3,
    topicName: 'Pengenalan Instrumen Hak Asasi Manusia',
    topicTag: 'Instrumen HAM',
    isEnglish: false,
    scenario: `Pada November 2017, Mahkamah Konstitusi Indonesia mengeluarkan Putusan No. 97/PUU-XIV/2016 yang memerintahkan negara untuk mengakui penghayat kepercayaan dalam kolom agama di Kartu Tanda Penduduk (KTP) dan Kartu Keluarga (KK). Sebelumnya, penghayat kepercayaan — kelompok yang memeluk kepercayaan asli Nusantara di luar 6 agama resmi negara — wajib memilih salah satu dari 6 agama resmi untuk mengisi kolom agama, atau membiarkannya kosong yang menyebabkan berbagai hambatan administrasi. Dampak dari kebijakan lama mencakup: sulit mendaftar sekolah, sulit menikah secara resmi, sulit melamar kerja PNS, dan potensi kriminalisasi di bawah UU Penodaan Agama. Setelah putusan MK 2017, implementasi berjalan lambat: sebagian petugas Dukcapil menolak atau menghambat proses, dan sebagian masyarakat masih menghadapi stigma sosial.`,
    question: `Berdasarkan skenario di atas, analisis hak atas kebebasan beragama dan berkeyakinan bagi penghayat kepercayaan dalam kerangka HAM internasional dan konstitusi Indonesia. Evaluasi dampak HAM dari kebijakan diskriminasi administrasi sebelum Putusan MK 2017, dan rekomendasikan langkah-langkah untuk memastikan implementasi penuh putusan tersebut.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'kebebasan beragama',
        'penghayat kepercayaan',
        'ICCPR Pasal 18',
        'diskriminasi',
        'putusan MK',
        'kolom agama',
        'KTP',
        'forum internum',
        'non-diskriminasi',
        'UU Penodaan Agama',
        'kepercayaan asli',
        'hak atas identitas',
        'hak administrasi',
        'religious minority',
        'implementation gap',
      ],
      concepts: [
        'Forum internum sebagai dimensi absolut kebebasan beragama yang melindungi hak memilih dan mempertahankan kepercayaan apapun',
        'Diskriminasi sistemik melalui administrasi kependudukan sebagai bentuk tidak langsung dari tekanan untuk meninggalkan keyakinan',
        'Negara sebagai entitas netral dalam urusan agama — kewajiban untuk tidak memfavoritkan atau mendiskriminasi keyakinan tertentu',
        'Putusan MK sebagai pengakuan konstitusional atas pluralisme kepercayaan di Indonesia',
        'Implementation gap antara putusan pengadilan dan praktik administrasi sebagai tantangan struktural penegakan HAM',
      ],
      legalBasis: [
        'ICCPR Pasal 18 — kebebasan beragama dan berkeyakinan',
        'Pasal 28E UUD 1945 — kebebasan memeluk agama dan kepercayaan masing-masing',
        'Putusan MK No. 97/PUU-XIV/2016 — pengakuan kepercayaan dalam administrasi kependudukan',
        'UN Declaration on Minorities 1992 — perlindungan kelompok kepercayaan minoritas',
        'UU No. 24 Tahun 2013 tentang Administrasi Kependudukan',
      ],
      analysis: [
        'Memaksa penghayat kepercayaan mencantumkan agama resmi di KTP adalah serangan terhadap forum internum — dimensi paling absolut kebebasan beragama',
        'Hambatan administrasi kependudukan menciptakan tekanan tidak langsung yang sistemik untuk meninggalkan kepercayaan',
        'Pengecualian dari 6 agama resmi adalah bentuk diskriminasi yang tidak memiliki pembenaran proporsional dalam hukum HAM',
        'Implementasi lambat pasca-MK 2017 menunjukkan bahwa putusan hukum saja tidak cukup tanpa political will dan penegakan institusional',
        'Stigma sosial yang berlanjut menunjukkan bahwa perubahan kebijakan harus disertai program perubahan sosial',
      ],
      recommendations: [
        'Penerbitan regulasi teknis yang mengikat Disdukcapil di seluruh Indonesia untuk melaksanakan Putusan MK tanpa hambatan',
        'Mekanisme pengaduan yang mudah diakses bagi penghayat yang masih menghadapi hambatan administrasi pasca-putusan',
        'Pelatihan petugas Disdukcapil dan aparatur sipil negara tentang hak kebebasan beragama dan kewajiban konstitusional',
        'Program pendidikan publik tentang keberagaman kepercayaan untuk mengatasi stigma sosial',
        'Revisi UU Penodaan Agama agar tidak dapat digunakan untuk mengkriminalisasi ekspresi kepercayaan yang sah',
      ],
      synonymMap: {
        'penghayat kepercayaan': ['kepercayaan asli', 'aliran kepercayaan', 'indigenous beliefs', 'agama lokal'],
        'forum internum': ['kebebasan batin beragama', 'dimensi internal', 'internal belief'],
        'diskriminasi': ['perlakuan berbeda tanpa dasar', 'pembedaan tidak sah'],
        'implementation gap': ['kesenjangan implementasi', 'celah pelaksanaan'],
        'non-diskriminasi': ['persamaan perlakuan', 'anti-diskriminasi'],
      },
    },
    bestAnswer: `Kebebasan beragama dan berkeyakinan yang dijamin oleh ICCPR Pasal 18 melindungi dua dimensi: forum internum (kebebasan batin untuk memiliki, mengubah, atau mempertahankan keyakinan — bersifat absolut) dan forum externum (manifestasi keyakinan — dapat dibatasi secara terbatas). Memaksa penghayat kepercayaan untuk mengisi kolom "agama" dengan salah satu dari 6 agama resmi adalah serangan terhadap forum internum — seseorang dipaksa untuk secara resmi mengidentifikasi diri dengan keyakinan yang bukan miliknya. Ini merupakan pelanggaran yang tidak dapat dibenarkan oleh pertimbangan apapun.

Dampak administrasi dari kebijakan ini berlapis dan sistemik. Hambatan dalam pendaftaran sekolah, pernikahan resmi, lamaran kerja PNS, dan potensi kriminalisasi bukan sekadar masalah birokrasi — mereka adalah tekanan tidak langsung yang konsisten untuk meninggalkan kepercayaan demi mendapatkan akses terhadap layanan negara. Ini adalah bentuk diskriminasi struktural: negara tidak melarang kepercayaan secara eksplisit, tetapi menciptakan kondisi yang membuat mempertahankan kepercayaan tersebut sangat mahal secara sosial dan ekonomi.

Putusan MK 2017 adalah terobosan konstitusional yang mengakui Pasal 28E UUD 1945 melindungi semua kepercayaan — tidak terbatas pada 6 agama resmi. Namun implementasi yang lambat mengungkapkan tantangan struktural: perubahan kebijakan tingkat tinggi tidak otomatis mengubah praktik birokrasi di lapangan.

Rekomendasi: (1) Permendagri atau Peraturan Kepala Dukcapil yang mengikat seluruh Indonesia untuk melaksanakan Putusan MK; (2) Mekanisme pengaduan efektif bagi penghayat yang masih dipersulit; (3) Pelatihan wajib petugas Disdukcapil tentang kesetaraan kepercayaan; (4) Program pendidikan publik tentang pluralisme kepercayaan; (5) Kajian revisi UU Penodaan Agama untuk memastikan tidak ada kriminalisasi kepercayaan yang sah.`,
    explanation: `Soal ini menguji pemahaman kebebasan beragama dengan fokus pada kelompok kepercayaan minoritas di luar agama resmi. Poin kunci: (1) Forum internum sebagai dimensi absolut; (2) Diskriminasi administrasi sebagai tekanan tidak langsung terhadap kepercayaan; (3) Putusan MK 2017 sebagai terobosan konstitusional; (4) Implementation gap sebagai tantangan struktural; (5) Rekomendasi penguatan implementasi. Kasus penghayat kepercayaan dipilih karena menunjukkan bahwa diskriminasi agama di Indonesia tidak hanya terjadi pada agama-agama yang dikenal umum.`,
  },
  {
    id: 55,
    topicNumber: 9,
    topicName: 'Pencegahan dan Penanganan Kekerasan Berbasis Gender',
    topicTag: 'KBG & KDRT',
    isEnglish: false,
    scenario: `UU No. 1 Tahun 1974 tentang Perkawinan mengizinkan poligami bagi laki-laki Muslim dengan syarat mendapatkan izin pengadilan, persetujuan istri pertama, kemampuan finansial, dan "berlaku adil". Dalam praktiknya, ketentuan ini sering diabaikan: banyak perkawinan poligami dilakukan tanpa izin pengadilan (siri), tanpa persetujuan genuine istri pertama, dan sering kali membawa dampak psikologis dan finansial negatif pada istri pertama dan anak-anak. Sejumlah PNS dan pejabat publik juga melakukan poligami, dalam beberapa kasus menggunakan posisi kekuasaan. Koalisi perempuan dan organisasi HAM telah berulang kali mengajukan judicial review atas pasal poligami ke MK, namun belum berhasil mengubah ketentuan. CEDAW Committee berulang kali merekomendasikan agar Indonesia merevisi ketentuan poligami sebagai bentuk diskriminasi struktural terhadap perempuan.`,
    question: `Berdasarkan skenario di atas, analisis praktik poligami dalam kerangka CEDAW dan hak-hak perempuan dalam perkawinan. Evaluasi argumen tentang keseimbangan antara kebebasan beragama dan prinsip non-diskriminasi gender, serta rekomendasikan reformasi hukum perkawinan yang menghormati keduanya.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'CEDAW',
        'diskriminasi gender',
        'poligami',
        'perkawinan',
        'hak atas persamaan dalam perkawinan',
        'non-diskriminasi',
        'persetujuan bebas',
        'free and full consent',
        'kebebasan beragama',
        'hak perempuan',
        'hak anak',
        'psikologis',
        'finansial',
        'CEDAW Committee',
        'structural discrimination',
        'kekerasan berbasis gender',
      ],
      concepts: [
        'CEDAW sebagai perjanjian HAM yang secara khusus melarang diskriminasi terhadap perempuan dalam perkawinan',
        'Poligami sebagai praktik yang secara struktural menempatkan perempuan dalam posisi yang tidak setara dalam perkawinan',
        'Tegangan antara kebebasan beragama (poligami dalam Islam) dan non-diskriminasi gender sebagai tantangan HAM kontemporer',
        'Persetujuan bebas dan penuh (free and full consent) sebagai syarat perkawinan yang sah dalam HAM internasional',
        'Dampak tidak langsung poligami pada anak-anak sebagai dimensi hak anak yang sering diabaikan',
      ],
      legalBasis: [
        'CEDAW Pasal 16 — hak yang sama bagi perempuan dalam perkawinan, selama perkawinan, dan perceraian',
        'ICCPR Pasal 23 — perlindungan keluarga dan persamaan hak dalam perkawinan',
        'CEDAW General Recommendation No. 21 tentang kesetaraan dalam perkawinan',
        'Pasal 28B UUD 1945 — hak membentuk keluarga',
        'UU No. 1 Tahun 1974 tentang Perkawinan',
      ],
      analysis: [
        'Poligami secara struktural menempatkan istri pertama dalam posisi inferior tanpa persetujuan genuine karena ketidakseimbangan kekuasaan',
        'CEDAW Pasal 16 menjamin kesetaraan hak dalam perkawinan — poligami yang tidak resiprokal adalah pelanggaran struktural prinsip ini',
        'Argumen kebebasan beragama tidak dapat mengecualikan kewajiban perjanjian CEDAW yang telah diratifikasi Indonesia',
        'Poligami siri tanpa izin pengadilan meninggalkan istri dan anak-anak tanpa perlindungan hukum',
        'CEDAW Committee berulang kali mengidentifikasi poligami sebagai diskriminasi struktural — Indonesia wajib merespons rekomendasi ini',
      ],
      recommendations: [
        'Revisi UU Perkawinan untuk memperkuat persyaratan persetujuan genuine (bukan sekedar formal) dari istri pertama',
        'Penguatan mekanisme perlindungan finansial bagi istri dan anak-anak dalam keluarga poligami',
        'Kriminalisasi poligami siri yang meninggalkan istri dan anak tanpa perlindungan hukum',
        'Dialog nasional yang inklusif antara perspektif agama, perempuan, dan HAM untuk membangun konsensus reformasi',
        'Penguatan mekanisme pelaporan dan bantuan hukum bagi perempuan yang mengalami dampak negatif poligami',
      ],
      synonymMap: {
        'CEDAW': ['Konvensi Penghapusan Diskriminasi Perempuan', 'Convention on Women'],
        'free and full consent': ['persetujuan bebas dan penuh', 'persetujuan genuine', 'persetujuan sukarela'],
        'diskriminasi gender': ['diskriminasi berbasis jenis kelamin', 'gender discrimination'],
        'structural discrimination': ['diskriminasi struktural', 'diskriminasi sistemik'],
        'poligami': ['perkawinan banyak istri', 'poligami siri'],
      },
    },
    bestAnswer: `CEDAW Pasal 16 menjamin hak yang sama bagi perempuan dalam segala aspek perkawinan — termasuk hak yang sama untuk memasuki perkawinan, selama perkawinan, dan dalam perceraian. Salah satu hak fundamental ini adalah free and full consent — persetujuan bebas dan penuh, tanpa paksaan. CEDAW General Recommendation No. 21 secara eksplisit menyatakan bahwa poligami melanggar kesetaraan hak perempuan dalam perkawinan dan harus dihapuskan.

Masalah struktural poligami terletak pada ketidakseimbangan kekuasaan yang inheren: dalam konteks perkawinan yang patriarkal, "persetujuan" istri pertama sering kali tidak genuine karena tekanan sosial, ekonomi, dan ketergantungan. Bahkan ketika proses formal dijalankan, persetujuan dalam kondisi ketergantungan finansial dan sosial tidak dapat dianggap sebagai persetujuan bebas. Ini berarti syarat formal UU Perkawinan 1974 tidak cukup memadai untuk menjamin kesetaraan yang sesungguhnya.

Argumen kebebasan beragama memang memiliki bobot — sebagian ulama berpendapat poligami adalah hak yang dilindungi dalam Islam. Namun ICCPR Pasal 18 yang melindungi kebebasan beragama memiliki batasan: manifestasi keyakinan agama dapat dibatasi untuk melindungi hak dan kebebasan orang lain. Kewajiban CEDAW yang telah diratifikasi Indonesia membatasi ruang gerak argumen kebebasan beragama — negara tidak dapat menggunakan agama sebagai justifikasi untuk mengizinkan diskriminasi gender sistemik.

Dampak pada anak-anak juga signifikan: konflik antar-istri, perebutan warisan, dan ketidakpastian status hukum anak dari perkawinan siri adalah pelanggaran hak anak yang sering diabaikan.

Rekomendasi: (1) Revisi UU Perkawinan memperkuat verifikasi persetujuan genuine; (2) Penguatan perlindungan finansial istri dan anak dalam keluarga poligami; (3) Kriminalisasi poligami siri yang meninggalkan keluarga tanpa perlindungan; (4) Dialog nasional yang inklusif antara perspektif agama dan HAM; (5) Penguatan akses bantuan hukum bagi perempuan terdampak.`,
    explanation: `Soal ini menguji pemahaman CEDAW dan tegangan antara kebebasan beragama dan non-diskriminasi gender. Poin kunci: (1) CEDAW Pasal 16 dan free and full consent; (2) Ketidakseimbangan kekuasaan yang membuat persetujuan formal tidak genuine; (3) Batasan argumen kebebasan beragama di bawah kewajiban perjanjian; (4) Dampak pada anak-anak; (5) Rekomendasi reformasi yang menghormati keduanya. Poligami dipilih karena merupakan isu di mana tegangan antara norma agama dan HAM internasional terlihat paling jelas di Indonesia.`,
  },
  {
    id: 56,
    topicNumber: 5,
    topicName: 'Hak Kelompok Rentan',
    topicTag: 'Kelompok Rentan',
    isEnglish: false,
    scenario: `Data KPAI (Komisi Perlindungan Anak Indonesia) menunjukkan bahwa kasus bullying di sekolah Indonesia meningkat signifikan antara 2018 dan 2023, mencakup bullying fisik, verbal, dan siber (cyberbullying). Beberapa kasus berakhir fatal: pada 2022, seorang siswa SMP di Cilacap meninggal setelah dianiaya oleh seniornya, dan sejumlah korban bullying berat mengalami depresi atau percobaan bunuh diri. Sekolah-sekolah di Indonesia secara umum tidak memiliki mekanisme pengaduan yang jelas, tidak ada protokol penanganan, dan banyak guru memilih diam karena takut merusak reputasi sekolah. UU Perlindungan Anak (UU No. 35 Tahun 2014) dan KHA melarang segala bentuk kekerasan terhadap anak, namun implementasinya di lingkungan sekolah sangat lemah. Pelaku bullying yang masih anak-anak juga menghadapi dilemma antara penanganan pidana dan pendekatan rehabilitatif.`,
    question: `Berdasarkan skenario di atas, analisis bullying sekolah dari perspektif hak anak berdasarkan KHA (Konvensi Hak Anak). Jelaskan kewajiban negara dan sekolah dalam menciptakan lingkungan sekolah bebas kekerasan, dan rekomendasikan kebijakan komprehensif — termasuk pendekatan terhadap pelaku anak — untuk mengatasi bullying di Indonesia.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'konvensi hak anak',
        'KHA',
        'CRC',
        'bullying',
        'kekerasan terhadap anak',
        'hak atas pendidikan',
        'hak atas perlindungan',
        'cyberbullying',
        'best interests of the child',
        'KPAI',
        'restorative justice',
        'rehabilitasi',
        'child-friendly',
        'sekolah aman',
        'mekanisme pengaduan',
        'hak berpartisipasi',
      ],
      concepts: [
        'Prinsip best interests of the child sebagai pertimbangan utama dalam semua tindakan yang memengaruhi anak',
        'Kewajiban negara (state party) untuk mengambil semua langkah legislatif, administratif, dan pendidikan untuk melindungi anak dari kekerasan',
        'Pendekatan restorative justice sebagai alternatif yang lebih sesuai HAM anak untuk menangani pelaku anak',
        'Lingkungan sekolah aman sebagai prasyarat pemenuhan hak atas pendidikan yang bermakna',
        'Partisipasi anak dalam perancangan kebijakan anti-bullying sebagai implementasi hak berpartisipasi (CRC Pasal 12)',
      ],
      legalBasis: [
        'CRC Pasal 19 — kewajiban negara melindungi anak dari segala kekerasan, penganiayaan, dan penelantaran',
        'CRC Pasal 28-29 — hak atas pendidikan dalam lingkungan yang bermartabat',
        'CRC Pasal 37-40 — hak anak yang berhadapan dengan hukum',
        'UU No. 35 Tahun 2014 tentang Perlindungan Anak',
        'Permendikbud No. 82 Tahun 2015 tentang Pencegahan dan Penanggulangan Tindak Kekerasan di Satuan Pendidikan',
      ],
      analysis: [
        'Bullying yang menyebabkan kematian dan depresi adalah pelanggaran CRC Pasal 19 yang serius dan dapat diatribusikan kepada negara karena kelalaian pengawasan',
        'Tidak adanya mekanisme pengaduan yang jelas di sekolah adalah kegagalan kewajiban positif negara membangun sistem perlindungan',
        'Diam sekolah untuk melindungi reputasi bertentangan dengan prinsip best interests of the child dan kewajiban pelaporan',
        'Cyberbullying memiliki dimensi khusus karena tidak terbatas ruang dan waktu — regulasi yang ada belum memadai',
        'Pendekatan murni pidana terhadap pelaku anak bertentangan dengan CRC Pasal 37-40 yang mengharuskan pendekatan rehabilitatif',
      ],
      recommendations: [
        'Kewajiban semua sekolah memiliki tim anti-bullying, protokol penanganan, dan mekanisme pengaduan yang child-friendly',
        'Pelatihan wajib guru tentang deteksi dini dan respons kekerasan antar-siswa',
        'Pendekatan restorative justice sebagai default untuk bullying pelaku anak, bukan kriminalisasi',
        'Regulasi cyberbullying yang spesifik dengan respons cepat dari platform digital dan mekanisme sekolah',
        'Pelibatan siswa dalam perancangan kebijakan anti-bullying sekolah sebagai implementasi CRC Pasal 12',
      ],
      synonymMap: {
        'bullying': ['perundungan', 'kekerasan antar-siswa', 'penindasan'],
        'best interests of the child': ['kepentingan terbaik anak', 'kepentingan utama anak'],
        'restorative justice': ['keadilan restoratif', 'pendekatan pemulihan'],
        'child-friendly': ['ramah anak', 'berbasis anak'],
        'cyberbullying': ['perundungan siber', 'bullying online'],
      },
    },
    bestAnswer: `Bullying sekolah adalah isu HAM anak yang serius. CRC Pasal 19 mewajibkan negara mengambil "semua langkah legislatif, administratif, sosial, dan pendidikan yang tepat" untuk melindungi anak dari segala bentuk kekerasan fisik atau mental, penganiayaan, atau eksploitasi. Ketika bullying menyebabkan kematian atau depresi berat, ini adalah pelanggaran CRC Pasal 19 yang dapat diatribusikan kepada negara karena kelalaian dalam membangun sistem perlindungan yang memadai.

Prinsip best interests of the child — yang ditetapkan CRC Pasal 3 sebagai pertimbangan utama dalam semua tindakan yang memengaruhi anak — mensyaratkan bahwa kebijakan sekolah, respons guru, dan tindakan dinas pendidikan harus selalu memprioritaskan kepentingan terbaik anak, bukan reputasi institusi. "Diam" sekolah untuk melindungi nama baik secara eksplisit bertentangan dengan prinsip ini.

Bullying juga melanggar hak atas pendidikan (CRC Pasal 28-29). Pendidikan yang bermakna hanya dapat terwujud dalam lingkungan yang aman dan bermartabat. Ketika siswa takut datang ke sekolah karena bullying, hak atas pendidikan mereka terancam.

Penanganan pelaku anak memerlukan pendekatan yang sensitif. CRC Pasal 37-40 mengharuskan pendekatan rehabilitatif untuk anak yang berhadapan dengan hukum — kriminalisasi langsung bertentangan dengan kewajiban ini. Restorative justice — yang berfokus pada pemahaman dampak, pertanggungjawaban, dan pemulihan hubungan — adalah pendekatan yang lebih sesuai dengan HAM anak untuk pelaku bully yang masih di bawah umur.

CRC Pasal 12 juga relevan: anak berhak untuk didengar dalam keputusan yang memengaruhi mereka. Pelibatan siswa dalam merancang kebijakan anti-bullying adalah implementasi hak berpartisipasi sekaligus strategi yang terbukti lebih efektif.

Rekomendasi: (1) Kewajiban nasional semua sekolah memiliki tim anti-bullying dan protokol child-friendly; (2) Pelatihan wajib guru tentang deteksi dan respons kekerasan; (3) Restorative justice sebagai default untuk pelaku anak; (4) Regulasi khusus cyberbullying; (5) Pelibatan siswa dalam perancangan kebijakan sekolah.`,
    explanation: `Soal ini menguji pemahaman hak anak dalam konteks kekerasan di lingkungan sekolah. Poin kunci: (1) CRC Pasal 19 dan kewajiban perlindungan negara; (2) Prinsip best interests of the child vs reputasi sekolah; (3) Hak atas pendidikan yang mensyaratkan lingkungan aman; (4) Pendekatan rehabilitatif vs kriminalisasi untuk pelaku anak; (5) CRC Pasal 12 dan partisipasi anak. Bullying sekolah dipilih karena menunjukkan bagaimana HAM anak ditegakkan (atau dilanggar) dalam konteks kehidupan sehari-hari.`,
  },
  {
    id: 57,
    topicNumber: 5,
    topicName: 'Hak Kelompok Rentan',
    topicTag: 'Kelompok Rentan',
    isEnglish: false,
    scenario: `Meski Indonesia telah meratifikasi Konvensi PBB tentang Hak-Hak Penyandang Disabilitas (CRPD) melalui UU No. 19 Tahun 2011, dan meski UU No. 8 Tahun 2016 tentang Penyandang Disabilitas mengamanatkan pendidikan inklusif, implementasi di lapangan masih sangat terbatas. Ribuan anak penyandang disabilitas di seluruh Indonesia masih diarahkan ke Sekolah Luar Biasa (SLB) — yang jumlahnya sangat terbatas, terutama di daerah terpencil — atau sama sekali tidak bersekolah. Sekolah reguler sering menolak menerima siswa disabilitas dengan alasan "tidak ada fasilitas" atau "tidak ada guru pendamping khusus" (GPK). Studi menunjukkan bahwa anak disabilitas yang bersekolah di sekolah reguler memiliki outcomes lebih baik dalam hal integrasi sosial dan kesiapan hidup mandiri. Pemerintah telah mencanangkan target "sekolah inklusif" namun pelatihan GPK dan penyesuaian infrastruktur berjalan lambat.`,
    question: `Berdasarkan skenario di atas, analisis hak pendidikan inklusif bagi penyandang disabilitas dalam kerangka CRPD dan UU No. 8 Tahun 2016. Evaluasi kewajiban negara dalam mewujudkan pendidikan inklusif, dan rekomendasikan langkah-langkah konkret untuk mempercepat transformasi dari sistem segregasi ke inklusi penuh.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'CRPD',
        'pendidikan inklusif',
        'penyandang disabilitas',
        'UU Penyandang Disabilitas',
        'reasonable accommodation',
        'segregasi',
        'SLB',
        'guru pendamping khusus',
        'aksesibilitas',
        'hak atas pendidikan',
        'GPK',
        'non-diskriminasi',
        'disability-inclusive education',
        'progressive realization',
        'universal design',
      ],
      concepts: [
        'CRPD Pasal 24 sebagai instrumen yang secara eksplisit mengarahkan negara pada sistem pendidikan inklusif, bukan segregasi',
        'Reasonable accommodation sebagai kewajiban negara untuk menyesuaikan sistem pendidikan agar dapat diakses penyandang disabilitas',
        'Perbedaan model medis vs model sosial disabilitas — CRPD mengadopsi model sosial yang menempatkan hambatan di lingkungan, bukan pada individu',
        'Progressive realization sebagai standar untuk kewajiban ekosob yang memungkinkan pentahapan namun tetap mensyaratkan upaya maksimal',
        'Universal Design for Learning sebagai pendekatan pedagogik yang menguntungkan semua siswa, bukan hanya penyandang disabilitas',
      ],
      legalBasis: [
        'CRPD Pasal 24 — hak penyandang disabilitas atas pendidikan inklusif di semua jenjang',
        'CRC Pasal 28 — hak anak atas pendidikan',
        'UU No. 8 Tahun 2016 tentang Penyandang Disabilitas Pasal 40 — pendidikan inklusif',
        'UU No. 20 Tahun 2003 tentang Sistem Pendidikan Nasional',
        'Permendikbud No. 70 Tahun 2009 tentang Pendidikan Inklusif',
      ],
      analysis: [
        'Penolakan sekolah reguler menerima siswa disabilitas dengan alasan "tidak ada fasilitas" adalah diskriminasi yang melanggar CRPD Pasal 24',
        'Dominasi model SLB menunjukkan bahwa Indonesia belum beralih dari paradigma segregasi ke inklusi sebagaimana diwajibkan CRPD',
        'Bukti bahwa inklusi menghasilkan outcomes lebih baik memperkuat argumen bahwa segregasi tidak hanya melanggar HAM tetapi juga tidak efektif',
        'Progressive realization mengizinkan pentahapan namun tidak mengizinkan stagnasi — lambatnya pelatihan GPK tidak dapat dibenarkan',
        'Wilayah terpencil mengalami double disadvantage: SLB tidak tersedia DAN sekolah reguler tidak inklusif',
      ],
      recommendations: [
        'Kewajiban semua sekolah negeri menerima siswa disabilitas dengan program GPK dan penyesuaian reasonable accommodation',
        'Program percepatan pelatihan GPK nasional dengan target terukur dan anggaran yang memadai',
        'Universal Design for Learning sebagai standar wajib dalam kurikulum dan infrastruktur sekolah baru',
        'Mekanisme pengaduan yang dapat diakses keluarga penyandang disabilitas yang sekolahnya ditolak',
        'Transformasi bertahap SLB menjadi Pusat Sumber Daya Inklusi yang mendukung sekolah reguler',
      ],
      synonymMap: {
        'CRPD': ['Konvensi Hak Disabilitas', 'Convention on Rights of Persons with Disabilities'],
        'pendidikan inklusif': ['inclusive education', 'sekolah inklusif', 'inklusi pendidikan'],
        'reasonable accommodation': ['akomodasi yang wajar', 'penyesuaian wajar', 'adaptasi'],
        'penyandang disabilitas': ['difabel', 'berkebutuhan khusus', 'ABK'],
        'segregasi': ['pemisahan', 'pendidikan terpisah', 'SLB model'],
      },
    },
    bestAnswer: `CRPD Pasal 24 secara eksplisit mengharuskan negara untuk menjamin sistem pendidikan yang inklusif di semua jenjang — bukan sekadar "sekolah khusus" yang terpisah. Ini mencerminkan pergeseran dari model medis disabilitas (yang memandang disabilitas sebagai "masalah" pada individu yang perlu "diperbaiki" atau "dipisahkan") ke model sosial (yang memandang hambatan berada di lingkungan dan sistem, bukan pada individu).

Penolakan sekolah reguler menerima siswa disabilitas adalah diskriminasi yang secara langsung melanggar CRPD Pasal 24 dan UU Penyandang Disabilitas. Alasan "tidak ada fasilitas" bukan justifikasi yang sah — justru ini adalah bukti kegagalan negara menjalankan kewajiban reasonable accommodation: menyediakan penyesuaian yang wajar agar penyandang disabilitas dapat berpartisipasi setara.

Prinsip progressive realization dalam ICESCR memang mengizinkan pentahapan untuk kewajiban ekosob yang memerlukan sumber daya — termasuk pendidikan inklusif. Namun progressive realization mensyaratkan upaya maksimal sesuai sumber daya yang tersedia dan tidak boleh menghasilkan regresi. Lambatnya pelatihan GPK dan penyesuaian infrastruktur yang tidak proporsional dengan anggaran pendidikan nasional tidak dapat dibenarkan di bawah standar ini.

Bukti empiris bahwa anak disabilitas di sekolah inklusif memiliki outcomes lebih baik memperkuat argumen bahwa segregasi bukan hanya melanggar HAM, tetapi juga tidak efektif dari perspektif hasil pembelajaran.

Rekomendasi: (1) Kewajiban hukum semua sekolah negeri menerima siswa disabilitas dengan GPK dan reasonable accommodation; (2) Program percepatan pelatihan GPK nasional dengan anggaran dan target terukur; (3) Universal Design for Learning sebagai standar wajib infrastruktur sekolah baru; (4) Mekanisme pengaduan bagi keluarga yang sekolahnya menolak anak disabilitas; (5) Transformasi bertahap SLB menjadi Pusat Sumber Daya yang mendukung sekolah inklusif.`,
    explanation: `Soal ini menguji pemahaman CRPD Pasal 24 dan hak pendidikan inklusif. Poin kunci: (1) Pergeseran model medis ke model sosial disabilitas; (2) Reasonable accommodation sebagai kewajiban negara; (3) Progressive realization dan batasannya; (4) Segregasi SLB sebagai pelanggaran CRPD; (5) Rekomendasi transformasi sistem. Pendidikan inklusif dipilih karena menunjukkan bagaimana implementasi CRPD yang lemah berdampak langsung pada kehidupan anak penyandang disabilitas di Indonesia.`,
  },
  {
    id: 58,
    topicNumber: 10,
    topicName: 'Peran, Kewajiban, dan Tanggung Jawab Negara dan Non Negara Terhadap HAM',
    topicTag: 'Negara & Non-Negara',
    isEnglish: false,
    scenario: `Putusan Mahkamah Konstitusi No. 35/PUU-X/2012 adalah tonggak penting: MK menegaskan bahwa hutan adat bukan merupakan hutan negara, sehingga masyarakat adat memiliki hak atas pengelolaan hutan adat mereka sendiri. Namun, lebih dari satu dekade setelah putusan tersebut, implementasinya sangat lambat. Per 2023, hanya sekitar 240.000 hektar hutan adat yang telah mendapat pengakuan formal — sangat jauh dari estimasi 40 juta hektar hutan adat yang ada di Indonesia. Masyarakat adat masih menghadapi konflik dengan perusahaan perkebunan dan pertambangan, penggusuran oleh proyek pembangunan, dan kriminalisasi atas aktivitas pengelolaan hutan yang mereka lakukan secara turun-temurun. Badan Registrasi Wilayah Adat (BRWA) mencatat ribuan klaim hutan adat yang belum diproses. Mahkamah Agung dalam beberapa putusan masih menggunakan framing hutan negara meski bertentangan dengan MK 35/2012.`,
    question: `Berdasarkan skenario di atas, analisis hak masyarakat adat atas tanah dan sumber daya alam berdasarkan hukum HAM internasional dan putusan MK 35/2012. Evaluasi hambatan implementasi dan kewajiban negara yang belum dipenuhi, serta rekomendasikan strategi percepatan pengakuan hutan adat yang berbasis HAM.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'masyarakat adat',
        'hutan adat',
        'UNDRIP',
        'hak atas tanah',
        'MK 35/2012',
        'FPIC',
        'free prior and informed consent',
        'pengakuan hak',
        'konflik agraria',
        'kriminalisasi',
        'self-determination',
        'hak kolektif',
        'BRWA',
        'pendaftaran',
        'implementation gap',
        'hak ulayat',
      ],
      concepts: [
        'UNDRIP sebagai instrumen HAM yang secara komprehensif mengakui hak-hak kolektif masyarakat adat atas tanah dan sumber daya alam',
        'FPIC (Free, Prior, and Informed Consent) sebagai hak prosedural masyarakat adat yang wajib dipenuhi sebelum proyek di wilayah adat',
        'Hak atas tanah sebagai hak kolektif masyarakat adat yang tidak dapat dipindahtangankan secara individual',
        'Kriminalisasi pengelolaan hutan adat sebagai bentuk penghalangan hak yang bertentangan dengan UNDRIP dan MK 35/2012',
        'Gap antara pengakuan konstitusional (MK 35/2012) dan implementasi administratif sebagai tantangan utama',
      ],
      legalBasis: [
        'UNDRIP Pasal 26 — hak masyarakat adat atas tanah dan sumber daya alam yang secara tradisional dimiliki',
        'UNDRIP Pasal 32 — FPIC sebelum setiap proyek yang memengaruhi tanah dan sumber daya masyarakat adat',
        'Putusan MK No. 35/PUU-X/2012 — hutan adat bukan hutan negara',
        'UU No. 41 Tahun 1999 tentang Kehutanan (setelah MK 35/2012)',
        'Pasal 18B UUD 1945 — pengakuan masyarakat hukum adat',
      ],
      analysis: [
        'Hanya 240.000 dari 40 juta hektar hutan adat yang mendapat pengakuan menunjukkan gap implementasi yang sangat serius',
        'Kriminalisasi pengelolaan hutan adat menggunakan hukum kehutanan lama bertentangan dengan MK 35/2012 dan UNDRIP',
        'Tidak adanya mekanisme registrasi yang efisien dan terjangkau adalah hambatan struktural yang dapat diatasi negara',
        'Konflik perusahaan perkebunan vs masyarakat adat tanpa FPIC adalah pelanggaran hak prosedural yang serius',
        'Putusan MA yang masih menggunakan framing hutan negara menunjukkan inkonsistensi yudisial yang melemahkan MK 35/2012',
      ],
      recommendations: [
        'Percepatan pendaftaran hutan adat melalui mekanisme yang disederhanakan dan gratis bagi masyarakat adat',
        'Moratorium sertifikat perusahaan di wilayah yang mengajukan klaim hutan adat sampai proses verifikasi selesai',
        'Kewajiban FPIC sebagai syarat mutlak sebelum izin usaha di wilayah yang diklaim masyarakat adat',
        'Dekriminalisasi pengelolaan hutan adat — penghentian penuntutan atas aktivitas tradisional yang sah',
        'Pelatihan yudisial untuk hakim MA dan pengadilan tinggi tentang konsekuensi MK 35/2012 dan UNDRIP',
      ],
      synonymMap: {
        'masyarakat adat': ['indigenous peoples', 'komunitas adat', 'masyarakat hukum adat'],
        'FPIC': ['persetujuan bebas tanpa paksaan setelah mendapat informasi', 'free prior and informed consent'],
        'UNDRIP': ['Deklarasi PBB tentang Hak Masyarakat Adat', 'Declaration on Rights of Indigenous Peoples'],
        'hutan adat': ['customary forest', 'hak ulayat hutan', 'wilayah adat'],
        'kriminalisasi': ['pidanisasi', 'pemidanaan', 'kriminalisasi aktivitas adat'],
      },
    },
    bestAnswer: `Hak masyarakat adat atas tanah dan sumber daya alam diakui secara komprehensif dalam UNDRIP (UN Declaration on the Rights of Indigenous Peoples, 2007) — instrumen yang Indonesia dukung meski tidak mengikat secara hukum. UNDRIP Pasal 26 mengakui hak masyarakat adat atas tanah dan sumber daya yang secara tradisional dimiliki, diduduki, atau digunakan. Pasal 32 menetapkan kewajiban Free, Prior, and Informed Consent (FPIC) sebelum negara atau perusahaan menjalankan proyek yang memengaruhi wilayah adat.

Putusan MK 35/2012 adalah terobosan konstitusional yang mengakui FPIC dan hak masyarakat adat di tingkat domestik — ia menyelaraskan hukum Indonesia dengan UNDRIP. Namun, gap antara pengakuan konstitusional dan implementasi administratif adalah kegagalan sistemik yang serius.

Hanya 240.000 dari estimasi 40 juta hektar hutan adat yang mendapat pengakuan formal menunjukkan bahwa mekanisme registrasi yang ada tidak efektif. Kriminalisasi pengelolaan hutan adat menggunakan hukum kehutanan yang seharusnya sudah tidak berlaku pasca-MK 35/2012 adalah pelanggaran eksplisit putusan MK dan UNDRIP. Konflik perusahaan perkebunan dan pertambangan dengan masyarakat adat tanpa proses FPIC adalah pelanggaran hak prosedural yang terus berulang.

Inkonsistensi putusan Mahkamah Agung yang masih menggunakan framing "hutan negara" menunjukkan bahwa pelanggaran tidak hanya terjadi di level eksekutif, tetapi juga di level yudisial.

Rekomendasi: (1) Mekanisme pendaftaran hutan adat yang disederhanakan dan gratis; (2) Moratorium izin baru di wilayah yang mengajukan klaim adat; (3) Kewajiban FPIC sebagai syarat izin usaha di wilayah adat; (4) Dekriminalisasi pengelolaan hutan adat; (5) Pelatihan yudisial hakim tentang MK 35/2012 dan UNDRIP.`,
    explanation: `Soal ini menguji pemahaman hak masyarakat adat dan implementasi MK 35/2012. Poin kunci: (1) UNDRIP dan FPIC sebagai kerangka HAM internasional; (2) MK 35/2012 sebagai terobosan konstitusional; (3) Implementation gap yang serius; (4) Kriminalisasi sebagai pelanggaran aktif; (5) Rekomendasi percepatan pengakuan. Putusan MK 35/2012 dipilih karena merupakan kasus di mana hukum sudah benar tetapi implementasi gagal — tantangan HAM yang lebih umum dari sekadar ketiadaan hukum.`,
  },
  {
    id: 59,
    topicNumber: 11,
    topicName: 'HAM Berbahasa Inggris',
    topicTag: 'English HAM',
    isEnglish: true,
    scenario: `Indonesia is the world's largest palm oil producer, supplying approximately 55% of global palm oil demand. While the industry employs millions of workers and contributes significantly to export revenue, it has been linked to serious human rights concerns: displacement of indigenous communities without Free, Prior, and Informed Consent (FPIC); land conflicts in Kalimantan, Sumatra, and Papua; labor rights violations including use of forced labor and child labor on some plantations; deforestation destroying critical biodiversity habitats; and violence against community members and activists who resist land seizures. International pressure has mounted: the EU's Deforestation Regulation (2023) requires supply chain due diligence, and major global buyers have adopted zero-deforestation commitments. Indonesia's government has defended the industry as critical to development and poverty reduction, while calling external scrutiny "discriminatory" against developing economies.`,
    question: `Based on the scenario above, analyze the human rights obligations of palm oil companies and the Indonesian government under the UN Guiding Principles on Business and Human Rights (UNGP). Evaluate the effectiveness of voluntary certification schemes (such as RSPO) versus mandatory human rights due diligence regulation in addressing palm oil industry human rights violations. Recommend a comprehensive business and human rights framework for Indonesia's palm oil sector.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'UNGP',
        'UN Guiding Principles',
        'business and human rights',
        'due diligence',
        'FPIC',
        'free prior and informed consent',
        'supply chain',
        'RSPO',
        'mandatory regulation',
        'voluntary certification',
        'state duty to protect',
        'corporate responsibility to respect',
        'access to remedy',
        'forced labor',
        'deforestation',
        'EU regulation',
        'indigenous rights',
      ],
      concepts: [
        'UNGP three-pillar framework: state duty to protect, corporate responsibility to respect, and access to remedy',
        'Mandatory human rights due diligence (mHRDD) as emerging international standard more effective than voluntary schemes',
        'FPIC as a non-negotiable procedural right for indigenous communities affected by business activities',
        'Supply chain accountability as extension of corporate human rights responsibility beyond direct operations',
        'Tensions between national development interests and international human rights obligations in resource extraction',
      ],
      legalBasis: [
        'UN Guiding Principles on Business and Human Rights (Ruggie Framework, 2011)',
        'UNDRIP Article 32 — FPIC requirement for projects affecting indigenous peoples\' lands',
        'ILO Convention No. 138 and 182 — child labor prohibition',
        'ILO Convention No. 29 and 105 — forced labor prohibition',
        'EU Corporate Sustainability Due Diligence Directive (CSDDD) and EU Deforestation Regulation (2023)',
      ],
      analysis: [
        'RSPO and other voluntary certification schemes cover limited acreage and have weak enforcement — documented violations continue in certified plantations',
        'UNGP places due diligence responsibility on companies regardless of whether host state enforces it',
        'State duty to protect requires Indonesia to regulate corporate behavior, not only react to violations after they occur',
        'EU Deforestation Regulation creates market-based incentive that may prove more effective than domestic regulation alone',
        'Access to remedy pillar is the weakest in Indonesia — affected communities have limited meaningful recourse against large corporations',
      ],
      recommendations: [
        'Indonesia adopt mandatory human rights due diligence legislation for palm oil supply chains aligned with UNGP',
        'Strengthen FPIC requirements as prerequisite for all new concessions in areas with indigenous or customary land claims',
        'Independent grievance mechanisms accessible to affected communities, including non-judicial remedies',
        'Government engagement with EU Deforestation Regulation as opportunity to improve domestic standards rather than diplomatic resistance',
        'Multi-stakeholder monitoring body including indigenous representatives, civil society, and companies to oversee compliance',
      ],
      synonymMap: {
        'due diligence': ['human rights due diligence', 'HRDD', 'supply chain due diligence'],
        'FPIC': ['free prior and informed consent', 'community consent'],
        'UNGP': ['Ruggie Framework', 'UN Guiding Principles', 'protect respect remedy'],
        'mandatory regulation': ['binding legislation', 'mHRDD', 'mandatory due diligence'],
        'access to remedy': ['grievance mechanisms', 'remediation', 'accountability mechanisms'],
      },
    },
    bestAnswer: `The UN Guiding Principles on Business and Human Rights (UNGP/Ruggie Framework, 2011) establishes a three-pillar framework applicable to Indonesia's palm oil industry: the state duty to protect human rights from corporate abuses, the corporate responsibility to respect human rights, and access to remedy for affected people.

Under the first pillar, Indonesia has an obligation to regulate palm oil companies operating within its jurisdiction — this includes enacting laws that require companies to conduct human rights due diligence, establishing effective enforcement mechanisms, and ensuring that concession-granting processes incorporate FPIC requirements for indigenous territories. The state cannot delegate its human rights obligations to voluntary industry schemes and then claim it has fulfilled its duty.

Under the second pillar, palm oil companies have a responsibility to "know and show" — to identify, prevent, and address human rights risks in their operations and supply chains. This applies regardless of whether the host state enforces applicable laws. UNGP Pillar Two explicitly states that corporate responsibility to respect exists independently of state capacity or willingness to act.

The comparison between RSPO and mandatory regulation reveals a fundamental limitation of voluntary certification: companies participate because it provides market access advantages, but enforcement is weak, coverage is limited, and conflicts of interest are inherent when the certifying body is funded by the industry it certifies. Studies consistently show ongoing violations in RSPO-certified plantations. Mandatory human rights due diligence legislation — as now required by the EU's Corporate Sustainability Due Diligence Directive — represents a more effective approach because it creates binding obligations with legal consequences.

The EU Deforestation Regulation (2023) creates a significant market incentive for Indonesian palm oil producers to improve supply chain practices. Rather than treating this as discriminatory external pressure, Indonesia should leverage it as an opportunity to build a mandatory domestic due diligence framework that improves human rights outcomes and maintains market access simultaneously.

Recommendations: (1) Enact mandatory human rights due diligence legislation for palm oil supply chains aligned with UNGP; (2) Strengthen FPIC as a legal prerequisite for all new concessions in areas with indigenous land claims; (3) Establish independent, accessible non-judicial grievance mechanisms for affected communities; (4) Engage constructively with EU Deforestation Regulation rather than opposing it; (5) Multi-stakeholder monitoring body including indigenous representatives in compliance oversight.`,
    explanation: `This question tests understanding of the UNGP framework in the context of a major extractive industry. Key points: (1) Three-pillar UNGP framework applied to palm oil; (2) Voluntary vs mandatory due diligence — why mHRDD is more effective; (3) FPIC as non-negotiable for indigenous lands; (4) State duty to protect as independent from corporate responsibility; (5) EU regulations as market incentive vs diplomatic friction. The palm oil industry was selected as a paradigmatic case of business and human rights tensions in developing economies.`,
  },
  {
    id: 60,
    topicNumber: 8,
    topicName: 'Mekanisme Penanganan Dugaan Pelanggaran HAM',
    topicTag: 'Penegakan HAM',
    isEnglish: false,
    scenario: `Wasior (Papua Barat, 2001) dan Wamena (Papua, 2003) adalah dua peristiwa yang ditetapkan Komnas HAM sebagai pelanggaran HAM berat yang melibatkan operasi militer terhadap warga sipil. Dalam peristiwa Wasior, dugaan penyiksaan, pembunuhan, dan penghilangan paksa terjadi dalam konteks operasi militer setelah penyerangan pos polisi. Dalam peristiwa Wamena, terjadi pembunuhan, penghilangan paksa, dan pengungsian massal warga sipil Papua. Komnas HAM telah menyerahkan berkas penyelidikan kepada Jaksa Agung, namun berkas tersebut dikembalikan berkali-kali dengan alasan "tidak lengkap". Jaksa Agung belum pernah membawa kasus ini ke Pengadilan HAM. Keluarga korban telah berjuang selama lebih dari dua dekade, dengan bantuan KONTRAS dan organisasi HAM lainnya, tanpa kepastian hukum. Pola ini — penyelidikan Komnas HAM tetapi penuntutan terhalang di Jaksa Agung — juga terlihat dalam kasus-kasus HAM berat lainnya di Indonesia.`,
    question: `Berdasarkan skenario di atas, analisis mekanisme penuntutan pelanggaran HAM berat di Indonesia dan hambatan strukturalnya. Evaluasi kewajiban negara untuk menyelidiki, menuntut, dan memberikan reparasi kepada korban berdasarkan hukum HAM internasional, serta rekomendasikan reformasi yang diperlukan untuk mengatasi impunitas sistemik.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'pelanggaran HAM berat',
        'Komnas HAM',
        'Jaksa Agung',
        'Pengadilan HAM',
        'impunitas',
        'penghilangan paksa',
        'penyiksaan',
        'hak atas kebenaran',
        'hak atas keadilan',
        'hak atas reparasi',
        'ICCPR',
        'CAT',
        'non-derogable',
        'UU Pengadilan HAM',
        'transitional justice',
        'akuntabilitas',
      ],
      concepts: [
        'Kewajiban negara untuk menyelidiki, menuntut, menghukum, dan memberikan reparasi (investigate, prosecute, punish, remedy) dalam kasus pelanggaran HAM berat',
        'Impunitas sebagai pelanggaran kewajiban negara yang aktif — bukan sekadar "kegagalan" tetapi pilihan yang memiliki konsekuensi HAM',
        'Hak atas kebenaran, keadilan, dan reparasi sebagai tiga pilar utama hak korban dalam hukum HAM internasional',
        'Hambatan struktural penuntutan HAM berat di Indonesia: interaksi antara UU Pengadilan HAM dan kekuasaan Jaksa Agung yang tidak diawasi',
        'Transitional justice sebagai kerangka untuk mengatasi pelanggaran masa lalu secara sistematis',
      ],
      legalBasis: [
        'ICCPR Pasal 2 (3) — kewajiban negara menyediakan pemulihan efektif bagi korban pelanggaran HAM',
        'Konvensi Menentang Penyiksaan (CAT) — kewajiban menyelidiki dan menuntut penyiksaan',
        'Deklarasi PBB tentang Penghilangan Paksa 1992',
        'UU No. 26 Tahun 2000 tentang Pengadilan HAM',
        'UN Basic Principles on the Right to a Remedy and Reparation (2005)',
      ],
      analysis: [
        'Pola berkas dikembalikan Jaksa Agung berkali-kali tanpa penuntutan adalah bentuk impunitas institusional yang dilindungi oleh desain sistem',
        'UU Pengadilan HAM memberikan kewenangan penuntutan eksklusif kepada Jaksa Agung tanpa mekanisme pengawasan atau batas waktu',
        'Lebih dari dua dekade tanpa kepastian hukum adalah pelanggaran aktif hak korban atas kebenaran, keadilan, dan reparasi',
        'Pola yang berulang di berbagai kasus HAM berat menunjukkan ini adalah masalah sistemik, bukan kasus individual',
        'Tidak adanya mekanisme alternatif seperti komisi kebenaran membuat keluarga korban tidak memiliki pilihan selain menunggu proses yang macet',
      ],
      recommendations: [
        'Amandemen UU Pengadilan HAM untuk memberikan mekanisme pengawasan independen terhadap keputusan Jaksa Agung dalam penuntutan HAM berat',
        'Pembentukan komisi kebenaran nasional sebagai mekanisme transitional justice yang tidak bergantung pada penuntutan pidana',
        'Mekanisme reparasi untuk korban pelanggaran HAM berat yang dapat diakses tanpa bergantung pada putusan pengadilan pidana',
        'Batas waktu yang mengikat bagi Jaksa Agung untuk menindaklanjuti berkas Komnas HAM dengan mekanisme sanksi',
        'Partisipasi bermakna korban dan keluarga dalam proses rekonsiliasi dan reparasi',
      ],
      synonymMap: {
        'impunitas': ['kekebalan hukum', 'bebas dari tuntutan', 'impunity'],
        'penghilangan paksa': ['enforced disappearance', 'hilang paksa'],
        'reparasi': ['pemulihan', 'ganti rugi korban', 'kompensasi korban'],
        'transitional justice': ['keadilan transisional', 'proses keadilan masa lalu'],
        'pelanggaran HAM berat': ['gross human rights violations', 'kejahatan HAM serius'],
      },
    },
    bestAnswer: `Kasus Wasior dan Wamena adalah cerminan dari masalah sistemik yang paling serius dalam penegakan HAM Indonesia: impunitas struktural dalam kasus pelanggaran HAM berat yang melibatkan aparat negara.

Hukum HAM internasional menetapkan kewajiban negara yang jelas dalam kasus pelanggaran serius: negara wajib menyelidiki secara efektif, menuntut dan menghukum pelaku, dan memberikan reparasi kepada korban. ICCPR Pasal 2 (3) mewajibkan negara menyediakan pemulihan yang efektif. Konvensi Menentang Penyiksaan (CAT) mewajibkan penyelidikan dan penuntutan penyiksaan tanpa pengecualian. UN Basic Principles on Remedy and Reparation (2005) menguraikan komponen reparasi yang lengkap: restitusi, kompensasi, rehabilitasi, satisfaksi, dan jaminan non-recurrence.

Hambatan struktural dalam kasus ini bukan semata-mata karena kurangnya bukti — Komnas HAM telah menyerahkan berkas penyelidikan. Masalahnya adalah desain kelembagaan UU No. 26 Tahun 2000 tentang Pengadilan HAM yang memberikan kewenangan penuntutan eksklusif kepada Jaksa Agung tanpa mekanisme pengawasan independen, tanpa batas waktu, dan tanpa sanksi jika berkas ditolak berkali-kali. Ini menciptakan bottleneck yang dapat digunakan untuk memblokir penuntutan tanpa harus secara eksplisit menolaknya.

Lebih dari dua dekade tanpa kepastian hukum adalah pelanggaran aktif hak korban atas kebenaran, keadilan, dan reparasi — bukan sekadar keterlambatan administratif. Pola yang sama terulang dalam kasus Trisakti-Semanggi, Talangsari, dan kasus HAM berat lainnya menunjukkan ini adalah masalah struktural yang disengaja, bukan ketidakmampuan.

Rekomendasi: (1) Amandemen UU Pengadilan HAM untuk menetapkan mekanisme pengawasan independen atas keputusan Jaksa Agung dalam perkara HAM berat; (2) Pembentukan Komisi Kebenaran dan Rekonsiliasi (KKR) sebagai jalur non-pidana untuk pengakuan, kebenaran, dan reparasi; (3) Mekanisme reparasi langsung bagi korban yang tidak bergantung pada putusan pidana; (4) Batas waktu yang mengikat dengan sanksi bagi Jaksa Agung; (5) Jaminan partisipasi bermakna korban dalam proses apapun yang diambil.`,
    explanation: `Soal ini menguji pemahaman tentang impunitas sistemik dalam kasus pelanggaran HAM berat Indonesia. Poin kunci: (1) Kewajiban negara investigate-prosecute-punish-remedy; (2) Hambatan struktural UU Pengadilan HAM; (3) Hak korban atas kebenaran, keadilan, reparasi; (4) Pola sistemik vs kasus individual; (5) Transitional justice sebagai jalur alternatif. Wasior-Wamena dipilih karena menunjukkan bagaimana impunitas dijaga oleh desain kelembagaan, bukan hanya political will individu — masalah yang memerlukan reformasi struktural.`,
  },
];
