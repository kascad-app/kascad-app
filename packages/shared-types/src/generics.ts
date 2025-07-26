/**
 * Creates a union type of numbers from 0 to N-1. This utility type is useful for creating types
 * representing a range of numbers, typically used in scenarios where you want to limit the
 * values a number can take to a certain range.
 * 'N' is the upper bound of the enumeration, and 'Acc' is an accumulator array used internally
 * for constructing the range. The resulting type is a union of number literals from 0 up to but not including N.
 */
type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

/**
 * Generates a union type of integer numbers between two bounds, 'F' (from) and 'T' (to).
 * This is achieved by using the Enumerate type to create a range from 0 to T, and then
 * excluding the numbers from 0 to F, effectively creating a range from F to T-1.
 * This type is useful for defining types that can only take certain integer values within a specified range.
 */
type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type { Enumerate, IntRange };

export enum WeatherCondition {
  SUNNY = "sunny",
  PARTLY_CLOUDY = "partly_cloudy",
  CLOUDY = "cloudy",
  OVERCAST = "overcast",
  LIGHT_RAIN = "light_rain",
  MODERATE_RAIN = "moderate_rain",
  HEAVY_RAIN = "heavy_rain",
  THUNDERSTORM = "thunderstorm",
  SNOW = "snow",
  BLIZZARD = "blizzard",
  SLEET = "sleet",
  HAIL = "hail",
  FOG = "fog",
  MIST = "mist",
  WINDY = "windy",
  STRONG_WIND = "strong_wind",
  GALE = "gale",
  HURRICANE = "hurricane",
  TORNADO = "tornado",
  HOT = "hot",
  COLD = "cold",
  FREEZING = "freezing",
  DRY = "dry",
  HUMID = "humid",
  DUSTY = "dusty",
  SANDSTORM = "sandstorm",
  CLEAR_NIGHT = "clear_night",
  HEATWAVE = "heatwave",
  DROUGHT = "drought",
  TROPICAL_STORM = "tropical_storm",
}

export type PaginationType = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
};
