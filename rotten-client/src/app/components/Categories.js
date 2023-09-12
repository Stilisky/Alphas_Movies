import React from 'react'

const Categories = ({categories}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-start justify-center bg-gray-100 font-sans overflow-hidden mt-5">
            <div className="w-full lg:w-5/6">
               <div className="bg-white shadow-md rounded my-6">
                  <table className="min-w-max w-full table-auto">
                     <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                           <th className="py-3 px-6 text-left">Name</th>
                           <th className="py-3 px-6 text-left">Movies</th>
                        </tr>
                     </thead>
                     <tbody className="text-gray-600 text-sm font-light">
                        {categories.map((cat) => (
                           <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                              <td className="py-3 px-6 text-left">
                                 <div className="flex items-center">
                                    <span>{cat.name}</span>
                                 </div>
                              </td>
                              <td className="py-3 px-6 text-left">
                                 <div className="flex items-center">
                                       <span className="font-medium">{cat.movies.length}</span>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Categories