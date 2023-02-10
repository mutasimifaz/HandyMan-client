import React from 'react';

const Contact = () => {
    return (
        <div  style={{fontFamily:'Poppins, sans-serif'}}>
          <h1 style={{WebkitTextStroke:'1px darkBlue'}} className='text-5xl font-extrabold text-white drop-shadow-sm text-center'>Contact Us</h1>
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col justify-between">
    <h1 style={{WebkitTextStroke:'1px darkBlue'}} className='lg:text-4xl text-cyan-200 font-bold text-3xl'>Got any questions/queries? Contact us. </h1><h1 style={{WebkitTextStroke:'1px darkBlue'}} className='lg:text-4xl text-cyan-200 font-bold mt-2 text-3xl'>Fill the form and send us. </h1>
		<img src="https://i.ibb.co/R0n3wwp/undraw-Contact-us-re-4qqt.png" alt="" className="p-6 h-52 md:h-64"/>
	</div>
	<div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
  <form>
  <div className="form-group mb-6">
      <label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700">Your Name</label>
      <input required={true} type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
        placeholder="Name"/>
    </div>
    <div className="form-group mb-6">
      <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Email address</label>
      <input required={true} type="email" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
        aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="block mt-1 text-xs text-gray-600">We'll never share your email with anyone
        else.</small>
    </div>
    <div className="form-group mb-6">
      <label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700">Query</label>
      <textarea required={true} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
        placeholder="Message..."/>
    </div>
    <div className="form-check mb-6">
    <input required={true} type="checkbox" className="checkbox h-3 w-3 mr-2 checkbox-primary" />

      <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck1">Are you agreed to terms and conditions?</label>
    </div>
    <button type="submit" className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Send</button>
  </form>
</div>
</div>
        </div>
    );
};

export default Contact;