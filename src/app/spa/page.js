import Image from "next/image";

export default function Page() {
  return (
    <div className="pt-28 pb-12">
      <div className="">
        <div className="">
          <div class="w-full relative">
            <Image
              src="https://wallpapercave.com/wp/wp9242253.jpg"
              alt="Picture of the author"
              width={1920}
              height={500}
              className="h-[120px] md:h-[150px] lg:h-[180px] w-[100%] object-center object-cover"
            />
            <div class="absolute top-1/3 my-auto text-center px-4 w-full">
              <h1 class="text-white text-5xl text-stroke-1 md:text-stroke-3 lg:uppercase">
                SPA
              </h1>
            </div>
          </div>
          <div className="mx-auto container pt-16">
            <h1 className="text-[#0d3c5a] text-center lg:text-left text-2xl lg:text-3xl mb-4 mt-12 lg:mt-8">
              SPA
            </h1>
            <div className="flex flex-col lg:flex-row px-5 lg:p-0 gap-y-6 lg:gap-x-12">
              <div className="lg:w-[1200px]">
                <p className="text-lg leading-relaxed">
                  Vulputate sapien nec sagittis aliquam malesuada bibendum arcu
                  vitae elementum. Odio aenean sed adipiscing diam donec. Sit
                  amet volutpat consequat mauris nunc congue nisi vitae. Massa
                  placerat duis ultricies lacus sed turpis.
                  <br className="mb-8" />
                  Vulputate sapien nec sagittis aliquam malesuada bibendum arcu
                  vitae elementum. Odio aenean sed adipiscing diam donec. Sit
                  amet volutpat consequat mauris nunc congue nisi vitae. Massa
                  placerat duis ultricies lacus sed turpis. Vulputate sapien nec
                  sagittis aliquam malesuada bibendum arcu vitae elementum. Odio
                  aenean sed adipiscing diam donec. Sit amet volutpat consequat
                  mauris nunc congue nisi vitae. Massa placerat duis ultricies
                  lacus sed turpis. Vulputate sapien nec sagittis aliquam
                  malesuada bibendum arcu vitae elementum. Odio aenean sed
                  adipiscing diam donec. Sit amet volutpat consequat mauris nunc
                  congue nisi vitae. Massa placerat duis ultricies lacus sed
                  turpis.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="https://i.hizliresim.com/guxwrnl.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className="rounded-lg mt-4 lg:mt-0 h-[275px] lg:h-[350px] w-[500px] object-center object-cover"
                />
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
