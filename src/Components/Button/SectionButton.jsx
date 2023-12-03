const SectionButton = ({ name }) => {
    return (
      <div>
        <button className="block mx-auto mb-11 btn btn-outline uppercase border-0 border-b-2 border-gray-800 text-gray-800 hover:text-yellow-600 font-['Inter'] text-base font-medium">
          {name}
        </button>
      </div>
    );
  };
  
  export default SectionButton;
  