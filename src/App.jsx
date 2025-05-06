import PaymentSummary from "./components/PaymentSummary";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="bg-gray-200 pb-6 lg:h-full">
      <div className="container xl:max-w-screen-xl">
        <h1 className="text-2xl md:text-4xl font-black text-center md:text-right py-24 pb-14">
          سبد دوره های شما
        </h1>
        <div className="flex flex-col lg:flex-row md:gap-16 xl:px-24">
          {/* محصول */}
          <ProductList />
          {/* پرداخت */}
          <PaymentSummary />
        </div>
      </div>
    </div>
  );
}

export default App;
