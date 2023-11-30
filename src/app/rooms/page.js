import Image from "next/image";

export default function Page() {
  return (
    <div className="pt-28 pb-12">
      <div className="">
        <div className="">
          <div class="w-full relative">
            <Image
              src="https://i.hizliresim.com/ns6oj20.jpg"
              alt="Picture of the author"
              width={1920}
              height={500}
              className="h-[120px] md:h-[150px] lg:h-[180px] w-[100%] object-center object-cover"
            />
            <div class="absolute top-1/3 my-auto text-center px-4 w-full">
              <h1 class="text-white text-5xl text-stroke-1 md:text-stroke-3 lg:uppercase">
                Odalar
              </h1>
            </div>
          </div>
          <div className="container mx-auto pt-16">
            <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl">
              Odalar
            </h1>
            <div className="flex flex-col lg:flex-row px-5 lg:p-0 gap-y-6 lg:gap-x-12">
              <div className="lg:w-[1000px]">
                <p className="pt-6 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Varius morbi enim nunc faucibus a pellentesque sit amet.
                  Dignissim cras tincidunt lobortis feugiat vivamus. Mauris
                  commodo quis imperdiet massa tincidunt nunc pulvinar. Amet
                  consectetur adipiscing elit ut aliquam purus sit amet luctus.
                  Nunc scelerisque viverra mauris in aliquam sem fringilla.
                  Senectus et netus et malesuada fames ac turpis. Amet tellus
                  cras adipiscing enim eu turpis egestas pretium aenean. Nunc id
                  cursus metus aliquam eleifend mi in nulla. Donec adipiscing
                  tristique risus nec feugiat in fermentum posuere. Nunc sed
                  augue lacus viverra vitae congue. Sodales ut etiam sit amet
                  nisl purus in mollis nunc. Aenean euismod elementum nisi quis.
                  Interdum velit euismod in pellentesque massa.
                  <br className="mb-6" />
                  Leo a diam sollicitudin tempor id eu nisl nunc mi. Lobortis
                  feugiat vivamus at augue eget arcu dictum varius. Sit amet
                  consectetur adipiscing elit pellentesque habitant morbi.
                  Tincidunt arcu non sodales neque sodales ut etiam. Sed viverra
                  ipsum nunc aliquet bibendum enim. Vulputate sapien nec
                  sagittis aliquam malesuada bibendum arcu vitae elementum. Odio
                  aenean sed adipiscing diam donec. Sit amet volutpat consequat
                  mauris nunc congue nisi vitae. Massa placerat duis ultricies
                  lacus sed turpis. Habitant morbi tristique senectus et netus
                  et malesuada fames. Fusce ut placerat orci nulla pellentesque
                  dignissim. Odio facilisis mauris sit amet. Pharetra massa
                  massa ultricies mi quis hendrerit dolor magna eget. Pulvinar
                  neque laoreet suspendisse interdum consectetur libero.
                </p>
              </div>
              <div className="hidden lg:flex justify-center items-center">
                <Image
                  src="https://i.hizliresim.com/guxwrnl.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className="rounded-lg h-[420px] w-[500px] object-center object-cover"
                />
              </div>
            </div>
            <div className="mt-12 px-5 lg:px-0 space-y-6">
              <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-x-12">
                <div className="lg:order-1 order-2">
                  <Image
                    src="https://i.hizliresim.com/guxwrnl.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg mt-4 lg:mt-0 h-[275px] lg:h-[350px] w-[500px] object-center object-cover"
                  />
                </div>
                <div className="lg:w-[1000px] lg:order-2 order-1 flex justify-center flex-col">
                  <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl">
                    x Yatak Odalı Suite - x m2
                  </h1>
                  <p className="pt-6 text-lg leading-relaxed">
                    Vitae congue mauris rhoncus aenean vel elit scelerisque
                    mauris pellentesque. Donec enim diam vulputate ut pharetra.
                    Ut placerat orci nulla pellentesque dignissim enim. Egestas
                    tellus rutrum tellus pellentesque. Neque aliquam vestibulum
                    morbi blandit cursus risus at. Urna neque viverra justo nec
                    ultrices dui. Sed odio morbi quis commodo odio aenean.
                    Libero enim sed faucibus turpis. Cursus turpis massa
                    tincidunt dui ut ornare. Ac orci phasellus egestas tellus
                    rutrum tellus.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-x-12">
                <div className="lg:order-1 order-2">
                  <Image
                    src="https://i.hizliresim.com/guxwrnl.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg mt-4 lg:mt-0 h-[275px] lg:h-[350px] w-[500px] object-center object-cover"
                  />
                </div>
                <div className="lg:w-[1000px] lg:order-2 order-1 flex justify-center flex-col">
                  <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl">
                    x Yatak Odalı Suite - x m2
                  </h1>
                  <p className="pt-6 text-lg leading-relaxed">
                    Vitae congue mauris rhoncus aenean vel elit scelerisque
                    mauris pellentesque. Donec enim diam vulputate ut pharetra.
                    Ut placerat orci nulla pellentesque dignissim enim. Egestas
                    tellus rutrum tellus pellentesque. Neque aliquam vestibulum
                    morbi blandit cursus risus at. Urna neque viverra justo nec
                    ultrices dui. Sed odio morbi quis commodo odio aenean.
                    Libero enim sed faucibus turpis. Cursus turpis massa
                    tincidunt dui ut ornare. Ac orci phasellus egestas tellus
                    rutrum tellus.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-x-12">
                <div className="lg:order-1 order-2">
                  <Image
                    src="https://i.hizliresim.com/guxwrnl.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg mt-4 lg:mt-0 h-[275px] lg:h-[350px] w-[500px] object-center object-cover"
                  />
                </div>
                <div className="lg:w-[1000px] lg:order-2 order-1 flex justify-center flex-col">
                  <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl">
                    x Yatak Odalı Suite - x m2
                  </h1>
                  <p className="pt-6 text-lg leading-relaxed">
                    Vitae congue mauris rhoncus aenean vel elit scelerisque
                    mauris pellentesque. Donec enim diam vulputate ut pharetra.
                    Ut placerat orci nulla pellentesque dignissim enim. Egestas
                    tellus rutrum tellus pellentesque. Neque aliquam vestibulum
                    morbi blandit cursus risus at. Urna neque viverra justo nec
                    ultrices dui. Sed odio morbi quis commodo odio aenean.
                    Libero enim sed faucibus turpis. Cursus turpis massa
                    tincidunt dui ut ornare. Ac orci phasellus egestas tellus
                    rutrum tellus.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:max-w-[700px] md:mx-auto lg:max-w-[1000px] xl:max-w-[1400px] lg:mx-auto">
              <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl mb-4 mt-12 lg:mt-8">
                Galeri
              </h1>
              <div className="flex flex-wrap flex-row gap-x-4 gap-y-4 justify-center items-center lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-6 mx-auto">
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=0"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center lg:object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=1"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=2"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=3"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=4"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=5"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=6"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=7"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=8"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=9"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=10"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=11"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=12"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=13"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=14"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=15"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=16"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=17"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=18"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=19"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=20"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=21"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=22"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
                  />
                </div>
                <div className="w-[200px] h-[150px] lg:w-[425px] lg:h-[250px]">
                  <Image
                    src="https://picsum.photos/500/500?random=23"
                    alt="Picture of the author"
                    width={425}
                    height={200}
                    className="rounded-lg w-[200px] h-[150px] lg:w-[325px] lg:h-[250px] object-center object-cover"
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
