"use client";

import Link from "next/link";

const PagePicker = () => {

    const links = [
        "https://longdogechallenge.com/",
        "https://checkboxrace.com/",
        "https://onesquareminesweeper.com/",
        "http://heeeeeeeey.com/",
        "http://corndog.io/",
        "https://binarypiano.com/",
        "https://mondrianandme.com/",
        "https://puginarug.com",
        "http://floatingqrcode.com/",
        "https://checkboxolympics.com/",
        "https://alwaysjudgeabookbyitscover.com",
        "https://thatsthefinger.com/",
        "https://cant-not-tweet-this.com/",
        "https://cursoreffects.com",
        "http://eelslap.com/",
        "http://www.staggeringbeauty.com/",
        "http://burymewithmymoney.com/",
        "https://smashthewalls.com/",
        "https://jacksonpollock.org/",
        "http://endless.horse/",
        "http://drawing.garden/",
        "https://www.trypap.com/",
        "http://www.republiquedesmangues.fr/",
        "http://www.movenowthinklater.com/",
        "http://www.rrrgggbbb.com/",
        "http://www.koalastothemax.com/",
        "http://www.everydayim.com/",
        "http://randomcolour.com/",
        "http://cat-bounce.com/",
        "http://chrismckenzie.com/",
        "https://thezen.zone/",
        "http://ninjaflex.com/",
        "http://ihasabucket.com/",
        "http://corndogoncorndog.com/",
        "http://www.hackertyper.com/",
        "https://pointerpointer.com",
        "http://imaninja.com/",
        "http://www.partridgegetslucky.com/",
        "http://www.ismycomputeron.com/",
        "http://www.nullingthevoid.com/",
        "http://www.muchbetterthanthis.com/",
        "http://www.yesnoif.com/",
        "http://lacquerlacquer.com",
        "http://potatoortomato.com/",
        "http://iamawesome.com/",
        "https://strobe.cool/",
        "http://thisisnotajumpscare.com/",
        "http://doughnutkitten.com/",
        "http://crouton.net/",
        "http://corgiorgy.com/",
        "http://www.wutdafuk.com/",
        "http://unicodesnowmanforyou.com/",
        "http://chillestmonkey.com/",
        "http://scroll-o-meter.club/",
        "http://www.crossdivisions.com/",
        "http://tencents.info/",
        "https://boringboringboring.com/",
        "http://www.patience-is-a-virtue.org/",
        "http://pixelsfighting.com/",
        "http://isitwhite.com/",
        "https://existentialcrisis.com/",
        "http://onemillionlols.com/",
        "http://www.omfgdogs.com/",
        "http://oct82.com/",
        "http://chihuahuaspin.com/",
        "http://www.blankwindows.com/",
        "http://tunnelsnakes.com/",
        "http://www.trashloop.com/",
        "http://www.ascii-middle-finger.com/",
        "http://spaceis.cool/",
        "http://www.doublepressure.com/",
        "http://www.donothingfor2minutes.com/",
        "http://buildshruggie.com/",
        "http://buzzybuzz.biz/",
        "http://yeahlemons.com/",
        "http://wowenwilsonquiz.com",
        "https://thepigeon.org/",
        "http://notdayoftheweek.com/",
        "http://www.amialright.com/",
        "https://greatbignothing.com/",
        "https://zoomquilt.org/",
        "https://dadlaughbutton.com/",
        "https://remoji.com/",
        "http://papertoilet.com/",
        "https://loopedforinfinity.com/",
        "https://www.bouncingdvdlogo.com/",
        "https://findtheinvisiblecow.com/",
    ];

    const getRandomLink = () => {
        const randomIndex = Math.floor(Math.random() * links.length);
        return links[randomIndex];
    }

    const openRandomLink = () => {
        window.open(getRandomLink(), '_blank');
    }

    return (
        <div className="h-screen w-full p-5 text-white  flex flex-col justify-center items-center z-[20]">
            <h1 className="text-4xl font-semibold leading-tight text-center z-[20]">lets go to a useless website.</h1>
            <button onClick={openRandomLink} className="border-2 text-2xl py-1 px-12 m-5 shad rounded-md transition z-[20]">please</button>


            <p className="absolute right-0 bottom-0 px-4 py-2 z-[20] hover:underline"><a href="/links">Links</a></p>
        </div>
    );
}

export default PagePicker;