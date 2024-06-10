<script>
    import "../app.css";
</script>

<div class="drawer  font-Martel">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center">
        <!-- Navbar -->
        <div
            class="sticky bg-gradient-to-tr bg-white   top-0 w-full z-30 grid lg:place-items-center "
        >
            <div class="  text-2xl  text-gray-600  navbar ]">
                <div class="flex-none lg:hidden">
                    <label
                        for="my-drawer-3"
                        aria-label="open sidebar"
                        class="btn btn-square btn-ghost"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path></svg
                        >
                    </label>
                </div>
                <div class="flex-1 px-2 mx-2 font-bold">Dat Boiii</div>
                <div class="flex-none hidden lg:block">
                    <ul class="menu font-bold text-2xl menu-horizontal">
                        <!-- Navbar menu content here -->
                        <li><a>Home</a></li>
                        <li class="dropdown dropdown-hover dropdown-end">
                            <div tabindex="0" role="button" class=" ">About</div>
                            <ul
                                tabindex="0"
                                class="text-2xl dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li><a>How To Buy</a></li>
                                <li><a>Tokenomics</a></li>
                                <li><a>Roadmap</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class=" overflow-hidden w-full">
            <slot></slot>
        </div>
    </div>
    <div class="drawer-side z-50">
        <label
            for="my-drawer-3"
            aria-label="close sidebar"
            class="drawer-overlay"
        ></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200">
            <!-- Sidebar content here -->
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
        </ul>
    </div>
</div>


<style>
    .window{
        padding: 4px;
        background: silver;
        box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
    }
</style>