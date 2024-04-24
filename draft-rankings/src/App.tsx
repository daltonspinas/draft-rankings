import PlayerCard from "./PlayerCard";
import { PlayerSummaries } from "./PlayerInfo";

function App() {

  return (
      <div className='flex-col items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br px-4'>
        <div className="pt-5 px-5 pb-20">
        <h1 className="text-xl  font-extrabold text-center font-druk text-stone-300">
          <div>DALTON SPINAS</div>
          <span> 2024 NFL DRAFT RANKINGS </span>
          <br />
          <span>QBs</span>
        </h1>
        </div>
        <div className=" flex flex-col space-y-12">
          {PlayerSummaries.map((x, idx) => (
            <PlayerCard player={x} idx={idx}></PlayerCard>
          ))}
        </div>
      </div>
  );
}

export default App;
