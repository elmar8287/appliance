import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";


import logo from "./data/MATANATO_LOGO.PNG"
// import plum from "./assets/plum.jpg"
// import bath from "./assets/bath.webp"
// import electrical from "./assets/electrical.jpeg"
// import kitchen from "./assets/kitchen.webp"

// ================= Header =================
function Header() {
  const [state, setState] = useState(false)

    const navigation = [
        { title: "Автор", path: "/" },
        { title: "Преимущества", path: "/" },
        { title: "Продукты", path: "/" },
        { title: "Детали курса", path: "/" },
        { title: "Как это работает", path: "/" },
        { title: "FAQ", path: "/" },

    ]
  
  return (
    <>
            <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between">
                    <a href="/">
                        <img fetchpriority="low"
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
                    <li className="order-2 py-5 md:py-0">
                        <a href="tel:+13468002250" className="py-2 px-5 rounded-lg font-medium text-white text-center bg-red-700 hover:bg-red-500 active:bg-red-700 duration-150 block md:py-3 md:inline">
                            Подать заявку
                        </a>
                    </li>
                </ul>
            </nav>
            <section className="py-20">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-red-700 font-medium">
                            правильно и без посредников
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Откройте бизнес в США — <span className="text-red-700" >быстро, правильно, без посредников</span>
                        </h2>
                        <p>
                            Получите бесплатный PDF-чеклист <span className="font-bold" >«7 шагов для открытия компании в США»</span> и узнайте, как избежать типичных ошибок.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="#leadform" className="block py-2 px-4 text-center text-white font-medium bg-red-700 duration-150 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-lg hover:shadow-none">
                                Скачать PDF бесплатно
                            </a>
                            <a href="/" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Забронировать место
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                            className=" md:rounded-tl-[108px]"
                            alt="B2B"
                        />
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">
                      Полный пошаговый план от предпринимателя, который сделал это сам. PDF-чеклист → вебинар → сопровождение под ключ.
                    </p>
                    
                </div>
            </section>
            {/* Здесь будут все страница ниже */}
        </>
  );
}

// // ================= Hero Section =================
// function Hero() {
//   const topDeal = products.find(p => p.tracking === "TRK10000017"); // топ-продукт для акции

//   return (
//     <section id="hero" className="mt-20 bg-gradient-to-r from-blue-100 to-white py-16">
//       <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
//         <div className="mb-6 md:mb-0 md:w-1/2">
//           <h1 className="text-4xl font-bold mb-4">Super Deal: {topDeal.name}</h1>
//           <p className="text-gray-700 mb-6">{topDeal.description}</p>
//           <Link
//             to={`/product/${topDeal.tracking}`}
//             className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition"
//           >
//             Buy Now - ${topDeal.price}
//           </Link>
//         </div>
//         <div className="md:w-1/2">
//           <img src={topDeal.image} alt={topDeal.name} className="rounded-lg shadow-lg w-full" />
//         </div>
//       </div>
//     </section>
//   );
// }

// // ================= Home =================
// function Home() {
//     const categories = [
//     { name: "Kitchen Appliances", image: kitchen},
//     { name: "Bathroom Parts", image: bath },
//     { name: "Electrical", image: electrical },
//     { name: "Plumbing", image: plum },
//   ];
//   return (
//     <div>
//       <Hero />
//       <section className="max-w-5xl mx-auto px-4 py-8">
//         <h2 className="text-2xl font-bold mb-4">Top Products</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {products.slice(0, 8).map(p => (
//             <div key={p.tracking} className="bg-white rounded-lg shadow p-4">
//               <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded mb-3" />
//               <h3 className="font-semibold">{p.name}</h3>
//               <p className="text-gray-600">${p.price}</p>
//               <Link to={`/product/${p.tracking}`} className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded">
//                 View Details
//               </Link>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-6">
//           <Link to="/products" className="inline-block bg-gray-800 text-white px-6 py-2 rounded">
//             See All Products
//           </Link>
//         </div>
//       </section>
//       {/* Popular Categories */}
//       <section className="max-w-5xl mx-auto px-4 py-12">
//         <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {categories.map((c, idx) => (
//             <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 text-center">
//               <img src={c.image} alt={c.name} className="w-full h-32 object-cover rounded mb-3" />
//               <h3 className="font-semibold text-gray-800">{c.name}</h3>
//               <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
//                 Explore
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// // ================= Products Page =================
// function ProductsPage() {
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8 mt-10">
//       <h2 className="text-2xl font-bold mb-6">All Products</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map(p => (
//           <div key={p.tracking} className="bg-white rounded-lg shadow p-4">
//             <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded mb-3" />
//             <h3 className="font-semibold">{p.name}</h3>
//             <p className="text-gray-600">${p.price}</p>
//             <Link to={`/product/${p.tracking}`} className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded">
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ================= Product Page =================
// function ProductPage() {
//   const { id } = useParams();
//   const product = products.find(p => p.tracking === id);
//   if (!product) return <div className="p-8">Product not found</div>;

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-8 m-28">
//       <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-6" />
//       <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
//       <p className="text-gray-700 mb-2">{product.description}</p>
//       <p className="text-gray-600 mb-1"><strong>Compatibility:</strong> {product.compatibility}</p>
//       <p className="text-gray-600 mb-1"><strong>Warranty:</strong> {product.warranty}</p>
//       <p className="text-gray-600 mb-1"><strong>Delivery:</strong> {product.delivery}</p>
//       <p className="text-gray-600 mb-4"><strong>Tracking ID:</strong> {product.tracking}</p>
//       <p className="text-xl font-semibold mb-6">${product.price}</p>
//       <a
//         href={product.link}
//         target="_blank"
//         rel="noreferrer"
//         className="inline-block bg-green-600 text-white px-6 py-2 rounded"
//       >
//         Buy Now
//       </a>
//     </div>
//   );
// }

// // ================= Footer =================
// function Footer() {
//   return (
//     <footer id="footer" className="bg-gray-800 text-white mt-12">
//       <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
//         <p>© 2025 Spare Parts Shop Houston. All rights reserved.</p>
//         <div className="space-x-4 mt-4 md:mt-0">
//           <a href="#" className="hover:text-blue-400">Privacy Policy</a>
//           <a href="#" className="hover:text-blue-400">Terms of Service</a>
//           <a href="#" className="hover:text-blue-400">Contact</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// ================= App =================
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}