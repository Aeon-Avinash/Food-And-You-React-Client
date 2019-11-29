import moment from "moment";
// import * as spoonResData from "./spoonResData";
import { getDaySummary } from "./calculations";
import {
  resourceIdAccessor,
  resourceTitleAccessor,
  resourceMap,
  resourceTypes
} from "../constants";

const createDaySummary = (newEntry, entries, summaryDate) => {
  //? null newEntry and summaryDate indicates deletion of entry from existing day summaries
  let selectedResourceType, otherResourceType, date, dayEntries;
  if (!newEntry && entries && summaryDate) {
    selectedResourceType = resourceTypes.dietEntry;
    otherResourceType = resourceTypes.mealPlan;
    date = new Date(moment(summaryDate));
    dayEntries = entries.filter(entry => {
      let isSame =
        moment(entry.start).isSame(date, "year") &&
        moment(entry.start).isSame(date, "month") &&
        moment(entry.start).isSame(date, "day");
      return isSame ? true : false;
    });
  } else if (newEntry && entries) {
    selectedResourceType = newEntry[resourceIdAccessor];
    otherResourceType = resourceMap.find(
      resource => resource[resourceIdAccessor] !== selectedResourceType
    )[resourceIdAccessor];
    date = new Date(moment(newEntry.start));
    dayEntries = entries.filter(entry => {
      let isSame =
        moment(entry.start).isSame(date, "year") &&
        moment(entry.start).isSame(date, "month") &&
        moment(entry.start).isSame(date, "day");
      return isSame ? true : false;
    });
  }

  //* returning daySummary objects for each resourceType

  const selectedResourceDayEntries = dayEntries.filter(
    entry => entry[resourceIdAccessor] === selectedResourceType
  );

  let id_selected = `${moment(date).format(
    "Do MMM YYYY"
  )}-${selectedResourceType}-summary`;
  let displayDate_selected = moment(date).format("Do MMM YYYY");

  let daySummary_selected = getDaySummary(selectedResourceDayEntries);

  let selectedResourceDaySummaryObj = {
    id: id_selected,
    [resourceIdAccessor]: selectedResourceType,
    dateId: id_selected, //? used to identify and operate on the daySummary objects
    date, //? date object representing a entry's start date of that particular day
    displayDate: displayDate_selected,
    title: `${
      resourceMap.find(res => res[resourceIdAccessor] === selectedResourceType)[
        resourceTitleAccessor
      ]
    } Analysis for ${displayDate_selected}`,
    ...daySummary_selected
  };

  const otherResourceDayEntries = dayEntries.filter(
    entry => entry[resourceIdAccessor] === otherResourceType
  );

  let id_other = `${moment(date).format(
    "Do MMM YYYY"
  )}-${otherResourceType}-summary`;
  let displayDate_other = moment(date).format("Do MMM YYYY");

  let daySummary_other = getDaySummary(otherResourceDayEntries);

  let otherResourceDaySummaryObj = {
    id: id_other,
    [resourceIdAccessor]: otherResourceType,
    dateId: id_other, //? used to identify and operate on the daySummary objects
    date, //? date object representing a entry's start date of that particular day
    displayDate: displayDate_other,
    title: `${
      resourceMap.find(res => res[resourceIdAccessor] === otherResourceType)[
        resourceTitleAccessor
      ]
    } Analysis for ${displayDate_other}`,
    ...daySummary_other
  };

  //* Update the tracker with the new EntryObj as well as the database

  return [selectedResourceDaySummaryObj, otherResourceDaySummaryObj];
};

export const createDaysFromAllEntries = allEntries => {
  let allDaySummaries = [];
  let entries = [...allEntries];
  entries.forEach(entry => {
    let [
      selectedResourceDaySummaryObj,
      otherResourceDaySummaryObj
    ] = createDaySummary(entry, entries);
    !allDaySummaries.find(
      daySum => daySum.id === selectedResourceDaySummaryObj.id
    ) && allDaySummaries.push(selectedResourceDaySummaryObj);
    !allDaySummaries.find(
      daySum => daySum.id === otherResourceDaySummaryObj.id
    ) && allDaySummaries.push(otherResourceDaySummaryObj);
  });
  return allDaySummaries;
};
