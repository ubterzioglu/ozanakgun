import { useState, useEffect } from 'react'
import { 
  GraduationCap, Clock, Award, BookOpen, Users, Video, MapPin, 
  CheckCircle, Phone, Mail, Calendar, Star, TrendingUp, 
  Globe, FileText, Headphones, PenTool, MessageCircle, 
  ChevronRight, Menu, X, BadgeCheck, Target, Zap, Heart,
  Briefcase
} from 'lucide-react'
import './BilgiPage.css'

function BilgiPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('online')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Kurs Seviyeleri', href: '#seviyeler' },
    { label: 'Sınav Hazırlığı', href: '#sinav' },
    { label: 'Eğitmen', href: '#egitmen' },
    { label: 'Fiyatlandırma', href: '#fiyat' },
    { label: 'İletişim', href: '#iletisim' },
  ]

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
      hours: '40 saat',
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

  const scoringSystem = [
    { range: '90-100 Puan', grade: 'Pek İyi', color: 'bg-emerald-500' },
    { range: '80-89 Puan', grade: 'İyi', color: 'bg-blue-500' },
    { range: '70-79 Puan', grade: 'Orta', color: 'bg-amber-500' },
    { range: '60-69 Puan', grade: 'Geçer', color: 'bg-orange-500' },
    { range: '0-59 Puan', grade: 'Başarısız', color: 'bg-red-500' },
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

  const courseFormats = [
    { title: 'Özel Ders', subtitle: 'Birebir odaklanma', description: 'Kişiselleştirilmiş program, bireysel ilerleme hızı' },
    { title: 'Grup Dersi', subtitle: 'Ekonomik seçenek', description: 'Daha uygun fiyat, grup dinamiği ile etkileşim' },
    { title: 'Karma (Hybrid)', subtitle: 'Online + Yüz yüze', description: 'Esnek kombinasyon seçenekleri' },
  ]

  const timeline = [
    { year: '2003', title: 'Cağaloğlu Anadolu Lisesi', description: 'Almanca eğitimli Türkiye\'nin en iyi liselerinden biri' },
    { year: '2005-07', title: 'Aachen, Almanya Deneyimi', description: 'Gerçek dil ortamında pratik tecrübe' },
    { year: '2008', title: 'YDT Sınavı Yüksek Başarı', description: 'Akademik dil yeterliliği kanıtı' },
    { year: '2015', title: 'Goethe-Zertifikat C1', description: 'İleri düzey Almanca yeterlilik sertifikası' },
    { year: '2022-Günümüz', title: 'Kurumsal Deneyim', description: 'Birçok yabancı dil kurumunda Almanca öğretmenliği' },
    { year: '2024-2025', title: 'Wayfair Firması', description: 'Müşteri temsilcisi olarak çalışma deneyimi' },
  ]

  const teachingApproach = [
    { title: 'Öğrenci Odaklı', description: 'Her öğrencinin ihtiyaçlarına göre özelleştirilmiş program', icon: Target },
    { title: 'Esnek Uyum', description: 'Farklı öğrenme stillerine ve hedeflere uyum sağlama', icon: Zap },
    { title: 'Pratik Odaklı', description: 'Gerçek hayat senaryoları ile konuşma pratiği', icon: Globe },
    { title: 'Sınav Stratejileri', description: 'Goethe sınavlarına özel hazırlık teknikleri', icon: BadgeCheck },
  ]

  const targetGroups = [
    { title: 'Aile Birleşimi İçin', target: 'A1 Sertifikası', description: 'Almanya\'da aile birleşimi vizesi için zorunlu A1 sertifikasına ihtiyaç duyanlar.', icon: Heart },
    { title: 'Teknik Çalışanlar', target: 'A2 Sertifikası', description: 'Almanya\'da çalışmak isteyen teknik personel.', icon: TrendingUp },
    { title: 'İşe Kabul İçin', target: 'A1 veya A2', description: 'İşe kabul alması gereken ve sertifika ile süreci tamamlamak isteyenler.', icon: Briefcase },
    { title: 'Az Almanca Gerektiren İşler', target: 'Temel iletişim yeterli', description: 'Çok Almanca gerektirmeyen iş pozisyonları için temel iletişim becerisi.', icon: CheckCircle },
    { title: 'Pratik Kullanım İsteyenler', target: 'Günlük konuşma odaklı', description: 'Akademik hedefi olmayan, pratik Almanca kullanımı isteyenler.', icon: MessageCircle },
    { title: 'Günlük İletişim', target: 'Günlük hayat odaklı', description: 'Günlük hayatta Almanca ile iletişim kurmak isteyenler.', icon: Globe },
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
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-900 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className={`font-bold text-lg hidden sm:block ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Almanca Kursu</span>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className={`text-sm font-medium hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:+905322700666" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                <Phone className="w-4 h-4" />
                İletişim
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="block text-gray-700 hover:text-red-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:+905322700666" className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                İletişim
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-600/30 mb-6">
              <Award className="w-3 h-3" />
              Goethe C1 Sertifikalı Eğitmen
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Almanca <span className="text-red-500">Dil Kursu</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              OZAN AKGÜN
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              A1 - A2 - B1 Seviyeleri | Online & Yüz Yüze | Goethe TELC Sınavlarına Hazırlık
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-gray-300">
                <BadgeCheck className="w-5 h-5 text-red-500" />
                <span>4+ Yıl Tecrübe</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <BadgeCheck className="w-5 h-5 text-red-500" />
                <span>Goethe C1 Sertifikalı</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <BadgeCheck className="w-5 h-5 text-red-500" />
                <span>%60+ Başarı Oranı</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+905322700666" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Calendar className="w-5 h-5" />
                Ücretsiz Deneme Dersi
              </a>
              <a href="tel:+905322700666" className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Phone className="w-5 h-5" />
                İletişime Geç
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white/50 rotate-90" />
        </div>
      </section>

      {/* Course Levels Section */}
      <section id="seviyeler" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 mb-4">
              <GraduationCap className="w-3 h-3" />
              Kurs Seviyeleri
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kurs Seviyeleri ve Ders Saatleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Düzenli derse katılım ve ödev yapılması durumunda A1 ve A2 seviyeleri çok rahat öğrenilir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg px-8 py-4">
              <p className="font-semibold">A1 + A2 Birleşik Paket = 90 saat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Preparation Section */}
      <section id="sinav" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 mb-4">
              <Award className="w-3 h-3" />
              Sertifika Programı
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Goethe - TELC Sınavlarına Hazırlık
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uluslararası geçerli Almanca dil yeterlilik sertifikaları
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Exam Types */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Sınav Türleri</h3>
              
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

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>Not:</strong> Öğrenci eğer sınavı kazanabilecek bir durumdaysa ve akademik bir hedefi yoksa dersi bitirip sınava yönlendiririm. (Ders saatini bitirmesine gerek yok)
                </p>
              </div>
            </div>

            {/* Scoring System */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Geçme Notları</h3>
              <p className="text-gray-600">Tüm Sınavlarda %60 ve üstü puan alanlar başarılı sayılır.</p>
              
              <div className="space-y-3">
                {scoringSystem.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`w-3 h-12 rounded-full ${item.color}`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">{item.grade}</span>
                        <span className="text-sm text-gray-500">{item.range}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: `${(idx + 1) * 20}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 text-white rounded-lg p-6 mt-6">
                <h4 className="font-bold mb-2">Geçme Koşulu</h4>
                <p className="text-gray-300">Her modülden en az %60 (60 puan) alınmalıdır.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Structure */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Goethe Sınav Yapısı ve Değerlendirme
            </h2>
            <p className="text-gray-600">Dört temel dil becerisinin kapsamlı değerlendirmesi</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {examStructure.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-4">{item.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">A1:</span>
                    <span className="font-medium">{item.a1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">A2:</span>
                    <span className="font-medium">{item.a2}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">B1:</span>
                    <span className="font-medium">{item.b1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 mb-4">
              <BookOpen className="w-3 h-3" />
              Eğitim Yöntemleri
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eğitim Yöntemleri ve Ders Formatları
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Esnek ve etkileşimli öğrenme deneyimi
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('online')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'online' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Online Dersler
                </button>
                <button
                  onClick={() => setActiveTab('yuz-yuze')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'yuz-yuze' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Yüz Yüze Dersler
                </button>
              </div>
            </div>
            
            {activeTab === 'online' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Dersler</h3>
                  <ul className="space-y-4">
                    {teachingMethods[0].features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-2xl p-8">
                  <h4 className="font-bold text-gray-900 mb-4">Ders Formatları</h4>
                  <div className="space-y-4">
                    {courseFormats.map((format, fidx) => (
                      <div key={fidx} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-gray-900">{format.title}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{format.subtitle}</span>
                        </div>
                        <p className="text-sm text-gray-500">{format.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'yuz-yuze' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Yüz Yüze Dersler</h3>
                  <ul className="space-y-4">
                    {teachingMethods[1].features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-2xl p-8">
                  <h4 className="font-bold text-gray-900 mb-4">Ders Formatları</h4>
                  <div className="space-y-4">
                    {courseFormats.map((format, fidx) => (
                      <div key={fidx} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-gray-900">{format.title}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{format.subtitle}</span>
                        </div>
                        <p className="text-sm text-gray-500">{format.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="fiyat" className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white mb-4">
              <Award className="w-3 h-3" />
              Fiyatlandırma
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fiyatlandırma ve Paketler
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kaliteli eğitim, ekonomik fiyatlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold">Özel Dersler</h3>
              <p className="text-gray-400 mb-6">Uygun fiyatlı birebir eğitim seçeneği</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Kişiselleştirilmiş program
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Bireysel ilerleme takibi
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Esnek zamanlama
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Grup Dersleri</h3>
              <p className="text-gray-400 mb-6">Daha da uygun fiyatlarla kaliteli eğitim</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Grup dinamiği ile etkileşim
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Ekonomik seçenek
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Sosyal öğrenme ortamı
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white/10 rounded-lg p-6">
              <p className="text-sm text-gray-400 mb-2">Piyasa Karşılaştırması</p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-xs text-gray-500">Piyasa Ortalaması</p>
                  <p className="text-xl font-bold text-gray-400">700-4000 TL/saat</p>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <p className="text-xs text-gray-500">Bu Kurs</p>
                  <p className="text-xl font-bold text-green-400">Rekabetçi Fiyat</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Fiyatlandırma: Ders saatine, seviyeye ve formata göre değişkenlik gösterir. Detaylı bilgi için iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Instructor Profile */}
      <section id="egitmen" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-700 mb-4">
              <GraduationCap className="w-3 h-3" />
              Eğitmen
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              OZAN AKGÜN
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Akademik Geçmiş ve İş Hayatı
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px"></div>
              
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex items-start gap-8 mb-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border border-gray-100">
                      <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded mb-2">{item.year}</span>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mesleki Tecrübe ve Öretim Yaklaşımı
            </h2>
            <p className="text-gray-600">4 yıllık kurumsal deneyim ve çeşitli sektörlerden öğrenci portföyü</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Çeşitli Sektörlerden Öğrenciler</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Mühendisler', 'Doktorlar', 'Akademisyenler', 'İş İnsanları', 'Öğrenciler', 'Aile Birleşimi'].map((sector, idx) => (
                <span key={idx} className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-700 mb-4">
              <Target className="w-3 h-3" />
              Hedef Kitle
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kimler İçin Uygun?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Farklı hedefler ve ihtiyaçlar için özelleştirilmiş çözümler
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetGroups.map((group, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  <group.icon className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">{group.title}</h3>
                <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded mb-3">{group.target}</span>
                <p className="text-sm text-gray-600">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 mb-4">
              <Star className="w-3 h-3" />
              Başarı Hikayeleri
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Başarı Hikayeleri ve Öğrenci Görüşleri
            </h2>
            <p className="text-gray-600">Gerçek başarı öyküleri ve öğrenci deneyimleri</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg px-8 py-4">
              <p className="font-semibold">Goethe Sınav Başarı Oranı: %60+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 mb-4">
              <Award className="w-3 h-3" />
              Neden Biz?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Bu Kurs?
            </h2>
            <p className="text-gray-600">Sizi başarıya götüren farklılıklar</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6 hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded mb-3">{item.subtitle}</span>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="iletisim" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              BAŞLAMAYA HAZIR MISINIZ?
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Almanca Öğrenme Yolculuğunuza Başlayın!
            </p>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              Online veya yüz yüze dersler için bilgi alın. Ücretsiz seviye tespit sınavı ve danışmanlık ile size en uygun programı birlikte belirleyelim.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Phone className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">İletişim</h4>
                <p className="text-sm text-gray-400">Bize ulaşın, sorularınızı yanıtlayalım</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <FileText className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Ücretsiz Seviye Tespiti</h4>
                <p className="text-sm text-gray-400">Mevcut dil seviyenizi belirleyelim</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Calendar className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Program Planlama</h4>
                <p className="text-sm text-gray-400">Size özel program oluşturalım</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+905322700666" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Calendar className="w-5 h-5" />
                Ücretsiz Deneme Dersi
              </a>
              <a href="tel:+905322700666" className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Phone className="w-5 h-5" />
                İletişime Geçin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-900 to-red-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="font-bold text-lg text-white">Almanca Kursu</span>
              </div>
              <p className="text-sm">
                Ozan Akgün ile profesyonel Almanca eğitimi. A1, A2, B1 seviyeleri ve Goethe sınav hazırlığı.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#seviyeler" className="hover:text-red-500 transition-colors">Kurs Seviyeleri</a></li>
                <li><a href="#sinav" className="hover:text-red-500 transition-colors">Sınav Hazırlığı</a></li>
                <li><a href="#egitmen" className="hover:text-red-500 transition-colors">Eğitmen</a></li>
                <li><a href="#fiyat" className="hover:text-red-500 transition-colors">Fiyatlandırma</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">İletişim</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+90 532 270 0666</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>oznkgun@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Sertifikalar</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-green-500" />
                  <span>Goethe C1 Sertifikalı</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-green-500" />
                  <span>4+ Yıl Tecrübe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-sm">
              <p>&copy; 2024 Almanca Dil Kursu - Ozan Akgün. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BilgiPage
