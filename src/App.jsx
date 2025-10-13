import React, { useState, useRef } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";


import logo from "./data/MATANATO_LOGO.PNG"
import elmar from "./data/elmar.PNG"
import business from "./data/business-usa.jpg"
import businessusa from "./data/usa-business.jpg"

import { BsFiletypeDoc, BsBank2, BsCurrencyDollar, BsPercent, BsFillPatchQuestionFill, BsClockHistory } from "react-icons/bs";

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
                    <li className="order-2 py-5 md:py-0">
                        <a href="tel:+13468002250" className="py-2 px-5 rounded-lg font-medium text-white text-center bg-red-700 hover:bg-red-500 active:bg-red-700 duration-150 block md:py-3 md:inline">
                            Подать заявку
                        </a>
                    </li>
                </ul>
            </nav>
            <header className="py-20">
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
                            src={business}
                            className=" md:rounded-tl-[108px]"
                            alt="business-usa"
                        />
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">
                      Полный пошаговый план: PDF-чеклист → курс → сопровождение под ключ.
                    </p>
                    
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
                    <div className="flex-1 sm:hidden lg:block p-4">
                        <img src={elmar} className="md:max-w-lg rounded-lg shadow-2xl" alt="Partners" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-red-700 font-semibold">
                            Oт предпринимателя, который сделал это сам.
                        </h3>
                        <p className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                            Кто проводит курс
                        </p>
                        <p className="mt-3 text-gray-600">
                            Меня зовут Эльмар Абдулкеримов. Более 3 лет я веду бизнес в США:
                            
                            <ul className="list-disc p-6">
                                <li>Регистрировал LLC</li>
                                <li>Получал налоговые номера</li>
                                <li>Открывал банковские счета</li>
                                <li>Подключал платёжные системы и тд.</li>
                            </ul>
                            Сейчас через Matanato LLC помогаю русскоязычным предпринимателям избежать ошибок и запустить бизнес правильно.
                            
                            </p>
                            <div className="p-4 bg-gray-200 rounded-xl">
                            <h4 className="font-bold text-2xl mb-2">Записаться на консультацию</h4>
                            <p>Я создал этот курс, чтобы сэкономить ваше время, уберечь от лишних расходов и распространённых ошибок, с которыми сталкиваются большинство начинающих владельцев компаний в США.</p>
                        <a href="#leadform" className="mt-4 block py-2 px-4 text-center text-white font-medium bg-red-700 duration-150 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-lg hover:shadow-none">
                                Записаться на курс
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

// ================= Benefits Section =================
const benefits = [
  { icon: <BsFiletypeDoc />, title: "Пошаговый план открытия LLC", desc: "Пошаговая инструкция с чёткой последовательностью действий и списком всех необходимых бумаг — вам не придётся искать информацию на разных сайтах." },
  { icon: <BsBank2 />, title: "Инструкция по получению EIN и банковского счёта", desc: "Разбор популярных онлайн-банков и практические советы, как получить номер налогоплательщика и запустить финансовые операции даже без личного визита в США." },
  { icon: <BsCurrencyDollar />, title: "Настройка приёма платежей (Stripe / PayPal)", desc: "Что нужно подготовить, как правильно заполнить анкеты и подключить платёжные системы, чтобы принимать деньги от клиентов по всему миру." },
  { icon: <BsPercent />, title: "Минимизация рисков: налоговые и юридические нюансы", desc: "Руководство по базовым требованиям к отчётности, упрощённые объяснения IRS-форм, советы по снижению рисков блокировок и штрафов." },
  { icon: <BsFillPatchQuestionFill />, title: "Поддержка: варианты консультаций и сопровождения", desc: "Доступ к чату поддержки, пошаговые консультации и дополнительные пакеты сопровождения для тех, кто хочет пройти путь быстрее." },
  { icon: <BsClockHistory />, title: "Практические шаблоны и образцы документов", desc: "Готовые образцы договоров, писем для банков и налоговых органов, а также инструкции по их заполнению — экономия времени и отсутствие ошибок при подаче заявок." },
];

