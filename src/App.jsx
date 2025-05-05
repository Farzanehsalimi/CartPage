import "./App.css";

function App() {
  return (
    <div className="bg-gray-200 pb-6 lg:h-screen">
      <div className="container xl:max-w-screen-xl">
        <h1 className="text-2xl md:text-4xl font-black text-center md:text-right py-24 pb-14">
          سبد دوره های شما
        </h1>
        <div className="flex flex-col lg:flex-row md:gap-16 xl:px-24">
          {/* محصول */}
          <div className="flex flex-col flex-1 gap-8">
            <div className="grid grid-flow-col grid-rows-2 items-center justify-between sm:flex bg-white rounded-2xl p-3 sm:p-6 shadow-sm">
              <div className="col-span-1 row-span-2 w-24 h-20 sm:w-40 sm:h-28 xl:w-48 xl:h-36">
                <img
                  className="rounded-xl md:w-full h-full object-cover"
                  src="/src/assets/images/react.jpg"
                  alt="react"
                />
              </div>
              <div className="row-span-1">
                <h2 className="text-secondary-dark text-xs sm:text-base md:text-lg font-black sm:mb-4">
                  دوره حرفه ای متخصص ری اکت
                </h2>
                <div className="hidden sm:grid sm:grid-cols-2 gap-y-2 text-secondary-light font-bold">
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/Clock.svg" alt="" />
                    <span className="text-xs">45 ساعت</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/Clock.svg" alt="" />
                    <span className="text-xs">+1300 دانشجو</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/Presentation.svg" alt="" />
                    <span className="text-xs">270 جلسه</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/cup.svg" alt="" />
                    <span className="text-xs text-warning">چالش های هفتگی</span>
                  </div>
                </div>
              </div>
              <div className="row-span-1 grid gap-y-10">
                <div className="hidden sm:flex gap-x-2">
                  <div className="w-10 h-10 lg:w-14 lg:h-14">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src="/src/assets/images/saheb-mohamadi.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-2xs text-secondary-lighterter">
                      مدرس دوره
                    </span>
                    <span className="text-xs lg:text-sm font-black text-secondary-dark">
                      صاحب محمدی
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div>
                    <span className="text-primary text-sm md:text-xl font-black">
                      6,298,000
                    </span>
                    <span className="text-2xs text-currency-color mr-2">
                      تومان
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 border border-border-color rounded-3xl">
                    <img
                      className="w-4 h-4"
                      src="/src/assets/icons/Trash.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-col grid-rows-2 items-center justify-between sm:flex bg-white rounded-2xl p-3 sm:p-6 shadow-sm">
              <div className="col-span-1 row-span-2 w-24 h-20 sm:w-40 sm:h-28 xl:w-48 xl:h-36">
                <img
                  className="rounded-xl md:w-full h-full object-cover"
                  src="/src/assets/images/react.jpg"
                  alt="react"
                />
              </div>
              <div className="row-span-1">
                <h2 className="text-secondary-dark text-xs sm:text-base md:text-lg font-black sm:mb-4">
                  دوره حرفه ای متخصص ری اکت
                </h2>
                <div className="hidden sm:grid sm:grid-cols-2 gap-y-2 text-secondary-light font-bold">
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/Clock.svg" alt="" />
                    <span className="text-xs">45 ساعت</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/Clock.svg" alt="" />
                    <span className="text-xs">+1300 دانشجو</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/Presentation.svg" alt="" />
                    <span className="text-xs">270 جلسه</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/src/assets/icons/cup.svg" alt="" />
                    <span className="text-xs text-warning">چالش های هفتگی</span>
                  </div>
                </div>
              </div>
              <div className="row-span-1 grid gap-y-10">
                <div className="hidden sm:flex gap-x-2">
                  <div className="w-10 h-10 lg:w-14 lg:h-14">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src="/src/assets/images/saheb-mohamadi.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-2xs text-secondary-lighterter">
                      مدرس دوره
                    </span>
                    <span className="text-xs lg:text-sm font-black text-secondary-dark">
                      صاحب محمدی
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div>
                    <span className="text-primary text-sm md:text-xl font-black">
                      6,298,000
                    </span>
                    <span className="text-2xs text-currency-color mr-2">
                      تومان
                    </span>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 border border-border-color rounded-3xl">
                    <img
                      className="w-4 h-4"
                      src="/src/assets/icons/Trash.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* پرداخت */}
          <div className=" bg-white rounded-2xl shadow-sm mt-10 md:mt-0">
            <div className="inline-flex gap-2 p-6">
              <img src="/src/assets/icons/receipt-text.svg" alt="" />
              <span className="text-xl font-bold md:font-black">پرداخت</span>
            </div>

            <div className="px-6 py-10 border-t border-solid border-border-color">
              <div className="flex justify-between mb-6 xl:mb-8">
                <span>جمع دوره ها</span>
                <span className="font-black sm:text-xl text-primary">
                  4.250.000+
                </span>
              </div>

              <div className="flex justify-between">
                <span>تخفیف ها</span>
                <span className="font-black sm:text-xl text-red">750.000-</span>
              </div>
            </div>
            <div
              className="flex flex-col items-center gap-4 border-t border-dashed border-border-color p-6 xl:gap-8"
              style={{ borderTopWidth: "2px" }}
            >
              <span className="text-xs font-bold text-receipt-color">
                کد تخفیف دارم!
              </span>
              <button className="bg-primary rounded-2xl py-3 sm:py-4 px-8 sm:px-11 text-white">
                <span className="font-bold ml-2">پرداخت</span>
                <span className="font-black ml-1">3.500.000</span>
                <span className="text-2xs">تومان</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
