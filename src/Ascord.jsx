// import  { useState } from 'react';
// import "./App.css"


// const AsconeLandingPage = () => {
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     if (activeAccordion === index) {
//       setActiveAccordion(null);
//     } else {
//       setActiveAccordion(index);
//     }
//   };

//   const faqItems = [
//     {
//       question: 'How sending a bank transfer',
//       answer: 'We offer multiple secure ways to transfer funds between accounts.'
//     },
//     {
//       question: 'What is the scheduled payments feature?',
//       answer: 'Our scheduled payments feature allows you to set up automatic recurring payments in one place. This way, you can rest assured for every payment while benefits like improved frequency payment rates too.'
//     },
//     {
//       question: 'How can I reactivate a terminated card?',
//       answer: 'You can reactivate a terminated card by visiting your account settings and following the reactivation steps.'
//     },
//     {
//       question: 'How about with a refund?',
//       answer: 'Refunds are typically processed within 3-5 business days, depending on your bank.'
//     },
//     {
//       question: 'How can add money to my account?',
//       answer: 'You can add money to your account through bank transfers, card payments, or direct deposits.'
//     }
//   ];

//   return (
//     <div className="font-sans text-gray-900">
//       {/* Top Banner */}
//       <div className="bg-green-900 text-white text-xs py-1 px-4 text-center">
//         <p>14-day free trial! <a href="#" className="underline">Get started today &gt;</a></p>
//       </div>

//       <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
//       {/* Navigation */}
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-8">
//             <div className="text-2xl font-bold">Ascone</div>
//             <nav className="hidden md:flex space-x-6">
//               <a href="#" className="text-sm">Features</a>
//               <a href="#" className="text-sm">Accounts</a>
//               <a href="#" className="text-sm">Company</a>
//               <a href="#" className="text-sm">Insight</a>
//             </nav>
//           </div>
//           <div className="flex items-center space-x-4">
//             <a href="#" className="text-sm">Login</a>
//             <a href="#" className="bg-green-800 text-white text-sm px-4 py-2 rounded-md">Sign Up</a>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <div className="text-sm text-gray-500 mb-2">TAKE CHARGE</div>
//               <h1 className="text-4xl font-bold mb-2">Change the way you use your</h1>
//               <h2 className="text-4xl font-serif italic mb-6">money</h2>
//               <p className="text-gray-600 mb-6 max-w-md">
//                 From everyday spending to accounting for your future with savings and investments, Ascone helps you get more from your money.
//               </p>
//               <button className="bg-green-800 text-white px-5 py-2 rounded-md text-sm mb-4">Get Started Free</button>
//               <div className="flex items-center">
//                 <div className="flex">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                   ))}
//                 </div>
//                 <span className="ml-2 text-sm text-gray-600">4.9</span>
//               </div>
//             </div>
//             <div className="md:w-1/2 relative">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gray-100 p-4 rounded-lg flex items-center">
//                   <img src="/api/placeholder/160/120" alt="Phone App" className="w-32" />
//                 </div>
//                 <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center text-center">
//                   <p className="text-2xl font-bold">56+</p>
//                   <p className="text-sm">Currencies</p>
//                   <div className="mt-2">
//                     <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <circle cx="12" cy="12" r="10" />
//                       <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
//                     </svg>
//                   </div>
//                 </div>

//                 <div className="bg-green-900 text-white p-4 rounded-lg">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="font-bold">$196,000</span>
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
//                     </svg>
//                   </div>
//                   <div className="h-16 relative overflow-hidden">
//                     {/* Simplified Chart */}
//                     <svg viewBox="0 0 100 40" className="w-full h-full text-green-500">
//                       <path 
//                         d="M0,30 L10,28 L20,25 L30,26 L40,23 L50,20 L60,15 L70,10 L80,8 L90,5 L100,2" 
//                         fill="none" 
//                         stroke="currentColor" 
//                         strokeWidth="2"
//                       />
//                     </svg>
//                   </div>
//                   <div className="text-right text-sm">Saving</div>
//                 </div>

//                 <div className="bg-gray-100 p-4 rounded-lg">
//                   <p className="text-sm mb-2">Users Active</p>
//                   <div className="flex -space-x-2">
//                     <img className="w-8 h-8 rounded-full border-2 border-white" src="/api/placeholder/32/32" alt="User" />
//                     <img className="w-8 h-8 rounded-full border-2 border-white" src="/api/placeholder/32/32" alt="User" />
//                     <img className="w-8 h-8 rounded-full border-2 border-white" src="/api/placeholder/32/32" alt="User" />
//                     <div className="w-8 h-8 rounded-full border-2 border-white bg-green-900 text-white flex items-center justify-center text-xs">+</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="flex space-x-2">
//                   <div className="w-2 h-2 rounded-full bg-green-800"></div>
//                   <div className="w-2 h-2 rounded-full bg-green-800"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Partners */}
//       <section className="py-8 border-t border-b">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
//             <img src="/api/placeholder/80/24" alt="Loom" className="h-6" />
//             <img src="/api/placeholder/80/24" alt="HubSpot" className="h-6" />
//             <img src="/api/placeholder/80/24" alt="OpenAI" className="h-6" />
//             <img src="/api/placeholder/80/24" alt="Raycast" className="h-6" />
//             <img src="/api/placeholder/80/24" alt="Zenefits" className="h-6" />
//           </div>
//         </div>
//       </section>

//       {/* App Features */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 text-center">
//           <div className="text-sm text-gray-500 mb-2">ABOUT US</div>
//           <h2 className="text-3xl font-bold mb-2">One app for all your</h2>
//           <h3 className="text-3xl font-bold mb-6">money things</h3>
//           <p className="max-w-md mx-auto text-gray-600 mb-16">
//             Remove all the friction that exists in the way of your money goals.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-green-900 text-white p-8 rounded-lg text-left">
//               <h3 className="text-xl font-bold mb-6">Grow savings faster</h3>
//               <div className="h-48 relative">
//                 <div className="text-sm mb-2">$12,000</div>
//                 <div className="flex h-32 items-end space-x-2">
//                   <div className="w-8 bg-green-800 h-12"></div>
//                   <div className="w-8 bg-green-800 h-16"></div>
//                   <div className="w-8 bg-green-800 h-20"></div>
//                   <div className="w-8 bg-green-800 h-24"></div>
//                   <div className="w-8 bg-green-800 h-32"></div>
//                   <div className="absolute top-16 left-16 transform -translate-y-1/2">
//                     <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-100 p-8 rounded-lg text-left relative">
//               <h3 className="text-xl font-bold mb-6">Send across the global</h3>
//               <div className="flex mb-4">
//                 <div className="mr-4">
//                   <img src="/api/placeholder/60/40" alt="Money" className="h-10" />
//                 </div>
//                 <div>
//                   <div className="font-bold">$25,000</div>
//                   <div className="text-sm text-gray-500">USD to EUR</div>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-2 mb-6">
//                 <img className="w-6 h-6 rounded-full" src="/api/placeholder/24/24" alt="User" />
//                 <img className="w-6 h-6 rounded-full" src="/api/placeholder/24/24" alt="User" />
//               </div>
//               <div className="flex justify-center mb-4">
//                 <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//                   <circle cx="12" cy="12" r="10" />
//                   <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
//                 </svg>
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <div className="flex items-center">
//                   <img src="/api/placeholder/24/24" alt="US Flag" className="h-5 w-7 rounded mr-1" />
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//                 <div className="flex items-center">
//                   <img src="/api/placeholder/24/24" alt="EU Flag" className="h-5 w-7 rounded mr-1" />
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//               </div>
//               <div className="absolute top-8 right-8 bg-green-900 text-white p-2 rounded text-sm">
//                 <div className="font-bold">$40,000</div>
//                 <div className="text-xs">Transferred</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="md:col-span-2">
//               <div className="text-sm text-gray-500 mb-2">FEATURES</div>
//               <h2 className="text-3xl font-bold mb-2">Make your</h2>
//               <h3 className="text-3xl font-bold mb-6">spend, Well-spent</h3>
//             </div>
//             <div className="md:col-span-2">
//               <p className="text-gray-600">
//                 Manages a diversified group of personalized credit cards, with different built-in spending permissions.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//             <div className="border p-6 rounded-lg">
//               <div className="w-12 h-12 mb-6">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
//                   <path d="M8 9l3 3 5-5" />
//                 </svg>
//               </div>
//               <h4 className="font-bold mb-4">Transparency</h4>
//               <p className="text-gray-600">
//                 All your transactions are visible in every transaction, identified as a user with their company.
//               </p>
//             </div>
//             <div className="border p-6 rounded-lg">
//               <div className="w-12 h-12 mb-6">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
//                   <circle cx="12" cy="12" r="3" />
//                 </svg>
//               </div>
//               <h4 className="font-bold mb-4">Creative expansion</h4>
//               <p className="text-gray-600">
//                 Build automations based on patterns tracked in transactions, builds up stronger investments.
//               </p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <div className="w-12 h-12 mb-6">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//                 </svg>
//               </div>
//               <h4 className="font-bold mb-4">Private Credit Investments</h4>
//               <p className="text-gray-600">
//                 Our extensive suite of specialized credit investments is coupled to a custom set of a broad investment portfolio.
//               </p>
//               <div className="flex justify-end mt-8">
//                 <div className="w-8 h-8 bg-green-900 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-green-900 text-white py-24 relative overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="absolute inset-0 opacity-20">
//             <img src="/api/placeholder/1200/400" alt="Background texture" className="w-full h-full object-cover" />
//           </div>
//           <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="md:col-span-1">
//               <h3 className="text-sm opacity-70 mb-2">IN NUMBERS</h3>
//               <div className="text-4xl md:text-5xl font-bold">$14B</div>
//               <p className="text-sm opacity-70 mt-2">Financial transactions</p>
//             </div>
//             <div className="md:col-span-1">
//               <div className="text-4xl md:text-5xl font-bold">23k+</div>
//               <p className="text-sm opacity-70 mt-2">Trusted by active clients</p>
//             </div>
//             <div className="md:col-span-2">
//               <h3 className="text-2xl font-bold mb-4">Market and build the solutions</h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-sm text-gray-500 mb-2">FAQ</div>
//           <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="md:col-span-1"></div>
//             <div className="md:col-span-2">
//               {faqItems.map((item, index) => (
//                 <div key={index} className="border-t py-4">
//                   <button 
//                     className="flex justify-between items-center w-full text-left font-bold"
//                     onClick={() => toggleAccordion(index)}
//                   >
//                     {item.question}
//                     <svg 
//                       className={`w-5 h-5 transition-transform ${activeAccordion === index ? 'transform rotate-180' : ''}`} 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
//                   {activeAccordion === index && (
//                     <div className="mt-2 text-gray-600">
//                       {item.answer}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-green-900 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <h2 className="text-3xl font-bold mb-2">Change the way you use your</h2>
//               <h3 className="text-3xl font-serif italic mb-6">money</h3>
//               <p className="mb-6 max-w-md">
//                 Join today to enjoy unique and exclusive Ascone benefits for fast and secure transactions.
//               </p>
//               <button className="bg-white text-green-900 px-5 py-2 rounded-md text-sm">Get Started Today</button>
//             </div>
//             <div className="md:w-1/2 flex justify-end">
//               <img src="/api/placeholder/300/200" alt="Money management" className="w-2/3" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
//             <div>
//               <h4 className="font-bold mb-4">Account</h4>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li><a href="#">Sign Up</a></li>
//                 <li><a href="#">Login</a></li>
//                 <li><a href="#">Download</a></li>
//                 <li><a href="#">Pricing</a></li>
//                 <li><a href="#">Finance</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4">Help</h4>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li><a href="#">Contact Us</a></li>
//                 <li><a href="#">Chat</a></li>
//                 <li><a href="#">FAQ</a></li>
//                 <li><a href="#">Resources</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4">Finance</h4>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li><a href="#">Credit</a></li>
//                 <li><a href="#">Banking</a></li>
//                 <li><a href="#">Expenses</a></li>
//                 <li><a href="#">Transfers</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-4">Company</h4>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Blog</a></li>
//                 <li><a href="#">Careers</a></li>
//                 <li><a href="#">Legal & Privacy</a></li>
//                 <li><a href="#">Security</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t pt-8">
//             <div className="mb-4 md:mb-0">
//               <div className="text-2xl font-bold mb-2">Ascone</div>
//               <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
//                 <div>Money, Investing, Wealth</div>
//                 <div>Terms, Data, Markets</div>
//                 <div>Products, Securities</div>
//                 <div>Partners, Help</div>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <span className="text-sm mr-2">English (US)</span>
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-8">
//             <div>© Ascone Finance (©2023)</div>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//               <a href="#">Privacy Policy</a>
//               <a href="#">Terms of Use</a>
//               <a href="#">Disclosure</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//       </div>


//     </div>
//   );
// };

// export default AsconeLandingPage;