function Benefits() {
  return (
    <section className="bg-gray-50 py-10 px-4 md:px-10 rounded-2xl shadow-md max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Что вы получите сразу после регистрации?</h2>
 <p className="text-md font-semibold text-center text-gray-800 mb-10">Всё необходимое в одном месте</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       
        {benefits.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition">
            <div className="text-3xl">{item.icon}</div>
            <div>
              <h4 className="font-semibold text-lg text-red-700">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
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
                        Хотите открыть бизнес в США с уверенностью?
                    </h3>
                    <h4 className="text-sm text-gray-200 mt-4">
  Быстрое решение бюрократических задач — экономия времени, денег и нервов.
</h4>
                </div>
                <div className="mt-5 items-center justify-center gap-3 sm:flex">
                    <a 
                        href="#leadform"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
                    >
                        Скачать PDF бесплатно
                    </a>
                    <a
                        href="tel:+13468002250"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
                    >
                        Зарегистрироваться на курс
                    </a>
                </div>
                
            </div>
        </section>
  );
}

// ================= Products Page =================

function Products() {
const plans = [
        {
            name: "PDF «7 шагов для открытия бизнеса в США»",
            desc: "Получаете базовое понимание, избегаете типичные ошибки, видите мою экспертность",
            price: 0,
            isMostPop: false,
            need: false,
            cta: "Скачать бесплатно",
            features: [
                "Открытие LLC",
                "Штат регистрации",
                "Получение EIN",
                "Бансковский счёт",
                "Платёжные системы",
                "Правила и отчётность",

            ],
        },
        {
            name: "Курс «Как открыть LLC и начать принимать платежи»",
            desc: "Экономите недели поиска информации, получаете готовый план действий, уверенность в правильных шагах",
            price: 29,
            old: "$150",
            isMostPop: true,
            need: false,
            cta: "Забронировать место",
            features: [
                "Пошаговая инструкция",
                "Платёжные системы",
                "Открытию счёта онлайн",
                "Разбор ошибок",
                "Готовые шаблоны",
                "План развития бизнеса",
            ],
        },
        {
            name: "Консультация 1 час «Ваш бизнес-план в США»",
            desc: "Минимум ошибок, экономия времени и денег, доступ к опыту и контактам, быстрый результат",
            price: 60,
            old: "$500",
            isMostPop: false,
            need: false,
            cta: "Заказать консультацию",
            features: [
                "Разбор ситуации",
                "Индивидуальный план действий",
                "Вопрос - Ответ",
            ],
        },
        ,
        {
            name: "Пакет «Бизнес в США под ключ»",
            desc: "Полное сопровождение от регистрации до первых шагов",
            price: 290,
            old: "$1500",
            isMostPop: false,
            need: true,
            cta: "Получить пакет",
            features: [
                "Полное наставничество",
                "Сопровождение 1–3 месяца",
            ],
        },
    ];

  return (
        <section className='py-14 mt-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-red-700 text-4xl font-extrabold sm:text-5xl'>
                        Мой путь — ваша уверенность
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            Каждый продукт создан на основе реального опыта и ошибок, через которые я прошёл сам. Здесь вы найдёте инструменты, которые помогут вам сделать первый шаг к собственному бизнесу в США — без страха и путаницы.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-4'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""} ${item.need ? "bg-red-50" : ""}`}>
                                {
                                    item.isMostPop ? (
                                        <span class="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-red-700 text-center text-gray-100 text-sm font-semibold">Популярное</span>
                                    ) : ""
                                }
                                <div className="p-8 space-y-4 h-[300px]">
                                    <span className='text-red-700 font-semibold'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-800 text-3xl font-semibold'>
                                        ${item.price} <span className="line-through text-gray-600 text-[20px]"> {item.old}</span>
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>
                                    
                                    
                                </div>
                                <div className="p-4 border-b">
                                        <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-red-700 hover:bg-red-500 active:bg-red-600'>
                                        {item.cta}
                                    </button>
                                    </div>
                                <ul className='p-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-red-700'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

// ================= QA Page =================

function Questions() {

    const faqsList = [
        {
            q: "Нужна ли мне виза или SSN, чтобы открыть LLC?",
            a: "Нет. LLC может открыть нерезидент; для банковских операций иногда нужен визит в США, но есть работающие онлайн-варианты."
        },
        {
            q: "Сколько времени занимает регистрация?",
            a: "Сам процесс регистрации LLC — 1–5 рабочих дней (в зависимости от штата и сервиса), полная настройка (банк, EIN) — 2–6 недель."
        },
        {
            q: "Какой штат лучше?",
            a: "Для большинства — Wyoming/Delaware/Texas. Выбор зависит от целей: налоги, конфиденциальность, стоимость."
        },
        {
            q: "Есть ли гарантия?",
            a: "Я даю практическую поддержку и помогаю пройти процедуру. Финансовые гарантии — в оферте (описываем условия возврата)."
        },
        {
            q: "Нужно ли находиться в США, чтобы открыть LLC?",
            a: "Нет. Вы можете открыть компанию дистанционно, находясь в любой стране. Все документы оформляются онлайн, а банковский счёт и платёжные системы подключаются удалённо."
        },
        {
            q: "Подойдёт ли этот курс, если я ничего не понимаю в бизнесе и налогах США?",
            a: "Да, курс рассчитан именно на новичков.Материал объясняется простым языком, без юридических терминов. После прохождения вы будете понимать, какие шаги сделать, какие формы подать и как принимать платежи легально."
        }
    ]

    return (
        <div className="leading-relaxed mt-12 mx-4 md:mx-8">
            <div className="text-center space-y-3">
                <h1 className="block text-gray-800 text-4xl font-bold">
                     Часто спрашивают
                </h1>
                <p className="text-gray-500 max-w-lg mx-auto">
                    Собрал здесь всё, что вы обычно спрашиваете — коротко, ясно и по делу.
                </p>
            </div>
            <div className="relative bg-white rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto" style={{boxShadow: '0px 7px 20px 7px #F1F1F1'}}>
                <div className="grid gap-4 py-8 md:grid-cols-2">
                    {
                        faqsList.map((item, idx) => (
                            <div className="space-y-3 mt-6 px-8" key={idx}>
                                <h4 className="text-red-700 text-xl font-bold ">
                                    {item.q}
                                </h4>
                                <p className="text-gray-500">
                                    {item.a}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-0 right-0 hidden md:block"></span>
            </div>
        </div>
    )
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
        <section className="py-20 bg-white text-gray-900" id="leadform">
  <div className="max-w-2xl mx-auto px-6">
    <h2 className="text-4xl font-semibold text-center mb-8">
      Получите бесплатный PDF «7 шагов»
    </h2>
    <form ref={form} onSubmit={sendEmail} className="space-y-5 bg-white p-8 rounded-xl shadow-lg">
      <input
        name="company"
        placeholder="Company Name"
        required
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <input
        name="name"
        placeholder="Your Name"
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
        name="units"
        placeholder="How many homes/units you manage?"
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <div>
        <label className="block font-medium mb-2">What services are you interested in?</label>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="services" value="Appliance" className="accent-blue-600" />
            Appliance
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="services" value="Plumbing" className="accent-blue-600" />
            Plumbing
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="services" value="Electrical" className="accent-blue-600" />
            Electrical
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="services" value="HVAC" className="accent-blue-600" />
            HVAC
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </div>
</section>
    );
}

//     <!-- Блок: Почему открыть компанию в США (HTML + Tailwind) -->
function Why() {
  return (
    <section class="relative py-20 px-6 bg-gray-50 overflow-hidden" id="why-us-llc">
      <div className="absolute inset-0">
        <img
          src={businessusa}
          alt="USA Business Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-sm"></div>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Почему открыть компанию в США — это решение, которое меняет всё
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Американская юрлицо — это не просто статус. Это доверие, доступ к международным платёжным системам
          и реальная возможность масштабировать бизнес по всему миру.
        </p>
        <div className="mt-6">
          <a
            href="#products"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-medium px-6 py-3 rounded-lg shadow"
          >
            Узнать, как начать
          </a>
        </div>
      </div>

      <div class="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <div class="p-6 border rounded-xl shadow-xl flex flex-col">
      <div class="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-full">
      
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM20 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
        </svg>
      </div>
      <h3 class="mt-4 text-lg font-semibold">Доверие и престиж</h3>
      <p class="mt-2 text-sm text-gray-600">Американская регистрация повышает доверие у клиентов, партнёров и платёжных платформ.</p>
    </div>


    <div class="p-6 border rounded-xl shadow-xl flex flex-col">
      <div class="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-full">

        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 1.343-3 3v2h6v-2c0-1.657-1.343-3-3-3zM6 12v6h12v-6" />
        </svg>
      </div>
      <h3 class="mt-4 text-lg font-semibold">Приём платежей со всего мира</h3>
      <p class="mt-2 text-sm text-gray-600">Подключение Stripe, PayPal и других систем — принимать деньги в долларах стало проще.</p>
    </div>


    <div class="p-6 border rounded-xl shadow-xl flex flex-col">
      <div class="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-full">
        
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7h18M5 7v12a2 2 0 002 2h10a2 2 0 002-2V7M8 7V5a4 4 0 118 0v2" />
        </svg>
      </div>
      <h3 class="mt-4 text-lg font-semibold">Работа с мировыми площадками</h3>
      <p class="mt-2 text-sm text-gray-600">Amazon, Shopify, Etsy и другие платформы дают больше возможностей владельцам US-LLC.</p>
    </div>


    <div class="p-6 border rounded-xl shadow-xl flex flex-col">
      <div class="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-full">
     
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v4m0 10v4m9-9h-4M7 12H3m15.364-6.364l-2.828 2.828M6.464 17.536l-2.828 2.828M17.536 17.536l2.828 2.828M6.464 6.464L3.636 3.636" />
        </svg>
      </div>
      <h3 class="mt-4 text-lg font-semibold">Быстрая дистанционная регистрация</h3>
      <p class="mt-2 text-sm text-gray-600">Всё можно оформить онлайн: LLC, EIN и другие процедуры занимают дни, а не месяцы.</p>
    </div>


    <div class="p-6 border rounded-xl shadow-xl flex flex-col">
      <div class="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-full">
        
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3zM8 20h8" />
        </svg>
      </div>
      <h3 class="mt-4 text-lg font-semibold">Оптимизация налогов</h3>
      <p class="mt-2 text-sm text-gray-600">Правильно выбранная структура и сопровождение помогают платить меньше в рамках закона.</p>
    </div>

    <div class="p-6 border rounded-xl shadow-xl flex flex-col">
      <div class="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-full">
     
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3zM5 20h14" />
        </svg>
      </div>
      <h3 class="mt-4 text-lg font-semibold">Доступ к инвестициям</h3>
      <p class="mt-2 text-sm text-gray-600">Американский статус облегчает общение с инвесторами и участие в программах финансирования.</p>
    </div>

    <div class="p-6 border rounded-xl shadow-xl flex flex-col">
      <div class="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-full">
    
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h18M6 6v12a2 2 0 002 2h8a2 2 0 002-2V6" />
        </svg>
      </div>
      <h3 class="mt-4 text-lg font-semibold">Развитие без границ</h3>
      <p class="mt-2 text-sm text-gray-600">Принимайте платежи в долларах, нанимайте удалённую команду и расширяйте продажи по всему миру.</p>
    </div>
  </div>
</section>

  );
}

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
      <About />
      <Benefits />
      <Why />
      <Products />
      <Questions />
      <CTA />
      {/* <LeadGen /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>*/}
      {/* <Footer />  */}
    </div>
  );
}