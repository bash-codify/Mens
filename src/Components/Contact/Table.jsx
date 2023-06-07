import React from 'react'
import datas from './conData'

const Table = () => {
  return (
                      <div className=' w-full absolute top-0 bottom-0  overflow-y-scroll mt-3 ml-4 border-b border-neutral-300 pb-10'>
                    <p className=' text-[1.4rem] S768:text-[1.6rem] pt-10'>
                      Our Customer Care representatives can assist you in the following languages: 
                    </p>
                    <div>
                      <h2 className=' font-bold pt-6 text-[1.8rem] tracking-wider'>
                        EYIHPIT:
                      </h2>
                      <p className=' text-[1.4rem] S768:text-[1.8rem]'>
                        English, Yoruba, Igbo, Hausa, Pigin, Igala, Tifi,
                      </p>
                    </div>
                    <div className=' mt-5 mr-4 bg-neutral-300'>
                      <table>
                        <tbody>
                        <tr className=' w-full text-[1rem] S500:text-[1.4rem] S768:text-[1.6rem] border-b border-white ' >

                          <th className=' w-96 S768:w-[30rem] bg-neutral-400 py-4 border-r border-white'>STATE</th>

                          <th className=' w-96 S768:w-[50rem] bg-neutral-400 border-r border-white'>CONTACT</th>

                          <th className=' w-96 S768:w-[50rem] bg-neutral-400'>OPENING HOURS</th>

                        </tr>
                        {
                          datas.map((item, index)=>{

                            return (

                            <tr className=' text-[1rem] S500:text-[1.4rem] border-b border-white h-24' key={index}>
                              <td className=' w-fit pl-5 border-r border-white  '>{item.state} </td>
                              <td className=' w-fit pl-5 border-r border-white  '>+{item.number}</td>
                              <td className=' w-fit pl-5'>
                                Monday to Friday - 9am to 7pm
                              </td>
                            </tr>

                            )
                          })
                        }

                        </tbody>
                      </table>
                    </div>
                  </div>
  )
}

export default Table