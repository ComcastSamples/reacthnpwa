import { getStoryType, getItem } from '../services/Services'

export const validatePage = (page, total) => {
  let validPage = !isNaN(page);

  if (validPage && total) {
    return page <= total
  }
  return validPage
}

export const listItems = (start, end, total, stories) => {
  console.log(`from: ${start}`)
  console.log(`to: ${end}`)
  console.log(`total: ${total}`)
  console.log(stories)
  let storyList = [];
  if (start <= total) {
    for (let i = start; i <= end; i++) {
      storyList.push(getItem(stories[i]));
    }
  }

  return Promise.all(storyList).then(items => {
    return items;
  })
}

export const initStory = async (type) => {
  let response = await getStoryType(type).then(data => {
    return data
  });
  return response
}

// export const initItems = async (id) => {
//   return await getItem(id).then(data => {
//     return data;
//   })
// }