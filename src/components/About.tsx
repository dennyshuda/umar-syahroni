import illustration from "../assets/illustration.svg";

export function About() {
  return (
    <div className="bg-tertiary text-white rounded-2xl">
      <div className="flex md:items-center flex-col md:flex-row gap-5">
        <div className=" md:w-6/12">
          <img className="p-7" src={illustration} alt="illustration" />
        </div>
        <div className="md:w-6/12 text-sm md:pr-5 p-7 space-y-3">
          <h2 className="text-[#ED7D31]">About me</h2>
          <h1 className="text-3xl font-bold">
            Why hire me for your next project?
          </h1>
          <p>
            My name is Umar Syahroni, and I am a highly skilled and experienced
            designer with a passion for creating visually stunning and effective
            designs. I specialize in graphic design, web design, and product
            design, and have a keen eye for detail and a talent for bringing
            ideas to life.
          </p>
          <p>
            I have a proven track record of success in delivering projects on
            time and to a high standard. I am able to work well both
            independently and as part of a team, and enjoy collaborating with
            clients to understand their needs and create designs that exceed
            their expectations. I am always looking to explore new ideas and
            techniques, and am constantly pushing the boundaries of what is
            possible.
          </p>
          <p>
            I am proficient in a range of design software, including Adobe
            Photoshop, Illustrator, and InDesign, and have a strong
            understanding of design principles and best practices. I am
            confident that my skills and experience can add value to any
            organization or project.
          </p>
        </div>
      </div>
    </div>
  );
}
