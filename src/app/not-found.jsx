
import Image from 'next/image';
import notFound from '@/Assets/Icons/notFound.svg';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center py-12 gap-y-6'>
            <p className='text-2xl text-accentNormal font-semibold'>The page you are looking for was not found | 404</p>
            <Image src={notFound} alt='not found'/>
            <Link href={'/'} className="btn w-40 h-12 bg-accentNormal border-none rounded-3xl p-3 text-neutralLight hover:text-neutralLight hover:bg-primaryNormalHover">
            Return to Home Page
            </Link>
        </div>
        );
};

export default NotFound;