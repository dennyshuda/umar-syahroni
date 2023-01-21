export function Connect() {
  return (
    <div className="bg-tertiary my-10 text-white rounded-xl">
      <div className="flex flex-col xl:flex-row mx-10 py-14 gap-y-5">
        <div className="xl:w-6/12 text-center text-2xl font-bold">
          <h1>Interested working with me?</h1>
        </div>
        <div className="xl:w-3/12 text-center xl:text-right">
          <a
            className="block xl:inline border-2 text-[#ED7D31] border-[#ED7D31] py-5 px-10"
            href=""
          >
            See Projects
          </a>
        </div>
        <div className="xl:w-3/12 text-center xl:text-right">
          <a className="block xl:inline bg-[#ED7D31] py-5 px-10" href="">
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}
