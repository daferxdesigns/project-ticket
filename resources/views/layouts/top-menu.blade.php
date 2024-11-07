<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
<style>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);

    /*
module.exports = {
    plugins: [
        require('tailwindcss-inset')({
            insets: {
                full: '100%'
            }
        })
    ]
};
*/
    .inset-l-full {
        left: 100%;
    }
</style>
<header class="z-10 py-4 bg-white shadow-md">

    <div class="flex justify-between items-center px-6 mx-auto h-full text-purple-600 md:justify-end">
        <!-- Mobile hamburger -->
        <button class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
            @click="toggleSideMenu" aria-label="Menu">
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="w-auto flex"> <a class="ml-0 mr-5 text-lg font-bold text-gray-800 w-full"
                href="{{ route('dashboard') }}"><img class="h-8" src="{{ url('/images/logo.png') }}"></a></div>
        <ul class="flex w-full flex-wrap items-center h-10 text-black">
            @hasanyrole('admin|agent')
                <li class="block relative">
                    <a href="{{ url('/dashboard') }}"
                        class="flex items-center h-10 leading-10 px-4  cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1  text-black">
                        <span class="mr-3 text-xl"> <i class="mdi mdi-gauge"></i> </span>
                        <span>Dashboard</span>
                        <!--<span class="ml-2"> <i class="mdi mdi-chevron-down"></i> </span>-->
                    </a>
                    <!--
                    <div class="bg-white shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1" x-show="showChildren" style="display: none;" x-transition:enter="transition ease duration-300 transform" x-transition:enter-start="opacity-0 translate-y-2" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease duration-300 transform" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 translate-y-4">
                        <span class="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
                        <div class="bg-white rounded w-full relative z-10 py-1">
                            <ul class="list-reset">
                                <li class="relative" x-data="{ showChildren: false }" @mouseleave="showChildren=false" @mouseenter="showChildren=true">
                                    <a href="#" class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"> <span class="flex-1">Dashboard 1</span> </a>
                                </li>
                                <li class="relative" x-data="{ showChildren: false }" @mouseleave="showChildren=false" @mouseenter="showChildren=true">
                                    <a href="#" class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"> <span class="flex-1">Dashboard 2</span> </a>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                </li>

                <li class="block relative" x-data="{ showChildren: false }" @click.away="showChildren=false">
                    <a href="#"
                        class="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100"
                        @click.prevent="showChildren=!showChildren">
                        <span class="mr-3 text-xl"> <i class="mdi mdi-layers-outline"></i> </span>
                        <span>Manage</span>
                        <span class="ml-2"> <i class="mdi mdi-chevron-down"></i> </span>
                    </a>
                    <div class="bg-white shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1"
                        x-show="showChildren" x-transition:enter="transition ease duration-300 transform"
                        x-transition:enter-start="opacity-0 translate-y-2"
                        x-transition:enter-end="opacity-100 translate-y-0"
                        x-transition:leave="transition ease duration-300 transform"
                        x-transition:leave-start="opacity-100 translate-y-0"
                        x-transition:leave-end="opacity-0 translate-y-4" style="display: none;">
                        <span class="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
                        <div class="bg-white rounded w-full relative z-10 py-1">
                            <ul class="list-reset">
                                <li class="relative" x-data="{ showChildren: false }" @mouseleave="showChildren=false"
                                    @mouseenter="showChildren=true">
                                    <a href="#"
                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                        <span class="flex-1">Clients</span>
                                        <span class="ml-2"> <i class="mdi mdi-chevron-right"></i> </span>
                                    </a>
                                    <div class="bg-white shadow-md rounded border border-gray-300 text-sm absolute inset-l-full top-0 min-w-full w-56 z-30 mt-1"
                                        x-show="showChildren" x-transition:enter="transition ease duration-300 transform"
                                        x-transition:enter-start="opacity-0 translate-y-2"
                                        x-transition:enter-end="opacity-100 translate-y-0"
                                        x-transition:leave="transition ease duration-300 transform"
                                        x-transition:leave-start="opacity-100 translate-y-0"
                                        x-transition:leave-end="opacity-0 translate-y-4" style="display: none;">
                                        <span
                                            class="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -ml-1 mt-2"></span>
                                        <div class="bg-white rounded w-full relative z-10 py-1">
                                            <ul class="list-reset">
                                                <li>
                                                    <a href="{{ url('/clients') }}"
                                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                                        <span class="flex-1">Clients List</span> </a>
                                                </li>
                                                <li>
                                                    <a href="/clients/create"
                                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                                        <span class="flex-1">Add Client</span> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative" x-data="{ showChildren: false }" @mouseleave="showChildren=false"
                                    @mouseenter="showChildren=true">
                                    <a href="#"
                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                        <span class="flex-1">Installers</span>
                                        <span class="ml-2"> <i class="mdi mdi-chevron-right"></i> </span>
                                    </a>
                                    <div class="bg-white shadow-md rounded border border-gray-300 text-sm absolute inset-l-full top-0 min-w-full w-56 z-30 mt-1"
                                        x-show="showChildren" x-transition:enter="transition ease duration-300 transform"
                                        x-transition:enter-start="opacity-0 translate-y-2"
                                        x-transition:enter-end="opacity-100 translate-y-0"
                                        x-transition:leave="transition ease duration-300 transform"
                                        x-transition:leave-start="opacity-100 translate-y-0"
                                        x-transition:leave-end="opacity-0 translate-y-4" style="display: none;">
                                        <span
                                            class="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -ml-1 mt-2"></span>
                                        <div class="bg-white rounded w-full relative z-10 py-1">
                                            <ul class="list-reset">
                                                <li>
                                                    <a href="{{ route('installers.index') }}"
                                                        :active="request() - > routeIs('users.*')"
                                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                                        <span class="flex-1">Installers List</span> </a>
                                                </li>
                                                <li>
                                                    <a href="/users/create"
                                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                                        <span class="flex-1">Add Installer</span> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative" x-data="{ showChildren: false }" @mouseleave="showChildren=false"
                                    @mouseenter="showChildren=true">
                                    <a href="#"
                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                        <span class="flex-1">Users</span>
                                        <span class="ml-2"> <i class="mdi mdi-chevron-right"></i> </span>
                                    </a>
                                    <div class="bg-white shadow-md rounded border border-gray-300 text-sm absolute inset-l-full top-0 min-w-full w-56 z-30 mt-1"
                                        x-show="showChildren" x-transition:enter="transition ease duration-300 transform"
                                        x-transition:enter-start="opacity-0 translate-y-2"
                                        x-transition:enter-end="opacity-100 translate-y-0"
                                        x-transition:leave="transition ease duration-300 transform"
                                        x-transition:leave-start="opacity-100 translate-y-0"
                                        x-transition:leave-end="opacity-0 translate-y-4" style="display: none;">
                                        <span
                                            class="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -ml-1 mt-2"></span>
                                        <div class="bg-white rounded w-full relative z-10 py-1">
                                            <ul class="list-reset">
                                                <li>
                                                    <a href="{{ route('users.index') }}"
                                                        :active="request() - > routeIs('users.*')"
                                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                                        <span class="flex-1">User List</span> </a>
                                                </li>
                                                <li>
                                                    <a href="/users/create"
                                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                                        <span class="flex-1">Add User</span> </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative" x-data="{ showChildren: false }" @mouseleave="showChildren=false"
                                    @mouseenter="showChildren=true">
                                    <a href="#"
                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                        <span class="flex-1">Settings</span>
                                        <span class="ml-2"> <i class="mdi mdi-chevron-right"></i> </span>
                                    </a>
                                    <div class="bg-white shadow-md rounded border border-gray-300 text-sm absolute inset-l-full top-0 min-w-full w-56 z-30 mt-1"
                                        x-show="showChildren" x-transition:enter="transition ease duration-300 transform"
                                        x-transition:enter-start="opacity-0 translate-y-2"
                                        x-transition:enter-end="opacity-100 translate-y-0"
                                        x-transition:leave="transition ease duration-300 transform"
                                        x-transition:leave-start="opacity-100 translate-y-0"
                                        x-transition:leave-end="opacity-0 translate-y-4" style="display: none;">
                                        <span
                                            class="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -ml-1 mt-2"></span>
                                        <div class="bg-white rounded w-full relative z-10 py-1">
                                            <ul class="list-reset">
                                                <li>
                                                    <a href="{{ route('labels.index') }}"
                                                        :active="request() - > routeIs('labels.*')"
                                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                                        <span class="flex-1">Labels</span> </a>
                                                </li>
                                                <li>
                                                    <a href="{{ route('categories.index') }}"
                                                        :active="request() - > routeIs('categories.*')"
                                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                                        <span class="flex-1">Categories</span> </a>
                                                </li>
                                                <li>
                                                    <a href="{{ route('activities') }}"
                                                        :active="request() - > routeIs('activities')"
                                                        class="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                                        <span class="flex-1">Ticket Logs</span> </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            @endhasanyrole
            <li class="block relative">
                <a href="/tickets"
                    class="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100">
                    <span class="mr-3 text-xl"> <i class="mdi mdi-ticket-outline"></i> </span>
                    <span>Tickets</span>
                </a>
            </li>
            @hasanyrole('admin|agent')
                <li class="block relative">
                    <a href="/jobs"
                        class="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-gray-100">
                        <span class="mr-3 text-xl"><i class="mdi mdi-file-outline"></i></span>
                        <span>Jobs</span>
                    </a>
                </li>
            @endhasanyrole
        </ul>
        <x-dropdown>
            <x-slot name="trigger">
                <button class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                    @click="toggleProfileMenu" @keydown.escape="closeProfileMenu" aria-label="Account"
                    aria-haspopup="true">
                    {{ Auth::user()->name }}
                </button>
            </x-slot>

            <x-slot name="content">
                <x-dropdown-link href="{{ route('profile.show') }}">
                    <x-slot name="icon">
                        <svg class="mr-3 w-4 h-4" aria-hidden="true" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                            </path>
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </x-slot>
                    My profile
                </x-dropdown-link>
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <x-dropdown-link :href="route('logout')"
                        onclick="event.preventDefault(); this.closest('form').submit();">
                        <x-slot name="icon">
                            <svg class="mr-3 w-4 h-4" aria-hidden="true" fill="none" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </x-slot>
                        {{ __('Log Out') }}
                    </x-dropdown-link>
                </form>
            </x-slot>
        </x-dropdown>

    </div>
</header>
