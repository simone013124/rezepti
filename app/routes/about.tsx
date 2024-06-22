export default function About() {
  return (
      <div className="aboutMain">
      <main className="mx-auto mt-28 max-w-md pb-10">
          <h1 className="text-2xl font-bold text-center">About</h1>
          <img
              src="app/pictures/gruppenfoto.png"
              alt="Bild von uns"
              className="mt-4 w-full shadow-md"
          />
          <p className="mt-4 text-lg text-justify">
              Das sind wir: eine Kochbegeisterte, eine die kochen hasst und eine mit einem riesen Gurkenglas.
          </p>
          <p className="mt-4 text-lg text-justify">
              Zusammen hatten wir die Mission das Kochen zu revolutionieren und haben deshalb diese App entwickelt.
          </p>
      </main>
          </div>

  );
}
