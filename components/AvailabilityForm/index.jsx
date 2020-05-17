import PropTypes from 'prop-types'
import { useState } from 'react'
import { timeZones } from './timezones.js'
import { atom, useRecoilState } from 'recoil'
import produce from 'immer'

const availabilityState = atom({
  key: 'availabilityState',
  default: {
    timings: [
      {
        name: 'timings',
        id: '7-8 am',
        checked: true
      },
      {
        name: 'timings',
        id: '8-9 am',
        checked: true
      },
      {
        name: 'timings',
        id: '9-10 am',
        checked: true
      },
      {
        name: 'timings',
        id: '7-8 pm',
        checked: true
      },
      {
        name: 'timings',
        id: '8-9 pm',
        checked: true
      },
      {
        name: 'timings',
        id: '9-10 pm',
        checked: true
      }
    ],
    Mon: [
      {
        name: 'Mon',
        id: 'allTimes',
        checked: true
      },
      {
        name: 'Mon',
        id: '7-8 am',
        checked: true
      },
      {
        name: 'Mon',
        id: '8-9 am',
        checked: true
      },
      {
        name: 'Mon',
        id: '9-10 am',
        checked: true
      },
      {
        name: 'Mon',
        id: '7-8 pm',
        checked: true
      },
      {
        name: 'Mon',
        id: '8-9 pm',
        checked: true
      },
      {
        name: 'Mon',
        id: '9-10 pm',
        checked: true
      }
    ],
    Tue: [
      {
        name: 'Tue',
        id: 'allTimes',
        checked: true
      },
      {
        name: 'Tue',
        id: '7-8 am',
        checked: true
      },
      {
        name: 'Tue',
        id: '8-9 am',
        checked: true
      },
      {
        name: 'Tue',
        id: '9-10 am',
        checked: true
      },
      {
        name: 'Tue',
        id: '7-8 pm',
        checked: true
      },
      {
        name: 'Tue',
        id: '8-9 pm',
        checked: true
      },
      {
        name: 'Tue',
        id: '9-10 pm',
        checked: true
      }
    ],
    Wed: [
      {
        name: 'Wed',
        id: 'allTimes',
        checked: true
      },
      {
        name: 'Wed',
        id: '7-8 am',
        checked: true
      },
      {
        name: 'Wed',
        id: '8-9 am',
        checked: true
      },
      {
        name: 'Wed',
        id: '9-10 am',
        checked: true
      },
      {
        name: 'Wed',
        id: '7-8 pm',
        checked: true
      },
      {
        name: 'Wed',
        id: '8-9 pm',
        checked: true
      },
      {
        name: 'Wed',
        id: '9-10 pm',
        checked: true
      }
    ],
    Thu: [
      {
        name: 'Thu',
        id: 'allTimes',
        checked: true
      },
      {
        name: 'Thu',
        id: '7-8 am',
        checked: true
      },
      {
        name: 'Thu',
        id: '8-9 am',
        checked: true
      },
      {
        name: 'Thu',
        id: '9-10 am',
        checked: true
      },
      {
        name: 'Thu',
        id: '7-8 pm',
        checked: true
      },
      {
        name: 'Thu',
        id: '8-9 pm',
        checked: true
      },
      {
        name: 'Thu',
        id: '9-10 pm',
        checked: true
      }
    ],
    Fri: [
      {
        name: 'Fri',
        id: 'allTimes',
        checked: true
      },
      {
        name: 'Fri',
        id: '7-8 am',
        checked: true
      },
      {
        name: 'Fri',
        id: '8-9 am',
        checked: true
      },
      {
        name: 'Fri',
        id: '9-10 am',
        checked: true
      },
      {
        name: 'Fri',
        id: '7-8 pm',
        checked: true
      },
      {
        name: 'Fri',
        id: '8-9 pm',
        checked: true
      },
      {
        name: 'Fri',
        id: '9-10 pm',
        checked: true
      }
    ],
    Sat: [
      {
        name: 'Sat',
        id: 'allTimes',
        checked: true
      },
      {
        name: 'Sat',
        id: '7-8 am',
        checked: true
      },
      {
        name: 'Sat',
        id: '8-9 am',
        checked: true
      },
      {
        name: 'Sat',
        id: '9-10 am',
        checked: true
      },
      {
        name: 'Sat',
        id: '7-8 pm',
        checked: true
      },
      {
        name: 'Sat',
        id: '8-9 pm',
        checked: true
      },
      {
        name: 'Sat',
        id: '9-10 pm',
        checked: true
      }
    ],
    Sun: [
      {
        name: 'Sun',
        id: 'allTimes',
        checked: true
      },
      {
        name: 'Sun',
        id: '7-8 am',
        checked: true
      },
      {
        name: 'Sun',
        id: '8-9 am',
        checked: true
      },
      {
        name: 'Sun',
        id: '9-10 am',
        checked: true
      },
      {
        name: 'Sun',
        id: '7-8 pm',
        checked: true
      },
      {
        name: 'Sun',
        id: '8-9 pm',
        checked: true
      },
      {
        name: 'Sun',
        id: '9-10 pm',
        checked: true
      }
    ]
  }
})

