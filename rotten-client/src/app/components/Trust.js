import React from 'react'

export default function Trust() {
    return (
        <>
                <div class="container mx-auto mt-4 ">
                    <div
                        x-data="
        {
        slides: ['1','2','3'],
        activeSlide: 1,
        activeButton: 'w-[30px] bg-primary',
        button: 'w-[10px] bg-[#E4E4E4]'
        }
        "
                    >
                        <div class="relative flex justify-center">
                            <div
                                class="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0"
                            >
                                <div
                                    class="snap xs:max-w-[368px] flex-no-wrap mx-auto flex h-auto w-full max-w-[300px] overflow-hidden transition-all sm:max-w-[508px] md:max-w-[630px] lg:max-w-[738px] 2xl:max-w-[850px]"
                                    x-ref="carousel"
                                >
                                    <div
                                        class="xs:min-w-[368px] mx-auto h-full min-w-[300px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[850px]"
                                    >
                                        <div class="w-full items-center md:flex">
                                            <div
                                                class="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16"
                                            >
                                                <img
                                                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                                                    alt="image"
                                                    class="w-full"
                                                />
                                                <span class="absolute -top-6 -left-6 z-[-1] hidden sm:block">
                                                    <svg
                                                        width="77"
                                                        height="77"
                                                        viewBox="0 0 77 77"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="1.66343"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="74.5216"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 74.5216)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="74.5216"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 74.5216)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="30.9398"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 30.9398)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="30.9398"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 30.9398)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="1.66342"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 1.66342)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="1.66342"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 1.66342)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="1.66342"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 1.66342)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="1.66344"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 1.66344)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="45.2458"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 45.2458)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="45.2458"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 45.2458)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="1.66371"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 1.66371)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="1.66371"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 1.66371)"
                                                            fill="#3056D3"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="absolute -bottom-6 -right-6 z-[-1]">
                                                    <svg
                                                        width="64"
                                                        height="64"
                                                        viewBox="0 0 64 64"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                                                            stroke="#13C296"
                                                            stroke-width="6"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="w-full">
                                                <div>
                                                    <div class="mb-7">
                                                        <img
                                                            src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                                                            alt="lineicon"
                                                        />
                                                    </div>
                                                    <p
                                                        class="text-body-color mb-11 text-base font-medium italic sm:text-lg"
                                                    >
                                                        Velit est sit voluptas eum sapiente omnis! Porro, impedit
                                                        minus quam reprehenderit tempore sint quaerat id! Mollitia
                                                        perspiciatis est asperiores commodi labore!
                                                    </p>
                                                    <h4 class="text-dark text-xl font-semibold">
                                                        Larry Diamond
                                                    </h4>
                                                    <p class="text-body-color text-base">
                                                        Chief Executive Officer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="xs:min-w-[368px] mx-auto h-full min-w-[300px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[850px]"
                                    >
                                        <div class="w-full items-center md:flex">
                                            <div
                                                class="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16"
                                            >
                                                <img
                                                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                                                    alt="image"
                                                    class="w-full"
                                                />
                                                <span class="absolute -top-6 -left-6 z-[-1] hidden sm:block">
                                                    <svg
                                                        width="77"
                                                        height="77"
                                                        viewBox="0 0 77 77"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="1.66343"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="74.5216"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 74.5216)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="74.5216"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 74.5216)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="30.9398"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 30.9398)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="30.9398"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 30.9398)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="1.66342"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 1.66342)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="1.66342"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 1.66342)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="1.66342"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 1.66342)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="1.66344"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 1.66344)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="45.2458"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 45.2458)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="45.2458"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 45.2458)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="1.66371"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 1.66371)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="1.66371"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 1.66371)"
                                                            fill="#3056D3"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="absolute -bottom-6 -right-6 z-[-1]">
                                                    <svg
                                                        width="64"
                                                        height="64"
                                                        viewBox="0 0 64 64"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                                                            stroke="#13C296"
                                                            stroke-width="6"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="w-full">
                                                <div>
                                                    <div class="mb-7">
                                                        <img
                                                            src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                                                            alt="lineicon"
                                                        />
                                                    </div>
                                                    <p
                                                        class="text-body-color mb-11 text-base font-medium italic sm:text-lg"
                                                    >
                                                        Velit est sit voluptas eum sapiente omnis! Porro, impedit
                                                        minus quam reprehenderit tempore sint quaerat id! Mollitia
                                                        perspiciatis est asperiores commodi labore!
                                                    </p>
                                                    <h4 class="text-dark text-xl font-semibold">
                                                        Larry Diamond
                                                    </h4>
                                                    <p class="text-body-color text-base">
                                                        Chief Executive Officer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="xs:min-w-[368px] mx-auto h-full min-w-[300px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[850px]"
                                    >
                                        <div class="w-full items-center md:flex">
                                            <div
                                                class="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16"
                                            >
                                                <img
                                                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                                                    alt="image"
                                                    class="w-full"
                                                />
                                                <span class="absolute -top-6 -left-6 z-[-1] hidden sm:block">
                                                    <svg
                                                        width="77"
                                                        height="77"
                                                        viewBox="0 0 77 77"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            cx="1.66343"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="74.5221"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 74.5221)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="30.94"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 30.94)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="74.5216"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 74.5216)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="74.5216"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 74.5216)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="30.9398"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 30.9398)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="30.9398"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 30.9398)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="59.8839"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 59.8839)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="16.3017"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 16.3017)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="1.66343"
                                                            cy="1.66342"
                                                            r="1.66343"
                                                            transform="rotate(-90 1.66343 1.66342)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="16.3016"
                                                            cy="1.66342"
                                                            r="1.66343"
                                                            transform="rotate(-90 16.3016 1.66342)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="30.9398"
                                                            cy="1.66342"
                                                            r="1.66343"
                                                            transform="rotate(-90 30.9398 1.66342)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="45.2455"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 45.2455)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="45.578"
                                                            cy="1.66344"
                                                            r="1.66343"
                                                            transform="rotate(-90 45.578 1.66344)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="45.2458"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 45.2458)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="45.2458"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 45.2458)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="60.2162"
                                                            cy="1.66371"
                                                            r="1.66343"
                                                            transform="rotate(-90 60.2162 1.66371)"
                                                            fill="#3056D3"
                                                        />
                                                        <circle
                                                            cx="74.6634"
                                                            cy="1.66371"
                                                            r="1.66343"
                                                            transform="rotate(-90 74.6634 1.66371)"
                                                            fill="#3056D3"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="absolute -bottom-6 -right-6 z-[-1]">
                                                    <svg
                                                        width="64"
                                                        height="64"
                                                        viewBox="0 0 64 64"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                                                            stroke="#13C296"
                                                            stroke-width="6"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="w-full">
                                                <div>
                                                    <div class="mb-7">
                                                        <img
                                                            src="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                                                            alt="lineicon"
                                                        />
                                                    </div>
                                                    <p
                                                        class="text-body-color mb-11 text-base font-medium italic sm:text-lg"
                                                    >
                                                        Velit est sit voluptas eum sapiente omnis! Porro, impedit
                                                        minus quam reprehenderit tempore sint quaerat id! Mollitia
                                                        perspiciatis est asperiores commodi labore!
                                                    </p>
                                                    <h4 class="text-dark text-xl font-semibold">
                                                        Larry Diamond
                                                    </h4>
                                                    <p class="text-body-color text-base">
                                                        Chief Executive Officer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="absolute left-0 right-0 bottom-0 flex items-center justify-center lg:pl-[120px] 2xl:pl-0"
                                >
                                    <button
                                        class="text-primary hover:bg-primary shadow-input mx-1 flex h-12 w-12 items-center justify-center text-black rounded-full bg-white transition-all hover:text-white"
                                    >
                                        <svg
                                            width="15"
                                            height="13"
                                            viewBox="0 0 15 13"
                                            class="fill-current"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M5.24264 11.8033L0.46967 7.03037C0.176777 6.73748 0.176777 6.2626 0.46967 5.96971L5.24264 1.19674C5.53553 0.903845 6.01041 0.903845 6.3033 1.19674C6.59619 1.48963 6.59619 1.96451 6.3033 2.2574L2.81066 5.75004H14C14.4142 5.75004 14.75 6.08583 14.75 6.50004C14.75 6.91425 14.4142 7.25004 14 7.25004H2.81066L6.3033 10.7427C6.59619 11.0356 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        class="text-primary hover:bg-primary shadow-input text-black mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all hover:text-white"
                                    >
                                        <svg
                                            width="15"
                                            height="13"
                                            viewBox="0 0 15 13"
                                            class="fill-current"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9.75736 11.8033L14.5303 7.03037C14.8232 6.73748 14.8232 6.2626 14.5303 5.96971L9.75736 1.19674C9.46447 0.903845 8.98959 0.903845 8.6967 1.19674C8.40381 1.48963 8.40381 1.96451 8.6967 2.2574L12.1893 5.75004H1C0.585786 5.75004 0.25 6.08583 0.25 6.50004C0.25 6.91425 0.585786 7.25004 1 7.25004H12.1893L8.6967 10.7427C8.40381 11.0356 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <section class="bg-black dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mb-4 ">
                    <div class="mx-auto max-w-screen-md sm:text-center">
                        <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
                        <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                        <form action="#">
                            <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div class="relative w-full">
                                    <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                                </div>
                                <div>
                                    <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                                </div>
                            </div>
                            <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
                        </form>
                    </div>
                </div>
            </section></>
    )
}
