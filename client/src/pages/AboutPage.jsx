import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <div className="text-center mb-14">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              About Street Fuel 🍔
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Fresh flavors, quality ingredients, and customer satisfaction
              are at the heart of everything we serve.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">

            <p className="text-lg leading-9 text-gray-700">
              Street Fuel is dedicated to serving delicious burgers,
              crispy fries, refreshing cold coffee, and tasty sandwiches.
              We believe great food brings people together and creates
              memorable experiences.
            </p>

            <p className="text-lg leading-9 text-gray-700 mt-6">
              Our goal is to provide high-quality food while collecting
              honest customer feedback to continuously improve our menu,
              service, and overall customer experience.
            </p>

            <div className="mt-12 border-t border-gray-200 pt-8">

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Owner
              </h2>

              <p className="text-lg text-orange-600 font-semibold">
                Nitin Gangwal
              </p>

              <p className="text-gray-500 mt-2">
                Passionate about serving quality food and creating a great
                experience for every customer.
              </p>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;