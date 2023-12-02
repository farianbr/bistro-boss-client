const Button = ({ name }) => {
  return (
    <div>
      <button className="block mx-auto btn btn-outline uppercase border-0 border-b-2 bg-gray-200 border-yellow-600 text-yellow-600 hover:text-yellow-600 font-['Inter'] text-base font-medium">
        {name}
      </button>
    </div>
  );
};

export default Button;
