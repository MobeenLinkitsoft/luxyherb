// src/app/page.js
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaLeaf,
  FaRecycle,
  FaShower,
  FaMoneyBillWave,
  FaPlane,
  FaSeedling,
  FaFlask,
  FaIndustry,
  FaStar,
  FaGlobeAmericas,
  FaTree,
  FaTintSlash,
  FaBan,
  FaCheckCircle,
  FaShippingFast,
  FaCertificate,
  FaHeart,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaUsers, // Add this
} from "react-icons/fa";
import { GiWaterDrop, GiPlantWatering, GiChemicalDrop } from "react-icons/gi";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Facebook Posts Carousel Data
  const facebookPosts = [
    {
      id: 1,
      image: "/assets/new/9.png",
      title: "Customer Review",
      description: "Amazing results with our Anti-Dandruff formula!",
    },
    {
      id: 2,
      image: "/assets/new/2.png",
      title: "Before & After",
      description: "Real results from our Hair Fall Control variant",
    },
    {
      id: 3,
      image: "/assets/new/3.png",
      title: "Eco-Friendly Packaging",
      description: "See how we're reducing plastic waste",
    },
    {
      id: 4,
      image: "/assets/new/4.png",
      title: "Herbal Ingredients",
      description: "Meet the natural ingredients behind our formulas",
    },
    {
      id: 5,
      image: "/assets/new/5.png",
      title: "Herbal Ingredients",
      description: "Meet the natural ingredients behind our formulas",
    },
    {
      id: 6,
      image: "/assets/new/6.png",
      title: "Herbal Ingredients",
      description: "Meet the natural ingredients behind our formulas",
    },
  ];

  const nextPost = () => {
    setCurrentPost((prev) => (prev + 1) % facebookPosts.length);
  };

  const prevPost = () => {
    setCurrentPost(
      (prev) => (prev - 1 + facebookPosts.length) % facebookPosts.length
    );
  };

  // Auto slide for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextPost();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = [
    {
      id: 1,
      name: "Anti-Dandruff",
      ingredients: "Neem + Tulsi + Amla + SCI base",
      description:
        "Clears dandruff, reduces scalp itch, leaves hair fresh but not overly dry",
      problem: "Struggling with persistent dandruff and itchy scalp?",
      solution:
        "Our Anti-Dandruff formula uses natural antifungal properties to eliminate dandruff while soothing your scalp.",
      benefits: [
        "Natural antifungal & antibacterial",
        "Soothes itching",
        "Reduces inflammation",
        "Strengthens follicles",
      ],
      color: "from-green-50 to-green-100",
      accentColor: "text-green-700",
      image: "/assets/1.png",
      problemImage: "/assets/dandruff-problem.jpg",
      ingredientsImages: [
        "/assets/neem.png",
        "/assets/tulsi.png",
        "/assets/amla.png",
      ],
    },
    {
      id: 2,
      name: "Hair Fall Control",
      ingredients: "Bhringraj + Hibiscus + Amla + SCI base",
      description:
        "Reduces hair fall, improves volume and strength, nourishes scalp",
      problem: "Worried about excessive hair fall and thinning hair?",
      solution:
        "Strengthen your hair roots and promote healthy growth with our specialized Hair Fall Control formula.",
      benefits: [
        "Stimulates growth",
        "Strengthens roots",
        "Prevents premature greying",
        "Improves thickness",
      ],
      color: "from-purple-50 to-purple-100",
      accentColor: "text-purple-700",
      image: "/assets/4.png",
      problemImage: "/assets/hairfall-problem.jpg",
      ingredientsImages: [
        "/assets/bhringraj.png",
        "/assets/hibiscus.png",
        "/assets/amla.png",
      ],
    },
    {
      id: 3,
      name: "Refreshing / Oily Hair",
      ingredients: "Shikakai + Reetha + Lemon Peel + SCI base",
      description:
        "Best for oily scalps, gives clean feel, prevents greasy look",
      problem: "Tired of oily, greasy hair that never feels clean?",
      solution:
        "Our Refreshing formula regulates oil production while keeping your hair naturally clean and fresh.",
      benefits: [
        "Regulates scalp oil",
        "Natural cleanser",
        "Reduces oiliness",
        "Fresh citrus scent",
      ],
      color: "from-blue-50 to-blue-100",
      accentColor: "text-blue-700",
      image: "/assets/2.png",
      problemImage: "/assets/oily-problem.jpg",
      ingredientsImages: [
        "/assets/shikakai.png",
        "/assets/reetha.png",
        "/assets/lemon.png",
      ],
    },
    {
      id: 4,
      name: "Nourishing / Dry Hair",
      ingredients: "Fenugreek + Aloe Vera + Amla + SCI base",
      description:
        "Hydrating, smooths frizz, makes hair soft for dry/curly hair",
      problem: "Dealing with dry, frizzy hair that lacks moisture?",
      solution:
        "Deeply nourish and hydrate your hair with our specially formulated dry hair solution.",
      benefits: [
        "Deeply conditions",
        "Reduces dryness & frizz",
        "Hydrates scalp",
        "Locks moisture",
      ],
      color: "from-amber-50 to-amber-100",
      accentColor: "text-amber-700",
      image: "/assets/3.png",
      problemImage: "/assets/dry-problem.jpg",
      ingredientsImages: [
        "/assets/fenugreek.png",
        "/assets/aloe-vera.png",
        "/assets/amla.png",
      ],
    },
  ];

  // Problem-Solution Sections Data
  const problemSolutions = [
    {
      id: 1,
      problem: "Dandruff & Itchy Scalp",
      solution: "Anti-Dandruff Formula with Neem + Tulsi + Amla",
      description:
        "Neem's natural antifungal properties target dandruff-causing fungus while Tulsi soothes itching and Amla strengthens follicles.",
      image: "/assets/new/1.png",
      variantIndex: 0,
    },
    {
      id: 2,
      problem: "Excessive Hair Fall",
      solution: "Hair Fall Control with Bhringraj + Hibiscus + Amla",
      description:
        "Bhringraj stimulates growth, Hibiscus strengthens roots, and Amla prevents premature greying for thicker, stronger hair.",
      image: "/assets/new/10.png",
      variantIndex: 1,
    },
    {
      id: 3,
      problem: "Oily & Greasy Hair",
      solution: "Refreshing Formula with Shikakai + Reetha + Lemon Peel",
      description:
        "Shikakai regulates oil, Reetha provides gentle cleansing, and Lemon Peel adds freshness while controlling oiliness.",
      image: "/assets/new/9.png",
      variantIndex: 2,
    },
    {
      id: 4,
      problem: "Dry & Frizzy Hair",
      solution: "Nourishing Formula with Fenugreek + Aloe Vera + Amla",
      description:
        "Fenugreek deeply conditions, Aloe Vera hydrates, and Amla adds strength for smooth, manageable hair.",
      image: "/assets/new/8.png",
      variantIndex: 3,
    },
  ];

  // Our Core Pillars/Features
  const corePillars = [
    {
      icon: GiWaterDrop,
      title: "Water-Free Formula",
      description:
        "Save precious water with our concentrated powder that you mix with water at home",
      impact: "Saves 100ml of water per wash compared to liquid shampoos",
    },
    {
      icon: FaBan,
      title: "Plastic-Free Packaging",
      description:
        "Our eco-friendly jars are 100% plastic-free and biodegradable",
      impact: "Eliminates 3 plastic bottles per jar from landfills",
    },
    {
      icon: FaTree,
      title: "One Tree Planted",
      description: "We plant a tree for every purchase to combat deforestation",
      impact: "Join us in creating a greener Pakistan with every jar",
    },
    {
      icon: FaLeaf,
      title: "100% Herbal & Chemical-Free",
      description:
        "Pure natural ingredients, no chemicals, sulfates, or preservatives",
      impact: "Safe for you and the environment",
    },
  ];

  const features = [
    {
      icon: FaLeaf,
      title: "100% Natural Herbs",
      desc: "Pure herbal ingredients, zero chemicals or sulfates",
    },
    {
      icon: FaRecycle,
      title: "Eco-Friendly",
      desc: "Save 3 plastic bottles per jar with our powder formula",
    },
    {
      icon: FaShower,
      title: "Easy to Use",
      desc: "Mix with water in 30 seconds, apply like regular shampoo",
    },
    {
      icon: FaMoneyBillWave,
      title: "Cost Effective",
      desc: "One jar lasts 2-3 months (60+ washes)",
    },
    {
      icon: FaPlane,
      title: "Travel Friendly",
      desc: "No liquid restrictions, lightweight & spill-proof",
    },
    {
      icon: FaCertificate,
      title: "Fresh Potency",
      desc: "Powder preserves herbal strength without preservatives",
    },
  ];

  const stats = [
    {
      icon: GiWaterDrop,
      value: "100ml",
      label: "Water saved per wash",
    },
    {
      icon: FaBan,
      value: "3",
      label: "Plastic bottles saved per jar",
    },
    {
      icon: GiPlantWatering,
      value: "1 Tree",
      label: "Planted with each purchase",
    },
    {
      icon: FaLeaf,
      value: "100%",
      label: "Natural ingredients",
    },
  ];

  const socialIcons = [
    {
      icon: FaFacebook,
      label: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61580669037299",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      link: "https://www.instagram.com/luxyherb/",
    },
    // { icon: FaTiktok, label: "TikTok" },
    // { icon: FaYoutube, label: "YouTube" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: message,
          variant: variants[selectedVariant].name,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      console.log(
        "Email submitted:",
        email,
        "Variant:",
        variants[selectedVariant].name,
        "Message:",
        message
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      // You can add error state handling here if needed
      alert("Failed to join waitlist. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <FaCheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Thank You! <span className="text-green-600">🎉</span>
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            You're on the waitlist! We'll notify you when{" "}
            <span className="font-semibold text-green-600">
              {variants[selectedVariant].name}
            </span>{" "}
            is available and send you an exclusive{" "}
            <span className="font-bold">20% launch discount</span>.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-gradient-to-r from-green-600 to-[#103123] text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <FaLeaf className="w-5 h-5" />
            <span>Join Waitlist for Another Variant</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-emerald-50">
      <Head>
        <title>Luxy Herb - 100% Herbal Powder Shampoo | Coming Soon</title>
        <meta
          name="description"
          content="Discover Luxy Herb's 100% natural herbal powder shampoo. Chemical-free hair care solutions for dandruff, hair fall, oily & dry hair. Join the waitlist!"
        />
      </Head>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/4 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`bg-[#103123] backdrop-blur-md border-b border-green-200 sticky top-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full overflow-hidden">
                <Image
                  src={"/assets/logo.png"}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                  alt="Luxy Herb Logo"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">
                Luxy Herb
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs sm:text-sm font-medium text-gray-700 bg-white px-2 sm:px-3 py-1 rounded-full flex items-center space-x-2">
                <FaLeaf className="w-3 h-3 text-green-600" />
                <span>🇵🇰 Made in Pakistan</span>
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div
          className={`text-center mb-8 sm:mb-16 transition-all duration-500 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <FaCertificate className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Pakistan's First 100% Herbal Powder Shampoo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Revolutionize Your{" "}
            <span className="bg-gradient-to-r from-green-600 to-[#103123] bg-clip-text text-transparent">
              Hair Care
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Experience the power of nature with our chemical-free, sustainable
            powder shampoo.
            <span className="font-semibold text-green-700">
              {" "}
              Tailored solutions for every hair type.
            </span>
          </p>

          {/* Variant Selector - Mobile Scrollable */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-2 sm:p-3 mb-8 border border-green-100 transition-all duration-500 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {variants.map((variant, index) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(index)}
                  className={`px-3 sm:px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-center ${
                    selectedVariant === index
                      ? "bg-gradient-to-r from-green-600 to-[#103123] text-white shadow-lg"
                      : "text-gray-600 hover:text-green-700 bg-white hover:bg-green-50"
                  }`}
                >
                  <FaLeaf className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{variant.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <div
          className={`grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-20 transition-all duration-500 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Product Image Section */}
          <div className="relative">
            <div
              className={`bg-gradient-to-br ${variants[selectedVariant].color} rounded-3xl p-6 sm:p-8 aspect-square flex items-center justify-center shadow-2xl transform hover:scale-105 transition duration-500`}
            >
              <div className="text-center relative">
                {/* Product Jar */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-b from-white to-gray-100 rounded-2xl mx-auto shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-3 sm:h-4 bg-gradient-to-r from-green-400 to-[#103123]"></div>
                    <div className="absolute inset-3 sm:inset-4 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
                      <div className="relative w-40 h-40 sm:w-70 sm:h-70">
                        <Image
                          src={variants[selectedVariant].image}
                          alt={variants[selectedVariant].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {variants[selectedVariant].name}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg font-medium">
                  {variants[selectedVariant].ingredients}
                </p>
              </div>
            </div>

            {/* Floating Ingredients */}
            <div className="absolute -bottom-4 sm:-bottom-14 -left-2 sm:-left-4 bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-4 transform hover:scale-110 transition duration-300">
              <div className="flex space-x-2 sm:space-x-3">
                {variants[selectedVariant].ingredientsImages.map(
                  (image, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center overflow-hidden"
                    >
                      <div className="relative w-10 h-10 sm:w-16 sm:h-16">
                        <Image
                          src={image}
                          alt={`Ingredient ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
              <p className="text-xs text-gray-600 mt-1 sm:mt-2 text-center flex items-center justify-center space-x-1">
                <FaLeaf className="w-2 h-2 sm:w-3 sm:h-3" />
                <span className="text-xs">Key Ingredients</span>
              </p>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {variants[selectedVariant].name} Formula
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                {variants[selectedVariant].description}
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {variants[selectedVariant].benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm border border-green-50 transform hover:scale-102 transition duration-200"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* How to Use */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-green-100">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
                <FaShower className="text-green-600" />
                <span>How to Use:</span>
              </h4>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                <div className="space-y-1 sm:space-y-2">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="font-bold text-sm sm:text-base">1</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Take 1 tsp powder
                  </p>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="font-bold text-sm sm:text-base">2</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Mix with water
                  </p>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="font-bold text-sm sm:text-base">3</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Apply & rinse
                  </p>
                </div>
              </div>
            </div>

            {/* Waitlist Form */}
            <div
              id="waitlist-form"
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl p-4 sm:p-8 border border-green-200 transform hover:scale-101 transition duration-300"
            >
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center space-x-2">
                  <FaCertificate className="text-green-600" />
                  <span>Be the First to Experience!</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Join the exclusive waitlist for{" "}
                  <span className="font-semibold text-green-700">
                    20% launch discount
                  </span>{" "}
                  and early access
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your best email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-green-500 focus:border-transparent text-base sm:text-lg shadow-sm"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                </div>

                {/* Optional Message Field */}
                <div className="relative">
                  <textarea
                    placeholder="Any suggestions, reviews, or specific hair concerns? (Optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="3"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-3 focus:ring-green-500 focus:border-transparent text-base sm:text-lg shadow-sm resize-none"
                  />
                  <div className="absolute top-3 right-3 flex items-center">
                    <span className="text-xs text-gray-400">Optional</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-[#103123] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-lg flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Joining Waitlist...</span>
                    </>
                  ) : (
                    <>
                      <FaLeaf className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>
                        Join {variants[selectedVariant].name} Waitlist
                      </span>
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-center flex items-center justify-center space-x-1">
                <FaCertificate className="w-2 h-2 sm:w-3 sm:h-3" />
                <span className="text-xs">
                  No spam. Unsubscribe at any time. Limited spots available!
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Facebook Posts Carousel */}
        <div
          className={`mb-12 sm:mb-20 transition-all duration-500 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Square Facebook Post Style */}
              <div className="relative aspect-square">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentPost * 100}%)` }}
                >
                  {facebookPosts.map((post) => (
                    <div
                      key={post.id}
                      className="w-full flex-shrink-0 relative"
                    >
                      {/* Facebook Post Style Frame */}
                      <div className="relative w-full h-full bg-gray-50">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevPost}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-gray-200"
              >
                <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={nextPost}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border border-gray-200"
              >
                <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {facebookPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPost(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPost ? "bg-blue-600 w-6" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Problem-Solution Sections */}
        <div
          className={`mb-12 sm:mb-20 transition-all duration-500 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Hair Concern
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We understand your hair problems and provide natural, effective
              solutions
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {problemSolutions.map((section, index) => (
              <div
                key={section.id}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="bg-gradient-to-br from-green-100 to-amber-100 rounded-3xl p-6 aspect-square flex items-center justify-center shadow-2xl">
                    <div className="relative w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <span className="text-gray-600 text-lg font-semibold">
                        <Image
                          src={section.image}
                          fill
                          className="object-cover"
                        />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      <span>❌ Problem</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {section.problem}
                    </h3>

                    <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      <FaCheckCircle className="text-green-600" />
                      <span>Solution</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-green-700 mb-3">
                      {section.solution}
                    </h4>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {section.description}
                    </p>

                    <button
                      onClick={() => setSelectedVariant(section.variantIndex)}
                      className="bg-gradient-to-r from-green-600 to-[#103123] text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center lg:justify-start space-x-2 mx-auto lg:mx-0"
                    >
                      <FaLeaf className="w-4 h-4" />
                      <span>Try {variants[section.variantIndex].name}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Pillars Section */}
        <div
          className={`mb-12 sm:mb-20 transition-all duration-500 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-3">
              <FaGlobeAmericas className="text-green-600" />
              <span>Our Commitment to Nature</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              At Luxy Herb, we believe in beauty that doesn't cost the Earth.
              That's why we've built our brand on four core pillars of
              sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {corePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-green-100 transform hover:scale-102 transition duration-300 group"
                >
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition duration-300">
                        <IconComponent className="text-2xl sm:text-3xl text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-base sm:text-lg">
                        {pillar.description}
                      </p>
                      <div className="bg-green-50 rounded-lg px-3 sm:px-4 py-2 inline-block">
                        <span className="text-green-700 font-semibold text-xs sm:text-sm flex items-center space-x-1">
                          <FaLeaf className="w-2 h-2 sm:w-3 sm:h-3" />
                          <span>{pillar.impact}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social Media Follow Section */}
        <div
          className={`mb-12 sm:mb-20 transition-all duration-500 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-3">
              <FaHeart className="text-red-500" />
              <span>Join Our Growing Community</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Follow us on social media for daily hair care tips,
              behind-the-scenes content, exclusive offers, and to see real
              results from our community!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Facebook Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-200 transform hover:scale-105 transition duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                  <FaFacebook className="text-white text-3xl" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Facebook
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join our Facebook family! Get exclusive content, live Q&A
                  sessions, and be the first to know about new product launches.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span>Daily hair care tips</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span>Exclusive offers</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span>Community support</span>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/profile.php?id=61580669037299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                >
                  <FaFacebook className="w-5 h-5" />
                  <span>Follow @LuxyHerb</span>
                </a>

                <p className="text-xs text-gray-500 mt-3 flex items-center justify-center space-x-1">
                  <FaUsers className="w-3 h-3" />
                  <span>Join our growing Facebook community</span>
                </p>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-100 rounded-3xl p-6 sm:p-8 shadow-xl border border-pink-200 transform hover:scale-105 transition duration-300 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                  <FaInstagram className="text-white text-3xl" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Instagram
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Follow our Instagram for visual transformations, reels,
                  stories, and to see real customer results with our herbal
                  products.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span>Before & After results</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span>Video tutorials</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span>Product launches</span>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/luxyherb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                >
                  <FaInstagram className="w-5 h-5" />
                  <span>Follow @LuxyHerb</span>
                </a>

                <p className="text-xs text-gray-500 mt-3 flex items-center justify-center space-x-1">
                  <FaUsers className="w-3 h-3" />
                  <span>See real transformations daily</span>
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-green-100 max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-center space-x-2">
                <FaUsers className="text-green-600" />
                <span>Why Join Our Social Community?</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaCertificate className="text-green-600 text-xl" />
                  </div>
                  <h5 className="font-semibold text-gray-900">
                    Exclusive Content
                  </h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Tips not shared elsewhere
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaShippingFast className="text-green-600 text-xl" />
                  </div>
                  <h5 className="font-semibold text-gray-900">Early Access</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Be first for new launches
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaHeart className="text-green-600 text-xl" />
                  </div>
                  <h5 className="font-semibold text-gray-900">
                    Community Support
                  </h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Connect with other users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact Stats */}
        <div
          className={`bg-gradient-to-r from-green-600 to-[#103123] rounded-3xl shadow-2xl p-8 sm:p-12 text-white mb-12 sm:mb-20 transition-all duration-500 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 flex items-center justify-center space-x-3">
              <FaStar className="text-amber-300" />
              <span>Together We Make a Difference</span>
            </h2>
            <p className="text-lg sm:text-xl opacity-90">
              Your choice contributes to a sustainable future
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index}>
                  <div className="flex justify-center mb-2">
                    <IconComponent className="text-3xl sm:text-4xl text-amber-300" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm sm:text-base opacity-90">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 transition-all duration-500 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-green-100 transform hover:scale-105 transition duration-300 group"
              >
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition duration-300 text-green-600">
                  <IconComponent />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div
          className={`text-center transition-all duration-500 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-green-600 to-[#103123] rounded-3xl shadow-2xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 flex items-center justify-center space-x-3">
              <FaLeaf className="text-amber-300" />
              <span>Ready for Healthier Hair?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Join thousands of Pakistanis who are switching to natural hair
              care
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("waitlist-form")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 mx-auto"
            >
              <FaLeaf className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Join Waitlist Now - Get 20% Off!</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-green-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-[#103123] rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={"/assets/logo.png"}
                    width={48}
                    height={48}
                    className="object-cover rounded-full"
                    alt="Luxy Herb Logo"
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">
                  Luxy Herb
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                100% natural herbal powder shampoo for healthier hair and a
                healthier planet.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4">
                Our Pillars
              </h4>
              <div className="space-y-2">
                {corePillars.map((pillar) => {
                  const IconComponent = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition duration-200 flex items-center space-x-2"
                    >
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{pillar.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4">Contact</h4>
              <div className="space-y-2 text-sm sm:text-base text-gray-600">
                <p className="flex items-center space-x-2">
                  <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>hello@luxyherb.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <FaPhone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>+92 308 3689852</span>
                </p>
                <p className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Karachi, Pakistan</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialIcons.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      target="_blank"
                      href={social.link}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition duration-200"
                      title={social.label}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 sm:pt-8 text-center">
            <p className="text-sm text-gray-600 flex items-center justify-center space-x-2">
              <FaHeart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              <span>
                © 2025 Luxy Herb. All rights reserved. Made with love in
                Pakistan
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
