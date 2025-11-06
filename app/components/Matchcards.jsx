import { Calendar, Clock } from "lucide-react";

export default function MatchCard({
  teamA,
  teamALogo,
  teamB,
  teamBLogo,
  competition,
  date,
  time,
  score,
}) {
  return (
    <div className="border border-purple-600 rounded-lg p-3 mb-6 flex flex-col sm:flex-row items-center sm:items-start">
      <div className="flex flex-col justify-center items-start sm:mr-6 mb-4 sm:mb-0">
        <div className="flex items-center gap-2 text-white font-semibold text-xl pt-3">
          <img src={teamALogo} alt={`${teamA} Logo`} className="w-6 h-6" />
          <span>{teamA}</span>
        </div>

        <span className="text-white font-bold text-xl my-2 sm:ml-15">X</span>

        <div className="flex items-center gap-2 text-white font-semibold text-xl pb-3">
          <img src={teamBLogo} alt={`${teamB} Logo`} className="w-6 h-6" />
          <span>{teamB}</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center flex-1 w-full sm:w-auto">
        <h4 className="font-medium text-white mb-2">{competition}</h4>
        <div className="flex items-center text-sm text-white mb-1">
          <Calendar className="w-4 h-4 mr-1 text-white" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-white">
          <Clock className="w-4 h-4 mr-1 text-white" />
          <span>{time}</span>
        </div>
      </div>

 
      <div className="mt-4 sm:mt-0 sm:ml-auto flex flex-col justify-center items-center bg-white/20 px-4 py-2 rounded-lg w-full sm:w-auto">
        <span className="text-xl font-bold text-white">{score}</span>
        <span className="text-sm text-white">Simulado</span>
      </div>
    </div>
  );
}
