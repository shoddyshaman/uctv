export default function BookPlug() {
  return (
    <div className="bg-white">
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <nav aria-label="Offers" className="order-last lg:order-first">
          <div className="mx-auto max-w-7xl lg:px-8"></div>
        </nav>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
          />
          <div className="relative bg-gray-100 lg:bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                <div className="lg:pr-16">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:tracking-tight xl:text-6xl xl:tracking-tight -mt-10">
                    Theatre in Nainital
                  </h1>
                  <p className="mt-2 text-lg text-gray-600">
                    A Small Town's Passion for the Performing Arts. Nainital is
                    a small town in the Indian state of Uttarakhand, nestled in
                    the Himalayan foothills. Despite its size, Nainital has a
                    thriving theatre scene, with several small theatre companies
                    producing plays and musicals throughout the year. This book
                    tells the story of Nainital's love affair with the
                    performing arts, from the early days of street theatre to
                    the present day. It features interviews with theatre
                    directors, actors, and audience members, as well as photos
                    and behind-the-scenes glimpses of Nainital's theatre scene.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700"
                    >
                      Shop Book
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
