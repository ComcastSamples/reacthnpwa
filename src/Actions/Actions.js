import { getStoryPage } from "../services/Services";

export const getTotalPages = (story) => {
  const totalPages = {
    news: 10,
    newest: 12,
    ask: 2,
    show: 2,
    jobs: 1
  };
  return totalPages[story];
};

export const validatePage = (page, total) => {
  let validPage = !isNaN(page);

  if (validPage && total) {
    return page <= total;
  }
  return validPage;
};

export const getStory = async (type, page) => {
  return await getStoryPage(type, page).then((data) => {
    return data.map((item, index) => {
      return {
        ...item,
        index
      };
    });
  });
};
