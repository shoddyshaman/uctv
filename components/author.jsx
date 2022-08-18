import Image from "next/future/image";
import { GridPattern } from "./utils/GridPattern";


export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16 bg-gray-800"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6 ">
        <div className="sm:rounded-6xl bg-slate-50 pt-px">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/author.png"
              width={10}
              height={10}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <p className="font-display mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">Umesh Tiwari Vishwas</span>{" "}
              Hey there, I’m the author behind ‘Theatre in Nainital’.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              I’ve been working in the field of Journalism,Hospitality and Theater for a long time now and this is where I share it all with you!
            </p>
            <div className="mt-6">
                    <a
                      href="#"
                      className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700"
                    >
                      Shop Book
                    </a>
                  </div>
            {/* <p className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
              >
                <TwitterIcon className="h-10 w-10 fill-current" />
                <span className="ml-4">Follow on Twitter</span>
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
