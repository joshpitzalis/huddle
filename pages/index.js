import Nav from '../components/nav'
import { AvailabilityForm } from '../components/AvailabilityForm'

export default function IndexPage () {
  return (
    <div className='bg-gray-100'>
      <Nav />

      <div className="bg-gray-300 shadow">
        <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-indigo-500 sm:text-4xl sm:leading-10">
      Looking for a remote accountability group?
          </h2>
          <h3 className="text-2xl mt-4 leading-9 font-extrabold tracking-tight text-gray-600 sm:text-4xl sm:leading-10">
      Fill out the form below to get started.
          </h3>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
         Login instead
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
       What's an accountability group?
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl sm:p-6 lg:py-16 lg:px-8'>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Group Preference</h3>
                <p className="mt-1 text-sm leading-5 text-gray-600">
          We will use this info to match you to the right group.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                      <div className="col-span-6 sm:col-span-4">
                        <fieldset className="">
                          <legend className="block text-sm font-medium leading-5 text-gray-700">What are you currently working on?</legend>
                          <p className="text-sm leading-5 text-gray-500">These are delivered via SMS to your mobile phone.</p>
                          <div className="mt-4">
                            <div className="flex items-center">
                              <input id="push_everything" name="form-input push_notifications" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                              <label htmlFor="push_everything" className="ml-3">
                                <span className="block text-sm leading-5 font-medium text-gray-700">I am building a product</span>
                              </label>
                            </div>
                            <div className="mt-4 flex items-center">
                              <input id="push_email" name="form-input push_notifications" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                              <label htmlFor="push_email" className="ml-3">
                                <span className="block text-sm leading-5 font-medium text-gray-700">I am providing a service</span>
                              </label>
                            </div>

                          </div>
                        </fieldset>
                      </div>

                      <div className="col-span-6 sm:col-span-4 my-4">
                        <label htmlFor="email_address" className="block text-sm font-medium leading-5 text-gray-700">Occupation</label>
                        <p className="text-sm leading-5 text-gray-500">What do you do?</p>
                        <textarea rows={5} id="email_address" className="mt-2 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">Years of Experience?</label>
                        <p className="text-sm leading-5 text-gray-500">In your current role</p>
                        <input id="first_name" className="mt-2 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email_address" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                        <p className="text-sm leading-5 text-gray-500">In your current role</p>
                        <input id="email_address" className="mt-2 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                        <p className="text-sm leading-5 text-gray-500">In your current role</p>
                        <input id="first_name" className="mt-2 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                      </div>

                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
              Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <AvailabilityForm />
      </div>
    </div>
  )
}
