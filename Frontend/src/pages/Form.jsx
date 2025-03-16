

const Form = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1E1E1E] text-white p-6">
        <h1 className="text-2xl font-semibold mb-6">Let's Get You Started!</h1>
  
        {/* Student Details Section */}
        <div className="bg-white text-black p-6 rounded-lg w-full max-w-lg border-t-4 border-red-500 mb-6">
          <h2 className="text-lg font-['Roboto'] mb-4 text-black">General Details</h2>
  
          <div className="flex flex-col gap-4 text-black font-['Roboto']">
            <label>
              Date of Birth *
              <input type="date" className="w-full p-2 mt-1 bg-gray-800 border rounded-md text-white" />
            </label>
  
            <label>
              Level of Education *
              <select className="w-full p-2 mt-1 bg-gray-800 border rounded-md text-white">
                <option>-- Select --</option>
                <option>High School</option>
                <option>Bachelor's</option>
                <option>Master's</option>
              </select>
            </label>
  
            <label>
              Grade *
              <select className="w-full p-2 mt-1 bg-gray-800 border rounded-md text-white">
                <option>-- Select --</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
          
              </select>
            </label>
          </div>
        </div>
  
        {/* Personalization Section */}
        {/* //!Add For Each here */}
     
        <div className="bg-white text-black p-6 rounded-lg w-full max-w-lg border-t-4 border-red-500">
  <h2 className="text-lg font-semibold mb-4">Personalize!</h2>
  <p className="mb-2">What is your primary learning goal?</p>

  <div className="flex flex-col space-y-2 bg-white">
    <label className="flex items-center">
      <input
        type="radio"
        name="goal"
        className="peer hidden"
      />
      <div className="w-5 h-5 border-2 border-black peer-checked:border-black peer-checked:bg-gray-700 rounded-full flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-white rounded-full peer-checked:block"></div>
      </div>
      <span className="ml-2">Option 1</span>
    </label>

    <label className="flex items-center">
      <input type="radio" name="goal" className="peer hidden" />
      <div className="w-5 h-5 border-2 border-black peer-checked:border-black peer-checked:bg-gray-700 rounded-full flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-white rounded-full peer-checked:block"></div>
      </div>
      <span className="ml-2">Option 2</span>
    </label>

    <label className="flex items-center">
      <input type="radio" name="goal" className="peer hidden" />
      <div className="w-5 h-5 border-2 border-black peer-checked:border-black peer-checked:bg-gray-700 rounded-full flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-white rounded-full peer-checked:block"></div>
      </div>
      <span className="ml-2">Option 3</span>
    </label>

    <label className="flex items-center">
      <input type="radio" name="goal" className="peer hidden" />
      <div className="w-5 h-5 border-2 border-black peer-checked:border-black peer-checked:bg-gray-700 rounded-full flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-white rounded-full peer-checked:block"></div>
      </div>
      <span className="ml-2">Option 4</span>
    </label>
  </div>

  <button className="bg-black text-[#FA8072] px-4 py-2 rounded-lg text-lg hover:bg-gray-900 transition duration-300">
  Submit
</button>
</div>



      </div>
    );
  };
  
  export default Form;
  