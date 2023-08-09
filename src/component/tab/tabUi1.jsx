export function TabUI({ tabs, active, handleTime }) {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="flex pb-2 w-full  overflow-x-auto border-secondary/40  whitespace-nowrap border-b">
        {tabs.map((item, i) => (
          <button
            onClick={() => handleTime(item)}
            key={i}
            className={` cursor-pointer rounded-md px-4 py-1 ${
              active.toLowerCase() === item.toLowerCase()
                ? "bg-third text-zinc-800"
                : "text-white"
            }`}
          >
            <h6 className="cursor-pointer text-[15px] md:text-base capitalize">
              {item}
            </h6>
          </button>
        ))}
      </div>
    </div>
  );
}
