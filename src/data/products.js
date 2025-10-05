import part1 from "../assets/part1.jpg"
import part2 from "../assets/part2.jpg"
import part3 from "../assets/part3.jpg"
import part4 from "../assets/part4.webp"
import part5 from "../assets/part5.jpg"
import part6 from "../assets/part6.jpg"
import part7 from "../assets/part7.jfif"
import part8 from "../assets/part8.jpg"
import part9 from "../assets/part9.avif"
import part10 from "../assets/part10.webp"
import part11 from "../assets/part11.webp"
import part12 from "../assets/part12.webp"
import part13 from "../assets/part13.webp"
import part14 from "../assets/part14.jpg"
import part15 from "../assets/part15.jfif"
import part16 from "../assets/part16.jpg"
import part17 from "../assets/part17.webp"
import part18 from "../assets/part18.jpg"
import part19 from "../assets/part19.jpeg"
import part20 from "../assets/part20.jpg"
import part21 from "../assets/part21.jpg"
import part22 from "../assets/part22.jpg"
import part23 from "../assets/part23.jpg"
import part24 from "../assets/part24.jpg"
import part25 from "../assets/part25.jpg"
import part26 from "../assets/part26.jpg"
import part27 from "../assets/part27.jpg"
import part28 from "../assets/part28.jfif"
import part29 from "../assets/part29.jfif"
import part30 from "../assets/part30.jfif"
import part31 from "../assets/part31.webp"
import part32 from "../assets/part32.png"
import part33 from "../assets/part33.jfif"
import part34 from "../assets/part34.PNG"


