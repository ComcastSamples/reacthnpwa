import { getStoryType, getItem } from '../services/Services'

export const validatePage = (page, total) => {
  let validPage = !isNaN(page);

  if (validPage && total) {
    return page <= total
  }
  return validPage
}

export const initStory = async (type) => {
  let response = await getStoryType(type).then(data => {
    return data
  });
  return response
}

export const initItems = async (id) => {
  let response = await getItem(id) .then(data => {
    console.log(data)
  })
}