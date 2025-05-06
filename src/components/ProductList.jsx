import ProductCard from "./ProductCard";

const courses = [
  {
    id: 1,
    courseImageUrl: "/src/assets/images/reactjs.svg",
    teacherImageUrl: "/src/assets/images/saheb-mohamadi.jpg",
    title: "دوره ی حرفه ای متخصص ری اکت",
    details: [
      {
        label: "ساعت",
        value: "45",
        icon: "/src/assets/icons/Clock.svg",
      },
      {
        label: "+ دانشجو",
        value: "1300",
        icon: "/src/assets/icons/Clock.svg",
      },

      {
        label: "جلسه",
        value: "270",
        icon: "/src/assets/icons/Presentation.svg",
      },
    ],
    teacher: "صاحب محمدی",
    price: "6298000",
  },
  {
    id: 2,
    courseImageUrl: "/src/assets/images/nextjs.svg",
    teacherImageUrl: "/src/assets/images/saheb-mohamadi.jpg",
    title: "دوره ی متخصص Next.js",
    details: [
      {
        label: "ساعت",
        value: "45",
        icon: "/src/assets/icons/Clock.svg",
      },
      {
        label: "+ دانشجو",
        value: "1300",
        icon: "/src/assets/icons/Clock.svg",
      },

      {
        label: "جلسه",
        value: "270",
        icon: "/src/assets/icons/Presentation.svg",
      },
    ],
    teacher: "صاحب محمدی",
    price: "6298000",
  },
  {
    id: 3,
    courseImageUrl: "/src/assets/images/javascript.svg",
    teacherImageUrl: "/src/assets/images/saheb-mohamadi.jpg",
    title: "دوره ی  پیشرفته جاوااسکریپت",
    details: [
      {
        label: "ساعت",
        value: "30",
        icon: "/src/assets/icons/Clock.svg",
      },
      {
        label: "+ دانشجو",
        value: "400",
        icon: "/src/assets/icons/Clock.svg",
      },

      {
        label: "جلسه",
        value: "100",
        icon: "/src/assets/icons/Presentation.svg",
      },
    ],
    teacher: "صاحب محمدی",
    price: "6298000",
  },
  {
    id: 4,
    courseImageUrl: "/src/assets/images/tailwind.svg",
    teacherImageUrl: "/src/assets/images/saheb-mohamadi.jpg",
    title: "دوره ی جامع و پیشرفته تیلویند",
    details: [
      {
        label: "ساعت",
        value: "45",
        icon: "/src/assets/icons/Clock.svg",
      },
      {
        label: "+ دانشجو",
        value: "1300",
        icon: "/src/assets/icons/Clock.svg",
      },

      {
        label: "جلسه",
        value: "270",
        icon: "/src/assets/icons/Presentation.svg",
      },
    ],
    teacher: "صاحب محمدی",
    price: "6298000",
  },
  {
    id: 5,
    courseImageUrl: "/src/assets/images/responsive-web.svg",
    teacherImageUrl: "/src/assets/images/saheb-mohamadi.jpg",
    title: "دوره ی طراحی وب رسپانسیو",
    details: [
      {
        label: "ساعت",
        value: "45",
        icon: "/src/assets/icons/Clock.svg",
      },
      {
        label: "+ دانشجو",
        value: "1300",
        icon: "/src/assets/icons/Clock.svg",
      },

      {
        label: "جلسه",
        value: "270",
        icon: "/src/assets/icons/Presentation.svg",
      },
    ],
    teacher: "صاحب محمدی",
    price: "6298000",
  },
  {
    id: 6,
    courseImageUrl: "/src/assets/images/typescript.svg",
    teacherImageUrl: "/src/assets/images/saheb-mohamadi.jpg",
    title: "دوره ی پروژه محور تایپ اسکریپت",
    details: [
      {
        label: "ساعت",
        value: "45",
        icon: "/src/assets/icons/Clock.svg",
      },
      {
        label: "+ دانشجو",
        value: "1300",
        icon: "/src/assets/icons/Clock.svg",
      },

      {
        label: "جلسه",
        value: "270",
        icon: "/src/assets/icons/Presentation.svg",
      },
    ],
    teacher: "صاحب محمدی",
    price: "6298000",
  },
];

function ProductList() {
  return (
    <div className="flex flex-col flex-1 gap-7">
      {courses.map((course) => (
        <ProductCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default ProductList;
