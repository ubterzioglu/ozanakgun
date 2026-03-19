import { useState, useEffect } from 'react'
import { 
  GraduationCap, Clock, Award, BookOpen, Users, Video, MapPin, 
  CheckCircle, Phone, Calendar, TrendingUp, 
  FileText, Headphones, PenTool, MessageCircle, 
  ChevronRight, BadgeCheck, Heart, Zap
} from 'lucide-react'
import './BilgiPage.css'

function BilgiPage() {
  const [showUpButton, setShowUpButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowUpButton(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const levels = [
    {
      level: 'A1',
      hours: '50 saat',
      title: 'Başlangıç Seviyesi',
      description: 'Temel Almanca bilgisi için ideal başlangıç. Günlük hayatta basit iletişim kurma becerisi.',
      features: ['Günlük rutinleri anlatma', 'Temel kelime haznesi', 'Basit diyaloglar'],
      ideal: 'Hiç Almanca bilmeyenler için kapsamlı temel eğitim.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      level: 'A2',
      hours: 'A1 (50) + A2 (40) : 90 saat',
      title: 'Temel Seviye',
      description: 'Günlük konuları anlama ve kendini ifade etme. Geçmiş deneyimleri aktarma.',
      features: ['Geçmiş deneyimleri aktarma', 'Günlük konuları anlama', 'Kendini ifade etme'],
      ideal: 'Aile birleşimi için yeterli, berberlik gibi işlerde istenen seviye.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      level: 'B1',
      hours: 'Değişken',
      title: 'Orta Seviye',
      description: 'Bağımsız dil kullanımı ve karmaşık konuları anlama.',
      features: ['Bağımsız dil kullanımı', 'Karmaşık konuları anlama', 'Akademik ve iş hayatı'],
      ideal: 'Teknik çalışanlar için ideal, birçok işletme için önkoşul.',
      color: 'from-amber-500 to-amber-600'
    }
  ]

  const examStructure = [
    { name: 'Dinleme (Hören)', a1: '20 dk', a2: '30 dk', b1: '40 dk', icon: Headphones },
    { name: 'Okuma (Lesen)', a1: '25 dk', a2: '30 dk', b1: '65 dk', icon: BookOpen },
    { name: 'Yazma (Schreiben)', a1: '20 dk', a2: '20 dk', b1: '60 dk', icon: PenTool },
    { name: 'Konuşma (Sprechen)', a1: '15 dk', a2: '15 dk', b1: '15 dk', icon: MessageCircle },
  ]

  const teachingMethods = [
    {
      title: 'Online Dersler',
      icon: Video,
      features: [
        'Zoom/Meet üzerinden canlı etkileşimli dersler',
        'Zengin eğitim materyalleri ve kaynak paylaşımı',
        'Programınıza uygun ders saatleri',
        'Her yerden, her zaman erişim imkanı'
      ]
    },
    {
      title: 'Yüz Yüze Dersler',
      icon: MapPin,
      features: [
        'Direkt etkileşim ve anında düzeltme imkanı',
        'Gerçek hayat senaryoları ile konuşma pratiği',
        'Düzenli ödev takibi',
        'Haftalık ödevler ve detaylı geri bildirim'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll to Top Button */}
      {showUpButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-all"
          aria-label="Yukarı git"
        >
          <ChevronRight className="w-6 h-6 -rotate-90" />
        </button>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[80vh] flex items-start justify-center overflow-hidden bg-white pt-16 sm:pt-20">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8 max-w-xl mx-auto">
              <div className="h-1 bg-green-500"></div>
              <div className="p-6 text-center">
                <h1 className="text-[clamp(1.5rem,6vw,3rem)] font-bold text-gray-900 mb-1 whitespace-nowrap">
                  Almanca Dil Kursu
                </h1>
                <h2 className="text-[clamp(1rem,4vw,1.75rem)] font-bold text-gray-900 mb-4 whitespace-nowrap">
                  Ozan Akgün
                </h2>
                <div className="flex flex-col items-center gap-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <BadgeCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>A1-A2-B1 Sertifika Kursları</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <BadgeCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Online & Yüzyüze Dersler</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <BadgeCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Goethe & TELC Hazırlık Dersleri</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <BadgeCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>4+ Yıl Deneyim</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <BadgeCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>C1 Sertifikalı Eğitim</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 justify-center max-w-md mx-auto">
              <a href="#seviyeler" className="bg-red-100 hover:bg-red-200 text-red-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <GraduationCap className="w-5 h-5" />
                Kurs Seviyeleri
              </a>
              <a href="#sinav" className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Award className="w-5 h-5" />
                Sınav Hazırlığı
              </a>
              <a href="#sinav-yapisi" className="bg-amber-100 hover:bg-amber-200 text-amber-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <FileText className="w-5 h-5" />
                Sınav Yapısı
              </a>
              <a href="#egitim-yontemleri" className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Video className="w-5 h-5" />
                Eğitim Yöntemleri
              </a>
              <a href="#ders-formatlari" className="bg-cyan-100 hover:bg-cyan-200 text-cyan-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Users className="w-5 h-5" />
                Ders Formatları
              </a>
              <a href="#egitmen" className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <GraduationCap className="w-5 h-5" />
                Eğitmen
              </a>
              <a href="#iletisim" className="bg-green-100 hover:bg-green-200 text-green-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Phone className="w-5 h-5" />
                İletişim
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Course Levels Section */}
      <section id="seviyeler" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kurs Seviyeleri ve Ders Saatleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Düzenli derse katılım ve ödev yapılması durumunda A1 ve A2 seviyeleri çok rahat öğrenilir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {levels.map((level) => (
              <div key={level.level} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${level.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold px-3 py-1 bg-gray-100 rounded">{level.level}</span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{level.hours}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{level.title}</h3>
                  <p className="text-gray-600 mb-4">{level.description}</p>
                  <ul className="space-y-2 mb-4">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 italic">{level.ideal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Goethe - TELC Sınavlarına Hazırlık */}
          <div id="sinav" className="text-center mt-16 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Goethe - TELC Sınavlarına Hazırlık
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uluslararası geçerli Almanca dil yeterlilik sertifikaları
            </p>
          </div>

          {/* Sınav Türleri */}
          <div className="max-w-5xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-red-500 bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Aile Birleşimi İçin - A1</h4>
                    <p className="text-sm text-gray-500">Vize başvurusu için gerekli</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Almanya'da aile birleşimi vizesi için zorunlu sertifika. Eş ve çocuk kabulü için devlet tarafından talep edilir.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Teknik Çalışanlar İçin - A2</h4>
                    <p className="text-sm text-gray-500">İş başvuruları için ideal</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  İş görüşmeleri ve teknik pozisyonlar için yeterli seviye. Günlük iş iletişiminde kullanılabilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8 bg-white">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
      </div>

      {/* Exam Structure */}
      <section id="sinav-yapisi" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Goethe Sınav Yapısı ve Değerlendirme
            </h2>
            <p className="text-gray-600">Sınavda toplamda %60 (60 puan) alınmalıdır.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Modül</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">A1</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">A2</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">B1</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {examStructure.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-red-600" />
                        </div>
                        <span className="font-medium text-gray-900">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-gray-600">{item.a1}</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-600">{item.a2}</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-600">{item.b1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Önemli Not */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="bg-green-50 rounded-lg shadow-md border border-green-200 overflow-hidden">
              <div className="flex items-start gap-4 p-5">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-green-900 mb-2">Esnek Program Avantajı</h4>
                  <p className="text-sm text-green-800">
                    Akademik bir zorunluluğu olmayan ve sınav için yeterli seviyede olan öğrenciler, ders saatini tamamlamadan doğrudan sınava yönlendirilebilir. Söz konusu saatlerin tamamlanması şart değildir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8 bg-white">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
      </div>

      {/* Teaching Methods */}
      <section id="egitim-yontemleri" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eğitim Yöntemleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Esnek ve etkileşimli öğrenme deneyimi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Online Dersler */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Online Dersler</h3>
              <ul className="space-y-3">
                {teachingMethods[0].features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Yüz Yüze Dersler */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Yüz Yüze Dersler</h3>
              <ul className="space-y-3">
                {teachingMethods[1].features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8 bg-gray-50">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
      </div>

      {/* Ders Formatları Section */}
      <section id="ders-formatlari" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ders Formatları
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Size en uygun öğrenme şeklini seçin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Özel Ders</h3>
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-4">Birebir odaklanma</span>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Kişiye özel müfredat hazırlama</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Tamamen esnek ders saatleri</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Öğrencinin hızına göre ilerleme</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Anında geri bildirim ve düzeltme</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Özel öğrenme materyalleri</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grup Dersi</h3>
              <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded mb-4">Ekonomik seçenek</span>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Daha uygun fiyat avantajı</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Grup dinamiği ile etkileşimli öğrenme</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Akran öğrenmesi ve motivasyon</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Gerçek hayat diyalog pratiği</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Sosyal öğrenme ortamı</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Karma (Hybrid)</h3>
              <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded mb-4">Online + Yüz yüze</span>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Her iki dünyanın en iyisi bir arada</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Maksimum esneklik ve konfor</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Yüz yüze pratik + online teori</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Yoğun programa göre ayarlanabilir</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Teknoloji ve kişisel dokunuş dengesi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Profile */}
      <section id="egitmen" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Ozan Akgün
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-8 text-center">
              Akademik Geçmiş ve İş Hayatı
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {/* 2003 */}
            <div className="flex items-start gap-6 py-3">
              <span className="w-20 text-sm font-bold text-blue-600 flex-shrink-0 text-right pt-0.5">2003</span>
              <div className="flex-1 border-l-2 border-blue-200 pl-6">
                <h4 className="font-bold text-gray-900">Çağaloğlu Anadolu Lisesi Mezunu</h4>
                <p className="text-sm text-gray-600 mt-1">Almanca eğitimli Türkiye'nin en iyi liselerinden biri</p>
              </div>
            </div>

            {/* 2005-2007 */}
            <div className="flex items-start gap-6 py-3">
              <span className="w-20 text-sm font-bold text-blue-600 flex-shrink-0 text-right pt-0.5">2005-2007</span>
              <div className="flex-1 border-l-2 border-blue-200 pl-6">
                <h4 className="font-bold text-gray-900">Aachen, Almanya Deneyimi</h4>
                <p className="text-sm text-gray-600 mt-1">Almanya'da yaşama ve çalışma deneyimi. Gerçek dil ortamında pratik tecrübe.</p>
              </div>
            </div>

            {/* 2008 */}
            <div className="flex items-start gap-6 py-3">
              <span className="w-20 text-sm font-bold text-blue-600 flex-shrink-0 text-right pt-0.5">2008</span>
              <div className="flex-1 border-l-2 border-blue-200 pl-6">
                <h4 className="font-bold text-gray-900">YDT Sınavı Yüksek Başarı</h4>
                <p className="text-sm text-gray-600 mt-1">Yabancı Dil Testi'nde (YDT) yüksek başarı oranı. Akademik dil yeterliliği kanıtı.</p>
              </div>
            </div>

            {/* 2015 */}
            <div className="flex items-start gap-6 py-3">
              <span className="w-20 text-sm font-bold text-blue-600 flex-shrink-0 text-right pt-0.5">2015</span>
              <div className="flex-1 border-l-2 border-blue-200 pl-6">
                <h4 className="font-bold text-gray-900">Goethe-Zertifikat C1</h4>
                <p className="text-sm text-gray-600 mt-1">İleri düzey Almanca yeterlilik sertifikası. Uluslararası geçerli dil yeterliliği belgesi.</p>
              </div>
            </div>

            {/* 2022 */}
            <div className="flex items-start gap-6 py-3">
              <span className="w-20 text-sm font-bold text-red-600 flex-shrink-0 text-right pt-0.5">2022</span>
              <div className="flex-1 border-l-2 border-red-200 pl-6">
                <h4 className="font-bold text-gray-900">Almanca Öğretmeni</h4>
                <p className="text-sm text-gray-600 mt-1">Birçok yabancı dil kurumunda eş zamanlı olarak Almanca öğretmeni olarak çalışmaktayım.</p>
              </div>
            </div>

            {/* 2024-2025 */}
            <div className="flex items-start gap-6 py-3">
              <span className="w-20 text-sm font-bold text-red-600 flex-shrink-0 text-right pt-0.5">2024-2025</span>
              <div className="flex-1 border-l-2 border-red-200 pl-6">
                <h4 className="font-bold text-gray-900">Müşteri Temsilcisi - Wayfair</h4>
                <p className="text-sm text-gray-600 mt-1">Wayfair firmasında Almanca yazılı müşteri temsilcisi olarak çalıştım.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="iletisim" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Başlamaya Hazır mısınız?
            </h2>
            <p className="text-base font-semibold text-gray-900 mb-3">
              Almanca Öğrenme Yolculuğunuza Başlayın!
            </p>
            <p className="text-base text-gray-600 mb-2 max-w-2xl mx-auto">
              Online veya yüz yüze dersler için bilgi alın.
            </p>
            <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto">
              Ücretsiz seviye tespit sınavı ve danışmanlık ile size en uygun programı birlikte belirleyelim.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-12 max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6">
                <Phone className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">İletişim</h4>
                <p className="text-sm text-gray-500">Bize ulaşın, sorularınızı yanıtlayalım</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <FileText className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Ücretsiz Seviye Tespiti</h4>
                <p className="text-sm text-gray-500">Mevcut dil seviyenizi belirleyelim</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-center max-w-sm mx-auto">
              <a href="https://wa.me/905322700666?text=%C3%9Ccretsiz%20deneme%20dersi%20i%C3%A7in%20bilgi%20almak%20istiyorum" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Calendar className="w-5 h-5" />
                Ücretsiz Deneme Dersi
              </a>
              <a href="https://wa.me/905322700666?text=Almanca%20dersi%20ile%20ilgili%20bilgi%20almak%20istiyorum" className="border border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Phone className="w-5 h-5" />
                İletişime Geçin
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default BilgiPage
