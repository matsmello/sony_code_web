export default function Header() {
  return (
    <nav class="bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-end">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-white text-white focus:outline-none transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="hidden md:ml-6 md:flex float-right">
              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
              >
                Como funciona?
              </a>
              <a
                href="#"
                class="ml-8 inline-flex items-center px-1 pt-1 border-transparent text-sm font-medium leading-5 text-white hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Sobre
              </a>
              <a
                href="#"
                class="ml-8 inline-flex items-center px-1 pt-1 border-transparent text-sm font-medium leading-5 text-white hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Entrar
              </a>
              <a
                href="#"
                class="ml-8 inline-flex items-center px-1 pt-1 border-transparent text-sm font-medium leading-5 text-white hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Cadastre-se
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:hidden">
        <div class="pt-2 pb-3">
          <a
            href="#"
            class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out sm:pl-5 sm:pr-6 text-white"
          >
            Como funciona?
          </a>
          <a
            href="#"
            class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6 text-white"
          >
            Sobre
          </a>
          <a
            href="#"
            class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6 text-white"
          >
            Entrar
          </a>
          <a
            href="#"
            class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6 text-white"
          >
            Cadastre-se
          </a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4 sm:px-6">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-6 text-gray-800">
                Tom Cook
              </div>
              <div class="text-sm font-medium leading-5 text-white">
                tom@example.com
              </div>
            </div>
          </div>
          <div class="mt-3">
            <a
              href="#"
              class="block px-4 py-2 text-base font-medium text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out sm:px-6"
            >
              Your Profile
            </a>
            <a
              href="#"
              class="mt-1 block px-4 py-2 text-base font-medium text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out sm:px-6"
            >
              Settings
            </a>
            <a
              href="#"
              class="mt-1 block px-4 py-2 text-base font-medium text-white hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out sm:px-6"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
