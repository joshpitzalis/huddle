
export default function Footer () {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="bg-gray-50">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-100 sm:text-4xl sm:leading-10">
        Frequently asked questions
                </h2>
                <div className="mt-6 border-t-2 border-gray-200 pt-6">
                  <dl>
                    <div>
                      <dt className="text-lg leading-7">
                        {/* <!-- Expand/collapse question button --> */}
                        <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                          <span className="font-medium text-gray-100">
                  What's the best thing about Switzerland?
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            {/* <!--
                    Expand/collapse icon, toggle classes based on question open state.

                    Open: "-rotate-180", Closed: "rotate-0"
                  --> */}
                            <svg className="-rotate-180 h-6 w-6 transform" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                          </span>
                        </button>
                      </dt>
                      <dd className="mt-2 pr-12">
                        <p className="text-base leading-6 text-gray-500">
                I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                        </p>
                      </dd>
                    </div>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <div>
                        <dt className="text-lg leading-7">
                          {/* <!-- Expand/collapse question button --> */}
                          <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                            <span className="font-medium text-gray-100">
                    How do you make holy water?
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              {/* <!--
                      Expand/collapse icon, toggle classes based on question open state.

                      Open: "-rotate-180", Closed: "rotate-0"
                    --> */}
                              <svg className="rotate-0 h-6 w-6 transform" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                              </svg>
                            </span>
                          </button>
                        </dt>
                        <dd className="mt-2 pr-12">
                          <p className="text-base leading-6 text-gray-500">
                  You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.
                          </p>
                        </dd>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <div>
                        <dt className="text-lg leading-7">
                          {/* <!-- Expand/collapse question button --> */}
                          <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                            <span className="font-medium text-gray-100">
                    What do you call someone with no body and no nose?
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              {/* <!--
                      Expand/collapse icon, toggle classes based on question open state.

                      Open: "-rotate-180", Closed: "rotate-0"
                    --> */}
                              <svg className="rotate-0 h-6 w-6 transform" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                              </svg>
                            </span>
                          </button>
                        </dt>
                        <dd className="mt-2 pr-12">
                          <p className="text-base leading-6 text-gray-500">
                  Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.
                          </p>
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex md:order-2">
              <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
        &copy; 2020 Meetbox, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
