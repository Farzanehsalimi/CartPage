function PaymentSummary() {
  function toPersianFormatted(num) {
    return Number(num).toLocaleString("fa-IR");
  }

  return (
    <div className="md:min-w-[300px] lg:max-h-[365px] xl:max-h-[412px] bg-white rounded-2xl shadow-sm mt-10 md:mt-0">
      <div className="inline-flex gap-2 p-6">
        <img src="/src/assets/icons/receipt-text.svg" alt="" />
        <span className="text-xl font-bold md:font-black">پرداخت</span>
      </div>

      <div className="px-6 py-8 xl:py-10 border-t border-solid border-border-color">
        <div className="flex justify-between mb-6 xl:mb-8">
          <span className="font-bold">جمع دوره ها</span>
          <span className="font-black sm:text-xl text-primary">
            {toPersianFormatted(4250000)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-bold">سود شما از خرید گروهی</span>
          <span className="font-black sm:text-xl text-red">
            {toPersianFormatted(750000)}-
          </span>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-4 xl:gap-6 border-t border-dashed border-border-color p-6  "
        style={{ borderTopWidth: "2px" }}
      >
        <span className="text-xs font-bold text-receipt-color">
          کد تخفیف دارم!
        </span>
        <button className="bg-primary hover:bg-hover-color rounded-2xl py-3 sm:py-4 px-8 sm:px-11 text-white">
          <span className="font-bold ml-2">پرداخت</span>
          <span className="font-black ml-1">{toPersianFormatted(3500000)}</span>
          <span className="text-2xs">تومان</span>
        </button>
      </div>
    </div>
  );
}

export default PaymentSummary;
