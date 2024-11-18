import Link from "next/link";


const AboutUs = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] flex flex-col items-start justify-between gap-y-5 my-10 md:min-h-[40dvh] md:w-[60%] md:gap-y-[30px] md:my-[60px]">

                <h1 className=" font-bold text-lg md:text-3xl text-accentNormal">درباره ما</h1>

                <p className="text-start ">
                    یک لاگ بوک دیجیتال طراحی کرده ایم تا شما بتوانید به راحتی با ثبت پروازهای خود طبق سیلابس های آموزشی به آموزشتان نظم بیشتری دهید و دسترسی سریع به سوابق خود برای آگاهی از پیشرفتتان داشته باشید. علاوه بر این ، به شما امکان این را می دهد که بدانید از چه مرحله ایی آغاز کرده اید ، تا بتوانید برای خود دقیق تر و راحت تر هدف گذاری کنید ، همچنین نقاط قوت و ضعف خود را یادداشت کرده و در راستای بهبود آن ها تلاش بیشتری کنید.
                    <br/>ما اینجا با توجه به نیاز های جامعه ی هوشمند ، دیجی لاگ بوک را طراحی کردیم تا نه تنها هزینه های خرید و چاپ را حذف کنیم ، بلکه از مصرف کاغذ کاسته ایم تا آسیب به محیط زیست را کاهش و از آن محافظت کنیم.
                    <br/>به امید پرواز های ایمن ، رشد و پیشرفت این رشته جذاب در میهن عزیزمان ایران
                    <br/>و این فقط بخشی از خدمات دیجی لاگ بوک است …
                    <br/>همراه ما باشید.
                </p>

                <Link 
                    className={`btn btn-success text-primaryLight rounded-3xl bg-accentNormal w-40 self-center`}
                    href={'/contactUs'}
                >
                    تماس با ما
                </Link>

            </div>
        </div>
    );
};

export default AboutUs;