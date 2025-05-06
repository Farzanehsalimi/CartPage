function ProductCard({ course }) {
  // convert en nums to persian
  function toPersianFormatted(num) {
    return Number(num).toLocaleString("fa-IR");
  }

  return (
    <div className="grid grid-flow-col grid-rows-2 items-center justify-between sm:flex bg-white rounded-2xl p-3 sm:p-6 shadow-sm">
      <div className="col-span-1 row-span-2 w-24 h-20 sm:w-40 sm:h-28 xl:w-48 xl:h-36">
        <img
          className="rounded-xl md:w-full h-full object-cover"
          src={course.courseImageUrl}
          alt={course.title}
        />
      </div>
      <div className="row-span-1">
        <h2 className="text-secondary-dark text-xs sm:text-base md:text-lg font-black sm:mb-4">
          {course.title}
        </h2>

        <div className="hidden sm:grid sm:grid-cols-2 gap-y-2 text-secondary-light font-bold">
          {course.details.map((detail) => (
            <div key={course.id} className="flex items-center gap-2">
              <img src={detail.icon} alt={detail.label} />
              <span className="text-xs">
                <span>{toPersianFormatted(detail.value)} </span>
                <span>{detail.label}</span>
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <img src="/src/assets/icons/cup.svg" alt="" />
            <span className="text-xs text-warning">چالش های هفتگی</span>
          </div>
        </div>
      </div>
      <div className="row-span-1 grid gap-y-10">
        <div className="hidden sm:flex gap-x-2">
          <div className="w-10 h-10 lg:w-12 lg:h-12">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={course.teacherImageUrl}
              alt={course.teacher}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-2xs text-secondary-lighterter">
              مدرس دوره
            </span>
            <span className="text-xs lg:text-sm font-black text-secondary-dark">
              {course.teacher}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div>
            <span className="text-primary text-sm md:text-xl font-black">
              {toPersianFormatted(course.price)}
            </span>
            <span className="text-2xs text-currency-color mr-2">تومان</span>
          </div>
          <div className="flex justify-center items-center w-8 h-8 border border-border-color rounded-3xl">
            <img className="w-4 h-4" src="/src/assets/icons/Trash.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
