import React from 'react'

const Form = () => {
  return (
                  <div>
                <form action="">
                    <div>
                        <label htmlFor="enquiry">Enquiry type <span>*</span></label>
                        <select type="text" name='enquiry' id='enquiry' placeholder='Orders and Shipping'>
                        <option value="Orders and Shipping">Orders and Shipping</option>
                        <option value="Returns">Returns</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Size Guide">Size Guide</option>
                        <option value="Payments">Payments</option>
                        <option value="Technical Issue">Technical Issue</option>
                        <option value="General Enquiries">General Enquiries</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="FirstName">First Name <span>*</span></label>
                        <input type="text" name='firstName' placeholder='Please neter your First Name' />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name <span>*</span></label>
                        <input type="text" name='lastName' placeholder='Please neter your Last Name' />
                    </div>
                    <div>
                        <label htmlFor="email">Email <span>*</span></label>
                        <input type="email" name='email' placeholder='Please neter your Email' />
                    </div>
                    <div>
                        <label htmlFor="number">Phone <span>*</span></label>
                        <input type="number" name='phone' placeholder='Please neter your Order Number' />
                    </div>
                    <div>
                        <label htmlFor="state">State or Region <span>*</span></label>
                        <select type="text" name='state' id='state' placeholder='Lagos'>
                        <option value="Lagos">Lagos</option>
                        <option value="Abia">Abia</option>
                        <option value="Product Information">Gombe</option>
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
                    <div>
                        <label htmlFor="comment">Comment <span>*</span></label>
                        <textarea name="" id="" placeholder=' Please enter your message...'></textarea>
                    </div>
                </form>
              </div>
  )
}

export default Form