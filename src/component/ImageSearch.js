
function ImageSearch({ dispatch, input }) {
 

  const formSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'FORM_SUBMIT', payload: input });
  };
  return (
    <div className="max-w-sm rou overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={formSubmit}>
        <div className="flex items-center border-b-2">
          <input
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            onChange={e =>
              dispatch({ type: 'INPUT_CHANGE', payload: e.target.value })
            }
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