const products = [
   {
    tracking: "TRK10000037",
    name: "Toilet repair kits (fill valves, flush valves)",
    category: "Plumbing",
    price: 60,
    description: "All-in-one toilet repair kit designed to fix common flushing and leaking issues. Includes fill valve, flapper, and flush lever for quick and reliable restoration of toilet performance.",
    image: part32,
    compatibility: "Compatible with most standard two-piece toilets. Designed for easy installation without special tools.",
    warranty: "3 mo.",
    delivery: "1-5 business days.",
    link: "https://buy.stripe.com/dRm14o2C4cQiey35OAa3u0v"
  },
   {
    tracking: "TRK10000036",
    name: "Faucet",
    category: "Plumbing",
    price: 140,
    description: "Stylish single-handle bathroom faucet designed with durability and water efficiency in mind. Provides smooth water flow and easy temperature control.",
    image: part33,
    compatibility: "Fits standard bathroom sink mounts. Easy to install with included hardware.",
    warranty: "3 mo.",
    delivery: "1-5 business days.",
    link: "https://buy.stripe.com/bJedRaccE8A289Fb8Ua3u0w"
  },
  {
    tracking: "TRK10000035",
    name: "Tub and shower cartridge",
    category: "Plumbing",
    price: 100,
    description: "High-quality replacement cartridge designed for tub and shower faucets. Restores smooth water flow, prevents leaks, and ensures reliable temperature control.",
    image: part34,
    compatibility: "Fits most standard tub and shower faucet models. Easy DIY installation with basic tools.",
    warranty: "3 mo.",
    delivery: "1-5 business days.",
    link: "https://buy.stripe.com/6oUdRagsU8A21Lh90Ma3u0x"
  },
  {
    tracking: "TRK10000031",
    name: "Junction box",
    category: "Electrical",
    price: 22,
    description: "Durable junction box for securely housing electrical wire connections. Made of corrosion-resistant material and designed for safety and code compliance.",
    image: part31,
    compatibility: "Compatible with standard electrical wiring and conduit systems.",
    warranty: "3 mo.",
    delivery: "1-5 business days.",
    link: "https://buy.stripe.com/dRm9AUa4w17A2Plel6a3u0s"
  },
  {
    tracking: "TRK10000034",
    name: "20-amp breaker",
    category: "Electrical",
    price: 45,
    description: "Durable 20-amp single-pole circuit breaker for reliable protection of household electrical systems. Easy to install and UL-listed for safety.",
    image: part30,
    compatibility: "Works with standard residential breaker panels.",
    warranty: "3 mo.",
    delivery: "1-5 business days.",
    link: "https://buy.stripe.com/28EaEYgsU7vYfC74Kwa3u0t"
  },
  {
    tracking: "TRK10000029",
    name: "250' roll of 12/2 Romex cable",
    category: "Electrical",
    price: 165,
    description: "High-quality 250-foot roll of 12/2 Romex NM-B cable for residential wiring. Provides reliable power distribution for lighting and outlets.",
    image: part29,
    compatibility: "Suitable for indoor residential electrical applications.",
    warranty: "3 mo.",
    delivery: "1-5 business days.",
    link: "https://buy.stripe.com/fZu3cw3G83fI75Bgtea3u0u"
  },
  {
    tracking: "TRK10000027",
    name: "Faucet Cartridge and Repair Kit",
    category: "Plumbing",
    price: 100,
    description: "Universal faucet cartridge and repair kit designed to fix common leaks and restore smooth handle operation. Durable materials ensure long-lasting performance.",
    image: part27,
    compatibility: "Fits most standard bathroom and kitchen faucets.",
    warranty: "3 mo.",
    delivery: "1-5 business days.",
    link: "https://buy.stripe.com/aFa9AU1y0dUm61xfpaa3u0p"
  },
  {
    tracking: "TRK10000033",
    name: "Toilet Flange Repair Ring Kit",
    category: "Plumbing",
    price: 55,
    description: "Replacement toilet flange repair ring kit for securing toilets to the floor. Easy to install and prevents leaks with a tight, durable seal.",
    image: part28,
    compatibility: "Compatible with most standard toilet drain pipes.",
    warranty: "3 mo.",
    delivery: "1-5 business days.",
    link: "https://buy.stripe.com/5kQcN6b8AeYqfC790Ma3u0q"
  },
  {
    tracking: "TRK10000025",
    name: "Hampton Bay Ceiling Fan with LED Light Kit",
    category: "Electrics",
    price: 150,
    description: "Stylish ceiling fan with integrated LED light kit. Provides efficient cooling and modern lighting for your home. Quiet motor ensures comfort in bedrooms and living spaces.",
    image: part25,
    compatibility: "Suitable for most standard ceiling fan mounts.",
    warranty: "1-year limited warranty.",
    delivery: "1-5 business days.",
    link: "https://buy.stripe.com/14AeVedgIeYq1Lh3Gsa3u0n"
  },
  {
    tracking: "TRK10000032",
    name: "Hampton Bay Universal Receiver and Remote Kit",
    category: "Electrics",
    price: 50,
    description: "Universal receiver and remote kit for Hampton Bay ceiling fans. Allows convenient control of fan speed and lighting. Easy installation with reliable wireless connection.",
    image: part26,
    compatibility: "Compatible with most Hampton Bay ceiling fans.",
    warranty: "1-year warranty.",
    delivery: "1-5 business days.",
    link: "https://buy.stripe.com/14AbJ2ekM4jM1Lh5OAa3u0o"
  },
  {
    tracking: "TRK10000001",
    name: "LED Bulb 10W",
    category: "Electrics",
    price: 4.99,
    description: "Energy-saving LED bulb 10W, lasts up to 15,000 hours. Perfect for home lighting.",
    image: part1,
    compatibility: "Compatible with standard E27 sockets.",
    warranty: "2-year warranty.",
    delivery: "1-2 business days."
  },
  {
    tracking: "TRK10000002",
    name: "Power Extension Cord 5m",
    category: "Electrics",
    price: 22.99,
    description: "5-meter extension cord with overload protection. Ideal for home or office use.",
    image: part2,
    compatibility: "Compatible with standard outlets.",
    warranty: "1-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000003",
    name: "Single Pole Light Switch",
    category: "Electrics",
    price: 6.75,
    description: "Standard single-pole light switch in white finish. Easy to install and durable.",
    image: part3,
    compatibility: "Fits most standard wall boxes.",
    warranty: "1-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000004",
    name: "Kitchen Faucet",
    category: "Plumbing",
    price: 120.0,
    description: "Modern kitchen faucet with high arc spout. Durable stainless steel construction.",
    image: part4,
    compatibility: "Fits most kitchen sinks.",
    warranty: "5-year warranty.",
    delivery: "3 business days."
  },
  {
    tracking: "TRK10000005",
    name: "Water Heater 50L",
    category: "Appliances",
    price: 250.0,
    description: "Electric water heater with 50-liter capacity. Reliable and energy efficient.",
    image: part5,
    compatibility: "Compatible with standard plumbing systems.",
    warranty: "3-year warranty.",
    delivery: "3 business days."
  },
  {
    tracking: "TRK10000006",
    name: "Water Heater 80L",
    category: "Appliances",
    price: 320.0,
    description: "Electric water heater with 80-liter capacity. Perfect for family use.",
    image: part6,
    compatibility: "Compatible with standard plumbing systems.",
    warranty: "3-year warranty.",
    delivery: "3 business days."
  },
  {
    tracking: "TRK10000007",
    name: "Ceiling Fan 1200mm",
    category: "Electrics",
    price: 89.99,
    description: "Ceiling fan with 1200mm blade span. Quiet and efficient airflow.",
    image: part7,
    compatibility: "Fits standard ceiling mounts.",
    warranty: "2-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000008",
    name: "Exhaust Fan 12\"",
    category: "Electrics",
    price: 45.0,
    description: "12-inch exhaust fan for kitchen or bathroom. Powerful and quiet.",
    image: part8,
    compatibility: "Fits standard ventilation openings.",
    warranty: "1-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000009",
    name: "6A Wall Socket",
    category: "Electrics",
    price: 2.5,
    description: "Standard 6A wall socket, white finish. Safe and reliable for everyday use.",
    image: part9,
    compatibility: "Compatible with most plug types.",
    warranty: "1-year warranty.",
    delivery: "1 business day."
  },
  {
    tracking: "TRK10000010",
    name: "16A Wall Switch",
    category: "Electrics",
    price: 3.0,
    description: "16A wall switch, durable and long-lasting. White finish, easy installation.",
    image: part10,
    compatibility: "Fits standard wall boxes.",
    warranty: "1-year warranty.",
    delivery: "1 business day."
  },
  {
    tracking: "TRK10000011",
    name: "LED Batten 2ft",
    category: "Electrics",
    price: 15.0,
    description: "2-foot LED batten light. Bright, energy-efficient, and long-lasting.",
    image: part11,
    compatibility: "Fits standard ceiling mounts.",
    warranty: "2-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000012",
    name: "LED Batten 4ft",
    category: "Electrics",
    price: 25.0,
    description: "4-foot LED batten light. Energy-efficient, durable, and bright.",
    image: part12,
    compatibility: "Fits standard ceiling mounts.",
    warranty: "2-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000013",
    name: "PVC Conduit Pipe",
    category: "Plumbing",
    price: 10.0,
    description: "PVC pipe for electrical wiring. Safe, durable, and easy to install.",
    image: part13,
    compatibility: "Suitable for standard electrical installations.",
    warranty: "1-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000014",
    name: "Ceiling Fan Regulator",
    category: "Electrics",
    price: 12.0,
    description: "Speed regulator for ceiling fans. Smooth and easy control.",
    image: part14,
    compatibility: "Compatible with most ceiling fans.",
    warranty: "1-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000015",
    name: "Signal Blinker",
    category: "Electrics",
    price: 5.0,
    description: "Portable signal blinker for safety. Easy to install and use.",
    image: part15,
    compatibility: "Works with standard vehicle electrical systems.",
    warranty: "1-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000016",
    name: "6A Extension Board (3+1)",
    category: "Electrics",
    price: 18.0,
    description: "6A extension board with 3 sockets and 1 USB port. Compact and safe.",
    image: part16,
    compatibility: "Compatible with standard plugs and USB devices.",
    warranty: "1-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000017",
    name: "16A Extension Board (3+1)",
    category: "Electrics",
    price: 28.0,
    description: "16A heavy-duty extension board with 3 sockets and 1 USB port.",
    image: part17,
    compatibility: "Compatible with standard plugs and USB devices.",
    warranty: "1-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000018",
    name: "Mosquito Killer Tube",
    category: "Electrics",
    price: 8.0,
    description: "UV tube for mosquito control. Safe and effective indoors.",
    image: part18,
    compatibility: "Fits standard tube holders.",
    warranty: "1-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000019",
    name: "4PIN PL LED 18W",
    category: "Electrics",
    price: 20.0,
    description: "18W LED lamp with 4 pins. Energy-efficient and long-lasting.",
    image: part19,
    compatibility: "Compatible with standard 4-pin holders.",
    warranty: "1-year warranty.",
    delivery: "2 business days."
  },
  {
    tracking: "TRK10000020",
    name: "Single Handle Basin Mixer",
    category: "Plumbing",
    price: 60.0,
    description: "Single-handle mixer tap for basin. Modern design and easy to clean.",
    image: part20,
    compatibility: "Fits standard basin mounts.",
    warranty: "5-year warranty.",
    delivery: "3 business days."
  },
  {
    tracking: "TRK10000021",
    name: "Ceiling fan and led kit",
    category: "Electrics",
    price: 120.0,
    description: "Energy-efficient ceiling fan with integrated LED lighting kit. Provides cooling comfort and stylish illumination for any room.",
    image: part21,
    compatibility: "Compatible with standard ceiling electrical boxes.",
    warranty: "1-year warranty.",
    delivery: "1-7 business days.",
    link: "https://buy.stripe.com/5kQ9AUa4w4jMey3el6a3u0j"
  }
  ,
  {
    tracking: "TRK10000022",
  name: "Water Heater Element 4500-Watt-240-Volt-HWD",
  category: "Plumbing",
  price: 100,
  description: "Durable replacement water heater element designed for long-lasting performance. Provides efficient heating and ensures consistent hot water supply in your home.",
  image: part22,
  compatibility: "Fits most standard electric water heater tanks (check voltage and wattage requirements before purchase).",
  warranty: "1 month",
  delivery: "1-5 business days.",
  link: "https://buy.stripe.com/4gM6oIdgI7vY9dJ2Coa3u0k"
  },
  {
  tracking: "TRK10000023",
  name: "Faucet Cartridge|Bathroom&Kitchen faucet|23P35",
  category: "Plumbing",
  price: 60,
  description: "High-quality faucet cartridge designed to fix leaks and restore smooth water flow. Easy to install and compatible with a wide range of bathroom and kitchen faucets.",
  image: part23,
  compatibility: "Fits most standard Bathroom & Kitchen faucet models (check size before purchase).",
  warranty: "3 months",
  delivery: "1-3 business days.",
  link: "https://buy.stripe.com/bJefZi3G88A2blR7WIa3u0l"
  },
  {
  tracking: "TRK10000024",
  name: "17 Inch Tall Toilet, Two-Piece Elongated Toilet with ADA Comfort Chair Height Seat, Powerful 1.1/1.6 GPF",
  category: "Plumbing",
  price: 205,
  description: "Durable ceramic toilet with modern design, efficient flushing system, and easy-to-clean surface. Perfect for both residential and commercial bathrooms.",
  image: part24,
  compatibility: "Fits standard bathroom plumbing connections.",
  warranty: "3 months",
  delivery: "1-5 business days.",
  link: "https://buy.stripe.com/8x214o1y05nQ75Bb8Ua3u0m"
  }
];

export default products;
