
import Image from 'next/image';
import serverErrorSvg from '@/Assets/Icons/Error500.svg';
import Link from 'next/link';

const ServerError = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className='w-full flex flex-col justify-center items-center py-12 gap-y-6'>
                <p className='text-2xl text-accentNormal font-semibold'>مشکلی رخ داده! بعدا دوباره تلاش کنید | 500</p>
                <Image src={serverErrorSvg} alt='server error'/>
                <Link href={'/'} className="btn w-40 h-12 bg-accentNormal border-none rounded-3xl p-3 text-neutralLight hover:text-neutralLight hover:bg-primaryNormalHover">
                    بازگشت به صفحه اصلی
                </Link>
            </div>
        </div>
    );
};

export default ServerError;