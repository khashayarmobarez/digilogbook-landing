import Link from "next/link";

const AboutUs = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] flex flex-col items-start justify-between gap-y-5 my-10 md:min-h-[40dvh] md:w-[60%] md:gap-y-[30px] md:my-[60px]">

                <h1 className="font-bold text-lg md:text-3xl text-accentNormal">About Us</h1>

                <p className="text-start">
                    We have designed a digital logbook so that you can easily organize your training by recording your flights according to the training syllabuses and have quick access to your records to be aware of your progress. In addition, it allows you to know from which stage you started, so you can set goals more accurately and easily for yourself, and also note your strengths and weaknesses and make more efforts to improve them.
                    <br/>Here, considering the needs of the smart community, we designed Digi Logbook not only to eliminate the costs of purchase and printing but also to reduce paper consumption to minimize environmental damage and protect it.
                    <br/>Hoping for safe flights, growth, and progress of this fascinating field in our dear homeland Iran.
                    <br/>And this is just a part of Digi Logbook&apos;s services...
                    <br/>Stay with us.
                </p>

                <Link 
                    className={`btn btn-success text-primaryLight rounded-3xl bg-accentNormal w-40 self-center`}
                    href={'/contactUs'}
                >
                    Contact Us
                </Link>

            </div>
        </div>
    );
};

export default AboutUs;
