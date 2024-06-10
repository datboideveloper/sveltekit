<script>
    import Container from "../lib/components/Container.svelte";

    import background from "../lib/assets/xp-background.jpg";
    import homeimage from "../lib/assets/homeimage.png";
</script>

<Container styles="min-h-screen bg-white relative w-full ">
    <div class=" container grid items-center md:max-w-[80vw] lg:max-w-[70vw]">
        <div class=" grid lg:grid-cols-2 items-center gap-10">
            <img src={homeimage} class="" alt="" />
            <div class=" grid items-center grid-cols-1 border-t-4 border-b-4 p-4 lg:grid-cols-2 gap-5">
                <div class=" flex items-center justify-center lg:col-span-2">
                    <h1 class=" text-5xl lg:col-span-2 font-black">$DATBOI</h1>
                </div>
                <button
                    class=" btn-primary font-bold text-primary-content col-span-1 lg:col-span-2 text-xl btn"
                    ><p class=" truncate">
                        0x53ec0454273c75a453c02947caB6d92522793D5b
                    </p>
                </button>
                <button class=" text-xl font-bold btn bg-pr">BUY</button>
                <button class=" text-xl font-bold btn">WHITEPAPER</button>
                <div class=" "></div>
            </div>
        </div>
    </div>
</Container>

<style>
    .window {
        padding: 4px;
        background: silver;
        box-shadow:
            inset -1px -1px #0a0a0a,
            inset 1px 1px #dfdfdf,
            inset -2px -2px grey,
            inset 2px 2px #fff;
    }
    .text-shadow {
        text-shadow: 0px 0px 2px black;
        -webkit-text-stroke: 3px black;
        paint-order: stroke fill;
    }
</style>