export const AvailabilityForm = () => {
  const [value, setValue] = useState(
    'Europe/London'
  )

  const [availability, setAvailability] = useRecoilState(availabilityState)

  return (
    <>
      <div className="hidden sm:block">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Scheduling</h3>
              <p className="mt-1 text-sm leading-5 text-gray-600">
         Tell us about when you are available for a group session.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">

                  <div className="my-3 col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-5 text-gray-700">Timezone</label>
                    <p className="text-sm leading-5 text-gray-500">Whats app reminders</p>
                    <div className="max-w-xs rounded-md shadow-sm">
                      <select id="country" className="mt-2 form-input block w-full py-4 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                        {timeZones && timeZones.map(zone => <option key={zone}> {zone}</option>)}

                      </select>
                    </div>
                  </div>

                  <fieldset className='mt-6'>
                    <legend className="block text-sm font-medium leading-5 text-gray-700">Availability</legend>
                    <p className="text-sm leading-5 text-gray-500">A checked box means you are available</p>
                    <div className="mt-4 md:grid md:grid-cols-9 md:gap-6">
                      <Timings
                        availability={availability.timings}
                        setAvailability={setAvailability}
                      />
                      {availability && Object.keys(availability).map((key, index) => index > 0 &&
                        <DayOfTheWeek
                          availability={availability[key]}
                          key={key}
                          setAvailability={setAvailability}/>
                      )}

                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue focus:bg-indigo-500 active:bg-indigo-600 transition duration-150 ease-in-out">
              Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div></>)
}

function DayOfTheWeek ({ availability, setAvailability }) {
  const onToggle = (event) => {
    setAvailability(
      (oldAvailability) => {
        const thisWeek = availability && availability[0] && availability[0].name

        if (event.target.id === 'allTimes') {
          return produce(oldAvailability, draftState => {
            draftState[thisWeek] = draftState[thisWeek].map(({ name, id }) => ({
              name,
              id,
              checked: event.target.checked
            }))
          }
          )
        }

        return produce(oldAvailability, draftState => {
          draftState[thisWeek][draftState[thisWeek].findIndex(slot => slot.id === event.target.id)] = {
            name: event.target.name,
            id: event.target.id,
            checked: event.target.checked
          }
        }
        )
      }
    )
  }
  return (
    <div className='col-span-1'>
      {availability && availability.map(({ name, id, checked }) =>
        <div className="mb-5 pl-7 text-sm leading-5" key={id}>
          <input
            type="checkbox"
            name={name}
            checked={checked}
            id={id}
            onChange={onToggle}
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
          {id === 'allTimes' && <label htmlFor={name} className="font-medium text-gray-500 ml-2">{name}</label>}
        </div>)}
    </div>)
}

const updatedDay = (week, day, slotToChange, checked) => week[day].map(slot => {
  const { name, id } = slot
  if (id === slotToChange) {
    return {
      name,
      id,
      checked
    }
  } else {
    return slot
  }
})

function Timings ({ availability, setAvailability }) {
  const onToggle = event => {
    setAvailability(
      oldAvailability => Object.keys(oldAvailability).reduce((total, day) => {
        total[day] = updatedDay(oldAvailability, day, event.target.id, event.target.checked)
        return total
      }, {}
      )
    )
  }

  return (
    <div className='col-span-2'>
      <div className="pl-7 text-sm leading-5 ml-5 ">
        <p className="font-medium text-gray-500">Time slots</p>
      </div>
      {availability && availability.map(
        ({ name, id, checked }) =>
          <div className="mt-5 pl-7 text-sm leading-5 ml-5" key={id}>
            <input type="checkbox"
              name={name}
              checked={checked}
              id={id}
              onChange={onToggle}
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out mr-2" />
            <label htmlFor="comments" className="font-medium text-gray-700">{id}</label>
          </div>
      )}
    </div>)
}

Timings.propTypes = {
  availability: PropTypes.arrayOf(PropTypes.string)
}
