export default function Home() {
  return (
    <main
      className="flex flex-1 bg-red-50 w-screen h-screen justify-center items-center"
      style={{
        backgroundColor: "#002C2B",
      }}
    >
      <div className="w-2/3 lg:w-1/4 aspect-square">
        <img src="/logo.png" className="w-full" />
      </div>
    </main>
  );
}
