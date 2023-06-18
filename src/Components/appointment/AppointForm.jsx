import React from 'react'

const AppointForm = () => {
  return (
    <div>
        <form action="" >
            <div className=' grid S960:grid-cols-2 gap-10 border-b border-neutral-300 pb-20' >
                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="title" > Title <span className=' text-red-500 '> *</span> </label>

                    <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='title' id='title' placeholder='Please Select' >
                    <option value="Please Select">Please Select</option>    
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Chief">Chief</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                    </select>
                </div>

                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="FirstName">First Name <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='firstName' placeholder='Please enter your First Name' />
                </div>

                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="lastName">Last Name <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='lastName' placeholder='Please enter your Last Name' />
                </div>

                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="email">Email <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="email" name='email' placeholder='Please enter your Email' />
                </div>

                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="number">Phone <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='phone' placeholder='Please enter your phone number' />
                </div>


            </div>
            <div className=' mt-16'>
                <h2 className=' text-[1.6rem] S768:text-[1.8rem] font-bold tracking-wider'>
                    APPOINTMENT DETAILS
                </h2>
            </div>
            <div className=' grid S960:grid-cols-2 gap-10 border-b border-neutral-300 pb-20 mt-16'>
                

                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="state">State or Region <span className=' text-red-500 '> *</span></label>

                    <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='state' id='state' placeholder='Lagos'>
                    <option value="Please Select">Please Select</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abia">Abia</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Kano">Kano</option>
                    <option value="Delta">Delta</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Edo">Edo</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Lagos">Oyo</option>
                    
                    </select>
                </div>

                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="number">Date <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="date" name='date' placeholder='DD/MM/YYY' />
                </div>
                
                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="language">Time<span className=' text-red-500 '> *</span></label>

                    <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='time' id='time' placeholder='Language'>
                    <option value="Please Select">Please Select</option>
                    <option value="11:00Am">11:00 Am</option>
                    <option value="12:00Am">12:00 Am</option>
                    <option value="01:00Am">01:00 Am</option>
                    <option value="02:00Am">02:00 Am</option>
                    <option value="03:00Am">03:00 Am</option>
                    <option value="04:00Am">04:00 Am</option>
                    <option value="05:00Am">05:00 Am</option>                
                    </select>
                </div>
                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="appointment-type">Appointment Type <span className=' text-red-500 '> *</span></label>

                    <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='appointment-type' placeholder='Please Select'>
                    <option value="Please Select">Please Select</option>
                    <option value="In Store">In Store</option>
                    <option value="Via Phone">Via Phone</option>
                    <option value="Via Video Call">Via Video Call</option>


                    </select>
                </div>
                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="contact-type">Contact Type <span className=' text-red-500 '> *</span></label>

                    <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='contact-type' placeholder='Please Select'>
                    <option value="Please Select">Please Select</option>
                    <option value="Via Phone">Via Phone</option>
                    <option value="Via Video Call">Via Email</option>


                    </select>
                </div>
                

            </div>

            <div className=' flex flex-col gap-4 items-start justify-start mt-14'>
                <label  className=' text-[1.48rem] font-thin tracking-wider  '  htmlFor="Product-Preferences">Product Preferences <span className=' text-red-500 '>*</span></label>

                <textarea className=' w-full h-[10rem] p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' name="Product-Preferences" id="Product-Preferences" placeholder=' Please let us know what you would be interested in.' ></textarea>
                <p className=' text-[1.4rem]'>
                    Character limit 250/250.
                </p>
            </div>

            <div className=' flex flex-col gap-4 items-start justify-start mt-14'>
                <label  className=' text-[1.48rem] font-thin tracking-wider  '  htmlFor="Personal-message">Personal message <span className=' text-red-500 '>*</span></label>

                <textarea className=' w-full h-[10rem] p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' name="Personal-message" id="Personal-message" placeholder=' Please enter a personal message...' ></textarea>
                <p  className=' text-[1.4rem] tracking-wider'>
                    Character limit 250/250.
                </p>
            </div>

            <div className=' mt-10 flex items-start justify-start'>

                <div className='  flex items-center justify-center gap-5'>
                    <input type="checkbox" name="" id="" className=' w-8 h-8 S768:w-9 S768:h-9 S960:w-10 S960:h-10 bg-transparent'/>
                    <p className=' text-[1.2rem] tracking-wider'>
                        I consent to commercial promotion activities related to Versace by e-mail and/or text messages according to our Privacy Policy.
                    </p>
                </div>

            </div>
            
        </form>
        </div>
  )
}

export default AppointForm