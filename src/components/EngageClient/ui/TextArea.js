
import React from 'react'

export default function TextArea(props) {
    return (
      
<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
<label for="about" className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
  About
</label>
<div className="mt-1 sm:mt-0 sm:col-span-2">
  <div className="max-w-lg flex rounded-md shadow-sm">
    <textarea id="about" rows="3" className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
  </div>
  <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
</div>
</div>

)
}




