

export default function Publications() {
  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <p className="text-center text-lg font-semibold text-gray-600">
        Published by major publications as an accredited journalist!
      </p>
      <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img
            className="max-h-12 mt-4"
            src="/toi.webp"
            alt="The Times of India"
          />
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img className="max-h-8 mt-7" src="ET-logo.svg" alt="The Economic Times" />
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img className="max-h-16" src="/Hindu.png" alt="The Hindu" />
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img className="max-h-8 mt-2" src="Amar_Ujala_Logo.png" alt="Amar Ujala" />
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img
            className="max-h-16 -mt-4"
            src="dainik_new.png"
            alt="Dainik Jagran"
          />
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img
            className="max-h-12"
            src="bhaskar.png"
            alt="Dainik Bhaskar"
          />
        </div>
      </div>
    </div>
  </div>
  );
}
