'use client'

const JoinUs = () => {
    return (
        <div className="w-full flex justify-center mt-20 mb-10">
            <div className="w-[90%] flex flex-col justify-between items-center rounded-3xl py-4 gap-y-4 md:px-16 md:py-9 bg-primaryLightHover md:flex-row">

                <p className=" font-bold text-base md:text-3xl text-neutralDark">برای مشاهده قابلیت‌های بیشتر همراه ما باشید...</p>

                <div className="w-full flex flex-row justify-around items-center md:gap-x-8 md:w-[30%] ">
                    <button className="btn w-[44%]  h-12 bg-accentNormal border-none rounded-3xl p-3 text-neutralLight hover:text-neutralLight hover:bg-primaryNormalHover
                    md:w-[45%]"
                    onClick={() => window.open('https://app.digilogbook.ir/signUp', '_blank')}>
                        شروع کنید
                    </button>
                    <button className="btn btn-outline w-[44%] text-accentNormal rounded-3xl
                    md:w-[45%]"
                    onClick={() => window.open('https://app.digilogbook.ir/login', '_blank')}>
                        ورود
                    </button>
                </div>

            </div>
        </div>
    );
};

export default JoinUs;