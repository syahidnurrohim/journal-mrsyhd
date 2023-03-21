import { createContext } from "preact";
import { fetchAPI } from "../utils/helpers";

export const JournalListContext = createContext({
  data: []
})

export const fetchJournalData = async function () {
  const response = await fetchAPI('/journal/list')
  if (!response.ok) {
    return []
  }
  const resp = await response.json()
  return resp.data
}
