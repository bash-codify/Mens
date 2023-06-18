import React from 'react'

const Form = () => {
  return (
            <div>
                <form action="" >
                    <div className=' grid flex-col gap-10 S960:grid-cols-2'>
                        <div className=' flex flex-col gap-4 items-start justify-start'>
                            <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="enquiry" >Enquiry type </label>

                            <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='enquiry' id='enquiry' placeholder='Orders and Shipping' >
                            <option value="Orders and Shipping">Orders and Shipping</option>
                            <option value="Returns">Returns</option>
                            <option value="Product Information">Product Information</option>
                            <option value="Size Guide">Size Guide</option>
                            <option value="Payments">Payments</option>
                            <option value="Technical Issue">Technical Issue</option>
                            <option value="General Enquiries">General Enquiries</option>
                            </select>
                        </div>

                        <div className=' flex flex-col gap-4 items-start justify-start'>
                            <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="FirstName">First Name</label>

                            <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='firstName' placeholder='Please enter your First Name' />
                        </div>

                        <div className=' flex flex-col gap-4 items-start justify-start'>
                            <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="lastName">Last Name</label>

                            <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='lastName' placeholder='Please enter your Last Name' />
                        </div>

                        <div className=' flex flex-col gap-4 items-start justify-start'>
                            <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="email">Email <span className=' text-red-500 '> *</span></label>

                            <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="email" name='email' placeholder='Please enter your Email' />
                        </div>

                        <div className=' flex flex-col gap-4 items-start justify-start'>
                            <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="number">Phone </label>

                            <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='phone' placeholder='Please enter your phone number' />
                        </div>

                        <div className=' flex flex-col gap-4 items-start justify-start'>
                            <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="number">Order Number </label>

                            <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='phone' placeholder='Please enter your order number' />
                        </div>
                        <div className=' flex flex-col gap-4 items-start justify-start'>
                            <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="language">State or Region <span className=' text-red-500 '> *</span></label>

                            <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='language' id='language' placeholder='Please enter your Language'>
                            <option value="English">English</option>
                            <option value="Yoruba">Yoruba</option>
                            <option value="Igbo">Igbo</option>
                            <option value="Hausa">Hausa</option>
                            <option value="Pigin">Pigin</option>
                            <option value="Igala">Igala</option>
                            <option value="Tifi">Tifi</option>
                            
                            </select>
                        </div>
                        <div className=' flex flex-col gap-4 items-start justify-start'>
                            <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="state">State or Region <span className=' text-red-500 '> *</span></label>

                            <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='state' id='state' placeholder='Lagos'>

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

                    </div>
                    <div className=' flex flex-col gap-4 items-start justify-start pt-10'>
                        <label  className=' text-[1.48rem] font-thin tracking-wider  '  htmlFor="comment">Comment <span className=' text-red-500 '>*</span></label>

                        <textarea className=' w-full h-[10rem] p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' name="" id="" placeholder=' Please enter your message...' ></textarea>
                    </div>
                </form>
              </div>
  )
}

export default Form