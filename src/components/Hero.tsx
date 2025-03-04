const Hero = () => {
  return (
    <>
      <div className="h-[100vh] trishan">
        <img
          src="https://www.riotgames.com/darkroom/2000/41fafce0d7c75d3f13b0ed474538ffe8:1299811321f0d38aa6d1e0bb2f79ad5c/convergence-ka-riotgames-3840x1600-update.png"
          alt=""
          className="absolute inset-0 object-cover w-full h-[90%] -z-10 brightness-50"
        />

        <div className="py-32 pl-12 mt-6 sm:py-48 lg:py-56">
          <div className="flex gap-11 flex-col items-center text-white w-[40rem]">
            <img
              src="https://www.riotgames.com/darkroom/500/ca793edf399904c3dc1fe954699d7d02:8d4ba21708fdcbe732355d6585a0400d/convergence-logo-riotgames-600x121.png"
              alt="Logo"
              className="w-[22.5rem]"
            />

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-3xl font-bold">
                Developed by Double Stallion Games
              </p>

              <p className="text-xl text-center opacity-60">
                Run, leap, and slide your way through the streets of Zaun.
                Encounter champions, face down enemies, and locate
                never-before-seen sides of the Undercity.
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
