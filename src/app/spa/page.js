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
              className="h-[180px] w-[100%] object-center object-cover"
            />
            <div class="absolute top-1/3 my-auto text-center px-4 w-full">
              <h1 class="text-white text-5xl text-stroke-3 uppercase">
                SPA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
