import Badge from "../ui/Badge";

export default function Header() {
  return (
    <header
      className="
        flex
        flex-col
        gap-5
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div>
        <div className="flex items-center gap-3">

          <h1
            className="
              text-5xl
              font-black
              tracking-tight
              text-white
            "
          >
            FocusFlow
          </h1>
          <Badge
            className="
              bg-[#FF7324]/15
              text-[#FFCC00]
              border-[#FF7324]/30
            "
          >
            PRO&nbsp;v2.0
          </Badge>
        </div>

        <p
          className="
            mt-3
            max-w-xl
            text-lg
            leading-relaxed
            text-zinc-400
          "
        >
          Stay focused.
          <span className="text-zinc-300">
            {" "}
            One Session at a Time.
          </span>
        </p>
      </div>

      <div
        className="
          rounded-2xl
          border
          border-[#4A2C26]
          bg-[#221519]
          px-5
          py-3
          text-center
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-zinc-500
          "
        >
          Current Version
        </p>

        <p
          className="
            mt-1
            text-xl
            font-bold
            text-[#FF7324]
          "
        >
          2.0
        </p>
      </div>
    </header>
  );
}