import React from 'react'

const About = () => {
    return (
        <section id='about-us' className="about-us-section px-10 py-10">
          <div className="container ">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-xl font-medium mb-8 text-center">Order now appreciate the besuty of nature</p>
    
            <div className="flex justify-between">
             {/* About Item 1 */}
          <div className="w-1/3 p-4 bg-white text-center">  
          
            <img src="/about/potted-plant.png" alt="assortment" className=" mx-auto mb-4 p-1 rounded-3xl" />
            
            <h3 className="text-xl font-semibold mb-4">Large assortment</h3>
            <p className="text-gray-600">We offer many different types of products with few variation in each category.</p>
          </div>

          {/* About Item 2 */}
          <div className="w-1/3 p-4 bg-white text-center">

            <img src="/about/box.png" alt="shipping" className="mx-auto mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-4">Fast and Free shipping</h3>
            <p className="text-gray-600">4 days or less delivery time, free shipping and an expedited delivery option.</p>
          </div>

          {/* About Item 3 */}
          <div className="w-1/3 p-4 bg-white text-center">
            <img src="/about/call-support.png" alt="support" className="mx-auto mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600">Answer to any business related inquiry 24/7 and in real time.</p>
          </div>
            </div>
          </div>
        </section>
      );
    };

export default About