import React from "react"
import { ChatIcon, UsersIcon } from "@heroicons/react/outline"
import { Link } from "gatsby"

const SidePanel = () => {
  return (
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
  )
}

export default SidePanel
