import ImageCard from './component/ImageCard';
import React, { useReducer, useEffect } from 'react';
import reducerFnc from './reducerFnc';
import ImageSearch from './component/ImageSearch';

const InitialState = {
  data: [],
  loading: true,
  error: '',
  input: '',
  formSubmitInput: '',
};

function App() {
  const [state, dispatch] = useReducer(reducerFnc, InitialState);
  const { data, loading, input,formSubmitInput } = state;
  // console.log(input.includes(' '));
  const words = input.includes(' ')? input.replace(' ','+'):input;
  // console.log(words);

  const fetchData = () => {
    dispatch({ type: 'FETCH_START' });
    fetch(
      `https://pixabay.com/api/?key=26364314-9f896cfb87ae9a0d9340d39b5&q=${words}&image_type=photo`,
    )
      .then(resp => resp.json())
      .then(rsp => dispatch({ type: 'FETCH_SUCCESS', payload: rsp.hits }))
      .catch(err => dispatch({ type: 'FETCH_ERROR', payload: err }));
  };

  useEffect(() => {
    fetchData();
    // console.log(data.hits);
  }, [formSubmitInput]);

  return (
    <div>
      <div className="container mx-auto">
        <div>
          <ImageSearch dispatch={dispatch} input={input} />
        </div>
        {loading ? (
          <div className="text-5xl text-center mx-auto mt-32">Loading...</div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {data.map(img => (
              <ImageCard key={img.id} image={img} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
