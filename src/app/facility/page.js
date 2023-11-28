import Image from "next/image";

export default function Page() {
  return (
    <div className="pt-28 pb-12">
      <div className="">
        <div className="">
          <div class="w-full relative">
            <Image
              src="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Picture of the author"
              width={1920}
              height={500}
              className="h-[180px] w-[100%] object-center object-cover"
            />
            <div class="absolute top-1/3 my-auto text-center px-4 w-full">
              <h1 class="text-white text-5xl text-stroke-3 uppercase">
                Loryma Resort
              </h1>
            </div>
          </div>
          <div className="mx-auto container pt-16">
            <div className="flex flex-row gap-x-12">
              <div className="w-[950px]">
                <h1 className="text-[#0d3c5a] text-3xl">
                  Loryma Resort Hakkında
                </h1>
                <p className="pt-4 text-lg leading-relaxed">
                  Kuruluşundan beri Loryma Resort, çağa ve yöreye uygun tatil
                  modelleri geliştirmeyi hedefleyen öncü ruha sahiptir.
                  Tesisimiz, 1989 dan beri Bozburun Yarımadasının ekonomik ve
                  çevresel kalkınmasına tutarlı ve sürdürülebilir katkı
                  sağlamaktadır.
                </p>
                <ul className="pt-4 list-disc space-y-4">
                  <li className="text-lg">
                    Loryma Resort, Bozburun Yarımadasının muhteşem deniz ve dağ
                    manzarasına sahip 200 metre rakımdan Turunç Koyuna bakan
                    yemyeşil bir yamaç üzerinde konumlandırılmıştır. Doğal bahçe
                    içinde, huzurlu, dingin ortamda 164 süit, özel rezidans
                    daireler, 2 bar, 2 restoran, havuz, miniclub, açık park yeri
                    gibi birçok hizmet birimi içermektedir. Ayrıca doğa sporu
                    programları ve spa ve hamamında wellness, fitness ve yoga
                    seansları sunan tesis, sürdürülebilir turizm düşüncesiyle
                    çevreye duyarlı ve kalıcı bir yapı olarak tasarlanmıştır.
                    Otel, sunduğu seçkin hizmetleriyle ve dinlendirici tatil
                    seçenekleriyle birlikte, Güney Ege’nin mükemmel doğası
                    içinde aktif tatil olanaklarından yararlanmayı arzu eden
                    ailelere ve her yaştan çiftlere, arkadaş gruplarına ve tek
                    başına seyahat edenlere hitap eder.
                  </li>
                  <li className="text-lg">
                    Bulunduğu yamacın doğal bitki örtüsü içerisinde kaybolan
                    tesis, 24.000 metrekarelik bir alanı kapsamaktadır. Tesisin
                    mimarisinde doğal taş gibi yöresel unsurları fonksiyonel,
                    modern ve estetik bir mimari stil ile harmanlayan bir
                    yaklaşım hakimdir. Tesisteki tüm yapıların izlediği yalın
                    mimari çizgi, yoğun ve nitelikli taş duvar işçiliğiyle
                    yumuşatılmıştır. Böylece Loryma Resort Hotel, entegre
                    edildiği doğal çevresiyle, yani Turunç Koyunun çam ormanı ve
                    zeytinliklerle bezenmiş yamaç bölgesiyle ahenk
                    içindedir.Loryma misafirleri, sağlıklı beslenmenin,
                    tazeliğin ve lezzetin Loryma mutfaklarında çok önemli bir
                    yere sahip olduğunu bilirler. Otel kendi doğal sızma
                    zeytinyağını üretmekte, kendi bahçesinde organik sebze
                    yetiştiriciliği yapmaktadır. Bu taze ve mevsimsel seçenekler
                    Loryma’nın zengin büfesinde ve Loryma Bistro’nun A La Carte
                    servisinde sunulmaktadır.
                  </li>
                  <li className="text-lg">
                    1989 senesinde hizmete açılan otel 1997 yılında
                    genişletilmiş, 2008 ile 2012 arasında ve son olarak 2018’de
                    yapılan kapsamlı yenileme çalışmalarıyla son halini
                    almıştır.
                  </li>
                </ul>
                <div className="mt-12 flex flex-row gap-x-12">
                  <div className="w-2/6 text-center rounded-lg bg-cyan-800 p-6 text-white text-2xl flex flex-col">
                    <span>164</span>
                    <span>Oda</span>
                  </div>
                  <div className="w-2/6 text-center rounded-lg bg-lime-800 p-6 text-white text-2xl flex flex-col">
                    <span>2</span>
                    <span>Restoran</span>
                  </div>
                  <div className="w-2/6 text-center rounded-lg bg-indigo-800 p-6 text-white text-2xl flex flex-col">
                    <span>2</span>
                    <span>Bar</span>
                  </div>
                </div>
              </div>
              <Image
                src="https://i.hizliresim.com/guxwrnl.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-lg h-[320px] w-[500px] object-center object-cover"
              />
            </div>
            <div className="flex flex-row gap-x-36">
              <div className="">
                <h1 className="text-[#0d3c5a] text-3xl mt-12">
                  RAHATINIZ İÇİN
                </h1>
                <ul className="pt-2 list-disc space-y-1">
                  <li className="text-lg">Resepsiyon 7/24</li>
                  <li className="text-lg">
                    Özel plaj ( yeme – içme ekstra ücretlidir)
                  </li>
                  <li className="text-lg">
                    Wi-Fi (sadece resepsiyon alanında ücretsiz) ($)
                  </li>
                  <li className="text-lg">
                    Gün içerisinde Turunç plajına ücretsiz servis
                  </li>
                  <li className="text-lg">Telefon</li>
                  <li className="text-lg">Otopark</li>
                  <li className="text-lg">Talep halinde doktor</li>
                  <li className="text-lg">Mini market</li>
                  <li className="text-lg">
                    Yetişkin ve çocuklar için animasyon aktiviteleri.
                  </li>
                  <li className="text-lg">Şezlong, şemsiye ve havuz havlusu</li>
                  <li className="text-lg">
                    Seminer salonları - her biri 90 kişilik
                  </li>
                </ul>
                <h1 className="text-[#0d3c5a] text-3xl mt-6">
                  ÇOCUKLARINIZ İÇİN
                </h1>
                <ul className="pt-2 list-disc space-y-1">
                  <li className="text-lg">1 çocuk havuzu</li>
                  <li className="text-lg">Çocuklar için animasyon</li>
                  <li className="text-lg">listprop29</li>
                </ul>
              </div>
              <div className="">
                <h1 className="text-[#0d3c5a] text-3xl mt-12">FORM & SAĞLIK</h1>
                <ul className="pt-2 list-disc space-y-1 flex flex-row gap-x-12">
                  <div className="space-y-1">
                    <li className="text-lg">Resepsiyon 7/24</li>
                    <li className="text-lg">
                      Özel plaj ( yeme – içme ekstra ücretlidir)
                    </li>
                    <li className="text-lg">
                      Wi-Fi (sadece resepsiyon alanında ücretsiz) ($)
                    </li>
                    <li className="text-lg">
                      Gün içerisinde Turunç plajına ücretsiz servis
                    </li>
                    <li className="text-lg">Telefon</li>
                    <li className="text-lg">Otopark</li>
                    <li className="text-lg">Talep halinde doktor</li>
                    <li className="text-lg">Mini market</li>
                    <li className="text-lg">
                      Yetişkin ve çocuklar için animasyon aktiviteleri.
                    </li>
                    <li className="text-lg">
                      Şezlong, şemsiye ve havuz havlusu
                    </li>
                    <li className="text-lg">
                      Seminer salonları - her biri 90 kişilik
                    </li>
                  </div>
                  <div>
                    <ul className="pt-2 list-disc space-y-1">
                      <li className="text-lg">Resepsiyon 7/24</li>
                      <li className="text-lg">
                        Özel plaj ( yeme – içme ekstra ücretlidir)
                      </li>
                      <li className="text-lg">
                        Wi-Fi (sadece resepsiyon alanında ücretsiz) ($)
                      </li>
                      <li className="text-lg">
                        Gün içerisinde Turunç plajına ücretsiz servis
                      </li>
                      <li className="text-lg">Telefon</li>
                      <li className="text-lg">Otopark</li>
                      <li className="text-lg">Talep halinde doktor</li>
                      <li className="text-lg">Mini market</li>
                      <li className="text-lg">
                        Yetişkin ve çocuklar için animasyon aktiviteleri.
                      </li>
                      <li className="text-lg">
                        Şezlong, şemsiye ve havuz havlusu
                      </li>
                      <li className="text-lg">
                        Seminer salonları - her biri 90 kişilik
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-[#0d3c5a] text-3xl">SPA</h1>
              <div className="flex flex-row gap-x-12">
                <div className="w-[800px]">
                  <p className="pt-6 text-lg leading-relaxed">
                    Doğa ve kültür programımız giderek artmakta olan kozmopolit
                    ve metropol hayatından uzaklaşmak isteyen misafirlerimize
                    doğayla iç içe hasat deneyimi sunarak onları huzur dolu
                    zenginleştirici bir konseptin parçası haline getirmeye
                    çalışıyoruz. Dileyen misafirlerimiz, bahçıvanımız ile
                    birlikte tarlamızdan biber, ıspanak, dereotu, patlıcan,
                    pırasa, nane, kabak, lahana, kekik, salatalık, domates,
                    brokoli, yeşil fasulye, karnabahar, salatalık, soğan,
                    semizotu, tere, maydanoz gibi çeşitli ürünleri topladıktan
                    sonra bahçemizdeki soğuk sandviç ve çay ikramı- mızın
                    eşliğinde Türkçe dersi ve çay kültürünü tanıma etkinliğine
                    katılım gösterebilirler. Restoranımızda kullanılan bütün
                    ürünlerimiz taze olup sebzelerin bir çoğu doğal bahçemizden
                    veya yerel tedarikçilerimizden sağlanmaktadır. Fırınımızda
                    ise çoğunlukla ev yapımı ürünler kullanılmaktadır. Mümkün
                    olduğunca konserve ürün kullanımından kaçındığımız
                    restoranımızın kahvaltı büfesinde ise önceden paketlenerek
                    hazırlanmış hiçbir ürün bulunmamakta olup Bozburun
                    Yarımadasındaki arı kovanlarından gelen leziz çam balını da
                    misafirlerimize sunmaktayız. Restoranımız Türk mutağının
                    lezzetli yemeklerini menüsünde barındırarak tesisimizin
                    imzası haline gelmiş olan sağlıklı Akdeniz mutfağının harika
                    bir örneğidir. Misafirlerimiz, yerel otlar, taze sebzeler ve
                    ev yapımı zeytnyağlı çeşitleri ile sınırlı kalmayan
                    menümüzde ayrıca defne yaprağı, biberiye, ada çayı ve kekik
                    gibi ürünler kullanılarak hazırlanan lezzetlerin ve bah-
                    çemizdeki ürünlerden oluşan lezzetli büfemizin tadını
                    çıkarabilirler.
                  </p>
                </div>
                <div className="flex flex-col gap-y-4 justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1610492219815-f76905e3f084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXQlMjBhbmQlMjB2ZWdldGFibGVzfGVufDB8fDB8fHww"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg h-[500px] w-[600px] object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
