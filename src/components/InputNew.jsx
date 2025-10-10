import React from 'react'

// Make this component accept a forwarded ref for the input element
const InputNew = React.forwardRef(function InputNew(props, ref) {
  return (
    <div className="input w-[46vw] flex justify-start mt-1.5"> 
      <input ref={ref} type="text" name="Newtask" id="nt1" className='border-2  h-9   border-black bg-white w-[42vw] rounded-l-2xl border-r-0 pl-4 text-wrap input1'/>
      <button className="save bg-purple-600 w-[4vw] rounded-r-2xl border-2 border-l-0 cursor-pointer ">
        Save
      </button>
    </div>
  )
})

export default InputNew
