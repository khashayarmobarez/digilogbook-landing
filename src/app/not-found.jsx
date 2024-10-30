
import Image from 'next/image';
import notFound from '@/Assets/Icons/notFound.svg';

const NotFound = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center py-12 gap-y-6'>
            <Image src={notFound} alt='not found'/>
            <p className='text-2xl text-accentNormal font-semibold'>صفحه ی مورد نظر شما یافت نشد | 404</p>
        </div>
    );
};

export default NotFound;