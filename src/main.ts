import { storageRpc } from "./TournamentStorage/rpc";

let InitModule: nkruntime.InitModule = function (
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  initializer: nkruntime.Initializer
) {
  initializer.registerRpc("PutTournamentRPC", storageRpc);

};
// Reference InitModule to avoid it getting removed on build
!InitModule && InitModule.bind(null);
