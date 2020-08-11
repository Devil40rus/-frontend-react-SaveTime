import generate from "../data/data";

const initialState = {
    appliedFilters: []
};

const LOAD_DATA = "LOAD_DATA";

export const loadData = (payload) => ({
    type: LOAD_DATA,
    payload
});

const filterStore = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            let count = action.payload.count;
            let countPerPage = action.payload.countPerPage || 20;

            let products = generate(count);
            return {
                ...state,
                products,
                filteredProducts: products.slice(0, countPerPage)
            };
        default:
            return state;

    }
};

export default filterStore;