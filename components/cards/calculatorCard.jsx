import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function CalculatorCard({ title, desc, btn, link, style }) {
  const router = useRouter();
  return (
    <div
      className={`p-[2px] relative w-full ${style} duration-100 ease-in group rounded-[10px]`}>
      <div
        onClick={() => router.push(link)}
        className=' h-full  cursor-pointer md:pb-5 md:pt-3 md:pb-8 group p-5 rounded-[10px]'>
        <div className='h-full flex flex-col gap-3 justify-between items-start'>
          <h2 className='font-semibold group-hover:text-zinc-800 text-white  md:text-2xl text-xl'>
            {title}
          </h2>
          <p className='font-nunito  text-zinc-100 group-hover:text-zinc-700 '>
            {desc}
          </p>
          <button className='absolute bottom-3 right-3 ml-auto duration-100 ease-in font-semibold group-hover:bg-white group-hover:text-zinc-800 text-white border border-current rounded-full p-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}


export function BackButton({ url, style, onClick }) {
  const router = useRouter();
  return (
    <div
      className={`absolute z-[1] px-5 max-w-7xl mx-auto w-full left-1/2 -translate-x-1/2 ${
        style ? style : "top-[5rem] md:top-14"
      } `}>
      <button
        onClick={url ? () => router.push("/") : onClick}
        className=' text-white  hover:text-blue-500 top-5 left-5 flex gap-1 items-center'>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'>
            <path
              fillRule='evenodd'
              d='M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z'
              clipRule='evenodd'
            />
          </svg>
        </span>
        Back
      </button>
    </div>
  );
}

export function BackUrl(path) {
  const getPath = path.split("/")[1];
  const check = getPath.replace("-response", "");
  return check;
}

export function TextCard({ text, desc, img, bg, link, btn_text }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
      className={`${bg} w-full cursor-pointer group relative border overflow-hidden p-5 rounded-[10px]`}>
      <div className='flex h-full flex-col  gap-2 max-w-[80%] items-start text-left'>
        <DynamicText value={text}>
          <h6
            dangerouslySetInnerHTML={{ __html: text }}
            className='text-white md:text-xl text-lg'></h6>
        </DynamicText>
        <Paragraph style='text-zinc-300 text-sm' text={desc} />
        <DynamicText value={btn_text}>
          <button className='text-zinc-300 hover:text-secondary flex gap-1 items-center'>
            {btn_text}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'>
              <path
                fillRule='evenodd'
                d='M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </DynamicText>
      </div>
      <div className='w-[130px] h-[130px] flex justify-center items-center bg-secondary absolute right-[-50px] rounded-full top-[-50px]'>
        <div
          className='w-[40px] h-[40px] absolute top-1/2 left-1/2 -translate-x-[100%] text-primary'
          dangerouslySetInnerHTML={{ __html: img }}></div>
      </div>
    </div>
  );
}

export function MoreCards({ title, link, icon }) {
  return (
    <Link href={link}>
      <div className='py-5 px-5 md:px-7 rounded-md flex flex-col gap-5 bg-third hover:bg-opacity-80 duration-100 ease-in  cursor-pointer md:max-w-[220px]'>
        <div className='flex gap-5 text-zinc-800 items-center'>
          <h6 className='text-xl leading-6'>{title}</h6>
          <span
            dangerouslySetInnerHTML={{ __html: icon }}
            className='w-[50px]'></span>
        </div>
        <buton className='flex gap-2 hover:underline cursor-pointer text-zinc-700  items-center '>
          Read More
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </buton>
      </div>
    </Link>
  );
}
