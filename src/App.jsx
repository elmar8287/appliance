import React, { useState, useRef } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";


import logo from "./data/MATANATO_LOGO.PNG"
import instants from "./data/klarna.webp"
import business from "./data/payment_ways.webp"

// ================= Header =================
function Header() {
  const [state, setState] = useState(false)

    const navigation = [
        { title: "Book now", path: "#leadform" },
        { title: "Pay in Installments", path: "#leadform" },
        { title: "Why we?", path: "#whywe" },
    ]
  
  return (
    <>
            <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between">
                    <a href="/">
                        <img fetchPriority="low"
                                      src={logo}
                                      width={70}
                                      height={40}
                                      alt="Laborer Logo Matanato Home Services"
                                      className="rounded-2xl"
                        />
                    </a>
                    <button className="text-gray-500 outline-none md:hidden"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
                    <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-gray-500 hover:text-red-700" key={idx}>
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            ))
                        }
                    </div>
                    <li className="order-2 py-8 md:py-0">
                        <a href="tel:+13468002250" className="py-8 px-5 rounded-lg font-medium text-white text-center bg-red-700 hover:bg-red-500 active:bg-red-700 duration-150 block md:py-3 md:hidden">
                            CALL NOW!
                        </a>
                    </li>
                </ul>
            </nav>
            <header className="py-4">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Appliance Broken? — <span className="text-red-700" >We Fix It Today.</span>
                        </h2>
                        <p>
                            Fast, affordable repair for  <span className="font-bold" >refrigerators, washers, dryers, ovens & more. </span> Same-day service available.
                        </p>
                        <div className="items-center gap-x-3 space-y-2 sm:flex sm:space-y-0">
                            <a href="tel:+13468002250" className="py-4 px-5 rounded-lg font-medium text-2xl text-white text-center bg-red-700 hover:bg-red-500 active:bg-red-700 duration-150 block md:py-3 md:inline">
                            CALL NOW!
                        </a>
                        </div>
                    </div>
                    <div className="flex-none mt-2 md:mt-0 md:max-w-xl">
                        <img
                            src={business}
                            className="hidden md:block md:rounded-tl-[108px]"
                            alt="business-usa"
                        />
                    </div>
                </div>
            </header>
        </>
  );
}


// ================= About Section =================


function About() {
   
  return (
  <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="sm:hidden lg:block p-4">
                        <img src={instants} className="md:max-w-lg rounded-lg shadow-xl" alt="Partners" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-red-700 font-semibold">
                            Flexible payment options available
                        </h3>
                        <p className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                            Fix It Today — Pay Over Time
                        </p>
                        <p className="mt-3">
                            Don’t delay your repair because of cost.
Split your payment into smaller, manageable amounts:
                            
                                                       
                            </p>
                            <div className="p-4 bg-gray-200 rounded-xl shadow-xl">
                            <h4 className="font-bold text-2xl mb-2">As low as $25/month for eligible customers</h4>
                             <ul className="list-none p-6">
                                <li>✔ Pay in 4 easy installments</li>
                                <li>✔ Quick approval</li>
                                <li>✔ No large upfront payment</li>
                            </ul>
                        <a href="#leadform" className="mt-4 block py-2 px-4 text-center text-white font-medium bg-red-700 duration-150 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-lg hover:shadow-none">
                                Check Payment Options
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

// ================= Benefits Section =================

function Benefits() {
  return (
    <section className="py-10 px-4 md:px-10 rounded-2xl shadow-md md:max-w-4xl mx-auto my-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Don’t Let a Small Problem Turn Into a Big Expense</h2>
 <p className="text-xl font-semibold text-center text-gray-800 mb-10">A leaking washer or a warm fridge won’t fix itself.
Waiting only makes repairs more expensive.</p>
<p className="text-3xl font-bold text-center text-red-700 mb-10">Fix it now — before it gets worse.</p>
    </section>
  );
}

// ================= CTA =================
function CTA() {
   
  return (
    <section className="relative overflow-hidden py-12 mt-20 px-4 bg-gray-900 md:px-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
            <div className="max-w-xl mx-auto text-center relative">
                <div className="py-4">
                    <h3 className="text-xl text-gray-200 font-semibold md:text-2xl">
                        Get Your Appliance Fixed Today
                    </h3>
                    <h4 className="text-sm text-gray-200 mt-4">
Fast service. No hidden fees. Pay over time.
</h4>
                </div>
                <div className="mt-5 items-center justify-center gap-3 sm:flex">
                    <a 
                        href="#leadform"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
                    >
                        Book Repair
                    </a>
                    <a
                        href="tel:+13468002250"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
                    >
                        Call now!
                    </a>
                </div>
                
            </div>
        </section>
  );
}

// ================= Why we? ============================

function WhyWe() {
  const benefits = [
  { title: "⚡Same-Day Service Available", desc: "We know you can’t wait days for a repair. That’s why we offer same-day service whenever possible." },
  { title: "💰Transparent Pricing (No Surprises)", desc: "You’ll always know the price before we start. No hidden fees. No surprises." },
  { title: "🧰Experienced Technicians", desc: "Our technicians have years of hands-on experience fixing all major appliances." },
  { title: "🛠We Repair All Major Brands", desc: "Samsung, LG, Whirlpool, GE and more — we’ve seen it all." },
  ];

  return (
     <section className="bg-gray-50 my-12 py-10 px-4 md:px-10 rounded-2xl shadow-md max-w-6xl mx-auto"  id="whywe">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Customers Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ================= Lead Gen Form Page =================

function LeadGen() {

      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o919xac",
        "template_4w7153l",
        form.current,
        "cfohW8SIbOB19a4xY"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error.text);
        }
      );
  };

    return (
        <section className="py-6 bg-white text-gray-900" id="leadform">
  <div className="max-w-2xl mx-auto px-6">
    <h2 className="text-4xl font-semibold text-center mb-8">
      Book your appointment in <span className="text-red-700 font-semibold">30 seconds</span>
    </h2>
    <form ref={form} onSubmit={sendEmail} className="space-y-5 bg-white p-8 rounded-xl shadow-2xl">
      <input
        name="name"
        placeholder="Name"
        required
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        name="address"
        placeholder="Full Address"
        required
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        name="phone"
        placeholder="Phone"
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        name="email"
        placeholder="Email"
        required
        type="email"
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        name="issue"
        placeholder="Issue details"
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <div>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="services" value="Appliance" className="accent-blue-600" />
            I prefer to pay in installments
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-500 transition"
      >
        Book Now!
      </button>
    </form>
  </div>
</section>
    );
}


// ================= App =================
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <LeadGen />
      <Benefits />
      <About />
      <WhyWe />
      <CTA />
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>*/}
      {/* <Footer />  */}
    </div>
  );
}