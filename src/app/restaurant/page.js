import Image from "next/image";

export default function Page() {
  return (
    <div className="pt-28 pb-12">
      <div className="">
        <div className="">
          <div class="w-full relative">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Picture of the author"
              width={1920}
              height={500}
              className="h-[180px] w-[100%] object-center object-cover"
            />
            <div class="absolute top-1/3 my-auto text-center px-4 w-full">
              <h1 class="text-white text-5xl text-stroke-3 uppercase">
                Restoran & Bar
              </h1>
            </div>
          </div>
          <div className="mx-auto container pt-16">
            <h1 className="text-[#0d3c5a] text-3xl">Restoran</h1>
            <div className="flex flex-row gap-x-12">
              <div className="w-[1200px]">
                <p className="pt-6 text-lg leading-relaxed">
                  Loryma misafirleri sağlıklı beslenmenin, tazeliğin ve lezzetin
                  Loryma mutfaklarında çok önemli bir yere sahip olduğunu
                  bilirler. Kendi ürettiğimiz sızma zeytinyağımız, Ege’nin
                  meşhur yeşillikleri, mevsimlik ve kısmen bahçelerimizde
                  yetişen sebzeler,hem Açık Büfe Restoranımızda, hem dea la
                  carte hizmeti sunan “Loryma Bistro”muz da kullanılmaktadır.
                  <br className="mb-4" />
                  Açık Büfe Restoranın hem geniş ve klimalı salonu, hem de teras
                  ve balkon kısmı Turunç’un muhteşemkörfezmanzarasına hakimdir.
                  Anadolu ve Egeyemek kültüründen esinle taze mezeler ve
                  lezzetli sıcakyemek seçenekleri sunan büfe, terasındaki
                  geleneksel taş fırındançıkan nefis pide ve pizzaçeşitleriyle
                  tamamlanır.Bu restoran, sabah kahvaltısı için saat 7 ile 10
                  arası, akşam yemeği servisi için ise saat 19 ile 21:30 arası
                  yarım pansiyon hizmeti vermektedir. <br className="mb-4" />
                  Bistro tarzında yeniden döşenmiş “Loryma Bistro” otelimizin
                  deneyimlenmesi gereken mekanlarından bir tanesidir. Akdeniz ve
                  Türk mutfağının varyasonlarını sunanbistro aynı zamanda “wine
                  bar” olarak güzel şarap seçkisini Loryma misafirlerinin
                  beğenisine sunmaktadır. Bu sırada geniş terasından Ege
                  Denizi’nin derin maviliklerini izlemek, misafirlerimizin
                  LorymaResort’ta geçirdikleri tatillerini unutulmaz kılan
                  anlardan biridir.
                </p>
              </div>
              <div className="flex flex-col gap-y-4 justify-center">
                <div className="flex flex-row gap-x-4">
                  <Image
                    src="https://i.hizliresim.com/guxwrnl.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg h-[175px] w-[250px] object-center object-cover"
                  />
                  <Image
                    src="https://i.hizliresim.com/guxwrnl.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg h-[175px] w-[250px] object-center object-cover"
                  />
                </div>
                <div className="flex flex-row gap-x-4">
                  <Image
                    src="https://i.hizliresim.com/guxwrnl.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg h-[175px] w-[250px] object-center object-cover"
                  />
                  <Image
                    src="https://i.hizliresim.com/guxwrnl.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg h-[175px] w-[250px] object-center object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 space-y-6">
              <div className="flex flex-row gap-x-12">
                <div className="">
                  <Image
                    src="https://i.hizliresim.com/guxwrnl.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg h-[350px] w-[500px] object-center object-cover"
                  />
                </div>
                <div className="w-[1000px] flex justify-center flex-col">
                  <h1 className="text-[#0d3c5a] font-semibold text-2xl">
                    LORYMANIN BARLARI
                  </h1>
                  <p className="pt-6 text-lg leading-relaxed">
                    Gün ortasında lezzetli bir kahve, serinletici ev yapımı
                    limonataları veya taze meşrubatları Loryma’nın deniz
                    manzarasına nazır Pool Bar’ında içmenin zevki ayrıdır. Açık
                    havuz ve spa alanının arasında bulunmasıyla merkezi bir
                    konumu olan bu bar, kaliteli müziği, büyük boy düz ekran
                    televizyonu ve Turunç Koyu’na açılan muhteşem manzarasıyla
                    ideal bir buluşma noktasıdır. Akşamüstü aperitifi içinse
                    tercih edilen mekan, geniş terası Marmaris Körfezi ve Ege
                    Denizi’nin koyu mavi açıklarına nazır Oxygen Bar’dır.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-center text-4xl text-[#0d3c5a] my-12">
                BARLAR
              </h1>
              <div className="space-y-12">
                <div className="flex flex-row gap-x-12">
                  <div className="">
                    <Image
                      src="https://i.hizliresim.com/guxwrnl.jpg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className="rounded-lg h-[350px] w-[500px] object-center object-cover"
                    />
                  </div>
                  <div className="w-[1000px] flex justify-center flex-col">
                    <h1 className="text-[#0d3c5a] font-semibold text-2xl">
                      LORYMANIN BARLARI
                    </h1>
                    <p className="pt-6 text-lg leading-relaxed">
                      Gün ortasında lezzetli bir kahve, serinletici ev yapımı
                      limonataları veya taze meşrubatları Loryma’nın deniz
                      manzarasına nazır Pool Bar’ında içmenin zevki ayrıdır.
                      Açık havuz ve spa alanının arasında bulunmasıyla merkezi
                      bir konumu olan bu bar, kaliteli müziği, büyük boy düz
                      ekran televizyonu ve Turunç Koyu’na açılan muhteşem
                      manzarasıyla ideal bir buluşma noktasıdır. Akşamüstü
                      aperitifi içinse tercih edilen mekan, geniş terası
                      Marmaris Körfezi ve Ege Denizi’nin koyu mavi açıklarına
                      nazır Oxygen Bar’dır.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-12">
                  <div className="">
                    <Image
                      src="https://i.hizliresim.com/guxwrnl.jpg"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className="rounded-lg h-[350px] w-[500px] object-center object-cover"
                    />
                  </div>
                  <div className="w-[1000px] flex justify-center flex-col">
                    <h1 className="text-[#0d3c5a] font-semibold text-2xl">
                      LORYMANIN BARLARI
                    </h1>
                    <p className="pt-6 text-lg leading-relaxed">
                      Gün ortasında lezzetli bir kahve, serinletici ev yapımı
                      limonataları veya taze meşrubatları Loryma’nın deniz
                      manzarasına nazır Pool Bar’ında içmenin zevki ayrıdır.
                      Açık havuz ve spa alanının arasında bulunmasıyla merkezi
                      bir konumu olan bu bar, kaliteli müziği, büyük boy düz
                      ekran televizyonu ve Turunç Koyu’na açılan muhteşem
                      manzarasıyla ideal bir buluşma noktasıdır. Akşamüstü
                      aperitifi içinse tercih edilen mekan, geniş terası
                      Marmaris Körfezi ve Ege Denizi’nin koyu mavi açıklarına
                      nazır Oxygen Bar’dır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[1400px] mx-auto">
              <h1 className="text-center text-4xl text-[#0d3c5a] my-12">
                GALERİ
              </h1>
              <div className="grid grid-cols-4 gap-x-24 gap-y-6 mx-auto">
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[425px] h-[250px]">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[325px] h-[250px] object-center object-cover"
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
