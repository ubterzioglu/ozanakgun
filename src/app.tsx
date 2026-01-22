
import { Mail, Phone, MapPin, Linkedin, Instagram, Download, ChevronDown } from 'lucide-react';

const App = () => {
    // Updated mock data based on the CV content
    const personalInfo = {
        name: "Ozan Akgün",
        title: "Ekonomi Mezunu & Almanca Eğitmeni",
        location: "Üsküdar, İstanbul",
        email: "oznkgun@gmail.com",
        phone: "+90 532 270 0666"
    };

    const experience = [
        {
            id: 1,
            title: "Almanca Satış Temsilcisi",
            company: "Wayfair - Telus",
            period: "Ağustos 2024 - Nisan 2025",
            description: "E-posta ve canlı destek üzerinden gelen müşteri taleplerini hızlı ve etkili şekilde yanıtladım. Müşteri şikayet ve sorunlarını analiz ederek çözüm odaklı geri dönüşler sağladım. Müşteri memnuniyetini arttırmaya yönelik profesyonel yazışmalar gerçekleştirdim."
        },
        {
            id: 2,
            title: "Almanca Eğitmeni",
            company: "Ümraniye English Time",
            period: "Eylül 2023 - Ağustos 2024",
            description: "Grup dersleri ve bireysel dersler verdim (A1 ve A2 grup dersleri). Goethe-Zertifikat, aile birleşimi (Goethe Zertifikat A1), TELC sınavlarına yönelik dersler verdim. Öğrenci gereksinimlerine uygun, katılımı en üst düzeye çıkaran ders programları hazırladım."
        },
        {
            id: 3,
            title: "Almanca Eğitmeni",
            company: "Maltepe İngiliz Kültür",
            period: "Temmuz 2023 - Şubat 2024",
            description: "B1 ve B2 seviyesinde grup eğitimi verdim."
        },
        {
            id: 4,
            title: "Almanca Eğitmeni",
            company: "Maltepe Amerikan Kültür",
            period: "Ağustos 2023 - Şubat 2024",
            description: "A1 ve A2 seviyesinde grup dersleri verdim."
        },
        {
            id: 5,
            title: "Almanca Eğitmeni",
            company: "Levent Amerikan Kültür",
            period: "Eylül 2022 - Kasım 2023",
            description: "Sprachdiplom ve aile birleşimi sınavlarına yönelik bireysel dersler verdim. A2 grup dersleri yaptım."
        },
        {
            id: 6,
            title: "Almanca Eğitmeni",
            company: "Beşiktaş English Time",
            period: "Şubat 2023 - Ekim 2023",
            description: "Yüzyüze grup dersleri ve birebir online dersler verdim. Lise öğrencilerine yardımcı olma amaçlı Almanya'da okumak veya orada çalışmak için öğrencilere Almanca'da destek verdim."
        },
        {
            id: 7,
            title: "Almanca Eğitmeni",
            company: "Sancaktepe Amerikan-Ümraniye Amerikan Kültür",
            period: "Şubat 2022 - Ağustos 2022",
            description: "Grup ve bireysel eğitimler verdim. A1 seviyesinde aile birleşim dersleri verdim."
        },
        {
            id: 8,
            title: "Özel Ders",
            company: "Özel",
            period: "Ekim 2021 - Ocak 2022",
            description: "İlkokul öğrencisine özel dersler verdim."
        }
    ];

    const education = [
        {
            id: 1,
            degree: "Ekonomi Lisansı",
            institution: "İstanbul Bilgi Üniversitesi",
            period: "2008 - 2013",
            details: "%%50 burs"
        },
        {
            id: 2,
            degree: "Makine Mühendisliği (Terk)",
            institution: "RWTH Aachen",
            period: "2005 - 2007"
        },
        {
            id: 3,
            degree: "Kimya Mühendisliği (Terk)",
            institution: "İstanbul Yeditepe Üniversitesi",
            period: "2004 - 2005",
            details: "%%100 burs"
        },
        {
            id: 4,
            degree: "Lise",
            institution: "Cağaloğlu Anadolu Lisesi",
            period: "1996 - 2003"
        }
    ];

    const skills = [
        "Almanca (İleri Seviye)",
        "İngilizce (Orta İleri Seviye)",
        "Müşteri Hizmetleri ve Destek",
        "Satış ve Pazarlama",
        "Eğitim ve Öğretim",
        "Analitik Düşünme",
        "Yazılı İletişim"
    ];

    const certifications = [
        {
            id: 1,
            title: "Sprachdiplom 2",
            issuer: "Almanya Kültür Bakanlıkları Konferansı",
            year: "2003",
            description: "Almanya'daki üniversitelerde dil yeterlilik şartını doğrudan karşılar."
        },
        {
            id: 2,
            title: "Goethe Zertifikat C1",
            issuer: "Goethe-Institut",
            year: "2015",
            description: "Akademik seviyede ve profesyonel bağlamda Almanca kullanıldığını gösteren uluslararası geçerliliği olan bir sertifika."
        },
        {
            id: 3,
            title: "Sermaye Piyasası Lisansı - 1",
            issuer: "Sermaye Piyasası Kurulu",
            year: "2016"
        },
        {
            id: 4,
            title: "SPL-2 ve SPL-3",
            issuer: "Sermaye Piyasası Kurulu",
            year: "2016"
        },
        {
            id: 5,
            title: "KPSS Lisans",
            issuer: "ÖSYM",
            year: "2016",
            description: "KPSSP9: 81,61 | KPSSP119: 82,27"
        },
        {
            id: 6,
            title: "İngilizce Dil Kursu",
            issuer: "Boğaziçi Üniversitesi",
            year: "2017-2018",
            description: "İleri seviyede İngilizce kursu."
        },
        {
            id: 7,
            title: "YDS Almanca",
            issuer: "ÖSYM",
            year: "2019",
            description: "Puan: 75"
        }
    ];

    const contactMethods = [
        { icon: Phone, label: "WhatsApp", detail: "Hızlı", value: "+90 532 270 0666" },
        { icon: Linkedin, label: "LinkedIn", detail: "Normal", value: "linkedin.com/in/ozanakgun" },
        { icon: Mail, label: "E-posta", detail: "Yavaş", value: "oznkgun@gmail.com" }
    ];

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`
                    }}
                ></div>

                <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                    <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 mb-8 mx-auto overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                            alt="Ozan Akgün"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
                        {personalInfo.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
                        {personalInfo.title}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-white/80 mb-12">
                        <MapPin size={20} />
                        <span>{personalInfo.location}</span>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        İletişime Geç
                        <ChevronDown size={20} />
                    </a>
                </div>
            </section>

            {/* Navigation */}
            <nav className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-30">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-center gap-8">
                        {['Deneyim', 'Eğitim', 'Beceriler', 'Sertifikalar', 'İletişim'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="font-medium hover:text-gray-600 transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Experience Section */}
            <section id="deneyim" className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">İş Deneyimi</h2>
                    <div className="space-y-12">
                        {experience.map((exp) => (
                            <div key={exp.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                                    <span className="text-gray-600 font-medium">{exp.period}</span>
                                </div>
                                <p className="text-xl text-gray-800 mb-2">{exp.company}</p>
                                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="eğitim" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Eğitim</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {education.map((edu) => (
                            <div key={edu.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                                <h3 className="text-2xl font-semibold mb-4">{edu.degree}</h3>
                                <p className="text-xl text-gray-800 mb-2">{edu.institution}</p>
                                <p className="text-gray-600 font-medium">{edu.period}</p>
                                {edu.details && <p className="text-sm text-gray-500 mt-2">{edu.details}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="beceriler" className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Beceriler</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                            >
                                <p className="text-lg">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="sertifikalar" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Kurs ve Sertifikalar</h2>
                    <div className="space-y-8 max-w-4xl mx-auto">
                        {certifications.map((cert) => (
                            <div key={cert.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-2xl font-semibold">{cert.title}</h3>
                                    <span className="text-gray-600 font-medium">{cert.year}</span>
                                </div>
                                <p className="text-xl text-gray-800 mb-2">{cert.issuer}</p>
                                <p className="text-gray-600">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16">İletişim</h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {contactMethods.map((method, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <method.icon className="w-12 h-12 mx-auto mb-4 text-gray-800" />
                                <h3 className="text-xl font-semibold mb-2">{method.label}</h3>
                                <p className="text-gray-600 mb-2">({method.detail})</p>
                                <p className="text-gray-800 font-medium">{method.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-6 mb-12">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>

                    <a
                        href="/cv.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
                    >
                        <Download size={20} />
                        CV'yi İndir
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-200">
                <div className="max-w-6xl mx-auto text-center text-gray-600">
                    <p>&copy; 2026 Ozan Akgün. Tüm hakları saklıdır.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;


