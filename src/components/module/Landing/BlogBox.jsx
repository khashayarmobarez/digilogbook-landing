import Image from "next/image";



const BlogBox = ({blog}) => {

    const { title, authorName, image, createDate, id, blogSections} = blog;
    return (
        <div className='w-[80vw] h-[40rem] bg-primaryNormal rounded-3xl flex flex-col items-center justify-start py-6 text-primaryLight'>
            <Image src={image?.path} alt={image?.name || 'picture'} width={300} height={100}  />
            <div className='w-full flex flex-col items-center justify-center gap-y-6'>

                <div className='w-full flex flex-col items-center justify-center gap-y-6'>
                    <h1>{title}</h1>
                    <p>{authorName}</p>
                </div>

                <p>{blogSections[0].htmlContent}</p>

            </div>
        </div>
    );
};

export default BlogBox;