import { useSpring, a } from "@react-spring/web";

export function TatorPast({
  title,
  arr,
  handleUpdate,
  identity,
  shuffle,
  active,
}) {
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <h2 className="md:text-3xl text-xl sm:text-2xl text-white font-sans">
        {title}
      </h2>

      <div className="flex flex-col gap-2 md:gap-5">
        {Object.keys(arr).map((item, i) => (
          <TarotCard
            key={i}
            shuffle={shuffle}
            handle={() => handleUpdate(identity, `tarot${i + 1}`)}
            frontImage="/imgs/tarotcard.png"
            active={arr[`tarot${i + 1}`]}
            backImage={`/tarot/${active[i]}.png`}
          />
        ))}
      </div>
    </div>
  );
}

export function TarotCard({ frontImage, backImage, handle, active, shuffle }) {
  const { transform, opacity } = useSpring({
    opacity: active ? 1 : 0,
    transform: `perspective(600px) rotateY(${!active ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <>
      <style jsx>
        {`
          .container {
            display: flex;
            align-items: center;
            position: relative;
            justify-content: center;
          }
          .c {
            will-change: transform, opacity;
          }
        `}
      </style>

      <div
        className={`relative ${
          shuffle ? "shuffle" : ""
        }  w-[100px] h-[140px] md:w-[200px] md:h-[300px]`}
        onClick={handle}
      >
        <a.div
          className={`c top-0 left-0 absolute w-full h-full cursor-pointer`}
          style={{ opacity: opacity.to((o) => 1 - o), transform }}
        >
          <img loading="lazy" src={frontImage} className="w-full h-full" />
        </a.div>
        <a.div
          className={`c top-0 left-0 absolute  w-full h-full  cursor-pointer`}
          style={{
            opacity,
            transform,
            // rotateX: "180deg",
          }}
        >
          <img src={backImage} loading="lazy" className="w-full h-full" />
        </a.div>
      </div>
    </>
  );
}
