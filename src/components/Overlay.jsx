export default function Overlay() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 h-full w-full leading-8 font-medium text-gray-500">
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          transform: 'translate3d(-50%,-50%,0)',
        }}
      >
        <h1 className="text-9xl font-bold tracking-tighter md:text-[12rem] lg:text-[16rem]">
          dream
        </h1>
      </div>
      <div className="absolute top-10 left-10">
        <p>breathe deeply</p>
        <p>the sky carries your thoughts</p>
      </div>
      <div className="absolute top-10 right-10 text-right">
        <p>floating</p>
        <p>weightless</p>
        <p>just like the clouds</p>
      </div>
      <div className="absolute bottom-10 left-10">
        <p className="mb-8">stay present</p>
      </div>
      <div className="absolute right-10 bottom-10 text-right">
        <p>embrace the moment</p>
        <p className="text-black">everything you need is already here</p>
      </div>
    </div>
  );
}
