import { StorageUtility } from "../utilities/StorageUtility";
import TournamentUtility from "../utilities/TournamentUtility";

export let storageRpc: nkruntime.RpcFunction = function (
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  data: string
) {
  let response: IResponse;
  try {
    let storageUtil = new StorageUtility();
    let jsonPayload: IStorageRequest = JSON.parse(data);
    const tournamentData: Tournament = jsonPayload.value;


    //checking the payload of the tournament for validation
    // error response
    if (!TournamentUtility.isValid(tournamentData)) {
      return JSON.stringify(
        (response = {
          success: false,
          message: "Please enter the correctt payload",
        })
      );
    }

    //else if it is valid writing the record to the nakama storage
    const ack = storageUtil.writeStorage(
      undefined,
      nk,
      jsonPayload.collectionName,
      jsonPayload.key,
      jsonPayload.value
    );

    //response updated
    response = {
      success: true,
      message: "collection updated successfuly",
    };
  } catch (error: any) {
    logger.error(error.message);
    response = {
      success: false,
      message: "error occured on ",
    };
  }

  // returning the response
  return JSON.stringify(response);
};
