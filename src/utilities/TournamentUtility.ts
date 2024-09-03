import Ajv from "ajv";
import addFormats from "ajv-formats";
import {
  holeSchema,
  holeDataSchema,
  metaSchema,
  AvailabilitySchema,
  testingHoleScehma,
} from "../TournamentStorage/schemas";

class validatorUtility {
  //one instance of ajv
  ajv: Ajv;

  constructor() {
    // Initialize AJV instance
    this.ajv = new Ajv({ logger: false }).addSchema([
      holeDataSchema,
      holeSchema,
    ]);

    //add date-time formats
    addFormats(this.ajv, ["date-time", "uuid"]);
  }

  //function to validate any schema
  validate(schema: Object, data: any) {
    const valid = this.ajv.compile(schema);
    return valid(data);
  }
}

class TournamentUtility extends validatorUtility {
  holeDataValidity(data: Holes) {
    const isValid = this.validate(testingHoleScehma, data);
    if (!isValid) return false;

    //if our hole count is greater than the length of hole data return false
    //if it is not random than hole count must be equal to number of hole data
    if (
      data.holeCount > data?.holeData.length ||
      (data.isRandom == false && data.holeCount != data?.holeData.length)
    )
      return false;

    return true;
  }

  //to check availabilty data validity
  availabiltyDataValidity(data: Availability) {
    try {
      const isValid = this.validate(AvailabilitySchema, data);

      if (!isValid) return false;
      if (
        new Date(parseInt(data.startDateTime)) >=
        new Date(parseInt(data.endDateTime))
      )
        return false;
    } catch (error) {
      return false;
    }

    return true;
  }

  // to check if the tournament is valid or not
  isValid(data: Tournament) {
    if (
      !this.validate(metaSchema, data.metaData) ||
      !this.validate(AvailabilitySchema, data.availabiltyData) ||
      !this.holeDataValidity(data.holeData)
    ) {
      return false;
    }

    return true;
  }
}

export default new TournamentUtility();
