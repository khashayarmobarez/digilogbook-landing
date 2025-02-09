import Image from "next/image";

import blogPic from '@/../public/pics/someoneWriting(reduced size).png'

const WhyLogbook = () => {
    return (
        <div className="w-full flex justify-center py-10 md:py-[60px]">
            <div className=" w-[90%] md:w-[60%] flex flex-col ">

                <h1 className=" font-bold text-lg md:text-3xl text-accentNormal mb-5 md:mb-8">Why should we have a logbook?</h1>
                <span className=" w-full h-40 md:h-96 md:px-0 flex justify-center mb-4">
                    <Image src={blogPic} alt="someone writing" className="h-full w-full"  />
                </span>
                <p>
                    When learning to fly, every pilot is required to write a note of their flight hours in a logbook to record their experience.<br/>
                    Many pilots soon give up writing their logbook because it seems pointless after a while, but this is a mistake.<br/>
                    So why is keeping a logbook a good idea?
                    <br/> 1) It provides an accurate assessment of the hours you have flown. If you do not have an accurate assessment of your flight hours, you only have an exaggerated guess about it.
                    <br/> 2) The logbook allows you to even calculate the flight hours of your aircraft. If you do not know how many hours your aircraft has flown, you cannot find the trim time of your aircraft and you will not notice the change in the size of the lines. Filling out the log allows you to record the date of the last reserve parachute repack so that it can be repacked again on the specified date. Therefore, your logbook serves as a guidebook for your aircraft.
                    <br/> 3) Every person overestimates their flight hours until the day they sell their aircraft. Do you trust someone who guesses their flight hours when buying a second-hand aircraft, or do you want to know exactly how many hours the aircraft has flown?
                    <br/> 4) The logbook allows you to evaluate your progress as a pilot. Your learning never stops, even when you have received the highest certificates in this field. No one can claim to know everything about flying. Writing down what you have learned from a flight, what you have done, the areas you have flown, and the correctness or incorrectness of your actions helps you evaluate your learning and progress over a period.
                    <br/> 5) Recording your training in the logbook allows you to know where you started and where you are now, and to plan for where you want to be.
                    <br/> 6) The logbook allows you to set goals for yourself.
                    <br/> 7) You can note your weaknesses in the logbook and work towards improving them.
                    <br/> 8) The logbook helps you gain more information about flight sites and suitable weather for flying. Your logbook does not need to be boring. You can add pictures, simple drawings, and maps! Reading about your flights next year can be hours of fun.
                </p>

            </div>
        </div>
    );
};

export default WhyLogbook;
