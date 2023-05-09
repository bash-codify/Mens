import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <section className=' w-full h-50 bg-black text-white'>
        <article>
            <div>
                <div>
                    <div>
                        <div>
                            <h1>
                                STORE LOCATOR
                            </h1>
                        </div>
                        <div>
                                <Link href=''>
                                Find a Boutique
                                </Link>
                                <Link href=''>
                                Book an Appointment
                                </Link>
                                <Link href=''>
                                Men's Watches Stores
                                </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>
                                CUSTOMER SERVICE
                            </h1>
                        </div>
                        <div>
                            
                                <Link href=''>
                                Exclusive Service
                                </Link>
                                <Link href=''>
                                Contact Us
                                </Link>
                                <Link href=''>
                                Helps / FAQs
                                </Link>
                            
                                <Link href=''>
                                Orders & Shipping
                                </Link>
                                <Link href=''>
                                Returns & Refunds
                                </Link>
                                <Link href=''>
                                Track Your Order
                                </Link>
                                <Link href=''>
                                Authenticity
                                </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>
                                LEGAL
                            </h1>
                        </div>
                        <div>
                                <Link href={''}>
                                Legal Notes
                                </Link>
                                <Link href={''}>
                                Terms & Conditions
                                </Link>
                                <Link href={''}>
                                General Conditions of Purchse
                                </Link>
                                <Link href={''}>
                                Code of Business Conduct and Ethics
                                </Link>
                                <Link href={''}>
                                Code of Conduct for Business Partners
                                </Link>
                                <Link href={''}>
                                Privacy Policy
                                </Link>
                                <Link href={''}>
                                Cookie Policy
                                </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>
                                ABOUT US
                            </h1>
                        </div>
                        <div>
                                <Link href={''}>
                                Company Profile
                                </Link>
                                <Link href={''}>
                                Corporate Data
                                </Link>
                                <Link href={''}>
                                Investor Relation
                                </Link>
                                <Link href={''}>
                                Eco-Conscious Products
                                </Link>
                                <Link href={''}>
                                Careers
                                </Link>
                                <Link href={''}>
                                Sitemap
                                </Link>
                                <Link href={''}>
                                Sitemap Products
                                </Link>
                        </div>
                    </div>
                </div>
            </div>

        </article>
    </section>
  )
}

export default Footer