// FUNCTIONS NOT PURE SINCE WE FORK WITH PRODUCE DRAFT

export const setLoadingProps = state => {
  state.isLoading = true;
  state.failError = null;
};

export const setLoadingSuccessProps = state => {
  state.isLoading = false;
  state.failError = null;
  state.lastUpdate = new Date();
};

export const setLoadingErrorProps = (state, error) => {
  state.isLoading = false;
  state.failError = error;
};