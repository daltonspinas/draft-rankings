import { PlayerInfo } from "./PlayerInfo";
import { Tweet } from "react-tweet";

function PlayerCard(props: { player: PlayerInfo; idx: number }) {
  // const player = props.player;
  // const rank = props.idx;

  const { player, idx: rank } = props;
  return (
    <div>
      <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl">
        <div className="pb-6">
          <div className="px-2">
            <div className=" absolute mt-4 ml-4 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">
              #{rank + 1}
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="flex justify-center w-full">
                <div className="relative">
                  <img
                    src={player.picPath}
                    className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 mt-20 text-center">
              <h3 className="mb-1 text-4xl font-bold leading-normal text-gray-700 dark:text-gray-300">
                {player.name}
              </h3>
              <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                <div className="text-sm font-bold tracking-tighter text-gray-600 dark:text-gray-300 font-mono text-xl">
                  {player.position} | {player.college}
                </div>
              </div>
              <div className="px-4">
                <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                  {player.tagLine}
                </p>
              </div>
              <div className="w-full text-center"></div>
            </div>
            <div className="pt-6 mx-6 mt-2 text-center border-t border-gray-200 dark:border-gray-700/50">
              <div className="flex flex-wrap justify-center">
                <div className="w-full">
                  <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300 text-l tracking-wide">
                    {player.summary}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-2 mx-6 mt-2 text-center border-t border-gray-200 dark:border-gray-700/50">
              <div className="flex flex-wrap justify-center">
                <div className="w-full text-gray-600 dark:text-gray-300 tracking-wide text-left">
                  <span className="font-bold text-lg">Strengths:</span>
                  <ul className="list-inside list-disc font-light">
                    {player.strengths.map((x) => (
                      <li>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-2 mx-6 mt-2 text-center border-t border-gray-200 dark:border-gray-700/50">
              <div className="flex flex-wrap justify-center">
                <div className="w-full text-gray-600 dark:text-gray-300 tracking-wide text-left">
                  <span className="font-bold text-lg">Weaknesses:</span>
                  <ul className="list-inside list-disc font-light">
                    {player.weaknesses.map((x) => (
                      <li>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2 mx-6 mt-2 text-center border-t border-gray-200 dark:border-gray-700/50">
            <div className="flex flex-wrap justify-center">
              <div className="w-full text-gray-600 dark:text-gray-300 tracking-wide text-left">
                <span className="font-bold text-lg">Comp:</span>
                <span className="text-lg font-light mt-2 ml-4">{player.playerComp}</span>
                {player.name == "Jayden Daniels" ? <Tweet id="1772983046649573867"></Tweet> : null}
              </div>
            </div>
          </div>
          <div className="pt-2 mx-6 mt-2 text-center border-t border-gray-200 dark:border-gray-700/50">
            <div className="flex flex-wrap justify-center">
              <div className="w-full text-gray-600 dark:text-gray-300 tracking-wide text-left">
                <span className="font-bold text-lg">Prediction:</span>
                <div className="font-light mt-2">{player.prediction}</div>
              </div>
            </div>
          </div>
          <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
            <div className="absolute flex -space-x-12 rounded-b-2xl">
              <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
