import React from "react";

import { ProfileDetailCard2 } from "../reports/utils";
import Button from "@/src/component/button";

export default function SalePromote({ userdata, mode }) {
  return (
    <div className='px-5 md:py-24 py-14 w-full bg-primary flex flex-col gap-20'>
      <div className='max-w-4xl mx-auto flex flex-col gap-5 md:gap-7 items-center text-center'>
        <h2 className='md:text-5xl text-white font-bold text-4xl'>
          Understand Your Birth Chart
        </h2>
        <p className='md:text-lg text-zinc-300 max-w-3xl mx-auto'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className='max-w-4xl w-full flex flex-col gap-5 text-center md:p-16 p-7 mx-auto border-4 border-highlight rounded-[20px]'>
        <h5 className='md:text-4xl font-semibold text-white text-3xl'>
          Avail Our Limited 60% Instant Discount Offer
        </h5>
        <p className='md:text-lg text-zinc-300 max-w-2xl mx-auto'>
          For a very limited time, we are offering our Natal Report PDF in just
          $9 instead of actual price of $25. Do not miss this one time
          opportunity to download your Natal Report PDF and take control of your
          destiny. Hurry up!
        </p>
        <h6 className='md:text-4xl mb-5  text-3xl text-white'>
          Price <span className='text-highlight font-sans'>$9</span>{" "}
          <span className='line-through text-zinc-500  font-sans'>$25</span>
        </h6>
        {/* <CommonButon extra='max-w-md mx-auto' link='#' text='Get My Report ' /> */}
        <Button
          // animation={buttonComponent.props.animation.value}
          // loading={buttonComponent.props.loading.value}
          // disabled={buttonComponent.props.disabled.value}
          // color={buttonComponent.props.color.value}
          // shadow_size={buttonComponent.props.shadow_size.value}
          // shadow_color={buttonComponent.props.shadow_color.value}
          // size={buttonComponent.props.size.value}
          // tone={buttonComponent.props.tone.value}
          // target={buttonComponent.props.tab.value}
          extra='max-w-xs mx-auto'
          link={"https://www.youtube.com/"}>
          {"Get My Report"}
        </Button>

        <div className='mt-10 flex md:flex-row flex-col md:gap-20 gap-10 items-center'>
          <img
            className='w-[200px]'
            src='https://upastrology.com/book-covers/style-1/natal.png'
          />
          <div className='divide-y rounded-[10px] border-secondary divide-secondary w-full border text-left flex items-start flex-col'>
            <h6 className='py-4 px-5 md:text-xl text-lg text-white'>
              Confirm Details
            </h6>
            {mode == "synastry" ? (
              <>
                <ProfileDetailCard2
                  hidebtn={true}
                  userDetail={userdata?.male}
                />
                <ProfileDetailCard2
                  hidebtn={true}
                  userDetail={userdata?.female}
                />
              </>
            ) : (
              <ProfileDetailCard2 userDetail={userdata} hidebtn={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
