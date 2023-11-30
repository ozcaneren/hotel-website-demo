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
              className="h-[120px] md:h-[150px] lg:h-[180px] w-[100%] object-center object-cover"
            />
            <div class="absolute top-1/3 my-auto text-center px-4 w-full">
              <h1 class="text-white text-5xl text-stroke-1 md:text-stroke-3 lg:uppercase">
                Tesis
              </h1>
            </div>
          </div>
          <div className="mx-auto container pt-16">
            <div className="flex flex-col lg:flex-row px-5 lg:p-0 gap-y-6 lg:gap-x-12">
              <div className="lg:w-[950px]">
                <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl mb-4 lg:mt-8">
                  x Hakkında
                </h1>
                <p className="lg:pt-4 text-lg leading-relaxed">
                  Vulputate sapien nec sagittis aliquam malesuada bibendum arcu
                  vitae elementum. Odio aenean sed adipiscing diam donec. Sit
                  amet volutpat consequat mauris nunc congue nisi vitae. Massa
                  placerat duis ultricies lacus sed turpis. Odio aenean sed
                  adipiscing diam donec. Sit amet volutpat consequat mauris nunc
                  congue nisi vitae. Massa placerat duis ultricies lacus sed
                  turpis. Odio aenean sed adipiscing diam donec. Sit amet
                  volutpat consequat mauris nunc congue nisi vitae. Massa
                  placerat duis ultricies lacus sed turpis.
                </p>
                <ul className="pt-4 list-disc px-3 lg:px-0 space-y-4">
                  <li className="text-lg text-center lg:text-left">
                    Vulputate sapien nec sagittis aliquam malesuada bibendum
                    arcu vitae elementum. Odio aenean sed adipiscing diam donec.
                    Sit amet volutpat consequat mauris nunc congue nisi vitae.
                    Massa placerat duis ultricies lacus sed turpis.
                  </li>
                  <li className="text-lg text-center lg:text-left">
                    Vulputate sapien nec sagittis aliquam malesuada bibendum
                    arcu vitae elementum. Odio aenean sed adipiscing diam donec.
                    Sit amet volutpat consequat mauris nunc congue nisi vitae.
                    Massa placerat duis ultricies lacus sed turpis.
                  </li>
                  <li className="text-lg text-center lg:text-left">
                    Vulputate sapien nec sagittis aliquam malesuada bibendum
                    arcu vitae elementum. Odio aenean sed adipiscing diam donec.
                    Sit amet volutpat consequat mauris nunc congue nisi vitae.
                    Massa placerat duis ultricies lacus sed turpis.
                  </li>
                </ul>
                <div className="mt-12 flex flex-row gap-x-2 lg:gap-x-12">
                  <div className="w-2/6 text-center rounded-lg bg-cyan-800 p-6 text-white text-2xl flex flex-col">
                    <span>x</span>
                    <span>Oda</span>
                  </div>
                  <div className="w-2/6 text-center rounded-lg bg-lime-800 p-6 text-white text-2xl flex flex-col">
                    <span>y</span>
                    <span>Restoran</span>
                  </div>
                  <div className="w-2/6 text-center rounded-lg bg-indigo-800 p-6 text-white text-2xl flex flex-col">
                    <span>z</span>
                    <span>Bar</span>
                  </div>
                </div>
              </div>
              <Image
                src="https://picsum.photos/500/500?random=31"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-lg mt-4 lg:mt-0 h-[275px] lg:h-[350px] w-[500px] object-center object-cover"
              />
            </div>
            <div className="flex flex-col lg:flex-row px-5 lg:p-0 gap-y-6 lg:gap-y-0 lg:gap-x-36">
              <div className="">
                <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl mb-4 mt-6 lg:mt-8 lg:uppercase">
                  Lorem Ipsum
                </h1>
                <ul className="pt-2 px-4 lg:px-0 list-disc space-y-1">
                  <li className="text-lg">Resepsiyon 7/24</li>
                  <li className="text-lg">
                    Özel plaj ( yeme – içme ekstra ücretlidir)
                  </li>
                  <li className="text-lg">
                    Wi-Fi (sadece resepsiyon alanında ücretsiz)
                  </li>
                  <li className="text-lg">
                    Gün içerisinde Turunç plajına ücretsiz servis
                  </li>
                  <li className="text-lg">Telefon</li>
                  <li className="text-lg">Otopark</li>
                  <li className="text-lg">Talep halinde doktor</li>
                  <li className="text-lg">Mini market</li>
                  <li className="text-lg">
                    Yetişkin ve çocuklar için animasyon
                  </li>
                  <li className="text-lg">Şezlong, şemsiye ve havuz havlusu</li>
                  <li className="text-lg">
                    Seminer salonları - her biri 90 kişilik
                  </li>
                </ul>
                <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl mb-4 mt-6 lg:mt-8 lg:uppercase">
                  Lorem Ipsum
                </h1>
                <ul className="pt-2 px-4 lg:px-0 list-disc space-y-1">
                  <li className="text-lg">1 çocuk havuzu</li>
                  <li className="text-lg">Çocuklar için animasyon</li>
                  <li className="text-lg">listprop29</li>
                </ul>
              </div>
              <div className="">
                <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl mb-4 mt-6 lg:mt-8 lg:uppercase">
                  Lorem
                </h1>
                <ul className="pt-2 list-disc space-y-1 flex flex-col px-4 lg:px-0 lg:flex-row gap-x-12">
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
                    <ul className="pt-2 lg:pt-0 list-disc space-y-1">
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
              <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl mb-4 mt-6 lg:mt-8 lg:uppercase">
                Lorem
              </h1>
              <div className="flex flex-col lg:flex-row px-5 lg:p-0 gap-y-6 lg:gap-x-12">
                <div className="lg:w-[800px]">
                  <p className="lg:pt-6 text-lg leading-relaxed">
                    Vulputate sapien nec sagittis aliquam malesuada bibendum
                    arcu vitae elementum. Odio aenean sed adipiscing diam donec.
                    Sit amet volutpat consequat mauris nunc congue nisi vitae.
                    Massa placerat duis ultricies lacus sed turpis. Habitant
                    morbi tristique senectus et netus et malesuada fames. Fusce
                    ut placerat orci nulla pellentesque dignissim. Odio
                    facilisis mauris sit amet. Pharetra massa massa ultricies mi
                    quis hendrerit dolor magna eget. Pulvinar neque laoreet
                    suspendisse interdum consectetur libero. Cras sed felis eget
                    velit aliquet sagittis id. Lacus sed turpis tincidunt id
                    aliquet risus feugiat in ante. Eget felis eget nunc lobortis
                    mattis aliquam faucibus purus in. At urna condimentum mattis
                    pellentesque id nibh tortor id aliquet. Quam quisque id diam
                    vel quam. Ut tristique et egestas quis ipsum suspendisse.
                    Convallis posuere morbi leo urna molestie at. Viverra
                    adipiscing at in tellus integer feugiat. Id neque aliquam
                    vestibulum morbi blandit cursus risus.
                  </p>
                </div>
                <div className="flex flex-col gap-y-4 justify-center">
                  <Image
                    src="https://picsum.photos/500/500?random=33"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg mt-4 lg:mt-0 h-[275px] lg:h-[350px] w-[500px] object-center object-cover"
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
