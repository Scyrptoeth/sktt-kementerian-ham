import { Question } from '../types';

export const paket3Questions: Question[] = [
  {
    id: 25,
    topicNumber: 1,
    topicName: 'Pengantar Hak Asasi Manusia',
    topicTag: 'HAM Dasar',
    isEnglish: false,
    scenario: `Pada Februari 2022, sebuah video viral memperlihatkan seorang tersangka kasus pencurian di Sampit, Kalimantan Tengah, mengalami luka-luka serius setelah ditahan di kantor polisi. Keluarga korban melaporkan bahwa tersangka dipukul, disetrum, dan diancam oleh oknum anggota polisi selama pemeriksaan untuk mendapatkan pengakuan. Dokter forensik independen mengonfirmasi terdapat bekas luka yang konsisten dengan penyiksaan fisik. Komnas HAM menyatakan kejadian ini merupakan bentuk penyiksaan yang dilarang secara absolut dan tidak dapat dibenarkan oleh keadaan apapun. Kasus ini kemudian menjadi perdebatan publik tentang praktik pemaksaan pengakuan yang masih terjadi di lembaga penegak hukum Indonesia.`,
    question: `Berdasarkan skenario di atas, jelaskan mengapa larangan penyiksaan merupakan hak non-derogable dalam hukum HAM internasional dan nasional. Kemudian, analisis implikasi hukum dan HAM dari praktik pemaksaan pengakuan, serta rekomendasi reformasi yang diperlukan untuk mencegah terulangnya kasus serupa dalam sistem penegakan hukum Indonesia.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'non-derogable',
        'penyiksaan',
        'larangan absolut',
        'CAT',
        'Konvensi Menentang Penyiksaan',
        'pemaksaan pengakuan',
        'hak atas integritas fisik',
        'prinsip miranda',
        'praduga tak bersalah',
        'barang bukti',
        'inkuisitori',
        'akusatori',
        'peradilan yang adil',
        'habeas corpus',
        'impunitas',
        'mekanisme pengawasan',
        'Komnas HAM',
        'Ombudsman',
      ],
      concepts: [
        'Hak non-derogable sebagai hak yang tidak dapat dikurangi dalam kondisi apapun',
        'Penyiksaan sebagai kejahatan luar biasa yang tidak mengenal kedaluwarsa',
        'Sistem adversarial vs inkuisitori dalam konteks perlindungan hak tersangka',
        'Tanggung jawab negara (state responsibility) dalam tindakan aparat',
        'Prinsip due process dan fair trial sebagai bagian HAM fundamental',
      ],
      legalBasis: [
        'Pasal 28I UUD 1945 — hak non-derogable tidak dapat dikurangi dalam keadaan apapun',
        'UU No. 5 Tahun 1998 tentang Ratifikasi CAT (Konvensi Menentang Penyiksaan)',
        'Pasal 33-34 UU No. 39 Tahun 1999 tentang HAM — larangan penyiksaan',
        'KUHAP Pasal 52-55 — hak tersangka dan terdakwa',
        'Pasal 7 ICCPR — larangan penyiksaan dan perlakuan tidak manusiawi',
      ],
      analysis: [
        'Praktik pemaksaan pengakuan mencerminkan warisan sistem inkuisitori yang tidak menghormati hak tersangka',
        'Impunitas oknum aparat yang melakukan penyiksaan memperparah budaya kekerasan institusional',
        'Bukti yang diperoleh melalui penyiksaan tidak sah secara hukum dan merusak integritas peradilan',
        'Kerentanan tersangka dalam tahanan tanpa akses kuasa hukum meningkatkan risiko penyiksaan',
      ],
      recommendations: [
        'Penerapan mekanisme pengawasan independen di seluruh tempat penahanan (independent monitoring)',
        'Reformasi sistem pembuktian: penghapusan pengakuan sebagai alat bukti utama',
        'Kewajiban akses kuasa hukum sejak penangkapan pertama (access to counsel)',
        'Pembentukan badan independen penerima pengaduan penyiksaan di luar Polri',
        'Pelatihan HAM komprehensif bagi seluruh anggota penegak hukum',
      ],
      synonymMap: {
        'penyiksaan': ['torture', 'penganiayaan', 'kekerasan fisik', 'tindak kekerasan'],
        'non-derogable': ['tidak dapat dikurangi', 'tidak bisa dibatasi', 'absolut', 'mutlak'],
        'pemaksaan pengakuan': ['coercive confession', 'pengakuan paksa', 'interogasi paksa'],
        'CAT': ['Konvensi Menentang Penyiksaan', 'Convention Against Torture', 'UN CAT'],
        'impunitas': ['kebal hukum', 'tidak dihukum', 'bebas dari sanksi'],
      },
    },
    bestAnswer: `Larangan penyiksaan merupakan hak non-derogable dalam hukum HAM internasional karena sifatnya yang absolut — tidak dapat dikurangi, dibatasi, atau dibenarkan dalam kondisi apapun, termasuk perang, darurat nasional, atau ancaman keamanan. Pasal 7 ICCPR dan Pasal 2 CAT (yang diratifikasi Indonesia melalui UU No. 5 Tahun 1998) secara tegas menyatakan bahwa tidak ada pengecualian terhadap larangan ini. Pasal 28I UUD 1945 juga mengakui hak ini sebagai hak yang tidak dapat dikurangi dalam keadaan apapun, menempatkan larangan penyiksaan sebagai norma konstitusional tertinggi.

Praktik pemaksaan pengakuan dalam kasus Sampit menimbulkan implikasi hukum dan HAM berlapis. Secara hukum, pengakuan yang diperoleh melalui penyiksaan tidak sah sebagai alat bukti — KUHAP mensyaratkan keterangan tersangka harus diberikan secara bebas tanpa tekanan (Pasal 52). Penggunaan bukti tersebut dalam persidangan melanggar hak atas peradilan yang adil (fair trial) dan merusak integritas sistem peradilan. Secara HAM, tindakan oknum polisi tersebut merupakan pelanggaran langsung terhadap hak atas integritas fisik dan martabat manusia, serta mencerminkan kegagalan negara memenuhi kewajiban positifnya melindungi warga dari penyiksaan oleh aparatnya sendiri.

Akar masalah ini terletak pada warisan sistem inkuisitori yang menempatkan pengakuan sebagai "ratu bukti" (regina probationum) — mendorong aparat untuk mengutamakan pengakuan tersangka dibanding investigasi berbasis bukti. Impunitas oknum yang melakukan penyiksaan karena lemahnya mekanisme pengawasan internal memperparah masalah ini.

Reformasi yang diperlukan meliputi: (1) Pemasangan CCTV di seluruh ruang interogasi dengan akses independen sebagai mekanisme pengawasan; (2) Reformasi sistem pembuktian — pengakuan tidak boleh dijadikan alat bukti utama, sesuai dengan sistem akusatori modern; (3) Jaminan akses kuasa hukum sejak penangkapan pertama tanpa kecuali; (4) Pembentukan mekanisme pengaduan independen di luar Polri untuk menangani dugaan penyiksaan; (5) Pemberian mandat Subkomite Pencegahan Penyiksaan (SPT) di Indonesia sebagai bagian implementasi OPCAT; serta (6) Pelatihan HAM yang sistematis dan terukur bagi seluruh aparat penegak hukum dengan evaluasi berkala.`,
    explanation: `Soal ini menguji pemahaman tentang sifat absolut larangan penyiksaan sebagai jus cogens dalam hukum internasional. Poin kunci: (1) Perbedaan antara hak derogable dan non-derogable; (2) CAT dan ratifikasinya oleh Indonesia; (3) Implikasi praktis pemaksaan pengakuan terhadap due process; (4) Kaitan antara sistem pembuktian dengan risiko penyiksaan; (5) Mekanisme pencegahan konkret (OPCAT, pengawasan independen, akses kuasa hukum). Jawaban terbaik menunjukkan pemahaman bahwa penyiksaan bukan hanya masalah etika, tetapi pelanggaran norma hukum yang paling fundamental dalam HAM.`,
  },
  {
    id: 26,
    topicNumber: 2,
    topicName: 'Pengenalan Badan-Badan HAM',
    topicTag: 'Kelembagaan HAM',
    isEnglish: false,
    scenario: `Kasus korupsi proyek e-KTP yang merugikan negara sekitar Rp 2,3 triliun melibatkan sejumlah pejabat tinggi, anggota DPR, dan pengusaha. Lembaga Perlindungan Saksi dan Korban (LPSK) memainkan peran krusial dalam perkara ini — memberikan perlindungan kepada para saksi kunci yang menghadapi tekanan dan ancaman dari pihak-pihak yang berkepentingan. Salah satu saksi kunci mengundurkan diri dari programnya karena merasa tidak mendapat perlindungan memadai setelah menerima ancaman terhadap keluarganya. LPSK dikritik karena keterbatasan sumber daya, kewenangan, dan kapasitas perlindungan fisik. Di sisi lain, sejumlah saksi yang berhasil dilindungi LPSK memberikan kesaksian penting yang membantu proses hukum.`,
    question: `Berdasarkan skenario di atas, jelaskan peran dan fungsi LPSK sebagai lembaga perlindungan saksi dan korban dalam sistem penegakan HAM dan hukum di Indonesia. Analisis tantangan struktural yang dihadapi LPSK dalam kasus korupsi besar, dan rekomendasikan penguatan kelembagaan LPSK agar dapat menjalankan mandatnya secara efektif.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'LPSK',
        'Lembaga Perlindungan Saksi dan Korban',
        'whistleblower',
        'justice collaborator',
        'perlindungan fisik',
        'perlindungan psikologis',
        'restitusi',
        'kompensasi',
        'hak saksi',
        'hak korban',
        'anti-intimidasi',
        'non-retaliation',
        'UU Perlindungan Saksi dan Korban',
        'KPK',
        'independensi kelembagaan',
        'anggaran memadai',
      ],
      concepts: [
        'LPSK sebagai lembaga independen pelindung hak saksi dan korban',
        'Justice collaborator sebagai instrumen pemberantasan korupsi',
        'Perlindungan saksi sebagai bagian integral hak atas keadilan',
        'Tanggung jawab negara dalam memastikan saksi dapat bersaksi tanpa rasa takut',
        'Sinergi antar lembaga (LPSK-KPK-Polri-Kejaksaan) dalam perlindungan saksi',
      ],
      legalBasis: [
        'UU No. 13 Tahun 2006 jo. UU No. 31 Tahun 2014 tentang Perlindungan Saksi dan Korban',
        'SEMA No. 4 Tahun 2011 tentang Perlakuan bagi Pelapor Tindak Pidana dan Saksi Pelaku',
        'UNCAC (United Nations Convention Against Corruption) Pasal 32-33 tentang perlindungan saksi',
        'Pasal 28D UUD 1945 — hak atas perlindungan dan kepastian hukum yang adil',
      ],
      analysis: [
        'Keterbatasan anggaran LPSK mengakibatkan kapasitas perlindungan fisik yang tidak memadai',
        'Kewenangan LPSK yang bergantung pada permintaan penegak hukum menciptakan ketidakpastian perlindungan',
        'Tekanan politik dalam kasus korupsi besar melampaui kemampuan perlindungan LPSK saat ini',
        'Kurangnya koordinasi formal antara LPSK dan lembaga penegak hukum lainnya melemahkan efektivitas',
      ],
      recommendations: [
        'Peningkatan anggaran LPSK yang proporsional dengan jumlah kasus yang ditangani',
        'Perluasan kewenangan LPSK untuk memberikan perlindungan proaktif tanpa menunggu permohonan',
        'Pembentukan unit khusus perlindungan saksi kasus korupsi dan kejahatan terorganisir',
        'Penguatan kerjasama protokol antara LPSK, KPK, Polri, dan Kejaksaan',
        'Program relokasi dan perlindungan identitas untuk saksi berisiko tinggi',
      ],
      synonymMap: {
        'LPSK': ['Lembaga Perlindungan Saksi dan Korban', 'lembaga perlindungan saksi'],
        'whistleblower': ['pelapor', 'pelapor tindak pidana', 'peniup peluit'],
        'justice collaborator': ['pelaku yang bekerja sama', 'saksi mahkota'],
        'restitusi': ['ganti rugi dari pelaku', 'pemulihan dari pelaku'],
        'kompensasi': ['ganti rugi dari negara', 'santunan'],
      },
    },
    bestAnswer: `LPSK adalah lembaga negara independen yang dibentuk berdasarkan UU No. 13 Tahun 2006 (diubah UU No. 31 Tahun 2014) dengan mandat melindungi saksi dan korban dalam proses peradilan pidana. Fungsi utamanya mencakup: perlindungan fisik (pengawalan, relokasi), perlindungan hukum (pendampingan, anti-intimidasi), bantuan psikologis, serta fasilitasi kompensasi dan restitusi bagi korban. Dalam konteks penegakan HAM, LPSK berperan memastikan hak atas keadilan tidak terhalang oleh rasa takut — sebuah prasyarat fundamental agar sistem peradilan dapat bekerja adil.

Dalam kasus e-KTP, LPSK menghadapi tantangan struktural yang serius. Pertama, keterbatasan anggaran menyebabkan kapasitas perlindungan fisik sangat terbatas — LPSK tidak memiliki infrastruktur pengamanan yang setara dengan ancaman yang dihadapi saksi dalam kasus korupsi berskala nasional. Kedua, kewenangan LPSK yang bersifat reaktif (hanya bergerak setelah ada permohonan) menciptakan kekosongan perlindungan pada periode paling rentan. Ketiga, tekanan politik dari pihak-pihak berkepentingan melampaui kapasitas satu lembaga — tanpa dukungan sistemik dari KPK, Polri, dan Kejaksaan, perlindungan individual menjadi tidak efektif. Keempat, tidak adanya program relokasi permanen membuat saksi tetap rentan setelah persidangan.

Mundurnya saksi kunci merupakan bukti nyata kegagalan sistemik — bukan kegagalan LPSK semata, melainkan kegagalan sistem perlindungan saksi secara keseluruhan.

Penguatan kelembagaan LPSK memerlukan pendekatan multi-dimensi: (1) Penambahan anggaran yang signifikan dan proporsional dengan cakupan kasus — termasuk pembangunan rumah aman (safe house) permanen di berbagai provinsi; (2) Revisi UU untuk memberikan kewenangan proaktif: LPSK dapat memberikan perlindungan sementara tanpa harus menunggu permohonan dalam kasus berisiko tinggi; (3) Pembentukan Unit Koordinasi Perlindungan Saksi Lintas Lembaga yang melibatkan LPSK, KPK, Polri, Kejaksaan dengan protokol respons darurat; (4) Program perlindungan identitas (identity protection) dan relokasi jangka panjang untuk saksi ancaman tinggi; serta (5) Harmonisasi standar perlindungan dengan UNCAC Pasal 32-33 yang mengharuskan negara mengambil langkah efektif melindungi saksi korupsi.`,
    explanation: `Soal ini mengukur pemahaman tentang kelembagaan HAM nasional, khususnya LPSK sebagai lembaga yang sering luput dari perhatian. Poin kunci: (1) Dasar hukum dan mandat LPSK; (2) Perbedaan fungsi perlindungan fisik, hukum, dan psikologis; (3) Tantangan struktural yang bersifat sistemik bukan personal; (4) Kaitan dengan UNCAC sebagai instrumen internasional; (5) Rekomendasi yang konkret dan operasional. Kasus e-KTP dipilih karena menunjukkan bagaimana perlindungan saksi menjadi bottleneck dalam pemberantasan korupsi berskala besar.`,
  },
  {
    id: 27,
    topicNumber: 3,
    topicName: 'Pengenalan Instrumen Hak Asasi Manusia',
    topicTag: 'Instrumen HAM',
    isEnglish: false,
    scenario: `Indonesia meratifikasi CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women) pada tahun 1984 melalui UU No. 7 Tahun 1984. Namun, 40 tahun setelah ratifikasi, berbagai indikator menunjukkan kesenjangan implementasi yang signifikan: keterwakilan perempuan di DPR masih di bawah 25%, angka kematian ibu masih tinggi di daerah tertinggal, dan berbagai regulasi daerah yang diskriminatif terhadap perempuan masih berlaku. Komite CEDAW dalam Concluding Observations terbarunya menyoroti kegagalan Indonesia menjalankan kewajiban pelaporan yang tepat waktu dan implementasi rekomendasi sebelumnya. Kementerian Pemberdayaan Perempuan dan Perlindungan Anak (KemenPPPA) telah menginisiasi kebijakan pengarusutamaan gender (gender mainstreaming) namun pelaksanaannya tidak merata antar kementerian.`,
    question: `Berdasarkan skenario di atas, jelaskan substansi kewajiban negara berdasarkan CEDAW dan mekanisme pengawasan internasionalnya. Kemudian analisis kesenjangan antara ratifikasi dan implementasi CEDAW di Indonesia, serta rekomendasi kebijakan untuk memperkuat pengarusutamaan gender di tingkat nasional dan daerah.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'CEDAW',
        'pengarusutamaan gender',
        'gender mainstreaming',
        'diskriminasi berbasis gender',
        'Komite CEDAW',
        'Concluding Observations',
        'shadow report',
        'laporan negara',
        'gender responsive budgeting',
        'keterwakilan perempuan',
        'angka kematian ibu',
        'regulasi diskriminatif',
        'Optional Protocol CEDAW',
        'CEDAW General Recommendation',
        'interseksionalitas',
        'reservasi CEDAW',
        'non-diskriminasi',
      ],
      concepts: [
        'CEDAW sebagai "bill of rights" perempuan dalam hukum internasional',
        'Kewajiban negara: de jure (hukum) dan de facto (substansif) non-diskriminasi',
        'Pengarusutamaan gender sebagai strategi transformatif, bukan sekadar afirmasi',
        'Mekanisme pelaporan treaty body dan siklus review CEDAW',
        'Interseksionalitas: diskriminasi berlapis perempuan adat, disabilitas, miskin',
      ],
      legalBasis: [
        'UU No. 7 Tahun 1984 tentang Ratifikasi CEDAW',
        'Instruksi Presiden No. 9 Tahun 2000 tentang Pengarusutamaan Gender dalam Pembangunan Nasional',
        'Pasal 27 UUD 1945 — kesetaraan warga negara di depan hukum',
        'Pasal 28H UUD 1945 — hak atas kesejahteraan dan perlakuan yang sama',
        'CEDAW Pasal 2 — kewajiban menghapus diskriminasi secara hukum dan kebijakan',
      ],
      analysis: [
        'Gap implementasi CEDAW mencerminkan fragmentasi kewenangan antara KemenPPPA dan kementerian sektoral',
        'Regulasi daerah yang diskriminatif menunjukkan konflik norma antara otonomi daerah dan kewajiban internasional',
        'Keterwakilan perempuan di bawah 30% mencerminkan hambatan struktural yang memerlukan affirmative action',
        'Kegagalan pelaporan tepat waktu menunjukkan lemahnya mekanisme koordinasi nasional untuk treaty obligations',
      ],
      recommendations: [
        'Pembentukan Focal Point CEDAW di setiap kementerian/lembaga dengan anggaran khusus gender responsive budgeting',
        'Harmonisasi regulasi daerah diskriminatif melalui mekanisme judicial review dan pembinaan Kemendagri',
        'Penguatan kuota 30% keterwakilan perempuan yang efektif dengan sanksi bagi partai yang tidak memenuhi',
        'Aksesi Optional Protocol CEDAW untuk membuka mekanisme komunikasi individual',
        'Keterlibatan CSO dalam proses penyusunan laporan negara (shadow report mechanism)',
      ],
      synonymMap: {
        'CEDAW': ['Konvensi Penghapusan Diskriminasi terhadap Perempuan', 'Konvensi Perempuan'],
        'pengarusutamaan gender': ['gender mainstreaming', 'integrasi perspektif gender', 'responsif gender'],
        'Concluding Observations': ['rekomendasi Komite CEDAW', 'catatan penutup'],
        'shadow report': ['laporan alternatif', 'laporan bayangan', 'laporan CSO'],
        'gender responsive budgeting': ['anggaran responsif gender', 'ARG', 'penganggaran berbasis gender'],
      },
    },
    bestAnswer: `CEDAW, yang diratifikasi Indonesia melalui UU No. 7 Tahun 1984, merupakan instrumen HAM internasional yang paling komprehensif untuk hak-hak perempuan. Kewajiban negara berdasarkan CEDAW bersifat dua dimensi: de jure (menghapus diskriminasi dalam hukum dan regulasi) dan de facto (memastikan kesetaraan substantif dalam kenyataan, bukan sekadar formalitas). CEDAW Pasal 2 mewajibkan negara mengambil semua langkah yang diperlukan, termasuk langkah khusus sementara (affirmative action), untuk menghapus diskriminasi. Pasal 5 bahkan mewajibkan negara mengubah pola sosial dan budaya yang diskriminatif.

Mekanisme pengawasan CEDAW berpusat pada Komite CEDAW yang menerima laporan periodik negara setiap empat tahun. Komite menerbitkan Concluding Observations yang berisi rekomendasi spesifik, yang secara hukum bersifat soft law namun memiliki bobot moral dan politik yang signifikan. Indonesia juga dapat mengaksesi Optional Protocol CEDAW — membuka mekanisme komunikasi individual bagi korban diskriminasi.

Kesenjangan implementasi Indonesia mencerminkan beberapa masalah struktural. Pertama, fragmentasi kewenangan: KemenPPPA tidak memiliki otoritas memaksa kementerian sektoral mengintegrasikan perspektif gender. Kedua, konflik norma: otonomi daerah memungkinkan regulasi lokal yang bertentangan dengan kewajiban CEDAW nasional — ribuan Perda diskriminatif yang muncul pasca-reformasi menunjukkan hal ini. Ketiga, keterwakilan perempuan di DPR yang masih jauh di bawah target 30% mengakibatkan lemahnya advokasi kebijakan pro-perempuan. Keempat, angka kematian ibu yang tinggi di NTT, NTB, dan Papua mencerminkan kegagalan CEDAW Pasal 12 tentang akses kesehatan reproduksi.

Penguatan pengarusutamaan gender memerlukan: (1) Pembentukan focal point gender di setiap kementerian/lembaga yang dilengkapi dengan mandat formal dan anggaran responsif gender (ARG) sebagai instrumen perencanaan; (2) Harmonisasi regulasi daerah — Kemendagri perlu memperkuat mekanisme evaluasi Perda diskriminatif dengan dukungan KemenPPPA; (3) Penguatan implementasi kuota 30% dengan sistem verifikasi yang efektif dan sanksi bagi partai yang tidak memenuhi; (4) Aksesi Optional Protocol CEDAW untuk membuka jalur individual complaint; (5) Pelibatan bermakna LSM dan masyarakat sipil dalam proses penyusunan laporan negara agar Concluding Observations Komite CEDAW lebih akurat dan implementasinya dapat dipantau.`,
    explanation: `Soal ini menguji kemampuan menghubungkan instrumen internasional (CEDAW) dengan implementasi kebijakan nasional. Poin kunci: (1) Dualitas kewajiban de jure dan de facto; (2) Mekanisme treaty body CEDAW; (3) Akar penyebab gap implementasi yang bersifat struktural; (4) Pengarusutamaan gender sebagai strategi (bukan sekadar program); (5) Kaitan antara keterwakilan perempuan dengan kualitas kebijakan. Jawaban terbaik tidak sekadar mendaftar pasal-pasal CEDAW, melainkan menganalisis mengapa 40 tahun ratifikasi belum menghasilkan kesetaraan substantif.`,
  },
  {
    id: 28,
    topicNumber: 4,
    topicName: 'Analisis Kebijakan Publik Berbasis HAM',
    topicTag: 'Kebijakan HAM',
    isEnglish: false,
    scenario: `Victor Mambor, jurnalis senior dan editor Tabloid Jubi dari Papua, menghadapi serangkaian intimidasi, pengawasan, dan ancaman sejak 2020 terkait liputannya tentang pelanggaran HAM dan operasi militer di Papua. Pada 2021, ia dilaporkan ke polisi oleh seorang anggota TNI dengan tuduhan pencemaran nama baik menggunakan UU ITE setelah menerbitkan artikel tentang tindakan militer yang menimbulkan korban sipil. Kasus ini mendapat perhatian internasional dari Komite Perlindungan Jurnalis (CPJ) dan Reporters Without Borders (RSF) yang menempatkan Indonesia sebagai salah satu negara berbahaya bagi jurnalis. Pemerintah pusat menyatakan komitmen pada kebebasan pers, namun akses media nasional dan internasional ke Papua tetap dibatasi secara sistematis.`,
    question: `Berdasarkan skenario di atas, analisis bagaimana kebijakan pembatasan akses media di Papua bertentangan dengan standar HAM internasional tentang kebebasan berekspresi dan pers. Kemudian jelaskan implikasi penggunaan UU ITE sebagai alat kriminalisasi jurnalis, dan rekomendasikan kebijakan publik berbasis HAM untuk melindungi kebebasan pers di daerah konflik.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'kebebasan pers',
        'kebebasan berekspresi',
        'UU ITE',
        'kriminalisasi jurnalis',
        'akses media',
        'Papua',
        'hak publik atas informasi',
        'sensor',
        'perlindungan narasumber',
        'dewan pers',
        'reporter sans frontières',
        'CPJ',
        'pasal pencemaran nama baik',
        'ICCPR Pasal 19',
        'proportionality',
        'necessary in democratic society',
        'media independence',
      ],
      concepts: [
        'Kebebasan pers sebagai enabling right yang memungkinkan akuntabilitas demokratis',
        'Uji tiga bagian (three-part test) pembatasan ekspresi: legalitas, legitimasi, proporsionalitas',
        'UU ITE sebagai hukum yang mengandung chilling effect terhadap kebebasan pers',
        'Perlindungan jurnalis di daerah konflik bersenjata (IHL dan hukum HAM)',
        'Impunitas pelaku kekerasan terhadap jurnalis sebagai ancaman sistemik',
      ],
      legalBasis: [
        'Pasal 28F UUD 1945 — hak atas informasi dan hak menyampaikan informasi',
        'ICCPR Pasal 19 — kebebasan berekspresi dengan three-part test pembatasan',
        'UU No. 40 Tahun 1999 tentang Pers',
        'UU No. 19 Tahun 2016 tentang Perubahan UU ITE (Pasal 27 ayat 3 pencemaran nama baik)',
        'UN Human Rights Committee General Comment No. 34 tentang Pasal 19 ICCPR',
      ],
      analysis: [
        'Pembatasan akses media ke Papua bertentangan dengan ICCPR Pasal 19 karena tidak melewati three-part test (tidak proporsional)',
        'Penggunaan UU ITE dengan pasal karet menciptakan chilling effect yang lebih luas dari target individual',
        'Impunitas bagi pelaku intimidasi jurnalis menunjukkan kegagalan negara melindungi freedom of the press',
        'Pembatasan informasi dari Papua menghalangi akuntabilitas publik atas dugaan pelanggaran HAM',
      ],
      recommendations: [
        'Revisi UU ITE — hapus atau rumuskan ulang pasal pencemaran nama baik agar tidak dapat digunakan untuk kriminalisasi liputan publik',
        'Kebijakan akses media yang transparan ke Papua dengan prosedur jelas dan tidak diskriminatif',
        'Penguatan independensi Dewan Pers sebagai otoritas penyelesaian sengketa pers',
        'Mekanisme perlindungan jurnalis: hotline darurat, protokol keamanan, perlindungan LPSK',
        'Pembentukan mekanisme investigasi independen kasus kekerasan terhadap jurnalis',
      ],
      synonymMap: {
        'kebebasan pers': ['press freedom', 'kemerdekaan pers', 'kebebasan media'],
        'kebebasan berekspresi': ['freedom of expression', 'kebebasan berpendapat'],
        'UU ITE': ['Undang-Undang Informasi dan Transaksi Elektronik', 'UU Informasi Elektronik'],
        'kriminalisasi': ['kriminalisir', 'dijerat hukum', 'dipidanakan'],
        'chilling effect': ['efek penghambat', 'efek jera terhadap kebebasan', 'dampak intimidasi'],
      },
    },
    bestAnswer: `Kebijakan pembatasan akses media ke Papua secara sistematis bertentangan dengan standar HAM internasional. ICCPR Pasal 19 melindungi kebebasan berekspresi dan kebebasan pers, namun mengizinkan pembatasan yang harus melewati three-part test: (1) diatur oleh hukum (lawful), (2) memiliki tujuan yang sah (legitimate aim), dan (3) diperlukan dan proporsional dalam masyarakat demokratis (necessary and proportionate). Pembatasan akses media ke Papua gagal dalam kriteria proporsionalitas — pembatasan blanket yang bersifat umum dan tidak dibatasi waktu tidak dapat dibenarkan sebagai "necessary" untuk tujuan keamanan nasional, terlebih ketika tujuan yang lebih sempit (pembatasan spesifik operasi aktif) dapat melayani kepentingan keamanan yang sama.

UN Human Rights Committee dalam General Comment No. 34 secara eksplisit menyatakan bahwa pembatasan akses jurnalis ke wilayah konflik memerlukan justifikasi yang sangat kuat dan harus bersifat sementara. Kebebasan pers bukan hanya hak jurnalis, melainkan enabling right — hak yang memungkinkan publik mendapatkan informasi tentang akuntabilitas kekuasaan, termasuk dugaan pelanggaran HAM yang hanya dapat terungkap melalui liputan independen.

Penggunaan UU ITE terhadap Victor Mambor menggambarkan masalah struktural yang lebih dalam. Pasal 27 ayat 3 UU ITE tentang pencemaran nama baik memiliki formulasi yang sangat luas dan rentan disalahgunakan. Mahkamah Agung dan Mahkamah Konstitusi telah menegaskan bahwa pasal ini dapat diterapkan bahkan untuk liputan yang berbasis fakta jika dianggap "merugikan kehormatan" seseorang — sebuah standar yang tidak kompatibel dengan perlindungan kebebasan pers internasional. Dampaknya adalah chilling effect yang meluas: jurnalis self-censor, narasumber enggan berbicara, dan informasi publik dari Papua terblokir sistematis.

Kebijakan publik berbasis HAM yang diperlukan meliputi: (1) Revisi substantif UU ITE — Pasal 27 ayat 3 harus dirumuskan ulang dengan standar internasional: hanya berlaku untuk pernyataan yang diketahui palsu, disengaja, dan bukan kepentingan publik; (2) Kebijakan akses media ke Papua yang transparan dan terikat prosedur — bukan kebijaksanaan (discretion) pejabat keamanan; (3) Penguatan independensi Dewan Pers sebagai forum penyelesaian sengketa pers di luar jalur pidana; (4) Mekanisme perlindungan jurnalis yang konkret: akses ke LPSK, protokol keamanan digital, dan investigasi cepat atas ancaman; serta (5) Pembentukan mekanisme monitoring independen kebebasan pers yang melibatkan organisasi pers, akademisi, dan civil society.`,
    explanation: `Soal ini menguji kemampuan menganalisis kebijakan publik (pembatasan media, UU ITE) melalui lensa HAM. Poin kunci: (1) Three-part test ICCPR Pasal 19; (2) Kebebasan pers sebagai enabling right; (3) Chilling effect sebagai dampak sistemik; (4) Spesifisitas Papua sebagai daerah dengan akses terbatas; (5) Rekomendasi kebijakan yang operasional. Jawaban terbaik menunjukkan bahwa masalah bukan pada satu kasus individual, melainkan pada arsitektur kebijakan yang secara sistematis menekan kebebasan pers.`,
  },
  {
    id: 29,
    topicNumber: 5,
    topicName: 'Hak Kelompok Rentan',
    topicTag: 'Kelompok Rentan',
    isEnglish: false,
    scenario: `Di Kabupaten Timor Tengah Selatan (TTS), Nusa Tenggara Timur, ribuan warga mengalami krisis air bersih yang berkepanjangan. Perempuan dan anak-anak berjalan hingga 5 kilometer setiap hari untuk mengambil air dari sumber yang tidak terjamin kebersihannya. Angka stunting di kabupaten ini mencapai 48%, salah satu tertinggi di Indonesia, yang secara langsung terkait dengan kualitas air dan sanitasi yang buruk. LSM lokal melaporkan bahwa anggaran infrastruktur air bersih di daerah ini jauh di bawah standar nasional, sementara keluhan warga kepada pemerintah daerah tidak ditindaklanjuti secara serius selama bertahun-tahun. Kajian UNICEF menunjukkan bahwa krisis air dan sanitasi di NTT berdampak paling parah pada kelompok rentan: anak-anak di bawah 5 tahun, ibu hamil, dan lansia.`,
    question: `Berdasarkan skenario di atas, analisis hak atas air dan sanitasi sebagai hak asasi manusia yang diakui dalam hukum internasional, dan jelaskan kewajiban negara untuk memenuhi hak ini bagi kelompok rentan. Kemudian identifikasi bentuk-bentuk pelanggaran dan kegagalan negara dalam skenario tersebut, serta rekomendasi kebijakan yang berperspektif HAM dan berbasis bukti.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'hak atas air',
        'hak atas sanitasi',
        'ICESCR',
        'General Comment 15',
        'progressive realization',
        'minimum core obligation',
        'stunting',
        'hak atas kesehatan',
        'diskriminasi',
        'kelompok rentan',
        'anggaran memadai',
        'air bersih',
        'sanitasi layak',
        'WASH',
        'SDGs',
        'availability',
        'accessibility',
        'quality',
        'affordability',
      ],
      concepts: [
        'Hak atas air dan sanitasi sebagai derivasi hak atas kehidupan dan kesehatan dalam ICESCR',
        'Kewajiban negara: menghormati, melindungi, memenuhi (respect, protect, fulfill)',
        'Minimum core obligation yang tidak dapat ditangguhkan meski sumber daya terbatas',
        'Non-diskriminasi dan prioritas kelompok rentan dalam pemenuhan hak ekosob',
        'Progressive realization dalam konteks sumber daya negara',
      ],
      legalBasis: [
        'ICESCR Pasal 11 (standar hidup layak) dan Pasal 12 (hak atas kesehatan)',
        'UN General Comment No. 15 (2002) tentang Hak atas Air',
        'Resolusi PBB 64/292 (2010) — hak atas air dan sanitasi sebagai hak asasi manusia',
        'Pasal 28H UUD 1945 — hak atas kesejahteraan lahir batin dan lingkungan yang baik',
        'UU No. 17 Tahun 2019 tentang Sumber Daya Air',
      ],
      analysis: [
        'Anggaran infrastruktur air di bawah standar nasional mencerminkan kegagalan kewajiban memenuhi (obligation to fulfill)',
        'Ketidakresponsifan pemda terhadap keluhan warga melanggar prinsip akuntabilitas dan partisipasi',
        'Beban pengambilan air yang tidak proporsional pada perempuan dan anak mencerminkan dimensi gender dan usia dari krisis',
        'Stunting 48% menunjukkan dampak sistemik yang melampaui sekadar ketidaknyamanan — ini adalah ancaman terhadap hak berkembang anak',
      ],
      recommendations: [
        'Penetapan standar minimum anggaran WASH (water, sanitation, hygiene) dengan mekanisme pengawasan nasional',
        'Program darurat air bersih berbasis hak (rights-based WASH) yang memprioritaskan kelompok paling rentan',
        'Mekanisme pengaduan yang efektif dan responsif di tingkat kabupaten dengan tenggat respons yang diatur hukum',
        'Integrasi program air-sanitasi dengan program penanganan stunting berbasis komunitas',
        'Audit HAM terhadap anggaran daerah untuk infrastruktur dasar kelompok rentan',
      ],
      synonymMap: {
        'hak atas air': ['right to water', 'hak air bersih', 'akses air bersih'],
        'sanitasi': ['sanitasi layak', 'sarana kebersihan', 'fasilitas MCK'],
        'WASH': ['water, sanitation, hygiene', 'air, sanitasi, dan kebersihan'],
        'stunting': ['gagal tumbuh', 'kurang gizi kronis', 'malnutrisi kronis'],
        'minimum core obligation': ['kewajiban minimum inti', 'kewajiban dasar yang tidak bisa ditangguhkan'],
      },
    },
    bestAnswer: `Hak atas air dan sanitasi telah berkembang sebagai hak asasi manusia yang diakui secara internasional. Meski tidak secara eksplisit disebutkan dalam ICESCR, UN Committee on Economic, Social and Cultural Rights melalui General Comment No. 15 (2002) menetapkan bahwa hak atas air merupakan derivasi dari hak atas standar hidup layak (Pasal 11) dan hak atas kesehatan (Pasal 12) ICESCR. Resolusi PBB 64/292 tahun 2010 kemudian secara eksplisit mengakui air bersih dan sanitasi sebagai hak asasi manusia. Standar kualitas hak atas air mencakup empat dimensi: availability (tersedia cukup), accessibility (dapat dijangkau secara fisik dan ekonomi), quality (aman dikonsumsi), dan affordability (terjangkau secara harga).

Kewajiban negara dalam hak ini bersifat segmented: (1) Obligation to respect — negara tidak boleh menghambat akses yang sudah ada; (2) Obligation to protect — mencegah pihak ketiga mengganggu akses air; (3) Obligation to fulfill — mengambil langkah aktif memastikan akses, terutama bagi yang tidak dapat memenuhi sendiri. General Comment No. 15 juga menetapkan minimum core obligation — kewajiban minimum yang harus dipenuhi terlepas dari keterbatasan sumber daya: memastikan akses air minimum untuk kebutuhan hidup dasar bagi kelompok paling rentan.

Skenario TTS menunjukkan beberapa bentuk kegagalan negara: Pertama, anggaran WASH di bawah standar nasional mencerminkan kegagalan obligation to fulfill — negara tidak mengalokasikan sumber daya yang tersedia secara maksimal (maximum available resources) sebagaimana diwajibkan ICESCR. Kedua, non-responsifnya pemda terhadap keluhan bertahun-tahun melanggar prinsip akuntabilitas dan partisipasi yang merupakan elemen HAM. Ketiga, beban tidak proporsional pada perempuan dan anak menunjukkan kegagalan memenuhi prinsip non-diskriminasi dan prioritas kelompok rentan. Keempat, stunting 48% yang terkait langsung dengan kualitas air adalah bukti pelanggaran hak berkembang anak.

Kebijakan berbasis HAM yang diperlukan: (1) Penetapan standar minimum anggaran WASH sebagai persentase APBD dengan mekanisme monitoring nasional — pemerintah pusat perlu menggunakan Dana Alokasi Khusus (DAK) untuk daerah yang gagal; (2) Program darurat air bersih yang memprioritaskan kelompok paling rentan (balita, ibu hamil, lansia) berdasarkan pemetaan risiko; (3) Mekanisme pengaduan berbasis HAM yang responsif dengan tenggat respons yang diatur regulasi; (4) Integrasi lintas program: WASH + stunting + pemberdayaan perempuan karena permasalahan ini saling terkait; (5) Pelibatan komunitas lokal dalam perencanaan infrastruktur air — pendekatan partisipatif terbukti meningkatkan keberlanjutan infrastruktur.`,
    explanation: `Soal ini menguji pemahaman hak ekonomi, sosial, dan budaya — khususnya hak atas air yang sering dianggap bukan "hak" melainkan layanan publik biasa. Poin kunci: (1) Perkembangan hak atas air dalam hukum internasional; (2) Empat dimensi hak atas air; (3) Tiga tingkat kewajiban negara; (4) Minimum core obligation yang tidak dapat ditangguhkan; (5) Kaitan stunting dengan hak anak yang merupakan konsekuensi jangka panjang. Jawaban terbaik menghubungkan dimensi gender (beban pengambilan air pada perempuan) dengan dimensi kesehatan anak (stunting).`,
  },
  {
    id: 30,
    topicNumber: 6,
    topicName: 'HAM dan Teknologi Digital',
    topicTag: 'HAM Digital',
    isEnglish: false,
    scenario: `Pada 2018, sekelompok jemaat Ahmadiyah di Lombok, Nusa Tenggara Barat, mengalami serangkaian serangan: rumah ibadah mereka dibakar, anggota komunitas dipaksa menandatangani surat "pertobatan" oleh pemerintah daerah, dan beberapa keluarga diusir dari tempat tinggal mereka. Media sosial menjadi wadah penyebaran ujaran kebencian yang menggerakkan massa. Pemerintah daerah bersikap pasif bahkan disinyalir beberapa pejabat menghadir acara yang mempersoalkan keberadaan Ahmadiyah. Polisi terlambat merespons dan tidak menangkap pelaku penyerangan. SKB Tiga Menteri 2008 tentang Ahmadiyah yang melarang penyebaran ajaran dianggap oleh sebagian kalangan sebagai legitimasi persekusi. Komnas HAM menyatakan kasus ini sebagai pelanggaran serius hak atas kebebasan beragama dan berkeyakinan.`,
    question: `Berdasarkan skenario di atas, analisis pelanggaran hak atas kebebasan beragama dan berkeyakinan (KBB) yang terjadi dalam kasus Ahmadiyah Lombok. Jelaskan kewajiban negara dalam melindungi KBB termasuk kelompok minoritas, dan rekomendasikan kebijakan berbasis HAM untuk mencegah berulangnya persekusi berbasis agama di Indonesia.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'kebebasan beragama',
        'kebebasan berkeyakinan',
        'KBB',
        'minoritas agama',
        'Ahmadiyah',
        'SKB Tiga Menteri',
        'persekusi',
        'ujaran kebencian',
        'intoleransi',
        'forum internum',
        'forum externum',
        'ICCPR Pasal 18',
        'UN Declaration on Religious Minorities',
        'netralitas negara',
        'pluralisme',
        'non-diskriminasi',
        'perlindungan negara',
      ],
      concepts: [
        'Dualitas KBB: forum internum (keyakinan batin, mutlak) dan forum externum (ekspresi, dapat dibatasi)',
        'Kewajiban negara: netralitas agama, perlindungan dari persekusi, non-diskriminasi',
        'SKB 2008 sebagai kebijakan yang tidak kompatibel dengan standar KBB internasional',
        'Hate speech digital sebagai akselerator kekerasan berbasis agama',
        'Tanggung jawab negara atas tindakan aktor non-negara yang membiarkan persekusi',
      ],
      legalBasis: [
        'Pasal 28E dan 29 UUD 1945 — kebebasan beragama sebagai hak konstitusional',
        'ICCPR Pasal 18 — hak atas kebebasan pikiran, hati nurani, dan agama',
        'UN Declaration on the Rights of Persons Belonging to National or Ethnic, Religious and Linguistic Minorities (1992)',
        'Pasal 156a KUHP tentang penodaan agama (kontroversial karena berpotensi disalahgunakan)',
        'UU No. 39 Tahun 1999 tentang HAM Pasal 22',
      ],
      analysis: [
        'SKB Tiga Menteri 2008 memberikan legitimasi de facto terhadap pembatasan Ahmadiyah yang bertentangan dengan ICCPR Pasal 18',
        'Kepasifan pemerintah daerah dan keterlambatan polisi merupakan bentuk kegagalan obligation to protect',
        'Surat "pertobatan" paksa merupakan pelanggaran forum internum — dimensi yang mutlak dan tidak dapat dibatasi',
        'Pengusiran dari tempat tinggal mencerminkan pelanggaran berlapis: KBB, hak atas tempat tinggal, dan non-diskriminasi',
      ],
      recommendations: [
        'Revisi atau pencabutan SKB Tiga Menteri 2008 yang tidak kompatibel dengan standar KBB internasional',
        'Pelatihan aparat penegak hukum tentang protokol respons cepat dalam kasus persekusi agama',
        'Penguatan regulasi ujaran kebencian yang seimbang: melindungi dari incitement tanpa membungkam kritik',
        'Pembentukan Focal Point KBB di Kementerian Agama dengan mandat koordinasi lintas kementerian',
        'Dialog antaragama yang substantif dan terstruktur berbasis hak, bukan sekadar seremonial',
      ],
      synonymMap: {
        'KBB': ['kebebasan beragama dan berkeyakinan', 'freedom of religion or belief', 'FoRB'],
        'forum internum': ['dimensi internal keyakinan', 'keyakinan batin'],
        'forum externum': ['dimensi eksternal ekspresi agama', 'manifestasi agama'],
        'persekusi': ['penganiayaan', 'kekerasan berbasis agama', 'diskriminasi agama'],
        'SKB Tiga Menteri': ['Surat Keputusan Bersama 2008', 'regulasi Ahmadiyah'],
      },
    },
    bestAnswer: `Kasus Ahmadiyah Lombok mengandung pelanggaran berlapis terhadap hak atas kebebasan beragama dan berkeyakinan (KBB). ICCPR Pasal 18 melindungi KBB dalam dua dimensi: forum internum (kebebasan batin dan keyakinan yang bersifat absolut, tidak dapat dibatasi dalam kondisi apapun) dan forum externum (ekspresi dan manifestasi keyakinan yang dapat dibatasi secara terbatas dengan uji proporsionalitas). Pemaksaan menandatangani surat "pertobatan" merupakan pelanggaran forum internum — dimana negara tidak memiliki kewenangan apapun untuk memaksa seseorang mengubah keyakinannya. Ini adalah pelanggaran yang tidak dapat dibenarkan oleh pertimbangan apapun.

Pengusiran dari tempat tinggal dan pembakaran rumah ibadah merupakan pelanggaran forum externum yang sekaligus bertabrakan dengan hak atas tempat tinggal, hak atas jaminan keamanan, dan prinsip non-diskriminasi. UN Declaration on Minorities 1992 secara eksplisit mewajibkan negara melindungi keberadaan dan identitas minoritas agama dan mengambil langkah aktif menciptakan kondisi yang mendorong ekspresi identitas tersebut.

Kewajiban negara dalam KBB bersifat tiga tingkat. Kegagalan terbesar dalam skenario ini adalah pada obligation to protect — negara gagal melindungi warga negara Ahmadiyah dari serangan aktor non-negara. Kepasifan pemerintah daerah dan keterlambatan polisi bukan hanya kelalaian administrasi; dalam hukum HAM internasional, ini adalah pelanggaran positif kewajiban negara. Bahkan lebih problematis, kehadiran pejabat daerah dalam acara yang mempersoalkan keberadaan Ahmadiyah dapat dikualifikasikan sebagai dukungan implisit terhadap persekusi.

SKB Tiga Menteri 2008 merupakan akar kebijakan yang bermasalah — meski tidak secara eksplisit melarang keberadaan Ahmadiyah, larangan penyebaran ajaran memberikan legitimasi terhadap persepsi bahwa Ahmadiyah adalah "kelompok sesat" yang perlu ditekan. UN Special Rapporteur on Freedom of Religion or Belief telah secara eksplisit merekomendasikan pencabutan regulasi ini.

Kebijakan berbasis HAM yang diperlukan: (1) Revisi atau pencabutan SKB 2008 yang tidak kompatibel dengan ICCPR Pasal 18 — negara tidak memiliki kewenangan mendefinisikan kebenaran teologis; (2) Protokol respons darurat bagi polisi dan pemerintah daerah dalam kasus persekusi agama, dengan tenggat respons yang mengikat; (3) Regulasi ujaran kebencian yang seimbang: mengkriminalkan incitement to violence berbasis agama (sesuai ICCPR Pasal 20 ayat 2) tanpa membungkam ekspresi keagamaan sah; (4) Program wajib pendidikan KBB bagi pejabat publik, aparatur penegak hukum, dan tokoh agama; (5) Mekanisme pemantauan insiden intoleransi berbasis data yang transparan dan dapat diakses publik.`,
    explanation: `Soal ini menguji kemampuan menganalisis pelanggaran KBB dengan membedakan forum internum dan forum externum — konsep fundamental yang menentukan batas-batas kewajiban negara. Poin kunci: (1) Absolutisme forum internum; (2) Kegagalan obligation to protect negara; (3) SKB 2008 sebagai akar kebijakan bermasalah; (4) Dimensi HAM yang berlapis dalam satu kasus; (5) Rekomendasi yang menyentuh akar masalah kebijakan, bukan hanya respons insidental.`,
  },
  {
    id: 31,
    topicNumber: 7,
    topicName: 'Implementasi HAM di Indonesia',
    topicTag: 'Implementasi HAM',
    isEnglish: false,
    scenario: `Pada 2022, seorang perempuan muda di Surabaya menjadi korban revenge porn — mantan pacarnya menyebarkan foto intimnya tanpa izin ke berbagai platform media sosial dan grup WhatsApp. Ketika melaporkan ke polisi, ia justru menghadapi pertanyaan-pertanyaan yang menyalahkan korban (victim blaming) tentang mengapa ia mengizinkan foto tersebut diambil. Polisi menyarankan penyelesaian kekeluargaan. Pendamping korban dari LBH Apik menunjukkan bahwa UU No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (TPKS) yang baru disahkan seharusnya dapat digunakan, namun aparat belum memahami undang-undang tersebut. Kasus ini mencerminkan pola yang lebih luas: ribuan kasus KBGO (Kekerasan Berbasis Gender Online) dilaporkan setiap tahun, namun tingkat penuntutan tetap rendah karena budaya victim blaming dan ketidakpahaman aparat.`,
    question: `Berdasarkan skenario di atas, analisis kerangka hukum Indonesia dalam menangani Kekerasan Berbasis Gender Online (KBGO) dan kesenjangan implementasinya. Jelaskan bagaimana pendekatan berbasis HAM seharusnya diterapkan dalam penanganan kasus KBGO, termasuk peran lembaga negara dan tanggung jawab platform digital.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'KBGO',
        'kekerasan berbasis gender online',
        'revenge porn',
        'non-consensual intimate image',
        'UU TPKS',
        'UU ITE',
        'victim blaming',
        'perspektif korban',
        'pendamping hukum',
        'pemulihan korban',
        'CEDAW',
        'hak atas privasi',
        'kekerasan digital',
        'platform digital',
        'pelaporan yang aman',
        'secondary victimization',
        'restitusi',
      ],
      concepts: [
        'KBGO sebagai bentuk kekerasan berbasis gender yang menggunakan teknologi sebagai instrumen',
        'Secondary victimization melalui victim blaming oleh aparat sebagai pelanggaran HAM',
        'Tanggung jawab platform digital dalam pencegahan dan penghapusan konten KBGO',
        'UU TPKS 2022 sebagai kemajuan legislatif dan tantangan implementasinya',
        'Pendekatan berbasis korban (survivor-centered approach) dalam penegakan hukum',
      ],
      legalBasis: [
        'UU No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (Pasal 14-15 tentang KBGO)',
        'Pasal 27 ayat 1 UU ITE tentang konten melanggar kesusilaan (sering digunakan tapi terbatas)',
        'CEDAW General Recommendation No. 35 tentang kekerasan berbasis gender',
        'Pasal 28G UUD 1945 — hak atas perlindungan diri pribadi dan kehormatan',
        'Perma No. 3 Tahun 2017 tentang Pedoman Mengadili Perkara Perempuan',
      ],
      analysis: [
        'Ketidakpahaman aparat terhadap UU TPKS 2022 menunjukkan gap antara legislasi dan kapasitas implementasi',
        'Victim blaming oleh polisi mencerminkan secondary victimization yang dilarang dalam pendekatan berbasis HAM',
        'Penyaranan penyelesaian kekeluargaan untuk kasus KBGO bertentangan dengan sifat publik kejahatan kekerasan seksual',
        'Rendahnya penuntutan KBGO mencerminkan kegagalan sistemik, bukan sekadar kasus individual',
      ],
      recommendations: [
        'Pelatihan wajib UU TPKS dan pendekatan berbasis korban untuk seluruh penyidik Polri',
        'Pembentukan unit khusus KBGO di Polri dan Kejaksaan dengan personel terlatih bersperspektif gender',
        'Regulasi kewajiban platform digital: mekanisme pelaporan 24 jam dan takedown dalam 24 jam untuk konten KBGO',
        'Pusat layanan terpadu (one-stop service) untuk korban KBGO: hukum, psikologis, dan digital forensik',
        'Pembaruan kurikulum pendidikan kepolisian untuk memasukkan perspektif HAM dan gender',
      ],
      synonymMap: {
        'KBGO': ['kekerasan berbasis gender online', 'online gender-based violence', 'kekerasan digital berbasis gender'],
        'revenge porn': ['non-consensual intimate image', 'penyebaran foto/video intim tanpa izin', 'NCII'],
        'victim blaming': ['menyalahkan korban', 'secondary victimization', 'reviktimisasi'],
        'UU TPKS': ['UU Kekerasan Seksual', 'UU No. 12 Tahun 2022'],
        'survivor-centered': ['berpusat pada korban', 'berbasis korban', 'perspektif korban'],
      },
    },
    bestAnswer: `Kekerasan Berbasis Gender Online (KBGO) merupakan bentuk kekerasan berbasis gender yang menggunakan teknologi digital sebagai instrumen, mencakup revenge porn, doxxing, cyberstalking, dan pelecehan online. Indonesia telah memiliki kerangka hukum yang berkembang untuk menanganinya: UU TPKS 2022 (Pasal 14-15 secara khusus mengatur transmisi konten seksual tanpa persetujuan) merupakan kemajuan legislatif yang signifikan, meski implementasinya masih jauh dari optimal.

Kesenjangan implementasi dalam skenario Surabaya mencerminkan masalah struktural yang lebih dalam. Pertama, ketidakpahaman aparat terhadap UU TPKS 2022 menunjukkan bahwa legislasi tanpa kapasitas implementasi hanya menjadi dead letter law. Kedua, victim blaming oleh polisi merupakan secondary victimization — re-traumatisasi korban melalui sistem yang seharusnya melindungi. CEDAW General Recommendation No. 35 dan Perma No. 3 Tahun 2017 secara eksplisit melarang pendekatan yang menyalahkan atau mempermalukan korban kekerasan gender. Ketiga, saran penyelesaian kekeluargaan untuk kasus KBGO bertentangan dengan sifat publik kejahatan kekerasan seksual — ini bukan sengketa privat yang dapat diselesaikan secara informal.

Pendekatan berbasis HAM dalam penanganan KBGO mengharuskan: (1) Survivor-centered approach — menempatkan keselamatan, pemulihan, dan kepentingan korban sebagai prioritas utama, bukan kelancaran administrasi; (2) Non-diskriminasi dan non-penghakiman dalam seluruh proses — dari pelaporan, penyidikan, hingga persidangan; (3) Hak atas pemulihan komprehensif: hukum (restitusi dari pelaku), psikologis (konseling), dan digital (takedown konten).

Platform digital memiliki tanggung jawab yang signifikan. Dalam kerangka UN Guiding Principles on Business and Human Rights, platform memiliki responsibility to respect hak-hak pengguna — termasuk kewajiban memiliki mekanisme pelaporan yang efektif dan prosedur takedown yang cepat untuk konten KBGO. Indonesia perlu mempertegas kewajiban ini dalam regulasi.

Rekomendasi kebijakan: (1) Pelatihan wajib dan terstruktur UU TPKS dan gender-responsive policing bagi seluruh penyidik Polri — dengan evaluasi berkala dan konsekuensi bagi yang tidak kompeten; (2) Unit khusus KBGO di Polri (seperti Women and Children Desk) dengan personel berspesialisasi; (3) Regulasi platform digital: kewajiban mekanisme pelaporan 24/7 dan takedown dalam 24 jam untuk konten KBGO yang dilaporkan; (4) Pusat layanan terpadu korban KBGO: konsultasi hukum, psikologis, dan digital forensik dalam satu atap; (5) Revisi kurikulum akademi kepolisian untuk memasukkan HAM, gender, dan UU TPKS sebagai mata pelajaran inti.`,
    explanation: `Soal ini mengukur pemahaman implementasi HAM dalam konteks kekerasan berbasis gender dan teknologi digital. Poin kunci: (1) Definisi KBGO dan kaitan dengan hak HAM; (2) UU TPKS 2022 sebagai terobosan legislatif; (3) Secondary victimization sebagai pelanggaran HAM; (4) Tanggung jawab platform digital dalam kerangka UNGP; (5) Rekomendasi yang menyentuh kapasitas aparat dan regulasi platform. Jawaban terbaik menunjukkan bahwa persoalan utama bukan ketiadaan hukum, melainkan ketidakmampuan dan ketidakmauan mengimplementasikannya.`,
  },
  {
    id: 32,
    topicNumber: 8,
    topicName: 'Mekanisme Penanganan Dugaan Pelanggaran HAM',
    topicTag: 'Penegakan HAM',
    isEnglish: false,
    scenario: `Di Kecamatan Long Pahangai, Kalimantan Timur, investigasi jurnalis dan LSM menemukan anak-anak berusia 8-14 tahun bekerja di pertambangan emas ilegal (PETI). Anak-anak ini — banyak yang putus sekolah — terpaksa bekerja karena kemiskinan keluarga. Mereka terpapar merkuri, bekerja tanpa alat pelindung diri, dan rentan kecelakaan tambang. Pemda dan aparat setempat mengetahui praktik ini namun tidak mengambil tindakan penegakan hukum yang efektif. Ketika diwawancara, salah satu kepala keluarga menyatakan bahwa tidak ada pilihan lain karena tidak ada akses pendidikan berkualitas dan lapangan kerja alternatif di daerah tersebut. Laporan dikirim ke Komnas HAM namun belum ada tindak lanjut yang konkret.`,
    question: `Berdasarkan skenario di atas, identifikasi pelanggaran HAM anak yang terjadi dalam kasus pekerja anak di tambang ilegal Kalimantan, dan jelaskan mekanisme nasional dan internasional yang tersedia untuk menangani kasus ini. Kemudian rekomendasikan pendekatan sistemik yang mencakup perlindungan, rehabilitasi, dan pencegahan berbasis HAM.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'pekerja anak',
        'child labour',
        'worst forms of child labour',
        'Konvensi ILO 182',
        'Konvensi Hak Anak',
        'CRC',
        'merkuri',
        'pekerjaan berbahaya',
        'hak atas pendidikan',
        'hak atas kesehatan',
        'eksploitasi anak',
        'Komnas HAM',
        'KPAI',
        'perlindungan anak',
        'UU Perlindungan Anak',
        'kemiskinan struktural',
        'rehabilitasi',
        'reintegrasi',
      ],
      concepts: [
        'Pekerja anak tambang sebagai "bentuk terburuk pekerja anak" (worst forms of child labour)',
        'Hak anak yang dilanggar: pendidikan, kesehatan, perlindungan dari eksploitasi',
        'Kemiskinan struktural sebagai akar penyebab yang memerlukan respons sistemik',
        'Mekanisme penanganan nasional: Komnas HAM, KPAI, P2TP2A, Bareskrim',
        'Pendekatan terpadu: perlindungan segera, rehabilitasi, dan pencegahan jangka panjang',
      ],
      legalBasis: [
        'Konvensi Hak Anak (CRC) Pasal 32 — hak anak dilindungi dari eksploitasi ekonomi',
        'Konvensi ILO No. 182 tentang Pelarangan Bentuk Terburuk Pekerja Anak',
        'UU No. 35 Tahun 2014 tentang Perubahan UU Perlindungan Anak',
        'UU No. 13 Tahun 2003 tentang Ketenagakerjaan Pasal 68-75 tentang larangan pekerja anak',
        'Pasal 28B ayat 2 UUD 1945 — hak anak atas kelangsungan hidup, tumbuh kembang, dan perlindungan',
      ],
      analysis: [
        'Pemaparan merkuri merupakan "worst forms of child labour" yang dilarang mutlak oleh Konvensi ILO 182',
        'Kepasifan pemda merupakan kegagalan obligation to protect dan obligation to fulfill hak anak',
        'Akses terbatas pada pendidikan berkualitas dan kemiskinan mencerminkan akar struktural yang harus ditangani',
        'Laporan ke Komnas HAM yang tidak ditindaklanjuti menunjukkan kelemahan mekanisme akuntabilitas',
      ],
      recommendations: [
        'Penarikan segera anak dari tambang dengan dukungan psikososial dan pemeriksaan kesehatan komprehensif',
        'Pemberian beasiswa dan akses pendidikan yang berkualitas sebagai alternatif ekonomi bagi keluarga',
        'Penegakan hukum tegas terhadap operator tambang ilegal yang menggunakan pekerja anak',
        'Program pendampingan ekonomi bagi keluarga sebagai intervensi kemiskinan struktural',
        'Revitalisasi mekanisme pemantauan pekerja anak di tingkat kabupaten yang melibatkan komunitas',
      ],
      synonymMap: {
        'pekerja anak': ['child labour', 'tenaga kerja anak', 'buruh anak'],
        'worst forms of child labour': ['bentuk terburuk pekerja anak', 'pekerjaan berbahaya anak'],
        'CRC': ['Konvensi Hak Anak', 'Convention on the Rights of the Child'],
        'merkuri': ['raksa', 'logam berat beracun', 'quicksilver'],
        'rehabilitasi': ['pemulihan', 'reintegrasi', 'recovery'],
      },
    },
    bestAnswer: `Kasus pekerja anak di tambang emas ilegal Kalimantan mencerminkan pelanggaran berlapis hak asasi anak. Konvensi Hak Anak (CRC) Pasal 32 mewajibkan negara melindungi anak dari pekerjaan yang berbahaya atau mengganggu pendidikan. Konvensi ILO No. 182 — yang diratifikasi Indonesia — secara khusus mengklasifikasikan pekerjaan di tambang sebagai "worst forms of child labour" (bentuk terburuk pekerja anak) yang harus dihapuskan tanpa pengecualian, terlepas dari kondisi ekonomi keluarga.

Hak anak yang dilanggar dalam skenario ini mencakup: (1) Hak atas perlindungan dari eksploitasi ekonomi (CRC Pasal 32); (2) Hak atas kesehatan — paparan merkuri menyebabkan kerusakan neurologis permanen yang mengancam masa depan anak; (3) Hak atas pendidikan — putus sekolah berarti terputusnya jalur keluar dari kemiskinan; (4) Hak atas perlindungan dari pekerjaan berbahaya (UU No. 13 Tahun 2003 Pasal 68-75). Pasal 28B ayat 2 UUD 1945 menjamin hak anak atas kelangsungan hidup, tumbuh kembang, dan perlindungan dari kekerasan dan diskriminasi.

Mekanisme nasional yang tersedia: Komnas HAM (investigasi dan pemantauan), KPAI (pengawasan perlindungan anak nasional), P2TP2A (layanan terpadu di daerah), serta Bareskrim untuk penegakan pidana terhadap pelaku eksploitasi. Kepasifan aparat setempat dan tidak ditindaklanjutinya laporan ke Komnas HAM menunjukkan kegagalan mekanisme ini dalam praktik. Di tingkat internasional, Indonesia dapat dilaporkan kepada Komite Hak Anak PBB dalam siklus review periodik melalui mekanisme laporan alternatif (shadow report) oleh LSM.

Pendekatan sistemik berbasis HAM memerlukan intervensi pada tiga level: (1) Perlindungan segera: penarikan anak dari tambang disertai pemeriksaan kesehatan komprehensif (khususnya paparan merkuri) dan dukungan psikososial — dilakukan dengan cara yang tidak menghukum anak atau keluarganya; (2) Rehabilitasi dan reintegrasi: beasiswa dan akses pendidikan berkualitas yang menggantikan pendapatan yang hilang, agar penarikan dari tambang tidak menciptakan kekosongan ekonomi yang mendorong kembali ke pekerjaan berbahaya; (3) Pencegahan struktural: penegakan hukum tegas terhadap operator tambang ilegal yang mengeksploitasi anak, program pendampingan ekonomi keluarga untuk menangani kemiskinan sebagai akar masalah, dan pembangunan infrastruktur pendidikan di daerah terpencil.

Koordinasi lintas kementerian (PPPA, Ketenagakerjaan, Pendidikan, ESDM) dengan kepemimpinan yang jelas adalah prasyarat keberhasilan — fragmented response hanya menciptakan celah yang dieksploitasi.`,
    explanation: `Soal ini menguji pemahaman tentang mekanisme penanganan pelanggaran HAM dengan fokus pada hak anak. Poin kunci: (1) Klasifikasi "worst forms of child labour" dalam Konvensi ILO 182; (2) Multiple rights violations dalam satu kasus; (3) Mekanisme nasional dan internasional yang tersedia; (4) Pentingnya pendekatan terpadu perlindungan-rehabilitasi-pencegahan; (5) Kemiskinan struktural sebagai akar penyebab yang tidak boleh diabaikan. Jawaban terbaik menunjukkan bahwa solusi yang hanya berfokus pada penegakan hukum tanpa menangani akar kemiskinan akan gagal mencegah terulangnya kasus.`,
  },
  {
    id: 33,
    topicNumber: 9,
    topicName: 'Pencegahan dan Penanganan Kekerasan Berbasis Gender',
    topicTag: 'KBG & KDRT',
    isEnglish: false,
    scenario: `Seorang pelamar kerja CPNS formasi tenaga kesehatan di Kementerian Kesehatan, Budi Raharjo, adalah penyandang disabilitas sensorik (tunarungu sedang) yang telah lulus semua tahap seleksi kompetensi dan mendapat nilai tertinggi di formasinya. Namun, panitia seleksi menggugurkannya pada tahap verifikasi berkas dengan alasan "tidak memenuhi syarat kesehatan" berdasarkan regulasi yang mewajibkan kondisi fisik sempurna bagi tenaga kesehatan. Budi mengajukan keberatan ke Ombudsman dan Komnas HAM. Kasus ini membuka diskusi lebih luas tentang bagaimana sistem seleksi ASN secara struktural mengeksklusikan penyandang disabilitas meskipun mereka kompeten untuk menjalankan fungsi pekerjaan yang bersangkutan.`,
    question: `Berdasarkan skenario di atas, analisis apakah pengguguran Budi Raharjo dari seleksi CPNS merupakan diskriminasi berbasis disabilitas berdasarkan standar HAM internasional dan nasional. Jelaskan konsep "reasonable accommodation" dan bagaimana seharusnya sistem seleksi ASN dirancang agar inklusif. Kemudian rekomendasikan reformasi kebijakan yang diperlukan.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'diskriminasi disabilitas',
        'CRPD',
        'Konvensi Hak Penyandang Disabilitas',
        'reasonable accommodation',
        'akomodasi yang layak',
        'model sosial disabilitas',
        'model medis disabilitas',
        'inklusi',
        'UU Penyandang Disabilitas',
        'ASN',
        'CPNS',
        'kuota 2 persen',
        'seleksi inklusif',
        'disability assessment',
        'functional capacity',
        'non-diskriminasi',
        'Ombudsman',
        'Komnas HAM',
      ],
      concepts: [
        'Model sosial disabilitas vs model medis — CRPD mengadopsi model sosial',
        'Reasonable accommodation sebagai kewajiban negara dan pemberi kerja',
        'Diskriminasi atas dasar disabilitas mencakup penolakan akomodasi yang layak',
        'Kuota 2% ASN penyandang disabilitas sebagai affirmative measure',
        'Functional capacity assessment sebagai alternatif persyaratan kesehatan generik',
      ],
      legalBasis: [
        'CRPD (Convention on the Rights of Persons with Disabilities) Pasal 5 (non-diskriminasi) dan Pasal 27 (hak atas pekerjaan)',
        'UU No. 8 Tahun 2016 tentang Penyandang Disabilitas',
        'Pasal 28I UUD 1945 — non-diskriminasi sebagai hak konstitusional',
        'PP No. 70 Tahun 2019 tentang Perencanaan, Penyelenggaraan, dan Evaluasi terhadap Penghormatan, Pelindungan, dan Pemenuhan Hak Penyandang Disabilitas',
        'Permen PANRB No. 23 Tahun 2019 tentang Kriteria Pegawai Negeri Sipil dengan Disabilitas',
      ],
      analysis: [
        'Persyaratan "kondisi fisik sempurna" merupakan diskriminasi langsung berbasis disabilitas yang tidak bisa dibenarkan untuk semua formasi',
        'Tanpa reasonable accommodation assessment, sistem seleksi menggunakan standar yang secara struktural mengeksklusikan penyandang disabilitas kompeten',
        'Kasus ini mencerminkan konflik antara model medis (disabilitas = hambatan) vs model sosial (hambatan ada di lingkungan)',
        'Pengguguran setelah Budi lulus semua tes kompetensi menunjukkan bahwa alasan kesehatan generik tidak ada hubungannya dengan kemampuan menjalankan fungsi pekerjaan',
      ],
      recommendations: [
        'Revisi sistem seleksi CPNS: ganti persyaratan "sehat jasmani rohani" generik dengan functional capacity assessment per formasi',
        'Panduan reasonable accommodation wajib bagi seluruh instansi dalam proses seleksi dan kepegawaian',
        'Penguatan mekanisme pengaduan diskriminasi disabilitas yang cepat dan efektif',
        'Percepatan implementasi kuota 2% ASN penyandang disabilitas dengan verifikasi ketercapaian per instansi',
        'Pelatihan disability inclusion bagi panitia seleksi ASN di seluruh kementerian/lembaga',
      ],
      synonymMap: {
        'CRPD': ['Konvensi Hak Penyandang Disabilitas', 'Convention on the Rights of Persons with Disabilities'],
        'reasonable accommodation': ['akomodasi yang layak', 'penyesuaian yang wajar', 'penyesuaian untuk disabilitas'],
        'model sosial disabilitas': ['social model of disability', 'model sosial'],
        'kuota 2 persen': ['kuota disabilitas', '2% ASN disabilitas'],
        'functional capacity': ['kapasitas fungsional', 'kemampuan menjalankan fungsi kerja'],
      },
    },
    bestAnswer: `Pengguguran Budi Raharjo dari seleksi CPNS berdasarkan persyaratan "kondisi fisik sempurna" merupakan diskriminasi berbasis disabilitas berdasarkan standar HAM internasional. CRPD (yang diratifikasi Indonesia melalui UU No. 19 Tahun 2011) mendefinisikan diskriminasi berdasarkan disabilitas sebagai mencakup "penolakan akomodasi yang layak" (denial of reasonable accommodation). Ini adalah konsep fundamental: ketika seseorang kompeten menjalankan fungsi pekerjaan tetapi terkena hambatan sistemik karena tidak ada penyesuaian untuk kebutuhannya, itu adalah diskriminasi.

CRPD mengadopsi model sosial disabilitas — berbeda dari model medis yang memandang disabilitas sebagai "kekurangan" yang perlu disembuhkan. Model sosial memandang hambatan sebagai produk lingkungan sosial dan fisik yang tidak dirancang inklusif. Dalam konteks ini, masalah bukan pada tunarungu Budi; masalah ada pada sistem seleksi yang menggunakan persyaratan kesehatan generik tanpa mengevaluasi apakah kondisi tersebut benar-benar menghalangi fungsi spesifik pekerjaan yang dilamar.

Reasonable accommodation adalah kewajiban hukum — bukan kebaikan sukarela — yang diwajibkan CRPD Pasal 5 dan UU No. 8 Tahun 2016 tentang Penyandang Disabilitas. Ini berarti instansi publik harus membuat penyesuaian yang tidak menimbulkan beban tidak proporsional untuk memungkinkan penyandang disabilitas berpartisipasi setara. Dalam konteks seleksi CPNS, ini berarti: waktu tambahan untuk tes tertulis (jika relevan), akses teknologi bantu, dan yang terpenting — penilaian berbasis functional capacity (kemampuan menjalankan fungsi spesifik jabatan) bukan kondisi fisik umum.

Kasus Budi membuktikan persyaratan "sehat jasmani rohani" generik merupakan diskriminasi sistemik: Budi meraih nilai tertinggi dalam tes kompetensi, membuktikan ia mampu menjalankan fungsi jabatan, namun digugurkan oleh persyaratan yang tidak ada kaitannya dengan kemampuan kerjanya. PP No. 70 Tahun 2019 dan Permen PANRB No. 23 Tahun 2019 sebenarnya telah mengatur seleksi inklusif, namun implementasinya tidak konsisten.

Reformasi kebijakan yang diperlukan: (1) Revisi Permenpan dan peraturan teknis seleksi CPNS — ganti persyaratan "sehat jasmani rohani" umum dengan functional capacity assessment per formasi jabatan; (2) Panduan reasonable accommodation wajib untuk setiap tahap proses seleksi dan kepegawaian di seluruh instansi; (3) Mekanisme pengaduan diskriminasi disabilitas yang cepat dan efektif — dengan tenggat penyelesaian yang mengikat; (4) Verifikasi ketercapaian kuota 2% ASN penyandang disabilitas per instansi dengan konsekuensi bagi instansi yang tidak mencapainya; (5) Pelatihan disability inclusion wajib bagi panitia seleksi, HRD, dan manajer lini di seluruh instansi pemerintah.`,
    explanation: `Soal ini menguji pemahaman tentang hak penyandang disabilitas dalam konteks pekerjaan. Poin kunci: (1) Model sosial vs model medis disabilitas; (2) Reasonable accommodation sebagai kewajiban hukum; (3) Diskriminasi sistemik vs diskriminasi langsung; (4) Functional capacity assessment sebagai solusi konkret; (5) CRPD dan implementasinya dalam hukum Indonesia. Jawaban terbaik menunjukkan bahwa persyaratan yang tampaknya netral (kondisi fisik sempurna) dapat menjadi diskriminasi sistemik ketika tidak ada kaitannya dengan kemampuan menjalankan fungsi pekerjaan.`,
  },
  {
    id: 34,
    topicNumber: 10,
    topicName: 'Peran, Kewajiban, dan Tanggung Jawab Negara dan Non Negara Terhadap HAM',
    topicTag: 'Negara & Non-Negara',
    isEnglish: false,
    scenario: `Masyarakat Baduy (Kanekes) di Kabupaten Lebak, Banten, secara konsisten menolak masuknya teknologi modern, infrastruktur jalan aspal, dan program pembangunan pemerintah ke wilayah Baduy Dalam. Pada 2020, komunitas Baduy melalui tokoh adat mereka secara resmi meminta aplikasi Google Maps untuk menghapus foto interior dan peta detail wilayah Baduy Dalam yang diunggah wisatawan. Google mengabulkan permintaan ini. Di sisi lain, terdapat tekanan dari pemerintah daerah untuk membangun jalan demi aksesibilitas dan potensi wisata. Komunitas Baduy berpendapat bahwa pembangunan yang tidak mereka inginkan mengancam keberlanjutan budaya dan keseimbangan hidup adat mereka.`,
    question: `Berdasarkan skenario di atas, analisis hak masyarakat adat Baduy atas self-determination dan hak menolak pembangunan (free, prior and informed consent / FPIC) berdasarkan hukum HAM internasional. Kemudian jelaskan tanggung jawab negara dan aktor non-negara (termasuk perusahaan teknologi) dalam menghormati hak-hak masyarakat adat, dan rekomendasikan kerangka kebijakan yang menghormati pilihan komunitas Baduy.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'self-determination',
        'hak menentukan nasib sendiri',
        'FPIC',
        'free prior and informed consent',
        'persetujuan atas dasar informasi',
        'masyarakat adat',
        'UNDRIP',
        'Deklarasi PBB Masyarakat Adat',
        'hak atas tanah adat',
        'hukum adat',
        'budaya adat',
        'UU Desa',
        'pengakuan masyarakat adat',
        'tanggung jawab korporasi',
        'UNGP',
        'hak menolak pembangunan',
        'keseimbangan ekologi',
      ],
      concepts: [
        'FPIC sebagai mekanisme pelindung hak masyarakat adat dalam proses pembangunan',
        'Self-determination internal: hak komunitas mengatur diri dan menentukan jalur pembangunannya',
        'Tanggung jawab korporasi dalam menghormati HAM masyarakat adat (UNGP)',
        'Konflik antara pembangunan dan hak adat — bukan zero-sum game',
        'Pengakuan hukum masyarakat adat sebagai prasyarat perlindungan hak adat',
      ],
      legalBasis: [
        'UNDRIP (UN Declaration on the Rights of Indigenous Peoples) Pasal 3, 18, 19, dan 32',
        'ILO Convention No. 169 tentang Masyarakat Adat dan Suku',
        'Putusan MK No. 35/PUU-X/2012 tentang Hutan Adat',
        'Pasal 18B ayat 2 UUD 1945 — pengakuan masyarakat adat',
        'UU No. 6 Tahun 2014 tentang Desa (pengakuan desa adat)',
      ],
      analysis: [
        'Penolakan Baduy terhadap pembangunan merupakan ekspresi sah hak self-determination internal',
        'Permintaan penghapusan peta dari Google Maps mencerminkan hak atas privasi dan kontrol informasi komunitas adat',
        'Tekanan pembangunan pemerintah daerah tanpa proses FPIC melanggar standar HAM masyarakat adat',
        'Respons Google mengabulkan permintaan Baduy adalah contoh praktik baik tanggung jawab korporasi',
      ],
      recommendations: [
        'Legalisasi wilayah adat Baduy melalui peta wilayah adat yang diakui hukum nasional',
        'Protokol FPIC yang wajib dalam setiap perencanaan pembangunan yang berpotensi mempengaruhi wilayah Baduy',
        'Kebijakan regulasi platform digital: mendukung permintaan komunitas adat untuk penghapusan informasi sensitif',
        'Pemberdayaan ekonomi berbasis budaya yang dipilih sendiri oleh komunitas Baduy, bukan wisata massal',
        'Forum konsultasi periodik pemerintah-komunitas Baduy yang bermakna dan berbasis FPIC',
      ],
      synonymMap: {
        'FPIC': ['free prior and informed consent', 'persetujuan bebas tanpa paksaan atas dasar informasi', 'PADIATAPA'],
        'self-determination': ['hak menentukan nasib sendiri', 'penentuan nasib sendiri'],
        'UNDRIP': ['UN Declaration on the Rights of Indigenous Peoples', 'Deklarasi PBB tentang Hak Masyarakat Adat'],
        'masyarakat adat': ['indigenous peoples', 'komunitas adat', 'suku adat'],
        'hukum adat': ['adat istiadat', 'customary law', 'tradisi adat'],
      },
    },
    bestAnswer: `Masyarakat Baduy memiliki hak self-determination yang dilindungi hukum HAM internasional. UNDRIP (UN Declaration on the Rights of Indigenous Peoples) Pasal 3 menegaskan bahwa masyarakat adat memiliki hak menentukan nasib sendiri — termasuk hak menentukan strategi pembangunan mereka sendiri. Pasal 32 UNDRIP secara spesifik mewajibkan negara berkonsultasi dan bekerja sama dengan masyarakat adat, melalui lembaga representatif mereka, sebelum menyetujui proyek apapun yang mempengaruhi tanah dan wilayah mereka.

Free, Prior and Informed Consent (FPIC) adalah mekanisme operasional dari hak self-determination. "Free" berarti tanpa tekanan atau manipulasi; "Prior" berarti sebelum keputusan final diambil; "Informed" berarti dengan informasi lengkap tentang dampak; "Consent" berarti persetujuan, bukan sekadar konsultasi. Dalam skenario Baduy, tekanan pemerintah daerah untuk membangun jalan tanpa proses FPIC yang bermakna melanggar standar ini secara langsung.

Hak menolak adalah bagian intrinsik dari FPIC — masyarakat adat tidak hanya berhak dikonsultasi, mereka berhak menolak dan penolakan itu harus dihormati. Putusan MK No. 35/PUU-X/2012 tentang Hutan Adat memperkuat pengakuan konstitusional atas hak-hak masyarakat adat, dan Pasal 18B ayat 2 UUD 1945 memberikan dasar konstitusionalnya.

Kasus permintaan penghapusan peta dari Google Maps adalah contoh menarik interaksi antara teknologi dan hak masyarakat adat. Google mengabulkan permintaan ini — sebuah praktik baik tanggung jawab korporasi. Berdasarkan UN Guiding Principles on Business and Human Rights (UNGP), perusahaan memiliki responsibility to respect hak asasi manusia, termasuk hak masyarakat adat atas privasi dan kontrol informasi budaya sensitif mereka. Tindakan Google mencerminkan implementasi UNGP dalam konteks platform digital.

Kerangka kebijakan yang menghormati pilihan Baduy memerlukan: (1) Pemetaan dan legalisasi wilayah adat Baduy dalam sistem hukum nasional sebagai wilayah dengan status perlindungan khusus; (2) Protokol FPIC yang wajib dan terstandar dalam setiap perencanaan pembangunan di wilayah Baduy, dengan veto right yang jelas; (3) Regulasi pariwisata yang menghormati batasan komunitas: kuota wisatawan, zonasi ketat, dan sanksi bagi pelanggaran; (4) Kebijakan platform digital: mendorong dan memfasilitasi permintaan komunitas adat untuk perlindungan informasi budaya sensitif; (5) Forum konsultasi periodik yang bermakna — bukan prosedur formalitas, melainkan dialog substantif yang menghasilkan keputusan bersama.`,
    explanation: `Soal ini menguji pemahaman tentang hak masyarakat adat dan tanggung jawab negara serta korporasi. Poin kunci: (1) FPIC sebagai mekanisme operasional self-determination; (2) Hak menolak sebagai bagian intrinsik FPIC; (3) UNGP dan tanggung jawab korporasi teknologi; (4) Konflik antara otonomi daerah/pembangunan dan hak adat; (5) Pemetaan dan legalisasi wilayah adat sebagai prasyarat. Kasus Google Maps menjadi contoh baik bagaimana aktor non-negara dapat menghormati hak masyarakat adat dalam era digital.`,
  },
  {
    id: 35,
    topicNumber: 11,
    topicName: 'HAM Berbahasa Inggris',
    topicTag: 'English HAM',
    isEnglish: true,
    scenario: `In 2021, the Citizen Lab at the University of Toronto published a report revealing that several Southeast Asian governments — including those with democratic systems — had deployed Pegasus spyware to surveil journalists, human rights defenders, and political opposition figures. In Thailand, activists were targeted before pro-democracy protests. In Indonesia, independent investigations suggested government-linked entities had acquired commercial surveillance tools. The proliferation of commercial spyware has created a "surveillance market" where states can purchase capabilities once reserved for intelligence superpowers. The UN Special Rapporteur on freedom of expression called for a global moratorium on the sale and transfer of surveillance technologies until human rights safeguards are in place.`,
    question: `Based on the scenario above, analyze the human rights implications of digital surveillance by states in Southeast Asian democracies. Discuss the specific rights at stake, the obligations of states under international human rights law to protect privacy in the digital age, and the responsibilities of commercial surveillance companies. Then recommend a human rights-compliant framework for regulating state surveillance.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'digital surveillance',
        'Pegasus spyware',
        'right to privacy',
        'ICCPR Article 17',
        'chilling effect',
        'targeted surveillance',
        'mass surveillance',
        'proportionality',
        'necessity',
        'judicial oversight',
        'UN Guiding Principles',
        'Wassenaar Arrangement',
        'civil society',
        'human rights defenders',
        'encrypted communications',
        'data protection',
        'accountability',
        'transparency',
      ],
      concepts: [
        'Right to privacy as enabling right for freedom of expression and assembly',
        'Lawfulness, necessity, and proportionality as three-part test for surveillance limitations',
        'Corporate responsibility for human rights impacts of surveillance technologies',
        'Chilling effect of surveillance on civil society and democratic participation',
        'Extraterritorial human rights obligations when surveillance tools are exported',
      ],
      legalBasis: [
        'ICCPR Article 17 — right to privacy with necessity and proportionality requirements',
        'UN Human Rights Committee General Comment No. 16 on privacy',
        'UN Resolution 68/167 (2013) — right to privacy in the digital age',
        'UN Guiding Principles on Business and Human Rights (UNGPs)',
        'Wassenaar Arrangement — export controls on dual-use surveillance technologies',
      ],
      analysis: [
        'Targeted surveillance of HRDs and journalists undermines the enabling rights necessary for democratic society',
        'Commercial spyware market creates accountability gaps where neither state nor company accepts responsibility',
        'Lack of judicial oversight in Southeast Asian surveillance frameworks enables abuse without accountability',
        'Chilling effect extends beyond direct targets to self-censorship across civil society',
      ],
      recommendations: [
        'Mandatory judicial authorization for targeted digital surveillance with clear sunset clauses',
        'Export controls on commercial surveillance technologies with human rights due diligence requirements',
        'Independent oversight bodies for national surveillance programs with civil society participation',
        'Corporate liability for spyware misuse and mandatory transparency reports from surveillance vendors',
        'Regional ASEAN framework on digital surveillance standards aligned with ICCPR Article 17',
      ],
      synonymMap: {
        'surveillance': ['monitoring', 'spying', 'wiretapping', 'tracking'],
        'spyware': ['malware', 'stalkerware', 'intrusion software', 'surveillance software'],
        'privacy': ['right to privacy', 'private life', 'personal data protection'],
        'human rights defenders': ['HRDs', 'activists', 'civil society actors'],
        'chilling effect': ['self-censorship', 'deterrent effect on expression', 'intimidation effect'],
      },
    },
    bestAnswer: `Digital surveillance by states poses profound threats to multiple interconnected human rights. The right to privacy under ICCPR Article 17 is not merely a standalone right — it is an enabling right that makes the exercise of freedom of expression, association, and peaceful assembly possible. When journalists and human rights defenders face surveillance, the chilling effect extends far beyond the individual target: civil society self-censors, sources dry up, and the ecosystem of democratic accountability erodes.

Under international human rights law, surveillance must satisfy a three-part test to be legitimate: (1) Lawfulness — authorized by sufficiently clear and accessible law; (2) Legitimate aim — protecting a recognized interest (national security, public order); (3) Necessity and proportionality — the least intrusive means, targeted rather than mass, with safeguards against abuse. The UN Human Rights Committee's General Comment No. 16 and Resolution 68/167 have extended these requirements explicitly to digital surveillance.

The Pegasus revelations demonstrate a fundamental governance failure in Southeast Asian democracies. Targeted surveillance of pro-democracy activists in Thailand before protests — and alleged surveillance capabilities in Indonesia — reveals a pattern where surveillance tools migrate from counterterrorism to political suppression without legal authorization or oversight. The commercial spyware market exacerbates this: states can now acquire capabilities while maintaining plausible deniability, as the technical operation is delegated to private contractors.

Commercial surveillance companies bear significant responsibility under the UN Guiding Principles on Business and Human Rights. The "responsibility to respect" means companies must conduct human rights due diligence before selling surveillance tools, assess end-use risks, and refuse sales where there is credible risk of misuse against HRDs and journalists. The current accountability vacuum — where states deny responsibility and companies claim ignorance of end-use — is incompatible with the UNGPs.

A human rights-compliant framework for regulating state surveillance should include: (1) Mandatory prior judicial authorization for targeted surveillance, with narrow grounds, time limits, and independent review; (2) Export controls with human rights conditionality — modeled on Wassenaar Arrangement but specifically targeting spyware — requiring exporters to conduct due diligence on state purchasers' human rights records; (3) Independent domestic oversight bodies with real investigative powers and civil society participation; (4) Corporate transparency obligations: surveillance vendors must publish transparency reports showing jurisdictions of sales and known misuse incidents; (5) A regional ASEAN framework on digital surveillance standards — unlikely given current ASEAN structures, but civil society pressure for bilateral agreements on mutual notification when surveillance targets are cross-border is a realistic interim measure.`,
    explanation: `This question tests the ability to analyze surveillance as a human rights issue with multiple dimensions. Key points: (1) Privacy as enabling right; (2) Three-part test for legitimate surveillance limitations; (3) Commercial spyware market and accountability gaps; (4) UNGPs applied to surveillance technology companies; (5) Practical regulatory recommendations. The best answers demonstrate understanding that this is not just about technology — it is about the structural conditions necessary for democratic society to function.`,
  },
  {
    id: 36,
    topicNumber: 12,
    topicName: 'Dukungan Manajemen',
    topicTag: 'Manajemen & Administrasi',
    isEnglish: false,
    scenario: `Pada Desember 2014, empat warga sipil di Distrik Paniai, Papua, tewas dan sejumlah lainnya luka-luka akibat tindakan pasukan keamanan Indonesia. Kejadian ini dikenal sebagai Tragedi Paniai. Komnas HAM kemudian menetapkan kasus ini sebagai pelanggaran HAM berat. Setelah bertahun-tahun tekanan dari keluarga korban dan masyarakat sipil, pengadilan HAM ad hoc digelar pada 2022. Namun, hakim membebaskan satu-satunya terdakwa dengan alasan pembuktian yang tidak cukup — keputusan yang dikritik keras oleh organisasi HAM domestik dan internasional. Keluarga korban menyatakan bahwa proses peradilan tidak memberikan keadilan, sementara pemerintah mengklaim bahwa mekanisme hukum telah dijalankan. Kasus ini menimbulkan pertanyaan kritis tentang efektivitas pengadilan HAM ad hoc dalam sistem hukum Indonesia.`,
    question: `Berdasarkan skenario di atas, jelaskan empat pilar keadilan transisional (transitional justice) dan analisis sejauh mana Indonesia telah memenuhi kewajiban tersebut dalam kasus Paniai. Kemudian rekomendasikan langkah-langkah konkret yang diperlukan untuk memenuhi hak atas kebenaran, keadilan, reparasi, dan jaminan non-pengulangan bagi korban dan keluarganya.`,
    timeLimit: 600,
    rubric: {
      keywords: [
        'keadilan transisional',
        'transitional justice',
        'pengadilan HAM ad hoc',
        'pelanggaran HAM berat',
        'Paniai',
        'hak atas kebenaran',
        'hak atas keadilan',
        'hak atas reparasi',
        'jaminan non-pengulangan',
        'Komnas HAM',
        'UU Pengadilan HAM',
        'impunitas',
        'komisi kebenaran',
        'pembuktian',
        'Jaksa Agung',
        'Mahkamah Internasional Pidana',
        'ICC',
        'pertanggungjawaban komando',
      ],
      concepts: [
        'Empat pilar keadilan transisional: kebenaran, keadilan, reparasi, non-pengulangan',
        'Pengadilan HAM ad hoc sebagai mekanisme Indonesia yang memiliki keterbatasan struktural',
        'Pertanggungjawaban komando (command responsibility) dalam hukum HAM internasional',
        'Impunitas sebagai hambatan utama pemenuhan hak korban',
        'Kewajiban negara membuktikan "no impunity" dalam kasus pelanggaran HAM berat',
      ],
      legalBasis: [
        'UU No. 26 Tahun 2000 tentang Pengadilan HAM',
        'Pasal 28I UUD 1945 — hak untuk tidak dituntut atas dasar hukum yang berlaku surut',
        'Resolusi PBB 60/147 tentang Basic Principles and Guidelines on the Right to a Remedy (2005)',
        'Statuta Roma tentang Mahkamah Pidana Internasional (ICC) — kejahatan terhadap kemanusiaan',
        'UN Human Rights Committee General Comment No. 31 — kewajiban investigasi dan penuntutan',
      ],
      analysis: [
        'Vonis bebas dalam pengadilan Paniai 2022 mencerminkan kelemahan struktural UU Pengadilan HAM dalam hal pembuktian',
        'Keterlambatan penanganan (8 tahun dari kejadian hingga sidang) mencerminkan hambatan sistemik dari pemerintah dan militer',
        'Tidak ada komisi kebenaran formal untuk Papua yang dapat mengungkap konteks lebih luas peristiwa',
        'Reparasi bagi korban dan keluarga belum diberikan meski kasus dinyatakan pelanggaran HAM berat oleh Komnas HAM',
      ],
      recommendations: [
        'Pembentukan Komisi Kebenaran Khusus Papua untuk mengungkap pola pelanggaran HAM berat lintas kasus',
        'Revisi UU Pengadilan HAM untuk memperkuat standar pembuktian dan mekanisme penuntutan',
        'Reparasi segera bagi korban dan keluarga Paniai tanpa harus menunggu vonis pengadilan',
        'Reformasi institusional TNI: mekanisme pertanggungjawaban internal yang efektif dan transparan',
        'Pelibatan ICC sebagai opsi jika impunitas nasional terus berlanjut dan persyaratan complementarity terpenuhi',
      ],
      synonymMap: {
        'keadilan transisional': ['transitional justice', 'keadilan masa transisi'],
        'pelanggaran HAM berat': ['gross human rights violations', 'pelanggaran HAM serius'],
        'jaminan non-pengulangan': ['guarantees of non-recurrence', 'non-repetition', 'jaminan tidak terulang'],
        'pertanggungjawaban komando': ['command responsibility', 'tanggung jawab komandan'],
        'reparasi': ['pemulihan', 'ganti rugi', 'kompensasi dan rehabilitasi korban'],
      },
    },
    bestAnswer: `Keadilan transisional mencakup empat pilar yang saling melengkapi sebagai kewajiban negara terhadap korban pelanggaran HAM berat. Pertama, hak atas kebenaran (right to truth) — korban dan masyarakat berhak mengetahui kebenaran tentang apa yang terjadi, siapa yang bertanggung jawab, dan mengapa. Kedua, hak atas keadilan (right to justice) — pelaku harus diadili secara efektif dan jujur; impunitas bukan pilihan yang sah. Ketiga, hak atas reparasi (right to reparation) — mencakup restitusi, kompensasi, rehabilitasi, dan jaminan kepuasan (satisfaction). Keempat, jaminan non-pengulangan (guarantees of non-recurrence) — reformasi institusional untuk mencegah pelanggaran serupa.

Analisis pemenuhan kewajiban Indonesia dalam kasus Paniai menunjukkan defisit yang serius di keempat pilar. Pada pilar kebenaran: tidak ada komisi kebenaran formal yang menginvestigasi pola pelanggaran HAM di Papua secara komprehensif; kasus Paniai diisolasi dari konteks yang lebih luas. Pada pilar keadilan: vonis bebas dalam pengadilan 2022 — setelah 8 tahun dari peristiwa — menggambarkan kegagalan mekanisme hukum yang ada. Keterlambatan sistemik dari penyelidikan Komnas HAM hingga penyerahan berkas ke Jaksa Agung selama bertahun-tahun mencerminkan hambatan institusional yang bukan kebetulan. Pada pilar reparasi: keluarga korban belum menerima reparasi apapun meski Komnas HAM telah menetapkan kasus sebagai pelanggaran HAM berat sejak 2020. Pada pilar non-pengulangan: tidak ada reformasi institusional TNI yang bermakna yang dapat dikaitkan langsung dengan kasus Paniai.

Vonis bebas dalam pengadilan HAM ad hoc mencerminkan kelemahan struktural UU No. 26 Tahun 2000 tentang Pengadilan HAM. Standar pembuktian yang diterapkan hakim dalam kasus Paniai tidak mencerminkan standar hukum HAM internasional, khususnya mengenai command responsibility — doktrin yang memungkinkan penuntutan atasan atas perbuatan bawahan jika atasan mengetahui atau seharusnya mengetahui dan gagal mencegah. Tanpa reformasi UU ini, pengadilan HAM ad hoc berisiko menjadi mekanisme yang memberikan "legitimasi prosedural" pada impunitas substantif.

Langkah-langkah konkret yang diperlukan: (1) Pembentukan Komisi Kebenaran Khusus Papua dengan mandat menginvestigasi pola pelanggaran HAM berat lintas kasus dan periode — bukan hanya Paniai tetapi juga Wasior, Wamena, dan lainnya; (2) Revisi UU Pengadilan HAM untuk mempertegas pertanggungjawaban komando dan memperkuat kapasitas penuntutan Jaksa Agung; (3) Reparasi segera bagi korban dan keluarga Paniai — reparasi tidak harus menunggu vonis pidana; ini adalah kewajiban negara yang berdiri sendiri; (4) Reformasi mekanisme akuntabilitas internal TNI: transparansi dalam investigasi, pemberian hak banding eksternal atas hasil investigasi internal; (5) Menjaga opsi ICC sebagai pressure mechanism: Indonesia perlu memahami bahwa jika impunitas nasional terus berlanjut dan complementarity principle terpenuhi, komunitas internasional memiliki dasar untuk mendesak referral ke ICC — ini bukan ancaman tetapi bagian dari sistem keadilan global yang Indonesia ikut membangun.`,
    explanation: `Soal ini menguji pemahaman tentang keadilan transisional dan pengadilan HAM ad hoc di Indonesia. Poin kunci: (1) Empat pilar keadilan transisional dan saling keterkaitannya; (2) Kelemahan struktural UU Pengadilan HAM; (3) Command responsibility sebagai instrumen pembuktian; (4) Perbedaan reparasi dan vonis pidana sebagai kewajiban terpisah; (5) Opsi ICC dalam konteks complementarity. Jawaban terbaik menunjukkan bahwa vonis bebas bukan akhir dari kewajiban negara — masih ada tiga pilar lain yang harus dipenuhi.`,
  },
];
