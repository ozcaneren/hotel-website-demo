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
                Aktiviteler
              </h1>
            </div>
          </div>
          <div className="mx-auto container pt-16">
            <div className="flex flex-row gap-x-12">
              <div className="w-[950px]">
                <h1 className="text-[#0d3c5a] text-3xl">Jimnastik Salonu</h1>
                <p className="pt-4 text-lg leading-relaxed">
                  Jimnastik salonu sabah 08:00 ile akşam 19:00 arası kullanıma
                  açıktır. Salonun özelliği, cam kapılarının doğrudan havuz ve
                  açık deniz manzarasına açılması ve sporcuların böylece asla
                  temiz havadan ve motivasyondan yoksun kalmamalarıdır. 56
                  m2’lik jimnastik salonu modern koşu bandı, bisiklet, kürek
                  aletleri ve çoklu egzersiz platformuyla donatılmıştır.
                </p>
                <h1 className="text-[#0d3c5a] text-3xl pt-8">Yoga</h1>
                <p className="pt-4 text-lg leading-relaxed">
                  Loryma’da haftanın üç günü sabahleyin grup içinde ücretsiz
                  Hatha Yoga seansları gerçekleştirilmektedir. Çok deneyimli ve
                  profesyonel bir hoca olan yoga eğitmenimiz Hatun Çelebi
                  oturumlarını hem yeni başlayanlara, hem de ilerlemek
                  isteyenlere hitap edecek şekilde tasarlamaktadır.Program,
                  esnetici ve kuvvetlendirici yoga ön egzersizleri, nefes
                  egzersizleri ve ruh-zihin-beden sağlığına yararlı egzersizler
                  içermektedir. Günlük yaşamın gerilimlerinden uzak tatil
                  zamanları, egzersize başlamayı kolaylaştırır.Bunun farkında
                  olan Loryma Resort misafirleri yoga programına yoğun bir
                  taleple katılıyorlar.
                </p>
              </div>
              <div className="flex flex-col pt-2 gap-y-4 justify-center items-center">
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
            <div className="flex flex-row justify-between mt-12">
              <div className="flex flex-col w-[740px]">
                <h1 className="text-[#0d3c5a] text-3xl">Tenis</h1>
                <p className="pt-4 text-lg leading-relaxed text-justify">
                  Gün boyu kullanıma açık olan sert saha tipindeki tenis
                  kortumuzda açık havada raketli sporun tadını çıkarabilirsiniz.
                  Akşam serinliğinde oynanan maçlar veya yapılan egzersizler
                  için ücret karşılığında ışıklandırma hizmeti verilir.
                  Işıklandırma için lütfen resepsiyon ile iletişime geçiniz.
                  Loryma Outdoors ve Kanotrek firması partnerliğinin doğa sporu
                  programı: Doğa yürüyüşü, trekking, kanyon geçişi, bisiklet ve
                  deniz kanosu turları Tesisimiz hizmetleri haricinde Turunç
                  plajında su sporu ve dalgıçlık kursları mevcuttur.
                </p>
              </div>
              <div className="flex flex-col w-[740px]">
                <h1 className="text-[#0d3c5a] text-3xl">
                  Çocuk Evi ve Çocuk Havuzu
                </h1>
                <p className="pt-4 text-lg leading-relaxed text-justify">
                  Loryma Resortta açık hava çocuk havuzu, bahçe içinde ve zeytin
                  ağaçlarının gölgesinde, oyun parkı ve çocuk evinin hemen yanı
                  başındadır. 4-12 yaş arasındaki misafirlerimizi haftanın altı
                  günü sabah ve öğleden sonra eğitmen gözetimindeki çocuk evine
                  oyunlar oynamaya ve türlü faaliyetlere katılabilirler.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-[#0d3c5a] text-3xl">
                Doğa Sporu Aktiviteleri
              </h1>
              <p className="pt-4 text-lg leading-relaxed text-justify">
                20 yıldır ‘Loryma Outdoors’ programıyla tesisimiz yılda binlerce
                misafirine aktif tatil seçenekleri sunmaktadır. Tesis, bu
                programıyla görece az bilinen Bozburun Yarımadası’nın daha iyi
                tanınmasına katkıda bulunmaktadır. Deneyimli ve yöremizi tanıyan
                doğa sporu rehberlerimiz eşliğinde Turunç ve Bozburun Yarımadası
                çevresinde doğa yürüyüşleri yapabilir, koylarımızın kristal gibi
                berrak sularında deniz kanosu turlarına katılabilirsiniz.
              </p>
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
  );
}
