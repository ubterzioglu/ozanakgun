import { useState, useEffect } from 'react'
import { 
  GraduationCap, Clock, Award, BookOpen, Users, Video, MapPin, 
  CheckCircle, Phone, Calendar, Star, TrendingUp, 
  Globe, FileText, Headphones, PenTool, MessageCircle, 
  ChevronRight, BadgeCheck, Target, Zap, Heart,
  Briefcase, Wrench, Stethoscope
} from 'lucide-react'
import './BilgiPage.css'

function BilgiPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
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
        'İnteraktif Beyaz Tahta',
        'Dijital araçlarla zenginleştirilmiş içerik',
        'PDF, ses dosyaları ve interaktif alıştırmalar',
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

  const teachingApproach = [
    { title: 'Öğrenci Odaklı', description: 'Her öğrencinin ihtiyaçlarına göre özelleştirilmiş program', icon: Target },
    { title: 'Esnek Uyum', description: 'Farklı öğrenme stillerine ve hedeflere uyum sağlama', icon: Zap },
    { title: 'Pratik Odaklı', description: 'Gerçek hayat senaryoları ile konuşma pratiği', icon: Globe },
    { title: 'Sınav Stratejileri', description: 'Goethe sınavlarına özel hazırlık teknikleri', icon: BadgeCheck },
  ]

  const targetGroups = [
    { title: 'Aile Birleşimi İçin', target: 'A1 Sertifikası', description: 'Almanya\'da aile birleşimi vizesi almak isteyenler için A1 seviyesi zorunludur. Eş ve çocuk kabulü için devlet tarafından talep edilen bu sertifika, temel iletişim becerilerini kanıtlar. Goethe veya TELC sınavlarına yönelik hazırlık programlarımız sayesinde kısa sürede hedefinize ulaşabilirsiniz. Dersler hem online hem yüz yüze seçenekleriyle sunulmaktadır.', icon: Heart },
    { title: 'Teknik Çalışanlar', target: 'A2 Sertifikası', description: 'Almanya\'da mühendis, teknisyen veya teknik personel olarak çalışmak isteyenler için A2 seviyesi gereklidir. İş görüşmelerinde ve günlük iş iletişiminde yeterli olacak seviyede Almanca öğrenimi sağlanır. Mesleki terimler ve iş hayatında kullanılan pratik ifadeler ders içeriğine dahildir.', icon: TrendingUp },
    { title: 'İşe Kabul İçin', target: 'A1 veya A2', description: 'Almanya\'da işe başlamak için işverenler tarafından talep edilen dil sertifikalarını almanız gerekmektedir. A1 seviyesi giriş pozisyonları için yeterliyken, A2 seviyesi daha kapsamlı iş tanımları için önerilir. Sınav odaklı eğitim programlarımızla iş hayatına hazırlıklı olun.', icon: Briefcase },
    { title: 'Az Almanca Gerektiren İşler', target: 'Temel iletişim yeterli', description: 'Temizlik, depo çalışanı, restoran yardımcısı gibi az Almanca gerektiren pozisyonlar için temel iletişim becerileri yeterlidir. Günlük rutinleri anlama, basit talimatları takip etme ve temel ihtiyaçları ifade etme becerileri kazandırılır. Pratik odaklı derslerle hızla iş hayatına atılabilirsiniz.', icon: CheckCircle },
    { title: 'Pratik Kullanım İsteyenler', target: 'Günlük konuşma odaklı', description: 'Akademik veya sınav hedefi olmadan, sadece günlük hayatta Almanca konuşmak isteyenler için özel programlar hazırlıyoruz. Alışveriş, restoran, sosyal ortamlar gibi senaryolarda pratik yaparak özgüven kazanırsınız. Esnek ders saatleri ve birebir özel ders seçenekleri mevcuttur.', icon: MessageCircle },
    { title: 'Günlük İletişim', target: 'Günlük hayat odaklı', description: 'Tatil, seyahat veya Almanya\'da yaşayan yakınlarınızla iletişim kurmak için Almanca öğrenmek isteyenler için uygundur. Temel kelime haznesi, basit diyaloglar ve günlük rutinleri anlatma becerileri üzerinde durulur. Gerçek hayat senaryoları ile eğlenceli ve pratik bir öğrenme deneyimi sunulmaktadır.', icon: Globe },
  ]

  const testimonials = [
    { name: 'Ahmet K.', role: 'Mühendis - A2 Sertifika', text: '4 ayda A2 seviyesini tamamladım ve Goethe sınavını başarıyla geçtim. Almanya\'da iş bulma sürecim şimdi çok daha kolay.', rating: 5 },
    { name: 'Fatma Y.', role: 'Ev Hanımı - A1 Sertifika', text: 'Hiç Almanca bilmiyordum ama 3 ayda A1 seviyesini tamamlayıp eşimle birleştim. Çok sabırlı ve anlayışlı bir eğitmen.', rating: 5 },
    { name: 'Mehmet S.', role: 'Tekniker - A2 Sertifika', text: 'Online dersler çok verimliydi. İşimden dolayı vakit bulamıyordum ama esnek saatler sayesinde hedefime ulaştım.', rating: 5 },
  ]

  const whyChooseUs = [
    { title: 'Akademik + Pratik Deneyim', subtitle: 'Teori ve pratik bir arada', description: 'Hem teorik bilgi hem de gerçek hayat tecrübesi. Almanya\'da yaşama deneyimi ile kültürel bağlamda öğrenme.', icon: GraduationCap },
    { title: 'Kişiselleştirilmiş Öğrenme', subtitle: 'Size özel müfredat', description: 'Her öğrencinin ihtiyaçlarına göre özelleştirilmiş program. Farklı öğrenme stillerine uyum sağlama.', icon: Target },
    { title: 'Esnek Ders Formatları', subtitle: 'Size uygun format', description: 'Online veya yüz yüze, özel veya grup dersleri. Programınıza uygun esnek zamanlama seçenekleri.', icon: Zap },
    { title: 'Uygun Fiyat Politikası', subtitle: 'Bütçe dostu', description: 'Kaliteli eğitimi ekonomik fiyatlarla sunma. Piyasa ortalamasının altında rekabetçi fiyatlandırma.', icon: Award },
    { title: 'Sınav Odaklı Hazırlık', subtitle: 'Hedefe yönelik', description: 'Goethe sınavlarına özel stratejiler ve pratikler. Sınav formatına uygun hazırlık materyalleri.', icon: BadgeCheck },
    { title: 'Öğrenci Başarısı Odaklı', subtitle: 'Sonuç odaklı', description: 'Sertifika alana kadar destek ve rehberlik. Öğrenci başarısı odaklı yaklaşım ve sürekli geri bildirim.', icon: Star },
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
                <h2 className="text-[clamp(1rem,4vw,1.75rem)] font-bold text-gray-900 mb-3 whitespace-nowrap">
                  Ozan Akgün
                </h2>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm mb-3">
                  <Award className="w-4 h-4 flex-shrink-0" />
                  <span>Goethe C1 Sertifikalı</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  A1-A2-B1 | Online & Yüz Yüze | Goethe TELC Hazırlık
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-1.5 text-gray-700 text-sm">
                    <BadgeCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>4+ Yıl</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-700 text-sm">
                    <BadgeCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>C1 Sertifika</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-700 text-sm">
                    <BadgeCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>%60+ Başarı</span>
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
              <a href="#egitmen" className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Users className="w-5 h-5" />
                Eğitmen
              </a>
              <a href="#fiyat" className="bg-amber-100 hover:bg-amber-200 text-amber-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <TrendingUp className="w-5 h-5" />
                Fiyatlandırma
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


        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8 bg-white">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
      </div>

      {/* Exam Preparation Section */}
      <section id="sinav" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Goethe - TELC Sınavlarına Hazırlık
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uluslararası geçerli Almanca dil yeterlilik sertifikaları
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Sınav Türleri</h3>
            
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Goethe Sınav Yapısı ve Değerlendirme
            </h2>
            <p className="text-gray-600">Her modülden en az %60 (60 puan) alınmalıdır.</p>
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
                  <h4 className="text-lg font-bold text-green-900 mb-2">Önemli Not</h4>
                  <p className="text-sm text-green-800">
                    Öğrenci eğer sınavı kazanabilecek bir durumdaysa ve akademik bir hedefi yoksa dersi bitirip sınava yönlendiririm. (Ders saatini bitirmesine gerek yok)
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
      <section className="py-12 md:py-16 bg-white">
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
      <section className="py-12 md:py-16 bg-gray-50">
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

      {/* Divider */}
      <div className="flex items-center justify-center py-8 bg-white">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
      </div>

      {/* Pricing Section */}
      <section id="fiyat" className="py-12 md:py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fiyatlandırma ve Paketler
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Kaliteli eğitim, ekonomik fiyatlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Özel Dersler</h3>
              <p className="text-gray-500 mb-6">Uygun fiyatlı birebir eğitim seçeneği</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Kişiselleştirilmiş program
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Bireysel ilerleme takibi
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Esnek zamanlama
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Grup Dersleri</h3>
              <p className="text-gray-500 mb-6">Daha da uygun fiyatlarla kaliteli eğitim</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Grup dinamiği ile etkileşim
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Ekonomik seçenek
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Sosyal öğrenme ortamı
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Piyasa Karşılaştırması</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4 text-center">
                    <p className="text-xs text-red-600 mb-1">Piyasa Ortalaması</p>
                    <p className="text-lg font-bold text-red-600">700-4000 TL/saat</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <p className="text-xs text-green-600 mb-1">Bu Kurs</p>
                    <p className="text-lg font-bold text-green-600">Rekabetçi Fiyat</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-3">
                <p className="text-xs text-gray-500 text-center">
                  Fiyatlandırma: Ders saatine, seviyeye ve formata göre değişkenlik gösterir. Detaylı bilgi için iletişime geçin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Profile */}
      <section id="egitmen" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ozan Akgün
            </h2>
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenAccordion(openAccordion === 100 ? null : 100)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">Akademik Geçmiş ve İş Hayatı</h3>
                </div>
                <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 ${openAccordion === 100 ? 'rotate-180' : ''}`}>
                  <ChevronRight className="w-5 h-5 text-gray-400 rotate-90" />
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${openAccordion === 100 ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-5 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Cağaloğlu Anadolu Lisesi'nde Almanca eğitimi aldı (2003), ardından Aachen/Almanya'da gerçek dil ortamında pratik tecrübe kazandı (2005-07). YDT sınavında yüksek başarı göstererek akademik dil yeterliliğini kanıtladı (2008). Goethe-Zertifikat C1 sertifikası ile ileri düzey Almanca yeterliliğini belgeledi (2015). 2022'den günümüze birçok yabancı dil kurumunda Almanca öğretmenliği yapmakta olup, 2024-2025 yılları arasında Wayfair firmasında müşteri temsilcisi olarak da çalışma deneyimi bulunmaktadır.
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

      {/* Teaching Approach */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mesleki Tecrübe ve Öğretim Yaklaşımı
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teachingApproach.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Çeşitli Sektörlerden Öğrenciler</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-lg shadow-md p-5 text-center border border-gray-100">
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mühendisler ve Teknik Personel</h4>
                <p className="text-xs text-gray-500">Almanya'da çalışmak isteyen mühendisler ve teknik çalışanlar için özel hazırlık programları</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5 text-center border border-gray-100">
                <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Doktorlar ve Akademisyenler</h4>
                <p className="text-xs text-gray-500">Sağlık sektörü ve akademik kariyer hedefleyenler için yoğun dil eğitimi</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5 text-center border border-gray-100">
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-3">
                  <Briefcase className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">İş İnsanları ve Profesyoneller</h4>
                <p className="text-xs text-gray-500">İş dünyasında kariyer yapmak isteyen profesyoneller için iş Almancası</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-5 text-center border border-gray-100">
                <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Öğrenciler ve Aileler</h4>
                <p className="text-xs text-gray-500">Aile birleşimi ve eğitim amaçlı Almanca öğrenmek isteyenler</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8 bg-white">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
      </div>

      {/* Target Groups */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kimler İçin Uygun?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Farklı hedefler ve ihtiyaçlar için özelleştirilmiş çözümler
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {targetGroups.map((group, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <group.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{group.title}</h3>
                  </div>
                  <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 ${openAccordion === idx ? 'rotate-180' : ''}`}>
                    <ChevronRight className="w-5 h-5 text-gray-400 rotate-90" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-200 ${openAccordion === idx ? 'max-h-80' : 'max-h-0'}`}
                >
                  <div className="px-3 pb-3 pt-0">
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded mb-2">{group.target}</span>
                    <p className="text-sm text-gray-600">{group.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8 bg-white">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
      </div>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Bu Kurs?
            </h2>
            <p className="text-gray-600">Sizi başarıya götüren farklılıklar</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded mb-3">{item.subtitle}</span>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8 bg-white">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
      </div>

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
            <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto">
              Online veya yüz yüze dersler için bilgi alın. Ücretsiz seviye tespit sınavı ve danışmanlık ile size en uygun programı birlikte belirleyelim.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mb-12">
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
              <div className="bg-gray-50 rounded-lg p-6">
                <Calendar className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Program Planlama</h4>
                <p className="text-sm text-gray-500">Size özel program oluşturalım</p>
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
