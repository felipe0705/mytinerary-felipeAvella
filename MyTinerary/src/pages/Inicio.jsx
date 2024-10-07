
export default function BodyHome() {
  
  return (
    <>
      <section className="flex max-md:flex-wrap-reverse gap-8 items-center">
        <div className="flex flex-col h-full items-center md:w-5/12 gap-6 xs:gap-12 bg-slate-100 dark:bg-slate-700 p-8 rounded-lg shadow-xl">
          <div className="font-bold text-neutral-900 dark:text-neutral-300 text-3xl sm:text-4xl">
            Find the perfect destination
          </div>
          <div className="text-neutral-500 dark:text-neutral-200 text-2xl">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</div>
          <a className="disabled:cursor-not-allowed disabled:brightness-75 hover:bg-blue-600 active:scale-95 disabled:active:scale-100  transition-all bg-blue-700 text-white shadow-lg font-bold rounded-lg p-3 text-center  max-w-xs w-full text-xl" href="/cities">View more</a>
        </div>
        <div className="flex flex-col w-full grow justify-between items-center relative gap-6">
        <h2 className="text-center font-bold text-3xl text-neutral-700 dark:text-neutral-100">Popular Tineraries</h2>

        </div>
      </section>
    </>
  );
}
