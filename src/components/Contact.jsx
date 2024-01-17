const Contact = () => {
    return (
      <div className="flex  flex-col items-center justify-start h-screen">
        <h1 className="text-3xl font-bold mb-4 mt-10">Contact Us</h1>
        <form className="w-full max-w-xs">
          <div className="mb-4">
            <label
              className="block text-blue-500 text-sm font-bold mb-2"
              htmlFor="name" >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-400 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-blue-500 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-400 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-blue-500 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-400 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default Contact;
  