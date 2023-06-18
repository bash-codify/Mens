import React from 'react'

const RegisterForm = () => {
  return (
    <div>
        <form action="" >
            <div className=' grid S960:grid-cols-2 gap-10 ' >
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
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="birth-date">Birth Date <span className=' text-red-500 '> *</span></label>
                    <div className=' flex gap-4 items-start justify-start'>
    
                    <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='date' id='date' placeholder='Please Select' >
                    <option value="Please Select">Day</option>    
                    <option value="">01</option>
                    <option value="">02</option>
                    <option value="">03</option>
                    <option value="">04</option>
                    <option value="">05</option>
                    <option value="">06</option>
                    <option value="">07</option>
                    <option value="">08</option>
                    <option value="">09</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                    <option value="">18</option>
                    <option value="">19</option>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="">22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="">27</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                    <option value="">31</option>
                    </select>

                    <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='month' id='month'  >
                    <option value="Please Select">Month</option>    
                    <option value="Mr">01</option>
                    <option value="">02</option>
                    <option value="">03</option>
                    <option value="">04</option>
                    <option value="">05</option>
                    <option value="">06</option>
                    <option value="">07</option>
                    <option value="">08</option>
                    <option value="">09</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    
                    </select>
                        
                    <select className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='date' id='date' placeholder='Please Select' >
                    <option value="Please Select">Year</option>    
                    <option value="">2017</option>
                    <option value="">2016</option>
                    <option value="">2015</option>
                    <option value="">2014</option>
                    <option value="">2013</option>
                    <option value="">2012</option>
                    <option value="">2011</option>
                    <option value="">2010</option>
                    <option value="">2009</option>
                    <option value="">2008</option>
                    <option value="">2007</option>
                    <option value="">2006</option>
                    <option value="">2005</option>
                    <option value="">2004</option>
                    <option value="">2003</option>
                    <option value="">2002</option>
                    <option value="">2001</option>
                    <option value="">2000</option>
                    <option value="">1999</option>
                    <option value="">1998</option>
                    <option value="">1997</option>
                    <option value="">1996</option>
                    <option value="">1995</option>
                    <option value="">1994</option>
                    <option value="">1993</option>
                    <option value="">1992</option>
                    <option value="">1991</option>
                    <option value="">1990</option>
                    <option value="">1989</option>
                    <option value="">1988</option>
                    </select>

                    </div>
                </div>

                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="email">Email <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="email" name='email' placeholder='Please enter your Email' />
                </div>

                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="number">Phone <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='phone' placeholder='Please enter your phone number' />
                </div>
                
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
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="email">Email <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="email" name='email' placeholder='Please enter your email address' />
                    
                </div>
                <div className=' flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="email">Comfirm Email Adress <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="email" name='email' placeholder='Please comfirm your email address' />

                </div>
                
                <div className=' w-full flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="password">Password <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="password" name='password' placeholder='Please enter your Password' />
                </div>

                <div className=' w-full flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="password">Comfirm Password <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="password" name='password' placeholder='Please comfirm your Password' />
                </div>

                <div className=' w-full flex flex-col gap-4 items-start justify-start'>
                    <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="password">Phone Number <span className=' text-red-500 '> *</span></label>

                    <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="text" name='phone-number' placeholder='Please enter your Phone Number' />
                </div>

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

export default RegisterForm