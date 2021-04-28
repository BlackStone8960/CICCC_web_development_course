const booksReducer = (state, action) => {
  switch(action.type) {
    case 'POPULATE_BOOKS' :
      return action.books;
    default :
      return state;
  }
};

export { booksReducer as default };