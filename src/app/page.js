"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  const shortText =
    "Loryma Resort, Bozburun Yarımadası’nın muhteşem deniz ve dağ manzarasına sahip 200 metre rakımdan Turunç Koyu'na bakan yemyeşil bir yamaç üzerinde konumlandırılmıştır. Doğal bahçe içinde, huzurlu, dingin ortamda 164 süit, özel rezidans daireler, 2 bar, 2 restoran, havuz, miniclub, açık park yeri gibi birçok hizmet birimi içermektedir. Ayrıca doğa sporu programları ve spa ve hamamında wellness, fitness ve yoga seansları sunan tesis, ‘’sürdürülebilir turizm’’ düşüncesiyle çevreye duyarlı ve kalıcı bir yapı olarak tasarlanmıştır. Otel, sunduğu seçkin hizmetleriyle ve dinlendirici tatil seçenekleriyle birlikte, Güney Ege’nin mükemmel doğası içinde aktif tatil olanaklarından yararlanmayı arzu eden ailelere ve her yaştan çiftlere, arkadaş gruplarına ve tek başına seyahat edenlere hitap eder.";

  const longText =
    "Loryma Resort, Bozburun Yarımadası’nın muhteşem deniz ve dağ manzarasına sahip 200 metre rakımdan Turunç Koyu'na bakan yemyeşil bir yamaç üzerinde konumlandırılmıştır. Doğal bahçe içinde, huzurlu, dingin ortamda 164 süit, özel rezidans daireler, 2 bar, 2 restoran, havuz, miniclub, açık park yeri gibi birçok hizmet birimi içermektedir. Ayrıca doğa sporu programları ve spa ve hamamında wellness, fitness ve yoga seansları sunan tesis, ‘’sürdürülebilir turizm’’ düşüncesiyle çevreye duyarlı ve kalıcı bir yapı olarak tasarlanmıştır. Otel, sunduğu seçkin hizmetleriyle ve dinlendirici tatil seçenekleriyle birlikte, Güney Ege’nin mükemmel doğası içinde aktif tatil olanaklarından yararlanmayı arzu eden ailelere ve her yaştan çiftlere, arkadaş gruplarına ve tek başına seyahat edenlere hitap eder.Bulunduğu yamacın doğal bitki örtüsü içerisinde kaybolan tesis, 24.000 metrekarelik bir alanı kapsamaktadır. Tesisin mimarisinde doğal taş gibi yöresel unsurları fonksiyonel, modern ve estetik bir mimari stil ile harmanlayan bir yaklaşım hakimdir. Tesisteki tüm yapıların izlediği yalın mimari çizgi, yoğun ve nitelikli taş duvar işçiliğiyle yumuşatılmıştır. Böylece Loryma Resort Hotel, entegre edildiği doğal çevresiyle, yani Turunç Koyu'nun çam ormanı ve zeytinliklerle bezenmiş yamaç bölgesiyle ahenk içindedir. Loryma misafirleri, sağlıklı beslenmenin, tazeliğin ve lezzetin Loryma mutfaklarında çok önemli bir yere sahip olduğunu bilirler. Otel kendi doğal sızma zeytinyağını üretmekte, kendi bahçesinde organik sebze yetiştiriciliği yapmaktadır. Bu taze ve mevsimsel seçenekler Loryma’nın zengin büfesinde ve Loryma Bistro’nun A La Carte servisinde sunulmaktadır. 1989 senesinde hizmete açılan otel 1997 yılında genişletilmiş, 2008 ile 2012 arasında ve son olarak 2018’de yapılan kapsamlı yenileme çalışmalarıyla son halini almış";

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const [image, setImage] = useState(
    "https://www.insplosion.com/blog/wp-content/uploads/2020/12/The-Top-5-Most-Beautiful-Restaurants-in-Toronto-1.jpg"
  );
  const image1 =
    "https://www.insplosion.com/blog/wp-content/uploads/2020/12/The-Top-5-Most-Beautiful-Restaurants-in-Toronto-1.jpg";
  const image2 =
    "https://www.gannett-cdn.com/presto/2019/02/27/USAT/52c2114d-9f01-48b4-b9fd-0f29fb4bd542-ang_Oceanfront_Infinity_Pool_at_Anguillas_Zemi_Beach_House_Hotel__Spa_is_the_go-to_for_relaxation_Credit_Dylan_Cross_Tambourine.jpg?crop=3999,2249,x0,y303&width=3200&height=1800&format=pjpg&auto=webp";
  const image3 =
    "https://gafollowers.com/wp-content/uploads/2015/08/PTspawetroom_hi.jpg";
  const image4 =
    "https://messonghibeach.gr/wp-content/uploads/2015/01/1200P5230012-Copy.jpg";

  const handleImage = (image) => () => {
    setImage(image);
  };

  return (
    <main className="pt-28 pb-4">

      <div class="w-full relative md:h-[500px] lg:h-[750px]">
        <div class="absolute text-center w-full">
          <div className="flex flex-col justify-center items-center h-[250px] md:h-[500px] lg:h-[750px]">
            <h1 class="text-white font-semibold text-stroke-1 md:text-stroke-3 text-lg md:text-3xl lg:text-5xl">
              Size özel fiyat ve promosyonlar ile şimdi rezervasyon <br />
              yapın.
            </h1>
            <div className="bg-red-500 w-5/12 md:w-4/12 lg:w-2/12 mt-4 mx-auto rounded-2xl">
              <p class="text-sm md:text-xl font-semibold uppercase text-white py-2">
                Hemen teklif alin
              </p>
            </div>
          </div>
        </div>
        <Image
          src="https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Next.js Logo"
          width={1920}
          height={1000}
          className="md:h-[500px] lg:h-[750px] h-[250px] object-center object-cover"
        />
      </div>

      <div className="flex items-center justify-center">
        <div className="mt-12">
          <div className="container mx-auto">
            <div className="flex justify-center flex-col items-center text-center py-6">
              <h1 className="text-xl md:text-3xl text-[#0C3B59]">
                Online Rezervasyon Yapın
              </h1>
              <div className="max-w-5xl flex justify-center items-center md:flex-row flex-col px-2 border border-gray-200 mt-8">
                <div className="p-2">
                  <label htmlFor="" className="block text-left text-sm ">
                    Check-in date
                  </label>
                  <input
                    type="text"
                    className="shadow bg-white rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={"09.11.2023"}
                  />
                </div>
                <div className="p-2">
                  <label htmlFor="" className="block text-left text-sm">
                    Check-out date
                  </label>
                  <input
                    type="text"
                    className="shadow bg-white rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={"15.11.2023"}
                  />
                </div>
                <div className="px-2 py-4">
                  <label htmlFor="" className="block text-left text-sm">
                    Misafir Sayısı
                  </label>
                  <input
                    type="text"
                    className="shadow bg-white rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={"2 Yetişkin, 1 Çocuk"}
                  />
                </div>
                <div className="p-2 w-full md:w-auto">
                  <button className="w-full px-3 py-2 md:mt-5 bg-[#2c485a] text-white rounded-lg">
                    Ara
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="py-14">
            <h1 className="text-center text-xl md:text-3xl text-[#0C3B59]">
              Odalarımız
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:p-0 p-2 gap-8 justify-center mt-8">
              <div className="">
                <div className="max-w-md bg-white rounded overflow-hidden shadow-lg hover:shadow-xl">
                  <Image
                    className="w-full hover:scale-110 transition-all duration-500 ease-in-out"
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
                    alt="Property Image"
                    width={1000}
                    height={1000}
                  />
                  <div className="px-4 py-2">
                    <div className="flex flex-row justify-between items-center pt-2">
                      <h2 className="text-lg font-semibold text-gray-600 truncate">
                        room.roomTitle
                      </h2>
                      <button className="bg-[#0c3b59] hover:scale-110 transition-all duration-500 ease-in-out text-white font-medium py-2 px-4 rounded">
                        Detaylar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-md bg-white rounded overflow-hidden shadow-lg hover:shadow-xl">
                  <Image
                    className="w-full hover:scale-110 transition-all duration-500 ease-in-out"
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
                    alt="Property Image"
                    width={1000}
                    height={1000}
                  />
                  <div className="px-4 py-2">
                    <div className="flex flex-row justify-between items-center pt-2">
                      <h2 className="text-lg font-semibold text-gray-600 truncate">
                        room.roomTitle
                      </h2>
                      <button className="bg-[#0c3b59] hover:scale-110 transition-all duration-500 ease-in-out text-white font-medium py-2 px-4 rounded">
                        Detaylar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-md bg-white rounded overflow-hidden shadow-lg hover:shadow-xl">
                  <Image
                    className="w-full hover:scale-110 transition-all duration-500 ease-in-out"
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
                    alt="Property Image"
                    width={1000}
                    height={1000}
                  />
                  <div className="px-4 py-2">
                    <div className="flex flex-row justify-between items-center pt-2">
                      <h2 className="text-lg font-semibold text-gray-600 truncate">
                        room.roomTitle
                      </h2>
                      <button className="bg-[#0c3b59] hover:scale-110 transition-all duration-500 ease-in-out text-white font-medium py-2 px-4 rounded">
                        Detaylar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-[#0D3C5A] to-[#6C96B7] px-4 lg:px-16 py-8 lg:py-20 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="lg:py-6 lg:px-4 flex justify-center items-center flex-row lg:flex-row lg:gap-x-8 md:gap-x-6 gap-x-2 lg:gap-y-0">
              <div className="border-[4px] md:border-[16px] rounded-full border-[#89B022]">
                <Image
                  src="https://cache.marriott.com/marriottassets/marriott/PMIXR/pmixr-exterior-4478-hor-feat.jpg"
                  className="md:w-[270px] md:h-[270px] w-[175px] h-[175px] rounded-full object-cover"
                  alt=""
                  width={270}
                  height={270}
                />
              </div>
              <div className="border-[4px] md:border-[16px] rounded-full border-[#89B022]">
                <Image
                  src="https://cache.marriott.com/marriottassets/marriott/PMIXR/pmixr-exterior-4478-hor-feat.jpg"
                  className="md:w-[270px] md:h-[270px] w-[175px] h-[175px] rounded-full object-cover"
                  alt=""
                  width={270}
                  height={270}
                />
              </div>
            </div>
            <div className="lg:py-6 lg:px-4 py-4 text-center lg:text-left">
              <h1 className="text-xl md:text-3xl mb-4 md:mb-8 text-white">
                Loryma Resort Hotel, Doğa İle Dost Bir Tatil…
              </h1>
              <span className="text-white text-[14px] md:text-[16px] lg:text-[18px]">
                {show ? longText : shortText}
              </span>
              <button
                onClick={toggleShow}
                className="block mx-auto lg:mx-0 mt-4 bg-[#89B022] text-white py-2 px-4 rounded-lg"
              >
                {
                  <span className="text-[14px] md:text-[15px] lg:text-[16px]">
                    {show ? "Daha Az" : "Daha Fazla"}
                  </span>
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col mt-12">
          <div>
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl text-[#0C3B59]">
              Loryma Hizmetleri
            </h1>
            <p className="md:text-base px-4 lg:px-0 text-sm mt-6 md:text-[16px] lg:text-[17px]">
              Loryma Resort misafirleri, bakımlı doğal bahçeler içine
              yerleştirilmiş şık mekanlar ve ayrı binalara dağıtılmış, yalın
              stilde döşenmiş kullanışlı odalarda konaklarlar. Geniş spa
              alanı,yüzme havuzları ve sosyal mekanlarımız, tatillerinde
              kaliteli vakit geçirmek ve dinginliğin tadını çıkarmak isteyen
              konuklarımızı hizmete bekliyorlar. <br />
              <br />
              Sürdürülebilir turizme gönül vermiş bir işletme olarak
              konuklarımızın tatillerini güzel tesisimizin dışında da
              geçirmelerini, yöremizin doğal ve kültürel güzelliklerini tanımaya
              vakit ayırmalarını ve aktif olarak keşfetmelerini umuyor ve teşvik
              ediyoruz. Bunların başında her biri ayrı güzellikte koylarla
              bezenmiş Güney Ege kıyılarımız ve özellikle Karia Yolu’nun
              Bozburun Yarımadası etabı gelir.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 mb-12">
            <div className="flex items-center justify-center">
              <Image
                src={image}
                alt=""
                width={700}
                height={500}
                className="md:w-[700px] md:h-[500px] w-[400px] h-[300px] rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center items-center px-3 md:px-0 md:ml-4 mt-4 space-y-6">
              <div
                onClick={handleImage(image1)}
                className="cursor-pointer flex border border-gray-200 justify-center items-center shadow-md rounded-lg py-3 px-6"
              >
                <Image
                  src="https://www.oasys-me.com/images/restaurant.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] ml-3"
                />
                <div className="ml-8">
                  <h1 className="text-xl text-blue-800 mb-1">Restaurant</h1>
                  <p className="text-[15px] text-left text-gray-600">
                    Loryma mutfaklarında tazeliğin ve lezzetin önemi ilk sırada.
                    Konuklarımıza kendi yetiştirdiğimiz sebzeler ve kendi
                    zeytinyağımızı sunmaktan mutluluk duyarız. Körfez manzaralı
                    restoranlarımızda güleryüzlü ve profesyonel servis ekibimiz
                    hizmetinizdedir.
                  </p>
                </div>
              </div>
              <div
                onClick={handleImage(image2)}
                className="cursor-pointer flex border border-gray-200 justify-center items-center shadow-md rounded-lg py-3 px-6"
              >
                <Image
                  src="https://www.electusrecruitment.co.uk/icons/tgb9.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] ml-3"
                />
                <div className="ml-8">
                  <h1 className="text-xl text-blue-800 mb-1">Havuz ve Sahil</h1>
                  <p className="text-[15px] text-left text-gray-600">
                    Açık ve kapalı olmak üzere iki havuzumuz sezon boyunca
                    misafirlerin hizmetindedir. Çocuk havuzu ise zeytin
                    ağaçların gölgesinde ve bahçe içinde ayrı yerde
                    bulunmaktadır. Otelimize en yakın Mavi Bayraklı koy ve
                    plajlar Turunç, Amos ve Kumlubük Koyları’dır.
                  </p>
                </div>
              </div>
              <div
                onClick={handleImage(image3)}
                className="cursor-pointer flex border border-gray-200 justify-center items-center shadow-md rounded-lg py-3 px-6"
              >
                <Image
                  src="https://www.crystaluz.be/images/icon_spa.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] ml-3"
                />
                <div className="ml-8">
                  <h1 className="text-xl text-blue-800 mb-1">Spa</h1>
                  <p className="text-[15px] text-left text-gray-600">
                    Yeni spa ve hamam bölümü için deneyimli partnerimiz Loryma
                    Spa profesyonel ekibiyle sizi doğu ve batı tarzı masaj ve
                    bakım programlarıyla dinçleştirecek. Loryma Spa Loryma
                    Resort’un doğasever yanaşımına uyumlu biçimde tasarladığı
                    programında bal, süt, şifalı bitkiler, yosunlar, aromatik
                    yağlar ve Loryma Resort’un kendi üretimi zeytinyağlarını
                    kullanmaktadır.
                  </p>
                </div>
              </div>
              <div
                onClick={handleImage(image4)}
                className="cursor-pointer flex border border-gray-200 justify-center items-center shadow-md rounded-lg py-3 px-6"
              >
                <Image
                  src="https://www.electusrecruitment.co.uk/icons/tgb6.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] ml-3"
                />
                <div className="ml-8">
                  <h1 className="text-xl text-blue-800 mb-1">Aktiviteler</h1>
                  <p className="text-[15px] text-left text-gray-600">
                    Aktif tatil seçenekleri tercih eden misafirlerimiz için
                    fitnes salonumuz, Yoga seanslarımız, tenis kortumuz ve
                    tırmanma duvarımız ücretsiz olarak sunulmaktadır.Seçilmiş
                    doğa sporu programımız sayesinde misafirlerimiz ayrıca da
                    güzel Bozburun Yarımadasını daha iyi tanımaya fırsatını
                    yakalarlar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-xl md:text-3xl text-[#0d3c5a]">
          Galerimizden Goruntuler
        </h1>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
          <div className="max-w-sm relative shadow-md rounded-lg cursor-pointer mx-4 my-8">
            <Image
              src="https://picsum.photos/300/200?random=0"
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="w-full h-auto object-cover"
              width={300}
              height={200}
            />
          </div>
          <div className="max-w-sm relative shadow-md rounded-lg cursor-pointer mx-4 my-8">
            <Image
              src="https://picsum.photos/300/200?random=1"
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="w-full h-auto object-cover"
              width={300}
              height={200}
            />
          </div>
          <div className="max-w-sm relative shadow-md rounded-lg cursor-pointer mx-4 my-8">
            <Image
              src="https://picsum.photos/300/200?random=2"
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="w-full h-auto object-cover"
              width={300}
              height={200}
            />
          </div>
          <div className="max-w-sm relative shadow-md rounded-lg cursor-pointer mx-4 my-8">
            <Image
              src="https://picsum.photos/300/200?random=3"
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="w-full h-auto object-cover"
              width={300}
              height={200}
            />
          </div>
          <div className="max-w-sm relative shadow-md rounded-lg cursor-pointer mx-4 my-8">
            <Image
              src="https://picsum.photos/300/200?random=4"
              alt="Img by Meriç Dağlı https://unsplash.com/@meric"
              className="w-full h-auto object-cover"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="flex justify-center shadow-lg py-2 bg-[#0d3c5a] w-3/12 lg:w-1/12 mx-auto">
          <span className="uppercase text-white">Hepsini gör</span>
        </div>
      </div>

    </main>
  );
}
