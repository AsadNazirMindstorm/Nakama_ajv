
export const metaSchema = {
  type: "object",
  properties: {
    category: {
      type: "string",
    },
    title: {
      type: "string",
    },
    league: {
      type: "string",
      enum: ["Pro", "Some", "Only potatoes"],
    },
    icon: {
      type: "string",
    },
  },
  required: ["category", "icon", "league", "title"],
};

// Hole Data Schema
export const holeDataSchema = {
  type: "object",
  $id: "#holeDataSchema",
  properties: {
    courseId: {
      type: "string",
      description: "Course ID",
    },
    holeId: {
      type: "number",
      enum: [1, 2, 3, 4, 5, 6],
    },
    teePosition: {
      type: "string",
      enum: ["1", "2", "3"],
    },
    windSpeed: {
      type: "string",
      enum: ["1 kmph", "2 kmph", "3 kmph"],
    },
    windDirection: {
      type: "array",
      uniqueItems: true,
      items: {
        type: "string",
        enum: ["North", "West", "East", "South"], // Define possible values for windDirection
      },
      description: "Wind direction options",
    },
  },
  required: ["courseId", "holeId", "teePosition", "windDirection"],
  additionalProperties: false,
};

export const testingHoleScehma= {
  type: "object",
  properties: {
    holeCount: {
      type: "number",
      minimum: 1,
    },
    isRandom: {
      type: "boolean",
      default: false,
    },
    holeData: {
      type: "array",
      minItems: 0,
      items: {
        type: "object",
        // $id: "#holeDataSchema",
        properties: {
          courseId: {
            type: "string",
            description: "Course ID",
          },
          holeId: {
            type: "number",
            enum: [1, 2, 3, 4, 5, 6],
          },
          teePosition: {
            type: "string",
            enum: ["1", "2", "3"],
          },
          windSpeed: {
            type: "string",
            enum: ["1 kmph", "2 kmph", "3 kmph"],
          },
          windDirection: {
            type: "array",
            uniqueItems: true,
            items: {
              type: "string",
              enum: ["North", "West", "East", "South"], // Define possible values for windDirection
            },
            description: "Wind direction options",
          },
        },
        required: ["courseId", "holeId", "teePosition", "windDirection"],
      },
    },
  },
  required: ["holeCount", "holeData"],
};

export const holeSchemaForUi = {
  type: "object",
  properties: {
    holeCount: {
      type: "number",
    },
    isRandom: {
      type: "boolean",
      default: false,
    },
  },
  required: ["holeCount"],
};

//New Hole Schema for testing purpose
export const holeSchema = {
  type: "object",
  $id: "#HoleSchema",
  properties: {
    holeCount: {
      type: "number",
    },
    holeData: {
      type: "array",
      minItems: 1,
      maxItems: 1000,
      items: {
        $ref: "#holeDataSchema",
      },
    },
  },
  required: ["holeCount", "holeData"],
};

export const AvailabilitySchema = {
  type: "object",
  properties: {
    startDateTime: {
      type: "string",
    },
    endDateTime: {
      type: "string",
    },
    totalTime: {
      type: "number",
      description: "Total time in minutes or hours", // Adjust as needed
    },
    userPlayTime: {
      type: "number",
      description: "User play time in minutes or hours", // Adjust as needed
    },
  },

  required: ["startDateTime", "endDateTime", "totalTime", "userPlayTime"],
  additionalProperties: false, // No additional properties allowed
};
