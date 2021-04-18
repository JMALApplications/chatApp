import React from "react"
import { ChatIcon, UsersIcon } from "@heroicons/react/outline"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Avator = (
  <StaticImage
    src="../assets/images/avator.png"
    alt="avator"
    placeholder="blurred"
    layout="constrained"
    width={100}
    height={100}
    className="rounded-full h-10 w-10"
  />
)

const Visitors = () => {
  const usersData = [
    {
      image: Avator,
      id: "12345",
      location: "PA",
    },
    {
      image: Avator,
      id: "56789",
      location: "NY",
    },
    {
      image: Avator,
      id: "88760",
      location: "LA",
    },
  ]
  return (
    <>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <div className="hidden md:flex md:flex-shrink-0 w-16">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1">
              <div className="flex-1 flex flex-col overflow-y-auto w-16">
                <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
                  <a className="flex-col text-white text-gray-300 flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <div>
                      <Link to="/admin/conversations">
                        <ChatIcon
                          className="text-gray-400 hover:text-gray-300 mb-9 mr-3 h-6 w-6"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link to="/admin/visitors">
                        <UsersIcon
                          className="text-gray-400 hover:text-gray-300 mr-3 h-6 w-6"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <div className="flex-1 px-4 flex ">
              <div className="flex-1 flex items-center">
                <UsersIcon className="mr-4 h-full w-6" />
                <p>Visitors</p>
              </div>
            </div>
          </div>
          <main className=" bg-purple-100 flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6 ">
              <div className=" mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Visitors On Site ({usersData.length})
                </h1>
              </div>
            </div>
            <div className="p-6">
              <table className=" min-w-full divide-y divide-gray-200 table-fixed">
                <thead className=" bg-gray-50 min-w-full">
                  <tr className=" min-w-full">
                    <th
                      scope="col"
                      className="w-4/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="w-4/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="w-4/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200  ">
                  {usersData.map(user => (
                    <tr className=" hover:bg-gray-100 hover:text-gray-900  cursor-pointer">
                      <td className="w-4/12 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:underline">
                        {user.image}
                      </td>
                      <td className="w-4/12 px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.id}
                      </td>
                      <td className="w-4/12 px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Visitors
