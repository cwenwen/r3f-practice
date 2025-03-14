export default function Overlay() {
  return (
    <div className="absolute h-full w-full top-0 left-0 pointer-events-none text-gray-500">
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          transform: 'translate3d(-50%,-50%,0)',
        }}
      >
        <h1 className="font-medium text-[15em] tracking-tighter">dream</h1>
      </div>
      <div className="absolute top-10 left-10">
        breathe deeply
        <br />
        the sky carries your thoughts
      </div>
      <div className="absolute top-10 right-10 text-right">
        floating
        <br />
        weightless
        <br />
        just like the clouds
      </div>
      <div className="absolute bottom-10 left-10">stay present</div>
      <div className="absolute bottom-10 right-10 text-right">
        embrace the moment
        <br />
        <p className="text-black">everything you need is already here</p>
      </div>
    </div>
  );
}
